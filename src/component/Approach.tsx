"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./Projects";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <div className="z-60 text-5xl mb-6 sm:mb-8 md:text-7xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-linear-to-br from-purple-500 to-cyan-300">
        My{" "}
        <span className="text-transparent sm:mb-10 bg-clip-text bg-linear-to-br from-purple-500 to-cyan-300 animate-pulse">
          Approach
        </span>
      </div>
      <p className="text-base sm:text-2xl text-center text-gray-400 max-w-5xl mx-auto px-2 mb-10 sm:mb-12 md:mb-16">
        As a passionate software engineering student, my approach combines
        academic learning with hands-on development. I am dedicated to building
        robust and scalable applications, constantly exploring new technologies
        and refining my problem-solving skills to create efficient and
        innovative software solutions.
      </p>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Requirement Analysis & Architecture"
          icon={<AceternityIcon order="Phase 1" />}
          des="I start by thoroughly understanding the project requirements and technical goals.
          I then design the software architecture, choosing the right technologies and frameworks.
          This phase involves planning the system's structure, data flow, and key components to build a
          solid foundation."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Agile Development & Implementation"
          icon={<AceternityIcon order="Phase 2" />}
          des="I build the software using modern development practices.
          I write clean, well-structured code, often using version control
          (like Git) to track changes. I develop features iteratively,
          regularly testing my work and integrating different parts of
          the application. I keep track of progress and milestones throughout
          this phase."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Testing, Deployment & Optimization"
          icon={<AceternityIcon order="Phase 3" />}
          des="I ensure the software works flawlessly by performing various tests
          (like unit and integration tests). Once tested, I prepare the application
          for release by deploying it to servers or cloud platforms.
          I also focus on optimizing its performance, security, and reliability
          for the best user experience."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}

const Card = ({ title, icon, children, des }: CardProps) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/0.2 group/canvas-card flex items-center justify-center
       dark:border-white/0.2  max-w-sm w-full mx-auto p-4 relative lg:h-140 rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-1px ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
