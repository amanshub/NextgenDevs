import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Lightbulb, Target, Heart, ArrowRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const values = [
  {
    icon: Lightbulb,
    title: 'Creativity First',
    desc: 'We believe every business has a unique story. Our job is to translate that story into a digital experience that resonates.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    desc: "We don't measure success in likes — we measure it in leads, revenue, and growth for your business.",
  },
  {
    icon: Heart,
    title: 'Community Rooted',
    desc: 'As a Prayagraj-based agency, we have a personal stake in seeing local businesses thrive and grow.',
  },
]

const founders = [
  {
    name: 'Aman Singh',
    role: 'Co-Founder — Frontend, UI/UX & AI Automation',
    bio: "Aman leads frontend development, UI/UX design, and AI-powered automation at NextGenDevs. He's the one turning ideas into fast, polished websites and building the AI systems that help clients run smarter, not harder.",
    skills: ['React', 'UI/UX Design', 'AI Automation', 'Performance Optimization'],
  },
  {
    name: 'Aashirwad Prajapati',
    role: 'Co-Founder — Backend Development & Growth',
    bio: 'Aashirwad handles backend architecture and leads marketing and reach strategy — making sure what we build is as solid on the server side as it is visible to the right audience.',
    skills: ['Node.js', 'API Architecture', 'Growth Strategy', 'Analytics'],
  },
]

const milestones = [
  { year: '2022', event: 'Started as a freelance web design studio in Prayagraj.' },
  { year: '2023', event: 'Expanded to offer social media management and brand promotion.' },
  { year: '2024', event: 'Crossed 15 websites delivered, 10+ active social media clients.' },
  { year: '2025', event: 'Launched the 5+ Leads Guarantee — our boldest commitment yet.' },
]

export default function Founders() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Founders | NextGenDevs — The Team Behind the Agency</title>
        <meta
          name="description"
          content="Meet the founders of NextGenDevs — a digital agency built in Prayagraj to help local businesses dominate online with world-class websites and marketing."
        />
        <meta property="og:title" content="Founders | NextGenDevs" />
        <meta property="og:description" content="Meet the team behind Prayagraj's leading digital agency." />
        <meta property="og:image" content="/images/hero-illustration.png" />
        <link rel="canonical" href="https://nextgendevs.in/founders" />
      </Helmet>

      {/* Hero */}
      <section className="bg-plum py-20 px-5 reveal">
        <div className="page-container text-center">
          <span className="text-ochre text-xs font-bold uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-surface mt-3 leading-tight">
            Built in Prayagraj.<br />Built for India.
          </h1>
          <p className="text-surface/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            NextGenDevs was born out of a simple frustration: local businesses in Prayagraj had incredible
            products and services, but their digital presence was letting them down. We decided to fix that.
          </p>
        </div>
      </section>

      {/* Agency Story */}
      <section className="reveal page-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-ochre text-xs font-bold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-plum mt-3 mb-5">
              A Digital Agency That Actually Cares About Results
            </h2>
            <div className="flex flex-col gap-4 text-ink-light text-sm leading-relaxed">
              <p>
                We're a small, focused team of designers, developers, and marketers based right here in Prayagraj, 
                Uttar Pradesh. We understand the local market, the local businesses, and the unique challenges 
                that come with building a brand in a city like ours.
              </p>
              <p>
                Our approach is different: we don't believe in cookie-cutter solutions or generic templates. 
                Every project we take on gets the full weight of our creative and strategic thinking — because 
                your business deserves better than average.
              </p>
              <p>
                We're proud of our 5+ Leads Guarantee. It's not a marketing gimmick — it's a commitment 
                that holds us accountable to your success. If we don't deliver, we work for free. Simple as that.
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-surface rounded-2xl p-8 border border-[#d3c4af]/30">
            <h3 className="font-bold text-plum mb-6 text-sm uppercase tracking-widest">Our Journey</h3>
            <div className="flex flex-col gap-0">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className="flex gap-5 pb-6 last:pb-0 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-plum text-surface text-xs font-bold flex items-center justify-center shrink-0">
                      {year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 bg-[#d3c4af]/40 flex-grow mt-2" />
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="text-ochre font-bold text-sm">{year}</div>
                    <div className="text-ink-light text-sm mt-0.5">{event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="reveal bg-plum py-16">
        <div className="page-container">
          <h2 className="text-2xl font-bold text-surface text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-7 rounded-2xl bg-white/5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ochre/20 mb-4">
                  <Icon size={22} className="text-ochre" />
                </div>
                <h3 className="font-bold text-surface mb-2">{title}</h3>
                <p className="text-surface/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="reveal page-container py-16">
        <h2 className="text-2xl font-bold text-plum text-center mb-12">Meet the Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <div key={i} className="bg-surface rounded-2xl p-8 border border-[#d3c4af]/30 flex flex-col gap-5">
              <div className="text-center">
                <h3 className="font-extrabold text-plum text-lg">{founder.name}</h3>
                <p className="text-ochre text-sm font-semibold mt-0.5">{founder.role}</p>
              </div>

              <p className="text-ink-light text-sm leading-relaxed text-center">{founder.bio}</p>

              <div>
                <div className="text-xs font-bold text-plum uppercase tracking-widest mb-3">Expertise</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {founder.skills.map((skill) => (
                    <span key={skill} className="bg-plum/10 text-plum text-xs font-semibold px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal page-container py-12 pb-20 text-center">
        <h2 className="text-2xl font-bold text-plum mb-4">Let's Build Something Great Together</h2>
        <p className="text-ink-light mb-8 max-w-md mx-auto text-sm">We'd love to hear about your business. Reach out — no pressure, no sales pitch.</p>
        <Link to="/contact" className="btn-ochre py-4 px-10 text-base">
          Say Hello <ArrowRight size={18} />
        </Link>
      </section>
    </>
  )
}
