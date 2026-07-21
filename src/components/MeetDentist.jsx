import { Sparkles, ShieldCheck, UsersRound, Award, Quote, Stethoscope } from 'lucide-react'
import { clinic, doctors } from '../utils/data'
import useScrollReveal from '../hooks/useScrollReveal'

const credentials = [
  { icon: Award, label: `${clinic.reviews}+ Google Reviews, ${clinic.rating.toFixed(1)} Average Rating` },
  { icon: Sparkles, label: 'General, Restorative & Cosmetic Dentistry' },
  { icon: ShieldCheck, label: 'Modern, Sterilised Equipment' },
  { icon: UsersRound, label: 'Personalised, Patient-First Treatment Plans' },
]

function initials(name) {
  return name
    .replace('Dr.', '')
    .trim()
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function MeetDentist() {
  const revealRef = useScrollReveal()

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm aspect-[4/5] rounded-xl3 border border-primary-900/[0.05] shadow-card overflow-hidden">
            <img
              src="/images/about-clinic.jpeg"
              alt={`Reception at ${clinic.studioName}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute top-5 right-5 glass-panel rounded-full px-4 py-2 text-xs font-utility font-semibold text-primary-700">
              {clinic.category}
            </div>
          </div>
        </div>

        <div ref={revealRef} className="reveal order-1 lg:order-2">
          <span className="eyebrow mb-4">Our Practice</span>
          <h2 className="section-heading">Care led by a dedicated dental team.</h2>
          <p className="section-sub mt-5">
            {clinic.name} brings precise, gentle dental care to Ghauri Town,
            Islamabad. Patients consistently describe the experience as
            thorough, calm, and clearly explained from the very first
            consultation.
          </p>

          <div className="mt-7 grid sm:grid-cols-1 gap-3">
            {credentials.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary-50 flex items-center justify-center text-secondary-700 shrink-0">
                  <c.icon size={17} />
                </div>
                <span className="font-utility text-sm font-medium text-ink/75">
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 card-surface p-6 relative">
            <Quote size={28} className="text-primary-100 absolute top-4 right-5" />
            <p className="text-ink/70 italic leading-relaxed">
              &ldquo;Every patient deserves to understand their treatment, feel
              no unnecessary discomfort, and leave with a smile they&rsquo;re
              proud of.&rdquo;
            </p>
            <p className="mt-3 font-utility font-semibold text-sm text-ink">
              — The {clinic.name} Team
            </p>
          </div>
        </div>
      </div>

      <div className="container-page mt-20">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="eyebrow justify-center mb-4">Meet Our Doctors</span>
          <h3 className="section-heading text-2xl sm:text-3xl">
            The dental surgeons behind every treatment.
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {doctors.map((d) => (
            <div
              key={d.name}
              className="card-surface p-7 text-center hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-glow">
                {initials(d.name)}
              </div>
              <h4 className="font-display font-semibold text-lg text-ink mt-4">
                {d.name}
              </h4>
              <p className="text-sm text-ink/55 flex items-center justify-center gap-1.5 mt-1">
                <Stethoscope size={14} className="text-primary" />
                {d.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
