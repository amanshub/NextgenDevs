import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  Globe, Megaphone, Clapperboard, Store,
  ShieldCheck, Unlock, Sparkles, MessageCircle,
  ChevronDown, ArrowRight
} from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import PriceCard from '../components/PriceCard'
import ProjectCard from '../components/ProjectCard'
import { EMAIL, MAILTO_URL } from '../data/contact'

/* ── Local Business JSON-LD Schema ── */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'NextGenDevs',
  description:
    'NextGenDevs is a digital agency based in Prayagraj, India that builds websites, brand identity, and digital promotion for local businesses.',
  url: 'https://nextgendevs.in',
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Prayagraj',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  areaServed: { '@type': 'Country', name: 'India' },
  priceRange: '₹₹',
  openingHours: 'Mo-Sa 09:00-19:00',
  sameAs: [
    'https://www.instagram.com/nextgendevs',
    'https://www.youtube.com/@nextgendevs',
  ],
}

/* ── Testimonials data ── */
const testimonials = [
  {
    quote:
      "NextGenDevs completely transformed our Instagram presence. Their content strategy brought us consistent engagement and real followers who actually care about our brand. Professional, creative, and always on time.",
    name: 'Ashish Srivastava',
    role: 'Founder, Walks & Tales',
  },
  {
    quote:
      "The lead generation guarantee actually works! We booked 7 new tables in our first month through their promotion strategy. Unmatched service.",
    name: 'Rajiv Mehra',
    role: 'Owner, The Spice Route',
  },
  {
    quote:
      "Best investment for my retail shop. The branding is modern and the website is lightning fast on mobile. Their support is available 24/7.",
    name: 'Sneha Gupta',
    role: 'CEO, Urban Threads',
  },
]

/* ── Services data ── */
const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Fast, secure, and mobile-first websites designed to rank high on search engines and convert visitors into leads.',
  },
  {
    icon: Megaphone,
    title: 'Brand Promotion',
    description:
      'Strategic Meta Ads and local marketing campaigns that boost your brand visibility in your target community.',
  },
  {
    icon: Clapperboard,
    title: 'Content Creation',
    description:
      'High-quality visual content, reels, and copy that resonates with your audience and builds lasting trust.',
  },
  {
    icon: Store,
    title: 'B2B SaaS Store',
    description:
      'Custom storefront solutions for software services, allowing you to manage clients and payments seamlessly.',
  },
]

/* ── Website Pricing ── */
const websitePlans = [
  {
    tier: 'Essential Presence',
    price: '₹24,999',
    subtitle: 'Perfect for new businesses',
    features: [
      { text: '2 Premium Pages' },
      { text: 'Mobile-First Design' },
      { text: 'Basic SEO Setup' },
      { text: 'Contact Form' },
      { text: 'Domain & Hosting (Basic)', disabled: true },
    ],
    ctaLabel: 'Select Essential',
    featured: false,
  },
  {
    tier: 'Business Growth',
    price: '₹45,999',
    subtitle: 'Built for scaling teams',
    features: [
      { text: '4 Advanced Pages' },
      { text: 'Everything in Essential' },
      { text: 'Speed Optimization' },
      { text: '1 Month Support' },
      { text: 'Pro Email Setup' },
    ],
    ctaLabel: 'Get Started with Growth',
    featured: true,
    badge: 'Most Popular',
  },
  {
    tier: 'Market Leader',
    price: '₹69,999',
    subtitle: 'Custom Enterprise Solution',
    features: [
      { text: '6 Bespoke Pages' },
      { text: 'Everything in Growth' },
      { text: 'E-commerce / Booking Engine' },
      { text: 'Premium UI & Animations' },
      { text: 'Priority Support' },
    ],
    ctaLabel: 'Inquire Market Leader',
    featured: false,
  },
]

/* ── Social Pricing ── */
const socialPlans = [
  {
    tier: 'Essential',
    price: '₹14,999',
    period: '/mo',
    features: [
      { text: '12 Custom Posts / Month' },
      { text: 'Basic Community Management' },
      { text: '4 Reels Included' },
      { text: 'Monthly Growth Report' },
    ],
    ctaLabel: 'Start Essential',
  },
  {
    tier: 'Advanced',
    price: '₹19,999',
    period: '/mo',
    features: [
      { text: '20 Custom Posts / Month' },
      { text: 'Targeted Ad Management' },
      { text: '8 Reels Included' },
      { text: '5+ Guaranteed Leads Month 1' },
    ],
    ctaLabel: 'Start Advanced',
    featured: true,
    badge: 'Best Results',
  },
]

/* ── FAQ Items ── */
const faqs = [
  {
    q: 'What is the ₹7,999 plan?',
    a: 'A basic, live-working premium webpage for your business with maintained SEO to get you started immediately.',
    open: true,
  },
  {
    q: 'How fast can my website be ready?',
    a: 'For Essential Presence, we typically launch in 7–10 days. Growth and Market Leader plans range from 15–25 days depending on features.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. We work on a project or month-to-month basis. We believe our results should keep you staying, not a contract.',
  },
  {
    q: 'How do you guarantee 5+ leads?',
    a: "We combine high-conversion landing pages with targeted Meta Ads. If we don't deliver at least 5 inquiries, we work for free the following month.",
  },
  {
    q: 'Are you located in Prayagraj?',
    a: 'Yes! We are proud to be based in Prayagraj, supporting local entrepreneurs while serving clients across India and globally.',
  },
]

/* ── Portfolio Projects ── */
const projects = [
  {
    src: '/images/hotel-dps-inn.png',
    alt: 'Hotel DPS Inn luxury website and booking engine designed by NextGenDevs',
    title: 'Hotel DPS Inn',
    tag: 'Luxury Website & Booking Engine',
    href: 'https://royal-retreat-pro.lovable.app/',
    className: 'md:col-span-3 aspect-video',
  },
  {
    src: '/images/blunch-and-dine.png',
    alt: 'Blunch & Dine restaurant branding and menu system by NextGenDevs',
    title: 'Blunch & Dine',
    tag: 'Gourmet Branding & Menu System',
    href: 'https://blunch-dine.netlify.app/',
    className: 'md:col-span-2 aspect-[4/3]',
  },
  {
    src: '/images/smartscheduler.png',
    alt: 'AI-integrated appointment scheduler UI/UX design by NextGenDevs',
    title: 'SmartScheduler',
    tag: 'AI Appointment App · UI/UX',
    href: 'https://auto-meet-ai.vercel.app/',
    className: 'aspect-video',
  },
  {
    src: '/images/skysolar.png',
    alt: 'SkySolar clean energy marketing website by NextGenDevs',
    title: 'SkySolar',
    tag: 'Clean Energy Marketing',
    href: 'https://skysolar-two.vercel.app/',
    className: 'md:col-span-2 aspect-video',
  },
  {
    src: '/images/insightpro-ai.png',
    alt: 'InsightPro AI B2B SaaS analytics dashboard by NextGenDevs',
    title: 'InsightPro AI',
    tag: 'B2B SaaS Dashboard',
    className: 'md:col-span-2 aspect-video',
  },
]

/* ────────────────────────────────────── */
export default function Home() {
  useScrollReveal()

  const openEmail = (subject = '') => {
    const url = subject
      ? `${MAILTO_URL}?subject=${encodeURIComponent(subject)}`
      : MAILTO_URL
    window.location.href = url
  }

  return (
    <>
      <Helmet>
        <title>NextGenDevs | Digital Agency — Websites, Branding & Promotion in Prayagraj</title>
        <meta
          name="description"
          content="NextGenDevs is a digital agency in Prayagraj, India. We build conversion-focused websites, brand identity, and digital marketing that turn local businesses into market leaders."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NextGenDevs | Digital Agency in Prayagraj, India" />
        <meta
          property="og:description"
          content="Websites, brand identity, and digital promotion for local businesses. 5+ guaranteed leads or your next month is free."
        />
        <meta property="og:image" content="/images/hero-illustration.png" />
        <link rel="canonical" href="https://nextgendevs.in/" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="reveal page-container grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 py-20 md:py-24 items-center">
        <div className="flex flex-col gap-6">
          <span className="bg-ochre text-plum text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full self-start shadow-sm">
            WEB · BRAND · PROMOTION
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-plum leading-[1.08] tracking-tight">
            Websites and branding that turn strangers into your next customers.
          </h1>

          <p className="text-base md:text-lg text-ink-light leading-relaxed max-w-xl">
            We specialize in helping local businesses in Prayagraj and beyond scale their digital
            presence with conversion-focused design and strategic marketing.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mt-2">
            {[
              { icon: ShieldCheck, label: '5+ Genuine Leads Guarantee' },
              { icon: Unlock, label: 'No Contracts' },
              { icon: Sparkles, label: 'Exclusive Brand Offers' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-[#d3c4af]/40 shadow-sm hover:border-ochre transition-colors"
              >
                <Icon size={14} className="text-plum" strokeWidth={2} />
                <span className="text-[13px] font-semibold text-plum">{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/contact" className="btn-ochre text-base py-4 px-10">
              Start Your Project
            </Link>
            <button
              onClick={() => openEmail()}
              className="btn-outline-plum text-base py-4 px-10"
            >
              <MessageCircle size={18} />
              Email Us
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative group reveal reveal-delay-2">
          <div className="absolute inset-0 bg-ochre/10 rounded-full blur-3xl -z-10 group-hover:bg-ochre/20 transition-colors duration-700" />
          <img
            src="/images/hero-illustration.png"
            alt="Professional digital agency services illustration — websites, branding, social media"
            className="w-full h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </section>

      {/* ── GUARANTEE BANNER ── */}
      <section className="reveal page-container mb-16">
        <div className="bg-plum rounded-2xl py-12 px-8 text-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-ochre/10 rounded-full -ml-16 -mb-16 pointer-events-none" />
          <h2 className="text-xl md:text-2xl font-bold text-surface leading-relaxed relative z-10">
            5+ <span className="text-ochre">Genuine Leads Guaranteed</span> in Month 1 — or Your Next Month Is Free.
          </h2>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="reveal page-container py-12 border-y border-[#d3c4af]/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '8,000+', label: 'YouTube Views' },
            { value: '99.6%', label: 'Reach Rate' },
            { value: '15+', label: 'Websites Built' },
            { value: '10+', label: 'Insta Portfolios' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center group">
              <div className="text-ochre text-3xl md:text-4xl font-extrabold group-hover:scale-110 transition-transform duration-500">
                {value}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-plum mt-2 opacity-80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BIG OFFER BANNER ── */}
      <section className="reveal page-container my-16">
        <div className="bg-ochre rounded-2xl p-10 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl hover:shadow-2xl transition-shadow border border-plum/10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-plum">
              Own a Business Website for Just ₹7,999.
            </h2>
            <p className="text-plum/75 mt-2 text-base">Limited time launch offer for new local ventures.</p>
          </div>
          <button
            onClick={() => openEmail("Project Inquiry: ₹7,999 Website Offer")}
            className="bg-plum text-surface font-bold py-4 px-12 rounded-xl text-lg hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap"
          >
            Grab This Offer
          </button>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="reveal page-container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-plum text-center mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="reveal page-container py-16" id="services">
        <div className="text-center mb-12">
          <span className="text-ochre text-xs font-bold uppercase tracking-widest">Expertise</span>
          <h2 className="text-2xl md:text-3xl font-bold text-plum mt-2">Growth-Driven Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="btn-outline-plum text-sm py-3 px-8">
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── PORTFOLIO / WORK ── */}
      <section className="reveal page-container py-16" id="work">
        <h2 className="text-2xl md:text-3xl font-bold text-plum mb-10 border-l-4 border-ochre pl-4">
          Case Studies &amp; Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/work" className="btn-outline-plum text-sm py-3 px-8">
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── WEBSITE PRICING ── */}
      <section className="reveal page-container py-16" id="pricing">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-plum">Website Packages</h2>
          <p className="text-ink-light max-w-xl mx-auto mt-2 text-sm">
            Strategic digital assets built for conversion. Choose the foundation for your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {websitePlans.map((p) => (
            <PriceCard
              key={p.tier}
              {...p}
              onCta={() => openEmail(`Project Inquiry: ${p.tier} website plan at ${p.price}`)}
            />
          ))}
        </div>
      </section>

      {/* ── SOCIAL MEDIA PRICING ── */}
      <section className="reveal page-container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-plum text-center mb-10">Social Media Management</h2>
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

      {/* ── COMBO OFFERS ── */}
      <section className="reveal page-container py-16">
        <div className="text-center mb-10">
          <span className="text-ochre text-xs font-bold uppercase tracking-widest">Save More</span>
          <h2 className="text-2xl md:text-3xl font-bold text-plum mt-2">Bundle & Save Big</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Combo 1 */}
          <div className="bg-plum p-8 rounded-2xl text-surface flex flex-col gap-4 hover:shadow-2xl transition-all duration-300 group cursor-default">
            <div className="text-xs font-bold text-ochre uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">
              Growth + Essential Social
            </div>
            <h3 className="text-xl font-bold">Business Kickstart Bundle</h3>
            <div className="flex items-end gap-3">
              <div className="text-4xl font-extrabold text-ochre">₹54,999</div>
              <div className="text-surface/50 text-sm mb-1 line-through">₹60,998</div>
            </div>
            <span className="self-start bg-ochre/20 text-ochre text-xs font-bold px-3 py-1 rounded-full border border-ochre/40">
              🎉 You save ₹5,999
            </span>
            <p className="text-surface/70 text-sm">Full website + social presence for 1 month. Everything you need to launch.</p>
            <button
              onClick={() => openEmail("Project Inquiry: Business Kickstart Bundle at ₹54,999")}
              className="mt-auto border border-surface/30 text-surface font-bold py-3 px-6 rounded-xl hover:bg-ochre hover:text-plum hover:border-ochre transition-all"
            >
              Get This Bundle
            </button>
          </div>

          {/* Combo 2 */}
          <div className="bg-plum p-8 rounded-2xl text-surface flex flex-col gap-4 relative border-2 border-ochre hover:shadow-2xl transition-all duration-300 group cursor-default">
            <span className="absolute top-4 right-4 bg-ochre text-plum text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Best Value
            </span>
            <div className="text-xs font-bold text-ochre uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">
              Market Leader + Advanced Social
            </div>
            <h3 className="text-xl font-bold">Dominance Bundle</h3>
            <div className="flex items-end gap-3">
              <div className="text-4xl font-extrabold text-ochre">₹75,999</div>
              <div className="text-surface/50 text-sm mb-1 line-through">₹89,998</div>
            </div>
            <span className="self-start bg-ochre/20 text-ochre text-xs font-bold px-3 py-1 rounded-full border border-ochre/40">
              🎉 You save ₹13,999
            </span>
            <p className="text-surface/70 text-sm">Full bespoke branding, enterprise site &amp; expert marketing. The complete package.</p>
            <button
              onClick={() => openEmail("Project Inquiry: Dominance Bundle at ₹75,999")}
              className="mt-auto bg-ochre text-plum font-bold py-3 px-6 rounded-xl hover:brightness-110 transition-all shadow-lg"
            >
              Get This Bundle
            </button>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE CLAIM ── */}
      <section className="reveal page-container py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-plum leading-none">
            5+ Qualified Leads.
          </h2>
          <h3 className="text-2xl font-bold text-ochre">Or Month Two Is Free.</h3>
          <p className="text-ink-light leading-relaxed max-w-2xl mx-auto">
            We don't just build pretty things — we build engines that drive real business growth.
            Our reputation is built on results and transparency.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/contact" className="btn-ochre py-4 px-10 text-base">
              Let's Talk <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="reveal page-container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-plum text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map(({ q, a, open }) => (
            <details key={q} className="bg-surface p-5 rounded-2xl border border-[#d3c4af]/30 group cursor-pointer" open={open}>
              <summary className="font-bold text-plum flex justify-between items-center text-sm">
                {q}
                <ChevronDown size={18} className="faq-icon text-plum/60 shrink-0 ml-3" />
              </summary>
              <p className="mt-4 text-ink-light text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
