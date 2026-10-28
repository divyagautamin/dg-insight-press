// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { subscribe } from "@/lib/subscribe";
import { 
  Feather, 
  Landmark, 
  BookOpen, 
  Globe, 
  ChevronRight, 
  TrendingUp, 
  Mail, 
  MessageSquare, 
  Library, 
  BookMarked,
  Briefcase
} from "lucide-react";

// =====================
// BACKGROUND IMAGES
// =====================
import insightTopDesktop from "@/assets/desktop/insight_top_desktop.webp";
import insightTopTablet from "@/assets/tablet/insight_top_tablet.webp";
import insightTopMobile from "@/assets/mobile/insight_top_mobile.webp";

// =====================
// SECTION IMAGES
// =====================
import zoomInsight from "@/assets/media/zoom_insight.webp";
import penInsight from "@/assets/media/pen_insight.webp";
import parliamentInsight from "@/assets/media/parliament_insight.webp";
import compassInsight from "@/assets/media/compass_insight.webp";
import quoteImage from "@/assets/media/quote.webp";
import SmartLink from "@/components/ui/SmartLink";
import { ESSAY_PAGES_ACTIVE } from "@/lib/links";
import { essays } from "@/data/content";

const essayLink = (i) => ({ href: `/insights/${essays[i].slug}`, active: ESSAY_PAGES_ACTIVE });

export default function Insights() {
  const [mounted, setMounted] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="insights"
      className="relative w-full bg-[#050403] overflow-hidden pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-24 lg:pb-32 font-sans"
    >
      {/* ==========================================
          PERFORMANCE-OPTIMIZED PICTURE BACKGROUND
      ========================================== */}
      <div className="absolute inset-0 top-0 w-full h-[110vh] z-0 pointer-events-none overflow-hidden isolate">
        <picture className="absolute inset-0 w-full h-full opacity-80 mix-blend-luminosity [contain:paint]">
          <source media="(min-width: 1024px)" srcSet={insightTopDesktop.src} />
          <source media="(min-width: 768px)" srcSet={insightTopTablet.src} />
          <img 
            src={insightTopMobile.src} 
            alt="Insights Background" 
            className="w-full h-full object-cover object-top"
          />
        </picture>
        
        {/* Performance Safe Gradients - No blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050403]/20 via-[#050403]/80 to-[#050403]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050403] via-[#050403]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-10 lg:px-10">
        
        {/* ==========================================
            HERO TEXT SECTION
        ========================================== */}
        <div className="max-w-3xl translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[-100px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[#D4AF37]"></span>
              <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-[11px] font-semibold">
                INSIGHTS & ESSAYS
              </p>
            </div>

            <h2
              className="text-[#F5F2EB] leading-[1.1] text-[40px] md:text-[64px] lg:text-[76px] font-normal translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Ideas that <br />
              <span className="italic text-[#D4AF37]">Shape Institutions</span>
            </h2>

            <p className="mt-6 md:mt-8 text-[#A0A0A0] max-lg:text-[#C4C0B7] leading-relaxed max-w-xl text-[15px] md:text-[16px] translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[40px]">
              A curated archive of scholarly reflections on language, public policy, 
              and the administrative intellect—designed for those who govern and those who aspire.
            </p>
          </motion.div>

          {/* 4 Feature Icons with Subtle Hover */}
          <div className="mt-10 md:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[20px]">
            {[
              { icon: Feather, title: "Thoughtful", sub: "Analysis" },
              { icon: Landmark, title: "Evidence-Based", sub: "Perspectives" },
              { icon: BookOpen, title: "Language &", sub: "Policy Focus" },
              { icon: Globe, title: "Intellectual &", sub: "Administrative Focus" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start gap-3 group translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]">
                <item.icon className="w-7 h-7 text-[#D4AF37] stroke-[1.5] transition-transform duration-300 group-hover:-translate-y-1" />
                <div>
                  <p className="text-[#E0E0E0] text-[13px] font-medium leading-tight">{item.title}</p>
                  <p className="text-[#808080] text-[12px]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            FEATURED ESSAY + SIDEBAR GRID
        ========================================== */}
        {/* 
            --- MASTER TRANSLATE CONTROL PANEL (GRID CONTAINER) ---
            Mobile : translate-y-[20px]
            Tablet : md:translate-y-[30px]
            Desktop: lg:translate-y-[10px] lg:translate-x-[0px]
        */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 mt-14 md:mt-16 lg:mt-0 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[10px]">

{/* ================= LEFT: FEATURED ESSAY ================= */}
<div className="flex flex-col">
  <div className="flex items-center gap-4 pb-6">
    <div className="w-8 h-[1px] bg-[#D4AF37]" />
    <p className="uppercase tracking-[0.25em] text-[#D4AF37] text-[12px] font-semibold">
      FEATURED ESSAY
    </p>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.2 }}
    className="group relative bg-gradient-to-b from-[#110e0a]/70 to-[#050403]/90 backdrop-blur-md border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1),inset_0_1px_1px_rgba(212,175,55,0.2)] rounded-2xl p-5 md:p-6 isolate [contain:paint] transition-all duration-500 flex flex-col justify-center"
  >
    {/* Performance-Safe Internal Glow */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0) 70%)' }} />

    <div className="relative z-10 grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-6 md:gap-8 items-center h-full">
      {/* IMAGE: Reduced min-h to make the overall box shorter */}
      <div className="overflow-hidden rounded-xl h-full min-h-[200px] max-md:aspect-[16/10]">
        <img
          src={zoomInsight.src}
          alt="Language as Architecture"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-center">
        <span className="inline-flex w-fit rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
          FEATURED
        </span>
        
        <h2
          className="pt-4 text-[#F5F2EB] text-[26px] md:text-[34px] leading-[1.15]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Language as the Architecture of Governance
        </h2>
        
        <p className="pt-3 text-[#A0A0A0] text-[13px] leading-relaxed">
          Exploring how precision in language influences clarity in administration, 
          policy formulation, institutional trust, and democratic governance.
        </p>
        
        <div className="pt-5 flex flex-wrap items-center gap-4 text-[#808080] text-[11px] font-medium">
          <span className="flex items-center gap-1.5"><BookMarked className="w-3.5 h-3.5 text-[#D4AF37]"/> 12 May 2024</span>
          <span className="w-1 h-1 rounded-full bg-[#333]"></span>
          <span>8 min read</span>
          <span className="w-1 h-1 rounded-full bg-[#333]"></span>
          <span className="text-[#D4AF37]">Public Policy</span>
        </div>
        
        {/* PREMIUM PILL BUTTON */}
        <div className="pt-8 shrink-0">
          <SmartLink link={essayLink(0)} className="group/btn relative flex w-fit items-center gap-2 border border-[#D4AF37]/80 hover:border-[#D4AF37] bg-black/40 text-[#D4AF37] hover:text-white px-5 py-2.5 rounded-full text-[12px] font-medium uppercase tracking-[0.15em] transition-all duration-500 hover:-translate-y-1 hover:shadow-[inset_0_1px_4px_rgba(212,175,55,0.3),0_0_15px_rgba(212,175,55,0.1)] isolate">
            <span className="relative z-10">Read Full Essay</span>
            <ChevronRight className="w-4 h-4 text-[#D4AF37] stroke-[2] transition-all duration-500 group-hover/btn:text-white group-hover/btn:translate-x-1" />
          </SmartLink>
        </div>
      </div>
    </div>
  </motion.div>
</div>

          {/* ================= RIGHT: SIDEBAR (Categories, Trending, Subscribe) ================= */}
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-6 lg:gap-8 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[80px]">
            
            {/* 1. CATEGORIES (With slow duration-500 hover glow) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-[#110e0a]/70 to-[#050403]/90 backdrop-blur-md border border-[#D4AF37]/20 shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.08),inset_0_1px_1px_rgba(212,175,55,0.15)] rounded-2xl p-7 isolate [contain:paint] transition-all duration-500 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]"
            >
              <h4 className="flex items-center gap-3 uppercase tracking-[0.25em] text-[#D4AF37] text-[12px] font-semibold mb-6">
                <Library className="w-4 h-4" /> Categories
              </h4>
              <div className="space-y-1">
                {[
                  { name: "Language & Linguistics", count: 12, icon: MessageSquare },
                  { name: "Public Policy", count: 10, icon: Landmark },
                  { name: "Current Affairs", count: 15, icon: Globe },
                  { name: "Civil Services", count: 14, icon: Briefcase },
                  { name: "Education", count: 9, icon: BookOpen },
                  { name: "Research Notes", count: 7, icon: Feather }
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-center justify-between py-2.5 border-b border-[#D4AF37]/10 last:border-0 cursor-pointer">
                    <div className="flex items-center gap-3 text-[#B3B3B3] group-hover:text-[#F5F2EB] transition-colors">
                      <item.icon className="w-4 h-4 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors" />
                      <span className="text-[13.5px]">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#808080] text-[12px] font-mono group-hover:text-[#D4AF37] transition-colors">{item.count}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#333] group-hover:text-[#D4AF37] transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. TRENDING TOPICS (With slow duration-500 hover glow) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-[#110e0a]/70 to-[#050403]/90 backdrop-blur-md border border-[#D4AF37]/20 shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.08),inset_0_1px_1px_rgba(212,175,55,0.15)] rounded-2xl p-7 isolate [contain:paint] transition-all duration-500 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]"
            >
              <h4 className="flex items-center gap-3 uppercase tracking-[0.25em] text-[#D4AF37] text-[12px] font-semibold mb-6">
                <TrendingUp className="w-4 h-4" /> Trending Topics
              </h4>
              <div className="space-y-4">
                {[
                  "NEP 2020 and Education Reform",
                  "AI and the Future of Governance",
                  "Ethics, Empathy & Administration"
                ].map((text, idx) => (
                  <div key={idx} className="group flex items-start gap-3 cursor-pointer">
                    <TrendingUp className="w-4 h-4 text-[#D4AF37]/50 mt-0.5 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                    <p className="text-[#A0A0A0] text-[13.5px] leading-snug group-hover:text-[#F5F2EB] transition-colors">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. SUBSCRIBE BOX (With Lift Animation on Button) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#15110a] to-[#050403] border border-[#D4AF37]/30 shadow-[inset_0_1px_1px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1),inset_0_1px_1px_rgba(212,175,55,0.25)] rounded-2xl p-7 isolate [contain:paint] overflow-hidden transition-all duration-500 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]"
            >
              {/* Inner Glow (Zero lag radial gradient) */}
              <div className="absolute right-0 bottom-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom right, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0) 70%)' }} />
              
              <div className="relative z-10 flex justify-between items-start mb-2 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]">
                <p className="uppercase tracking-[0.25em] text-[#D4AF37] text-[11px] font-bold">Stay Inspired</p>
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-black/40">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>

              <h3 className="relative z-10 text-[#F5F2EB] text-[24px] leading-tight mb-2 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Subscribe to receive <br/> weekly insights
              </h3>
              
              <div className="relative z-10 mt-6 space-y-3 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]">
                <input
                  ref={emailRef}
                  type="email"
                  aria-label="Your email address"
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-[#D4AF37]/20 bg-black/50 px-4 py-3 text-[16px] md:text-[13px] text-white outline-none focus:border-[#D4AF37]/60 transition-colors placeholder:text-[#666]"
                />
                
                {/* SUBSCRIBE BUTTON: Pill-shaped + The Lift + The Glow */}
                <button type="button" onClick={() => subscribe(emailRef.current?.value)} className="w-full rounded-full border border-[#D4AF37]/80 hover:border-[#D4AF37] bg-[#D4AF37] hover:bg-transparent py-3.5 text-[13px] font-bold text-black hover:text-white hover:-translate-y-1 hover:shadow-[inset_0_1px_4px_rgba(212,175,55,0.3),0_0_20px_rgba(212,175,55,0.25)] transition-all duration-500">
                  Subscribe
                </button>
                
                <p className="text-[#666] text-[10px] text-center mt-2 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]">No spam. Only thoughtful ideas.</p>
              </div>
            </motion.div>

          </div>
        </div>

       {/* =========================================================
            LATEST INSIGHTS (Absolute Zero-Margin Architecture)
        ========================================================= */}
        {/* 
            --- MASTER TRANSLATE CONTROL PANEL --- 
            Mobile (Default) : translate-y-[30px] 
            Tablet (md:)     : md:translate-y-[40px]
            Desktop (lg:)    : lg:-translate-y-[320px] lg:-translate-x-[20px]
            
            DIRECTIONS:
            - NO margins (mt/mb) are used in this entire section. 
            - Change the 'lg:-translate-y-[320px]' value to move the block UP or DOWN on a laptop.
            - Change the 'lg:-translate-x-[20px]' value to adjust LEFT/RIGHT positioning.
        */}
        <div className="relative z-30 w-full lg:w-[66%] mt-14 md:mt-16 lg:mt-0 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:-translate-x-[20px] lg:-translate-y-[500px]">
          
          {/* Header Title - Using padding (pb) instead of margin */}
          <div className="flex items-center gap-4 pb-6">
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
            <p className="uppercase tracking-[0.25em] text-[#D4AF37] text-[11px] font-semibold">
              LATEST INSIGHTS
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {[
              {
                img: penInsight.src,
                title: "The Lexicon of Leadership",
                desc: "Why vocabulary shapes future civil servants.",
                date: "05 May 2024"
              },
              {
                img: parliamentInsight.src,
                title: "The Moral Compass",
                desc: "Administrative ethics in modern India.",
                date: "01 May 2024"
              },
              {
                img: compassInsight.src,
                title: "The Power of Words",
                desc: "Precision in global diplomacy and governance.",
                date: "27 Apr 2024"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group flex flex-col bg-gradient-to-b from-[#110e0a]/70 to-[#050403]/90 backdrop-blur-md border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 rounded-2xl overflow-hidden isolate [contain:paint] transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.1),inset_0_1px_1px_rgba(212,175,55,0.25)]"
              >
                {/* 
                   IMAGE: 'aspect-square' locks the ratio to exactly 1:1. 
                   'object-cover' perfectly fits the image inside without compressing it.
                */}
                <div className="w-full aspect-[16/10] md:aspect-square overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* CONTENT: Replaced all 'mb' with 'pb' (padding-bottom) for stability */}
                <div className="p-4 flex flex-col flex-1">
                  <h3
                    className="text-[19px] lg:text-[17px] leading-tight text-[#F5F2EB] pb-2"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-[12px] lg:text-[11px] leading-snug pb-4 flex-1">
                    {card.desc}
                  </p>
                  
                  {/* Divider Line */}
                  <div className="w-full h-px bg-[#D4AF37]/10" />
                  
                  {/* Footer of Card - Using pt-3 instead of mt for spacing from the divider */}
                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-1 text-[#808080] text-[9px] font-medium uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <BookMarked className="w-2.5 h-2.5 text-[#D4AF37]"/> {card.date}
                      </span>
                    </div>
                    
                    {/* PREMIUM PILL BUTTON */}
                    <SmartLink link={essayLink(idx + 1)} className="group/pill flex items-center gap-1 border border-[#D4AF37]/80 hover:border-[#D4AF37] bg-black/40 text-[#D4AF37] hover:text-white px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.15em] transition-all duration-500 hover:-translate-y-1 hover:shadow-[inset_0_1px_4px_rgba(212,175,55,0.3),0_0_15px_rgba(212,175,55,0.1)] isolate">
                      <span className="relative z-10">Read</span>
                      <ChevronRight className="relative z-10 w-3 h-3 stroke-[2.5] transition-all duration-500 group-hover/pill:translate-x-1" />
                    </SmartLink>
                  </div>
                </div>
              </motion.div>
            ))}
            
          </div>
        </div>

        {/* =========================================================
            QUOTE SECTION (Advanced Image Architecture Fix & Space Removal)
        ========================================================= */}
        {/* 
            --- MASTER CONTROL PANEL ---
            ARCHITECTURAL FIX: Added 'lg:-mb-[460px]'. 
            This strictly deletes the empty dead space left at the bottom of the page.
            RULE: If you change 'lg:-translate-y-[460px]', make sure to change 'lg:-mb-[460px]' to the exact same number to keep the bottom space balanced.
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-[66%] rounded-2xl overflow-hidden relative border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.1),inset_0_1px_1px_rgba(212,175,55,0.25)] isolate [contain:paint] transition-all duration-500 mt-12 md:mt-14 lg:mt-0 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:-translate-y-[460px] lg:-mb-[460px]"
        >
          {/* 
             BACKGROUND IMAGE FIX: 
             Instead of 'inset-0 w-full', the picture is strictly pinned to the right and limited to 60% width ('right-0 w-[60%]').
             This prevents the catastrophic zooming effect of 'object-cover', maintaining the image's original proportion.
          */}
          <picture className="absolute top-0 right-0 bottom-0 w-[80%] md:w-[60%] h-full z-0 [contain:paint]">
            <img
              src={quoteImage.src}
              alt="Ink and Pen"
              className="w-full h-full object-cover object-center opacity-100"
            />
          </picture>
          
          {/* CRUCIAL GRADIENT FIX: The gradient now starts solidly on the left and fades perfectly into the restricted image on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050403] via-[#050403]/90 via-45% to-transparent z-0" />
          
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10 z-0" />
          
          {/* CONTENT CONTAINER: Reduced py and min-h for a much slimmer (thinner) box */}
          <div className="relative z-10 pl-5 pr-6 py-6 lg:py-0 md:pl-6 lg:pl-4 md:pr-8 flex flex-col justify-center min-h-[160px] max-w-[95%] md:max-w-[75%] lg:max-w-[75%]">
            
            {/* Tagline - Reduced padding (pb-3) for compactness */}
            <div className="flex items-center gap-3 pb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]"></span> 
              <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-[9px] md:text-[10px] font-bold">
                THOUGHT OF THE WEEK
              </p>
            </div>

            {/* Quote Text */}
            <div className="flex gap-3 md:gap-4">
              <span className="text-[#D4AF37] text-[36px] md:text-[42px] leading-none font-serif pt-1 opacity-80">
                “
              </span>
              <div>
                <h2
                  className="text-[#F5F2EB] italic leading-[1.3] text-[18px] md:text-[22px] lg:text-[26px] drop-shadow-lg pr-4"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Words do not merely describe the world; they have the power to construct it.
                </h2>
                
                {/* Author Name - Reduced padding (pt-4) */}
                <p className="pt-4 uppercase tracking-[0.3em] text-[#D4AF37] text-[10px] font-bold">
                  — DIVYA GAUTAM
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}