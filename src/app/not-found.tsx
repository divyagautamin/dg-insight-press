import Link from "next/link";
import PageShell from "@/components/pages/PageShell";
import { LINKS } from "@/lib/links";

export default function NotFound() {
  return (
    <PageShell
      eyebrow="Error 404"
      title={<>This page could not be <span className="italic text-[#D4AF37]">found</span></>}
      intro="The page you are looking for may have moved, or it is not public yet."
    >
      <Link href={LINKS.home.href} className="inline-block rounded-sm bg-[#D4AF37] px-8 py-3.5 text-[14px] font-semibold text-black shadow-[0_0_24px_rgba(212,175,55,0.3)] transition hover:bg-[#f0cf67]">
        Return to Home
      </Link>
    </PageShell>
  );
}
