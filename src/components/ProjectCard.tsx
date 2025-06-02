"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  className = "",
}: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} className={`project-card ${className}`}>
      {image && (
        <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>

          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {link && (
          <a
            href={link}
            className="p-2 cursor-pointer bg-[#4724F5] text-[#BAFF2F] text-xl rounded-full shadow-lg transition-colors ml-4"
          >
            <ArrowUpRight size={36} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
