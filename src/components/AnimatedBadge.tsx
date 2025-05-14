import React from 'react'

interface BadgeProps {
  text: string
  className?: string
}

export default function AnimatedBadge({ text, className = "" }: BadgeProps) {
  return (
    <div className={`relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none ${className}`}>
      {/* Animated gradient border */}
      <span 
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{
          background: `conic-gradient(
            from 90deg at 50% 50%,
            var(--primary) 0%,
            var(--chart-5) 50%,
            var(--primary) 100%
          )`
        }}
      ></span>
      
      {/* Badge content */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-4 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
        {text}
      </span>
    </div>
  )
}