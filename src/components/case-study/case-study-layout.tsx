"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { ProgressIndicator } from "./progress-indicator";
import { useScrollspy } from "@/hooks/use-scrollspy";
import { type ReactNode } from "react";

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  sections: { id: string; label: string }[];
  children: ReactNode;
}

export function CaseStudyLayout({ title, subtitle, sections, children }: CaseStudyLayoutProps) {
  const sectionIds = sections.map((s) => s.id);
  const activeSection = useScrollspy(sectionIds, 50);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/#journey"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to portfolio
          </Link>
          <p className="text-sm font-medium truncate ml-4">{title}</p>
        </div>
      </header>

      <ProgressIndicator sections={sections} activeSection={activeSection} />

      <main className="pt-20 pb-24 px-6">
        {/* Case study header */}
        <div className="max-w-3xl mx-auto py-16 md:py-24">
          <p className="text-sm text-accent font-medium uppercase tracking-wider mb-3">Case Study</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h1>
          <p className="text-lg text-text-muted">{subtitle}</p>
        </div>

        <div className="divide-y divide-border">{children}</div>
      </main>
    </div>
  );
}
