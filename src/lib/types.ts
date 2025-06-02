export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: ProjectCategory
  tags?: string[]
  link?: string
  featured?: boolean
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  color: string
  current?: boolean
}

export interface ContactInfo {
  phone: string
  email: string
  social: SocialLink[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export type ProjectCategory = "All" | "Mobile" | "Website" | "Others"

export interface NavigationItem {
  name: string
  href: string
  count?: number
}

import type { Variants as FramerVariants } from 'framer-motion'

export type AnimationVariants = FramerVariants
