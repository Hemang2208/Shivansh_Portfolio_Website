"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/common/ProjectCard";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { PROJECTS, SITE_CONFIG } from "@/lib/constants";
import { fadeInUp, staggerContainer, pageTransition } from "@/lib/animations";
import Image from "next/image";

export default function Home() {
  const featuredProjects = PROJECTS.filter((project) => project.featured);

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
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <Section className="py-32" containerSize="md">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-8" variants={fadeInUp}>
              <div className=" mx-auto mb-8 rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                <Image
                  src="https://placehold.co/600x400.png"
                  width={600}
                  height={400}
                  alt="Profile Photo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div className="text-center space-y-4" variants={fadeInUp}>
              <p className="text-gray-600 text-lg">Current</p>
              <h1 className="text-3xl md:text-4xl font-bold text-balance">
                {SITE_CONFIG.title} at {SITE_CONFIG.company}
              </h1>
            </motion.div>
          </motion.div>
        </Section>

        {/* Featured Works */}
        <Section className="py-32">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8">Featured Works</h2>
            <Link href="/work">
              <Button
                className="rounded-full hover:scale-105 transition-transform duration-300"
                variant="custom"
                size="lg"
              >
                Discover All
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured
              />
            ))}
          </div>
        </Section>

        {/* About Preview */}
        <Section className="py-32 bg-white" containerSize="md">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <Button
                className="rounded-full hover:scale-105 transition-transform duration-300"
                variant="custom"
                size="lg"
              >
                About
              </Button>
            </Link>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mt-10 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt ante tortor, eu tempus metus placerat eu. Cras nulla
              tortor, ullamcorper in auctor at, vehicula vitae justo. Aliquam
              quis ornare eros.
            </p>
          </motion.div>
        </Section>

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
                out. I{"'"}m always open to new opportunities and
                collaborations.
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
      </main>

      <Footer />
    </motion.div>
  );
}
