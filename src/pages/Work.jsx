import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    src: '/images/hotel-dps-inn.png',
    alt: 'Hotel DPS Inn luxury hotel website with booking engine designed by NextGenDevs Prayagraj',
    title: 'Hotel DPS Inn',
    tag: 'Website Development',
    category: 'web',
    href: 'https://royal-retreat-pro.lovable.app/',
    description:
      'A full-featured luxury hotel website built for Hotel DPS Inn, Prayagraj. Includes a real-time room booking engine, gallery, and SEO-optimized service pages. Achieved top 3 Google rankings for local hotel searches within 60 days of launch.',
    results: ['Top 3 Google ranking in 60 days', '40% increase in direct bookings', 'Mobile bounce rate reduced by 55%'],
    className: 'aspect-video',
  },
  {
    src: '/images/blunch-and-dine.png',
    alt: 'Blunch & Dine restaurant branding identity and online menu by NextGenDevs',
    title: 'Blunch & Dine',
    tag: 'Branding & Design',
    category: 'brand',
    href: 'https://blunch-dine.netlify.app/',
    description:
      'Complete brand identity for Blunch & Dine, a gourmet café in Prayagraj. Deliverables included logo suite, color system, typography, social media templates, and an interactive digital menu system.',
    results: ['Full brand identity delivered in 10 days', 'Instagram following grew 300% in 3 months', 'Menu system reduced ordering friction'],
    className: 'aspect-[4/3]',
  },
  {
    src: '/images/smartscheduler.png',
    alt: 'AI-integrated appointment scheduler web application UI/UX designed by NextGenDevs',
    title: 'SmartScheduler',
    tag: 'UI/UX Design',
    category: 'web',
    href: 'https://auto-meet-ai.vercel.app/',
    description:
      "A clean, AI-powered appointment scheduling application designed for clinics and wellness businesses. Features intelligent time-slot suggestions, patient intake forms, and a provider dashboard. The UI was built in Figma and handed off to the client's dev team.",
    results: ['Designed end-to-end in 3 weeks', 'Client saved 15 hrs/week on scheduling', 'Reduced no-shows by 30% via automated reminders'],
    className: 'aspect-video',
  },
  {
    src: '/images/skysolar.png',
    alt: 'SkySolar clean energy solar panel company marketing website by NextGenDevs',
    title: 'SkySolar',
    tag: 'Marketing Website',
    category: 'web',
    href: 'https://skysolar-two.vercel.app/',
    description:
      'A high-conversion landing page for SkySolar, a residential solar installation company. The page included an energy savings calculator, WhatsApp lead capture, and trust-building social proof sections.',
    results: ['12 qualified leads in first month', 'Avg. session time 3.5 minutes', 'Cost per lead: ₹180 via Meta Ads'],
    className: 'aspect-video',
  },
  {
    src: '/images/insightpro-ai.png',
    alt: 'InsightPro AI business intelligence B2B SaaS dashboard by NextGenDevs',
    title: 'InsightPro AI',
    tag: 'B2B SaaS',
    category: 'saas',
    description:
      'A full B2B SaaS analytics dashboard for InsightPro AI, enabling teams to visualize key business metrics and generate AI-powered insights. Built with a custom storefront, Razorpay subscription integration, and a white-label admin panel.',
    results: ['Launched in 6 weeks from brief', '3 enterprise clients onboarded at launch', 'MRR: ₹2.4L within 90 days of launch'],
    className: 'aspect-video',
  },
]

export default function Work() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Work & Portfolio | NextGenDevs — Case Studies from Prayagraj</title>
        <meta
          name="description"
          content="Browse NextGenDevs' portfolio of case studies: Hotel DPS Inn, Blunch & Dine, SkySolar, SmartScheduler, and InsightPro AI. Real results for real businesses."
        />
        <meta property="og:title" content="Work & Portfolio | NextGenDevs" />
        <meta property="og:description" content="Case studies and portfolio from Prayagraj's leading digital agency." />
        <meta property="og:image" content="/images/hotel-dps-inn.png" />
        <link rel="canonical" href="https://nextgendevs.in/work" />
      </Helmet>

      {/* Hero */}
      <section className="bg-plum py-20 px-5">
        <div className="page-container text-center reveal">
          <span className="text-ochre text-xs font-bold uppercase tracking-widest">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-surface mt-3">Work That Speaks for Itself</h1>
          <p className="text-surface/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Real projects, real results. Every case study below is a business that came to us with a problem and left with a competitive advantage.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Previews */}
      <section className="page-container py-16 reveal">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <ProjectCard {...projects[0]} className="md:col-span-3 aspect-video" />
          <ProjectCard {...projects[1]} className="md:col-span-2 aspect-[4/3]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.slice(2).map((p) => (
            <ProjectCard key={p.title} {...p} className="aspect-video" />
          ))}
        </div>
      </section>

      {/* Case Studies Detail */}
      <section className="page-container py-8 pb-20">
        <h2 className="text-2xl font-bold text-plum border-l-4 border-ochre pl-4 mb-12 reveal">
          Full Case Studies
        </h2>

        {projects.map((p, idx) => (
          <div
            key={p.title}
            className={`reveal mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
          >
            {/* Image */}
            <div className="project-card relative rounded-2xl overflow-hidden shadow-lg aspect-video">
              <div className="project-card-overlay" />
              <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
              <div className="project-card-info">
                <p className="font-bold text-lg text-surface">{p.title}</p>
                <p className="text-ochre text-xs uppercase tracking-widest mt-1">{p.tag}</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-ochre text-xs font-bold uppercase tracking-widest">{p.tag}</span>
              <h3 className="text-2xl font-extrabold text-plum mt-2 mb-4">{p.title}</h3>
              <p className="text-ink-light leading-relaxed text-sm mb-6">{p.description}</p>

              <div className="bg-surface rounded-xl p-5 border border-[#d3c4af]/30">
                <div className="text-xs font-bold text-plum uppercase tracking-widest mb-3">Results</div>
                <ul className="flex flex-col gap-2">
                  {p.results.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="text-ochre font-bold mt-0.5">→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-plum uppercase tracking-widest"
                >
                  View Live Site <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="reveal bg-plum py-16">
        <div className="page-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-surface mb-4">Your Business Could Be Next</h2>
          <p className="text-surface/70 mb-8 max-w-lg mx-auto">We take on a limited number of new clients each month. Let's see if we're the right fit.</p>
          <Link to="/contact" className="btn-ochre py-4 px-10 text-base">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
