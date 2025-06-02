import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

const Container = ({ className, size = "lg", children, ...props }: ContainerProps) => {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  }

  return (
    <div className={cn("mx-auto px-6", sizes[size], className)} {...props}>
      {children}
    </div>
  )
}

export { Container }
