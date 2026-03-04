import Link from "next/link";
import { ArrowLeftIcon, DownloadIcon, LinkedInIcon, EmailIcon, ScholarIcon } from "@/components/icons";

const EXPERIENCE = [
  {
    company: "Marshmallow",
    title: "Product Manager",
    period: "December 2025 – Present",
    isCurrent: true,
    bullets: [
      "Leading the Claims Fraud cross-functional team (Data Science, Engineering, Analytics, Design, Fraud Ops).",
      "Productionising data science fraud models into system-led referrals and workflows.",
      "Specifying and scoping LLM-based agentic decisioning and AI-led automations.",
    ],
  },
  {
    company: "Prezi",
    title: "Senior Growth Product Manager",
    period: "August 2019 – November 2025",
    subroles: [
      {
        title: "Senior Growth Product Manager",
        period: "2023 – 2025",
        bullets: [
          "Owned the subscription product roadmap end-to-end from ideation through launch and iteration.",
          "Led a cross-functional team of engineers, designer, analyst and QA to run high-velocity A/B tests.",
          "Optimized subscription funnel performance to find gains in activation and monetization.",
          "Achieved ~$1M incremental ARR each year proven by AB tests, while improving activation, reducing churn, and keeping ARPU stable.",
          "Transformed pricing & packaging to align with new AI features driving most of user value — established AI credits as a new currency, defined value metrics, refined monetization tactics.",
          "Owned organic B2B business, team/collaboration features, plans and pricing, PQL identification, and single-user to team conversion funnel.",
        ],
      },
      {
        title: "Senior Data Analyst (Growth)",
        period: "2021 – 2023",
        bullets: [
          "Supported the experimentation process end-to-end: hypothesis forming, opportunity sizing, variant design, logging, bucketing, data quality monitoring, evaluation and impact projection.",
          "Improved the reporting data layer, the customized frontend web application and the statistical foundations of our evaluation methodology for AB testing.",
        ],
      },
      {
        title: "Data Analyst",
        period: "2019 – 2021",
        bullets: [
          "Mined large data sets from various sources (S3, Redshift, Hive) by building daily ETL jobs using data orchestration tools (Flowkeeper, Dagster).",
          "Provided actionable insights through statistical analysis and data visualization tools (Mode, Indicative) about user behavior patterns and AB test experiments.",
          "Defined engagement metrics and KPIs (user engagement, activation) for the company.",
        ],
      },
    ],
  },
  {
    company: "MATHador R&D",
    title: "Consultant",
    period: "March 2016 – July 2019",
    bullets: [
      "Worked on focused data and product development projects for several of Hungary\u2019s largest companies (MOL, OTP, E.on, Grand Tokaj Winery, Hungarian Agricultural Agency).",
      "Projects: CRM application development, ML models for predictive analysis, logistical modeling and decision support tooling.",
    ],
  },
  {
    company: "Self Employed",
    title: "Founder & Analyst",
    period: "October 2014 – September 2015",
    bullets: [
      "Freelance analyst building models in Excel and automations with VBA.",
      "Founded Blendit — a software supporting blended learning — which failed fast, while learning about product development, go-to-market strategies and sales.",
    ],
  },
  {
    company: "Vodafone",
    title: "Business Analyst",
    period: "October 2012 – September 2014",
    bullets: [
      "Reporting and business analysis for phone stocks in the European market, liaising with local market subsidiaries to optimize logistical costs.",
      "Process improvement following lean principles, simplifying accounting and BI reporting. Internal trainer for Excel, VBA and SQL.",
    ],
  },
  {
    company: "Praktiker",
    title: "Business Analyst",
    period: "January 2010 – September 2012",
    bullets: [
      "Supported supply chain operations to reduce logistical cost, workload and optimize store placement and product prices.",
      "Built internal ERP extensions improving communication among stores, headquarters and vendors.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Doctor of Philosophy (PhD)",
    field: "Management and Organization Sciences",
    school: "Corvinus University of Budapest",
    grade: "Summa cum laude",
    details: [
      "Research: Nudge theory, Risk theory, Public policy",
      "Teaching: Decision Sciences, Decision Techniques, Business Economics",
    ],
    thesisUrl: "https://phd.lib.uni-corvinus.hu/1249/",
  },
  {
    degree: "Master\u2019s degree",
    field: "Quantitative Economic Analysis",
    school: "Corvinus University of Budapest",
    details: ["Major in Operations Research"],
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to portfolio
          </Link>
          <a
            href="/resume/Levente_Dudas_Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
          >
            <DownloadIcon className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Name & contact */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl mb-1">Levente Dud&aacute;s, PhD</h1>
          <p className="text-lg text-text-muted mb-4">Product Manager</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <a
              href="mailto:lev.dudas@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <EmailIcon className="w-4 h-4" />
              lev.dudas@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/levente-l%C3%A1szl%C3%B3-dud%C3%A1s-8261a053/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=bhFgAKIAAAAJ&hl=en&authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <ScholarIcon className="w-4 h-4" />
              Google Scholar
            </a>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-6 border-b border-border pb-2">
            Experience
          </h2>
          <div className="space-y-8">
            {EXPERIENCE.map((job) => (
              <div key={job.company + job.period}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-base inline">{job.title}</h3>
                    <span className="text-text-muted"> &middot; {job.company}</span>
                    {job.isCurrent && (
                      <span className="ml-2 inline-block bg-sage/20 text-sage text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">{job.period}</span>
                </div>

                {job.bullets && (
                  <ul className="space-y-1 text-sm text-text-muted ml-4">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed before:content-['•'] before:mr-2 before:text-border">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {job.subroles && (
                  <div className="space-y-5 mt-3 ml-4 border-l-2 border-border pl-5">
                    {job.subroles.map((sub) => (
                      <div key={sub.title + sub.period}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1.5">
                          <h4 className="font-medium text-sm">{sub.title}</h4>
                          <span className="text-xs text-text-muted">{sub.period}</span>
                        </div>
                        <ul className="space-y-1 text-sm text-text-muted">
                          {sub.bullets.map((b, i) => (
                            <li key={i} className="leading-relaxed before:content-['•'] before:mr-2 before:text-border">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-6 border-b border-border pb-2">
            Education
          </h2>
          <div className="space-y-6">
            {EDUCATION.map((edu) => (
              <div key={edu.degree}>
                <h3 className="font-semibold text-base">
                  {edu.degree}, {edu.field}
                </h3>
                <p className="text-sm text-text-muted">{edu.school}</p>
                {edu.grade && (
                  <p className="text-sm mt-1">
                    <span className="text-sage font-medium">{edu.grade}</span>
                  </p>
                )}
                {edu.details && (
                  <ul className="text-sm text-text-muted mt-1 space-y-0.5">
                    {edu.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
                {edu.thesisUrl && (
                  <a
                    href={edu.thesisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline mt-1 inline-block"
                  >
                    View thesis &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
