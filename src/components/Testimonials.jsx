import { Star, Quote } from 'lucide-react'
import { testimonials, clinic } from '../utils/data'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Testimonials() {
  const revealRef = useScrollReveal()

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-surface">
      <div className="container-page">
        <div ref={revealRef} className="reveal max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow justify-center mb-4">Patient Stories</span>
          <h2 className="section-heading">Trusted by {clinic.reviews}+ happy patients.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-surface p-7 flex flex-col">
              <Quote size={26} className="text-primary-100 mb-3" />
              <div className="flex gap-0.5 text-accent mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-ink/70 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 pt-4 border-t border-primary-900/[0.06]">
                <p className="font-utility font-semibold text-sm text-ink">{t.name}</p>
                <p className="text-xs text-ink/50">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
