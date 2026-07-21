import { BadgeCheck, Sparkle, Clock3, ShieldPlus, Wallet, HeartHandshake } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Experienced & Certified',
    desc: 'Certified, hands-on clinical practice in general and cosmetic dentistry.',
  },
  {
    icon: Sparkle,
    title: 'Modern Technology',
    desc: 'Contemporary equipment and technique for accurate, efficient treatment.',
  },
  {
    icon: Clock3,
    title: 'Minimal Waiting Time',
    desc: 'Appointment-based scheduling designed to respect your time.',
  },
  {
    icon: ShieldPlus,
    title: 'Strict Sterilisation',
    desc: 'Hospital-grade sterilisation protocols followed for every single instrument.',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    desc: 'Clear treatment costs discussed upfront — no hidden charges, ever.',
  },
  {
    icon: HeartHandshake,
    title: 'Comfort-First Approach',
    desc: 'A calming environment and unhurried consultations built around your concerns.',
  },
]

export default function WhyChooseUs() {
  const revealRef = useScrollReveal()

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-page">
        <div ref={revealRef} className="reveal max-w-2xl mb-14">
          <span className="eyebrow mb-4">Why Choose Us</span>
          <h2 className="section-heading">Care that earns trust, visit after visit.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center text-accent-600 shrink-0">
                <r.icon size={21} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-ink mb-1.5">
                  {r.title}
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
