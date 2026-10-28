// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  ArrowLeft,
  ArrowRight,
  Star,
  Headphones,
  Mail,
  Clock,
  ShieldCheck,
  Eye,
  User
} from "lucide-react";
import Link from "next/link";
import SmartLink from "@/components/ui/SmartLink";
import { LINKS, CONTACT } from "@/lib/links";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import reviewBook from "@/assets/media/review_book.webp";
import stamp from "@/assets/media/stamp_seal.webp";
import SunGlow from "@/components/ui/SunGlow";
import { GoldDust, SparkleField } from "@/components/ui/Twinkle";
import { softGlow } from "@/lib/glow";

// ==========================================
// CUSTOM PREMIUM VERIFIED SEAL SVG
// ==========================================
const VerifiedSeal = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.604 21.054c.264.123.528.123.792 0l2.355-1.1c.214-.1.458-.135.696-.098l2.54.398c.284.045.568-.052.766-.26l1.79-1.89c.162-.172.366-.289.596-.341l2.518-.574c.28-.063.509-.253.618-.511l1.012-2.395c.092-.217.247-.401.451-.537l2.137-1.428c.237-.158.375-.411.375-.694v-2.584c0-.283-.138-.536-.375-.694l-2.137-1.428c-.204-.136-.359-.32-.451-.537l-1.012-2.395c-.109-.258-.338-.448-.618-.511l-2.518-.574c-.23-.052-.434-.169-.596-.341l-1.79-1.89c-.198-.208-.482-.305-.766-.26l-2.54.398c-.238.037-.482.002-.696-.098l-2.355-1.1c-.264-.123-.528-.123-.792 0l-2.355 1.1c-.214.1-.458.135-.696.098l-2.54-.398c-.284-.045-.568.052-.766.26l-1.79 1.89c-.162.172-.366.289-.596.341l-2.518.574c-.28.063-.509.253-.618.511l-1.012 2.395c-.092.217-.247.401-.451.537l-2.137 1.428c-.237.158-.375.411-.375.694v2.584c0 .283.138.536.375.694l2.137 1.428c.204.136.359.32.451.537l1.012 2.395c.109.258.338.448.618.511l2.518.574c.23.052.434.169.596.341l1.79 1.89c.198.208.482.305.766.26l2.54-.398c.238-.037.482-.002.696.098l2.355 1.1z" fill="#D4AF37"/>
    <path d="M10.45 15.65a.75.75 0 0 1-.53-.22l-3.35-3.35a.75.75 0 0 1 1.06-1.06l2.82 2.82 6.64-6.64a.75.75 0 1 1 1.06 1.06l-7.17 7.17a.75.75 0 0 1-.53.22z" fill="#000000"/>
  </svg>
);

// ==========================================
// TESTIMONIALS DATA (Expanded for Loop)
// ------------------------------------------
// HOW TO ADD A PHOTO:
//   1. Put the photo in the  public/reviews/  folder
//      (square photos look best, e.g. 400 x 400, .jpg or .webp)
//   2. Write its path in that person's  image  field, for example:
//        image: "/reviews/vikas-divyakirti.jpg",
//   Until a photo is added, an elegant golden placeholder is shown.
// ==========================================
const testimonials = [
  {
    id: 1,
    name: "Dr. Vikas Divyakirti",
    role: "Founder, Drishti IAS",
    review: "Vocab Decode is not just a book, it is a research-backed linguistic companion. A must-have for every serious aspirant.",
    rating: 5,
    image: "", 
  },
  {
    id: 2,
    name: "Romila Thapar",
    role: "Eminent Historian & Author",
    review: "The etymological approach brings a new dimension to vocabulary building. Impressive depth and clarity.",
    rating: 5,
    image: "",
  },
  {
    id: 3,
    name: "Sandeep Maheshwari",
    role: "Entrepreneur & Motivational Speaker",
    review: "A brilliant effort by a young mind. This book shows the power of focus, research and the right guidance.",
    rating: 5,
    image: "",
  },
  {
    id: 4,
    name: "S. Ansari",
    role: "Former Director, LBSNAA",
    review: "Language is the foundation of thought and governance. This book builds that foundation exceptionally well.",
    rating: 5,
    image: "",
  },
  {
    id: 5,
    name: "Avadh Ojha",
    role: "Educator & Mentor",
    review: "A rare intellectual masterpiece by a 17-year-old. It redefines how competitive English should be approached.",
    rating: 5,
    image: "",
  },
  {
    id: 6,
    name: "Dr. Kiran Bedi",
    role: "Former IPS Officer",
    review: "Discipline and precision in language lead to discipline in administration. A highly recommended compendium.",
    rating: 5,
    image: "",
  },
  {
    id: 7,
    name: "Gaurav Garg",
    role: "Co-Founder, StudyIQ",
    review: "The structural breakdown of root words provided here is unmatched. It saves hundreds of hours of rote learning.",
    rating: 5,
    image: "",
  },
];

export default function Reviews() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="reviews"
      className="relative w-full lg:min-h-screen bg-[#050403] overflow-hidden pt-14 md:pt-20 lg:pt-12 pb-14 md:pb-20 lg:pb-32 font-sans"
    >
      {/* Background Soft Glow (Blended, no sharp lines) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] pointer-events-none" style={{ background: softGlow(0.07, "ellipse 50% 50% at center") }} />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-8 lg:px-10">
        
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="translate-y-[0px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#D4AF37] text-[9px] md:text-[10px] lg:text-[11px] font-bold mb-2 md:mb-3">
              KIND WORDS, REAL IMPACT
            </p>

            <h2
              className="text-[#F5F2EB] text-[36px] md:text-[50px] lg:text-[64px] font-normal leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Reviews & <span className="italic text-[#D4AF37]">Testimonials</span>
            </h2>

            <div className="flex items-center justify-center gap-2 md:gap-3 my-4 md:my-5">
              <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37]/40" />
              <span className="text-[#D4AF37] text-[10px] md:text-xs">❖</span>
              <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37]/40" />
            </div>

            <p className="mx-auto max-w-2xl text-[#A0A0A0] max-lg:text-[#C4C0B7] text-[13.5px] md:text-[13.5px] lg:text-[14.5px] leading-relaxed px-2 md:px-0">
              Voices of mentors, educators and aspirants who have experienced the depth and clarity of Vocab Decode.
            </p>
          </motion.div>
        </div>

        {/* ==========================================
            INTERACTIVE REVIEWS SWIPER SLIDER
        ========================================== */}
        <div className="relative z-20 translate-y-[20px] md:translate-y-[40px] px-0 md:px-10">
          
          <button 
            aria-label="Previous Review"
            className="review-prev-btn hidden md:flex absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D4AF37]/30 bg-[#0A0907]/90 text-[#D4AF37] items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button 
            aria-label="Next Review"
            className="review-next-btn hidden md:flex absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D4AF37]/30 bg-[#0A0907]/90 text-[#D4AF37] items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {mounted && (
            <>
              {/* Custom CSS for Premium Golden Pagination Dots */}
              <style jsx global>{`
                .swiper-custom-pagination .swiper-pagination-bullet {
                  background-color: #666 !important;
                  opacity: 0.4;
                  width: 8px;
                  height: 8px;
                  transition: all 0.4s ease;
                }
                .swiper-custom-pagination .swiper-pagination-bullet-active {
                  background-color: #D4AF37 !important;
                  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
                  opacity: 1;
                  width: 24px;
                  border-radius: 4px;
                }
              `}</style>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={4}
                spaceBetween={16}
                speed={1000} /* ARCHITECTURE FIX: Made animation extremely smooth (1 second transition) */
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                navigation={{
                  prevEl: ".review-prev-btn",
                  nextEl: ".review-next-btn",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-custom-pagination",
                }}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 16 },
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 24 },
                }}
                className="!pt-6 !pb-12"
              >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col justify-between h-full p-5 md:p-6 rounded-[20px] border border-[#D4AF37]/25 bg-gradient-to-b from-[#110e0a]/90 to-[#050403]/95 shadow-[inset_0_1px_1px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_35px_rgba(212,175,55,0.2),inset_0_1px_1px_rgba(212,175,55,0.4)] transition-all duration-500"
                  >
                    <div>
                      {/* Avatar */}
                      <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-5">
                        <div className="w-full h-full rounded-full border-[1.5px] md:border-[2px] border-[#D4AF37]/60 p-1 flex items-center justify-center bg-[#050403] overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                          {item.image ? (
                            <Image src={item.image} alt={item.name} width={192} height={192} className="w-full h-full object-cover rounded-full" />
                          ) : (
                            /* PHOTO PLACEHOLDER — replaced automatically once an image path is added above */
                            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#1c1710] via-[#120e09] to-[#0a0805] flex items-center justify-center overflow-hidden">
                              <User className="absolute -bottom-2 w-[78%] h-[78%] text-[#D4AF37]/10 stroke-[1.2]" />
                              <span className="relative text-[#D4AF37] font-serif text-lg md:text-xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]">
                                {item.name.replace(/^Dr\.\s*/, "").split(" ").map(n => n[0]).join("").slice(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                        {/* ARCHITECTURE FIX: Custom Premium Golden Seal replacing the basic check circle */}
                        <div className="absolute -bottom-1 -right-1">
                          <VerifiedSeal className="w-6 h-6 md:w-7 md:h-7 drop-shadow-md" />
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="text-center pb-2 md:pb-3">
                        <h3 className="text-[#F5F2EB] text-[16px] md:text-[18px] lg:text-[19px] font-medium leading-tight flex items-center justify-center gap-1.5" style={{ fontFamily: "var(--font-playfair), serif" }}>
                          {item.name}
                          <VerifiedSeal className="w-4 h-4 opacity-80" />
                        </h3>
                        <p className="text-[#808080] text-[10px] md:text-[11px] font-medium tracking-wide mt-1">
                          {item.role}
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-2 my-2 md:my-3">
                        <span className="w-6 md:w-8 h-[1px] bg-[#D4AF37]/30" />
                        <span className="text-[#D4AF37] text-[7px] md:text-[8px]">❖</span>
                        <span className="w-6 md:w-8 h-[1px] bg-[#D4AF37]/30" />
                      </div>

                      <p className="text-[#A0A0A0] max-lg:text-[#C4C0B7] text-[13px] md:text-[12.5px] italic leading-relaxed text-center pt-1 pb-3 md:pb-4">
                        “{item.review}”
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-1 pt-2 border-t border-[#D4AF37]/10">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            </>
          )}

          <div className="swiper-custom-pagination flex items-center justify-center gap-1.5 md:gap-2 relative z-30 -translate-y-4 md:-translate-y-6 lg:-translate-y-6" />
        </div>

       {/* ==========================================
            RESERVE SIGNED COPY BANNER (Ultra-Compact / Half-Size)
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-20 rounded-2xl border border-[#D4AF37]/40 bg-transparent shadow-[inset_0_1px_1px_rgba(212,175,55,0.3)] hover:border-[#D4AF37]/70 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500 mt-8 md:mt-10 lg:mt-0 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[40px]"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#000000]/95 via-[#110e0a]/90 to-[#000000]/95 overflow-hidden pointer-events-none z-0">
             <div className="absolute inset-0" style={{ background: softGlow(0.07, "ellipse 60% 80% at center") }} />
             {/* Floating golden dust + twinkling stars */}
             <GoldDust count={16} seed={31} rise={40} />
             <SparkleField stars={[[5, 14, 11, 0.3], [94, 18, 8, 1.7], [7, 84, 9, 2.6], [93, 86, 12, 1.1], [50, 97, 8, 3.2]]} />
          </div>

          {/* ULTRA-COMPACT GRID: Reduced padding and minimal gaps */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-x-4 gap-y-6 lg:gap-4 items-center px-5 py-8 md:px-8 md:py-10 lg:py-5">
            
            {/* Left: Book Image (Forced Massive Size Architecture) */}
            <div className="flex justify-center order-2 lg:order-1 lg:-my-24 pointer-events-none shrink-0">
              <div className="relative group shrink-0">
                {/* Sun-like aura behind the book */}
                <SunGlow className="h-[150%] w-[150%]" intensity={0.45} />
                <Image
                  src={reviewBook}
                  alt="Vocab Decode Signed Edition"
                  width={600}
                  height={800}
                  priority
                  quality={100}
                  unoptimized={true}
                  /* ARCHITECTURE FIX: shrink-0 and min-w added to break the grid boundary */
                  className="relative w-[165px] sm:w-[190px] md:w-[210px] lg:w-[320px] max-lg:scale-[1.3] lg:min-w-[320px] !max-w-none shrink-0 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-700 pointer-events-auto"
                />
              </div>
            </div>

            {/* Middle: Content & CTAs (Compact Typography) */}
            <div className="col-span-2 lg:col-span-1 text-center order-1 lg:order-2 py-1">
              <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#D4AF37] text-[9px] md:text-[10px] font-bold mb-1">
                LIMITED AVAILABILITY
              </p>

              <h2
                className="text-[#F5F2EB] text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-[1.1] font-normal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Reserve Your <br />
                <span className="italic text-[#D4AF37]">Personally Signed Copy</span>
              </h2>

              <div className="flex items-center justify-center gap-2 my-2">
                <span className="w-6 md:w-8 h-[1px] bg-[#D4AF37]/40" />
                <span className="text-[#D4AF37] text-[8px]">❖</span>
                <span className="w-6 md:w-8 h-[1px] bg-[#D4AF37]/40" />
              </div>

              <p className="text-[#B9B5AC] text-[12px] md:text-[12.5px] leading-relaxed max-w-sm mx-auto mb-4">
                A limited number of first-edition copies are personally signed by Divya Gautam.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {/* ARCHITECTURE FIX: Simple, Solid Gold Button */}
                <Link href={LINKS.contact.href} className="text-center w-full sm:w-auto bg-[#D4AF37] hover:bg-[#c29f2d] text-black font-bold tracking-wide text-[11.5px] md:text-[12.5px] px-6 py-2.5 md:px-7 md:py-3 rounded-lg transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 z-10">
                  Reserve Signed Copy →
                </Link>
                <SmartLink link={LINKS.signedCopy} className="w-full sm:w-auto border border-[#D4AF37]/50 hover:border-[#D4AF37] bg-black hover:bg-[#D4AF37]/15 text-[#F5F2EB] font-medium text-[11.5px] md:text-[12.5px] px-6 py-2.5 md:px-6 md:py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Eye className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF37]" /> View Details
                </SmartLink>
              </div>
            </div>

            {/* Right: Wax Stamp (Reduced size) */}
            <div className="flex justify-center order-3 lg:order-3 lg:-my-12 pointer-events-none">
              <div className="relative">
                <Image
                  src={stamp}
                  alt="Signed Edition Stamp"
                  width={400}
                  height={441}
                  className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[200px] h-auto object-contain pointer-events-auto max-lg:scale-[1.15]"
                />
              </div>
            </div>

          </div>
        </motion.div>
        {/* ==========================================
            4-COLUMN BOTTOM INFO STRIP
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-20 rounded-xl border border-[#D4AF37]/25 bg-[#0A0907]/60 p-5 md:p-6 lg:p-8 mt-8 md:mt-10 lg:mt-0 translate-y-[0px] md:translate-y-[0px] lg:translate-y-[80px] shadow-[inset_0_1px_1px_rgba(212,175,55,0.1)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#D4AF37]/15">
            
            <div className="flex items-center gap-3 md:gap-4 pt-4 sm:pt-0">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#D4AF37]/10 shrink-0">
                <Headphones className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-[#F5F2EB] text-[12px] md:text-[13.5px] font-medium">Still have a question?</h4>
                <p className="text-[#808080] text-[10px] md:text-[11px] mt-0.5">We are here to help you.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 pt-4 sm:pt-0 sm:pl-4 md:pl-6">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#D4AF37]/10 shrink-0">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-[#808080] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Email Us</h4>
                <a href={`mailto:${CONTACT.email}`} className="block text-[#D4AF37] text-[11px] md:text-[12px] font-medium mt-0.5 break-all hover:underline underline-offset-4">{CONTACT.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 pt-4 lg:pt-0 lg:pl-6">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#D4AF37]/10 shrink-0">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-[#808080] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Response Time</h4>
                <p className="text-[#F5F2EB] text-[11px] md:text-[12px] font-medium mt-0.5">Within 24 Hours</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 pt-4 lg:pt-0 lg:pl-6">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#D4AF37]/10 shrink-0">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-[#808080] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Privacy Assured</h4>
                <p className="text-[#F5F2EB] text-[11px] md:text-[12px] font-medium mt-0.5">Your data is safe with us.</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}