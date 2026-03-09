import { FadeIn } from "@/components/fade-in";
import { ExternalLinkIcon, GitHubIcon, LovableIcon, ReplitIcon } from "@/components/icons";

interface Project {
  title: string;
  emoji: string;
  what: string;
  why: string;
  builtWith: string;
  link?: string;
  linkIcon?: "github" | "lovable" | "replit";
  comingSoon?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Wine Taste Game",
    emoji: "\uD83C\uDF77",
    what: "An online, customized version of a physical game to gamify wine tasting events with friends.",
    why: "Wanted to bring our favorite party game online so we fully customize it each time.",
    builtWith: "Lovable",
    link: "https://wine-taste-game.lovable.app",
    linkIcon: "lovable",
  },
  {
    title: "ScreenRelay",
    emoji: "\uD83D\uDCBB",
    what: "A macOS menu-bar app that lets you seamlessly switch which window is shared during video calls.",
    why: "Tired of the clunky stop-share-reshare dance in virtual meetings every time I needed to show a different window.",
    builtWith: "Claude Code",
    link: "https://github.com/levdudas/SeemlessScreen-mac",
    linkIcon: "github",
  },
  {
    title: "Pricing Page Anatomy",
    emoji: "\uD83D\uDCB0",
    what: "An interactive tutorial dissecting a SaaS pricing page — exploring monetization strategy and behavioral design patterns.",
    why: "Wanted to turn years of pricing & packaging work into something tangible and educational.",
    builtWith: "Replit",
    link: "https://pricing-page-anatomy.replit.app",
    linkIcon: "replit",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <FadeIn>
        <h2 className="font-serif text-2xl md:text-3xl mb-2">Weekend Projects</h2>
        <p className="text-sm text-text-muted mb-6">Side projects built to scratch an itch.</p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.title + i} delay={i * 100}>
            <div
              className={`bg-card rounded-xl p-5 h-full flex flex-col transition-all duration-300 ${
                project.comingSoon
                  ? "opacity-50 border-2 border-dashed border-border"
                  : "hover:bg-card-hover hover:shadow-sm"
              }`}
            >
              <p className="text-2xl mb-3">{project.emoji}</p>
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{project.what}</p>

              {!project.comingSoon && (
                <>
                  <p className="text-sm mt-3">
                    <span className="text-text-muted">The itch: </span>
                    {project.why}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-xs bg-bg rounded-lg px-2.5 py-1 text-text-muted">
                      {project.builtWith}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                      >
                        {project.linkIcon === "github" && <GitHubIcon className="w-3.5 h-3.5" />}
                        {project.linkIcon === "lovable" && <LovableIcon className="w-3.5 h-3.5" />}
                        {project.linkIcon === "replit" && <ReplitIcon className="w-3.5 h-3.5" />}
                        Try it <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
