import PageShell, { PreparingNote, notYetPublic } from "@/components/pages/PageShell";

export const metadata = {
  title: "Privacy Policy",
  description: "How information shared through this website — such as contact form messages and newsletter sign-ups — is collected, used and protected.",
  robots: notYetPublic,
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell eyebrow="Legal" title="Privacy Policy" intro="How information shared through this website — such as contact form messages and newsletter sign-ups — is collected, used and protected." status="Being prepared">
      {/* Write the privacy policy text inside this <article> when it is ready. */}
      <article className="max-w-3xl text-[15px] font-light leading-[1.9] text-[#D2CEC5]" />
      <PreparingNote text="This page is being prepared and will be published soon. For any question in the meantime, please write to us." />
    </PageShell>
  );
}
