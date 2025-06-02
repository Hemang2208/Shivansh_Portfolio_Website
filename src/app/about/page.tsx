"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ExperienceCard from "@/components/common/ExperienceCard";
import { Section } from "@/components/ui/Section";
import { EXPERIENCES } from "@/lib/constants";
import { fadeInUp, staggerContainer, pageTransition } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const arrowVariantsOut = {
    rest: { x: 0, y: 0, opacity: 1 },
    hover: { x: 20, y: -20, opacity: 0 },
  };

  const arrowVariantsIn = {
    rest: { x: -20, y: 20, opacity: 0 },
    hover: { x: 0, y: 0, opacity: 1 },
  };

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
        {/* Hero */}
        <Section className="py-32" containerSize="md">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-100 mt-50 text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            About
          </motion.h1>

          <motion.div
            className="prose prose-lg max-w-none space-y-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt ante tortor, eu tempus metus placerat eu. Cras nulla
              tortor, ullamcorper in auctor at, vehicula vitae justo. Aliquam
              quis ornare eros. Sed at ipsum gravida, laoreet libero vitae,
              fermentum nunc. Etiam vitae arcu non sem condimentum pellentesque.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt ante tortor, eu tempus metus placerat eu. Cras nulla
              tortor, ullamcorper in auctor at, vehicula vitae justo. Aliquam
              quis ornare eros.
            </p>
          </motion.div>
        </Section>

        {/* Image Gallery */}
        <Section className="py-20" containerSize="xl">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="h-64 bg-gray-200 rounded-2xl overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://placehold.co/256x400.png"
                alt="About image 1"
                width={400}
                height={256}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              className="h-64 bg-gray-200 rounded-2xl overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://placehold.co/256x400.png"
                alt="About image 2"
                width={400}
                height={256}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </Section>

        {/* Journey */}
        <Section className="py-20" containerSize="md">
          <motion.h2
            className="text-4xl font-bold mb-16"
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
          >
            Journey
          </motion.h2>

          <div className="space-y-6">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </Section>
      </main>

      {/* Contact Preview */}
      <Section className="py-32 bg-gray-50" containerSize="md">
        <motion.div
          className="text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold">Contact</h2>
          <div className="max-w-2xl mx-auto flex items-center justify-center space-x-4">
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach
              out. I{"'"}m always open to new opportunities and collaborations.
            </p>
            <Link href="/contact" className="inline-block">
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
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ArrowUpRight size={36} />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </motion.div>
  );
}
