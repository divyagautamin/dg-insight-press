import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ComingSoonToast } from "@/components/ui/SmartLink";
import "./globals.css";

// 1. Importing the Royal Serif Font for Headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"], // Different thicknesses
  display: "swap",
});

// 2. Importing the Clean Sans Font for Paragraphs
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://divyagautam.vercel.app";
const TITLE = "Divya Gautam | Founder of DG Insight Press & Author of Vocab Decode";
const DESCRIPTION =
  "Official academic portfolio, research archive, and publishing portal of Divya Gautam — Author of Vocab Decode, Researcher in Cognitive Pedagogy and Spatial Analysis, and Co-Founder and Director of DG Insight Press.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Divya Gautam",
  },
  description: DESCRIPTION,
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "DG Insight Press",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050403",
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
        <ComingSoonToast />
      </body>
    </html>
  );
}
