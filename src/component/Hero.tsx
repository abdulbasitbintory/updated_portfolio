import React from "react";
import HeroContent from "@/component/ui/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden"
      id="about-me"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
      }}
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <HeroContent />
    </div>
  );
};

export default Hero;
