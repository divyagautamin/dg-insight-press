import PageShell, { PreparingNote, notYetPublic } from "@/components/pages/PageShell";

export const metadata = {
  title: "Disclaimer",
  description: "Important notes about the information, opinions and research shared on this website.",
  robots: notYetPublic,
};

export default function DisclaimerPage() {
  return (
    <PageShell eyebrow="Legal" title="Disclaimer" intro="Important notes about the information, opinions and research shared on this website." status="Being prepared">
      {/* Write the disclaimer text inside this <article> when it is ready. */}
      <article className="max-w-3xl text-[15px] font-light leading-[1.9] text-[#D2CEC5]" />
      <PreparingNote text="This page is being prepared and will be published soon. For any question in the meantime, please write to us." />
    </PageShell>
  );
}
