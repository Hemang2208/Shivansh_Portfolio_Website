"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      theme="dark" // Change to "light" if you prefer light theme
      richColors
      expand={false}
      position="bottom-right"
      duration={4000}
      closeButton
      {...props}
    />
  )
}

export { Toaster }
