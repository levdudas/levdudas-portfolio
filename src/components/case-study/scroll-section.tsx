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
    <section id={id} className="py-5 md:py-6 scroll-mt-14">
      <FadeIn className="w-full max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
          {label}
        </p>
        <h2 className="font-serif text-xl md:text-2xl mb-4">{title}</h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">{children}</div>
      </FadeIn>
    </section>
  );
}
