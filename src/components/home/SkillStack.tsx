"use client";
import StackItem from "@/components/home/StackItem";
import { stagger, motion } from "motion/react";

const container = {
  hidden: {
    transition: {
      duration: 0.4,
      delayChildren: stagger(0.07, { startDelay: 0.2 }),
    },
  },
  show: {
    transition: {
      duration: 0.4,
      delayChildren: stagger(0.05),
    },
  },
};

export default function TechnologyStack() {
  return (
    <section
      className="h-auto bg-[#0E0E13] pt-12 p-6 flex justify-center items-center scroll-mt-15 w-full"
      id="skill"
    >
      <section className="w-full">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex flex-col items-start w-full"
        >
          <span className="text-[10px] text-primary-container">
            SECTION_02 // TECH_STACK
          </span>
          <h2 className="font-display font-bold text-[60px] text-left scroll-pt-60">
            TECH_STACK
          </h2>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show">
          <StackItem
            title="WEB_DEVELOPMENT"
            percentage="85%"
            languages={[
              "javascript",
              "typescript",
              "react.js",
              "next.js",
              "tailwindcss",
              "django",
              "fastapi",
            ]}
          />
          <StackItem
            title="SYSTEM_ARCHITECTURE"
            percentage="65%"
            languages={["docker", "ci-cd", "rust"]}
          />
          <StackItem
            title="MOBILE_DEVELOPMENT"
            percentage="45%"
            languages={["dart", "flutter", "kotlin"]}
          />
        </motion.div>
      </section>
    </section>
  );
}
