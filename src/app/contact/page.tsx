"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { fadeInUp, staggerContainer, pageTransition } from "@/lib/animations";

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />

      <main className="pt-24 px-4">
        <Section className="py-16 md:py-32" containerSize="md">
          <motion.div
            className="text-center space-y-12 md:space-y-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              variants={fadeInUp}
            >
              Let{"'"}s Connect
            </motion.h1>

            <motion.div
              className="space-y-12 md:space-y-16"
              variants={fadeInUp}
            >
              <div className="group hover:bg-white hover:shadow-xl rounded-2xl p-8 transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-600 mb-4 group-hover:text-blue-600 transition-colors">
                  Call me
                </h2>
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-3xl md:text-5xl font-bold hover:text-blue-600 transition-all duration-300 inline-flex items-center gap-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={40} className="text-blue-600" />
                  {CONTACT_INFO.phone}
                </motion.a>
              </div>

              <div className="group hover:bg-white hover:shadow-xl rounded-2xl p-8 transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-600 mb-4 group-hover:text-blue-600 transition-colors">
                  Email me
                </h2>
                <motion.a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-2xl md:text-4xl font-bold hover:text-blue-600 transition-all duration-300 inline-flex items-center gap-4 break-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={36} className="text-blue-600 flex-shrink-0" />
                  {CONTACT_INFO.email}
                </motion.a>
              </div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                  Ready to start a project?
                </h2>
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg"
                >
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </motion.div>
  );
}
