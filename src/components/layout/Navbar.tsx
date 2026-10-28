// @ts-nocheck
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { LINKS } from "@/lib/links";
import { softGlow } from "@/lib/glow";

// Desktop menu (same items as before)
const desktopLinks = [
  { name: "Home", link: LINKS.home, section: "home" },
  { name: "About", link: LINKS.about, section: "about" },
  { name: "Research", link: LINKS.research, section: "research" },
  { name: "Books", link: LINKS.books, section: "books" },
  { name: "Publications", link: LINKS.publications, section: "publications" },
  { name: "Contact", link: LINKS.contact, section: "contact" },
];

// Mobile / tablet menu (every section of the page)
const mobileLinks = [
  { name: "Home", link: LINKS.home },
  { name: "About", link: LINKS.about },
  { name: "Vocab Decode", link: LINKS.books },
  { name: "Research", link: LINKS.research },
  { name: "Insights & Essays", link: LINKS.insights },
  { name: "Journey", link: LINKS.journey },
  { name: "Media & Press", link: LINKS.media },
  { name: "FAQ", link: LINKS.support },
  { name: "Contact", link: LINKS.contact },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Thin golden reading-progress line under the navbar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  // Navbar turns into dark glass once the page is scrolled
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open, close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Highlight the desktop menu item of the section on screen
  useEffect(() => {
    const ids = desktopLinks.map((l) => l.section);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-500 border-b ${
          solid
            ? "bg-[#060504]/85 backdrop-blur-md border-[#D4AF37]/15 shadow-[0_10px_40px_rgba(0,0,0,0.55)]"
            : "bg-gradient-to-b from-black/80 via-black/45 to-transparent border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] md:h-20 max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">

          {/* Logo: gold monogram + wordmark */}
          <Link href={LINKS.home.href} className="group flex items-center gap-3" onClick={() => setOpen(false)} aria-label="DG Insight Press — Home">
            <span className="relative flex h-10 w-[54px] md:h-11 md:w-[60px] items-center justify-center">
              <span className="absolute inset-[-40%] pointer-events-none opacity-70 transition-opacity duration-500 group-hover:opacity-100" style={{ background: softGlow(0.22) }} />
              <img src="/brand/dg-monogram.webp" alt="" width={213} height={120} className="relative h-auto w-full drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]" />
            </span>
            <span className="h-8 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
            <span className="flex flex-col leading-none">
              <span
                className="bg-gradient-to-r from-[#F7E08E] via-[#D4AF37] to-[#B8892B] bg-clip-text text-[18px] md:text-[20px] tracking-[0.28em] text-transparent"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                DG
              </span>
              <span className="mt-1.5 text-[8.5px] md:text-[9.5px] uppercase tracking-[0.38em] text-[#9A958B] transition-colors duration-300 group-hover:text-[#D9D4C9]">
                Insight Press
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Main">
            {desktopLinks.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <Link
                  key={item.name}
                  href={item.link.href}
                  className={`group relative px-3 xl:px-4 py-2 text-[12px] uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[#F3D98A] ${
                    isActive ? "text-[#F3D98A]" : "text-[#BDB8AE]"
                  }`}
                >
                  {item.name}
                  {/* golden line + diamond under the active / hovered item */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-all duration-500 ${
                      isActive ? "w-[80%] opacity-100" : "w-0 opacity-0 group-hover:w-[60%] group-hover:opacity-70"
                    }`}
                  />
                  <span
                    className={`absolute -bottom-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.9)] transition-all duration-500 ${
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button with a light sweep on hover */}
          <Link
            href={LINKS.books.href}
            className="group relative hidden overflow-hidden rounded-full border border-[#D4AF37]/70 px-6 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[#F3D98A] shadow-[0_0_18px_rgba(212,175,55,0.12),inset_0_0_12px_rgba(212,175,55,0.08)] transition-all duration-500 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_28px_rgba(212,175,55,0.4)] lg:block"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]" />
            <span className="relative">Explore</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full border text-[#D4AF37] transition-all duration-300 lg:hidden ${
              open ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_16px_rgba(212,175,55,0.35)]" : "border-[#D4AF37]/40 hover:border-[#D4AF37]/80"
            }`}
          >
            <span className={`absolute h-px w-[18px] bg-[#D4AF37] transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute h-px bg-[#D4AF37] transition-all duration-300 ${open ? "w-0 opacity-0" : "w-[12px] translate-x-[3px] opacity-100"}`} />
            <span className={`absolute h-px w-[18px] bg-[#D4AF37] transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>

        </div>

        {/* Reading progress */}
        <motion.span
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#8a6a1f] via-[#F3D27A] to-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.7)]"
        />
      </header>

      {/* ==========================================
          MOBILE / TABLET MENU
      ========================================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050403]/[0.97] pt-[68px] md:pt-20"
          >
            {/* Soft golden glow */}
            <div
              className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px]"
              style={{ background: softGlow(0.144, "circle") }}
            />

            <nav className="relative h-full overflow-y-auto px-6 md:px-10 pb-10" aria-label="Mobile">
              <ul className="mt-6 md:mt-10">
                {mobileLinks.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.04 * i }}
                    className="border-b border-[#D4AF37]/10"
                  >
                    <Link
                      href={item.link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 py-3.5 md:py-4"
                    >
                      <span className="w-6 font-mono text-[10px] text-[#D4AF37]/60">{String(i + 1).padStart(2, "0")}</span>
                      <span
                        className="text-[26px] md:text-[32px] text-[#F5F2EB] transition-colors duration-300 group-hover:text-[#D4AF37] group-active:text-[#D4AF37]"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="mt-8"
              >
                <Link
                  href={LINKS.contact.href}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-sm bg-[#D4AF37] py-3.5 text-center text-[14px] font-semibold tracking-wide text-black shadow-[0_0_24px_rgba(212,175,55,0.3)]"
                >
                  Reserve a Signed Copy
                </Link>
                <p className="mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-[#8E8E8E]">
                  Think Clearly • Write Precisely • Serve Honestly
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
