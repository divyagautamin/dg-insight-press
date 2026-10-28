// ==========================================================================
// Soft golden glow
// A plain two-stop radial gradient fades in a straight line, which the eye
// reads as a flat yellow disc with a visible edge. These stops follow an
// eased curve, so the light dies away gradually — like a real light source.
// ==========================================================================

export function softGlow(strength = 0.1, shape = "circle", color = "212,175,55") {
  const a = (k: number) => +(strength * k).toFixed(4);
  return `radial-gradient(${shape}, rgba(${color},${a(1)}) 0%, rgba(${color},${a(0.72)}) 10%, rgba(${color},${a(0.45)}) 22%, rgba(${color},${a(0.24)}) 36%, rgba(${color},${a(0.1)}) 50%, rgba(${color},${a(0.03)}) 62%, rgba(${color},0) 72%)`;
}
