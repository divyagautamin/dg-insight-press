import PageShell, { GlassCard, notYetPublic } from "@/components/pages/PageShell";
import SmartLink from "@/components/ui/SmartLink";
import { ESSAY_PAGES_ACTIVE } from "@/lib/links";
import { essays } from "@/data/content";

export const metadata = {
  title: "Insights & Essays",
  description: "A curated archive of scholarly reflections on language, public policy, and the administrative intellect.",
  robots: notYetPublic,
};

export default function InsightsArchivePage() {
  return (
    <PageShell
      eyebrow="Insights & Essays"
      title={<>Ideas that <span className="italic text-[#D4AF37]">Shape Institutions</span></>}
      intro="A curated archive of scholarly reflections on language, public policy, and the administrative intellect—designed for those who govern and those who aspire."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {essays.map((e) => (
          <SmartLink key={e.slug} link={{ href: `/insights/${e.slug}`, active: ESSAY_PAGES_ACTIVE }} className="group block h-full text-left">
            <GlassCard className="h-full transition-colors duration-500 group-hover:border-[#D4AF37]/60">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E8E]">{e.date}{e.category ? ` • ${e.category}` : ""}</p>
              <h3 className="mt-3 text-[24px] leading-tight text-[#F5F2EB]" style={{ fontFamily: "var(--font-playfair), serif" }}>{e.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#B5B1A8]">{e.summary}</p>
              <span className="mt-6 inline-block text-[12px] uppercase tracking-[0.2em] text-[#D4AF37]">Read →</span>
            </GlassCard>
          </SmartLink>
        ))}
      </div>
    </PageShell>
  );
}
