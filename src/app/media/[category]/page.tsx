import { notFound } from "next/navigation";
import PageShell, { PreparingNote, notYetPublic } from "@/components/pages/PageShell";
import { mediaCategories } from "@/data/content";

export function generateStaticParams() {
  return mediaCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const item = mediaCategories.find((c) => c.slug === category);
  return { title: item?.title ?? "Media & Press", description: item?.summary, robots: notYetPublic };
}

export default async function MediaCategoryPage({ params }) {
  const { category } = await params;
  const item = mediaCategories.find((c) => c.slug === category);
  if (!item) notFound();

  return (
    <PageShell
      eyebrow={`Media & Press • ${item.eyebrow}`}
      title={item.title}
      intro={item.summary}
      status="Forthcoming"
      backLink={{ href: "/#media", label: "Back to Media & Press" }}
    >
      <PreparingNote text="Coverage will be added here as it is published. For interviews and press copies, please get in touch." />
    </PageShell>
  );
}
