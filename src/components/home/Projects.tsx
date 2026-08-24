import { Suspense } from "react";
import ProjectSkeleton from "./ProjectSkeleton";
import * as motion from "motion/react-client";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section
      className="p-4 sm:p-6 md:p-8 min-h-dvh flex flex-col items-center scroll-mt-15 w-full"
      id="project"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col items-start w-full"
      >
        <span className="text-[10px] text-primary-container">
          SECTION_01 // PORTFOLIO
        </span>
        <div className="flex justify-between items-end-safe w-full">
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-left scroll-pt-60">
            SELECTED_PROJECTS
          </h2>
          <div className="flex flex-col gap-1 items-end">
            <span className="text-[10px] w-full hidden lg:block text-primary-container pb-1 border-b text-right">
              COORD: 40.7128° N <br />
              LOC: DEV_NODE_01
            </span>
          </div>
        </div>
      </motion.div>
      <motion.section
        initial={{
          opacity: 0,
          transition: {
            duration: 0.4,
          },
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.4,
          },
        }}
        className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full"
      >
        <Suspense
          fallback={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <ProjectSkeleton key={index} isLarge={index % 3 === 0} />
              ))}
            </motion.div>
          }
        >
          <ProjectList />
        </Suspense>
      </motion.section>
    </section>
  );
}
