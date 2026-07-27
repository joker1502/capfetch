import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "$0",
    period: "/month",
    features: [
      "20 extracts/day (anonymous)",
      "50 extracts/day (signed in)",
      "TikTok, Reels & Shorts",
      "Copy & download transcripts",
    ],
    cta: "Get Started",
    href: "/#tool",
    variant: "outline" as const,
  },
  {
    title: "Pro",
    price: "$12",
    period: "/month",
    features: [
      "Unlimited extracts",
      "AI viral analysis (Phase 2)",
      "Batch export",
      "Priority support",
    ],
    cta: "Subscribe",
    href: "/pricing",
    variant: "default" as const,
    popular: true,
  },
  {
    title: "Business",
    price: "$39",
    period: "/month",
    features: [
      "Everything in Pro",
      "Competitor tracking (Phase 2)",
      "API access (Phase 3)",
      "Dedicated support",
    ],
    cta: "Contact",
    href: "/pricing",
    variant: "outline" as const,
  },
];

export function PricingTeaser() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-lg mx-auto">
          Start for free. Upgrade when you need more.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.title} className={plan.popular ? "border-primary shadow-lg relative" : "flex flex-col"}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href}>
                  <Button variant={plan.variant} className="w-full">
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
