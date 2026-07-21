import { MapPin } from 'lucide-react'
import { clinic } from '../utils/data'

export default function GoogleMap() {
  return (
    <section className="pb-20 sm:pb-28 bg-white">
      <div className="container-page">
        <div className="card-surface overflow-hidden">
          <div className="grid lg:grid-cols-3">
            <div className="p-8 sm:p-10 lg:col-span-1 flex flex-col justify-center">
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center text-primary mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">Find Us</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{clinic.location}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  'De Aura Dental Clinic Hafsa Medical Complex Ghauri Town Phase 4-A Islamabad'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 !py-2.5 self-start text-sm"
              >
                Get Directions
              </a>
            </div>
            <div className="lg:col-span-2 min-h-[320px]">
              <iframe
                title="Clinic location map"
                className="w-full h-full min-h-[320px] grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Hafsa%20Medical%20Complex%2C%20Ghauri%20Town%20Phase%204-A%2C%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
