import { softGlow } from "@/lib/glow";

// ==========================================================================
// SunGlow — a sun-like golden aura: a warm core, a soft halo, and fine
// light rays that turn very slowly. Animated purely with CSS on the GPU,
// so it costs almost nothing in performance.
// Place it inside a `relative` box; `className` sets its size.
// ==========================================================================

const rayMask =
  "radial-gradient(circle, rgba(0,0,0,1) 6%, rgba(0,0,0,0.75) 18%, rgba(0,0,0,0.35) 34%, rgba(0,0,0,0.1) 48%, rgba(0,0,0,0) 62%)";

export default function SunGlow({ className = "h-[240%] w-[240%]", intensity = 1 }: { className?: string; intensity?: number }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      {/* Warm halo with a gentle breathing pulse */}
      <div
        className="absolute inset-0 rounded-full animate-[dg-breathe_7s_ease-in-out_infinite]"
        style={{ background: softGlow(0.34 * intensity, "circle", "236,196,90") }}
      />

      {/* Long rays */}
      <div
        className="absolute inset-0 rounded-full will-change-transform animate-[dg-spin_120s_linear_infinite]"
        style={{
          background:
            "repeating-conic-gradient(from 0deg, rgba(255,222,140,0.22) 0deg 1.4deg, rgba(255,222,140,0) 3.2deg 11deg)",
          WebkitMaskImage: rayMask,
          maskImage: rayMask,
          filter: "blur(1.2px)",
          opacity: intensity,
        }}
      />

      {/* Fine counter-rotating rays for a living shimmer */}
      <div
        className="absolute inset-[12%] rounded-full will-change-transform animate-[dg-spin-reverse_180s_linear_infinite]"
        style={{
          background:
            "repeating-conic-gradient(from 4deg, rgba(255,232,170,0.16) 0deg 0.7deg, rgba(255,232,170,0) 1.8deg 7deg)",
          WebkitMaskImage: rayMask,
          maskImage: rayMask,
          filter: "blur(0.8px)",
          opacity: intensity,
        }}
      />

      {/* Bright core right behind the emblem */}
      <div
        className="absolute inset-[30%] rounded-full"
        style={{ background: softGlow(0.42 * intensity, "circle", "255,214,120"), filter: "blur(8px)" }}
      />
    </div>
  );
}
