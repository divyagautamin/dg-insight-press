import PageShell, { GlassCard, PreparingNote, notYetPublic } from "@/components/pages/PageShell";
import SmartLink from "@/components/ui/SmartLink";
import { RESEARCH_PAGES_ACTIVE } from "@/lib/links";
import { researchPapers } from "@/data/content";

export const metadata = {
  title: "Academic Research Archive",
  description: "The complete collection of research papers, publications, and academic contributions by Divya Gautam.",
  robots: notYetPublic,
};

export default function ResearchArchivePage() {
  return (
    <PageShell
      eyebrow="Research Portfolio"
      title={<>Academic Research <span className="italic text-[#D4AF37]">Archive</span></>}
      intro="Access the full collection of research papers, publications, and academic contributions."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {researchPapers.map((p) => (
          <SmartLink
            key={p.slug}
            link={{ href: `/research/${p.slug}`, active: RESEARCH_PAGES_ACTIVE }}
            className="group block h-full text-left"
          >
            <GlassCard className="h-full transition-colors duration-500 group-hover:border-[#D4AF37]/60">
              <span className="inline-block rounded-sm bg-[#D4AF37] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">{p.status}</span>
              <h3 className="mt-6 text-[22px] leading-tight text-[#F5F2EB]" style={{ fontFamily: "var(--font-playfair), serif" }}>{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#B5B1A8]">{p.summary}</p>
              <p className="mt-6 text-[12px] text-[#8E8E8E]">{p.journal} • {p.year}</p>
            </GlassCard>
          </SmartLink>
        ))}
      </div>
      <div className="mt-10">
        <PreparingNote text="Full papers, abstracts and citation details will be added to this archive as they are published." />
      </div>
    </PageShell>
  );
}
