// components/FinalHero.tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function FinalHero() {
  const bottleRef = useRef(null)

  useEffect(() => {
    gsap.to(bottleRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'sine.inOut'
    })
  }, [])

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-[url('/images/ice-bg.webp')] bg-cover bg-center">
      <h1 className="text-5xl font-bold text-white mb-4">Bluefil - Taste the Chill</h1>
      <p className="text-xl text-gray-300 max-w-xl mx-auto mb-6">Experience the future of refreshment, antioxidant-rich and irresistibly delicious.</p>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full">Order Now</button>
      <img
        ref={bottleRef}
        src="/images/bottle-in-ice.webp"
        className="mt-10 w-[200px]"
        alt="Chilled Bluefil"
      />
    </section>
  )
}
