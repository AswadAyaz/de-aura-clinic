import { useState } from 'react'
import { CalendarCheck, CheckCircle2, Loader2, AlertCircle, MessageCircle } from 'lucide-react'
import { services, clinic } from '../utils/data'
import { submitToWeb3Forms } from '../utils/web3forms'
import useScrollReveal from '../hooks/useScrollReveal'

/**
 * Generic appointment form, reusable across any clinic project built on
 * this template. Reads everything clinic-specific (name, phone, WhatsApp
 * number, hours, services list) from `src/utils/data.js` — nothing in this
 * file needs to change between projects.
 */

const initialForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  service: '',
  message: '',
}

export default function AppointmentForm() {
  const revealRef = useScrollReveal()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) {
      next.phone = 'Please enter a valid phone number.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.service) next.service = 'Please select a service.'
    if (!form.date) next.date = 'Please choose a preferred date.'
    if (!form.time) next.time = 'Please choose a preferred time.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const whatsappHref = () => {
    const lines = [
      `Hi, I'd like to book an appointment at ${clinic.name}.`,
      form.name && `Name: ${form.name}`,
      form.service && `Service: ${form.service}`,
      form.date && `Preferred date: ${form.date}`,
      form.time && `Preferred time: ${form.time}`,
    ].filter(Boolean)
    return `https://wa.me/${clinic.whatsappHref}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return // belt-and-braces duplicate-submit guard
    if (!validate()) return

    setStatus('submitting')
    setErrorMessage('')

    const result = await submitToWeb3Forms(
      {
        Name: form.name,
        Phone: form.phone,
        Email: form.email,
        'Preferred Date': form.date,
        'Preferred Time': form.time,
        Service: form.service,
        Message: form.message || 'N/A',
      },
      {
        subject: `New Appointment Request — ${clinic.name}`,
        fromName: clinic.name,
      }
    )

    if (result.success) {
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus('error')
      setErrorMessage(
        result.missingKey
          ? 'Online booking isn\u2019t fully configured yet. Please use WhatsApp or call us directly below.'
          : 'Something went wrong sending your request. Please try again or use WhatsApp below.'
      )
    }
  }

  return (
    <section id="appointment" className="py-20 sm:py-28 bg-gradient-to-b from-primary-50/60 to-surface">
      <div className="container-page grid lg:grid-cols-5 gap-12 items-start">
        <div ref={revealRef} className="reveal lg:col-span-2">
          <span className="eyebrow mb-4">Book an Appointment</span>
          <h2 className="section-heading">Reserve your visit in under a minute.</h2>
          <p className="section-sub mt-5">
            Fill in the form and our front desk will confirm your slot by phone or
            WhatsApp within the same day. For urgent care, please call{' '}
            <a href={`tel:${clinic.phoneHref}`} className="text-primary font-semibold">
              {clinic.phone}
            </a>{' '}
            directly.
          </p>

          <div className="mt-8 space-y-3">
            {clinic.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between text-sm font-utility card-surface px-5 py-3.5">
                <span className="text-ink/60">{h.day}</span>
                <span className="font-semibold text-ink">{h.time}</span>
              </div>
            ))}
          </div>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center gap-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 px-5 py-4 hover:bg-[#25D366]/15 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="text-white" fill="currentColor" strokeWidth={0} />
            </div>
            <div>
              <p className="font-utility font-semibold text-sm text-ink">
                Prefer WhatsApp? Book your appointment directly.
              </p>
              <p className="text-xs text-ink/55 mt-0.5">We&rsquo;ll pre-fill what you&rsquo;ve entered so far.</p>
            </div>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 card-surface p-7 sm:p-9"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-10">
              <CheckCircle2 size={52} className="text-accent-700 mb-4" />
              <h3 className="font-display font-bold text-xl text-ink mb-2">
                Request received!
              </h3>
              <p className="text-sm text-ink/60 max-w-sm">
                Thank you for booking with {clinic.name}. Our team will confirm your
                appointment shortly by phone or WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="btn-secondary mt-6 !py-2.5"
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              {status === 'error' && (
                <div className="sm:col-span-2 flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 p-4">
                  <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-red-600">
                    {errorMessage || 'Something went wrong. Please try again.'} You can also call us directly at{' '}
                    <a href={`tel:${clinic.phoneHref}`} className="font-semibold underline">
                      {clinic.phone}
                    </a>
                    .
                  </p>
                </div>
              )}

              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-utility font-semibold text-ink mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-primary-900/10 px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="block text-sm font-utility font-semibold text-ink mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="03XX-XXXXXXX"
                  className="w-full rounded-xl border border-primary-900/10 px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-utility font-semibold text-ink mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-primary-900/10 px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="service" className="block text-sm font-utility font-semibold text-ink mb-1.5">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={update('service')}
                  className="w-full rounded-xl border border-primary-900/10 px-4 py-3 text-sm focus:border-primary outline-none transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
              </div>

              <div className="sm:col-span-1 grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="date" className="block text-sm font-utility font-semibold text-ink mb-1.5">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={update('date')}
                    className="w-full rounded-xl border border-primary-900/10 px-3 py-3 text-sm focus:border-primary outline-none transition-colors"
                  />
                  {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-utility font-semibold text-ink mb-1.5">
                    Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    value={form.time}
                    onChange={update('time')}
                    className="w-full rounded-xl border border-primary-900/10 px-3 py-3 text-sm focus:border-primary outline-none transition-colors"
                  />
                  {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-utility font-semibold text-ink mb-1.5">
                  Message <span className="text-ink/40 font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Anything else we should know?"
                  className="w-full rounded-xl border border-primary-900/10 px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <CalendarCheck size={18} /> Request Appointment
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
