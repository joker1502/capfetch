import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is ClipHub free?",
    answer: "Yes. You get 20 free extracts per day without registration, and 50 per day when you sign in.",
    value: "item-1",
  },
  {
    question: "Which platforms are supported?",
    answer: "ClipHub supports TikTok, Instagram Reels, and YouTube Shorts.",
    value: "item-2",
  },
  {
    question: "Do I need to create an account?",
    answer: "No. You can use ClipHub without an account. Signing in increases your daily limit to 50 extracts.",
    value: "item-3",
  },
  {
    question: "How accurate is the transcription?",
    answer: "The transcription accuracy depends on the audio quality of the video. For most videos, the accuracy is very high.",
    value: "item-4",
  },
];

export function LandingFAQ() {
  return (
    <section id="faq" className="w-full max-w-2xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Frequently Asked{" "}
        <span className="text-brand">
          Questions
        </span>
      </h2>
      <Accordion className="w-full">
        {faqItems.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
