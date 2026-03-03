"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { type ReactNode } from "react";

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function CaseStudyLayout({ title, subtitle, children }: CaseStudyLayoutProps) {
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

      <main className="pt-18 pb-16 px-6">
        {/* Case study header */}
        <div className="max-w-3xl mx-auto py-5 md:py-6">
          <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">Case Study</p>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3">{title}</h1>
          <p className="text-sm text-text-muted leading-relaxed">{subtitle}</p>
        </div>

        <div className="divide-y divide-border">{children}</div>
      </main>
    </div>
  );
}
