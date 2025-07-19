'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  { title: 'Brain Boost', icon: '/images/brain.webp' },
  { title: 'Immunity', icon: '/images/immunity.webp' },
  { title: 'Digestive Aid', icon: '/images/digestion.webp' },
  { title: 'Skin Glow', icon: '/images/skin.webp' },
  { title: 'Heart Health', icon: '/images/heart.webp' },
]

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bottleRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current || !bottleRef.current) return

    gsap.fromTo(bottleRef.current,
      { scale: 1 },
      {
        scale: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    )

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=50',
        toggleActions: 'play none none reverse',
      },
    })

    tl.fromTo(bottleRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, ease: 'power2.out' }, 
      0
    )

    tl.from(iconsRef.current, {
      scale: 0,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'back.out(1.7)',
    }, 0)
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen relative bg-black py-20 overflow-hidden">
      <div className="flex justify-center items-center relative h-full">

        {/* Bottle */}
        <div ref={bottleRef} className="relative z-10">
          <Image
            src="/images/bottle.webp"
            alt="Bluefil Bottle"
            width={220}
            height={480}
            priority
            className="object-contain"
          />
        </div>

        {/* Icon Group Centered with more vertical space */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[750px] h-[800px] pointer-events-none z-0">
          {benefits.map((benefit, i) => {
            let x = 0
            let y = 0

            const sidePadding = 220
            const upperY = 80
            const bottomCurve = 200
            const heartY = 270  // Slightly lowered for better visibility

            switch (i) {
              case 0:
                x = -sidePadding
                y = upperY
                break
              case 1:
                x = sidePadding
                y = upperY
                break
              case 2:
                x = -sidePadding + 50
                y = bottomCurve
                break
              case 3:
                x = sidePadding - 50
                y = bottomCurve
                break
              case 4:
                x = 0
                y = heartY
                break
            }

            return (
              <div
                key={i}
                ref={(el) => (iconsRef.current[i] = el!)}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="w-[130px] text-center"
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={65}
                  height={65}
                  className="mx-auto mb-2"
                />
                <h4 className="text-base font-semibold text-white">{benefit.title}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
