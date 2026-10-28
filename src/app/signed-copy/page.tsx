import Link from "next/link";
import PageShell, { GlassCard, notYetPublic } from "@/components/pages/PageShell";
import { LINKS, CONTACT } from "@/lib/links";
import reviewBook from "@/assets/media/review_book.webp";
import stamp from "@/assets/media/stamp.webp";

export const metadata = {
  title: "Personally Signed Copy",
  description: "Reserve a personally signed first edition of Vocab Decode by Divya Gautam.",
  robots: notYetPublic,
};

const steps = [
  { n: "01", t: "Send a request", d: "Use the contact form with the subject “Signed Copy” and your delivery city." },
  { n: "02", t: "Confirmation", d: "You will receive availability, price and payment details by email." },
  { n: "03", t: "Signed & shipped", d: "Your copy is personally signed and dispatched, with tracking shared by email." },
];

export default function SignedCopyPage() {
  return (
    <PageShell
      eyebrow="Limited Availability"
      title={<>Reserve Your <span className="italic text-[#D4AF37]">Personally Signed Copy</span></>}
      intro="A limited number of first-edition copies are personally signed by Divya Gautam."
    >
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="relative mx-auto w-full max-w-[380px]">
          <img src={reviewBook.src} alt="Vocab Decode signed edition" className="w-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)]" />
          <img src={stamp.src} alt="" className="absolute -bottom-4 right-0 w-[110px] md:w-[130px] drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]" />
        </div>
        <div className="space-y-4">
          {steps.map((s) => (
            <GlassCard key={s.n} className="!p-5 md:!p-6">
              <div className="flex gap-5">
                <span className="text-[26px] leading-none text-[#D4AF37]" style={{ fontFamily: "var(--font-playfair), serif" }}>{s.n}</span>
                <div>
                  <h3 className="text-[18px] text-[#F5F2EB]" style={{ fontFamily: "var(--font-playfair), serif" }}>{s.t}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[#B5B1A8]">{s.d}</p>
                </div>
              </div>
            </GlassCard>
          ))}
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Link href={LINKS.contact.href} className="rounded-sm bg-[#D4AF37] px-8 py-3.5 text-center text-[14px] font-semibold text-black shadow-[0_0_24px_rgba(212,175,55,0.3)] transition hover:bg-[#f0cf67]">
              Request a Signed Copy →
            </Link>
            <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Signed Copy — Vocab Decode")}`} className="rounded-sm border border-[#D4AF37] px-8 py-3.5 text-center text-[14px] font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10">
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
