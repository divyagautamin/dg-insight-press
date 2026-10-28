'use client';

import { motion } from "framer-motion";
import { 
  Landmark, 
  Feather, 
  Globe, 
  BookOpen, 
  Sparkles, 
  Megaphone,
  Book,
  GraduationCap,
  Users,
  MessageSquare,
  FileText,
  ArrowRight
} from "lucide-react";

import researchDesktop from "@/assets/desktop/research_top_desktop.webp";
import researchTablet from "@/assets/tablet/research_top_tablet.webp";
import researchMobile from "@/assets/mobile/research_top_mobile.webp";
import dgLogoGolden from "@/assets/icons/dg_logo_golden.webp";
import SmartLink from "@/components/ui/SmartLink";
import { LINKS, RESEARCH_PAGES_ACTIVE } from "@/lib/links";
import { researchPapers } from "@/data/content";
import { softGlow } from "@/lib/glow";
import { GoldDust, SparkleField } from "@/components/ui/Twinkle";

const paperLink = (i: number) => ({ href: `/research/${researchPapers[i].slug}`, active: RESEARCH_PAGES_ACTIVE });

export default function Research() {
  return (
    <section id="research" className="relative w-full lg:min-h-screen bg-[#050403] font-sans pb-16 md:pb-20 lg:pb-32">
      
      {/* ==========================================
          PERFORMANCE-OPTIMIZED BACKGROUND ARCHITECTURE
          (Uses <picture> to download ONLY 1 image, not 3)
      ========================================== */}
      <div className="absolute inset-0 top-0 w-full h-[120vh] z-0 pointer-events-none overflow-hidden">
        <picture className="absolute inset-0 w-full h-full opacity-80">
          <source media="(min-width: 1024px)" srcSet={researchDesktop.src} />
          <source media="(min-width: 768px)" srcSet={researchTablet.src} />
          <img loading="lazy" decoding="async" 
            src={researchMobile.src} 
            alt="Research Background" 
            className="w-full h-full object-cover object-right-top"
          />
        </picture>
        
        {/* Simplified Gradients (Less paint calculations) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050403]/10 via-[#050403]/80 to-[#050403]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050403] via-[#050403]/60 to-transparent" />
      </div>

      {/* ==========================================
          MAIN CONTENT CONTAINER
      ========================================== */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-10 pt-16 md:pt-20 lg:pt-0 translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[10px] lg:translate-y-[75px]" >
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-[#D4AF37]"></span>
            <span className="uppercase tracking-[0.3em] text-[#D4AF37] text-[11px] font-semibold">
              Research Portfolio
            </span>
          </div>

          <h2 
            className="text-[#F5F2EB] text-[40px] md:text-[60px] lg:text-[78px] leading-[1.1] font-normal"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Academic Portfolio <br />
            <span className="italic text-[#D4AF37]">& Research</span>
          </h2>

          <p className="mt-6 md:mt-8 max-w-xl text-[#A0A0A0] max-lg:text-[#C4C0B7] text-[15px] md:text-[17px] lg:text-[18px] translate-y-[0px] md:translate-y-[0px] lg:translate-y-[20px] max-lg:leading-relaxed">
            A collection of scholarly research exploring language, policy, education and governance with academic rigour and global relevance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mt-10 md:mt-12 lg:mt-0 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[80px]">
            {[
              { icon: Landmark, title: "Evidence-Based", sub: "Research" },
              { icon: Feather, title: "Interdisciplinary", sub: "Approach" },
              { icon: Globe, title: "Global", sub: "Perspective" },
              { icon: BookOpen, title: "Impact-Driven", sub: "Knowledge" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start gap-3">
                <item.icon className="w-7 h-7 text-[#D4AF37] stroke-[1.5]" />
                <div>
                  <p className="text-[#E0E0E0] text-[13px] font-medium leading-tight">{item.title}</p>
                  <p className="text-[#808080] text-[12px]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ==========================================
            LATEST RESEARCH GRID (Pseudo-Glassmorphism - 0% Lag)
        ========================================== */}
        <div id="publications" className="mt-16 md:mt-20 lg:mt-32">
          <div className="flex items-center gap-3 mb-10">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="uppercase tracking-[0.25em] text-[#D4AF37] text-[13px] font-semibold">
              Latest Research
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col justify-between bg-gradient-to-b from-[#1a150c]/60 to-[#050403]/80 border border-[#D4AF37]/30 shadow-[inset_0_1px_1px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/70 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 p-5 sm:p-7 md:p-8 rounded-xl isolate [contain:paint] transform-gpu will-change-transform translate-x-[0px] translate-y-[0px]"
            >
              <div>
                <span className="inline-block bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-5 md:mb-8">
                  New
                </span>
                <div className="w-12 h-12 md:w-14 md:h-14 border border-[#D4AF37]/30 flex items-center justify-center mb-4 md:mb-6 rounded-sm bg-black/50">
                  <Landmark className="w-6 h-6 text-[#D4AF37] stroke-[1.5]" />
                </div>
                <h4 className="text-[21px] md:text-[24px] text-[#F5F2EB] leading-tight mb-3 md:mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Lexical Structures in Administrative Discourse
                </h4>
                <p className="text-[#9A9A9A] max-lg:text-[#B5B1A8] text-[14px] leading-relaxed mb-6 md:mb-8">
                  An investigation into how lexical precision shapes clarity and authority in institutional communication.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[12px] text-[#808080] mb-4">
                  <span className="text-[#D4AF37]">🗓</span>
                  <span>Journal of Language & Policy</span>
                  <span className="w-px h-3 bg-gray-700"></span>
                  <span>2024</span>
                </div>
                <div className="w-full h-px bg-[#D4AF37]/10 mb-4"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[#808080] text-[11px] font-mono">Status: Under Review</span>
                  <SmartLink link={paperLink(0)} className="text-[#D4AF37] text-[13px] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="w-4 h-4" />
                  </SmartLink>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col justify-between bg-gradient-to-b from-[#1a150c]/60 to-[#050403]/80 border border-[#D4AF37]/30 shadow-[inset_0_1px_1px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/70 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 p-5 sm:p-7 md:p-8 rounded-xl isolate [contain:paint] transform-gpu will-change-transform translate-x-[0px] translate-y-[0px]"
            >
              <div>
                <span className="inline-block bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-5 md:mb-8">
                  New
                </span>
                <div className="w-12 h-12 md:w-14 md:h-14 border border-[#D4AF37]/30 flex items-center justify-center mb-4 md:mb-6 rounded-sm bg-black/50">
                  <Feather className="w-6 h-6 text-[#D4AF37] stroke-[1.5]" />
                </div>
                <h4 className="text-[21px] md:text-[24px] text-[#F5F2EB] leading-tight mb-3 md:mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Etymology as a Pedagogical Tool
                </h4>
                <p className="text-[#9A9A9A] max-lg:text-[#B5B1A8] text-[14px] leading-relaxed mb-6 md:mb-8">
                  Exploring root-based learning strategies to enhance vocabulary acquisition among competitive exam aspirants.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[12px] text-[#808080] mb-4">
                  <span className="text-[#D4AF37]">🗓</span>
                  <span>Education & Learning Review</span>
                  <span className="w-px h-3 bg-gray-700"></span>
                  <span>2024</span>
                </div>
                <div className="w-full h-px bg-[#D4AF37]/10 mb-4"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[#808080] text-[11px] font-mono">Status: Under Review</span>
                  <SmartLink link={paperLink(1)} className="text-[#D4AF37] text-[13px] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="w-4 h-4" />
                  </SmartLink>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group md:col-span-2 lg:col-span-1 flex flex-col justify-between bg-gradient-to-b from-[#1a150c]/60 to-[#050403]/80 border border-[#D4AF37]/30 shadow-[inset_0_1px_1px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/70 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 p-5 sm:p-7 md:p-8 rounded-xl isolate [contain:paint] transform-gpu will-change-transform translate-x-[0px] translate-y-[0px]"
            >
              <div>
                <span className="inline-block bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-5 md:mb-8">
                  New
                </span>
                <div className="w-12 h-12 md:w-14 md:h-14 border border-[#D4AF37]/30 flex items-center justify-center mb-4 md:mb-6 rounded-sm bg-black/50">
                  <Megaphone className="w-6 h-6 text-[#D4AF37] stroke-[1.5]" />
                </div>
                <h4 className="text-[21px] md:text-[24px] text-[#F5F2EB] leading-tight mb-3 md:mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Language and Public Policy Communication
                </h4>
                <p className="text-[#9A9A9A] max-lg:text-[#B5B1A8] text-[14px] leading-relaxed mb-6 md:mb-8">
                  Analysing the role of precise language in effective, citizen-facing policy communication.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[12px] text-[#808080] mb-4">
                  <span className="text-[#D4AF37]">🗓</span>
                  <span>Public Policy Quarterly</span>
                  <span className="w-px h-3 bg-gray-700"></span>
                  <span>2024</span>
                </div>
                <div className="w-full h-px bg-[#D4AF37]/10 mb-4"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[#808080] text-[11px] font-mono">Status: Under Review</span>
                  <SmartLink link={paperLink(2)} className="text-[#D4AF37] text-[13px] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="w-4 h-4" />
                  </SmartLink>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ==========================================
            FOCUS AREAS & IMPACT — Premium Compact Glass
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-8">

{/* Left Panel */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true, amount: 0.2 }}
  className="group relative bg-gradient-to-b from-[#110e0a]/70 to-[#050403]/90 border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 p-6 rounded-xl flex flex-col justify-between isolate [contain:paint] transition-all duration-300 translate-x-[0px] translate-y-[0px]"
>
  <div className="relative z-10">
    <h3 className="uppercase tracking-[0.2em] text-[#D4AF37] text-[12px] font-semibold mb-6 flex items-center gap-3">
      <Sparkles className="w-4 h-4" /> Research Focus Areas
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {[
        { icon: Book, text: "Language & Linguistics" },
        { icon: Users, text: "Public Administration" },
        { icon: Landmark, text: "Public Policy & Governance" },
        { icon: Feather, text: "Etymology & Lexical Studies" },
        { icon: GraduationCap, text: "Education & Pedagogy" },
        { icon: MessageSquare, text: "Communication & Discourse" }
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="w-9 h-9 border border-[#D4AF37]/25 flex items-center justify-center rounded-md bg-[#D4AF37]/5 shrink-0">
            <item.icon className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <span className="text-[#E0E0E0] text-[13px]">{item.text}</span>
        </div>
      ))}
    </div>
  </div>
  <div className="relative z-10 mt-6 pt-4 border-t border-[#D4AF37]/20 flex justify-center">
    <p className="italic text-[#D4AF37]/80 text-[14px]" style={{ fontFamily: "var(--font-playfair), serif" }}>
      Interdisciplinary research with real-world impact.
    </p>
  </div>
</motion.div>

{/* Right Panel */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: 0.05 }}
  viewport={{ once: true, amount: 0.2 }}
  className="group relative bg-gradient-to-b from-[#110e0a]/70 to-[#050403]/90 border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 p-6 rounded-xl flex flex-col justify-between isolate [contain:paint] transition-all duration-300 translate-x-[0px] translate-y-[0px]"
>
  <div className="relative z-10">
    <h3 className="uppercase tracking-[0.2em] text-[#D4AF37] text-[12px] font-semibold mb-6 flex items-center gap-3">
      <Sparkles className="w-4 h-4" /> Academic Impact
    </h3>
    <div className="grid grid-cols-2 gap-5">
      {[
        { icon: FileText, value: "04+", label: <>Research<br/>Papers</> },
        { icon: BookOpen, value: "550+", label: <>Pages Authored<br/><span className="text-[10px] opacity-70">(Vocab Decode)</span></> },
        { icon: Globe, value: "03+", label: <>International<br/>Publications</> },
        { icon: Users, value: "05+", label: <>Conferences &<br/>Presentations</> },
      ].map((stat, idx) => (
        <div key={idx} className="flex flex-col gap-1.5">
          <stat.icon className="w-6 h-6 text-[#D4AF37] stroke-[1.5]" />
          <h4 className="text-[28px] text-[#F5F2EB] font-light leading-none mt-1" style={{ fontFamily: "var(--font-playfair), serif" }}>{stat.value}</h4>
          <p className="text-[#9A9A9A] text-[12px] leading-snug">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="relative z-10 mt-6 pt-4 border-t border-[#D4AF37]/20 flex justify-center">
    <p className="italic text-[#D4AF37]/80 text-[14px] text-center" style={{ fontFamily: "var(--font-playfair), serif" }}>
      Committed to academic excellence and societal advancement.
    </p>
  </div>
</motion.div>

</div>

       {/* ==========================================
            ARCHIVE BANNER — Ultra Premium (Like Reference Image)
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 md:mt-16 relative overflow-hidden bg-gradient-to-r from-[#0a0703] via-[#1a1309] to-[#0a0703] border border-[#D4AF37]/40 rounded-[28px] md:rounded-[40px] py-10 px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(212,175,55,0.1)] isolate [contain:paint] translate-x-[0px] translate-y-[0px]"
        >
          {/* Internal Premium Glow (Performance Safe) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none" style={{ background: softGlow(0.18, "ellipse at center") }} />
          
          {/* Subtle Star Particles (CSS only) */}
          <div className="absolute left-[10%] top-[20%] w-1 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]" />
          <div className="absolute right-[20%] bottom-[30%] w-1 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]" />
          <GoldDust count={14} seed={5} rise={36} />
          <SparkleField stars={[[22, 8, 10, 0.5], [74, 44, 8, 2.1], [18, 70, 11, 1.3], [80, 94, 9, 2.9]]} />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            {/* Emblem / Custom DG Logo */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-[2px] border-dashed border-[#D4AF37]/50 flex items-center justify-center bg-black/60 shadow-[inset_0_0_20px_rgba(212,175,55,0.3)]">
              <div className="absolute inset-2 border border-[#D4AF37]/30 rounded-full" />
              <img loading="lazy" decoding="async" 
                src={dgLogoGolden.src} 
                alt="DG Insight Press" 
                className="w-14 h-14 md:w-16 md:h-16 lg:w-50 lg:h-50 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] relative z-10"
              />
            </div>
            
            <div className="translate-y-[0px]">
              <h3 className="text-[26px] md:text-[32px] text-[#F5F2EB] leading-tight drop-shadow-md" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Explore My Complete <br className="hidden md:block" />
                <span className="italic text-[#D4AF37]">Academic Research Archive</span>
              </h3>
              <p className="text-[#A0A0A0] text-[13px] md:text-[14px] mt-2 tracking-wide font-light max-w-md">
                Access the full collection of research papers, publications, and academic contributions.
              </p>
            </div>
          </div>

          {/* Premium Pill-Shaped Button */}
          <div className="relative z-10 shrink-0 translate-y-[0px]">
            <SmartLink link={LINKS.researchArchive} className="group/btn relative flex items-center gap-4 bg-black/40 border border-[#D4AF37]/80 text-[#D4AF37] px-8 py-4 md:px-10 md:py-4 text-[11.5px] md:text-[14px] font-medium tracking-[0.12em] md:tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] active:scale-95">
              <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">
                Explore Full Academic Archive
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-300 group-hover/btn:text-white group-hover/btn:translate-x-1" />
            </SmartLink>
          </div>
        </motion.div>

      </div>
    </section>
  );
}