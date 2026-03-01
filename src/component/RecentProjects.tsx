"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "@/component/PinContainer";

const RecentProjects = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="py-20 z-30 items-center" id="projects">
      <div className="relative z-20 flex flex-col items-center mt-10 mb-10 px-4">
        <h1 className="heading text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">
          A Small Selection of{" "}
          <span
            className="text-purple-500 animate-pulse"
            style={{ color: "#8B5CF6" }}
          >
            Recent Projects
          </span>
        </h1>
        <div className="relative w-24 h-1 sm:w-88 md:w-170 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full mt-3"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 w-full max-w-6xl">
        {projects.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:min-h-130 h-100 flex items-center justify-center w-full"
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <PinContainer
            // title="GITHUB Repository"
            // href="https://github.com/abdulbasitbintory/Portfolio"
            >
              <div className="relative z-20 flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                ></div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-20 sticky bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </a>
        ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
