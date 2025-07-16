// components/Highlights.tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const features = ['Refreshing', 'Great Taste', 'Antioxidant', 'Energy', 'Healthy']

export default function Highlights() {
  const handRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(handRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: handRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse'
        }
      })

    gsap.utils.toArray('.feature').forEach((el, i) => {
      gsap.fromTo(el,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })
    })
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-between px-10 bg-gradient-to-b from-black via-blue-950 to-black py-20">
      <img ref={handRef} src="/images/hand-catch.webp" alt="Hand Catch" className="h-[400px]" />
      <ul className="text-3xl space-y-4">
        {features.map((feat, i) => (
          <li key={i} className="feature">{feat}</li>
        ))}
      </ul>
    </section>
  )
}
