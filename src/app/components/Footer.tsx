'use client'

import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaXTwitter, FaTiktok, FaFacebookF } from 'react-icons/fa6'

const footerLinks = [
  {
    title: 'Customer Support',
    links: ['Contact Us', 'FAQs', 'Shipping Info', 'Returns', 'Track Order'],
  },
  {
    title: 'Company',
    links: ['About Bluefil', 'Careers', 'Charity Events', 'Sponsorships', 'Marketing'],
  },
  {
    title: 'Services',
    links: ['Blueberry Farms', 'Fruit Lab', 'Wholesale', 'Nutrition Tips', 'Partners'],
  },
  {
    title: 'Connect',
    links: ['TikTok', 'Meta', 'X (Twitter)', 'Instagram', 'LinkedIn'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {footerLinks.map((section, i) => (
          <div key={i}>
            <h4 className="text-lg font-bold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:text-white cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Bluefil. All rights reserved.</p>
        
        {/* Socials */}
        <div className="flex gap-4 text-lg text-gray-400">
          <FaInstagram className="hover:text-white cursor-pointer transition-colors" />
          <FaTiktok className="hover:text-white cursor-pointer transition-colors" />
          <FaXTwitter className="hover:text-white cursor-pointer transition-colors" />
          <FaFacebookF className="hover:text-white cursor-pointer transition-colors" />
          <FaLinkedin className="hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  )
}
