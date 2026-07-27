"""
ClipHub transcription worker.
Polls Supabase for pending tasks, runs yt-dlp + Whisper, updates results.

Usage:
    export SUPABASE_URL=...
    export SUPABASE_ANON_KEY=...
    export SUPABASE_SERVICE_ROLE_KEY=...
    python worker.py
"""

import os
import tempfile
import time
import subprocess
from supabase import create_client, Client

POLL_INTERVAL = 5
WHISPER_MODEL = os.getenv("WHISPER_MODEL", "base")

def get_supabase() -> Client:
    url = os.environ["SUPABASE_URL"]
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY") or os.environ["SUPABASE_ANON_KEY"]
    return create_client(url, key)

def transcribe(video_url: str) -> dict:
    with tempfile.TemporaryDirectory() as tmpdir:
        audio_path = os.path.join(tmpdir, "audio.mp3")

        subprocess.run(
            ["yt-dlp", "-x", "--audio-format", "mp3", "-o", audio_path, video_url],
            check=True, capture_output=True,
        )

        result = subprocess.run(
            ["whisper", audio_path, "--model", WHISPER_MODEL, "--output_dir", tmpdir],
            check=True, capture_output=True, text=True,
        )

        transcript = result.stdout.strip()
        if not transcript:
            txt_path = audio_path.rsplit(".", 1)[0] + ".txt"
            if os.path.exists(txt_path):
                with open(txt_path) as f:
                    transcript = f.read().strip()

    word_count = len(transcript.split()) if transcript else 0

    return {
        "transcript": transcript,
        "word_count": word_count,
        "duration_seconds": None,
    }

def process_tasks(supabase: Client):
    response = supabase.table("Task") \
        .select("*") \
        .eq("status", "pending") \
        .limit(5) \
        .execute()

    for task in response.data:
        task_id = task["id"]
        print(f"[worker] Processing task {task_id}...")

        supabase.table("Task").update({"status": "processing"}).eq("id", task_id).execute()

        try:
            result = transcribe(task["video_url"])

            supabase.table("Task").update({
                "status": "done",
                "transcript": result["transcript"],
                "word_count": result["word_count"],
                "duration_seconds": result["duration_seconds"],
            }).eq("id", task_id).execute()

            supabase.table("Extract").insert({
                "user_id": task.get("user_id"),
                "anonymous_id": task.get("anonymous_id"),
                "platform": task["platform"],
                "video_url": task["video_url"],
                "transcript": result["transcript"],
                "word_count": result["word_count"],
                "duration_seconds": result["duration_seconds"],
            }).execute()

            print(f"[worker] Done task {task_id} ({result['word_count']} words)")

        except Exception as e:
            print(f"[worker] Failed task {task_id}: {e}")
            supabase.table("Task").update({
                "status": "failed",
                "error": str(e),
            }).eq("id", task_id).execute()

def main():
    supabase = get_supabase()
    print(f"[worker] Started (model={WHISPER_MODEL}, poll={POLL_INTERVAL}s)")

    while True:
        try:
            process_tasks(supabase)
        except Exception as e:
            print(f"[worker] Poll error: {e}")
        time.sleep(POLL_INTERVAL)

if __name__ == "__main__":
    main()
