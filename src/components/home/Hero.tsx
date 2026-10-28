// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

/* ==========================================================
   RESPONSIVE LAYOUT
   Mobile  (< 768px)    : Portrait on top (golden glow + rotating rings),
                          text rises over the portrait's bottom fade
   Tablet  (768-1023px) : Desktop-like — text left, portrait right
   Desktop (1024px+)    : Same as before (only heading font fixed)
   Knobs: base = mobile, md: = tablet, lg: = desktop
========================================================== */

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="hero" className="relative w-full lg:min-h-[230vh] bg-[#050403] overflow-x-hidden flex flex-col lg:justify-between pt-24 md:pt-32 lg:pt-32 pb-20 md:pb-24 lg:pb-[150px] font-sans">
      
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
        <div className="absolute -left-40 top-20 h-[700px] w-[700px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0) 65%)' }} />
        <div className="absolute right-[-200px] top-[-120px] h-[650px] w-[650px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0) 65%)' }} />

        {/* Floating Golden Dust */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-[#D4AF37] blur-[0.4px] shadow-[0_0_14px_rgba(212,175,55,.9)]"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{ y: [0, -80, 0], x: [0, 20, -15, 0], scale: [0.4, 1.2, .8], opacity: [0, .9, 0] }}
                transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 3, ease: "linear" }}
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
          // Mobile: -mt-28 pulls the text up over the portrait's bottom fade
          className="relative lg:absolute z-20 lg:z-auto w-full md:w-[56%] lg:w-[55%] flex flex-col -mt-28 md:mt-0 lg:left-12 lg:top-[20%] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[-64px]"
        >
          {/* Subtitle Control */}
          <h3 className="font-semibold uppercase tracking-[0.18em] md:tracking-[0.25em] lg:tracking-[0.3em] max-lg:leading-[1.9] text-[#D4AF37] mb-4 md:mb-6 lg:mb-16 text-[10px] md:text-[11px] lg:text-[12px] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-150px]">
            AUTHOR • RESEARCHER • ADMINISTRATIVE SCHOLAR
          </h3>

          {/* Main Heading Control
              FIX: fontFamily was written twice earlier, so Playfair was never applied. */}
          <h1 
            className="font-normal text-[#F5F2EB] leading-[1.15] text-[36px] sm:text-[42px] md:text-[46px] lg:text-[58px] max-lg:drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-200px]"
            style={{
              fontFamily: "var(--font-playfair), serif",
              wordSpacing: "8px"
            }}
          >
            The discipline of <br /> language, <br />
            the <span className="text-[#D4AF37] italic drop-shadow-[0_0_18px_rgba(212,175,55,0.35)]">ambition</span> <br />
            of service.
          </h1>

          {/* Decorative Golden Line Control */}
          <hr className="w-[70px] border-t-[2px] border-[#D4AF37] opacity-100 relative z-50 mt-6 md:mt-7 lg:mt-0 max-lg:shadow-[0_0_12px_rgba(212,175,55,0.7)] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-180px]" />

          {/* Paragraph Control */}
          <p className="mt-6 md:mt-7 lg:mt-8 max-w-xl font-light leading-[1.8] text-[#A5A5A5] text-[14px] md:text-[15px] lg:text-[15px] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-190px]">
            Divya Gautam is an author and intellectual analyst devoted to the <br className="hidden lg:block" />
            precision of language and the rigour of public <br className="hidden lg:block" />
            thought — combining literary craftsmanship with an <br className="hidden lg:block" />
            administrative sensibility shaped for institutions that demand both.
          </p>

          {/* Buttons Control — Mobile: both buttons equal width in one row */}
          <div className="mt-8 md:mt-9 lg:mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:gap-5 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[-20px] lg:translate-y-[-210px]">
            <button className="text-center rounded-sm bg-[#D4AF37] px-3 sm:px-8 md:px-6 lg:px-8 py-3.5 text-[13px] sm:text-[14px] font-semibold tracking-wide text-black transition-all hover:bg-[#f0cf67] hover:shadow-[0_0_35px_rgba(212,175,55,.45)] max-lg:shadow-[0_0_22px_rgba(212,175,55,.3)]">
              Explore Full Work
            </button>
            <button className="text-center rounded-sm border border-[#D4AF37] bg-transparent max-lg:bg-black/30 max-lg:backdrop-blur-sm px-3 sm:px-8 md:px-6 lg:px-8 py-3.5 text-[13px] sm:text-[14px] font-semibold tracking-wide text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10">
              View Full Profile
            </button>
          </div>
        </motion.div>

        {/* Right: Portrait Image Control (Move entire image block)
            Mobile: on top (order-first) | Tablet: right side | Desktop: same as before */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative lg:absolute order-first md:order-none w-full md:w-[50%] md:-ml-[6%] lg:ml-0 lg:w-auto lg:flex-1 flex justify-center md:justify-end lg:justify-start lg:right-12 lg:bottom-[10%] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[50px] lg:translate-y-[-380px]"
        >
          <div className="relative h-[440px] w-full max-w-[360px] sm:h-[480px] sm:max-w-[400px] md:h-[580px] md:max-w-none lg:h-[1000px] lg:w-[750px]">

            {/* Mobile/Tablet: softly pulsing golden glow behind the portrait */}
            <div className="absolute inset-0 flex items-center justify-center pb-[18%] pointer-events-none lg:hidden">
              <motion.div
                className="h-[330px] w-[330px] md:h-[440px] md:w-[440px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(212,175,55,0.24) 0%, rgba(212,175,55,0.07) 42%, rgba(212,175,55,0) 70%)" }}
                animate={{ opacity: [0.55, 1, 0.55], scale: [0.94, 1.06, 0.94] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Mobile/Tablet: slowly rotating golden rings behind the portrait */}
            <div className="absolute inset-0 flex items-center justify-center pb-[18%] pointer-events-none lg:hidden">
              <div className="absolute h-[290px] w-[290px] md:h-[390px] md:w-[390px] rounded-full border border-[#D4AF37]/10" />
              <motion.div
                className="h-[250px] w-[250px] md:h-[340px] md:w-[340px] rounded-full border border-dashed border-[#D4AF37]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Mobile fade: deep bottom fade so the overlapping text stays readable */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none md:hidden"
              style={{ background: "linear-gradient(to top, #050403 0%, rgba(5,4,3,0.92) 22%, rgba(5,4,3,0) 55%), linear-gradient(to bottom, #050403 0%, transparent 14%)" }}
            />
            {/* Tablet + Desktop fade: same as before */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none hidden md:block"
              style={{ background: "linear-gradient(to top, #050403 0%, transparent 35%), linear-gradient(to bottom, #050403 0%, transparent 35%), linear-gradient(to right, #050403 0%, transparent 45%)" }}
            />
            <img
              src={authorPortrait.src} 
              alt="Divya Gautam"
              className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_0_40px_rgba(0,0,0,0.8)] select-none pointer-events-none"
            />
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
            {isMounted && Array.from({ length: 20 }).map((_, i) => (
              <motion.span
                key={`legacy-dust-${i}`}
                className="absolute rounded-full bg-[#D4AF37] shadow-[0_0_8px_1px_#D4AF37]"
                style={{
                  width: Math.random() * 2 + 1,
                  height: Math.random() * 2 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, (Math.random() - 0.5) * 20, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
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
              {/* Subtle Core Radiance */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] w-[150%] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0) 50%)' }}></div>
              
              <div className="relative h-28 w-28 md:h-40 md:w-40 lg:h-120 lg:w-120 flex items-center justify-center">
                <img 
                  src={dgLogoGolden.src} 
                  alt="DG Insight Press Emblem" 
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                />
              </div>
            </div>

            {/* Right Decorative Axis */}
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#6d5220] to-[#D4AF37] max-w-[400px]"></div>
          </div>

          {/* Core Typography */}
          <div className="text-center mt-6 md:mt-8 lg:mt-0 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[50px]">
            <h2 
              className="text-[26px] md:text-3xl lg:text-4xl text-[#F4F0E8] font-normal tracking-wide drop-shadow-lg" 
              style={{ fontFamily: "var(--font-playfair), serif" }} 
            >
              Where Knowledge <br className="sm:hidden" /><span className="italic text-[#D4AF37]">Becomes Legacy</span>
            </h2>
            <p 
              className="mx-auto max-w-[92%] md:max-w-[760px] text-center font-light text-[#B3B0AA] 
                         text-[13px] md:text-[14px] lg:text-[15px] 
                         leading-[26px] md:leading-[30px] lg:leading-[24px] tracking-[0.03em]
                         [word-spacing:3px] md:[word-spacing:5px] lg:[word-spacing:3px]
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
          <div className="flex flex-col pb-6 md:pb-0 pr-4 max-lg:p-5 max-lg:rounded-xl max-lg:border max-lg:border-[#D4AF37]/15 max-lg:bg-white/[0.025] max-lg:backdrop-blur-sm max-lg:shadow-[0_0_30px_rgba(212,175,55,0.05)] translate-x-[0px] translate-y-[0px]">
            <h4 className="font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-5 text-[9px] md:text-[10px] lg:text-[11px] translate-x-[0px] translate-y-[0px]">Literary Showcase</h4>
            <div className="flex gap-5 items-start">
              <div className="h-28 w-20 bg-black/40 border border-[#D4AF37]/30 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37]/50 uppercase text-center text-[8px] md:text-[9px] lg:text-[10px]">Book<br/>Cover</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif italic tracking-wide text-[#F5F2EB] text-[20px] md:text-[22px] lg:text-[24px] translate-x-[0px] translate-y-[0px]">Vocab Decode</h3>
                <p className="mt-1 tracking-wider uppercase text-[#D4AF37] text-[10px] md:text-[10px] lg:text-[11px] translate-x-[0px] translate-y-[0px]">550+ Pages • Comprehensive</p>
                <p className="mt-2 leading-relaxed text-[#888] text-[11px] md:text-[12px] lg:text-[13px] translate-x-[0px] translate-y-[0px]">
                  A meticulous lexical compendium designed to demystify etymology.
                </p>
                <button className="uppercase tracking-wider mt-4 flex items-center hover:text-white transition-colors w-fit text-[#D4AF37] text-[11px] md:text-[11px] lg:text-[12px] translate-x-[0px] translate-y-[0px]">
                  Explore the Book <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Academic Grid */}
          <div className="flex flex-col pb-6 md:pb-0 px-2 max-lg:p-5 max-lg:rounded-xl max-lg:border max-lg:border-[#D4AF37]/15 max-lg:bg-white/[0.025] max-lg:backdrop-blur-sm max-lg:shadow-[0_0_30px_rgba(212,175,55,0.05)] translate-x-[0px] translate-y-[0px]">
            <h4 className="font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3 text-[9px] md:text-[10px] lg:text-[11px] translate-x-[0px] translate-y-[0px]">Academic Grid</h4>
            <div className="flex items-baseline gap-2 mb-4 translate-x-[0px] translate-y-[0px]">
              <span className="font-light font-serif leading-none text-[#D4AF37] text-[48px] md:text-[54px] lg:text-[60px] drop-shadow-[0_0_14px_rgba(212,175,55,0.35)] translate-x-[0px] translate-y-[0px]">4</span>
              <span className="tracking-wide text-[#CCC] text-[14px] md:text-[14px] lg:text-[15px] translate-x-[0px] translate-y-[0px]">Research Papers</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="text-center flex flex-col items-center translate-x-[0px] translate-y-[0px]">
                <span className="font-serif mb-1 text-[#F5F2EB] text-[18px] md:text-[20px] lg:text-[22px] translate-x-[0px] translate-y-[0px]">550+</span>
                <span className="uppercase tracking-[0.1em] text-center text-[#777] text-[8px] md:text-[9px] lg:text-[10px] translate-x-[0px] translate-y-[0px]">Pages<br/>Authored</span>
              </div>
              <div className="text-center flex flex-col items-center px-2 translate-x-[0px] translate-y-[0px]">
                <span className="font-serif mb-1 text-[#F5F2EB] text-[18px] md:text-[20px] lg:text-[22px] translate-x-[0px] translate-y-[0px]">04+</span>
                <span className="uppercase tracking-[0.1em] text-center text-[#777] text-[8px] md:text-[9px] lg:text-[10px] translate-x-[0px] translate-y-[0px]">Research<br/>Papers</span>
              </div>
              <div className="text-center flex flex-col items-center translate-x-[0px] translate-y-[0px]">
                <span className="font-serif mb-1 text-[#F5F2EB] text-[18px] md:text-[20px] lg:text-[22px] translate-x-[0px] translate-y-[0px]">01</span>
                <span className="uppercase tracking-[0.1em] text-center text-[#777] text-[8px] md:text-[9px] lg:text-[10px] translate-x-[0px] translate-y-[0px]">Flagship<br/>Publication</span>
              </div>
            </div>
          </div>

          {/* Card 3: Flagship Publication — full width on tablet */}
          <div className="flex flex-col pl-2 md:col-span-2 lg:col-span-1 max-lg:p-5 max-lg:rounded-xl max-lg:border max-lg:border-[#D4AF37]/15 max-lg:bg-white/[0.025] max-lg:backdrop-blur-sm max-lg:shadow-[0_0_30px_rgba(212,175,55,0.05)] translate-x-[0px] translate-y-[0px]">
            <h4 className="font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-5 text-[9px] md:text-[10px] lg:text-[11px] translate-x-[0px] translate-y-[0px]">Flagship Publication</h4>
            <div className="h-28 w-full bg-black/40 border border-[#D4AF37]/20 rounded flex items-center justify-center relative overflow-hidden translate-x-[0px] translate-y-[0px]">
               <span className="uppercase tracking-widest z-10 text-[#D4AF37]/40 text-[10px] md:text-[11px] lg:text-[12px] translate-x-[0px] translate-y-[0px]">Book Collection</span>
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
