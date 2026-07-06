import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'
import { MAILTO_URL } from '../data/contact'

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Founders', to: '/founders' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="page-container h-full flex items-center justify-between">
          <Link
            to="/"
            className="text-surface font-extrabold text-xl tracking-tight hover:opacity-90 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            NextGen<span className="text-ochre">Devs</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 ${
                    isActive ? 'text-ochre' : 'text-surface/70 hover:text-surface'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <a
            href={MAILTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-ochre text-sm py-2.5 px-6"
          >
            <Mail size={15} strokeWidth={2.5} />
            Email Us
          </a>

          <button
            className="md:hidden text-surface p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button
          className="absolute top-5 right-5 text-surface/70 hover:text-surface p-2"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          <X size={24} />
        </button>

        <Link
          to="/"
          className="text-surface font-extrabold text-xl mb-6"
          onClick={() => setMenuOpen(false)}
        >
          NextGen<span className="text-ochre">Devs</span>
        </Link>

        {navLinks.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `py-3 px-4 rounded-xl text-base font-semibold uppercase tracking-wider transition-colors ${
                isActive
                  ? 'bg-ochre/20 text-ochre'
                  : 'text-surface/80 hover:text-surface hover:bg-white/10'
              }`
            }
          >
            {label}
          </NavLink>
        ))}

        <a
          href={MAILTO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ochre mt-6 text-sm py-3 px-6 w-full justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <Mail size={15} strokeWidth={2.5} />
          Email Us
        </a>
      </div>
    </>
  )
}
