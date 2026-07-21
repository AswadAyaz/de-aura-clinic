import { Phone, MapPin, Facebook, Instagram, Mail } from 'lucide-react'
import { clinic, services } from '../utils/data'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#appointment', label: 'Book Appointment' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <svg width="34" height="34" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="16" fill="#C9A85E" />
              <path d="M18 30 Q32 46 46 30" stroke="#5C1A33" strokeWidth="4" fill="none" strokeLinecap="round" />
              <circle cx="20" cy="26" r="3" fill="#FFFFFF" />
              <circle cx="44" cy="26" r="3" fill="#FFFFFF" />
            </svg>
            <span className="font-display font-bold text-lg leading-snug">{clinic.name}</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Premium, gentle dental care in the heart of Islamabad.
          </p>
          <div className="flex items-center gap-1.5 mt-4 text-accent-300">
            <span className="text-xs text-white/60">
              {clinic.rating.toFixed(1)} &middot; {clinic.reviews}+ Google reviews
            </span>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/75 hover:bg-accent hover:text-white transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href={clinic.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/75 hover:bg-accent hover:text-white transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-utility font-semibold text-sm tracking-wide uppercase text-white/50 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/75 hover:text-accent-300 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-utility font-semibold text-sm tracking-wide uppercase text-white/50 mb-4">
            Popular Services
          </h4>
          <ul className="space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.id}>
                <a href="#services" className="text-sm text-white/75 hover:text-accent-300 transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-utility font-semibold text-sm tracking-wide uppercase text-white/50 mb-4">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-white/75">
              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary-300" />
              {clinic.location}
            </li>
            <li className="flex items-start gap-2.5 text-sm text-white/75">
              <Phone size={16} className="mt-0.5 shrink-0 text-secondary-300" />
              <a href={`tel:${clinic.phoneHref}`} className="hover:text-accent-300 transition-colors">
                {clinic.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-white/75">
              <Mail size={16} className="mt-0.5 shrink-0 text-secondary-300" />
              <a href={`mailto:${clinic.email}`} className="hover:text-accent-300 transition-colors break-all">
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>&copy; {year} {clinic.name}. All rights reserved.</p>
          <p>Designed with care for a healthier smile.</p>
        </div>
      </div>
    </footer>
  )
}
