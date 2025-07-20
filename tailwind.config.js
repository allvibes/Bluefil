/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        // Standard breakpoints (explicitly defined for clarity and control)
        'sm': '640px',   // Small devices (mobile landscape, phablets)
        'md': '768px',   // Medium devices (tablets)
        'lg': '1024px',  // Large devices (small laptops, desktops)
        'xl': '1280px',  // Extra large desktops
        '2xl': '1536px', // Ultra-wide desktops

        // Optional: Custom micro-breakpoint (useful for ultra small screens if needed)
        // 'xs': '375px',
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
      colors: {
        'bluefil': '#3b82f6', // Brand color for Bluefil
      }
    },
  },
  plugins: [],
}
