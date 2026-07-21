import { Phone } from 'lucide-react'
import { clinic } from '../utils/data'

export default function CallButton() {
  return (
    <a
      href={`tel:${clinic.phoneHref}`}
      aria-label={`Call ${clinic.name} at ${clinic.phone}`}
      className="fixed z-40 bottom-5 left-5 sm:bottom-8 sm:left-8 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lift hover:scale-110 transition-transform duration-300"
    >
      <Phone size={22} fill="currentColor" strokeWidth={0} />
    </a>
  )
}
