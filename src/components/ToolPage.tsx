import { ExtractionForm } from "./ExtractionForm";
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
  platform: "tiktok" | "reels" | "shorts"
  faq?: FaqItem[]
}

export function ToolPage({ title, description, platform, faq }: ToolPageProps) {
  const faqSchema = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <div className="container mx-auto flex flex-col items-center px-4 py-16">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <h1 className="text-center text-4xl font-bold tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
        {description}
      </p>
      <div className="mt-10 w-full max-w-xl">
        <ExtractionForm defaultPlatform={platform} />
      </div>

      {faq && (
        <section className="mt-16 w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Questions
            </span>
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
