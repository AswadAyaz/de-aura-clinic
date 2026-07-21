import { Phone, MessageCircle, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react'
import { clinic } from '../utils/data'
import useScrollReveal from '../hooks/useScrollReveal'

const cards = [
  {
    icon: Phone,
    title: 'Call Us',
    value: clinic.phone,
    href: `tel:${clinic.phoneHref}`,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Message us directly',
    href: `https://wa.me/${clinic.whatsappHref}`,
  },
  {
    icon: Mail,
    title: 'Email',
    value: clinic.email,
    href: `mailto:${clinic.email}`,
  },
  {
    icon: MapPin,
    title: 'Visit The Clinic',
    value: clinic.location,
    href: '#',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon – Sat, 10 AM – 8 PM',
    href: '#',
  },
]

export default function Contact() {
  const revealRef = useScrollReveal()

  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface">
      <div className="container-page">
        <div ref={revealRef} className="reveal max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow justify-center mb-4">Get In Touch</span>
          <h2 className="section-heading">We&rsquo;d love to see your smile.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card-surface p-6 hover:shadow-lift hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary-50 flex items-center justify-center text-primary mb-4">
                <c.icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-sm text-ink mb-1">{c.title}</h3>
              <p className="text-xs text-ink/55 leading-relaxed break-words">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="font-utility text-sm font-semibold text-ink/60 tracking-wide uppercase">
            Follow Us
          </p>
          <div className="flex items-center gap-3">
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href={clinic.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
