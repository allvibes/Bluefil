// components/Navbar.tsx
'use client'
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black bg-opacity-50 backdrop-blur-sm">
      {/* Left Nav Links */}
      <div className="flex gap-6">
        <a href="#" className="hover:text-blue-400 transition">Home</a>
        <a href="#" className="hover:text-blue-400 transition">Benefits</a>
        <a href="#" className="hover:text-blue-400 transition">Shop</a>
        <a href="#" className="hover:text-blue-400 transition">Contact</a>
      </div>

      {/* Logo Center */}
      <div className="text-3xl font-bold text-white tracking-widest">Bluefil</div>

      {/* Right Icons + Button */}
      <div className="flex items-center gap-4">
        <FaSearch className="cursor-pointer hover:text-blue-300" />
        <FaUser className="cursor-pointer hover:text-blue-300" />
        <FaShoppingCart className="cursor-pointer hover:text-blue-300" />
        <button className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all">
          Buy Now
        </button>
      </div>
    </nav>
  )
}
