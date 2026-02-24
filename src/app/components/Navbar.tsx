'use client'

import { useState } from 'react'
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import  Container from './Container'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-sm text-white">

      <Container className="flex items-center justify-between py-4">

        {/* Left - Nav Links */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Benefits</a>
          <a href="#" className="hover:text-blue-400 transition">Shop</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Logo */}
        <div className="cursor-pointer text-3xl font-bold tracking-widest">
          Bluefil
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          <FaSearch className="cursor-pointer hover:text-blue-300" />
          <FaUser className="cursor-pointer hover:text-blue-300" />
          <FaShoppingCart className="cursor-pointer hover:text-blue-300" />

          <button className="cursor-pointer ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full">
            Buy Now
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
          </button>
        </div>

      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <Container className="flex flex-col items-center gap-6 py-8 text-lg">

            <a href="#">Home</a>
            <a href="#">Benefits</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>

          </Container>
        </div>
      )}

    </nav>
  )
}