import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { clinic } from '../utils/data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#gallery', label: 'Results' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-xl shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <svg width="38" height="38" viewBox="0 0 64 64" className="shrink-0">
            <rect width="64" height="64" rx="16" fill="#5C1A33" />
            <path d="M18 30 Q32 46 46 30" stroke="#C9A85E" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="20" cy="26" r="3" fill="#FFFFFF" />
            <circle cx="44" cy="26" r="3" fill="#FFFFFF" />
          </svg>
          <span className="leading-tight max-w-[180px] sm:max-w-none">
            <span className="block font-display font-bold text-sm sm:text-lg text-ink group-hover:text-primary transition-colors leading-snug">
              {clinic.name}
            </span>
            <span className="block font-utility text-[10px] sm:text-[11px] tracking-wide text-ink/55">
              {clinic.category}
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-utility text-sm font-medium text-ink/75">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${clinic.phoneHref}`} className="flex items-center gap-2 text-sm font-utility font-semibold text-primary">
            <Phone size={16} />
            {clinic.phone}
          </a>
          <a href="#appointment" className="btn-primary !py-2.5 !px-5 text-sm">
            Book Appointment
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 rounded-lg text-ink hover:bg-primary-50 transition-colors"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden max-w-7xl mx-auto px-6 sm:px-10 mt-3 pb-5 animate-fadeUp">
          <ul className="flex flex-col gap-1 font-utility font-medium text-ink/80 bg-white rounded-2xl shadow-card p-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-primary-50 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex flex-col gap-2">
              <a href={`tel:${clinic.phoneHref}`} className="btn-secondary w-full">
                <Phone size={16} /> {clinic.phone}
              </a>
              <a href="#appointment" onClick={() => setOpen(false)} className="btn-primary w-full">
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
