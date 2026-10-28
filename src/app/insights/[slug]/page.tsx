import { notFound } from "next/navigation";
import PageShell, { PreparingNote, notYetPublic } from "@/components/pages/PageShell";
import { essays } from "@/data/content";

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);
  return { title: essay?.title ?? "Essay", description: essay?.summary, robots: notYetPublic };
}

export default async function EssayPage({ params }) {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);
  if (!essay) notFound();

  return (
    <PageShell
      eyebrow={essay.category ? `Essay • ${essay.category}` : "Essay"}
      title={essay.title}
      intro={essay.summary}
      status={[essay.date, essay.readTime].filter(Boolean).join(" • ")}
      backLink={{ href: "/#insights", label: "Back to Insights" }}
    >
      {/* When the essay is ready, write its paragraphs inside this <article>. */}
      <article className="max-w-3xl text-[16px] font-light leading-[1.95] text-[#D2CEC5]" />
      <PreparingNote text="The full essay will be published here soon." />
    </PageShell>
  );
}
