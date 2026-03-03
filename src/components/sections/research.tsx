import { FadeIn } from "@/components/fade-in";
import { ExternalLinkIcon } from "@/components/icons";

export function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-20">
      <FadeIn>
        <h2 className="font-serif text-2xl md:text-3xl mb-4">Research Roots</h2>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="bg-card rounded-xl p-6 md:p-8">
          <p className="text-sm leading-relaxed">
            I studied how people make decisions under uncertainty &mdash; earning a PhD{" "}
            <span className="text-accent font-medium">(Summa cum laude)</span> at
            Corvinus University of Budapest. My published work on nudge theory and
            preventive measures, and on COVID-19 skepticism and risk perception, sits
            at the intersection of behavioral science and public policy.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            That academic foundation directly informs how I design experiments at work:
            every AB test is, at its core, a study in how people respond to framing,
            defaults, and choice architecture.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://scholar.google.com/citations?user=bhFgAKIAAAAJ&hl=en&authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bg rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <ExternalLinkIcon />
              Google Scholar
            </a>
            <a
              href="https://phd.lib.uni-corvinus.hu/1249/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bg rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <ExternalLinkIcon />
              PhD Thesis
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
