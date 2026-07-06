import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  Globe, Megaphone, Clapperboard, Store,
  CheckCircle, ArrowRight, Clock, Zap, Shield, HeartHandshake
} from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    subtitle: 'Fast. Mobile-First. Built to Convert.',
    description:
      'We build professional websites that do more than look good — they rank on Google, load in under 2 seconds, and turn visitors into paying customers. Every site we build is mobile-first, SEO-optimized, and built with a clear conversion goal in mind.',
    includes: [
      'Custom responsive design (no templates)',
      'On-page SEO & meta tag setup',
      'Core Web Vitals optimization',
      'Contact forms & lead capture',
      'Google Analytics integration',
      'SSL & security configuration',
      '30-day post-launch support',
    ],
    process: [
      { step: '01', title: 'Discovery Call', desc: 'We learn your business, goals, and target audience.' },
      { step: '02', title: 'Design Mockup', desc: 'We present a brand-aligned design for your approval.' },
      { step: '03', title: 'Development', desc: 'We build, test, and optimize the full site.' },
      { step: '04', title: 'Launch & Handover', desc: 'We deploy, train you on the CMS, and hand over the keys.' },
    ],
    color: 'bg-plum',
  },
  {
    icon: Megaphone,
    title: 'Brand Promotion & Meta Ads',
    subtitle: 'Put Your Business in Front of the Right People.',
    description:
      'Meta (Instagram + Facebook) Ads are the most cost-effective way to reach local customers in Prayagraj and beyond. We create, manage, and optimize ad campaigns that consistently deliver qualified leads to your inbox.',
    includes: [
      'Full Meta Ads account setup & audit',
      'Audience research & targeting strategy',
      'Ad creative design (static + video)',
      'A/B testing & continuous optimization',
      'Monthly performance report',
      '5+ Guaranteed leads in Month 1',
      'Retargeting campaigns for warm audiences',
    ],
    process: [
      { step: '01', title: 'Audience Research', desc: 'We identify your ideal customer persona and target demographics.' },
      { step: '02', title: 'Creative Production', desc: 'Eye-catching ad creatives designed to stop the scroll.' },
      { step: '03', title: 'Campaign Launch', desc: 'We launch with split-test variants to find the best performer.' },
      { step: '04', title: 'Optimize & Report', desc: 'Weekly optimization + monthly reports delivered to you.' },
    ],
    color: 'bg-ochre',
  },
  {
    icon: Clapperboard,
    title: 'Content Creation & Instagram Management',
    subtitle: 'Consistent Content That Builds Real Fans.',
    description:
      "Building an Instagram presence takes consistent, high-quality content — and most business owners don't have time for that. We handle everything: strategy, design, captions, reels, and community management.",
    includes: [
      'Monthly content calendar',
      '12–20 custom-designed posts/month',
      '4–8 Reels (scripted + edited)',
      'Story sequences & highlights',
      'Caption copywriting',
      'Hashtag research & scheduling',
      'Community management (DMs & comments)',
    ],
    process: [
      { step: '01', title: 'Brand Audit', desc: 'We analyze your current profile and define your visual identity.' },
      { step: '02', title: 'Content Strategy', desc: 'We create a monthly content calendar aligned with your goals.' },
      { step: '03', title: 'Content Creation', desc: 'Posts, reels, stories — produced and scheduled every week.' },
      { step: '04', title: 'Engage & Grow', desc: 'We engage with your community to build genuine relationships.' },
    ],
    color: 'bg-plum',
  },
  {
    icon: Store,
    title: 'B2B SaaS Storefront',
    subtitle: 'Sell Your Software, Seamlessly.',
    description:
      'Have a software product or digital service to sell? We build custom storefronts that handle client onboarding, subscriptions, licensing, and payments — so you can focus on building great software.',
    includes: [
      'Custom product listing pages',
      'Payment gateway integration (Razorpay / Stripe)',
      'Client dashboard & license management',
      'Subscription & plan management',
      'Automated invoicing & receipts',
      'Admin panel for order management',
      'White-label options available',
    ],
    process: [
      { step: '01', title: 'Requirements', desc: 'We map your product catalog, pricing model, and user flows.' },
      { step: '02', title: 'Architecture', desc: 'We design the tech stack and database schema.' },
      { step: '03', title: 'Build & Test', desc: 'Full development with QA across devices and edge cases.' },
      { step: '04', title: 'Deploy & Scale', desc: 'Deployed to production with CI/CD and monitoring.' },
    ],
    color: 'bg-ochre',
  },
]

const whyUs = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Most websites delivered in 7–25 days. No endless delays.' },
  { icon: Shield, title: 'Results Guaranteed', desc: "5+ leads in Month 1 or we work for free. That's our promise." },
  { icon: Clock, title: 'Always Available', desc: 'Email support 7 days a week. No unanswered messages.' },
  { icon: HeartHandshake, title: 'No Contracts', desc: 'Month-to-month for all services. Stay because of results.' },
]

export default function Services() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Services | NextGenDevs — Web Dev, Social Media & Content Creation</title>
        <meta
          name="description"
          content="Explore NextGenDevs' full-service digital offerings: website development, Meta Ads & brand promotion, Instagram content creation, and B2B SaaS storefronts. Based in Prayagraj, India."
        />
        <meta property="og:title" content="Services | NextGenDevs" />
        <meta property="og:description" content="Websites, brand promotion, content creation, and B2B SaaS storefronts for local businesses." />
        <meta property="og:image" content="/images/hero-illustration.png" />
        <link rel="canonical" href="https://nextgendevs.in/services" />
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-plum py-20 px-5 md:px-16">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="text-ochre text-xs font-bold uppercase tracking-widest">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-surface mt-3 leading-tight">
            Growth-Driven Digital Services
          </h1>
          <p className="text-surface/70 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From your first website to full-scale digital domination — we offer every service a local business needs to grow online.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      <div className="page-container py-20">
        {services.map((svc, idx) => (
          <section key={svc.title} className="reveal mb-24 last:mb-0">
            {/* Service Header */}
            <div className="flex items-start gap-5 mb-8">
              <div className={`${svc.color} p-4 rounded-2xl shadow-md shrink-0`}>
                <svc.icon size={26} className={svc.color === 'bg-ochre' ? 'text-plum' : 'text-ochre'} strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-plum">{svc.title}</h2>
                <p className="text-ochre font-semibold mt-1">{svc.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
              {/* Left: Description + Includes */}
              <div>
                <p className="text-ink-light leading-relaxed mb-8">{svc.description}</p>

                <h3 className="font-bold text-plum mb-4 text-sm uppercase tracking-widest">What's Included</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {svc.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle size={15} className="text-plum shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Process Steps */}
              <div className="bg-surface rounded-2xl p-7 border border-[#d3c4af]/30">
                <h3 className="font-bold text-plum mb-5 text-sm uppercase tracking-widest">How It Works</h3>
                <div className="flex flex-col gap-5">
                  {svc.process.map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4">
                      <div className="text-2xl font-extrabold text-ochre/30 leading-none w-8 shrink-0">{step}</div>
                      <div>
                        <div className="font-bold text-plum text-sm">{title}</div>
                        <div className="text-ink-light text-sm mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {idx < services.length - 1 && (
              <div className="border-b border-[#d3c4af]/30 mt-24" />
            )}
          </section>
        ))}
      </div>

      {/* Why Us */}
      <section className="reveal bg-plum py-16">
        <div className="page-container">
          <h2 className="text-2xl font-bold text-surface text-center mb-10">Why Businesses Choose NextGenDevs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ochre/20 mb-4">
                  <Icon size={22} className="text-ochre" />
                </div>
                <div className="font-bold text-surface mb-2">{title}</div>
                <div className="text-surface/60 text-sm leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal page-container py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-plum mb-4">Ready to Get Started?</h2>
        <p className="text-ink-light mb-8 max-w-lg mx-auto">Tell us about your business and we'll put together the perfect digital strategy — no obligations.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-ochre py-4 px-10 text-base">
            Book a Free Call <ArrowRight size={18} />
          </Link>
          <Link to="/pricing" className="btn-outline-plum py-4 px-10 text-base">
            View Pricing
          </Link>
        </div>
      </section>
    </>
  )
}
