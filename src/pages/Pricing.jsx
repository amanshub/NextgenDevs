import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, Minus, MessageCircle, ArrowRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import PriceCard from '../components/PriceCard'
import { EMAIL, MAILTO_URL } from '../data/contact'

const websitePlans = [
  {
    tier: 'Essential Presence',
    price: '₹24,999',
    subtitle: 'Perfect for new businesses',
    features: [
      { text: '2 Premium Pages (Home + Contact)' },
      { text: 'Mobile-First Responsive Design' },
      { text: 'Basic On-Page SEO Setup' },
      { text: 'Contact Form Integration' },
      { text: 'Google Analytics Setup' },
      { text: 'Email Support Button' },
      { text: 'Domain & Hosting Guidance', disabled: true },
      { text: '1 Month Support', disabled: true },
    ],
    ctaLabel: 'Get Essential',
  },
  {
    tier: 'Business Growth',
    price: '₹45,999',
    subtitle: 'Built for scaling teams',
    features: [
      { text: '4 Advanced Pages' },
      { text: 'Everything in Essential' },
      { text: 'Speed & Core Web Vitals Optimization' },
      { text: '1 Month Post-Launch Support' },
      { text: 'Professional Email Setup' },
      { text: 'Custom Animations & Micro-Interactions' },
      { text: 'Blog / CMS Setup' },
      { text: 'Social Media Integration' },
    ],
    ctaLabel: 'Get Growth',
    featured: true,
    badge: 'Most Popular',
  },
  {
    tier: 'Market Leader',
    price: '₹69,999',
    subtitle: 'Custom Enterprise Solution',
    features: [
      { text: '6 Bespoke Custom Pages' },
      { text: 'Everything in Growth' },
      { text: 'E-commerce or Booking Engine' },
      { text: 'Premium UI & GSAP Animations' },
      { text: '3 Months Priority Support' },
      { text: 'Advanced SEO & Schema Markup' },
      { text: 'Custom Admin Dashboard' },
      { text: 'Performance Monitoring Setup' },
    ],
    ctaLabel: 'Inquire Now',
  },
]

const socialPlans = [
  {
    tier: 'Essential Social',
    price: '₹14,999',
    period: '/mo',
    features: [
      { text: '12 Custom Posts / Month' },
      { text: 'Basic Community Management' },
      { text: '4 Reels Included' },
      { text: 'Monthly Growth Report' },
      { text: 'Hashtag Research & Scheduling' },
      { text: 'Targeted Ad Management', disabled: true },
      { text: 'Lead Generation Guarantee', disabled: true },
    ],
    ctaLabel: 'Start Essential',
  },
  {
    tier: 'Advanced Social',
    price: '₹19,999',
    period: '/mo',
    features: [
      { text: '20 Custom Posts / Month' },
      { text: 'Full Community Management' },
      { text: '8 Reels Included' },
      { text: 'Weekly + Monthly Reports' },
      { text: 'Hashtag Research & Scheduling' },
      { text: 'Targeted Meta Ad Management' },
      { text: '5+ Guaranteed Leads in Month 1' },
    ],
    ctaLabel: 'Start Advanced',
    featured: true,
    badge: 'Best Results',
  },
]

const comparisonRows = [
  { feature: 'Pages', essential: '2', growth: '4', leader: '6' },
  { feature: 'Mobile-First Design', essential: '✓', growth: '✓', leader: '✓' },
  { feature: 'SEO Setup', essential: 'Basic', growth: 'Advanced', leader: 'Full Schema' },
  { feature: 'CMS / Blog', essential: '—', growth: '✓', leader: '✓' },
  { feature: 'E-commerce / Booking', essential: '—', growth: '—', leader: '✓' },
  { feature: 'Animations', essential: 'Basic', growth: 'Custom', leader: 'GSAP Premium' },
  { feature: 'Post-Launch Support', essential: '—', growth: '1 Month', leader: '3 Months' },
  { feature: 'Email Setup', essential: '—', growth: '✓', leader: '✓' },
  { feature: 'Admin Dashboard', essential: '—', growth: '—', leader: '✓' },
]

const faqs = [
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can start with Essential and upgrade to Growth or Market Leader at any time. We'll credit what you've already paid.",
  },
  {
    q: "What if I need more pages than the plan includes?",
    a: "Additional pages can be added at ₹3,999–₹6,999 per page depending on complexity. We'll quote you upfront.",
  },
  {
    q: "Do social media plans include ad spend?",
    a: "No — ad spend goes directly to Meta and is not included. We manage the ads for you; you control the budget. We recommend a minimum of ₹5,000/month in ad spend for the guarantee to apply.",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, bank transfer, and all major cards via Razorpay. We require 50% upfront and 50% on delivery.",
  },
]

export default function Pricing() {
  useScrollReveal()

  const openEmail = (subject) => {
    const url = `${MAILTO_URL}?subject=${encodeURIComponent(subject)}`
    window.location.href = url
  }

  return (
    <>
      <Helmet>
        <title>Pricing | NextGenDevs — Transparent Website & Social Media Plans</title>
        <meta
          name="description"
          content="View all NextGenDevs pricing plans. Website packages from ₹24,999. Social media management from ₹14,999/month. Bundle deals available. No hidden fees."
        />
        <meta property="og:title" content="Pricing | NextGenDevs" />
        <meta property="og:description" content="Transparent pricing for website packages and social media plans. Bundles available." />
        <meta property="og:image" content="/images/hero-illustration.png" />
        <link rel="canonical" href="https://nextgendevs.in/pricing" />
      </Helmet>

      {/* Hero */}
      <section className="bg-plum py-20 px-5 reveal">
        <div className="page-container text-center">
          <span className="text-ochre text-xs font-bold uppercase tracking-widest">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-surface mt-3">Simple, Transparent Pricing</h1>
          <p className="text-surface/70 mt-4 max-w-xl mx-auto leading-relaxed">
            No hidden fees. No lock-in contracts. Just results-focused packages designed for Indian businesses.
          </p>
        </div>
      </section>

      {/* Website Plans */}
      <section className="reveal page-container py-16">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-plum">Website Packages</h2>
          <p className="text-ink-light mt-2 text-sm">One-time investment. Lifetime returns.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {websitePlans.map((p) => (
            <PriceCard
              key={p.tier}
              {...p}
              onCta={() => openEmail(`Project Inquiry: ${p.tier} plan at ${p.price}`)}
            />
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="reveal page-container pb-16">
        <h2 className="text-xl font-bold text-plum text-center mb-8">Feature Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-[#d3c4af]/30 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-plum">
                <th className="text-left py-4 px-6 text-surface/70 font-semibold w-1/4">Feature</th>
                <th className="text-center py-4 px-4 text-surface font-bold">Essential<br /><span className="text-ochre font-extrabold">₹24,999</span></th>
                <th className="text-center py-4 px-4 text-ochre font-bold border-x border-ochre/30">Growth<br /><span className="text-ochre font-extrabold">₹45,999</span></th>
                <th className="text-center py-4 px-4 text-surface font-bold">Market Leader<br /><span className="text-ochre font-extrabold">₹69,999</span></th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-surface' : 'bg-background'}>
                  <td className="py-3 px-6 font-medium text-plum">{row.feature}</td>
                  <td className="py-3 px-4 text-center text-ink-light">{row.essential}</td>
                  <td className="py-3 px-4 text-center text-ink font-semibold border-x border-[#d3c4af]/20">{row.growth}</td>
                  <td className="py-3 px-4 text-center text-ink-light">{row.leader}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Social Media Plans */}
      <section className="reveal page-container py-8 pb-16">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-plum">Social Media Management</h2>
          <p className="text-ink-light mt-2 text-sm">Monthly retainer. Cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {socialPlans.map((p) => (
            <PriceCard
              key={p.tier}
              {...p}
              onCta={() => openEmail(`Project Inquiry: ${p.tier} social media plan at ${p.price}/mo`)}
            />
          ))}
        </div>
      </section>

      {/* Bundle Deals */}
      <section className="reveal page-container py-8 pb-16">
        <div className="text-center mb-10">
          <span className="text-ochre text-xs font-bold uppercase tracking-widest">Save More</span>
          <h2 className="text-2xl font-bold text-plum mt-2">Bundle Deals</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-plum p-8 rounded-2xl text-surface flex flex-col gap-4">
            <div className="text-xs font-bold text-ochre uppercase tracking-widest">Growth + Essential Social</div>
            <h3 className="text-xl font-bold">Business Kickstart Bundle</h3>
            <div className="flex items-end gap-3">
              <div className="text-4xl font-extrabold text-ochre">₹54,999</div>
              <div className="text-surface/50 text-sm mb-1 line-through">₹60,998</div>
            </div>
            <span className="self-start bg-ochre/20 text-ochre text-xs font-bold px-3 py-1 rounded-full border border-ochre/40">
              🎉 You save ₹5,999
            </span>
            <p className="text-surface/70 text-sm">Full website + 1 month social presence. Everything to launch your brand online.</p>
            <button
              onClick={() => openEmail("Project Inquiry: Business Kickstart Bundle at ₹54,999")}
              className="mt-auto border border-surface/30 text-surface font-bold py-3 px-6 rounded-xl hover:bg-ochre hover:text-plum hover:border-ochre transition-all"
            >
              Get This Bundle
            </button>
          </div>
          <div className="bg-plum p-8 rounded-2xl text-surface flex flex-col gap-4 border-2 border-ochre relative">
            <span className="absolute top-4 right-4 bg-ochre text-plum text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">Best Value</span>
            <div className="text-xs font-bold text-ochre uppercase tracking-widest">Market Leader + Advanced Social</div>
            <h3 className="text-xl font-bold">Dominance Bundle</h3>
            <div className="flex items-end gap-3">
              <div className="text-4xl font-extrabold text-ochre">₹75,999</div>
              <div className="text-surface/50 text-sm mb-1 line-through">₹89,998</div>
            </div>
            <span className="self-start bg-ochre/20 text-ochre text-xs font-bold px-3 py-1 rounded-full border border-ochre/40">
              🎉 You save ₹13,999
            </span>
            <p className="text-surface/70 text-sm">Full bespoke branding, enterprise site & expert marketing. The complete package.</p>
            <button
              onClick={() => openEmail("Project Inquiry: Dominance Bundle at ₹75,999")}
              className="mt-auto bg-ochre text-plum font-bold py-3 px-6 rounded-xl hover:brightness-110 transition-all shadow-lg"
            >
              Get This Bundle
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal page-container py-8 pb-20">
        <h2 className="text-2xl font-bold text-plum text-center mb-10">Pricing FAQs</h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="bg-surface p-5 rounded-2xl border border-[#d3c4af]/30 cursor-pointer group">
              <summary className="font-bold text-plum flex justify-between items-center text-sm">
                {q}
                <span className="faq-icon text-plum/60 shrink-0 ml-3 text-lg leading-none">↓</span>
              </summary>
              <p className="mt-4 text-ink-light text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal bg-ochre py-14">
        <div className="page-container text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-plum mb-3">Still Not Sure Which Plan?</h2>
          <p className="text-plum/75 mb-8 max-w-md mx-auto">Book a free 15-minute call and we'll recommend the right package for your business and budget.</p>
          <a
            href={`${MAILTO_URL}?subject=${encodeURIComponent("Project Inquiry: Free Consultation")}`}
            className="bg-plum text-surface font-bold py-4 px-12 rounded-xl text-base hover:scale-105 active:scale-95 transition-all shadow-lg inline-flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Book Free Consultation
          </a>
        </div>
      </section>
    </>
  )
}
