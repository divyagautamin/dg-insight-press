// @ts-nocheck
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  BookOpen, 
  ShieldCheck, 
  Headphones, 
  Clock, 
  Mail, 
  MapPin, 
  Plus, 
  Minus,
  Truck,
  PenTool,
  ArrowRight,
  Lock
} from "lucide-react";

import supportDesktop from "@/assets/desktop/support_top_desktop.webp";
import supportTablet from "@/assets/tablet/support_top_tablet.webp";
import supportMobile from "@/assets/mobile/support_top_mobile.webp";
import supportBook from "@/assets/media/support_book.webp"; 
import { CONTACT, SOCIALS } from "@/lib/links";
import { GoldDust, SparkleField } from "@/components/ui/Twinkle";

// ==========================================
// CUSTOM SVG ICONS FOR SOCIAL MEDIA (Bypasses Lucide Brand Restrictions)
// ==========================================
const IconInstagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconTwitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const IconLinkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// ==========================================
// FAQ DATA STRUCTURE (Intellectual & Professional)
// ==========================================
const compendiumFaqs = [
  {
    q: "What makes 'Vocab Decode' fundamentally different from other vocabulary books?",
    a: "Unlike conventional vocabulary books that rely on rote memorisation, Vocab Decode focuses on the scientific architecture of language. It decodes words through etymology, root families, prefixes, and contextual thinking, making long-term retention substantially stronger."
  },
  {
    q: "Who is the primary audience for this book? Is it strictly for UPSC aspirants?",
    a: "While highly beneficial for UPSC, State PSCs, NDA, CDS, CAT, and SSC aspirants, the book is designed for any individual, scholar, or professional who seeks to build a formidable and precise command over the English language."
  },
  {
    q: "Is this book suitable for beginners, or does it require an advanced understanding?",
    a: "It acts as an intellectual bridge. It begins with foundational roots and structural rules, gradually escalating to advanced lexical complexities, making it highly accessible for dedicated beginners while remaining rigorous for advanced readers."
  },
  {
    q: "What is the structural layout of the 550+ pages?",
    a: "The compendium is systematically organised into thematic clusters, root-word families, and contextual matrices, ensuring that learning progresses logically rather than alphabetically."
  },
  {
    q: "Does the book focus only on word meanings, or does it include contextual usage?",
    a: "True linguistic command requires application. The book meticulously details contextual framing, syntactic nuances, and exact usage, preventing the misapplication of complex words."
  },
  {
    q: "How should a student study this book daily for maximum retention?",
    a: "Consistent analytical reading is advised. Dissecting and understanding 5-10 root families daily is far more effective than cramming lists. Focus on the origin and application of the words."
  },
  {
    q: "Is an eBook (PDF/Kindle) version of Vocab Decode available?",
    a: "To strictly prevent piracy and to promote 'deep, distraction-free reading' essential for cognitive retention, Vocab Decode is exclusively available in high-quality paperback format."
  },
  {
    q: "Is Vocab Decode based on current examination trends?",
    a: "Yes, it is rigorously aligned with the analytical and comprehension-based demands of modern competitive examinations, moving beyond obsolete vocabulary lists."
  },
];

const shippingFaqs = [
  {
    q: "What is the difference between buying from this website versus Amazon?",
    a: "Orders placed directly through this official website are eligible for the limited 'Personally Signed First Edition' copies. Amazon and other distributors carry the standard editions."
  },
  {
    q: "How can I secure a 'Personally Signed Copy' of Vocab Decode?",
    a: "Signed copies are an exclusive offering available solely through direct orders placed on this official website, subject to availability."
  },
  {
    q: "What are the accepted modes of payment? Is it secure?",
    a: "We utilise fully encrypted, industry-standard payment gateways accepting all major Credit/Debit Cards, NetBanking, and UPI. Your transaction is 100% secure."
  },
  {
    q: "How many days does standard delivery take?",
    a: "Standard dispatch and transit generally take 5-7 business days, depending upon your geographical location within India."
  },
  {
    q: "How can I track my order?",
    a: "Upon successful dispatch, a unique tracking link and consignment details will be automatically shared with you via your registered email."
  },
  {
    q: "Do you ship the book internationally?",
    a: "Currently, our primary logistical operations focus on pan-India delivery. International shipping requests are evaluated and processed on a case-by-case basis."
  },
  {
    q: "What is the return or replacement policy for damaged books?",
    a: "We maintain a strict quality check. However, in the rare event of transit damage, a free replacement is initiated if reported with visual proof within 48 hours of delivery."
  },
  {
    q: "Can I cancel my order before it gets dispatched?",
    a: "Yes, cancellations are permitted and fully refunded if the request is submitted within 24 hours of order placement, prior to dispatch."
  }
];

const authorFaqs = [
  {
    q: "Who is the author behind Vocab Decode?",
    a: "Divya Gautam is a 17-year-old independent researcher, author, and civil services aspirant dedicated to exploring the intersections of language precision, education, and public policy."
  },
  {
    q: "Why did a civil services aspirant write a 550-page lexical reference?",
    a: "Because enduring administrative clarity and intellectual rigor are built upon the foundation of precise language. The book is a manifestation of that intellectual discipline."
  },
  {
    q: "How does the author's UPSC preparation enhance the book?",
    a: "It infuses the text with a highly analytical, evidence-based, and disciplined approach, ensuring the content meets the highest standards of competitive and academic inquiry."
  },
  {
    q: "Where can I explore the author’s other research papers and essays?",
    a: "Readers are encouraged to navigate to the 'Research' and 'Insights' sections of this website to explore ongoing academic discourse and published papers."
  },
  {
    q: "Do you offer special discounts for bulk orders by coaching institutes or libraries?",
    a: "Yes, we actively foster institutional bridges. For bulk academic orders, libraries, and study circles, please use the contact form below to initiate a tailored collaboration."
  },
  {
    q: "Is the author available for academic seminars, podcasts, or guest lectures?",
    a: "Yes. Invitations for academic masterclasses, institutional engagements, and meaningful public discourse are always welcome."
  },
  {
    q: "I am a journalist/reviewer. How can I request an interview or press copy?",
    a: "Members of the press and media can reach out directly via the official email or the contact form below to schedule conversations or request review copies."
  }
];

const institutionalFaqs = [
    {
      q: "Do you offer special discounts for bulk orders by coaching institutes, study circles, or libraries?",
      a: "Yes, we actively foster institutional partnerships. For bulk academic orders, libraries, and study circles, please use the contact form below or email us directly to receive tailored institutional pricing."
    },
    {
      q: "Is the author available for academic seminars, podcasts, or guest lectures?",
      a: "Yes. Invitations for academic masterclasses, institutional seminars, and meaningful public discourse are welcomed and evaluated based on schedule."
    },
    {
      q: "I am a journalist/reviewer. How can I request a press copy or schedule an interview?",
      a: "Members of the press, media reviewers, and podcasters can reach out directly via our official email or contact form to request press review copies or schedule interviews."
    },
    {
      q: "Whom should I contact if I experience a technical glitch or payment failure on this website?",
      a: "If you encounter any technical obstacles or payment processing anomalies, please reach out immediately via our support email with transaction details for prompt resolution."
    }
  ];

// ==========================================
// FAQ ACCORDION COMPONENT
// ==========================================
const FaqItem = ({ q, a, isOpen, onClick }) => {
  return (
    <div className={`border-b border-[#D4AF37]/10 transition-colors duration-300 ${isOpen ? 'bg-[#D4AF37]/[0.03]' : 'hover:bg-[#D4AF37]/[0.02]'}`}>
      <button 
        onClick={onClick}
        className="w-full flex items-start justify-between py-5 px-4 md:px-6 text-left focus:outline-none"
      >
        <h4 className={`pr-8 text-[14px] md:text-[15px] leading-relaxed transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-[#F5F2EB]'}`}>
          {q}
        </h4>
        <span className="shrink-0 mt-1">
          {isOpen ? <Minus className="w-4 h-4 text-[#D4AF37]" /> : <Plus className="w-4 h-4 text-[#A0A0A0]" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-4 md:px-6 pb-6 text-[#A0A0A0] text-[13px] leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Support() {
  const [mounted, setMounted] = useState(false);
  const [openCompendium, setOpenCompendium] = useState<number | null>(0);
  const [openShipping, setOpenShipping] = useState<number | null>(null);
  const [openAuthor, setOpenAuthor] = useState<number | null>(null);
  const [openInstitutional, setOpenInstitutional] =useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formNote, setFormNote] = useState("");

  // The form opens the visitor's email app with everything filled in,
  // addressed to the official email. No server or paid service needed.
  const sendMessage = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormNote("Please add your name, email and message.");
      return;
    }
    const subject = form.subject.trim() || `Message from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormNote("Opening your email app…");
  };
  const update = (key) => (e) => { setForm({ ...form, [key]: e.target.value }); setFormNote(""); };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="support" className="relative w-full lg:min-h-screen bg-[#050403] overflow-hidden pt-20 md:pt-24 lg:pt-10 pb-16 md:pb-20 lg:pb-[280px] font-sans">
      
      {/* ==========================================
          PERFORMANCE-OPTIMIZED PICTURE BACKGROUND
      ========================================== */}
      <div className="absolute inset-x-0 -top-16 w-full h-[125vh] z-0 pointer-events-none overflow-hidden isolate">
        <picture className="absolute inset-0 w-full h-full opacity-35 mix-blend-luminosity [contain:paint]">
          <source media="(min-width: 1024px)" srcSet={supportDesktop.src} />
          <source media="(min-width: 768px)" srcSet={supportTablet.src} />
          <img loading="lazy" decoding="async" src={supportMobile.src} alt="Support Background" className="w-full h-full object-cover object-top" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050403]/20 via-[#050403]/90 via-45% to-[#050403]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050403]/95 via-[#050403]/60 to-[#050403]/90" />
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-10 lg:px-10">
        
        {/* ==========================================
            HERO TEXT & STATS
        ========================================== */}
        {/* --- MASTER CONTROL PANEL (HERO) --- */}
        <div className="max-w-4xl translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[0px] lg:translate-y-[0px]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            
            <div className="flex items-center gap-3 pb-4">
              <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
              <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-[10px] font-bold">
                FAQ & CONTACT
              </p>
            </div>

            <h1 className="text-[#F5F2EB] leading-[1.08] text-[40px] md:text-[56px] lg:text-[68px] font-normal" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Questions <br />
              <span className="italic text-[#D4AF37]">We Often Hear</span>
            </h1>

            <p className="mt-6 text-[#A0A0A0] max-lg:text-[#C4C0B7] leading-relaxed max-w-xl text-[14px] md:text-[14.5px]">
              Find answers to common queries about Vocab Decode, orders, shipping, institutional collaborations and more. If you require further intellectual or academic assistance, our doors are always open.
            </p>

            <div className="mt-10 lg:mt-15 mb-8 grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-wrap md:gap-16">
              {[
                { icon: BookOpen, title: "Clarity", sub: "In Every Answer" },
                { icon: ShieldCheck, title: "Transparency", sub: "In Every Step" },
                { icon: Headphones, title: "Support", sub: "That Cares" },
                { icon: Clock, title: "Response", sub: "Within 24 Hrs" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-2.5 group cursor-default">
                  <stat.icon className="w-8 h-8 text-[#D4AF37] stroke-[1.2] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
                  <div>
                    <h4 className="text-[#F5F2EB] text-[13px] font-medium tracking-wide">{stat.title}</h4>
                    <p className="text-[#808080] text-[9px] font-semibold tracking-wider uppercase mt-1">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* ==========================================
            DIVIDER
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="flex items-center justify-start gap-4 mt-8 md:mt-10 lg:mt-0 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[150px]"
        >
          <span className="w-12 h-[1px] bg-[#D4AF37]/40" />
          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-[10px] font-bold">FREQUENTLY ASKED QUESTIONS</p>
          <span className="flex-grow max-w-[200px] h-[1px] bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </motion.div>

        {/* ==========================================
            FOUR-COLUMN BALANCED FAQ ARCHITECTURE
        ========================================== */}
        {/* --- MASTER CONTROL PANEL (FAQ GRID) - Use translate-y here to move up/down --- */}
        <div className="relative z-20 mt-8 md:mt-10 lg:mt-0 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[210px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-start pb-12 md:pb-14 lg:pb-20">
          
          {/* BOX 1: About Vocab Decode */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-1">
              <BookOpen className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-[#F5F2EB] text-[20px]" style={{ fontFamily: "var(--font-playfair), serif" }}>About Vocab Decode</h3>
            </div>
            
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#0e0c09]/80 to-[#070605]/90 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(212,175,55,0.3)] transition-all duration-500 overflow-hidden">
              {compendiumFaqs.map((faq, idx) => (
                <FaqItem 
                  key={idx} q={faq.q} a={faq.a} 
                  isOpen={openCompendium === idx} 
                  onClick={() => setOpenCompendium(openCompendium === idx ? null : idx)} 
                />
              ))}
            </div>
          </div>

          {/* BOX 2: Orders & Shipping */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-1">
              <Truck className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-[#F5F2EB] text-[20px]" style={{ fontFamily: "var(--font-playfair), serif" }}>Orders & Shipping</h3>
            </div>
            
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#0e0c09]/80 to-[#070605]/90 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(212,175,55,0.3)] transition-all duration-500 overflow-hidden">
              {shippingFaqs.map((faq, idx) => (
                <FaqItem 
                  key={idx} q={faq.q} a={faq.a} 
                  isOpen={openShipping === idx} 
                  onClick={() => setOpenShipping(openShipping === idx ? null : idx)} 
                />
              ))}
            </div>
          </div>

          {/* BOX 3: Author & Collaborations */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-1">
              <PenTool className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-[#F5F2EB] text-[20px]" style={{ fontFamily: "var(--font-playfair), serif" }}>Author & Collaborations</h3>
            </div>
            
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#0e0c09]/80 to-[#070605]/90 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(212,175,55,0.3)] transition-all duration-500 overflow-hidden">
              {authorFaqs.map((faq, idx) => (
                <FaqItem 
                  key={idx} q={faq.q} a={faq.a} 
                  isOpen={openAuthor === idx} 
                  onClick={() => setOpenAuthor(openAuthor === idx ? null : idx)} 
                />
              ))}
            </div>
          </div>

          {/* BOX 4: Institutional Bridge (New Section filling the gap) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-1">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-[#F5F2EB] text-[20px]" style={{ fontFamily: "var(--font-playfair), serif" }}>Institutional Bridge</h3>
            </div>
            
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#0e0c09]/80 to-[#070605]/90 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(212,175,55,0.3)] transition-all duration-500 overflow-hidden">
              {institutionalFaqs.map((faq, idx) => (
                <FaqItem 
                  key={idx} q={faq.q} a={faq.a} 
                  isOpen={openInstitutional === idx} 
                  onClick={() => setOpenInstitutional(openInstitutional === idx ? null : idx)} 
                />
              ))}
            </div>
          </div>

        </div>

        {/* ==========================================
            SUPPORT BANNER
        ========================================== */}
        {/* --- MASTER CONTROL PANEL (BANNER) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="w-full rounded-[20px] border border-[#D4AF37]/25 bg-gradient-to-r from-[#0a0908]/90 via-[#110e0a]/90 to-[#0a0908]/90 shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[160px]"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#D4AF37]/5">
              <Headphones className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-[#F5F2EB] text-[16px] font-medium">Still have a question?</h4>
              <p className="text-[#A0A0A0] text-[12px] mt-1">We're here to help you navigate your queries.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-12 w-full md:w-auto">
            <div className="flex items-center gap-3 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-[#D4AF37]/10 pt-4 sm:pt-0 sm:pl-8">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <p className="text-[#808080] text-[10px] font-bold tracking-widest uppercase">Email Us</p>
                <a href={`mailto:${CONTACT.email}`} className="text-[#D4AF37] text-[13px] break-all hover:underline underline-offset-4">{CONTACT.email}</a>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-[#D4AF37]/10 pt-4 sm:pt-0 sm:pl-8">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <p className="text-[#808080] text-[10px] font-bold tracking-widest uppercase">Response Time</p>
                <p className="text-[#F5F2EB] text-[13px]">Within 24 Hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            DIVIDER
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="flex items-center justify-start gap-4 mt-16 md:mt-20 lg:mt-0 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[190px]"
        >
          <span className="w-12 h-[1px] bg-[#D4AF37]/40" />
          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-[10px] font-bold">GET IN TOUCH</p>
          <span className="flex-grow max-w-[200px] h-[1px] bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
        </motion.div>

        {/* ==========================================
            CONTACT FORM & SOCIALS GRID
        ========================================== */}
        {/* --- MASTER CONTROL PANEL (CONTACT GRID) --- */}
        <div id="contact" className="relative z-20 mt-8 md:mt-10 lg:mt-0 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[200px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 pb-12 md:pb-14 lg:pb-20">
          
          {/* LEFT: Send a Message Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-[#F5F2EB] text-[28px] mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>Send a Message</h3>
            
            <form className="space-y-4 md:space-y-5" onSubmit={sendMessage} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  aria-label="Your Name"
                  value={form.name} onChange={update("name")}
                  placeholder="Your Name" 
                  className="w-full bg-[#120f0a]/90 border border-[#D4AF37]/35 rounded-xl px-5 py-4 text-[16px] md:text-[13px] text-[#F5F2EB] outline-none focus:border-[#D4AF37] focus:bg-[#16120b] focus:shadow-[0_0_18px_rgba(212,175,55,0.15)] transition-all duration-300 placeholder:text-[#9a9486]"
                />
                <input 
                  type="email" 
                  aria-label="Your Email"
                  value={form.email} onChange={update("email")}
                  placeholder="Your Email" 
                  className="w-full bg-[#120f0a]/90 border border-[#D4AF37]/35 rounded-xl px-5 py-4 text-[16px] md:text-[13px] text-[#F5F2EB] outline-none focus:border-[#D4AF37] focus:bg-[#16120b] focus:shadow-[0_0_18px_rgba(212,175,55,0.15)] transition-all duration-300 placeholder:text-[#9a9486]"
                />
              </div>
              <input 
                type="text" 
                aria-label="Subject"
                value={form.subject} onChange={update("subject")}
                placeholder="Subject (Academic, Media, Bulk Order, etc.)" 
                className="w-full bg-[#120f0a]/90 border border-[#D4AF37]/35 rounded-xl px-5 py-4 text-[16px] md:text-[13px] text-[#F5F2EB] outline-none focus:border-[#D4AF37] focus:bg-[#16120b] focus:shadow-[0_0_18px_rgba(212,175,55,0.15)] transition-all duration-300 placeholder:text-[#9a9486]"
              />
              <textarea 
                rows={6} 
                aria-label="Your Message"
                value={form.message} onChange={update("message")}
                placeholder="Your Message..." 
                className="w-full bg-[#120f0a]/90 border border-[#D4AF37]/35 rounded-xl px-5 py-4 text-[16px] md:text-[13px] text-[#F5F2EB] outline-none focus:border-[#D4AF37] focus:bg-[#16120b] focus:shadow-[0_0_18px_rgba(212,175,55,0.15)] transition-all duration-300 placeholder:text-[#9a9486] resize-none"
              />
              
              {formNote && <p className="text-[12px] text-[#D4AF37]" role="status">{formNote}</p>}

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button type="submit" className="relative w-full sm:w-auto overflow-hidden bg-[#D4AF37] bg-[linear-gradient(90deg,#D4AF37_0%,#F3E5AB_100%)] hover:bg-[linear-gradient(90deg,#c29f2d_0%,#D4AF37_100%)] text-black px-8 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:-translate-y-1 group">
                  <span className="relative z-20 flex items-center justify-center gap-2 w-full h-full !text-black font-bold tracking-wide text-[13px]">
                    Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-[#D4AF37]/60" />
                  <div>
                    <p className="text-[#A0A0A0] text-[10px] font-medium leading-tight">We respect your privacy.</p>
                    <p className="text-[#666] text-[10px] leading-tight mt-0.5">Your information is safe with us.</p>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>

          {/* RIGHT: Other Ways to Connect (Fully Functional Hyperlinks) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#0A0907]/60 p-6 md:p-10 flex flex-col justify-between min-h-[460px] md:min-h-[500px] shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)]"
          >
            <div className="relative z-10">
              <h3 className="text-[#F5F2EB] text-[28px] mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Other Ways to Connect
              </h3>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: Mail, 
                    title: "Email", 
                    sub: CONTACT.email, 
                    link: `mailto:${CONTACT.email}` 
                  },
                  { 
                    icon: IconLinkedin, 
                    title: "LinkedIn", 
                    sub: SOCIALS.linkedin.handle, 
                    link: SOCIALS.linkedin.active ? SOCIALS.linkedin.href : null 
                  },
                  { 
                    icon: IconTwitter, 
                    title: "Twitter", 
                    sub: SOCIALS.twitter.handle, 
                    link: SOCIALS.twitter.active ? SOCIALS.twitter.href : null 
                  },
                  { 
                    icon: IconInstagram, 
                    title: "Instagram", 
                    sub: SOCIALS.instagram.handle, 
                    link: SOCIALS.instagram.active ? SOCIALS.instagram.href : null 
                  },
                  { 
                    icon: MapPin, 
                    title: "Based In", 
                    sub: CONTACT.location, 
                    link: null 
                  }
                ].map((item, idx) => (
                  item.link ? (
                    <a 
                      key={idx} 
                      href={item.link} 
                      target={item.link.startsWith("mailto:") ? undefined : "_blank"} 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-5 group cursor-pointer transition-transform duration-300 hover:translate-x-1"
                    >
                      <div className="w-11 h-11 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/15 group-hover:border-[#D4AF37] transition-all duration-300">
                        <item.icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="text-[#F5F2EB] text-[14px] font-medium mb-0.5">{item.title}</h4>
                        <p className="text-[#A0A0A0] text-[12px] break-all group-hover:text-[#D4AF37] transition-colors duration-300">{item.sub}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={idx} className="flex items-center gap-5 group cursor-default">
                      <div className="w-11 h-11 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5">
                        <item.icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="text-[#F5F2EB] text-[14px] font-medium mb-0.5">{item.title}</h4>
                        <p className="text-[#A0A0A0] text-[12px]">{item.sub}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* SEAMLESS BLENDED GRAPHIC */}
            <div className="absolute -right-4 -bottom-4 w-[170px] md:w-[260px] pointer-events-none z-0 opacity-60 md:opacity-80 mix-blend-lighten">
              <img loading="lazy" decoding="async" 
                src={supportBook.src} 
                alt="Vocab Decode Book" 
                className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0907] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0A0907]/30 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>

        {/* =========================================================
            BOTTOM QUOTE (Identical to reference image layout)
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}
          className="w-full rounded-2xl overflow-hidden relative border border-[#D4AF37]/25 shadow-[inset_0_1px_1px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.1),inset_0_1px_1px_rgba(212,175,55,0.25)] isolate [contain:paint] transition-all duration-500 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[260px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#050403] via-[#110e0a] to-[#050403] z-0" />
          <GoldDust count={12} seed={41} rise={34} />
          <SparkleField stars={[[24, 10, 10, 0.6], [70, 88, 11, 1.9], [20, 82, 8, 3.0]]} />
          
          <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 flex flex-col items-center justify-center text-center min-h-[160px]">
            <div className="flex gap-4 items-start">
              <span className="text-[#D4AF37] text-[40px] md:text-[50px] leading-none font-serif pt-2 opacity-80">“</span>
              <div>
                <h2 className="text-[#F5F2EB] italic leading-[1.35] text-[20px] md:text-[28px] lg:text-[32px] drop-shadow-lg" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Language connects ideas. Service transforms them into impact.
                </h2>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <span className="w-10 h-[1px] bg-[#D4AF37]/50" />
                  <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-[10px] md:text-[11px] font-bold">DIVYA GAUTAM</p>
                  <span className="w-10 h-[1px] bg-[#D4AF37]/50" />
                </div>
              </div>
              <span className="hidden sm:block text-[#D4AF37] text-[40px] md:text-[50px] leading-none font-serif pt-10 md:pt-12 opacity-80 self-end">”</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}