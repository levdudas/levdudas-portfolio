"use client";

import { Sidebar } from "@/components/sidebar";
import { useScrollspy } from "@/hooks/use-scrollspy";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ResearchSection } from "@/components/sections/research";
import { JourneySection } from "@/components/sections/journey";
import { PhilosophySection } from "@/components/sections/philosophy";
import { ContactSection } from "@/components/sections/contact";

const SECTION_IDS = ["hero", "projects", "research", "journey", "philosophy", "contact"];

export default function Home() {
  const activeSection = useScrollspy(SECTION_IDS);

  return (
    <div className="min-h-screen">
      <Sidebar activeSection={activeSection} />

      <main className="lg:ml-[280px] pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-8 space-y-16">
          <HeroSection />
          <ProjectsSection />
          <ResearchSection />
          <JourneySection />
          <PhilosophySection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
