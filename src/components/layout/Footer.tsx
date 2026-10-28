"use client";

import React, { useRef } from "react";
import { subscribe } from "@/lib/subscribe";
import { softGlow } from "@/lib/glow";
import Link from "next/link";

// 1. Lucide React Imports
import {
  BookOpen,
  Feather,
  ChevronRight,
  Mail,
  MapPin,
  Clock,
  Send,
  Award,
  Globe,
  Target,
  FileText,
  ArrowUp
} from "lucide-react";

// 2. React Icons Imports
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube, FaGithub } from "react-icons/fa6";

import { LINKS, CONTACT, SOCIALS } from "@/lib/links";
import { showComingSoon } from "@/components/ui/SmartLink";

export default function PremiumFooter() {
  const emailRef = useRef<HTMLInputElement>(null);
  
  // =========================================================================
  // MASTER CONTROL: Saare links ab ek hi file se control hote hain:
  //   src/lib/links.ts
  // Wahan kisi page ko 'active: true' kar dein to woh link yahan khul jayega.
  // 'active: false' rakhein to link band rahega (click par "Coming soon" dikhega).
  // =========================================================================

  const navigateLinks = [
    { name: "Home", id: LINKS.home.href, active: LINKS.home.active },
    { name: "About Me", id: LINKS.about.href, active: LINKS.about.active },
    { name: "Research", id: LINKS.research.href, active: LINKS.research.active },
    { name: "Insights & Essays", id: LINKS.insights.href, active: LINKS.insights.active },
    { name: "Journey", id: LINKS.journey.href, active: LINKS.journey.active },
    { name: "Media & Press", id: LINKS.media.href, active: LINKS.media.active },
    { name: "Reviews & Testimonials", id: LINKS.reviews.href, active: LINKS.reviews.active },
    { name: "FAQ & Contact", id: LINKS.support.href, active: LINKS.support.active },
  ];

  const exploreLinks = [
    { name: "Vocab Decode", id: LINKS.vocabDecode.href, active: LINKS.vocabDecode.active },
    { name: "Personally Signed Copy", id: LINKS.signedCopy.href, active: LINKS.signedCopy.active },
    { name: "Research Papers", id: LINKS.research.href, active: LINKS.research.active },
    { name: "Publications", id: LINKS.publicationsPage.href, active: LINKS.publicationsPage.active },
    { name: "Essays & Articles", id: LINKS.insights.href, active: LINKS.insights.active },
  ];

  const legalLinks = [
    { name: "Privacy Policy", id: LINKS.privacy.href, active: LINKS.privacy.active },
    { name: "Terms", id: LINKS.terms.href, active: LINKS.terms.active },
    { name: "Cookies", id: LINKS.cookies.href, active: LINKS.cookies.active },
    { name: "Disclaimer", id: LINKS.disclaimer.href, active: LINKS.disclaimer.active },
  ];

  const socialLinks = [
    { Icon: FaLinkedinIn, label: "LinkedIn", ...SOCIALS.linkedin },
    { Icon: FaInstagram, label: "Instagram", ...SOCIALS.instagram },
    { Icon: FaXTwitter, label: "X (Twitter)", ...SOCIALS.twitter },
    { Icon: FaYoutube, label: "YouTube", ...SOCIALS.youtube },
    { Icon: FaGithub, label: "GitHub", ...SOCIALS.github },
  ];

  // Smooth Scroll Function (ONLY for the Back to Top button)
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#050403] text-[#F5F2EB] overflow-hidden border-t border-[#D4AF37]/20 font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
      <div className="absolute -bottom-[160px] left-1/2 -translate-x-1/2 w-[900px] h-[420px] pointer-events-none" style={{ background: softGlow(0.06, "ellipse 50% 50% at center") }}></div>

      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 py-5 lg:py-8">
        
        {/* ==========================================
            1. TOP STRIP: QUOTE & QUICK ACTIONS 
        ========================================== */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-5 pb-5 lg:pb-6 border-b border-[#D4AF37]/15">
          
          <div className="text-center xl:text-left w-full xl:w-auto overflow-hidden">
            <h2 
              className="text-[17px] md:text-[17px] lg:text-[25px] text-[#F5F2EB] tracking-wide flex items-center justify-center xl:justify-start lg:whitespace-nowrap"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-[#D4AF37] text-[23px] lg:text-[29px] leading-none mr-2">“</span>
              <span className="italic">Knowledge outlives power. Language outlives time.</span>
            </h2>
            <div className="mt-2 flex items-center justify-center xl:justify-start gap-3 opacity-90">
              <div className="h-px w-8 bg-[#D4AF37]/40"></div>
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[8px] lg:text-[10px] font-semibold">Divya Gautam</span>
              <div className="h-px w-8 bg-[#D4AF37]/40"></div>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-3 w-full xl:w-auto mt-1 xl:mt-0">
            <span className="hidden 2xl:block text-[#A2A2A2] uppercase tracking-[0.2em] text-[9px] mr-2">Quick Actions</span>
            
            <Link href={LINKS.research.href} className="flex items-center gap-1.5 lg:gap-2 rounded border border-[#D4AF37]/60 bg-transparent px-4 py-2 lg:px-5 lg:py-2.5 transition-all duration-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] w-auto">
              <BookOpen className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#D4AF37]" />
              <span className="text-[10px] lg:text-[12px] text-[#D4AF37] font-medium tracking-wide whitespace-nowrap">Explore Research</span>
            </Link>

            <Link href={LINKS.insights.href} className="flex items-center gap-1.5 lg:gap-2 rounded border border-[#D4AF37]/60 bg-transparent px-4 py-2 lg:px-5 lg:py-2.5 transition-all duration-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] w-auto">
              <Feather className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#D4AF37]" />
              <span className="text-[10px] lg:text-[12px] text-[#D4AF37] font-medium tracking-wide whitespace-nowrap">Read Insights</span>
            </Link>

            <Link href={LINKS.contact.href} className="flex items-center gap-1.5 lg:gap-2 rounded bg-[#D4AF37] px-5 py-2 lg:px-6 lg:py-2.5 text-black transition-all duration-300 hover:bg-[#c5a031] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] w-auto">
              <Award className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-black" />
              <span className="text-[10px] lg:text-[12px] font-bold tracking-wide whitespace-nowrap">Reserve Signed Copy</span>
            </Link>
          </div>
          
        </div>

        {/* ==========================================
            2. MAIN FOOTER MULTI-COLUMN GRID 
        ========================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 gap-x-6 gap-y-8 lg:gap-y-7 py-8 lg:py-9 border-b border-[#D4AF37]/15">
          
          {/* BRAND COLUMN */}
          <div className="col-span-2 lg:col-span-1 xl:col-span-4 flex flex-col items-center xl:items-start text-center xl:text-left">
            <div className="mb-3">
              <div className="text-[#D4AF37] text-[39px] lg:text-[47px] font-serif leading-none tracking-tight flex justify-center xl:justify-start">DG</div>
              <h2 className="text-[#D4AF37] text-[10px] lg:text-[12px] tracking-[0.25em] uppercase font-light mt-1.5 lg:mt-2">Divya Gautam</h2>
              <p className="text-[#A2A2A2] text-[8px] lg:text-[9px] tracking-[0.18em] uppercase mt-1.5 leading-relaxed opacity-80">
                Author • Researcher <br/> 
                Analyst • Civil Services Aspirant <br/>
                Founder, DG Insight Press
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full max-w-[280px] lg:max-w-[300px] mt-1">
              {[
                { title: "Ideas That Endure", icon: BookOpen },
                { title: "Research That Matters", icon: FileText },
                { title: "Global Perspectives", icon: Globe },
                { title: "Purpose That Drives", icon: Target }
              ].map((box, i) => (
                <div key={i} className="group rounded border border-[#D4AF37]/15 bg-[#0A0806]/60 p-2 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 cursor-default flex items-center gap-2">
                  <box.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#D4AF37] opacity-80 group-hover:opacity-100 flex-shrink-0" />
                  <h4 className="text-[#E0E0E0] text-[9px] lg:text-[10px] font-medium leading-tight">{box.title}</h4>
                </div>
              ))}
            </div>

            <div className="w-full max-w-[280px] lg:max-w-[300px] flex flex-col items-center xl:items-start mt-4 pt-3 border-t border-[#D4AF37]/10">
              <div className="flex gap-2.5 justify-center">
                {socialLinks.map(({ Icon, label, href, active }, i) => (
                  <Link
                    key={i}
                    href={active ? href : "#"}
                    aria-label={label}
                    target={active ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => { if (!active) { e.preventDefault(); showComingSoon(`${label} profile is coming soon.`); } }}
                    className="flex h-8 w-8 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#0A0806] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 hover:-translate-y-1 shadow-[0_2px_10px_rgba(212,175,55,0.05)]">
                    <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-[#D4AF37]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* NAVIGATE (Dynamic Array Linked) */}
          <div className="xl:col-span-2">
            <h3 className="mb-3 lg:mb-4 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Navigate</h3>
            <ul className="space-y-2 lg:space-y-2.5">
              {navigateLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.active ? item.id : "#"} 
                    onClick={(e) => { if (!item.active) { e.preventDefault(); showComingSoon(); } }}
                    className={`group flex items-center text-[12.5px] lg:text-[13px] transition-all duration-300 ${item.active ? "text-[#A2A2A2] hover:text-[#D4AF37]" : "text-[#555] cursor-default"}`}
                  >
                    <ChevronRight className={`w-3 h-3 lg:w-3.5 lg:h-3.5 opacity-0 -ml-3 group-hover:ml-0 transition-all duration-300 ${item.active ? "group-hover:opacity-100 text-[#D4AF37]" : ""}`} />
                    <span className={`transform transition-transform duration-300 ${item.active ? "group-hover:translate-x-1" : ""}`}>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPLORE (Dynamic Array Linked) */}
          <div className="xl:col-span-2">
            <h3 className="mb-3 lg:mb-4 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Explore</h3>
            <ul className="space-y-2 lg:space-y-2.5">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.active ? item.id : "#"} 
                    onClick={(e) => { if (!item.active) { e.preventDefault(); showComingSoon(); } }}
                    className={`group flex items-center text-[12.5px] lg:text-[13px] transition-all duration-300 ${item.active ? "text-[#A2A2A2] hover:text-[#D4AF37]" : "text-[#555] cursor-default"}`}
                  >
                    <ChevronRight className={`w-3 h-3 lg:w-3.5 lg:h-3.5 opacity-0 -ml-3 group-hover:ml-0 transition-all duration-300 ${item.active ? "group-hover:opacity-100 text-[#D4AF37]" : ""}`} />
                    <span className={`transform transition-transform duration-300 ${item.active ? "group-hover:translate-x-1" : ""}`}>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT & NEWSLETTER */}
          <div className="col-span-2 lg:col-span-1 xl:col-span-4 flex flex-col gap-5 lg:gap-7">
            <div>
              <h3 className="mb-3 lg:mb-4 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Connect</h3>
              <div className="space-y-2 lg:space-y-2.5">
                <a href={`mailto:${CONTACT.pressEmail}`} className="flex items-center gap-2.5 text-[#A2A2A2] hover:text-[#D4AF37] transition-colors cursor-pointer">
                  <Mail className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#D4AF37]" />
                  <p className="text-[12px] lg:text-[13px] break-all">{CONTACT.pressEmail}</p>
                </a>
                <div className="flex items-center gap-2.5 text-[#A2A2A2]">
                  <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#D4AF37]" />
                  <p className="text-[11px] lg:text-[13px]">India</p>
                </div>
                <div className="flex items-center gap-2.5 text-[#A2A2A2]">
                  <Clock className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#D4AF37]" />
                  <div className="flex gap-1.5 items-center">
                    <p className="text-[11px] lg:text-[13px]">Response:</p>
                    <p className="text-[10px] lg:text-[11px] text-[#777]">Within 24 Hrs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative w-full md:max-w-[420px] lg:max-w-[320px] flex flex-col rounded-r-lg rounded-l-[3px] border-y border-r border-[#D4AF37]/10 border-l-[2px] border-l-[#D4AF37]/70 bg-[#0A0806]/50 p-4 lg:p-5 transition-all duration-500 hover:border-[#D4AF37]/30 hover:bg-[#0A0806]/70 focus-within:border-[#D4AF37]/60 focus-within:bg-[#050403]/95 focus-within:shadow-[0_0_20px_rgba(212,175,55,0.15)] overflow-hidden">
              <div className="absolute -right-16 -top-16 h-44 w-44 pointer-events-none opacity-60 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100" style={{ background: softGlow(0.18) }}></div>
              
              <div className="relative z-10">
                <h3 className="mb-1 text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Newsletter</h3>
                <p className="mb-1 font-serif text-[14px] lg:text-[15px] tracking-wide text-[#F5F2EB]">The DG Circle</p>
                <p className="mb-3 lg:mb-4 text-[10px] lg:text-[11px] leading-relaxed text-[#8E8E8E]">Monthly research, writing notes & updates.</p>
              </div>
              
              <div className="relative z-10 flex h-[34px] lg:h-[38px] w-full items-center overflow-hidden rounded-[4px] border border-[#D4AF37]/40 bg-[#120f0a] transition-all duration-300 focus-within:border-[#D4AF37]/80 focus-within:ring-1 focus-within:ring-[#D4AF37]/30">
                <input ref={emailRef} type="email" aria-label="Email for newsletter" placeholder="Enter your email..." className="h-full w-full bg-transparent px-3 text-[16px] md:text-[11px] lg:text-[12px] text-[#F5F2EB] placeholder:text-[#9a9486] outline-none transition-colors" />
                <button type="button" aria-label="Subscribe" onClick={() => subscribe(emailRef.current?.value)} className="flex h-full w-[42px] lg:w-[46px] items-center justify-center bg-[#D4AF37] text-black transition-all duration-300 hover:bg-[#b39129] hover:brightness-110 active:scale-95">
                  <Send className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                </button>
              </div>
              <p className="relative z-10 mt-2.5 lg:mt-3 text-[8.5px] lg:text-[9px] font-medium text-[#777777] transition-colors group-focus-within:text-[#D4AF37]/70">No spam. Only thoughtful insights.</p>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. ABSOLUTE BOTTOM FOOTER 
        ========================================== */}
        <div className="mt-5 lg:mt-6 flex flex-col lg:flex-row items-center justify-between gap-5 relative">
          
          <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-1.5 w-full lg:w-1/3">
            <p className="text-[#777] text-[10px] lg:text-[11px] font-medium">© 2026–Present DG Insight Press</p>
            
            {/* Legal Links (Dynamic Array Linked) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 text-[10px] text-[#777] lg:text-[#666]">
              {legalLinks.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.active ? item.id : "#"}
                  onClick={(e) => { if (!item.active) { e.preventDefault(); showComingSoon(); } }}
                  className={`transition-colors ${item.active ? "hover:text-[#D4AF37] cursor-pointer" : "cursor-default opacity-70"}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-1.5 w-full lg:w-1/3 lg:absolute lg:left-1/2 lg:-translate-x-1/2 my-3 lg:my-0">
             <div className="flex items-center gap-2 lg:gap-3 text-[#D4AF37] text-[9px] lg:text-[11px] italic opacity-90" style={{ fontFamily: "var(--font-playfair), serif" }}>
               <span>Think Clearly</span>
               <span className="w-px h-2 lg:h-2.5 bg-[#D4AF37]/40"></span>
               <span>Write Precisely</span>
               <span className="w-px h-2 lg:h-2.5 bg-[#D4AF37]/40"></span>
               <span>Serve Honestly</span>
             </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end gap-4 lg:gap-6 w-full lg:w-1/3">
            <div className="text-right flex flex-col items-end">
              <p className="text-[#777] text-[8px] lg:text-[9px] mb-0.5">Designed & Written by</p>
              <p className="text-[#D4AF37] text-[10px] lg:text-[11px] font-bold tracking-wide">Divya Gautam</p>
            </div>

            <button onClick={scrollToTop} aria-label="Back to top" className="group flex flex-col items-center gap-1 cursor-pointer">
              <div className="flex h-7 w-7 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A0806] transition-all duration-500 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <ArrowUp className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#D4AF37]" />
              </div>
              <span className="text-[#777] text-[7px] lg:text-[8px] uppercase tracking-widest font-bold group-hover:text-[#D4AF37] transition-colors">Top</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}