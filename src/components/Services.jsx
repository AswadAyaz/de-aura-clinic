import { ArrowUpRight } from 'lucide-react'
import { services } from '../utils/data'
import useScrollReveal from '../hooks/useScrollReveal'
import SmileDivider from './SmileDivider'

export default function Services() {
  const revealRef = useScrollReveal()

  return (
    <section id="services" className="py-20 sm:py-28 bg-surface relative">
      <SmileDivider tone="secondary" />
      <div className="container-page">
        <div ref={revealRef} className="reveal max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow justify-center mb-4">Our Services</span>
          <h2 className="section-heading">Complete dental care, under one roof.</h2>
          <p className="section-sub mt-5 mx-auto">
            From routine checkups to full smile transformations, every treatment is
            planned around your comfort and long-term oral health.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="group card-surface p-7 hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center transition-colors duration-300">
                  <s.icon size={22} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink/20 group-hover:text-accent group-hover:rotate-45 transition-all duration-300"
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mt-5 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
