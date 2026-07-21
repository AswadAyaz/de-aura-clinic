import { useEffect, useRef } from 'react'

/**
 * Adds an "in-view" class to the referenced element the first time
 * it scrolls into the viewport, powering CSS-driven reveal animations.
 * Respects users who have already seen the element (fires once).
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}
