import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string
  answer: string
}

interface ToolPageProps {
  title: string
  description: string
  howToSteps: string[]
  benefits: { title: string; desc: string }[]
  faq?: FaqItem[]
  relatedLinks?: { label: string; href: string }[]
}

export function ToolPage({ title, description, howToSteps, benefits, faq, relatedLinks }: ToolPageProps) {
  const faqSchema = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <div className="mx-auto max-w-3xl px-4 pt-16 pb-24">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{description}</p>

      {/* How to use */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">How to Use This Tool</h2>
        <ol className="mt-6 space-y-4">
          {howToSteps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand text-white text-sm font-bold">
                {i + 1}
              </span>
              <span className="pt-1 text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Why Use CapFetch</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border p-4">
              <h3 className="font-medium text-sm mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <h2 className="text-xl font-semibold">Ready to try it?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Free to use. No registration required.
        </p>
        <Link href="/" className={cn(buttonVariants({ size: "lg", className: "mt-4" }))}>
          Extract Captions Free &rarr;
        </Link>
      </section>

      {/* Related Tools */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border p-4 text-sm font-medium hover:bg-muted transition-colors"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-brand">Questions</span>
          </h2>
          <Accordion className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}
    </div>
  );
}
