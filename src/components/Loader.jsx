import { clinic } from '../utils/data'

export default function Loader({ visible }) {
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-surface transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <svg width="72" height="72" viewBox="0 0 100 100" className="animate-spinSlow">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#F3D9E1" strokeWidth="6" />
          <path
            d="M50 8 A42 42 0 0 1 92 50"
            fill="none"
            stroke="#5C1A33"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path d="M32 52 Q50 68 68 52" fill="none" stroke="#C9A85E" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <p className="font-utility text-sm tracking-[0.2em] uppercase text-primary-600">
          {clinic.name}
        </p>
      </div>
    </div>
  )
}
