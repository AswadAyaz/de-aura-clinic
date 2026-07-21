import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../utils/data'
import useScrollReveal from '../hooks/useScrollReveal'

export default function FAQ() {
  const revealRef = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="container-page grid lg:grid-cols-5 gap-12">
        <div ref={revealRef} className="reveal lg:col-span-2">
          <span className="eyebrow mb-4">FAQ</span>
          <h2 className="section-heading">Answers before you arrive.</h2>
          <p className="section-sub mt-5">
            Can&rsquo;t find what you&rsquo;re looking for? Send us a message and we&rsquo;ll
            get back to you the same day.
          </p>
        </div>

        <div className="lg:col-span-3 divide-y divide-primary-900/[0.06] border-t border-b border-primary-900/[0.06]">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-ink">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-ink/60 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
