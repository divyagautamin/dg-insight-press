import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LINKS } from "@/lib/links";
import { softGlow } from "@/lib/glow";

// ==========================================================================
// PageShell — the shared look for every separate page of the website
// (book page, research papers, essays, media, legal pages ...).
// ==========================================================================

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  status?: string; // e.g. "Coming soon" — shown as a small golden badge
  backLink?: { href: string; label: string };
  children?: React.ReactNode;
};

export default function PageShell({ eyebrow, title, intro, status, backLink, children }: Props) {
  const back = backLink ?? { href: LINKS.home.href, label: "Back to Home" };

  return (
    <main className="min-h-screen bg-[#050403] text-white overflow-x-hidden">
      <Navbar />

      <section className="relative overflow-hidden pt-[120px] md:pt-[150px] lg:pt-[170px] pb-20 md:pb-28">
        {/* Ambient golden glows */}
        <div
          className="pointer-events-none absolute -left-40 top-10 h-[600px] w-[600px]"
          style={{ background: softGlow(0.108, "circle") }}
        />
        <div
          className="pointer-events-none absolute -right-48 top-[30%] h-[520px] w-[520px]"
          style={{ background: softGlow(0.072, "circle") }}
        />

        <div className="relative z-10 mx-auto max-w-[1100px] px-5 md:px-10">
          <Link
            href={back.href}
            className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#A0A0A0] transition-colors hover:text-[#D4AF37]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span> {back.label}
          </Link>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">{eyebrow}</p>
          </div>

          <h1
            className="mt-6 text-[38px] leading-[1.1] text-[#F5F2EB] md:text-[56px] lg:text-[68px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {title}
          </h1>

          {status && (
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.9)]" />
              {status}
            </span>
          )}

          {intro && (
            <p className="mt-8 max-w-2xl text-[15px] font-light leading-[1.8] text-[#C4C0B7] md:text-[17px]">{intro}</p>
          )}

          <div className="mt-8 h-px w-full bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/10 to-transparent" />

          {children && <div className="mt-12">{children}</div>}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// A premium glass card used inside the pages
export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#110e0a]/80 to-[#050403]/95 p-6 md:p-8 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] ${className}`}
    >
      <span className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
      {children}
    </div>
  );
}

// Note shown on pages whose full content is still being prepared
export function PreparingNote({ text }: { text: string }) {
  return (
    <GlassCard>
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">In Preparation</p>
          <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#C4C0B7]">{text}</p>
        </div>
        <Link
          href={LINKS.contact.href}
          className="shrink-0 rounded-sm border border-[#D4AF37] px-6 py-3 text-[13px] font-semibold tracking-wide text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"
        >
          Get in Touch →
        </Link>
      </div>
    </GlassCard>
  );
}

// Robots setting for pages that are not public yet
export const notYetPublic = { index: false, follow: true };
