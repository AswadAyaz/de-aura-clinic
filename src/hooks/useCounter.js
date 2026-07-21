import { useEffect, useRef, useState } from 'react'

/**
 * Animates a numeric value from 0 to `target` once the element
 * becomes visible in the viewport. Supports decimal targets (e.g. 4.9).
 */
export default function useCounter(target, { duration = 1800, decimals = 0 } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Number((eased * target).toFixed(decimals)))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.unobserve(node)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration, decimals])

  return [value, ref]
}
