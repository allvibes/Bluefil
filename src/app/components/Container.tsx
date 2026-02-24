'use client'

import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`
        w-full
        max-w-[1400px]
        2xl:max-w-[1600px]
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        xl:px-12
        ${className}
      `}
    >
      {children}
    </div>
  )
}