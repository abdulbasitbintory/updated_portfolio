import React from "react";
import HeroContent from "@/component/ui/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] w-full overflow-hidden"
      id="about-me"
    >
      <HeroContent />
    </div>
  );
};

export default Hero;
