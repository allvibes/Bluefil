'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Container from './Container'

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
    <section className="relative h-screen bg-[url('/images/ice-bg.webp')] bg-cover bg-center overflow-hidden">

      <Container className="h-full flex flex-col justify-center items-center text-center relative z-10">

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Taste the Chill
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Experience the refreshment in a drink so antioxidant-rich and irresistibly delicious.
        </p>

        <button className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full">
          Order Now
        </button>

      </Container>

      {/* Bottle */}
      <div className="absolute bottom-0 w-full flex justify-center h-[290px] pointer-events-none">

        <div className="relative w-[200px]">

          <Image
            ref={imgRef}
            src="/images/bottle-in-ice.webp"
            alt="Bluefil"
            width={200}
            height={290}
          />

          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/90 to-transparent" />

        </div>

      </div>

    </section>
  )
}