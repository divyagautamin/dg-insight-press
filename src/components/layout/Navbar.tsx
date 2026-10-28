// @ts-nocheck
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#D4AF37]/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-2xl tracking-[0.20em] text-[#D4AF37]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            DG
          </span>

          <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#8E8E8E]">
            Insight Press
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 lg:flex">

          <Link href="/" className="text-sm text-[#F5F2EB] transition hover:text-[#D4AF37]">
            Home
          </Link>

          <Link href="#about" className="text-sm text-[#C9C9C9] transition hover:text-[#D4AF37]">
            About
          </Link>

          <Link href="#research" className="text-sm text-[#C9C9C9] transition hover:text-[#D4AF37]">
            Research
          </Link>

          <Link href="#books" className="text-sm text-[#C9C9C9] transition hover:text-[#D4AF37]">
            Books
          </Link>

          <Link href="#publications" className="text-sm text-[#C9C9C9] transition hover:text-[#D4AF37]">
            Publications
          </Link>

          <Link href="#contact" className="text-sm text-[#C9C9C9] transition hover:text-[#D4AF37]">
            Contact
          </Link>

        </nav>

        {/* CTA Button */}
        <button className="hidden rounded-md border border-[#D4AF37] px-6 py-2 text-sm font-medium text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black lg:block">
          Explore
        </button>

        {/* Mobile Menu Icon */}
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-[#D4AF37]/30 text-[#D4AF37] lg:hidden">
          ☰
        </button>

      </div>
    </header>
  );
}