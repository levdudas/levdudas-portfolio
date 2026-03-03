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
      "How we redesigned Prezi\u2019s first-time user experience to match the new AI-powered product reality and drove early activation.",
    sections: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "hypothesis", label: "Hypothesis" },
      { id: "tested", label: "What We Tested" },
      { id: "metrics", label: "Metrics" },
      { id: "results", label: "Results" },
      { id: "decision", label: "Decision" },
    ],
    content: (
      <>
        <ScrollSection id="context" label="01 \u2014 Context" title="A new product, the same front door">
          <p>
            Prezi had just enabled AI-assisted generation across the product. Marketing was running
            heavy campaigns around the new capability: &ldquo;Present Tomorrow with Prezi AI.&rdquo;
          </p>
          <p>
            Users were arriving with new expectations shaped by this messaging &mdash; they expected
            an AI-first creation experience. But the first-time user experience (FTUE) hadn&apos;t
            changed to reflect this.
          </p>
        </ScrollSection>

        <ScrollSection id="problem" label="02 \u2014 The Problem" title="FTUE didn&rsquo;t match the new reality">
          <p>
            We needed to align the welcome flow to the new AI use case and the marketing-driven
            change in user expectations. The existing flow was built for a pre-AI product.
          </p>
        </ScrollSection>

        <ScrollSection id="hypothesis" label="03 \u2014 Hypothesis" title="Two bets on what would move the needle">
          <p>
            <strong className="text-text">Hypothesis A:</strong> Users are more interested in generating with AI. If we
            make this path more prominent, users will be more successful.
          </p>
          <p>
            <strong className="text-text">Hypothesis B:</strong> If we reinforce the user&apos;s sense of urgency, they
            will be more committed to creating (increasing psychological investment).
          </p>
        </ScrollSection>

        <ScrollSection id="tested" label="04 \u2014 What We Tested" title="Four variants of the welcome flow">
          <p>
            We designed four distinct welcome flow variants, each emphasizing a different entry
            point into the product:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            {[
              { name: "Product Selector", desc: "Classic approach \u2014 let users choose their product type" },
              { name: "Urgency Picker", desc: "When do you need this? Creates time pressure and commitment" },
              { name: "Template First", desc: "Start from a template \u2014 reduce the blank canvas problem" },
              { name: "Prompt First", desc: "Start with AI generation \u2014 type what you want to create" },
            ].map((v) => (
              <div key={v.name} className="bg-card rounded-xl p-4">
                <p className="font-medium text-sm text-text">{v.name}</p>
                <p className="text-xs text-text-muted mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
          <Image
            src="/images/cases/cases-deep dive 1.png"
            alt="Welcome flow variants showing product selector, urgency picker, template first, and prompt first designs"
            width={800}
            height={500}
            className="rounded-2xl border border-border mt-4"
          />
          <p className="text-xs text-text-muted mt-2 italic">
            The four welcome flow variants tested against each other.
          </p>
        </ScrollSection>

        <ScrollSection id="metrics" label="05 \u2014 Metrics" title="What we measured">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-sm text-text mb-2">Target metrics</p>
              <ul className="space-y-1 text-sm">
                <li>Early engagement</li>
                <li>Activation</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-sm text-text mb-2">Counter metrics</p>
              <ul className="space-y-1 text-sm">
                <li>Trial starts</li>
                <li>Subscriptions</li>
                <li>Bookings</li>
                <li>Chargebacks</li>
                <li>Retention</li>
              </ul>
            </div>
          </div>
          <p className="mt-4">
            Target audience: all new users. We wanted to improve early activation without
            cannibalizing downstream conversion.
          </p>
        </ScrollSection>

        <ScrollSection id="results" label="06 \u2014 Results" title="A clear winner emerged">
          <p>
            Variant D (Prompt First) significantly outperformed all other variants on early
            engagement and activation. Combined with the Urgency Picker as a pre-step, it
            created the strongest path to first value.
          </p>
          <p>
            The Urgency Picker proved more relevant than the Product Selector &mdash; it oriented
            users into the AI-powered product better and reinforced their commitment to creating.
          </p>
        </ScrollSection>

        <ScrollSection id="decision" label="07 \u2014 Decision & Learnings" title="Roll out: Urgency Picker + Prompt First">
          <div className="bg-sage/10 rounded-xl p-5 border border-sage/20">
            <p className="font-medium text-sage mb-2">Decision</p>
            <p>Roll out Variant D: Urgency Picker + Prompt First</p>
          </div>
          <div className="mt-6 space-y-3">
            <p className="font-medium text-text">Key learnings:</p>
            <p>
              <strong className="text-text">Prompt-first reduced FTUE complexity.</strong> Not bothering users with template
              selection helped them get started faster, especially in the AI-enabled product.
            </p>
            <p>
              <strong className="text-text">Urgency Picker &gt; Product Selector.</strong> Orienting users by when they need
              their presentation (rather than what type) was more relevant and reinforced commitment.
            </p>
          </div>
        </ScrollSection>
      </>
    ),
  },

  "ai-credits-monetization": {
    title: "Finding the Right Monetization Model for AI Features",
    subtitle:
      "How we shifted from aspirational selling to usage-based monetization with AI credits, and what we learned about regional price sensitivity.",
    sections: [
      { id: "context", label: "Context" },
      { id: "problem", label: "Problem" },
      { id: "hypothesis", label: "Hypothesis" },
      { id: "impact", label: "Expected Impact" },
      { id: "built", label: "What We Built" },
      { id: "results", label: "Results" },
      { id: "decision", label: "Decision" },
    ],
    content: (
      <>
        <ScrollSection id="context" label="01 \u2014 Context" title="AI features were everywhere, but not monetized">
          <p>
            We arrived at a point where Prezi had a range of AI-assisted features. We also wanted to
            ease monetization friction early in the experience rather than relying solely on
            subscription gates.
          </p>
        </ScrollSection>

        <ScrollSection id="problem" label="02 \u2014 The Problem" title="Monetise, but don&rsquo;t gate-keep">
          <p>
            Find the right place for AI features in our packaging. The challenge: monetise the value
            AI provides, but also don&apos;t gate-keep &mdash; allow free users to try the features
            and experience the value before asking them to pay.
          </p>
        </ScrollSection>

        <ScrollSection id="hypothesis" label="03 \u2014 Hypothesis" title="Credits as a soft paywall">
          <p>
            Creditizing AI-related actions that users perceive as high-value, using them as a soft
            paywall. We can still show users what Prezi can do, but after a while they have to pay
            to continue.
          </p>
          <p>
            We expected upgrade rates to increase along with activation as users realise the value
            through usage rather than at the point of initial aspiration.
          </p>
        </ScrollSection>

        <ScrollSection id="impact" label="04 \u2014 Expected Impact" title="The trade-off we were navigating">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl p-4">
              <p className="font-medium text-sm text-text mb-2">Scenario A: Lower friction</p>
              <p className="text-sm">Reduced monetary friction on pricing page</p>
              <p className="text-sm text-sage mt-1">+5% activation</p>
              <p className="text-sm text-accent mt-0.5">-5% bookings</p>
            </div>
            <div className="bg-card rounded-xl p-4">
              <p className="font-medium text-sm text-text mb-2">Scenario B: Usage limits</p>
              <p className="text-sm">Increased monetization with credit limits</p>
              <p className="text-sm text-sage mt-1">+5% in bookings</p>
              <p className="text-sm text-text-muted mt-0.5">Flat activation</p>
            </div>
          </div>
          <p className="mt-4">
            Overall expected: +5% activation, flat in bookings &mdash; a net positive from the
            combined approach.
          </p>
        </ScrollSection>

        <ScrollSection id="built" label="05 \u2014 What We Built" title="A comprehensive credits system">
          <p>
            The variant introduced a full credits economy across multiple product surfaces:
          </p>
          <ul className="list-none space-y-2 my-4">
            <li><strong className="text-text">Credits comprehensive:</strong> 500 credits on Basic plan with creditized document import, image generation, background removal, and advanced AI features</li>
            <li><strong className="text-text">New pricing page:</strong> Redesigned to surface free-tier options alongside premium, with a focus on showing value rather than listing features</li>
            <li><strong className="text-text">Dashboard credit counter:</strong> Added a visible credit counter and &ldquo;Get unlimited AI&rdquo; CTA</li>
            <li><strong className="text-text">Credits modal:</strong> Collapsible sections with smart display logic (showing relevant sections based on user behavior)</li>
            <li><strong className="text-text">Media paywalls:</strong> Shifted from lock icons (paywalled) to creditized (no lock, just costs credits)</li>
          </ul>
          <div className="space-y-4 mt-6">
            <Image
              src="/images/cases/cases-deep dive 2.1.png"
              alt="AI credits experiment design showing control versus variant approaches"
              width={800}
              height={500}
              className="rounded-2xl border border-border"
            />
            <Image
              src="/images/cases/cases-deep dive2.2.png"
              alt="Credits system UI showing pricing page, dashboard counter, and credits modal"
              width={800}
              height={500}
              className="rounded-2xl border border-border"
            />
          </div>
        </ScrollSection>

        <ScrollSection id="results" label="06 \u2014 Results" title="A fundamental shift in how we sell">
          <p>
            The most significant finding: monetization shifted from &ldquo;aspirational selling&rdquo;
            at registration to &ldquo;after-usage selling&rdquo; &mdash; upgrades happening after users
            tried the product and hit their credit limits.
          </p>
          <p>
            Lower friction consistently increased activation across all regions. But the monetization
            impact (LTV) varied significantly by region:
          </p>
          <div className="bg-card rounded-xl p-5 mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-text-muted border-b border-border">
                  <th className="pb-2 pr-4">Region</th>
                  <th className="pb-2 pr-4">Activation</th>
                  <th className="pb-2 pr-4">Pricing page</th>
                  <th className="pb-2 pr-4">Bookings</th>
                  <th className="pb-2">LTV Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-medium text-text">EUR</td>
                  <td className="py-2 pr-4 text-sage">+2-3%</td>
                  <td className="py-2 pr-4">-4-5%</td>
                  <td className="py-2 pr-4">-10-12%</td>
                  <td className="py-2 text-accent">Negative</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-text">RoW</td>
                  <td className="py-2 pr-4 text-sage">+3-5%</td>
                  <td className="py-2 pr-4">+21%</td>
                  <td className="py-2 pr-4 text-sage">+3-5%</td>
                  <td className="py-2 text-sage">Positive</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-text">US/High</td>
                  <td className="py-2 pr-4 text-sage">+1-2%</td>
                  <td className="py-2 pr-4">-11-15%</td>
                  <td className="py-2 pr-4">+1-2%</td>
                  <td className="py-2 text-text-muted">Mixed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Image
            src="/images/cases/cases-deep dive 2.3.png"
            alt="Detailed results showing regional variations in monetization impact"
            width={800}
            height={500}
            className="rounded-2xl border border-border mt-6"
          />
        </ScrollSection>

        <ScrollSection id="decision" label="07 \u2014 Decision & Learnings" title="Regional rollout, core market iteration">
          <div className="bg-sage/10 rounded-xl p-5 border border-sage/20 mb-6">
            <p className="font-medium text-sage mb-2">Decision</p>
            <p>Rollout in Rest of World. Iterate in Core (EU/US) markets.</p>
          </div>
          <div className="space-y-3">
            <p className="font-medium text-text">Key learnings:</p>
            <p>
              <strong className="text-text">Lower friction always helps activation.</strong> Across every region, reducing
              monetary friction improved early engagement and activation rates.
            </p>
            <p>
              <strong className="text-text">But monetization impact is price-sensitive by region.</strong> In markets where
              users are more price-sensitive (RoW), the credits model drove both activation and revenue.
              In premium markets (EUR, US), the shift from aspirational to usage-based selling needs
              more nuance.
            </p>
            <p>
              <strong className="text-text">Iteration for Core markets:</strong> Rethinking how to present the value
              proposition and reduce monetary friction more subtly &mdash; without undermining the
              aspirational appeal that drives conversion in these segments.
            </p>
          </div>
        </ScrollSection>
      </>
    ),
  },
};
