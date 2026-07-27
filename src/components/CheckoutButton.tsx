"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CheckoutButton({ priceId, label }: { priceId: string; label: string }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    const apiKey = process.env.NEXT_PUBLIC_CREEM_API_KEY;
    if (!apiKey) {
      window.location.href = "/pricing";
      return;
    }

    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });

    if (!res.ok) {
      setLoading(false);
      return;
    }

    const { url } = await res.json();
    if (url) window.location.href = url;
  };

  return (
    <Button className="w-full" onClick={handleClick} disabled={loading}>
      {loading ? "Redirecting..." : label}
    </Button>
  );
}
