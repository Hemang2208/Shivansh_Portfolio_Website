import type { Project, Experience, ContactInfo, NavigationItem } from "./types"

export const SITE_CONFIG = {
  name: "SHIVI",
  fullName: "Shivansh",
  title: "User Experience Designer",
  company: "VIVAX",
  description: "Personal portfolio of Shivansh - User Experience Designer at VIVAX",
  url: "https://shivansh.dev",
} as const

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Work", href: "/work", count: 13 },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const

export const CONTACT_INFO: ContactInfo = {
  phone: "+91 9555402667",
  email: "shivaanshsrv@gmail.com",
  social: [
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Dribbble", url: "#", icon: "dribbble" },
    { name: "Behance", url: "#", icon: "behance" },
  ],
} as const

export const PROJECTS: Project[] = [
  {
    id: "kioskee",
    title: "KIOSKEE",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "https://placehold.co/30x50.png",
    category: "Mobile",
    featured: true,
    tags: ["UI/UX", "Mobile App", "React Native"],
    link: "#",
  },
  {
    id: "amorr",
    title: "AMORR",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "https://placehold.co/30x50.png",
    category: "Website",
    featured: true,
    tags: ["Web Design", "React", "TypeScript"],
    link: "#",
  },
  {
    id: "epay-cop",
    title: "ePay Cop",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "https://placehold.co/30x50.png",
    category: "Mobile",
    tags: ["Mobile App", "Payment"],
  },
  {
    id: "grayy",
    title: "GRAYY",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "https://placehold.co/30x50.png",
    category: "Website",
    tags: ["Web Design", "Branding"],
  },
  {
    id: "hoops",
    title: "Hoops",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "/placeholder.svg?height=200&width=400",
    category: "Mobile",
    tags: ["Sports App", "Mobile"],
  },
  {
    id: "irl-social",
    title: "IRL Social",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "/placeholder.svg?height=200&width=400",
    category: "Website",
    tags: ["Social Media", "Web App"],
  },
] as const

export const EXPERIENCES: Experience[] = [
  {
    id: "vivax",
    company: "VIVAX",
    role: "User Experience Designer",
    period: "Feb 2024 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante tortor, ullamcorper in auctor at, vehicula vitae justo.",
    color: "bg-blue-600",
    current: true,
  },
  {
    id: "matrix",
    company: "Matrix Innovation",
    role: "User Interface Designer",
    period: "Feb 2023 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante tortor, ullamcorper in auctor at, vehicula vitae justo.",
    color: "bg-purple-600",
  },
  {
    id: "irl",
    company: "IRL Social",
    role: "UX Designer Intern",
    period: "Jan 2023 - Feb 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante tortor, ullamcorper in auctor at, vehicula vitae justo.",
    color: "bg-green-600",
  },
  {
    id: "amorr-intern",
    company: "AMORR",
    role: "UX Designer Intern",
    period: "Aug 2022 - Dec 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante tortor, ullamcorper in auctor at, vehicula vitae justo.",
    color: "bg-gray-600",
  },
] as const

export const PROJECT_CATEGORIES = ["All", "Mobile", "Website", "Others"] as const

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
} as const
