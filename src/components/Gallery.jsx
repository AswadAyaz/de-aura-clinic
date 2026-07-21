import { beforeAfter, galleryPhotos, clinic } from '../utils/data'
import useScrollReveal from '../hooks/useScrollReveal'

function ToothRow({ shade, spacing }) {
  return (
    <svg viewBox="0 0 160 50" className="w-full h-14">
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={i}
          x={8 + i * (24 + spacing)}
          y="8"
          width="20"
          height="34"
          rx="6"
          fill={shade}
        />
      ))}
    </svg>
  )
}

export default function Gallery() {
  const revealRef = useScrollReveal()

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div className="container-page">
        <div ref={revealRef} className="reveal max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow justify-center mb-4">Real Results</span>
          <h2 className="section-heading">Before &amp; after transformations.</h2>
          <p className="section-sub mt-5 mx-auto">
            A glimpse of outcomes patients have achieved across our most requested
            treatments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beforeAfter.map((item) => (
            <div key={item.title} className="card-surface p-6 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display font-semibold text-lg text-ink mb-4">
                {item.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl2 bg-surface border border-primary-900/[0.04] overflow-hidden">
                  {item.beforeImg ? (
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={item.beforeImg}
                        alt={item.before}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="p-5">
                      <ToothRow shade="#D5B991" spacing={2} />
                    </div>
                  )}
                  <p className="py-3 text-xs font-utility font-semibold text-ink/50 uppercase tracking-wide text-center">
                    {item.before}
                  </p>
                </div>
                <div className="rounded-xl2 bg-primary-50 border border-primary-100 overflow-hidden">
                  {item.afterImg ? (
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={item.afterImg}
                        alt={item.after}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="p-5">
                      <ToothRow shade="#5C1A33" spacing={4} />
                    </div>
                  )}
                  <p className="py-3 text-xs font-utility font-semibold text-primary-700 uppercase tracking-wide text-center">
                    {item.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display font-semibold text-lg text-ink mb-2 text-center">
            Inside {clinic.studioName}
          </h3>
          <p className="text-sm text-ink/55 text-center mb-8">
            A closer look at our clinic and our patients&rsquo; care.
          </p>
          <div className="grid grid-cols-2 gap-5 max-w-xl mx-auto">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.src}
                className="card-surface aspect-square overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
