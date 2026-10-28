import PageShell, { PreparingNote, notYetPublic } from "@/components/pages/PageShell";

export const metadata = {
  title: "Cookie Policy",
  description: "Information about cookies and similar technologies used on this website.",
  robots: notYetPublic,
};

export default function CookiesPage() {
  return (
    <PageShell eyebrow="Legal" title="Cookie Policy" intro="Information about cookies and similar technologies used on this website." status="Being prepared">
      {/* Write the cookie policy text inside this <article> when it is ready. */}
      <article className="max-w-3xl text-[15px] font-light leading-[1.9] text-[#D2CEC5]" />
      <PreparingNote text="This page is being prepared and will be published soon. For any question in the meantime, please write to us." />
    </PageShell>
  );
}
