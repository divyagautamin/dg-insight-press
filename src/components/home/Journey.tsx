// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Hourglass, Focus, Feather, Flame } from "lucide-react";

// =====================
// BACKGROUND IMAGES
// =====================
import journeyTopDesktop from "@/assets/desktop/journey_top_desktop.webp";
import journeyTopTablet from "@/assets/tablet/journey_top_tablet.webp";
import journeyTopMobile from "@/assets/mobile/journey_top_mobile.webp";

// =====================
// SECTION IMAGES
// =====================
import lampJourney from "@/assets/media/lamp_journey.webp";
import scholarJourney from "@/assets/media/scholar_journey.webp";
// Temporary fallback for vocabJourney to prevent 500 error
import vocabJourney from "@/assets/media/scholar_journey.webp"; 
import fortJourney from "@/assets/media/fort_journey.webp";
import quoteImage from "@/assets/media/quote.webp";

export default function Journey() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="journey"
      className="relative w-full min-h-screen bg-[#050403] overflow-hidden pt-10 pb-32 font-sans"
    >
      {/* ==========================================
          PERFORMANCE-OPTIMIZED PICTURE BACKGROUND
      ========================================== */}
      {/* ARCHITECTURE FIX: Changed 'top-0' to '-top-16' and 'h-[110vh]' to 'h-[115vh]' to lift the background smoothly */}
      <div className="absolute inset-x-0 -top-16 w-full h-[115vh] z-0 pointer-events-none overflow-hidden isolate">
        <picture className="absolute inset-0 w-full h-full opacity-60 mix-blend-luminosity [contain:paint]">
          <source media="(min-width: 1024px)" srcSet={journeyTopDesktop.src} />
          <source media="(min-width: 768px)" srcSet={journeyTopTablet.src} />
          <img 
            src={journeyTopMobile.src} 
            alt="Journey Background" 
            className="w-full h-full object-cover object-top"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050403]/10 via-[#050403]/90 via-55% to-[#050403]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050403]/90 via-[#050403]/50 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1450px] mx-auto px-6 lg:px-10">
        
        {/* ==========================================
            HERO TEXT SECTION
        ========================================== */}
        <div className="max-w-3xl translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 pb-4">
              <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
              <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-[10px] font-bold">
                MY TIMELINE
              </p>
            </div>

            <h1
              className="text-[#F5F2EB] leading-[1.05] text-[40px] md:text-[56px] lg:text-[68px] font-normal"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              A Journey of <br />
              <span className="italic text-[#D4AF37]">Intellectual Discipline</span>
            </h1>

            <div className="mt-6 w-14 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <p className="mt-6 text-[#A0A0A0] leading-relaxed max-w-xl text-[13px] md:text-[14.5px]">
              Every step has been guided by a singular conviction — that rigorous self-study, 
              precision of language, and clarity of thought are the true foundations 
              of an enduring academic legacy.
            </p>
          </motion.div>
        </div>

        {/* ==========================================
            THE TIMELINE ARCHITECTURE
        ========================================== */}
        {/* 
            --- MASTER CONTROL PANEL (TIMELINE) --- 
        */}
        <div className="relative z-20 translate-x-[0px] translate-y-[40px] md:translate-x-[0px] md:translate-y-[50px] lg:translate-x-[0px] lg:translate-y-[40px] pb-6">
          
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-10 w-[2px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/80 to-[#D4AF37]/0 shadow-[0_0_12px_rgba(212,175,55,0.8),0_0_24px_rgba(212,175,55,0.4)] -translate-x-1/2" />

          {/* --- TIMELINE ITEM 01 (Left) --- */}
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_80px_1fr] items-center gap-4 lg:gap-0 pb-2 lg:pb-3">
            <div className="lg:hidden flex justify-center w-full">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/80 bg-[#050403] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center text-[16px] text-[#D4AF37]" style={{ fontFamily: "var(--font-playfair), serif" }}>01</div>
            </div>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}
              className="w-full bg-gradient-to-br from-[#110e0a]/90 to-[#050403]/95 backdrop-blur-md border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_50px_rgba(212,175,55,0.18),inset_0_1px_1px_rgba(212,175,55,0.3)] rounded-2xl flex flex-col md:flex-row overflow-hidden isolate [contain:paint] transition-all duration-500"
            >
              <div className="w-full md:w-[35%] h-[160px] md:h-[200px] overflow-hidden">
                <img src={lampJourney.src} alt="The Foundation" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="w-full md:w-[65%] p-5 md:p-6 flex flex-col justify-center">
                <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase pb-1.5">The Foundation</p>
                <h3 className="text-[20px] lg:text-[22px] text-[#F5F2EB] leading-tight pb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>Autodidactic Rigour</h3>
                <p className="text-[#A0A0A0] text-[11.5px] lg:text-[12px] leading-relaxed">Choosing the unconventional path of independent self-study over traditional schooling. Cultivating a deep-seated curiosity for the core sciences while laying the groundwork for a broader understanding of historical narratives and global literature.</p>
              </div>
            </motion.div>
            
            <div className="hidden lg:flex justify-center w-full relative z-10">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/80 bg-[#050403] shadow-[0_0_15px_rgba(212,175,55,0.5),inset_0_0_8px_rgba(212,175,55,0.3)] flex items-center justify-center text-[18px] text-[#D4AF37]" style={{ fontFamily: "var(--font-playfair), serif" }}>01</div>
            </div>
            <div className="hidden lg:block w-full" />
          </div>

          {/* --- TIMELINE ITEM 02 (Right) --- */}
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_80px_1fr] items-center gap-4 lg:gap-0 pb-2 lg:pb-3">
            <div className="lg:hidden flex justify-center w-full">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/80 bg-[#050403] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center text-[16px] text-[#D4AF37]" style={{ fontFamily: "var(--font-playfair), serif" }}>02</div>
            </div>

            <div className="hidden lg:block w-full" />
            <div className="hidden lg:flex justify-center w-full relative z-10">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/80 bg-[#050403] shadow-[0_0_15px_rgba(212,175,55,0.5),inset_0_0_8px_rgba(212,175,55,0.3)] flex items-center justify-center text-[18px] text-[#D4AF37]" style={{ fontFamily: "var(--font-playfair), serif" }}>02</div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}
              className="w-full bg-gradient-to-bl from-[#110e0a]/90 to-[#050403]/95 backdrop-blur-md border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_50px_rgba(212,175,55,0.18),inset_0_1px_1px_rgba(212,175,55,0.3)] rounded-2xl flex flex-col md:flex-row overflow-hidden isolate [contain:paint] transition-all duration-500"
            >
              <div className="w-full md:w-[65%] p-5 md:p-6 flex flex-col justify-center order-2 md:order-1">
                <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase pb-1.5">The Linguistic Awakening</p>
                <h3 className="text-[20px] lg:text-[22px] text-[#F5F2EB] leading-tight pb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>The Etymological Pursuit</h3>
                <p className="text-[#A0A0A0] text-[11.5px] lg:text-[12px] leading-relaxed">Recognising that language is the ultimate architecture of human intellect, Began the rigorous compilation of root words, lexical structures, and linguistic nuances to master analytical research.</p>
              </div>
              <div className="w-full md:w-[35%] h-[160px] md:h-[200px] overflow-hidden order-1 md:order-2">
                <img src={scholarJourney.src} alt="The Etymological Pursuit" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
          </div>

          {/* --- TIMELINE ITEM 03 (Left) --- */}
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_80px_1fr] items-center gap-4 lg:gap-0 pb-2 lg:pb-3">
            <div className="lg:hidden flex justify-center w-full">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/80 bg-[#050403] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center text-[16px] text-[#D4AF37]" style={{ fontFamily: "var(--font-playfair), serif" }}>03</div>
            </div>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}
              className="w-full bg-gradient-to-br from-[#110e0a]/90 to-[#050403]/95 backdrop-blur-md border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_50px_rgba(212,175,55,0.18),inset_0_1px_1px_rgba(212,175,55,0.3)] rounded-2xl flex flex-col md:flex-row overflow-hidden isolate [contain:paint] transition-all duration-500"
            >
              <div className="w-full md:w-[35%] h-[160px] md:h-[200px] overflow-hidden">
                <img src={vocabJourney.src} alt="Vocab Decode" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="w-full md:w-[65%] p-5 md:p-6 flex flex-col justify-center">
                <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase pb-1.5">The Authorship</p>
                <h3 className="text-[20px] lg:text-[22px] text-[#F5F2EB] leading-tight pb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>Vocab Decode: <br/> A Labour of Precision</h3>
                <p className="text-[#A0A0A0] text-[11.5px] lg:text-[12px] leading-relaxed">The culmination of relentless intellectual discipline. Authored and compiled a 550-page comprehensive vocabulary reference engineered specifically to equip scholars with mastery of the English language.</p>
              </div>
            </motion.div>
            
            <div className="hidden lg:flex justify-center w-full relative z-10">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/80 bg-[#050403] shadow-[0_0_15px_rgba(212,175,55,0.5),inset_0_0_8px_rgba(212,175,55,0.3)] flex items-center justify-center text-[18px] text-[#D4AF37]" style={{ fontFamily: "var(--font-playfair), serif" }}>03</div>
            </div>
            <div className="hidden lg:block w-full" />
          </div>

          {/* --- TIMELINE ITEM 04 (Right) --- */}
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_80px_1fr] items-center gap-4 lg:gap-0">
            <div className="lg:hidden flex justify-center w-full">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/80 bg-[#050403] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center text-[16px] text-[#D4AF37]" style={{ fontFamily: "var(--font-playfair), serif" }}>04</div>
            </div>

            <div className="hidden lg:block w-full" />
            <div className="hidden lg:flex justify-center w-full relative z-10">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/80 bg-[#050403] shadow-[0_0_15px_rgba(212,175,55,0.5),inset_0_0_8px_rgba(212,175,55,0.3)] flex items-center justify-center text-[18px] text-[#D4AF37]" style={{ fontFamily: "var(--font-playfair), serif" }}>04</div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}
              className="w-full bg-gradient-to-bl from-[#110e0a]/90 to-[#050403]/95 backdrop-blur-md border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_50px_rgba(212,175,55,0.18),inset_0_1px_1px_rgba(212,175,55,0.3)] rounded-2xl flex flex-col md:flex-row overflow-hidden isolate [contain:paint] transition-all duration-500"
            >
              <div className="w-full md:w-[65%] p-5 md:p-6 flex flex-col justify-center order-2 md:order-1">
                <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase pb-1.5">The Vision</p>
                <h3 className="text-[20px] lg:text-[22px] text-[#F5F2EB] leading-tight pb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>The Pursuit of Scholarship</h3>
                <p className="text-[#A0A0A0] text-[11.5px] lg:text-[12px] leading-relaxed">Merging literary craftsmanship with advanced academic inquiry. Committing to a lifelong pursuit of interdisciplinary research aimed at shaping public discourse through evidence-based writing.</p>
              </div>
              <div className="w-full md:w-[35%] h-[160px] md:h-[200px] overflow-hidden order-1 md:order-2">
                <img src={fortJourney.src} alt="The Pursuit of Scholarship" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* =========================================================
            QUOTE SECTION (Full Width, Ultra-Slim, New Content)
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          /* ARCHITECTURE FIX: Changed to 'w-full' for full screen length across all devices */
          className="w-full rounded-2xl overflow-hidden relative border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.1),inset_0_1px_1px_rgba(212,175,55,0.25)] isolate [contain:paint] transition-all duration-500 translate-x-[0px] translate-y-[80px] md:translate-x-[0px] md:translate-y-[100px] lg:translate-x-[0px] lg:translate-y-[30px]"
        >
          {/* IMAGE FIX: Reduced width to 30% on desktop so it doesn't stretch weirdly in a full-width container */}
          <picture className="absolute top-0 right-0 bottom-0 w-[60%] md:w-[40%] lg:w-[30%] h-full z-0 [contain:paint]">
            <img
              src={quoteImage.src}
              alt="Ink and Pen"
              className="w-full h-full object-cover object-center opacity-100"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050403] via-[#050403]/95 via-50% to-transparent z-0" />
          <div className="absolute inset-0 bg-black/10 z-0" />

          {/* TEXT CONTAINER: Kept slim vertically (py-6) */}
          <div className="relative z-10 pl-5 pr-6 py-6 md:pl-8 md:pr-10 flex flex-col justify-center min-h-[150px] max-w-[95%] md:max-w-[80%] lg:max-w-[70%]">
            <div className="flex gap-3 md:gap-4">
              <span className="text-[#D4AF37] text-[36px] md:text-[42px] leading-none font-serif pt-1 opacity-80">“</span>
              <div>
                <h2
                  className="text-[#F5F2EB] italic leading-[1.3] text-[16px] md:text-[20px] lg:text-[22px] drop-shadow-lg"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  An enduring intellectual legacy is forged in the silent hours of relentless study, where precision of thought meets the power of language.
                </h2>
                <p className="pt-3 uppercase tracking-[0.3em] text-[#D4AF37] text-[9px] md:text-[10px] font-bold">
                  — DIVYA GAUTAM
                </p>
              </div>
            </div>
          </div>
        </motion.div>

       {/* =========================================================
            BOTTOM PILLARS (Unique Intellectual Principles)
        ========================================================= */}
        {/* 
            --- MASTER CONTROL PANEL (PILLARS) --- 
            Mobile : translate-y-[120px]
            Tablet : md:translate-y-[140px]
            Desktop: lg:translate-y-[180px]
        */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full rounded-[24px] border border-[#D4AF37]/25 bg-gradient-to-r from-[#0a0908]/90 via-[#110e0a]/90 to-[#0a0908]/90 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)] translate-x-[0px] translate-y-[120px] md:translate-x-[0px] md:translate-y-[140px] lg:translate-x-[0px] lg:translate-y-[70px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/10">
            
            {/* Pillar 1: Patience */}
            <div className="px-4 py-5 md:py-7 text-center flex flex-col items-center justify-center group hover:bg-[#D4AF37]/[0.02] transition-colors duration-500 rounded-tl-[24px] rounded-bl-none md:rounded-bl-[24px] lg:rounded-bl-[24px]">
              <Hourglass className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mb-2 md:mb-2.5 stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-[26px] md:text-[30px] text-[#F5F2EB] font-light leading-none pb-1.5 md:pb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>Patience</h3>
              <p className="text-[#808080] text-[9px] md:text-[10px] uppercase tracking-widest font-semibold">In the Pursuit of Mastery</p>
            </div>

            {/* Pillar 2: Focus */}
            <div className="px-4 py-5 md:py-7 text-center flex flex-col items-center justify-center group hover:bg-[#D4AF37]/[0.02] transition-colors duration-500">
              <Focus className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mb-2 md:mb-2.5 stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-[26px] md:text-[30px] text-[#F5F2EB] font-light leading-none pb-1.5 md:pb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>Focus</h3>
              <p className="text-[#808080] text-[9px] md:text-[10px] uppercase tracking-widest font-semibold">Eliminating Distractions</p>
            </div>

            {/* Pillar 3: Clarity */}
            <div className="px-4 py-5 md:py-7 text-center flex flex-col items-center justify-center group hover:bg-[#D4AF37]/[0.02] transition-colors duration-500">
              <Feather className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mb-2 md:mb-2.5 stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-[26px] md:text-[30px] text-[#F5F2EB] font-light leading-none pb-1.5 md:pb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>Clarity</h3>
              <p className="text-[#808080] text-[9px] md:text-[10px] uppercase tracking-widest font-semibold">Precision in Articulation</p>
            </div>

            {/* Pillar 4: Curiosity */}
            <div className="px-4 py-5 md:py-7 text-center flex flex-col items-center justify-center group hover:bg-[#D4AF37]/[0.02] transition-colors duration-500 rounded-br-[24px] rounded-bl-[24px] md:rounded-bl-none lg:rounded-tr-[24px]">
              <Flame className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mb-2 md:mb-2.5 stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-[26px] md:text-[30px] text-[#F5F2EB] font-light leading-none pb-1.5 md:pb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>Curiosity</h3>
              <p className="text-[#808080] text-[9px] md:text-[10px] uppercase tracking-widest font-semibold">The Eternal Catalyst</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}