import { useEffect } from 'react'

/**
 * useScrollReveal — uses IntersectionObserver to add `.active`
 * to elements with `.reveal` class when they enter the viewport.
 * Threshold is low so reveals fire early enough for above-fold content.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
