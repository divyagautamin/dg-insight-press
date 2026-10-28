// @ts-nocheck
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LINKS } from "@/lib/links";

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

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-[#D4AF37]/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] md:h-20 max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">

          {/* Logo */}
          <Link href={LINKS.home.href} className="flex flex-col leading-none" onClick={() => setOpen(false)} aria-label="DG Insight Press — Home">
            <span
              className="text-[22px] md:text-2xl tracking-[0.20em] text-[#D4AF37]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              DG
            </span>

            <span className="mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-[#8E8E8E]">
              Insight Press
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
            {desktopLinks.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <Link
                  key={item.name}
                  href={item.link.href}
                  className={`relative text-sm transition hover:text-[#D4AF37] ${isActive ? "text-[#F5F2EB]" : "text-[#C9C9C9]"}`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-[#D4AF37] transition-all duration-500 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Link
            href={LINKS.books.href}
            className="hidden rounded-md border border-[#D4AF37] px-6 py-2 text-sm font-medium text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black lg:block"
          >
            Explore
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-10 w-10 items-center justify-center rounded-md border border-[#D4AF37]/30 text-[#D4AF37] transition-colors hover:border-[#D4AF37]/70 lg:hidden"
          >
            <span className={`absolute h-px w-5 bg-[#D4AF37] transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[6px]"}`} />
            <span className={`absolute h-px w-5 bg-[#D4AF37] transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-px w-5 bg-[#D4AF37] transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[6px]"}`} />
          </button>

        </div>
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
            className="fixed inset-0 z-40 lg:hidden bg-[#050403]/97 backdrop-blur-xl pt-[68px] md:pt-20"
          >
            {/* Soft golden glow */}
            <div
              className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px]"
              style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0) 65%)" }}
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
