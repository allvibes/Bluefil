
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  { title: 'Refreshing Energy', text: 'A chilled burst of hydration and vitality', icon: '/images/refresh.webp' },
  { title: 'Antioxidant Rich', text: 'Fights daily stress with blueberry power', icon: '/images/antioxidant.webp' },
  { title: 'Natural Goodness', text: 'Made from hand-picked, real blueberries', icon: '/images/natural.webp' },
  { title: 'Clean Energy', text: 'A light boost without jitters', icon: '/images/energy.webp' },
]

export default function Highlights() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const handRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=50',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from(handRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })

    tl.from(itemsRef.current, {
      x: -50,
      opacity: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=1')
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen bg-black py-20 px-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">

      {/* Left - Balanced C Shape Highlights with consistent spacing */}
      <div className="md:w-1/2 relative h-[500px] w-full md:w-[400px] ml-20 pl-16">

        {highlights.map((item, i) => {
          let x = 0
          let y = 0

          // Adjusted for smooth arc and balanced spacing
          switch (i) {
            case 0:
              x = -50
              y = -150
              break
            case 1:
              x = -170
              y = -50
              break
            case 2:
              x = -170
              y = 80
              break
            case 3:
              x = -50
              y = 180
              break
          }

          return (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el!)}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              className="w-[180px] text-left"
            >
              <div className="flex items-start gap-3">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={45}
                  height={45}
                  className="flex-shrink-0"
                />
                <div>
                  <h4 className="text-base font-semibold text-white whitespace-nowrap">{item.title}</h4>
                  <p className="text-gray-400 text-xs mt-1 truncate">{item.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Right - Hand Catch Image with no extra margin */}
      <div ref={handRef} className="md:w-1/2 mt-12 md:mt-0 flex justify-end pr-0">
        <Image
          src="/images/hand-catch.webp"
          alt="Hand Catching Bluefil Bottle"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>

    </section>
  )
}
