"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <nav className="flex flex-col space-y-4">
            <Link href="/work" className="text-white hover:text-gray-300 transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About Me
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>

          <button
            onClick={scrollToTop}
            className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowUp size={20} />
          </button>

          <div className="flex flex-col space-y-4 text-right">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Dribbble
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Behance
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          © 2025 Shivansh. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
