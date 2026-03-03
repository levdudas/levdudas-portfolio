import { FadeIn } from "@/components/fade-in";
import { DownloadIcon, ExternalLinkIcon } from "@/components/icons";

const PROOF_POINTS = [
  {
    metric: "~$1M",
    subtitle: "incremental ARR/year proven by AB tests",
  },
  {
    metric: "6+ years",
    subtitle: "SaaS: data \u2192 product",
  },
  {
    metric: "PhD",
    subtitle: "in Management Sciences, Summa cum laude",
  },
  {
    metric: "100+",
    subtitle: "AB tests shipped end-to-end",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-20">
      {/* Header banner */}
      <div className="rounded-xl bg-gradient-to-br from-accent/8 via-sage/6 to-accent/4 h-32 md:h-40 mb-8 flex items-end p-6">
        <h2 className="font-serif text-2xl md:text-3xl text-text">Portfolio Summary</h2>
      </div>

      <FadeIn>
        <p className="text-base md:text-lg leading-relaxed text-text">
          Experienced product analyst and product manager. Well versed in quantitative
          and qualitative research and experiment methodologies. Proven record of turning
          data-driven hypotheses, customer behaviour signals and customer feedback into revenue.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {PROOF_POINTS.map((point) => (
            <div
              key={point.metric}
              className="bg-card rounded-xl p-4 hover:bg-card-hover hover:shadow-sm transition-all duration-300"
            >
              <p className="font-bold text-lg text-accent">{point.metric}</p>
              <p className="text-sm text-text-muted mt-1 leading-snug">{point.subtitle}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="flex flex-wrap gap-4 mt-5">
          <a
            href="/resume/Resume_Levente_Dudas.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <DownloadIcon />
            Full resume (PDF)
          </a>
          <a
            href="https://www.linkedin.com/in/levente-l%C3%A1szl%C3%B3-dud%C3%A1s-8261a053/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ExternalLinkIcon />
            LinkedIn profile
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
