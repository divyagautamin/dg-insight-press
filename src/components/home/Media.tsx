// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { subscribe } from "@/lib/subscribe";
import { 
    Newspaper, 
    Mic, 
    PlayCircle, 
    Award, 
    ArrowRight,
    Mail,
    FileText // <--- Added the missing FileText icon here
  } from "lucide-react";

// ============================
// BACKGROUND IMPORTS
// ============================
import mediaDesktop from "@/assets/desktop/media_top_desktop.webp";
import mediaTablet from "@/assets/tablet/media_top_tablet.webp";
import mediaMobile from "@/assets/mobile/media_top_mobile.webp";

// ============================
// IMAGE IMPORTS
// ============================
import quoteImage from "@/assets/media/quote.webp";
import SmartLink from "@/components/ui/SmartLink";
import { LINKS } from "@/lib/links";

export default function Media() {
  const [mounted, setMounted] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="media"
      className="relative w-full lg:min-h-screen bg-[#050403] overflow-hidden pt-20 md:pt-24 lg:pt-10 pb-20 md:pb-24 lg:pb-[340px] font-sans"
    >
      {/* ==========================================
          PERFORMANCE-OPTIMIZED PICTURE BACKGROUND
      ========================================== */}
      <div className="absolute inset-x-0 -top-16 w-full h-[115vh] z-0 pointer-events-none overflow-hidden isolate">
        <picture className="absolute inset-0 w-full h-full opacity-60 mix-blend-luminosity [contain:paint]">
          <source media="(min-width: 1024px)" srcSet={mediaDesktop.src} />
          <source media="(min-width: 768px)" srcSet={mediaTablet.src} />
          <img 
            src={mediaMobile.src} 
            alt="Media Background" 
            className="w-full h-full object-cover object-top"
          />
        </picture>
        {/* Aggressive fade to black so the grid cards below have a pure dark canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050403]/10 via-[#050403]/90 via-55% to-[#050403]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050403]/95 via-[#050403]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-10 lg:px-10">
        
        {/* ==========================================
            HERO TEXT & STATS SECTION
        ========================================== */}
        {/* 
            --- MASTER CONTROL PANEL (HERO) --- 
            Mobile : translate-y-[0px]
            Tablet : md:translate-y-[0px]
            Desktop: lg:translate-y-[0px]
        */}
        <div className="max-w-3xl translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[-20px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 pb-4">
              <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
              <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-[10px] font-bold">
                MEDIA & PRESS
              </p>
            </div>

            <h1
              className="text-[#F5F2EB] leading-[1.08] text-[40px] md:text-[56px] lg:text-[68px] font-normal"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              In the Media, <br />
              In the <span className="italic text-[#D4AF37]">Conversation</span>
            </h1>

            <p className="mt-6 text-[#A0A0A0] max-lg:text-[#C4C0B7] leading-relaxed max-w-lg text-[14px] md:text-[14.5px]">
              A growing archive of conversations, features, and recognitions that reflect the ideas, research, and work making an impact beyond the page.
            </p>

            <div className="mt-8 mb-8 w-14 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />

            {/* Hero Top Stats (From Reference Image) */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-wrap md:gap-12 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[30px]">
              {[
                { icon: Newspaper, label: "Interviews" },
                { icon: FileText, label: "Press Features" },
                { icon: Mic, label: "Podcasts & Talks" },
                { icon: Award, label: "Recognitions" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 lg:gap-5 group cursor-default max-md:rounded-xl max-md:border max-md:border-[#D4AF37]/15 max-md:bg-white/[0.02] max-md:py-5">
                  <stat.icon className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-[#D4AF37] stroke-[1.5] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                  <p className="text-[#808080] text-[12px] font-semibold tracking-wider">{stat.label}</p>
                  <h4 className="text-[#F5F2EB] text-[14px] font-serif leading-none">Forthcoming</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ==========================================
            FEATURED COVERAGE DIVIDER
        ========================================== */}
        {/* 
            --- MASTER CONTROL PANEL (DIVIDER) --- 
        */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-14 md:mt-16 lg:mt-0 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[160px]"
        >
          <span className="w-12 h-[1px] bg-[#D4AF37]/40" />
          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-[12px] font-bold">
            FEATURED COVERAGE
          </p>
          <span className="w-12 h-[1px] bg-[#D4AF37]/40" />
        </motion.div>

        {/* ==========================================
            4 MEDIA GRID CARDS (1 Col -> 2 Cols -> 4 Cols)
        ========================================== */}
        {/* 
            --- MASTER CONTROL PANEL (GRID CARDS) --- 
        */}
        <div className="relative z-20 mt-8 md:mt-10 lg:mt-0 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[180px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col items-center text-center p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#110e0a]/90 to-[#050403]/95 backdrop-blur-md border border-[#D4AF37]/20 shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(212,175,55,0.25)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full border border-[#D4AF37]/40 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <Newspaper className="w-7 h-7 text-[#D4AF37] stroke-[1.5]" />
              </div>
              <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase pb-2">Press Feature</p>
              <h3 className="text-[24px] text-[#F5F2EB] leading-tight pb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>Newspaper & <br/> Magazine</h3>
              <p className="text-[#A0A0A0] max-lg:text-[#BDB9B0] text-[13px] lg:text-[11.5px] leading-relaxed pb-8 flex-grow">
                Articles, features and press coverage in leading national and regional publications.
              </p>
              <SmartLink link={LINKS.mediaArticles} className="flex items-center gap-2 text-[#D4AF37] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 px-5 py-2.5 lg:py-2 rounded-full text-[12px] lg:text-[11px] font-medium transition-all duration-300 w-full justify-center group/btn">
                View All Articles
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </SmartLink>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col items-center text-center p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#110e0a]/90 to-[#050403]/95 backdrop-blur-md border border-[#D4AF37]/20 shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(212,175,55,0.25)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full border border-[#D4AF37]/40 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <Mic className="w-7 h-7 text-[#D4AF37] stroke-[1.5]" />
              </div>
              <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase pb-2">Interviews</p>
              <h3 className="text-[24px] text-[#F5F2EB] leading-tight pb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>Interviews & <br/> Conversations</h3>
              <p className="text-[#A0A0A0] max-lg:text-[#BDB9B0] text-[13px] lg:text-[11.5px] leading-relaxed pb-8 flex-grow">
                Conversations with platforms that explore ideas on language, education, governance and statecraft.
              </p>
              <SmartLink link={LINKS.mediaInterviews} className="flex items-center gap-2 text-[#D4AF37] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 px-5 py-2.5 lg:py-2 rounded-full text-[12px] lg:text-[11px] font-medium transition-all duration-300 w-full justify-center group/btn">
                View All Interviews
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </SmartLink>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col items-center text-center p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#110e0a]/90 to-[#050403]/95 backdrop-blur-md border border-[#D4AF37]/20 shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(212,175,55,0.25)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full border border-[#D4AF37]/40 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <PlayCircle className="w-7 h-7 text-[#D4AF37] stroke-[1.5]" />
              </div>
              <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase pb-2">Podcasts & Talks</p>
              <h3 className="text-[24px] text-[#F5F2EB] leading-tight pb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>Podcasts & <br/> Talks</h3>
              <p className="text-[#A0A0A0] max-lg:text-[#BDB9B0] text-[13px] lg:text-[11.5px] leading-relaxed pb-8 flex-grow">
                Audio conversations and talks that delve into thought leadership and public discourse.
              </p>
              <SmartLink link={LINKS.mediaPodcasts} className="flex items-center gap-2 text-[#D4AF37] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 px-5 py-2.5 lg:py-2 rounded-full text-[12px] lg:text-[11px] font-medium transition-all duration-300 w-full justify-center group/btn">
                View All Episodes
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </SmartLink>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col items-center text-center p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#110e0a]/90 to-[#050403]/95 backdrop-blur-md border border-[#D4AF37]/20 shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(212,175,55,0.25)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full border border-[#D4AF37]/40 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <Award className="w-7 h-7 text-[#D4AF37] stroke-[1.5]" />
              </div>
              <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase pb-2">Recognitions</p>
              <h3 className="text-[24px] text-[#F5F2EB] leading-tight pb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>Honors & <br/> Mentions</h3>
              <p className="text-[#A0A0A0] max-lg:text-[#BDB9B0] text-[13px] lg:text-[11.5px] leading-relaxed pb-8 flex-grow">
                Appreciations, invitations and recognitions that celebrate the journey and the work.
              </p>
              <SmartLink link={LINKS.mediaHonors} className="flex items-center gap-2 text-[#D4AF37] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 px-5 py-2.5 lg:py-2 rounded-full text-[12px] lg:text-[11px] font-medium transition-all duration-300 w-full justify-center group/btn">
                View All Honors
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </SmartLink>
            </motion.div>

          </div>
        </div>

        {/* =========================================================
            QUOTE SECTION (Full Width, Ultra-Slim)
        ========================================================= */}
        {/* 
            --- MASTER CONTROL PANEL (QUOTE) --- 
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full rounded-2xl overflow-hidden relative border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.1),inset_0_1px_1px_rgba(212,175,55,0.25)] isolate [contain:paint] transition-all duration-500 mt-12 md:mt-14 lg:mt-0 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[200px]"
        >
          <picture className="absolute top-0 right-0 bottom-0 w-[60%] md:w-[40%] lg:w-[30%] h-full z-0 [contain:paint]">
            <img
              src={quoteImage.src}
              alt="Ink and Pen"
              className="w-full h-full object-cover object-center opacity-100"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050403] via-[#050403]/95 via-50% to-transparent z-0" />
          <div className="absolute inset-0 bg-black/10 z-0" />

          {/* FIX: Reduced padding (py-5 md:py-6) and minimum height (min-h-[120px]) for an ultra-slim ribbon effect */}
          <div className="relative z-10 pl-5 pr-6 py-5 md:pl-10 md:pr-10 md:py-6 flex flex-col justify-center min-h-[120px] md:min-h-[130px] max-w-[95%] md:max-w-[80%] lg:max-w-[70%]">
            <div className="flex gap-3 md:gap-4">
              <span className="text-[#D4AF37] text-[36px] md:text-[42px] leading-none font-serif pt-1 opacity-80">“</span>
              <div>
                <h2
                  className="text-[#F5F2EB] italic leading-[1.35] text-[18px] md:text-[22px] lg:text-[26px] drop-shadow-lg"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Ideas deserve to be heard. Impact deserves to be remembered.
                </h2>
                <p className="pt-3 md:pt-4 uppercase tracking-[0.3em] text-[#D4AF37] text-[9.5px] md:text-[10.5px] font-bold">
                  — DIVYA GAUTAM
                </p>
              </div>
            </div>
          </div>
        </motion.div>

       {/* =========================================================
            NEWSLETTER / SUBSCRIBE SECTION (Upgraded Premium UI)
        ========================================================= */}
        {/* 
            --- MASTER CONTROL PANEL (NEWSLETTER) --- 
        */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          /* ARCHITECTURE UPGRADE: Added 'group' and extreme hover glow transitions */
          className="group w-full rounded-[24px] border border-[#D4AF37]/25 bg-gradient-to-r from-[#0a0908]/90 via-[#110e0a]/90 to-[#0a0908]/90 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(212,175,55,0.3)] transition-all duration-500 p-6 md:p-10 mt-6 md:mt-8 lg:mt-0 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[240px]"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Side: Icon & Title */}
            <div className="flex items-center gap-5 md:gap-8 w-full lg:w-auto">
              {/* UPGRADE: Icon background and border react to parent hover */}
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#D4AF37]/5 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/70 transition-all duration-500">
                <Mail className="w-7 h-7 md:w-9 md:h-9 text-[#D4AF37] stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase pb-1 md:pb-2">Stay Updated</p>
                <h3 className="text-[28px] md:text-[36px] text-[#F5F2EB] leading-none" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Never miss a story.
                </h3>
              </div>
            </div>

            {/* Middle: Text */}
            <div className="w-full lg:w-auto lg:max-w-[250px]">
              <p className="text-[#A0A0A0] text-[12px] md:text-[13px] leading-relaxed text-center lg:text-left">
                Subscribe to receive updates about new interviews, articles and features.
              </p>
            </div>

            {/* Right Side: Input & Button */}
            {/* ARCHITECTURE FIX: Removed 'sm:items-center' and strictly used 'items-start' to perfectly align the button with the input field */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
              <div className="w-full sm:w-auto flex flex-col">
                <input 
                  ref={emailRef}
                  type="email" 
                  placeholder="Enter your email address" 
                  aria-label="Email address" className="w-full sm:w-[260px] md:w-[300px] lg:w-[260px] bg-[#120f0a]/90 border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-[16px] md:text-[13px] text-[#F5F2EB] outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 placeholder:text-[#9a9486] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                />
                <p className="text-[#8E8E8E] text-[10px] mt-2 ml-1">No spam. Only meaningful updates.</p>
              </div>
              <button type="button" onClick={() => subscribe(emailRef.current?.value)} className="w-full sm:w-auto border border-[#D4AF37] bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-[#f0cf67] hover:shadow-[0_0_28px_rgba(212,175,55,0.45)] font-bold tracking-widest uppercase text-[12px] px-8 py-3 rounded-lg transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}