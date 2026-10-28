import { notFound } from "next/navigation";
import PageShell, { GlassCard, PreparingNote, notYetPublic } from "@/components/pages/PageShell";
import { researchPapers } from "@/data/content";

export function generateStaticParams() {
  return researchPapers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const paper = researchPapers.find((p) => p.slug === slug);
  return { title: paper?.title ?? "Research Paper", description: paper?.summary, robots: notYetPublic };
}

export default async function ResearchPaperPage({ params }) {
  const { slug } = await params;
  const paper = researchPapers.find((p) => p.slug === slug);
  if (!paper) notFound();

  return (
    <PageShell
      eyebrow="Research Paper"
      title={paper.title}
      status={`Status: ${paper.status}`}
      intro={paper.summary}
      backLink={{ href: "/#research", label: "Back to Research" }}
    >
      <GlassCard>
        <dl className="grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Journal</dt>
            <dd className="mt-2 text-[15px] text-[#F5F2EB]">{paper.journal}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Year</dt>
            <dd className="mt-2 text-[15px] text-[#F5F2EB]">{paper.year}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Author</dt>
            <dd className="mt-2 text-[15px] text-[#F5F2EB]">Divya Gautam</dd>
          </div>
        </dl>
      </GlassCard>
      <div className="mt-8">
        <PreparingNote text="The abstract and full paper will be published here once the review process is complete." />
      </div>
    </PageShell>
  );
}
