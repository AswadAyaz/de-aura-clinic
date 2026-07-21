import { Star, ShieldCheck, CalendarCheck, MapPin } from 'lucide-react'
import { clinic } from '../utils/data'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  const revealRef = useScrollReveal()

  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 via-surface to-surface" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-secondary-100/60 blur-3xl -z-10" />
      <div className="absolute top-1/2 -left-32 w-[360px] h-[360px] rounded-full bg-accent-50 blur-3xl -z-10" />

      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div ref={revealRef} className="reveal">
          <div className="eyebrow mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {clinic.category} &middot; Ghauri Town, Islamabad
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-ink">
            Precision dentistry,
            <br />
            <span className="relative inline-block text-primary">
              designed around
              <svg
                viewBox="0 0 320 20"
                className="absolute -bottom-2 left-0 w-full h-4"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 14 Q160 -4 316 14"
                  fill="none"
                  stroke="#C9A85E"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            your smile.
          </h1>

          <p className="section-sub mt-6">
            {clinic.name} welcomes you to a modern dental studio in Ghauri
            Town, Islamabad — where Dr. Zeeshan Sadiq and Dr. Arifa Islam
            bring gentle care, honest advice, and precise treatment together
            for every patient, every visit.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#appointment" className="btn-primary">
              <CalendarCheck size={19} />
              Book an Appointment
            </a>
            <a href={`tel:${clinic.phoneHref}`} className="btn-secondary">
              Call {clinic.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="font-utility text-sm font-semibold text-ink/70">
                {clinic.rating.toFixed(1)} from {clinic.reviews}+ Google reviews
              </span>
            </div>
            <div className="flex items-center gap-2 text-ink/60 font-utility text-sm">
              <ShieldCheck size={17} className="text-primary" />
              Sterilised, modern equipment
            </div>
          </div>
        </div>

        {/* Clinic portrait panel */}
        <div className="relative">
          <div className="relative mx-auto max-w-md aspect-[4/5] rounded-xl3 shadow-lift overflow-hidden animate-floatY">
            <img
              src="/images/hero-clinic.jpeg"
              alt={`${clinic.studioName} interior`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/0 to-primary-900/0" />

            <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-display font-bold text-base sm:text-lg leading-snug">
                  {clinic.name}
                </p>
                <p className="text-white/75 font-utility text-xs mt-1">
                  {clinic.studioName}
                </p>
              </div>
              <div className="w-11 h-11 rounded-full bg-accent/90 flex items-center justify-center">
                <ShieldCheck size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Floating badge cards */}
          <div className="hidden sm:flex absolute -left-8 top-8 card-surface px-4 py-3 items-center gap-3 animate-floatY [animation-delay:1.2s]">
            <div className="w-9 h-9 rounded-full bg-accent-50 flex items-center justify-center text-accent-600">
              <Star size={16} fill="currentColor" />
            </div>
            <div>
              <p className="font-utility font-bold text-sm leading-none">{clinic.rating.toFixed(1)}/5</p>
              <p className="text-xs text-ink/55">{clinic.reviews}+ reviews</p>
            </div>
          </div>

          <div className="hidden sm:flex absolute -right-6 bottom-16 card-surface px-4 py-3 items-center gap-3 animate-floatY [animation-delay:0.6s]">
            <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center text-primary">
              <MapPin size={16} />
            </div>
            <div>
              <p className="font-utility font-bold text-sm leading-none">Ghauri Town</p>
              <p className="text-xs text-ink/55">Islamabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
