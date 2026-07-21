export default function SmileDivider({ flip = false, tone = 'primary' }) {
  const stroke = tone === 'accent' ? '#C9A85E' : tone === 'secondary' ? '#A98A6A' : '#5C1A33'

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[36px] sm:h-[48px]"
      >
        <path
          d="M0 8 C 200 60, 400 60, 600 30 C 800 0, 1000 0, 1200 8"
          fill="none"
          stroke={stroke}
          strokeOpacity="0.18"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}
