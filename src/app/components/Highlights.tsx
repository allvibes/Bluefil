

'use client'

import { useEffect, useRef, useState } from 'react'
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

      {isMobile ? (
        // Mobile: Hand first, then stacked highlights
        <div className="flex flex-col items-center space-y-10 w-full">

          {/* Hand Image */}
          <div ref={handRef} className="w-full flex justify-center">
            <Image
              src="/images/hand-catch.webp"
              alt="Hand Catching Bluefil Bottle"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          {/* Highlights List */}
          <div className="flex flex-col items-center space-y-6 w-full">
            {highlights.map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el!)}
                className="flex items-center gap-4 w-full max-w-xs"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={45}
                  height={45}
                  className="flex-shrink-0"
                />
                <div>
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      ) : (
        // Desktop Layout
        <>
          {/* Left Highlights in C Shape */}
          <div className="md:w-1/2 relative h-[500px] w-full md:w-[400px] ml-20 pl-16">

            {highlights.map((item, i) => {
              let x = 0
              let y = 0

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

          {/* Right Hand Image */}
          <div ref={handRef} className="md:w-1/2 mt-12 md:mt-0 flex justify-end pr-0">
            <Image
              src="/images/hand-catch.webp"
              alt="Hand Catching Bluefil Bottle"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>
        </>
      )}

    </section>
  )
}
