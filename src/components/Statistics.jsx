import { stats } from '../utils/data'
import useCounter from '../hooks/useCounter'

function StatItem({ value, suffix, label, decimals = 0 }) {
  const [count, ref] = useCounter(value, { decimals })

  return (
    <div ref={ref} className="text-center">
      <p className="font-display font-bold text-4xl sm:text-5xl text-white">
        {count}
        <span className="text-secondary-200">{suffix}</span>
      </p>
      <p className="mt-2 font-utility text-sm text-white/70 tracking-wide">{label}</p>
    </div>
  )
}

export default function Statistics() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-700 relative overflow-hidden">
      <svg
        viewBox="0 0 1200 40"
        className="absolute top-0 left-0 w-full h-8 opacity-30"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 20 Q300 0 600 20 T1200 20" fill="none" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
      <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
