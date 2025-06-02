"use client"

import { motion } from "framer-motion"
import type { ProjectCategory } from "@/lib/types"
import { PROJECT_CATEGORIES } from "@/lib/constants"

interface FilterTabsProps {
  activeFilter: ProjectCategory
  onFilterChange: (filter: ProjectCategory) => void
}

export default function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {PROJECT_CATEGORIES.map((filter, index) => (
        <motion.button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeFilter === filter ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          {filter}
        </motion.button>
      ))}
    </div>
  )
}
