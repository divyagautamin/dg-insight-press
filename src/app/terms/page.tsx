import PageShell, { PreparingNote, notYetPublic } from "@/components/pages/PageShell";

export const metadata = {
  title: "Terms of Use",
  description: "The terms that apply to using this website and ordering from DG Insight Press.",
  robots: notYetPublic,
};

export default function TermsPage() {
  return (
    <PageShell eyebrow="Legal" title="Terms of Use" intro="The terms that apply to using this website and ordering from DG Insight Press." status="Being prepared">
      {/* Write the terms of use text inside this <article> when it is ready. */}
      <article className="max-w-3xl text-[15px] font-light leading-[1.9] text-[#D2CEC5]" />
      <PreparingNote text="This page is being prepared and will be published soon. For any question in the meantime, please write to us." />
    </PageShell>
  );
}
