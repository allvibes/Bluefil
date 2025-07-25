'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

export default function FinalHero() {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    gsap.to(imgRef.current, {
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
      <div className="flex flex-col items-center mt-2 relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Taste the Chill
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-sm md:max-w-xl mx-auto mb-6 md:mb-8">
          Experience the refreshment in a drink so antioxidant-rich and irresistibly delicious.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm md:text-base">
          Order Now
        </button>
      </div>

      {/* Bottle Container with Stationary Gradient */}
      <div className="absolute bottom-0 w-full flex justify-center h-[200px] md:h-[290px] overflow-hidden pointer-events-none z-0">
        <div className="relative w-[150px] md:w-[200px]">
          <Image
            src="/images/bottle-in-ice.webp"
            alt="Chilled Bluefil"
            className="w-full object-contain mx-auto"
            width={200}
            height={290}
            priority
            ref={imgRef}
          />
          {/* Stationary Black Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
        </div>
      </div>

    </section>
  )
}
