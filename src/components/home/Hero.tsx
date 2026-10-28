// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import SmartLink from "@/components/ui/SmartLink";
import { LINKS } from "@/lib/links";
import SunGlow from "@/components/ui/SunGlow";
import { softGlow } from "@/lib/glow";

// ==========================================
// IMAGE IMPORTS (From src/assets/...)
// ==========================================
import authorPortrait from "@/assets/author/author.webp";
import heroTopDesktop from "@/assets/desktop/hero_top_desktop.webp";
import heroBottomDesktop from "@/assets/desktop/hero_bottom_desktop.webp";
import heroTopTablet from "@/assets/tablet/hero_top_tablet.webp";
import heroBottomTablet from "@/assets/tablet/hero_bottom_tablet.webp";
import heroTopMobile from "@/assets/mobile/hero_top_mobile.webp";
import heroBottomMobile from "@/assets/mobile/hero_bottom_mobile.webp";
import dgLogoGolden from "@/assets/icons/dg_logo_golden.webp";
import bookCover from "@/assets/media/review_book.webp";
import bookCollection from "@/assets/media/support_book.webp";

/* ==========================================================
   RESPONSIVE LAYOUT
   Mobile / small tablet (< 768px): full-width cinematic portrait,
       soft faded edges, golden glow, light sweep, sparkles;
       text rises over the portrait's bottom fade
   Tablet (768-1023px): desktop-like — text left, portrait right
   Desktop (1024px+): same layout as before
   Knobs: base = mobile, md: = tablet, lg: = desktop
========================================================== */

// Small 4-point twinkling star
function Sparkle({ className = "", size = 10, delay = 0 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={`absolute pointer-events-none opacity-0 animate-[dg-twinkle_3.5s_ease-in-out_infinite] ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <path
        d="M12 0 C12.8 7 17 11.2 24 12 C17 12.8 12.8 17 12 24 C11.2 17 7 12.8 0 12 C7 11.2 11.2 7 12 0Z"
        fill="#F5D77A"
        style={{ filter: "drop-shadow(0 0 4px rgba(212,175,55,0.9))" }}
      />
    </svg>
  );
}

// Golden dust particles, animated by CSS on the GPU (smooth, no lag).
// Positions are generated once, so the page stays fast and stable.
function makeDust(count, seed, sizeMax, drift) {
  let x = seed;
  const rnd = () => ((x = (x * 9301 + 49297) % 233280) / 233280);
  return Array.from({ length: count }, () => ({
    size: rnd() * sizeMax + 1,
    left: rnd() * 100,
    top: rnd() * 100,
    dx: (rnd() - 0.5) * drift,
    duration: 6 + rnd() * 6,
    delay: -rnd() * 10,
  }));
}
const heroDust = makeDust(15, 7, 3, 40);
const legacyDust = makeDust(20, 23, 2, 24);

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="relative w-full lg:min-h-[230vh] bg-[#050403] overflow-x-hidden flex flex-col lg:justify-between pt-20 md:pt-32 lg:pt-32 pb-20 md:pb-24 lg:pb-[150px] font-sans">
      
      {/* ===========================
          PREMIUM BACKGROUND & EFFECTS
      =========================== */}
      <div className="absolute inset-0 w-full h-full z-0">
        
        {/* Desktop Background */}
        <div className="absolute inset-0 hidden lg:flex lg:flex-col gap-4">
          <div className="w-full h-[100vh] shrink-0 bg-cover bg-bottom bg-no-repeat opacity-40 mix-blend-luminosity" style={{ backgroundImage: `url(${heroTopDesktop.src})` }} />
          <div className="w-full flex-1 -mt-[2px] bg-[length:100%_100%] bg-top bg-no-repeat opacity-90" style={{ backgroundImage: `url(${heroBottomDesktop.src})` }} />
        </div>

        {/* Tablet Background */}
        <div className="absolute inset-0 hidden md:flex md:flex-col lg:hidden gap-4">
          <div className="w-full h-1/2 bg-cover bg-bottom bg-no-repeat opacity-40 mix-blend-luminosity" style={{ backgroundImage: `url(${heroTopTablet.src})` }} />
          <div className="w-full h-1/2 bg-cover bg-top bg-no-repeat opacity-60" style={{ backgroundImage: `url(${heroBottomTablet.src})` }} />
        </div>

        {/* Mobile Background */}
        <div className="absolute inset-0 flex flex-col md:hidden gap-2">
          <div className="w-full h-1/2 bg-cover bg-bottom bg-no-repeat opacity-40 mix-blend-luminosity" style={{ backgroundImage: `url(${heroTopMobile.src})` }} />
          <div className="w-full h-1/2 bg-cover bg-top bg-no-repeat opacity-60" style={{ backgroundImage: `url(${heroBottomMobile.src})` }} />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center,transparent 20%,rgba(0,0,0,.18) 70%,rgba(0,0,0,.55) 100%)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050403] via-[#050403]/60 to-transparent" />
        
        {/* Gold Ambient Glows */}
        <div className="absolute -left-40 top-20 h-[700px] w-[700px] pointer-events-none z-0" style={{ background: softGlow(0.1) }} />
        <div className="absolute right-[-200px] top-[-120px] h-[650px] w-[650px] pointer-events-none z-0" style={{ background: softGlow(0.1) }} />

        {/* Floating Golden Dust */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden">
            {heroDust.map((d, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-[#D4AF37] blur-[0.4px] shadow-[0_0_14px_rgba(212,175,55,.9)] will-change-transform"
                style={{
                  width: d.size,
                  height: d.size,
                  left: `${d.left}%`,
                  top: `${d.top}%`,
                  opacity: 0,
                  "--dx": `${d.dx}px`,
                  "--dy": "-80px",
                  animation: `dg-dust ${d.duration}s ease-in-out ${d.delay}s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===========================
          MAIN CONTENT (TEXT & PORTRAIT)
      =========================== */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-12 flex flex-col md:flex-row md:items-center lg:items-start lg:flex-1 justify-between">
        
        {/* Left: Typography Block Container */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          // MASTER CONTROL FOR LEFT BLOCK (Move entire left section)
          // Mobile: negative top margin pulls the text up over the portrait's bottom fade
          className="relative lg:absolute z-20 lg:z-auto w-full md:w-[56%] lg:w-[55%] flex flex-col -mt-24 sm:-mt-36 md:mt-0 lg:left-12 lg:top-[20%] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[-64px]"
        >
          {/* Subtitle Control */}
          <h3 className="font-semibold uppercase tracking-[0.18em] md:tracking-[0.25em] lg:tracking-[0.3em] max-lg:leading-[1.9] max-lg:drop-shadow-[0_0_10px_rgba(212,175,55,0.45)] text-[#D4AF37] mb-4 md:mb-6 lg:mb-16 text-[10px] md:text-[11px] lg:text-[12px] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-150px]">
            AUTHOR • RESEARCHER • ADMINISTRATIVE SCHOLAR
          </h3>

          {/* Main Heading Control */}
          <h1 
            className="font-normal text-[#F8F5EE] leading-[1.12] text-[38px] sm:text-[44px] md:text-[46px] lg:text-[58px] [word-spacing:1px] md:[word-spacing:4px] lg:[word-spacing:8px] max-lg:drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-200px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            The discipline of <br /> language, <br />
            the{" "}
            <span
              className="italic pr-1 text-transparent bg-clip-text bg-[length:200%_auto] drop-shadow-[0_0_18px_rgba(212,175,55,0.35)] animate-[dg-shine_5s_linear_infinite]"
              style={{ backgroundImage: "linear-gradient(90deg, #C9A032 0%, #F7E08E 25%, #D4AF37 50%, #F7E08E 75%, #C9A032 100%)" }}
            >
              ambition
            </span>{" "}
            <br />
            of service.
          </h1>

          {/* Decorative Golden Line Control */}
          <hr className="w-[70px] border-t-[2px] border-[#D4AF37] opacity-100 relative z-50 mt-6 md:mt-7 lg:mt-0 max-lg:shadow-[0_0_12px_rgba(212,175,55,0.7)] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-180px]" />

          {/* Paragraph Control */}
          <p className="mt-6 md:mt-7 lg:mt-8 max-w-xl font-light leading-[1.8] text-[#A5A5A5] max-lg:text-[#CFCBC2] text-[15px] md:text-[15px] lg:text-[15px] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-190px]">
            Divya Gautam is an author and intellectual analyst devoted to the <br className="hidden lg:block" />
            precision of language and the rigour of public <br className="hidden lg:block" />
            thought — combining literary craftsmanship with an <br className="hidden lg:block" />
            administrative sensibility shaped for institutions that demand both.
          </p>

          {/* Buttons Control — Mobile: both buttons equal width in one row */}
          <div className="mt-8 md:mt-9 lg:mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:gap-5 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-210px]">
            <Link href={LINKS.about.href} className="text-center rounded-sm bg-[#D4AF37] px-3 sm:px-8 md:px-6 lg:px-8 py-3.5 text-[13px] sm:text-[14px] font-semibold tracking-wide text-black transition-all hover:bg-[#f0cf67] hover:shadow-[0_0_35px_rgba(212,175,55,.45)] max-lg:shadow-[0_0_24px_rgba(212,175,55,.35)]">
              Explore Full Work
            </Link>
            <SmartLink link={LINKS.profile} className="text-center rounded-sm border border-[#D4AF37] bg-transparent max-lg:bg-black/40 max-lg:backdrop-blur-sm px-3 sm:px-8 md:px-6 lg:px-8 py-3.5 text-[13px] sm:text-[14px] font-semibold tracking-wide text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10">
              View Full Profile
            </SmartLink>
          </div>
        </motion.div>

        {/* Right: Portrait Image Control (Move entire image block)
            Mobile: full-width on top | Tablet: right side | Desktop: same as before */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative lg:absolute order-first md:order-none max-md:-mx-5 max-md:w-[calc(100%+2.5rem)] md:w-[50%] md:-ml-[6%] lg:ml-0 lg:w-auto lg:flex-1 flex justify-center md:justify-end lg:justify-start lg:right-12 lg:bottom-[10%] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[50px] lg:translate-y-[-380px]"
        >
          <div className="relative w-full max-lg:overflow-hidden aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] lg:aspect-auto lg:h-[1000px] lg:w-[750px]">

            {/* Portrait image (cover on mobile/tablet, contain on desktop) */}
            <img
              src={authorPortrait.src} 
              alt="Divya Gautam"
              className="absolute inset-0 w-full h-full object-cover object-[56%_40%] lg:object-contain lg:object-bottom max-lg:contrast-[1.05] drop-shadow-[0_0_40px_rgba(0,0,0,0.8)] select-none pointer-events-none"
            />

            {/* Mobile/Tablet: soft pulsing golden glow over the portrait */}
            <div
              className="absolute inset-0 z-10 pointer-events-none lg:hidden animate-[dg-breathe_8s_ease-in-out_infinite]"
              style={{ background: softGlow(0.2, "ellipse 70% 55% at 56% 40%", "255,214,140"), mixBlendMode: "soft-light" }}
            />

            {/* Mobile/Tablet: light sweep passing across the portrait */}
            <div
              className="absolute inset-y-0 left-0 w-1/3 z-10 pointer-events-none lg:hidden will-change-transform animate-[dg-sweep_13s_ease-in-out_infinite]"
              style={{ background: "linear-gradient(100deg, transparent 0%, rgba(255,230,160,0.12) 50%, transparent 100%)" }}
            />

            {/* Mobile fade: all four edges melt into the background */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none md:hidden"
              style={{ background: "linear-gradient(to top, #050403 0%, rgba(5,4,3,0.95) 16%, rgba(5,4,3,0.6) 32%, rgba(5,4,3,0) 55%), linear-gradient(to bottom, #050403 0%, rgba(5,4,3,0) 22%), linear-gradient(to right, rgba(5,4,3,0.85) 0%, rgba(5,4,3,0) 16%, rgba(5,4,3,0) 84%, rgba(5,4,3,0.85) 100%)" }}
            />
            {/* Tablet fade: strong left edge so the photo blends behind the text */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none hidden md:block lg:hidden"
              style={{ background: "linear-gradient(to right, #050403 0%, rgba(5,4,3,0.6) 22%, rgba(5,4,3,0) 50%), linear-gradient(to top, #050403 0%, rgba(5,4,3,0) 30%), linear-gradient(to bottom, #050403 0%, rgba(5,4,3,0) 25%), linear-gradient(to left, rgba(5,4,3,0.7) 0%, rgba(5,4,3,0) 15%)" }}
            />
            {/* Desktop fade: same as before */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
              style={{ background: "linear-gradient(to top, #050403 0%, transparent 35%), linear-gradient(to bottom, #050403 0%, transparent 35%), linear-gradient(to right, #050403 0%, transparent 45%)" }}
            />


            {/* Mobile/Tablet: twinkling sparkles */}
            {isMounted && (
              <div className="absolute inset-0 z-20 pointer-events-none lg:hidden">
                <Sparkle className="top-[16%] left-[12%]" size={10} delay={0} />
                <Sparkle className="top-[30%] right-[10%]" size={8} delay={2.2} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* ==========================================
          PREMIUM LEGACY SECTION (DG INSIGHT PRESS)
          Mobile/Tablet: normal flow | Desktop: absolute, same as before
      ========================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative lg:absolute lg:top-[48%] lg:left-0 lg:right-0 z-20 w-full mt-16 md:mt-20 lg:mt-0 flex flex-col items-center justify-center pointer-events-none translate-y-[0px] md:translate-y-[0px] lg:translate-y-[-150px]"
      >
        {/* Localized Golden Dust Particles */}
        <div className="absolute inset-0 overflow-hidden flex justify-center items-center pointer-events-none">
          <div className="relative w-full max-w-[1000px] h-[300px]">
            {isMounted && legacyDust.map((d, i) => (
              <span
                key={`legacy-dust-${i}`}
                className="absolute rounded-full bg-[#D4AF37] shadow-[0_0_8px_1px_#D4AF37] will-change-transform"
                style={{
                  width: d.size,
                  height: d.size,
                  left: `${d.left}%`,
                  top: `${d.top}%`,
                  opacity: 0,
                  "--dx": `${d.dx}px`,
                  "--dy": "-30px",
                  animation: `dg-dust ${d.duration - 2}s ease-in-out ${d.delay}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[1400px] px-4 relative z-10">
          
          {/* Logo Assembly with Symmetrical Horizontal Gradients */}
          <div className="flex items-center justify-center w-full">
            
            {/* Left Decorative Axis */}
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#6d5220] to-[#D4AF37] max-w-[400px]"></div>

            {/* DG Emblem Integration (Pure Core Graphic) */}
            <div className="relative shrink-0 flex justify-center items-center h-[130px] w-[130px] md:h-[180px] md:w-[180px] lg:h-[300px] lg:w-[300px] translate-y-[0px] md:translate-y-[0px] lg:translate-y-[80px]">
              {/* Sun-like golden aura (soft halo + slowly turning light rays) */}
              <SunGlow className="h-[260%] w-[260%] z-0" />
              
              <div className="relative h-28 w-28 md:h-40 md:w-40 lg:h-120 lg:w-120 flex items-center justify-center">
                <img 
                  src={dgLogoGolden.src} 
                  alt="DG Insight Press Emblem" 
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                />
              </div>

              {/* Mobile/Tablet: sparkles around the emblem */}
              {isMounted && (
                <div className="absolute inset-0 pointer-events-none lg:hidden">
                  <Sparkle className="-top-1 right-1" size={10} delay={0.4} />
                </div>
              )}
            </div>

            {/* Right Decorative Axis */}
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#6d5220] to-[#D4AF37] max-w-[400px]"></div>
          </div>

          {/* Core Typography */}
          <div className="text-center mt-6 md:mt-8 lg:mt-0 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[50px]">
            <h2 
              className="text-[27px] md:text-3xl lg:text-4xl text-[#F4F0E8] font-normal tracking-wide drop-shadow-lg" 
              style={{ fontFamily: "var(--font-playfair), serif" }} 
            >
              Where Knowledge <br className="sm:hidden" /><span className="italic text-[#D4AF37] max-lg:drop-shadow-[0_0_14px_rgba(212,175,55,0.4)]">Becomes Legacy</span>
            </h2>
            <p 
              className="mx-auto max-w-[94%] md:max-w-[760px] text-center font-light text-[#B3B0AA] max-lg:text-[#D2CEC5]
                         text-[14px] md:text-[14px] lg:text-[15px] 
                         leading-[26px] md:leading-[30px] lg:leading-[24px] tracking-[0.01em] md:tracking-[0.03em]
                         [word-spacing:1px] md:[word-spacing:4px] lg:[word-spacing:3px]
                         mt-4 md:mt-5 lg:mt-0
                         translate-y-[0px] md:translate-y-[0px] lg:translate-y-[25px]
                         drop-shadow-sm"
            >
              Every publication represents years of disciplined research,
              intellectual craftsmanship, and a commitment to shaping
              future civil servants through language, scholarship,
              and enduring academic excellence.
            </p>
          </div>

          {/* Minimalist Bottom Geometric Ornament */}
          <div className="mt-8 lg:mt-6 flex justify-center items-center gap-3 opacity-80 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[70px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40"></span>
            <span className="w-12 md:w-20 h-[1px] bg-[#D4AF37]/50"></span>
            <div className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
            <span className="w-12 md:w-20 h-[1px] bg-[#D4AF37]/50"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40"></span>
          </div>

        </div>
      </motion.div>

      {/* ===========================
          BOTTOM GRID 
          Mobile: 1 column (glass cards) | Tablet: 2 columns | Desktop: 3 columns, same as before
      =========================== */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-20 mx-auto w-full max-w-[1300px] px-5 md:px-10 lg:px-0 mt-16 md:mt-20 lg:mt-4 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[25px]"
      >
        <div className="w-full p-0 lg:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-10">
          
          {/* Card 1: Literary Showcase */}
          <div className="relative flex flex-col pb-6 md:pb-0 pr-4 max-lg:p-5 max-lg:rounded-xl max-lg:border max-lg:border-[#D4AF37]/15 max-lg:bg-white/[0.03] max-lg:backdrop-blur-sm max-lg:shadow-[0_0_30px_rgba(212,175,55,0.06)] translate-x-[0px] translate-y-[0px]">
            <span className="lg:hidden absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            <h4 className="font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-5 text-[9px] md:text-[10px] lg:text-[11px] translate-x-[0px] translate-y-[0px]">Literary Showcase</h4>
            <div className="flex gap-5 items-start">

              {/* Book cover — the real Vocab Decode cover image */}
              <SmartLink link={LINKS.vocabDecode} ariaLabel="Vocab Decode" className="group/cover relative h-28 w-20 flex-shrink-0 overflow-hidden rounded-[3px] rounded-r-md border border-[#D4AF37]/40 bg-black shadow-[6px_8px_18px_rgba(0,0,0,0.65),0_0_22px_rgba(212,175,55,0.15)]">
                <img
                  src={bookCover.src}
                  alt="Vocab Decode book cover"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full scale-[1.35] object-cover object-[38%_50%] transition-transform duration-700 group-hover/cover:scale-[1.42]"
                />
              </SmartLink>

              <div className="flex flex-col">
                <h3 className="font-serif italic tracking-wide text-[#F5F2EB] text-[20px] md:text-[22px] lg:text-[24px] translate-x-[0px] translate-y-[0px]">Vocab Decode</h3>
                <p className="mt-1 tracking-wider uppercase text-[#D4AF37] text-[10px] md:text-[10px] lg:text-[11px] translate-x-[0px] translate-y-[0px]">550+ Pages • Comprehensive</p>
                <p className="mt-2 leading-relaxed text-[#888] max-lg:text-[#ABA69C] text-[12px] md:text-[12px] lg:text-[13px] translate-x-[0px] translate-y-[0px]">
                  A meticulous lexical compendium designed to demystify etymology.
                </p>
                <Link href={LINKS.books.href} className="uppercase tracking-wider mt-4 flex items-center hover:text-white transition-colors w-fit text-[#D4AF37] text-[11px] md:text-[11px] lg:text-[12px] translate-x-[0px] translate-y-[0px]">
                  Explore the Book <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Academic Grid */}
          <div className="relative flex flex-col pb-6 md:pb-0 px-2 max-lg:p-5 max-lg:rounded-xl max-lg:border max-lg:border-[#D4AF37]/15 max-lg:bg-white/[0.03] max-lg:backdrop-blur-sm max-lg:shadow-[0_0_30px_rgba(212,175,55,0.06)] translate-x-[0px] translate-y-[0px]">
            <span className="lg:hidden absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            <h4 className="font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3 text-[9px] md:text-[10px] lg:text-[11px] translate-x-[0px] translate-y-[0px]">Academic Grid</h4>
            <div className="flex items-baseline gap-2 mb-4 translate-x-[0px] translate-y-[0px]">
              <span className="font-light font-serif leading-none text-[#D4AF37] text-[48px] md:text-[54px] lg:text-[60px] drop-shadow-[0_0_14px_rgba(212,175,55,0.35)] translate-x-[0px] translate-y-[0px]">4</span>
              <span className="tracking-wide text-[#CCC] max-lg:text-[#E2DED5] text-[14px] md:text-[14px] lg:text-[15px] translate-x-[0px] translate-y-[0px]">Research Papers</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="text-center flex flex-col items-center translate-x-[0px] translate-y-[0px]">
                <span className="font-serif mb-1 text-[#F5F2EB] text-[18px] md:text-[20px] lg:text-[22px] translate-x-[0px] translate-y-[0px]">550+</span>
                <span className="uppercase tracking-[0.1em] text-center text-[#777] max-lg:text-[#9D988E] text-[8px] md:text-[9px] lg:text-[10px] translate-x-[0px] translate-y-[0px]">Pages<br/>Authored</span>
              </div>
              <div className="text-center flex flex-col items-center px-2 translate-x-[0px] translate-y-[0px]">
                <span className="font-serif mb-1 text-[#F5F2EB] text-[18px] md:text-[20px] lg:text-[22px] translate-x-[0px] translate-y-[0px]">04+</span>
                <span className="uppercase tracking-[0.1em] text-center text-[#777] max-lg:text-[#9D988E] text-[8px] md:text-[9px] lg:text-[10px] translate-x-[0px] translate-y-[0px]">Research<br/>Papers</span>
              </div>
              <div className="text-center flex flex-col items-center translate-x-[0px] translate-y-[0px]">
                <span className="font-serif mb-1 text-[#F5F2EB] text-[18px] md:text-[20px] lg:text-[22px] translate-x-[0px] translate-y-[0px]">01</span>
                <span className="uppercase tracking-[0.1em] text-center text-[#777] max-lg:text-[#9D988E] text-[8px] md:text-[9px] lg:text-[10px] translate-x-[0px] translate-y-[0px]">Flagship<br/>Publication</span>
              </div>
            </div>
          </div>

          {/* Card 3: Flagship Publication — full width on tablet */}
          <div className="relative flex flex-col pl-2 md:col-span-2 lg:col-span-1 max-lg:p-5 max-lg:rounded-xl max-lg:border max-lg:border-[#D4AF37]/15 max-lg:bg-white/[0.03] max-lg:backdrop-blur-sm max-lg:shadow-[0_0_30px_rgba(212,175,55,0.06)] translate-x-[0px] translate-y-[0px]">
            <span className="lg:hidden absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            <h4 className="font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-5 text-[9px] md:text-[10px] lg:text-[11px] translate-x-[0px] translate-y-[0px]">Flagship Publication</h4>

            {/* Book collection — DG Insight Press image */}
            <SmartLink link={LINKS.publicationsPage} ariaLabel="Book Collection" className="group/col h-28 w-full bg-black/40 border border-[#D4AF37]/20 rounded relative overflow-hidden flex items-center justify-center translate-x-[0px] translate-y-[0px]">
              <img
                src={bookCollection.src}
                alt="DG Insight Press book collection"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[60%_62%] opacity-80 transition-all duration-700 group-hover/col:scale-105 group-hover/col:opacity-100"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
              <span className="absolute top-2.5 left-3 z-10 uppercase tracking-widest text-[#D4AF37]/80 text-[9px] md:text-[10px] lg:text-[11px]">Book Collection</span>
            </SmartLink>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
