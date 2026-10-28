import PageShell, { GlassCard, PreparingNote, notYetPublic } from "@/components/pages/PageShell";
import authorPortrait from "@/assets/author/author.webp";

export const metadata = {
  title: "Full Profile",
  description: "The full academic and professional profile of Divya Gautam — author, researcher and founder of DG Insight Press.",
  robots: notYetPublic,
};

const highlights = [
  "Author of a 550+ page vocabulary reference work",
  "Four completed research papers across language and policy",
  "Scholar of public affairs with an academic publishing record",
  "Committed to rigorous, evidence-based intellectual writing",
];

export default function ProfilePage() {
  return (
    <PageShell
      eyebrow="Full Profile"
      title={<>Divya <span className="italic text-[#D4AF37]">Gautam</span></>}
      intro="Author • Researcher • Analyst • Civil Services Aspirant • Founder, DG Insight Press"
    >
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 aspect-[4/5] md:aspect-[4/5]">
          <img src={authorPortrait.src} alt="Divya Gautam" className="absolute inset-0 h-full w-full object-cover object-[56%_40%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent" />
        </div>
        <GlassCard>
          <p className="text-[15px] font-light leading-[1.9] text-[#D2CEC5]">
            Divya Gautam approaches language the way an administrator approaches policy — with structure, evidence, and an
            unwavering commitment to clarity. His work sits at the intersection of literary scholarship and public
            administration, built on the conviction that command of language is the foundation of command of thought.
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map((t) => (
              <li key={t} className="flex items-start gap-4">
                <span className="mt-[3px] font-serif text-[18px] leading-none text-[#D4AF37]">§</span>
                <span className="text-[14px] leading-relaxed text-[#E0DCD3]">{t}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
      <div className="mt-10">
        <PreparingNote text="A detailed profile — education, research work, publications and speaking engagements — is being prepared and will appear here soon." />
      </div>
    </PageShell>
  );
}
