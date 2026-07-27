"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import type { User } from "@supabase/supabase-js";

export function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      setReady(true);
      return;
    }

    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    setReady(true);
    return () => subscription.unsubscribe();
  }, []);

  if (!ready) return null;

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
          {user.email}
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={async () => {
            await createClient().auth.signOut();
          }}
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Link href="/login">
      <Button variant="default" size="sm">Sign In</Button>
    </Link>
  );
}
