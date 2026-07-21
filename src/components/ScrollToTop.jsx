import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
      className="fixed z-40 bottom-[11.5rem] right-5 sm:bottom-[12.5rem] sm:right-8 w-11 h-11 rounded-full bg-white border border-primary-100 text-primary shadow-card flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 animate-fadeUp"
    >
      <ArrowUp size={19} />
    </button>
  )
}
