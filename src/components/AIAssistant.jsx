import { useState, useRef, useEffect } from 'react'
import { Sparkles, X, Send, Bot } from 'lucide-react'
import { clinic, services, faqs } from '../utils/data'

const WELCOME = `Hi! I\u2019m the virtual assistant for ${clinic.name}. Ask me about our services, hours, or how to book an appointment.`

function generateReply(input) {
  const q = input.toLowerCase()

  if (/(book|appointment|schedule|slot)/.test(q)) {
    return 'You can book an appointment using the "Book an Appointment" form on this page, or call us directly at ' + clinic.phone + '.'
  }
  if (/(hour|open|timing|time)/.test(q)) {
    return clinic.hours.map((h) => `${h.day}: ${h.time}`).join(' \u2014 ')
  }
  if (/(location|address|where|police foundation)/.test(q)) {
    return `We\u2019re located at ${clinic.location}. You'll find a map and directions further down this page.`
  }
  if (/(price|cost|fee|charge)/.test(q)) {
    return 'Treatment costs vary case by case. Please call us at ' + clinic.phone + ' or book a consultation for an accurate quote.'
  }
  if (/(emergency|pain|urgent|hurt)/.test(q)) {
    return 'For emergencies, please call us immediately at ' + clinic.phone + '. We prioritise same-day emergency slots.'
  }

  const matchedService = services.find((s) => q.includes(s.title.toLowerCase().split(' ')[0]))
  if (matchedService) {
    return `${matchedService.title}: ${matchedService.desc}`
  }

  const matchedFaq = faqs.find((f) => q.split(' ').some((word) => word.length > 3 && f.q.toLowerCase().includes(word)))
  if (matchedFaq) {
    return matchedFaq.a
  }

  return "I'm a simple assistant, so I might not have the full answer — but our front desk will! Call " + clinic.phone + ' or use the appointment form for anything specific.'
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: WELCOME }])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  const handleSend = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    const reply = generateReply(text)
    setMessages((m) => [...m, { role: 'user', text }, { role: 'bot', text: reply }])
    setInput('')
  }

  return (
    <>
      {open && (
        <div className="fixed z-50 bottom-[9.5rem] sm:bottom-40 right-5 sm:right-8 w-[calc(100vw-2.5rem)] max-w-sm h-[26rem] card-surface flex flex-col overflow-hidden animate-fadeUp">
          <div className="bg-primary text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <p className="font-display font-semibold text-sm leading-none">Clinic Assistant</p>
                <p className="text-[11px] text-white/70 mt-1">Usually replies instantly</p>
              </div>
            </div>
            <button aria-label="Close assistant" onClick={() => setOpen(false)} className="p-1 hover:bg-white/10 rounded-lg">
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-surface">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'bot'
                    ? 'bg-white text-ink/80 shadow-soft rounded-tl-sm'
                    : 'bg-primary text-white ml-auto rounded-tr-sm'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-primary-900/[0.06] bg-white flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, hours..."
              className="flex-1 text-sm px-3.5 py-2.5 rounded-full bg-surface border border-primary-900/10 outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0 hover:bg-primary-600 transition-colors"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close assistant' : 'Open clinic assistant'}
        className="fixed z-40 bottom-24 right-5 sm:bottom-28 sm:right-8 h-14 px-5 rounded-full bg-ink text-white flex items-center gap-2 shadow-lift hover:scale-105 transition-transform duration-300"
      >
        <Sparkles size={18} className="text-accent" />
        <span className="font-utility text-sm font-semibold hidden sm:inline">Ask Assistant</span>
      </button>
    </>
  )
}
