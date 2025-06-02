"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

const arrowVariantsOut = {
  rest: { x: 0, y: 0, opacity: 1 },
  hover: { x: 20, y: -20, opacity: 0 },
};

const arrowVariantsIn = {
  rest: { x: -20, y: 20, opacity: 0 },
  hover: { x: 0, y: 0, opacity: 1 },
};

export default function ProjectCard({
  project,
  index = 0,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={fadeInUp.hidden}
      whileInView={fadeInUp.visible}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className={`group cursor-pointer ${featured ? "lg:p-8" : ""}`}>
        {project.image && (
          <motion.div
            className={`w-full bg-gray-200 rounded-xl mb-4 overflow-hidden ${
              featured ? "h-64" : "h-48"
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={25}
              height={25}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        )}

        <div className="flex items-start justify-between">
          <div className="flex-1">
            <motion.h3
              className={`font-bold mb-2 group-hover:text-blue-600 transition-colors duration-200 ${
                featured ? "text-2xl" : "text-xl"
              }`}
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {project.tags && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: tagIndex * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}
          </div>

          {project.link && (
            <Link href={project.link || "/contact"} className="inline-block">
              <motion.div
                className="group relative w-12 h-12 bg-[#4724F5] text-[#BAFF2F] rounded-full shadow-lg overflow-hidden flex items-center justify-center"
                initial="rest"
                whileHover="hover"
                animate="rest"
                whileTap={{ scale: 0.95 }}
              >
                {/* Arrow moving OUT ↗️ */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  variants={arrowVariantsOut}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ArrowUpRight size={36} />
                </motion.div>
                {/* Arrow moving IN ↗️ from ↙️ */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-0"
                  variants={arrowVariantsIn}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <ArrowUpRight size={36} />
                </motion.div>
              </motion.div>
            </Link>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
