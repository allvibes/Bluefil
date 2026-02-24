'use client'

import Container from './Container'
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaTiktok,
  FaFacebookF
} from 'react-icons/fa6'

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
    <footer className="bg-black text-white py-16">

      <Container>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:text-white cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bluefil. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0 text-gray-400">

            <FaInstagram className="hover:text-white cursor-pointer"/>
            <FaTiktok className="hover:text-white cursor-pointer"/>
            <FaXTwitter className="hover:text-white cursor-pointer"/>
            <FaFacebookF className="hover:text-white cursor-pointer"/>
            <FaLinkedin className="hover:text-white cursor-pointer"/>

          </div>

        </div>

      </Container>

    </footer>
  )
}
