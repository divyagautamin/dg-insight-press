import Link from "next/link";
import PageShell, { GlassCard, notYetPublic } from "@/components/pages/PageShell";
import { LINKS } from "@/lib/links";
import bookCover from "@/assets/media/review_book.webp";

export const metadata = {
  title: "Vocab Decode",
  description: "Vocab Decode — a 550+ page comprehensive vocabulary reference by Divya Gautam, built on etymology, root families and contextual usage.",
  robots: notYetPublic,
};

const features = [
  "Etymological breakdowns for deeper retention",
  "Curated for competitive examinations",
  "Contextual usage across registers",
  "Structured for daily, sustained practice",
];

export default function VocabDecodePage() {
  return (
    <PageShell
      eyebrow="The Literary Showcase"
      title={<>Vocab <span className="italic text-[#D4AF37]">Decode</span></>}
      intro="550+ Pages • Comprehensive Vocabulary Reference"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute inset-0 scale-90 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <img src={bookCover.src} alt="Vocab Decode book" className="relative w-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)]" />
        </div>
        <div>
          <p className="text-[15px] font-light leading-[1.9] text-[#D2CEC5]">
            Vocab Decode is an exhaustive lexical compendium engineered for the discerning reader — structured to demystify the
            etymological architecture of the English language and equip aspirants, scholars, and connoisseurs of prose with a
            formidable command of vocabulary. Every entry is curated for precision, pedagogical clarity, and enduring reference value.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-[3px] font-serif text-[18px] leading-none text-[#D4AF37]">§</span>
                <span className="text-[14px] leading-relaxed text-[#E0DCD3]">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={LINKS.contact.href} className="rounded-sm bg-[#D4AF37] px-8 py-3.5 text-center text-[14px] font-semibold text-black shadow-[0_0_24px_rgba(212,175,55,0.3)] transition hover:bg-[#f0cf67]">
              Reserve a Signed Copy
            </Link>
            <Link href={LINKS.support.href} className="rounded-sm border border-[#D4AF37] px-8 py-3.5 text-center text-[14px] font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10">
              Read the FAQ
            </Link>
          </div>
        </div>
      </div>
      <GlassCard className="mt-14">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Coming to this page</p>
        <p className="mt-2 text-[14px] leading-relaxed text-[#C4C0B7]">
          Sample pages, the table of contents, price and ordering details will be added here soon.
        </p>
      </GlassCard>
    </PageShell>
  );
}
