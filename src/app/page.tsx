// @ts-nocheck
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Research from "@/components/home/Research";
import Insight from "@/components/home/Insight";
import Journey from "@/components/home/Journey";
import Media from "@/components/home/Media";
import Support from "@/components/home/Support";
import Reviews from "@/components/home/Reviews";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#070707] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Insight />
      <Journey />
      <Media />
      <Support />
      <Reviews />
      <Footer />
    </main>
  );
}