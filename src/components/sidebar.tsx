"use client";

import { useState } from "react";
import Image from "next/image";
import { LinkedInIcon, EmailIcon, ScholarIcon, MenuIcon, CloseIcon } from "./icons";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "journey", label: "Journey" },
  { id: "philosophy", label: "How I Work" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  {
    title: "Experimentation",
    items: ["AB test design", "Statistical evaluation", "Optimizely", "Statsig", "LaunchDarkly"],
  },
  {
    title: "Data Infrastructure",
    items: ["dbt", "Snowflake", "Hive", "S3", "ETL with Dagster"],
  },
  {
    title: "Product Craft",
    items: ["Roadmap ownership", "Pricing & packaging", "Activation & retention", "Cross-functional leadership"],
  },
];

export function Sidebar({ activeSection }: { activeSection: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-[280px] bg-bg-sidebar border-r border-border overflow-y-auto p-5 gap-4">
        <SidebarContent activeSection={activeSection} onNavigate={scrollTo} />
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-bg-sidebar/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/profile.png"
            alt="Levente Dudás"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-sm leading-tight">Levente Dudás, PhD</p>
            <p className="text-xs text-text-muted">PM @ Marshmallow</p>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg hover:bg-card transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
          <div className="relative bg-bg-sidebar h-full overflow-y-auto p-5 max-w-[320px] ml-auto shadow-xl">
            <SidebarContent activeSection={activeSection} onNavigate={scrollTo} />
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <>
      {/* Profile */}
      <div className="flex flex-col items-center text-center gap-3">
        <Image
          src="/images/profile.png"
          alt="Levente Dudás"
          width={96}
          height={96}
          className="rounded-full border-2 border-border"
        />
        <div>
          <h1 className="font-semibold text-lg">Levente Dudás, PhD</h1>
          <p className="text-sm text-text-muted">PM @ Marshmallow, ex-Prezi</p>
        </div>
      </div>

      {/* Availability */}
      <div className="bg-sage-light rounded-lg p-3 text-sm">
        <div className="flex items-center gap-2 font-medium mb-1">
          <span className="w-2 h-2 rounded-full bg-sage inline-block" />
          Available
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          Growth/product leadership, experimentation consulting, monetization strategy
        </p>
      </div>

      {/* Contact CTA + Social links */}
      <div className="space-y-3">
        <button
          onClick={() => onNavigate("contact")}
          className="w-full border border-accent text-accent rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent/5 transition-colors"
        >
          Let&apos;s work together
        </button>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/levente-l%C3%A1szl%C3%B3-dud%C3%A1s-8261a053/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:lev.dudas@gmail.com"
            className="text-text-muted hover:text-accent hover:scale-110 transition-all"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
          <a
            href="https://scholar.google.com/citations?user=bhFgAKIAAAAJ&hl=en&authuser=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent hover:scale-110 transition-all"
            aria-label="Google Scholar"
          >
            <ScholarIcon />
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {SKILLS.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs bg-card rounded-lg px-2 py-1 text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="space-y-1 mt-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
              activeSection === item.id
                ? "bg-accent/10 text-accent font-medium border-l-2 border-accent"
                : "text-text-muted hover:bg-card hover:text-text border-l-2 border-transparent"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
