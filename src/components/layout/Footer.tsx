"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { NAVIGATION_ITEMS, CONTACT_INFO, SITE_CONFIG } from "@/lib/constants"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function Footer() {
  const scrollToTop = useScrollToTop()

  return (
    <motion.footer
      className="bg-black text-white py-12"
      initial={fadeInUp.hidden}
      whileInView={fadeInUp.visible}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.nav className="flex flex-col space-y-4" variants={fadeInUp}>
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 hover:translate-x-1 transform"
              >
                {item.name}
                {item.name === "Work" && " Me"}
              </Link>
            ))}
          </motion.nav>

          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-200 hover:scale-110"
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>

          <motion.div className="flex flex-col space-y-4 text-right" variants={fadeInUp}>
            {CONTACT_INFO.social.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="text-white hover:text-gray-300 transition-colors duration-200 hover:translate-x-1 transform"
                whileHover={{ x: -5 }}
              >
                {social.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          © 2025 {SITE_CONFIG.fullName}. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}
