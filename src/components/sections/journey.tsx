import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

interface TimelineNode {
  period: string;
  title: string;
  company: string;
  isCurrent?: boolean;
  highlights: string[];
  skillsUnlocked?: string[];
  surfaces?: string[];
  caseStudies?: { title: string; slug: string }[];
}

const PREZI_TIMELINE: TimelineNode[] = [
  {
    period: "Dec 2025 \u2013 present",
    title: "Product Manager",
    company: "Marshmallow",
    isCurrent: true,
    highlights: [
      "Leading Claims Fraud cross-functional team (Data Science, Engineering, Analytics, Design, Fraud Ops)",
      "Productionising data science fraud models into system-led referrals",
      "Specifying LLM-based agentic decisioning and AI-led automations",
    ],
  },
  {
    period: "2022 \u2013 2025",
    title: "Senior Growth Product Manager",
    company: "Prezi",
    highlights: [
      "Led cross-functional team of engineers, designer, analyst and QA to run high-velocity AB tests",
      "Owned subscription product roadmap end-to-end from ideation through launch and iteration",
      "~$1M incremental ARR each year, while improving activation and reducing churn",
      "Transformed pricing & packaging to align with new AI features",
    ],
    surfaces: [
      "Signup \u2192 Product (welcome flow)",
      "Pricing & Paywalls",
      "Checkout & Cancel",
      "B2B self-serve teams",
    ],
    caseStudies: [
      { title: "Aligning the Welcome Flow to AI", slug: "ai-welcome-flow" },
      { title: "AI Credits Monetization", slug: "ai-credits-monetization" },
    ],
  },
  {
    period: "2020 \u2013 2022",
    title: "Growth Data Analyst",
    company: "Prezi",
    highlights: [
      "Built a new AB test dashboard and data pipeline (Chartio \u2192 Mode, Redshift \u2192 Hive)",
      "Created AB test best practices training for product managers",
      "Supported experimentation end-to-end: hypothesis, sizing, design, evaluation",
    ],
    skillsUnlocked: ["Experimentation methodology", "Statistical foundations", "Tooling ownership"],
  },
  {
    period: "2019 \u2013 2020",
    title: "Data Analyst",
    company: "Prezi",
    highlights: [
      "Defined activation metrics \u2014 the \u201Caha\u201D moment (1 minute presenting)",
      "Built daily ETL jobs (S3, Redshift, Hive) with Dagster",
      "Evaluated dozens of user journey milestone candidates for prediction & recall",
    ],
    skillsUnlocked: ["Data infrastructure", "Metric definition", "Stakeholder communication"],
  },
];

const BEFORE_PREZI = [
  { company: "MATHador", period: "2016\u201319", role: "Consultant", detail: "MOL, OTP, E.on \u2014 CRM, ML, decision support" },
  { company: "Self-employed", period: "2014\u201315", role: "Founder", detail: "Blendit startup (failed fast, learned a ton)" },
  { company: "Vodafone", period: "2012\u201314", role: "Business Analyst", detail: "European market phone stock optimization" },
  { company: "Praktiker", period: "2010\u201312", role: "Business Analyst", detail: "Supply chain operations & ERP tooling" },
];

export function JourneySection() {
  return (
    <section id="journey" className="scroll-mt-20">
      <FadeIn>
        <h2 className="font-serif text-2xl md:text-3xl mb-2">Career Journey</h2>
        <p className="text-text-muted mb-10">
          From data pipelines to product strategy &mdash; each step built on the last.
        </p>
      </FadeIn>

      {/* Prezi context */}
      <FadeIn delay={100}>
        <div className="bg-card rounded-xl px-5 py-3 mb-8 text-sm text-text-muted inline-flex flex-wrap gap-x-3 gap-y-1">
          <span className="font-medium text-text">Prezi</span>
          <span>SaaS &middot; Presentation tool</span>
          <span>B2C 85% / B2B 15%</span>
          <span>~150-200 employees</span>
          <span>~10M registrations/year</span>
          <span>~30M ARR</span>
        </div>
      </FadeIn>

      {/* Main timeline */}
      <div className="relative pl-8 border-l-2 border-border space-y-10">
        {PREZI_TIMELINE.map((node, i) => (
          <FadeIn key={node.title + node.company} delay={i * 100}>
            <div className="relative">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full border-2 ${
                  node.isCurrent
                    ? "bg-sage border-sage"
                    : "bg-accent border-accent"
                }`}
              />

              {/* Current badge */}
              {node.isCurrent && (
                <span className="inline-block bg-sage/20 text-sage text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg mb-2">
                  Now
                </span>
              )}

              <div className="bg-card rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                  <h3 className="font-serif text-xl">{node.title}</h3>
                  <span className="text-text-muted text-sm">@ {node.company}</span>
                  <span className="text-text-muted text-xs ml-auto">{node.period}</span>
                </div>

                <ul className="space-y-1.5 text-sm text-text-muted">
                  {node.highlights.map((h) => (
                    <li key={h} className="leading-relaxed">{h}</li>
                  ))}
                </ul>

                {/* Surface areas */}
                {node.surfaces && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {node.surfaces.map((s) => (
                      <span key={s} className="text-xs bg-bg rounded-lg px-2.5 py-1 text-text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {/* Case study links */}
                {node.caseStudies && (
                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                      Case Studies
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {node.caseStudies.map((cs) => (
                        <Link
                          key={cs.slug}
                          href={`/case-study/${cs.slug}`}
                          className="flex-1 bg-accent/5 hover:bg-accent/10 border border-accent/20 rounded-xl px-4 py-3 text-sm font-medium text-accent transition-colors group"
                        >
                          {cs.title}
                          <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                            &rarr;
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills unlocked */}
                {node.skillsUnlocked && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {node.skillsUnlocked.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-sage/10 text-sage rounded-lg px-2.5 py-1 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Before Prezi */}
      <FadeIn delay={400}>
        <div className="mt-16">
          <h3 className="font-serif text-xl mb-6 text-text-muted">Before Prezi</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BEFORE_PREZI.map((item) => (
              <div key={item.company} className="bg-card rounded-xl p-4 text-sm">
                <p className="font-medium">{item.company}</p>
                <p className="text-text-muted text-xs mb-1">{item.period}</p>
                <p className="text-text-muted text-xs">{item.role}</p>
                <p className="text-text-muted text-xs mt-2 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
