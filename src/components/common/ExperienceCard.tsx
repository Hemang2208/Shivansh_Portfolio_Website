"use client"

import { motion } from "framer-motion"
import type { Experience } from "@/lib/types"
import { fadeInLeft } from "@/lib/animations"

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      className={`p-6 rounded-2xl text-white ${experience.color} group hover:scale-[1.02] transition-transform duration-300`}
      initial={fadeInLeft.hidden}
      whileInView={fadeInLeft.visible}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <motion.h3
            className="text-xl font-bold mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {experience.company} | {experience.role}
          </motion.h3>
          <motion.p
            className="text-sm opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {experience.period}
          </motion.p>
        </div>
        {experience.current && (
          <motion.span
            className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
          >
            Current
          </motion.span>
        )}
      </div>

      <motion.p
        className="text-sm opacity-90 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        {experience.description}
      </motion.p>
    </motion.div>
  )
}
