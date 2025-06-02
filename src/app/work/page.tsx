"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/common/ProjectCard";
import FilterTabs from "@/components/common/FilterTabs";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";
import type { ProjectCategory } from "@/lib/types";
import { fadeInUp, staggerContainer, pageTransition } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS.filter((project) => !project.featured)
      : PROJECTS.filter(
          (project) => project.category === activeFilter && !project.featured
        );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

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
        <Section className="py-32" containerSize="xl">
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Work<span className="text-gray-400">(13)</span>
          </motion.h1>
        </Section>

        {/* Highlights */}
        <Section className="py-20" containerSize="xl">
          <motion.h2
            className="text-4xl font-bold mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Highlights
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured
              />
            ))}
          </motion.div>
        </Section>

        {/* Archive */}
        <Section className="py-20" containerSize="xl">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
          >
            Archive
          </motion.h2>

          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeFilter} // Re-trigger animation on filter change
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {hasMoreProjects && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button variant="accent" size="lg" onClick={loadMore}>
                Load More
              </Button>
            </motion.div>
          )}
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
