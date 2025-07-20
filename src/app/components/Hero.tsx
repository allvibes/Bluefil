'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const bottleWrapperRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([])
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!bottleWrapperRef.current || !sectionRef.current || !bgRef.current) return

    gsap.fromTo(
      bottleWrapperRef.current,
      { y: '100vh', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.5,
      }
    )

    gsap.to(bottleWrapperRef.current, {
      y: '-40vh',
      scale: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(bgRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.from(lettersRef.current, {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'back.out(1.7)',
      delay: 1,
    })

    gsap.from(paragraphRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: 'power2.out',
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url('/images/blueberry-bg.webp')` }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[150px] top-1/4 left-1/3 mix-blend-screen animate-pulse-slow"></div>
        <div
          className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] top-1/2 left-2/3 mix-blend-screen animate-pulse-slow"
          style={{ animationDelay: '0.2s' }}
        ></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center mt-20 md:mt-32">
        <h1 className="font-extrabold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] text-[15vw] leading-none flex gap-2">
          {(() => {
            lettersRef.current = [] // Reset array to avoid stale refs on rerender
            return "Bluefil".split("").map((letter, i) => (
              <span
                key={i}
                ref={(el) => { lettersRef.current[i] = el }} // ✅ Properly typed, no error
                className="inline-block"
              >
                {letter}
              </span>
            ))
          })()}
        </h1>
        <p
          ref={paragraphRef}
          className="mt-6 text-lg md:text-xl text-blue-200 font-medium"
        >
          The best hand-picked blueberries for healthy ones.
        </p>
      </div>

      <div
        ref={bottleWrapperRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Image
          src="/images/bottle.webp"
          alt="Bluefil Bottle"
          width={200}
          height={500}
          priority
          className="object-contain"
        />
      </div>
    </section>
  )
}
