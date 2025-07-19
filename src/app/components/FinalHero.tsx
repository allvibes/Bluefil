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
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-[url('/images/ice-bg.webp')] bg-cover bg-center overflow-hidden">

      {/* Wrapper for content */}
      <div className="flex flex-col items-center mt-2 relative z-10">
        <h1 className="text-5xl font-bold text-white mb-6">Taste the Chill</h1>
        <p className="text-xl text-gray-300 max-w-xl mx-auto mb-8 whitespace-nowrap">
          Experience the refreshment, a drink so antioxidant-rich and irresistibly delicious.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
          Order Now
        </button>
      </div>

      {/* Bottle Container with Fade at Bottom */}
      <div className="absolute bottom-0 w-full flex justify-center overflow-hidden h-[300px] pointer-events-none">
        <div className="relative">
          <img
            ref={bottleRef}
            src="/images/bottle-in-ice.webp"
            className="w-[200px] object-contain"
            alt="Chilled Bluefil"
          />
          {/* Gradient Fade Mask */}
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/90 to-transparent"></div>
        </div>
      </div>

    </section>
  )
}

