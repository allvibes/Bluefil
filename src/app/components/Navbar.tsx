// components/Navbar.tsx
'use client'

import { useState } from 'react'
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black bg-opacity-50 backdrop-blur-sm text-white">
      
      {/* Left - Nav Links (Desktop Only) */}
      <div className="hidden md:flex gap-6">
        <a href="#" className="hover:text-blue-400 transition">Home</a>
        <a href="#" className="hover:text-blue-400 transition">Benefits</a>
        <a href="#" className="hover:text-blue-400 transition">Shop</a>
        <a href="#" className="hover:text-blue-400 transition">Contact</a>
      </div>

      {/* Logo Center */}
      <div className="text-3xl font-bold tracking-widest">Bluefil</div>

      {/* Right - Icons + Button (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <FaSearch className="cursor-pointer hover:text-blue-300" />
        <FaUser className="cursor-pointer hover:text-blue-300" />
        <FaShoppingCart className="cursor-pointer hover:text-blue-300" />
        <button className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all">
          Buy Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-8 text-lg transition-all duration-300">
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Benefits</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Shop</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</a>

          <div className="flex gap-6 mt-4">
            <FaSearch className="cursor-pointer hover:text-blue-300" />
            <FaUser className="cursor-pointer hover:text-blue-300" />
            <FaShoppingCart className="cursor-pointer hover:text-blue-300" />
          </div>

          <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all">
            Buy Now
          </button>
        </div>
      )}

    </nav>
  )
}
