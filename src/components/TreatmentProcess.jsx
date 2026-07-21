import { process } from '../utils/data'
import useScrollReveal from '../hooks/useScrollReveal'

export default function TreatmentProcess() {
  const revealRef = useScrollReveal()

  return (
    <section id="process" className="py-20 sm:py-28 bg-gradient-to-b from-surface to-primary-50/40">
      <div className="container-page">
        <div ref={revealRef} className="reveal max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow justify-center mb-4">Treatment Process</span>
          <h2 className="section-heading">A clear path from first visit to lasting results.</h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-primary-100" />
          {process.map((step) => (
            <div key={step.step} className="relative text-center lg:text-left">
              <div className="mx-auto lg:mx-0 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-display font-bold text-lg shadow-glow relative z-10">
                {step.step}
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mt-5 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
