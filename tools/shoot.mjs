// Takes full-page screenshots of the built site at phone, tablet and laptop sizes.
import { chromium } from "playwright";
import fs from "node:fs";

const base = process.env.BASE_URL || "http://localhost:3000";
const pages = (process.env.PAGES || "/").split(",");
const sizes = [
  { name: "phone", width: 390, height: 844, mobile: true, scale: 2 },
  { name: "tablet", width: 820, height: 1180, mobile: true, scale: 1 },
  { name: "laptop", width: 1366, height: 768, mobile: false, scale: 1 },
];
fs.mkdirSync("shots", { recursive: true });
const browser = await chromium.launch();
for (const s of sizes) {
  const ctx = await browser.newContext({
    viewport: { width: s.width, height: s.height },
    deviceScaleFactor: s.scale,
    isMobile: s.mobile,
    hasTouch: s.mobile,
  });
  const page = await ctx.newPage();
  for (const path of pages) {
    await page.goto(base + path, { waitUntil: "networkidle" });
    // Scroll through slowly so every "appear on scroll" animation runs
    // keep scrolling until the real bottom (page height can grow while images load)
    let y = 0;
    for (let guard = 0; guard < 400; guard++) {
      const h = await page.evaluate(() => document.documentElement.scrollHeight);
      if (y > h) break;
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(220);
      y += Math.round(s.height * 0.5);
    }
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1500);
    if (path === "/") await page.screenshot({ path: `shots/${s.name}-first-screen.png` });
    const slug = path === "/" ? "home" : path.replace(/\W+/g, "_").replace(/^_|_$/g, "");
    await page.screenshot({ path: `shots/${s.name}-${slug}.png`, fullPage: true });
    // Also capture the open mobile menu on phone/tablet
    if (s.mobile && path === "/") {
      const btn = page.locator('button[aria-label="Open menu"]');
      if (await btn.count()) {
        await btn.click();
        await page.waitForTimeout(900);
        await page.screenshot({ path: `shots/${s.name}-menu.png` });
      }
    }
    // Horizontal overflow check (elements wider than the screen)
    const overflow = await page.evaluate(() => {
      const w = document.documentElement.clientWidth;
      const bad = [];
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > w + 1 || r.left < -1)) {
          const st = getComputedStyle(el);
          if (st.position !== "fixed" && st.visibility !== "hidden") {
            let p = el.parentElement, clipped = false;
            while (p) { const ps = getComputedStyle(p); if (ps.overflowX === "hidden" || ps.overflow === "hidden" || ps.overflowX === "clip") { clipped = true; break; } p = p.parentElement; }
            if (!clipped) bad.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 80)} right=${Math.round(r.right)}`);
          }
        }
      });
      return { scrollWidth: document.documentElement.scrollWidth, clientWidth: w, bad: bad.slice(0, 15) };
    });
    fs.appendFileSync("shots/report.txt", `${s.name} ${path}: ${JSON.stringify(overflow)}\n`);
  }
  await ctx.close();
}
await browser.close();
