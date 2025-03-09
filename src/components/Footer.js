"use client"

import { Link } from "react-router-dom"

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <footer className="bg-[#1666ba] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">School of Leadership and Diplomacy</h3>
            <p className="text-gray-300 mb-4">
              Empowering tomorrow's leaders and diplomats with knowledge, skills, and global perspective.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© 2024 School of Leadership and Diplomacy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

