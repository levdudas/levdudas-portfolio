import Image from "next/image";
import { ScrollSection } from "@/components/case-study/scroll-section";

export interface CaseStudyData {
  title: string;
  subtitle: string;
  sections: { id: string; label: string }[];
  content: React.ReactNode;
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "ai-welcome-flow": {
    title: "Aligning the Welcome Flow to AI",
    subtitle:
      "Redesigning Prezi\u2019s first-time user experience to match the new AI-powered product and drive early activation.",
    sections: [
      { id: "situation", label: "Situation" },
      { id: "hypothesis", label: "Hypothesis" },
      { id: "design", label: "Design" },
      { id: "results", label: "Results" },
      { id: "decision", label: "Decision" },
    ],
    content: (
      <>
        <ScrollSection id="situation" label="Situation" title="New product, same front door">
          <ul className="space-y-1.5">
            <li><strong className="text-text">What changed:</strong> AI-assisted generation enabled across Prezi. Marketing campaigns promoting &ldquo;Present Tomorrow with Prezi AI&rdquo; reshaped user expectations.</li>
            <li><strong className="text-text">The problem:</strong> The first-time user experience (FTUE) still reflected the pre-AI product. New users expected an AI-first creation flow but got the old welcome screen.</li>
          </ul>
          <div className="bg-card rounded-lg p-3 mt-3">
            <p className="text-xs text-text-muted"><strong className="text-text">Target audience:</strong> All new users &middot; <strong className="text-text">Target metrics:</strong> Early engagement, activation &middot; <strong className="text-text">Counter metrics:</strong> Trial starts, subscriptions, bookings, chargebacks, retention</p>
          </div>
        </ScrollSection>

        <ScrollSection id="hypothesis" label="Hypothesis" title="Two bets">
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-card rounded-lg p-3">
              <p className="font-medium text-text text-sm mb-1">A: AI path prominence</p>
              <p>Users are more interested in generating with AI. Making this path prominent will increase success rates.</p>
            </div>
            <div className="bg-card rounded-lg p-3">
              <p className="font-medium text-text text-sm mb-1">B: Urgency framing</p>
              <p>Reinforcing the user&apos;s sense of urgency increases psychological investment and commitment to creating.</p>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="design" label="Experiment Design" title="Four welcome flow variants">
          <p>Each variant emphasized a different entry point into the product:</p>
          <div className="grid grid-cols-2 gap-3 mt-3">
            {[
              { name: "A: Product Selector", desc: "Classic \u2014 choose your product type" },
              { name: "B: Urgency Picker", desc: "\u201CWhen do you need this?\u201D \u2014 creates time pressure" },
              { name: "C: Template First", desc: "Start from a template \u2014 reduces blank canvas" },
              { name: "D: Prompt First", desc: "AI generation \u2014 type what you want to create" },
            ].map((v) => (
              <div key={v.name} className="bg-card rounded-lg p-3">
                <p className="font-medium text-text text-sm">{v.name}</p>
                <p className="text-xs text-text-muted mt-0.5">{v.desc}</p>
              </div>
            ))}
          </div>
          <Image
            src="/images/cases/cases-deep dive 1.png"
            alt="The four welcome flow variants: product selector, urgency picker, template first, and prompt first"
            width={800}
            height={500}
            className="rounded-xl border border-border mt-4"
          />
        </ScrollSection>

        <ScrollSection id="results" label="Results" title="Prompt First with Urgency Picker won clearly">
          <ul className="space-y-1.5">
            <li><strong className="text-text">Variant D (Prompt First)</strong> significantly outperformed all others on early engagement and activation.</li>
            <li><strong className="text-text">Urgency Picker &gt; Product Selector</strong> &mdash; orienting users by <em>when</em> they need their presentation (rather than <em>what type</em>) was more relevant and reinforced commitment.</li>
            <li>Combined as a sequence (Urgency Picker &rarr; Prompt First), they created the strongest path to first value.</li>
          </ul>
        </ScrollSection>

        <ScrollSection id="decision" label="Decision & Learnings" title="Roll out Variant D">
          <div className="bg-sage/10 rounded-lg p-4 border border-sage/20">
            <p className="font-medium text-sage text-sm">Decision: Roll out Urgency Picker + Prompt First</p>
          </div>
          <div className="mt-4 space-y-2">
            <p className="font-medium text-text text-sm">Key learnings:</p>
            <ul className="space-y-1.5">
              <li><strong className="text-text">Prompt-first reduced FTUE complexity.</strong> Not bothering users with template selection helped them get started faster in the AI-enabled product.</li>
              <li><strong className="text-text">Urgency framing works &mdash; and sticks.</strong> The &ldquo;When do you need this?&rdquo; picker was initially designed to reinforce a marketing message (&ldquo;Present Tomorrow with Prezi AI&rdquo;). In hindsight, the &ldquo;tomorrow&rdquo; option was suboptimal &mdash; a &ldquo;today&rdquo; option would have created stronger urgency (which we added in a later iteration). Still, even this softer version outperformed the classic product selector. What surprised us most: we assumed the urgency picker was a placeholder we&apos;d easily beat with something more relevant later. Instead, every replacement we tested lost against it. The psychological commitment of declaring <em>when</em> you need your presentation proved remarkably sticky.</li>
            </ul>
          </div>
        </ScrollSection>
      </>
    ),
  },

  "ai-credits-monetization": {
    title: "Finding the Right Monetization Model for AI Features",
    subtitle:
      "Shifting from aspirational selling to usage-based monetization with AI credits, and what we learned about regional price sensitivity.",
    sections: [
      { id: "situation", label: "Situation" },
      { id: "hypothesis", label: "Hypothesis" },
      { id: "design", label: "Design" },
      { id: "results", label: "Results" },
      { id: "decision", label: "Decision" },
    ],
    content: (
      <>
        <ScrollSection id="situation" label="Situation" title="Monetise AI, but don&rsquo;t gate-keep">
          <ul className="space-y-1.5">
            <li><strong className="text-text">What changed:</strong> Prezi had a range of AI-assisted features but no monetization strategy for them. We wanted to ease friction early in the experience rather than relying solely on subscription gates.</li>
            <li><strong className="text-text">The problem:</strong> Find the right place for AI features in our packaging. Monetise the value AI provides, but allow free users to try and experience the value before asking them to pay.</li>
          </ul>
        </ScrollSection>

        <ScrollSection id="hypothesis" label="Hypothesis" title="Credits as a soft paywall">
          <p>
            Creditize AI-related actions that users perceive as high-value. Show users what Prezi can do, but after a while they have to pay to continue. Upgrade rates should increase as users realise value through <em>usage</em> rather than at the point of initial <em>aspiration</em>.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            <div className="bg-card rounded-lg p-3">
              <p className="font-medium text-text text-sm mb-1">Scenario A: Lower friction</p>
              <p className="text-xs">Reduced monetary friction on pricing page</p>
              <p className="text-xs text-sage mt-1">+5% activation &middot; <span className="text-accent">-5% bookings</span></p>
            </div>
            <div className="bg-card rounded-lg p-3">
              <p className="font-medium text-text text-sm mb-1">Scenario B: Usage limits</p>
              <p className="text-xs">Increased monetization with credit limits</p>
              <p className="text-xs text-sage mt-1">+5% bookings &middot; <span className="text-text-muted">flat activation</span></p>
            </div>
          </div>
          <p className="text-xs text-text-muted mt-2">Overall expected: +5% activation, flat bookings &mdash; a net positive from the combined approach.</p>
        </ScrollSection>

        <ScrollSection id="design" label="Experiment Design" title="What we changed (control &rarr; variant)">
          <p>The variant introduced a full credits economy across five product surfaces:</p>
          <div className="space-y-3 mt-3">
            <div className="bg-card rounded-lg p-3">
              <p className="font-medium text-text text-sm">Credits system</p>
              <p className="text-xs text-text-muted mt-1">500 credits on Basic plan. Creditized: document import, image generation, background removal, advanced Ask AI features. AI-generated images available to variant only (paywalled in control).</p>
            </div>
            <div className="bg-card rounded-lg p-3">
              <p className="font-medium text-text text-sm">Pricing page</p>
              <p className="text-xs text-text-muted mt-1">Redesigned to surface Basic plan, hide Standard, use EDU toggle with student discount by default. Better layout for embedded view later in the flow.</p>
            </div>
            <div className="bg-card rounded-lg p-3">
              <p className="font-medium text-text text-sm">Dashboard</p>
              <p className="text-xs text-text-muted mt-1">Added visible credit counter in top menu and &ldquo;Get unlimited AI&rdquo; CTA.</p>
            </div>
            <div className="bg-card rounded-lg p-3">
              <p className="font-medium text-text text-sm">Credits modal</p>
              <p className="text-xs text-text-muted mt-1">New copy + 5 collapsible sections with smart display logic (relevant sections open based on user behavior). Shows credit cost per action.</p>
            </div>
            <div className="bg-card rounded-lg p-3">
              <p className="font-medium text-text text-sm">Media paywalls</p>
              <p className="text-xs text-text-muted mt-1">Shifted from lock icons (paywalled) to creditized (no lock, costs credits). Users see the content and choose to spend credits.</p>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="results" label="Results" title="Activation up everywhere, monetization split by region">
          <div className="bg-card rounded-lg p-3 mb-3">
            <p className="font-medium text-text text-sm">Key finding</p>
            <p className="text-xs text-text-muted mt-1">Monetization shifted from &ldquo;aspirational selling&rdquo; (at registration) to &ldquo;after-usage selling&rdquo; (upgrades after trying the product and hitting credit limits). Lower friction consistently increased activation, but LTV impact varied by region.</p>
          </div>
          <div className="bg-card rounded-lg p-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-text-muted border-b border-border text-xs">
                  <th className="pb-2 pr-4">Region</th>
                  <th className="pb-2 pr-4">Activation</th>
                  <th className="pb-2 pr-4">Pricing page</th>
                  <th className="pb-2 pr-4">Bookings</th>
                  <th className="pb-2">LTV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
                <tr>
                  <td className="py-2 pr-4 font-medium text-text">EUR</td>
                  <td className="py-2 pr-4 text-sage">+2-3%</td>
                  <td className="py-2 pr-4 text-accent">-4-5%</td>
                  <td className="py-2 pr-4 text-accent">-10-12%</td>
                  <td className="py-2 text-accent font-medium">Negative</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-text">RoW</td>
                  <td className="py-2 pr-4 text-sage">+3-5%</td>
                  <td className="py-2 pr-4 text-sage">+21%</td>
                  <td className="py-2 pr-4 text-sage">+3-5%</td>
                  <td className="py-2 text-sage font-medium">Positive</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-text">US/High</td>
                  <td className="py-2 pr-4 text-sage">+1-2%</td>
                  <td className="py-2 pr-4 text-accent">-11-15%</td>
                  <td className="py-2 pr-4 text-text-muted">+1-2%</td>
                  <td className="py-2 text-text-muted font-medium">Mixed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollSection>

        <ScrollSection id="decision" label="Decision & Learnings" title="Regional rollout, core market iteration">
          <div className="bg-sage/10 rounded-lg p-4 border border-sage/20">
            <p className="font-medium text-sage text-sm">Decision: Rollout in Rest of World. Iterate in Core (EU/US) markets.</p>
          </div>
          <div className="mt-4 space-y-2">
            <p className="font-medium text-text text-sm">Key learnings:</p>
            <ul className="space-y-1.5">
              <li><strong className="text-text">Lower friction always helps activation.</strong> Across every region, reducing monetary friction improved early engagement.</li>
              <li><strong className="text-text">Monetization is price-sensitive by region.</strong> In price-sensitive markets (RoW), credits drove both activation and revenue. In premium markets (EUR, US), the shift from aspirational to usage-based selling needs more nuance.</li>
              <li><strong className="text-text">Core market iteration:</strong> Rethinking how to present value and reduce monetary friction more subtly without undermining the aspirational appeal that drives conversion in these segments.</li>
            </ul>
          </div>
        </ScrollSection>
      </>
    ),
  },
};
