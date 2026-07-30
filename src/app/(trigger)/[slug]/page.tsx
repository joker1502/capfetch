import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { triggerPages } from "@/lib/trigger-pages";
import { ToolPage } from "@/components/ToolPage";

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return triggerPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = triggerPages.find((p) => p.slug === slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.basePath },
  };
}

export default async function TriggerPage({ params }: Props) {
  const { slug } = await params;
  const page = triggerPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <ToolPage
      title={page.title}
      description={page.description}
      howToSteps={page.howToSteps}
      benefits={page.benefits}
    />
  );
}
