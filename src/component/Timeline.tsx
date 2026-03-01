import React from "react";
import { Timeline } from "@/component/ui/TimelineUi";

export function TimelineDemo() {
  const data = [
    {
      id: 1,
      title: "2024 & Onwards",
      content: (
        <React.Fragment key="2024-root">
          <div>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Pursuing a Bachelor of Science in Software Engineering (BSSE) at
              SZABIST Karachi (2024 to 2028), where I&apos;m building a strong
              foundation in core computer science concepts and modern software
              development practices.
              <br />
              📚 40+ courses spanning Programming, Data Structures & Algorithms,
              Databases, Artificial Intelligence, Web & Mobile App Development,
              and Software Project Management.
              <br />
              💻 Hands-on projects in Java, Python, JavaScript, Next.js, React,
              and Flutter, applying theoretical knowledge to real-world
              scenarios.
              <br />
              🏆 Actively participating in tech events, hackathons, and
              university societies, with notable achievements including a 2nd
              position in a GDGOC quiz competition and participation in
              Hackathon-25.
              <br />
              🤝 Collaborating with peers in team-based projects that simulate
              industry workflows, version control, and Agile methodologies.
              <br />
              📈 Continuously aiming to maintain a GPA above 3.5, reflecting
              consistent academic performance. 🌟 Developing a blend of
              problem-solving, leadership, and innovation skills that prepare me
              to tackle industry challenges.
              <br />
              This journey is not just about earning a degree — it&apos;s about
              evolving into a skilled, versatile, and impactful software
              engineer ready to contribute to the tech industry. 🚀
              <br />
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "szabist.jpeg",
                "szabist2.png",
                "szabist3.png",
                "szabist4.jpg",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="startup template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ),
    },

    {
      id: 2,
      title: "Early 2021 to 2022",
      content: (
        <React.Fragment key="early2023-root">
          <div>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Completed Intermediate in Computer Science (ICS) from Pakistan
              Shipowners&apos; Govt College (2021 to 2022), where I developed a
              strong base in programming, computational thinking, and
              problem-solving.
              <br />
              📚 Studied 6+ core subjects, including Programming Fundamentals,
              Mathematics, Physics, and Statistics, with Computer Science as my
              major.
              <br />
              💻 Learned C++ programming, covering topics such as loops,
              functions, arrays, and object-oriented programming basics.
              <br />
              🧠 Strengthened analytical skills through mathematics &
              logic-based problem solving, essential for advanced CS studies.
              <br />
              🏆 Achieved first-class academic performance, consistently scoring
              above 75% in core technical subjects. 🤝 Participated in
              group-based assignments and practical lab work, simulating
              real-world project collaboration.
              <br />
              🚀 Built the foundational knowledge that later fueled my interest
              in software engineering, AI, and web development.
              <br />
              This phase served as the launchpad for my tech journey, giving me
              the skills and confidence to pursue a BS in Software Engineering
              and dive deeper into the world of programming and technology.
              <br />
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["ship.png", "ship2.png"].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ),
    },

    {
      id: 3,
      title: "High School ended in 2021",
      content: (
        <React.Fragment key="changelog-root">
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Completed Matriculation in Computer Science from MIDasia
              Foundation Academy (2019 till 2021), where I built the early
              foundation of my tech journey.
              <br />
              📚 Studied 8+ academic subjects, with a focus on Computer Science,
              Mathematics, and Physics.
              <br />
              💻 Gained first exposure to programming fundamentals using
              languages like QBASIC and C++, learning logic building,
              algorithms, and structured coding.
              <br />
              🧠 Developed problem-solving and analytical thinking skills
              through lab experiments, coding tasks, and math exercises.
              <br />
              🏆 Achieved 82% overall score, placing in the top tier of my
              class.
              <br />
              🤝 Worked on team projects and assignments, learning the value of
              collaboration in achieving technical goals.
              <br />
              🚀 Built a strong academic and technical base that fueled my
              passion for software development, AI, and emerging technologies.
              <br />
              This stage wasn&apos;t just about passing exams—it was the spark
              that ignited my long-term vision of becoming a multi-skilled
              software engineer.
              <br />
            </p>

            {/* <div className="mb-8 space-y-1">
              {[
                "Card grid component",
                "Startup template Aceternity",
                "Random file upload lol",
                "Himesh Reshammiya Music CD",
                "Salman Bhai Fan Club registrations open",
              ].map((txt) => (
                <div
                  key={txt}
                  className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300"
                >
                  ✅ {txt}
                </div>
              ))}
            </div> */}

            <div className="grid grid-cols-2 gap-4">
              {[
                "midasia.png",
                "midasia2.png",
                "midasia4.jpg",
                "midasia3.jpg",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="template"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
