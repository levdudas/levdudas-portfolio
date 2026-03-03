"use client";

import { type ReactNode } from "react";
import { FadeIn } from "@/components/fade-in";

export function ScrollSection({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="min-h-[60vh] flex items-start py-16 md:py-24 scroll-mt-8">
      <FadeIn className="w-full max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
          {label}
        </p>
        <h2 className="font-serif text-2xl md:text-3xl mb-6">{title}</h2>
        <div className="space-y-4 text-text-muted leading-relaxed">{children}</div>
      </FadeIn>
    </section>
  );
}
