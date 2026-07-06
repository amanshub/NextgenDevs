import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { EMAIL, MAILTO_URL } from '../data/contact'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: MAILTO_URL,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Prayagraj, Uttar Pradesh, India',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Sat, 9:00 AM – 7:00 PM IST',
    href: null,
  },
]

export default function Contact() {
  useScrollReveal()

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      const subject = encodeURIComponent(`Project Inquiry from ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
      )
      window.location.href = `${MAILTO_URL}?subject=${subject}&body=${body}`
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      <Helmet>
        <title>Contact NextGenDevs | Get a Free Digital Strategy Consultation</title>
        <meta
          name="description"
          content="Reach out to NextGenDevs for a free strategy consultation. We're based in Prayagraj, UP, India. Email us or fill the form — we respond within 24 hours."
        />
        <meta property="og:title" content="Contact | NextGenDevs" />
        <meta property="og:description" content="Get in touch with NextGenDevs for a free digital strategy consultation." />
        <meta property="og:image" content="/images/hero-illustration.png" />
        <link rel="canonical" href="https://nextgendevs.in/contact" />
      </Helmet>

      {/* Hero */}
      <section className="bg-plum py-20 px-5 reveal">
        <div className="page-container text-center">
          <span className="text-ochre text-xs font-bold uppercase tracking-widest">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-surface mt-3">Let's Start a Conversation</h1>
          <p className="text-surface/70 mt-4 max-w-xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to explore what's possible — we'd love to hear from you. Free consultation, zero pressure.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="reveal page-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">

          {/* Left: Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-plum mb-2">Contact Details</h2>
              <p className="text-ink-light text-sm leading-relaxed">
                We typically respond within a few hours on weekdays. Email is the best way to reach us.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="bg-surface rounded-xl p-4 border border-[#d3c4af]/30 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-plum/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-plum" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink-light uppercase tracking-widest">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                         className="text-sm font-semibold text-plum hover:text-ochre transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-plum">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={MAILTO_URL}
              className="btn-ochre py-4 px-8 text-base w-full justify-center"
            >
              <Mail size={20} />
              Email Us Now
            </a>

            <div className="rounded-2xl overflow-hidden border border-[#d3c4af]/30 shadow-sm h-52">
              <iframe
                title="NextGenDevs office location in Prayagraj"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57964.39456899854!2d81.8078!3d25.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb3b4e2a5a99%3A0x4f2c62e3f9ee490!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-surface rounded-2xl p-8 border border-[#d3c4af]/30 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-plum/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-plum" />
                </div>
                <h3 className="text-xl font-bold text-plum">Message Sent!</h3>
                <p className="text-ink-light text-sm max-w-xs">
                  Your email client should have opened. If not, email us directly at{' '}
                  <a href={MAILTO_URL} className="text-ochre font-semibold">{EMAIL}</a>
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                  className="btn-outline-plum text-sm py-2 px-6 mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-plum mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-plum uppercase tracking-widest mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className="w-full bg-background border border-[#d3c4af]/50 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-plum uppercase tracking-widest mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rahul@business.com"
                        className="w-full bg-background border border-[#d3c4af]/50 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-plum uppercase tracking-widest mb-1.5">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Optional: +91 98765 43210"
                      className="w-full bg-background border border-[#d3c4af]/50 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-plum uppercase tracking-widest mb-1.5">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="I run a restaurant in Prayagraj and I need a website + social media management..."
                      className="w-full bg-background border border-[#d3c4af]/50 rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={loading}
                    className="btn-ochre py-4 text-base w-full justify-center disabled:opacity-70"
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted text-center">
                    We respond within 24 hours on weekdays. Email us at any time and we'll get back soon.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
