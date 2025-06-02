"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/resume" className="text-gray-600 hover:text-black transition-colors">
            Resume
          </Link>

          <Link href="/" className="text-2xl font-bold text-black">
            SHIVI
          </Link>

          <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-16">
                <div className="text-2xl font-bold text-white">SHIVI</div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col space-y-8">
                <Link
                  href="/work"
                  className="text-4xl font-bold text-lime-400 hover:text-lime-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Work<span className="text-white">(13)</span>
                </Link>
                <Link
                  href="/about"
                  className="text-4xl font-bold text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-4xl font-bold text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-auto flex space-x-6">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <div className="w-8 h-8 border-2 border-current rounded-lg flex items-center justify-center">IG</div>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <div className="w-8 h-8 border-2 border-current rounded-lg flex items-center justify-center">LI</div>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <div className="w-8 h-8 border-2 border-current rounded-lg flex items-center justify-center">DR</div>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <div className="w-8 h-8 border-2 border-current rounded-lg flex items-center justify-center">BE</div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
