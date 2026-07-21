import { HeartPulse, Sparkles, UsersRound, Clock } from 'lucide-react'
import { clinic } from '../utils/data'
import useScrollReveal from '../hooks/useScrollReveal'

const points = [
  {
    icon: HeartPulse,
    title: 'Patient-first philosophy',
    desc: 'Every treatment plan begins with listening — your comfort and concerns shape the visit.',
  },
  {
    icon: Sparkles,
    title: 'Modern, sterile environment',
    desc: 'Clinical-grade sterilisation and contemporary equipment in a calm, welcoming space.',
  },
  {
    icon: UsersRound,
    title: 'Trusted across Islamabad',
    desc: `${clinic.reviews}+ Google reviews from patients across Ghauri Town and beyond.`,
  },
  {
    icon: Clock,
    title: 'Flexible scheduling',
    desc: 'Evening slots and same-day emergency care for the moments that can\u2019t wait.',
  },
]

export default function About() {
  const revealRef = useScrollReveal()

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid lg:grid-cols-5 gap-14 items-center">
        <div ref={revealRef} className="reveal lg:col-span-2">
          <span className="eyebrow mb-4">About The Clinic</span>
          <h2 className="section-heading">
            A dental studio built around calm, precision, and trust.
          </h2>
          <p className="section-sub mt-5">
            Located in Ghauri Town Phase 4-A, Islamabad, {clinic.name} was
            founded on a simple idea: dental visits shouldn&rsquo;t feel
            clinical and cold. Every appointment blends modern technique with
            genuine, unhurried attention.
          </p>
        </div>

        <div ref={useScrollReveal()} className="reveal lg:col-span-3 grid sm:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="group card-surface p-6 hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <p.icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-1.5">
                {p.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
