// ==========================================================================
// Twinkling stars and floating golden dust.
// Both run on CSS animations (GPU), so they look rich but stay light.
// ==========================================================================

// ---------- A single four-point star ----------
export function Sparkle({
  className = "",
  size = 12,
  delay = 0,
  duration = 3.6,
}: {
  className?: string;
  size?: number;
  delay?: number;
  duration?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={`absolute pointer-events-none opacity-0 animate-[dg-twinkle_3.6s_ease-in-out_infinite] ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
    >
      <defs>
        <radialGradient id="dg-star-fill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFDF3" />
          <stop offset="45%" stopColor="#FBE7A6" />
          <stop offset="100%" stopColor="#D4AF37" />
        </radialGradient>
      </defs>
      <path
        d="M12 0 C12.8 7 17 11.2 24 12 C17 12.8 12.8 17 12 24 C11.2 17 7 12.8 0 12 C7 11.2 11.2 7 12 0Z"
        fill="url(#dg-star-fill)"
        style={{ filter: "drop-shadow(0 0 3px rgba(255,236,170,0.95)) drop-shadow(0 0 9px rgba(212,175,55,0.75))" }}
      />
    </svg>
  );
}

// ---------- A small group of stars spread over a box ----------
// `stars` = list of [top%, left%, size, delay]
export function SparkleField({
  stars,
  className = "",
}: {
  stars: [number, number, number, number][];
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {stars.map(([top, left, size, delay], i) => (
        <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: `${top}%`, left: `${left}%` }}>
          <Sparkle size={size} delay={delay} className="!relative" />
        </span>
      ))}
    </div>
  );
}

// ---------- Floating golden dust ----------
function makeDust(count: number, seed: number, sizeMax: number, drift: number) {
  let x = seed;
  const rnd = () => (x = (x * 9301 + 49297) % 233280) / 233280;
  return Array.from({ length: count }, () => ({
    size: rnd() * sizeMax + 1,
    left: rnd() * 100,
    top: rnd() * 100,
    dx: (rnd() - 0.5) * drift,
    duration: 6 + rnd() * 6,
    delay: -rnd() * 10,
  }));
}

export function GoldDust({
  count = 14,
  seed = 11,
  sizeMax = 2.2,
  rise = 50,
  className = "",
}: {
  count?: number;
  seed?: number;
  sizeMax?: number;
  rise?: number;
  className?: string;
}) {
  const dust = makeDust(count, seed, sizeMax, 30);
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {dust.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#F3D98A] shadow-[0_0_8px_1px_rgba(212,175,55,0.9)] will-change-transform"
          style={
            {
              width: d.size,
              height: d.size,
              left: `${d.left}%`,
              top: `${d.top}%`,
              opacity: 0,
              "--dx": `${d.dx}px`,
              "--dy": `-${rise}px`,
              animation: `dg-dust ${d.duration}s ease-in-out ${d.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
