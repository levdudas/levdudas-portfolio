"use client";

interface ProgressIndicatorProps {
  sections: { id: string; label: string }[];
  activeSection: string;
}

export function ProgressIndicator({ sections, activeSection }: ProgressIndicatorProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className="group flex items-center gap-3"
          aria-label={section.label}
        >
          <span
            className={`text-xs text-right transition-all opacity-0 group-hover:opacity-100 ${
              activeSection === section.id ? "!opacity-100 text-accent font-medium" : "text-text-muted"
            }`}
          >
            {section.label}
          </span>
          <span
            className={`w-2.5 h-2.5 rounded-full border-2 transition-all ${
              activeSection === section.id
                ? "bg-accent border-accent scale-125"
                : "border-border group-hover:border-accent"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
