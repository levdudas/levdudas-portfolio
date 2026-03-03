import { FadeIn } from "@/components/fade-in";

const PILLARS = [
  {
    title: "Velocity",
    description:
      "Utilise the traffic \u2014 have a test always running on all surface areas. Optimise the experiment portfolio with the rock-pebble-sand ratio: big bets, medium improvements, and quick wins running in parallel.",
  },
  {
    title: "Hypothesis-Centric",
    description:
      "A clear hypothesis behind every experiment. It right-sizes the scope \u2014 what changes are essential versus what would only add noise. And it maximises learnings: evaluate results through the lens of what you set out to learn, not just whether a metric moved.",
  },
  {
    title: "Cross-Functional Leadership",
    description:
      "Supercharge the team by being crystal clear about customer needs, business context, and strategy. Then challenge each discipline on their terms:",
  },
];

const DISCIPLINES = [
  { role: "Designers", challenge: "Think in stepping stones, not ideal endgames" },
  { role: "Engineers", challenge: "What\u2019s the easiest MVP to validate the idea in production?" },
  { role: "QA", challenge: "Look beyond the happy path, examine things nobody thought of" },
  { role: "Data", challenge: "Provide insights, not just data" },
  { role: "UXR", challenge: "Surface real user intent, not just pain points" },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="scroll-mt-20">
      <FadeIn>
        <h2 className="font-serif text-2xl md:text-3xl mb-2">How I Work</h2>
        <p className="text-text-muted mb-10">
          Lessons from 50+ experiments and 6 years of growth work.
        </p>
      </FadeIn>

      <div className="space-y-8">
        {PILLARS.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 100}>
            <div className="bg-card rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl text-accent mb-3">{pillar.title}</h3>
              <p className="text-text-muted leading-relaxed">{pillar.description}</p>

              {pillar.title === "Cross-Functional Leadership" && (
                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                  {DISCIPLINES.map((d) => (
                    <div key={d.role} className="bg-bg rounded-xl px-4 py-3">
                      <p className="text-sm font-medium">{d.role}</p>
                      <p className="text-xs text-text-muted mt-0.5">{d.challenge}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
