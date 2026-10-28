"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ==========================================
// BACKGROUND IMAGE IMPORTS (Update paths to match your actual directory structure)
// ==========================================
import aboutTopDesktop from "@/assets/desktop/about_top_desktop.webp";
import aboutBottomDesktop from "@/assets/desktop/about_bottom_desktop.webp";
import aboutTopTablet from "@/assets/tablet/about_top_tablet.webp";
import aboutBottomTablet from "@/assets/tablet/about_bottom_tablet.webp";
import aboutTopMobile from "@/assets/mobile/about_top_mobile.webp";
import aboutBottomMobile from "@/assets/mobile/about_bottom_mobile.webp";

const VOCAB_ITEMS = [
  { word: "assiduous", def: "great care and diligence" },
  { word: "ubiquitous", def: "appearing everywhere" },
  { word: "sagacious", def: "profound mental perception" },
  { word: "loquacious", def: "tending to talk a great deal" },
  { word: "perspicacious", def: "insightful and discerning" },
  { word: "ephemeral", def: "lasting for a short time" },
  { word: "inexorable", def: "impossible to stop or prevent" },
  { word: "fastidious", def: "very attentive to accuracy" },
  { word: "eloquent", def: "fluent in speaking or writing" },
  { word: "pragmatic", def: "sensible and realistic approach" },
];

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const marqueeRef = useRef(null);
  // margin extends the "in view" zone so the animation resumes slightly before
  // it's actually visible, avoiding a visible pop when scrolling back into it
  const marqueeInView = useInView(marqueeRef, { margin: "200px 0px 200px 0px" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-[220vh] bg-[#050403] overflow-hidden font-sans -mt-[0px] z-30"
    >
      {/* ==========================================
          BACKGROUND ARCHITECTURE
          (<picture> = browser fetches only ONE image per breakpoint,
          not all three like the old hidden/block divs did)
      ========================================== */}
      <div className="absolute inset-0 z-0 flex flex-col pointer-events-none">
        {/* Top Background */}
        <div className="relative w-full h-[50%] overflow-hidden">
          <picture className="absolute inset-0 w-full h-full opacity-70">
            <source media="(min-width: 1024px)" srcSet={aboutTopDesktop.src} />
            <source media="(min-width: 768px)" srcSet={aboutTopTablet.src} />
            <img
              src={aboutTopMobile.src}
              alt=""
              className="w-full h-full object-contain object-right-bottom lg:object-right md:object-right"
            />
          </picture>

          <div className="absolute inset-0 bg-gradient-to-r from-[#050403] via-[#050403]/90 to-transparent w-[90%] lg:w-[60%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050403]/50 to-[#050403]" />
        </div>

        {/* Bottom Background */}
        <div className="relative w-full h-[50%] overflow-hidden">
          <picture className="absolute inset-0 w-full h-full opacity-70">
            <source media="(min-width: 1024px)" srcSet={aboutBottomDesktop.src} />
            <source media="(min-width: 768px)" srcSet={aboutBottomTablet.src} />
            <img
              src={aboutBottomMobile.src}
              alt=""
              className="w-full h-full object-contain object-right-top lg:object-right md:object-right"
            />
          </picture>

          <div className="absolute inset-0 bg-gradient-to-r from-[#050403] via-[#050403]/90 to-transparent w-[90%] lg:w-[60%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#050403]/50 to-[#050403]" />
        </div>
      </div>

      {/* ==========================================
          MAIN CONTENT CONTAINER
      ========================================== */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 pt-[100px] lg:pt-[150px] pb-[100px]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-[55%] flex flex-col translate-x-[0px] translate-y-[0px] md:translate-y-[20px] lg:translate-y-[0px]"
        >
          <div className="flex items-center gap-4 mb-[20px] md:mb-[30px]">
            <span className="w-[40px] h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-mono text-[12px] md:text-[14px] tracking-[2px]">
              about <span className="italic opacity-70">/əˈbaʊt/</span> preposition
            </span>
          </div>

          <h2
            className="text-[#F5F2EB] font-normal leading-[48px] md:leading-[70px] lg:leading-[80px] text-[40px] md:text-[60px] lg:text-[72px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            A mind trained <br />
            on <span className="italic text-[#D4AF37]">precision</span>
          </h2>

          <p className="mt-[30px] md:mt-[40px] max-w-[600px] font-light text-[#B3B0AA] text-[14px] md:text-[16px] leading-[28px] md:leading-[32px] tracking-[0.5px]">
            Divya Gautam approaches language the way an administrator approaches policy — with structure, evidence, and an unwavering commitment to clarity. His work sits at the intersection of literary scholarship and public administration, built on the conviction that command of language is the foundation of command of thought.
          </p>

          <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[30px] max-w-[700px]">
            {[
              "Author of a 550+ page vocabulary reference work",
              "Four completed research papers across language and policy",
              "Scholar of public affairs with an academic publishing record",
              "Committed to rigorous, evidence-based intellectual writing",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-[15px]">
                <span className="text-[#D4AF37] text-[18px] font-serif leading-none mt-[4px]">§</span>
                <p className="text-[#E0DCD3] text-[13px] md:text-[14px] leading-[24px] tracking-[0.5px] font-light">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ==========================================
          DYNAMIC VOCABULARY STRIP (THE BRIDGE)
          Solid background instead of backdrop-blur — the old version ran
          a real-time blur filter every frame, forever, since the marquee
          animates infinitely underneath it. That was the main lag source.
          The animation now also pauses when scrolled out of view.
      ========================================== */}
      <div
        ref={marqueeRef}
        className="absolute top-[50%] left-0 w-full translate-y-[-80px] md:translate-y-[-100px] lg:translate-y-[-120px] z-30 py-[30px] md:py-[40px] border-y border-[#D4AF37]/30 bg-[#0a0806] overflow-hidden flex items-center shadow-[0_0_40px_rgba(0,0,0,0.95)]"
      >
        {isMounted && (
          <motion.div
            animate={marqueeInView ? { x: ["0%", "-50%"] } : {}}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ willChange: marqueeInView ? "transform" : "auto" }}
            className="flex whitespace-nowrap items-center"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {VOCAB_ITEMS.map((item, j) => (
                  <div key={j} className="flex items-center mx-[30px] md:mx-[45px]">
                    <span className="font-serif italic text-[#D4AF37] text-[18px] md:text-[24px] mr-[12px]">
                      {item.word}
                    </span>
                    <span className="font-mono text-[#888] text-[13px] md:text-[14px]">{item.def}</span>
                    <span className="text-[#D4AF37]/30 mx-[25px] text-[20px]">—</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* ==========================================
          BOTTOM CONTENT CONTAINER
      ========================================== */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 pt-[100px] pb-[150px]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-[60%] flex flex-col translate-x-[0px] translate-y-[0px] md:translate-y-[0px] lg:translate-y-[20px]"
        >
          <div className="flex items-center gap-4 mb-[20px] md:mb-[30px]">
            <span className="w-[40px] h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-mono text-[12px] md:text-[14px] tracking-[2px]">
              de·code <span className="italic opacity-70">/dɪˈkəʊd/</span> verb
            </span>
          </div>

          <h2
            className="text-[#F5F2EB] font-normal leading-[48px] md:leading-[60px] text-[40px] md:text-[54px] lg:text-[64px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            The Literary Showcase
          </h2>

          <h3
            className="mt-[30px] text-[#F5F2EB] font-normal leading-[1] text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Vocab <span className="italic text-[#D4AF37]">Decode</span>
          </h3>

          <div className="mt-[20px] inline-flex border border-[#D4AF37]/30 px-[20px] py-[10px] w-fit">
            <span className="text-[#D4AF37] font-mono text-[11px] md:text-[12px] tracking-[1px]">
              550+ Pages • Comprehensive Vocabulary Reference
            </span>
          </div>

          <p className="mt-[30px] md:mt-[40px] max-w-[600px] font-light text-[#B3B0AA] text-[14px] md:text-[16px] leading-[28px] md:leading-[32px] tracking-[0.5px]">
            Vocab Decode is an exhaustive lexical compendium engineered for the discerning reader — structured to demystify the etymological architecture of the English language and equip aspirants, scholars, and connoisseurs of prose with a formidable command of vocabulary. Every entry is curated for precision, pedagogical clarity, and enduring reference value.
          </p>

          <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[30px] max-w-[700px]">
            {[
              "Etymological breakdowns for deeper retention",
              "Curated for competitive examinations",
              "Contextual usage across registers",
              "Structured for daily, sustained practice",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-[15px]">
                <span className="text-[#D4AF37] text-[18px] font-serif leading-none mt-[4px]">§</span>
                <p className="text-[#E0DCD3] text-[13px] md:text-[14px] leading-[24px] tracking-[0.5px] font-light">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ==========================================
            CTA BOX — one blur layer instead of three
            (kept backdrop-blur-md on the box itself for the glass look,
            dropped backdrop-blur-sm on the button and reduced glow blur)
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="group/box w-full max-w-[1300px] mx-auto translate-y-[60px] md:translate-y-[100px] lg:translate-y-[140px] border border-[#D4AF37]/30 bg-[#110e0a]/80 backdrop-blur-md isolate [contain:paint] p-[30px] md:p-[40px] lg:p-[50px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[30px] shadow-[0_0_30px_rgba(212,175,55,0.05)] rounded-sm relative overflow-hidden"
        >
          {/* Bulletproof CTA Glow */}
          <div className="absolute -left-10 -top-10 w-[300px] h-[300px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.20) 0%, rgba(212,175,55,0) 65%)' }} />

          <div className="relative z-10">
            <span className="text-[#D4AF37] uppercase font-mono tracking-[3px] text-[10px] md:text-[11px] font-semibold">
              Limited Availability
            </span>
            <h4
              className="mt-[10px] text-[#F5F2EB] text-[24px] md:text-[28px] lg:text-[34px]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Reserve a Signed First Edition
            </h4>
          </div>

          <button className="group/btn relative z-10 shrink-0 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:-translate-y-1 active:scale-95 transition-all duration-200 px-[30px] py-[15px] md:px-[40px] md:py-[18px] font-semibold text-[13px] md:text-[14px] flex items-center gap-[10px] rounded-sm overflow-hidden">
            Get a Signed Copy
            <span className="text-[16px] leading-none transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}