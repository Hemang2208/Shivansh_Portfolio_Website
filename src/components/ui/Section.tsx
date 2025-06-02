"use client"

import type React from "react"
import type { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Container } from "./Container"
import { fadeInUp } from "@/lib/animations"

interface SectionProps extends Omit<HTMLMotionProps<"section">, "animate"> {
  children: React.ReactNode
  containerSize?: "sm" | "md" | "lg" | "xl"
  animate?: boolean
}

const Section = ({ className, children, containerSize = "lg", animate = true, ...props }: SectionProps) => {
  if (!animate) {
    // When not animated, only pass safe HTML props
    const safeHtmlProps: React.HTMLAttributes<HTMLElement> = {
      className: cn("py-20", className),
      id: props.id,
      role: props.role,
      style: props.style as React.CSSProperties,
      "aria-label": props["aria-label"],
    }

    return (
      <section {...safeHtmlProps}>
        <Container size={containerSize}>{children}</Container>
      </section>
    )
  }

  return (
    <motion.section
      className={cn("py-20", className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </motion.section>
  )
}

export { Section }
