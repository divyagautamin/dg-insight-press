import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// 1. Importing the Royal Serif Font for Headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"], // Different thicknesses
});

// 2. Importing the Clean Sans Font for Paragraphs
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Divya Gautam | Founder of DG Insight Press & Author of Vocab Decode",
  description:
    "Official academic portfolio, research archive, and publishing portal of Divya Gautam — Author of Vocab Decode, Researcher in Cognitive Pedagogue and Spatial Analtsis, and Co-Founder and Director of DG Insight Press.",
  keywords: [
    "Divya Gautam",
    "DG Insight Press",
    "Vocab Decode",
    "International Author",
    "Divya Gautam Author",
    "Divya Gautam International Research Analyst",
    "Cognitive Morphology and Lexical Acquisition",
    "Divya Gautam Research",
  ],
  authors: [{ name: "Divya Gautam" }],
  creator: "Divya Gautam",
  publisher: "DG Insight Press",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
     <body className="font-sans bg-[#050403] text-white antialiased selection:bg-[#D4AF37] selection:text-black" suppressHydrationWarning={true}>
  {children}
</body>
    </html>
  );
}