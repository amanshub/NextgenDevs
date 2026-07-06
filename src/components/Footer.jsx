import { Link } from 'react-router-dom'
import { Camera, PlayCircle, Briefcase, MapPin, Mail } from 'lucide-react'
import { EMAIL, MAILTO_URL } from '../data/contact'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/work' },
  { label: 'Pricing', to: '/pricing' },
]

const supportLinks = [
  { label: 'Contact Us', to: '/contact' },
  { label: 'Founders', to: '/founders' },
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms of Service', to: '#' },
]

const socials = [
  { Icon: Camera, href: '#', label: 'Instagram' },
  { Icon: PlayCircle, href: '#', label: 'YouTube' },
  { Icon: Briefcase, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-plum border-t border-white/10 mt-20">
      <div className="page-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 mb-12">
          <div>
            <Link to="/" className="text-surface font-extrabold text-xl tracking-tight">
              NextGen<span className="text-ochre">Devs</span>
            </Link>
            <p className="text-surface/70 mt-4 leading-relaxed text-sm max-w-xs">
              Crafting high-conversion digital experiences that help businesses dominate their local markets with professional design and strategic marketing.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={MAILTO_URL} className="flex items-center gap-2 text-surface/60 hover:text-ochre transition-colors text-sm">
                <Mail size={14} />
                {EMAIL}
              </a>
              <span className="flex items-center gap-2 text-surface/60 text-sm">
                <MapPin size={14} className="text-ochre shrink-0" />
                Prayagraj, Uttar Pradesh, India
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-surface font-bold uppercase tracking-widest text-xs mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-surface/70 hover:text-ochre transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-surface font-bold uppercase tracking-widest text-xs mb-5">Support</h4>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-surface/70 hover:text-ochre transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-surface font-bold uppercase tracking-widest text-xs mb-5">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center text-surface/60 hover:bg-ochre hover:text-plum hover:border-ochre transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href={MAILTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ochre text-sm py-3 px-5 w-full justify-center"
            >
              Email Us
            </a>
          </div>
        </div>


        <div className="pt-8 border-t border-surface/10 text-center">
          <p className="text-surface/50 text-sm">© 2025 NextGenDevs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

