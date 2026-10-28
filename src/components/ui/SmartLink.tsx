"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SiteLink } from "@/lib/links";

// ==========================================================================
// SmartLink
// - Active link   -> normal Next.js link.
// - Closed link   -> looks the same, but clicking shows a small
//                    "Coming soon" note instead of opening the page.
// ==========================================================================

type Props = {
  link: SiteLink;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  onNavigate?: () => void;
  external?: boolean;
};

let toastTimer: ReturnType<typeof setTimeout> | null = null;

export function showComingSoon(message = "This page is coming soon.") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("dg-toast", { detail: message }));
}

export default function SmartLink({ link, className = "", children, ariaLabel, onNavigate, external }: Props) {
  if (link.active) {
    if (external) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={link.href} className={className} aria-label={ariaLabel} onClick={onNavigate}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={() => showComingSoon()}
    >
      {children}
    </button>
  );
}

// ==========================================================================
// Toast host — mounted once in the root layout
// ==========================================================================
export function ComingSoonToast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const onToast = (e: Event) => {
      setMessage((e as CustomEvent<string>).detail);
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => setMessage(null), 2600);
    };
    window.addEventListener("dg-toast", onToast);
    return () => window.removeEventListener("dg-toast", onToast);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 transition-[opacity,transform] duration-300 ${
        message ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-[#0d0b08] px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.12)]">
        <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.9)]" />
        <span className="whitespace-nowrap text-[12px] tracking-wide text-[#F5F2EB]">{message ?? ""}</span>
      </div>
    </div>
  );
}
