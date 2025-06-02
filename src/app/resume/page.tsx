"use client"

import { motion } from "framer-motion"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { fadeInUp, pageTransition } from "@/lib/animations"

export default function Resume() {
  return (
    <motion.div
      className="min-h-screen"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />

      <main className="pt-20">
        <Section className="py-32" containerSize="md">
          <motion.div
            className="text-center space-y-12"
            initial={fadeInUp.hidden}
            animate={fadeInUp.visible}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <motion.div
                className="w-24 h-24 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FileText size={40} className="text-blue-600" />
              </motion.div>

              <h1 className="text-6xl md:text-7xl font-bold">Resume</h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Download my latest resume to learn more about my experience, skills, and achievements in user experience
                design.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="accent" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4">Quick Overview</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                  <p className="text-gray-600 text-sm">3+ years in UX/UI Design</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Current Role</h4>
                  <p className="text-gray-600 text-sm">UX Designer at VIVAX</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Specialization</h4>
                  <p className="text-gray-600 text-sm">Mobile & Web Design</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </motion.div>
  )
}
