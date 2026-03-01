"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./ui/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null),
  );
  return (
    <>
      <div id="certifications" />
      <div className="z-60 text-4xl sm:mb-8 md:text-7xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-linear-to-br from-purple-500 to-cyan-300">
        Small Selection Of
        <br />
        <span className="text-transparent sm:mb-10 bg-clip-text bg-linear-to-br from-purple-500 to-cyan-300 animate-pulse">
          Certifications
        </span>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-40"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="mt-17 fixed inset-0  grid place-items-center z-100">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full  grid h-auto sm:h-full grid-cols-1 md:grid-cols-2 items-start gap-4 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer "
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 z-40 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Cybersecurity Professional Certificate",
    title: "Google Cybersecurity Professional Certificate",
    src: "cyber.png",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          Thrilled to announce that I have successfully completed the Google
          Cybersecurity Professional Certificate on Coursera! 🏆 <br />
          Over the past 6 months, I&apos;ve gained hands-on experience in
          cybersecurity through 8 comprehensive courses, covering:
          <br />
          ✅ 1. Automate Cybersecurity Tasks with Python 🐍
          <br />
          ✅ 2. Assets, Threats, and Vulnerabilities 🔍
          <br />
          ✅ 3. Foundations of Cybersecurity 🛡️
          <br />
          ✅ 4. Put It to Work: Prepare for Cybersecurity Jobs 🎯
          <br />
          ✅ 5. Play It Safe: Manage Security Risks ⚠️
          <br />
          ✅ 6. Tools of the Trade: Linux and SQL 🖥️
          <br />
          ✅ 7. Connect and Protect: Networks and Network Security 🌐
          <br />
          ✅ 8. Sound the Alarm: Detection and Response 🚨
          <br />
          These courses provided deep insights into:
          <br />
          🔹 Threat detection & incident response
          <br />
          🔹 Security risk management & network protection
          <br />
          🔹 SIEM tools, Linux, SQL & Python for cybersecurity
          <br />
          🔹 Cyber defense strategies & best practices
          <br />
          Cybersecurity is more crucial than ever, and I&apos;m excited to apply
          these skills in real-world challenges. Huge thanks to Google &
          Coursera for this invaluable learning experience!
          <br />
          Let&apos;s connect and discuss the ever-evolving world of
          cybersecurity! 🔥
          <br />
        </p>
      );
    },
  },
  {
    description: "Machine Learning Specialization",
    title: "Stanford Machine Learning Specialization",
    src: "ml.png",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          🎉 Achieved a Major Milestone in Machine Learning! 🤖📈
          <br />
          Excited to share that I’ve successfully completed the Machine Learning
          Specialization by DeepLearning.AI & Stanford University! 🏆 This
          journey has been an incredible deep dive into the core of ML,
          covering:
          <br />
          ✅ Supervised Learning: Linear & logistic regression, decision trees,
          and ensemble methods
          <br />
          ✅ Advanced Learning Algorithms: Neural networks, TensorFlow, and deep
          learning fundamentals
          <br />
          ✅ Unsupervised Learning & Reinforcement Learning: Clustering, anomaly
          detection, recommender systems, and RL
          <br />
          This specialization has equipped me with hands-on experience and the
          best practices to tackle real-world AI challenges. Looking forward to
          applying these skills in impactful projects! 🚀
          <br />
        </p>
      );
    },
  },

  {
    description: "5-Day Flutter Bootcamp",
    title: "GDGOC PIEAS Flutter Bootcamp",
    src: "flutterboot.png",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          🚀 Completed the Flutter Bootcamp! 🎉 After an intense 5-day journey,
          I&apos;m thrilled to have earned my Flutter Bootcamp certificate! 🏆
          This experience helped me dive deep into Flutter app development,
          UI/UX design, and state management, equipping me with the skills to
          build cross-platform mobile applications.
          <br />
          A huge thanks to Google Developer Groups on Campus PIEAS and the
          mentors Abu Bakar and Abdul Sami for organizing this amazing learning
          experience. Excited to apply this knowledge in real-world projects!
          💡. <br />
        </p>
      );
    },
  },
  {
    description: "5-Day DSA Fundamentals Bootcamp",
    title: "MLSA MAJU DSA Fundamentals Bootcamp 2025",
    src: "dsaboot.png",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          Thrilled to receive this Certificate of Appreciation for my
          participation in the Infyma AI Training & Hackathon 2025! 🎓 <br />
          This journey was an incredible learning experience where I got
          hands-on exposure to AI problem-solving, machine learning techniques,
          and real-world applications. <br />
          From brainstorming innovative ideas to collaborating with like-minded
          individuals, every moment was filled with growth and challenges.
          <br />
          A huge thanks to Microsoft Learn Student Ambassadors for organizing
          this amazing learning experience. Excited to apply this knowledge in
          real-world projects! 💡
          <br />
        </p>
      );
    },
  },
  {
    description: "UI/UX Designing (Figma) 2.0 Advanced Edition",
    title: "IEEE Szabist Chapter UI/UX Workshop",
    src: "ieeeeve.jpeg",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          🚀 Leveled Up in UI/UX Design! 🎨💻
          <br />
          I'm excited to share that I&apos;ve successfully completed the UI/UX
          Designing (Figma) 2.0 Advanced Edition workshop hosted by the IEEE
          Szabist Chapter.
          <br />
          This workshop helped me dive deeper into advanced UI/UX concepts and
          sharpen my skills in Figma, all thanks to the phenomenal session led
          by Mashhood Unnabi — an incredible instructor who made complex
          concepts feel simple and practical. 👨‍🏫✨
          <br />
          📅 Dates: March 16th & 23rd, 2025 <br />
          🧠 Skills Learned: Wireframing | Prototyping | Visual Design |
          User-Centered Thinking.
          <br />
          A huge thanks to IEEE Szabist Chapter for organizing this amazing
          learning experience. Excited to apply this knowledge in real-world
          projects! 💡
          <br />
        </p>
      );
    },
  },
  {
    description: "HackFest X Datathon 2025",
    title: "GDGOC IBA HackFest X Datathon",
    src: "ibaboot.png",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          🚀 Certificate Unlocked: Hackfest x Datathon 2025! 🎉
          <br />
          Proud to share that I have received my Certificate of Participation
          for actively taking part in the Competitive Programming module at the
          IBA Hackfest x Datathon, held on 19th & 20th April 2025! 🏆✨
          <br />
          This 2-day journey was filled with coding challenges, real-world
          problem-solving, innovative workshops, and invaluable learning
          experiences. 🧠💻
          <br />
          Grateful for the opportunity to grow, compete, and connect with such a
          passionate tech community! 🙌
          <br />
          A huge thanks to the IBA Data Science Society and all the organizers
          for putting together such an amazing event. 🚀
          <br />
          Onwards to more challenges and bigger achievements! 💡🔥
          <br />
        </p>
      );
    },
  },
  {
    description: "Career Catalyst Workshop",
    title: "Aisec Career Catalyst Workshop",
    src: "aisec.png",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          🌟 Proud to have been a part of Career Catalyst by AIESEC in Karachi
          South at Greenwich University, a powerful initiative that focused on
          ✨ career readiness, global exposure, and professional development.
          <br />
          Each session offered actionable insights that helped me reflect, grow,
          and sharpen the skills needed for the evolving professional world.
          💼🌍
          <br />
          Grateful for this experience and excited to apply what I&apos;ve
          learned as I continue building my career with purpose and passion. 🚀
          <br />
          A huge thanks to AIESEC in Karachi South for organizing this amazing
          learning experience. Excited to apply this knowledge in real-world
          projects! 💡
          <br />
        </p>
      );
    },
  },
  {
    description: "AI Workshop",
    title: "DataCrumbs AI Workshop",
    src: "datacrumbsai1.jpeg",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          🚀 Powering Up My AI Journey!
          <br />
          Excited to share that I recently completed the Kaggle Masterclass
          Learn, Compete, Grow, powered by DataCrumbs!
          <br />
          🌟Over the course of this dynamic workshop, I:
          <br />
          🔹 Built a standout Kaggle profile
          <br />
          🔹 Explored real-world datasets
          <br />
          🔹 Submitted hands-on notebooks
          <br />
          🔹 Participated in discussions and mini competitions
          <br />
          Thanks to the DataCrumbs team Abis Hussain Syed and our mentors for
          curating such a powerful learning experience centered around AI,
          Machine Learning, and Data Science.💡
          <br />
          Let the data-driven journey continue! 📊💻
          <br />
          A huge thanks to DataCrumbs for organizing this amazing learning
          experience. Excited to apply this knowledge in real-world projects! 💡
          <br />
        </p>
      );
    },
  },
  {
    description: "Career Counseling Webinar",
    title: "DataCrumbs Career Counseling Webinar",
    src: "datacrumbsai.jpeg",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          🚀 From Job Search to Job Offer! 🎯
          <br />
          Excited to share my Certificate of Participation for attending the
          "How to Land Your Dream Job" webinar! 💼✨ This insightful session,
          hosted by DataCrumbs and supported by Changemakers (NED University
          Chapter), provided invaluable guidance on navigating the job search
          process effectively.
          <br />
          A huge shoutout to Syeda Tarum Abbas , our special speaker, for
          sharing expert strategies on resume building, interview techniques,
          and career growth.
          <br />
          🔍 Key Takeaways:
          <br />
          ✅ How to break free from the never-ending job search cycle
          <br />
          ✅ Resume & LinkedIn optimization for better visibility
          <br />
          ✅ Interview preparation & salary negotiation tips
          <br />
          ✅ The mindset shift needed for career success
          <br />
          Feeling more confident and ready to apply these strategies in my
          career journey! 🚀
          <br />
        </p>
      );
    },
  },
  {
    description: "AI Training & Hackathon",
    title: "Infyma AI Training & Hackathon 2025",
    src: "mlboot.png",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    content: () => {
      return (
        <p>
          Thrilled to receive this Certificate of Appreciation for my
          participation in the Infyma AI Training & Hackathon 2025! 🎓 This
          journey was an incredible learning experience where I got hands-on
          exposure to AI problem-solving, machine learning techniques, and
          real-world applications. From brainstorming innovative ideas to
          collaborating with like-minded individuals, every moment was filled
          with growth and challenges.
        </p>
      );
    },
  },
];
