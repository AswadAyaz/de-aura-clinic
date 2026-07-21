import { MessageCircle } from 'lucide-react'
import { clinic } from '../utils/data'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${clinic.whatsappHref}?text=${encodeURIComponent(
        'Hi! I would like to book an appointment.'
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-40 bottom-5 right-5 sm:bottom-8 sm:right-8 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lift hover:scale-110 transition-transform duration-300"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle size={26} className="relative" fill="currentColor" strokeWidth={0} />
    </a>
  )
}
