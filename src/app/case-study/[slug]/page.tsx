import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/data/case-studies";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) return { title: "Not Found" };
  return {
    title: `${study.title} \u2014 Levente Dud\u00E1s`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];

  if (!study) {
    notFound();
  }

  return (
    <CaseStudyLayout title={study.title} subtitle={study.subtitle} sections={study.sections}>
      {study.content}
    </CaseStudyLayout>
  );
}
