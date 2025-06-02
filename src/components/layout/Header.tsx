"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { SITE_CONFIG, NAVIGATION_ITEMS, CONTACT_INFO } from "@/lib/constants"
import { fadeInDown, slideInFromBottom } from "@/lib/animations"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100"
        initial={fadeInDown.hidden}
        animate={fadeInDown.visible}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/resume" className="text-gray-600 hover:text-black transition-colors duration-200 font-medium">
            Resume
          </Link>

          <Link href="/" className="text-2xl font-bold text-black hover:scale-105 transition-transform duration-200">
            {SITE_CONFIG.name}
          </Link>

          <motion.button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
            onClick={closeMenu}
          >
            <motion.div
              className="flex flex-col h-full p-8"
              initial={slideInFromBottom.hidden}
              animate={slideInFromBottom.visible}
              exit={slideInFromBottom.hidden}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-16">
                <motion.div className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
                  {SITE_CONFIG.name}
                </motion.div>
                <motion.button
                  onClick={closeMenu}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <nav className="flex flex-col space-y-8">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-4xl font-bold transition-colors duration-200 ${
                        item.name === "Work" ? "text-lime-400 hover:text-lime-300" : "text-white hover:text-gray-300"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.name}
                      {item.count && <span className="text-white">({item.count})</span>}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-auto flex space-x-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {CONTACT_INFO.social.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-8 h-8 border-2 border-current rounded-lg flex items-center justify-center text-xs font-bold">
                      {social.name.slice(0, 2).toUpperCase()}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
