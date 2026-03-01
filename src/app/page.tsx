import Approach from "@/component/Approach";
import Encryption from "@/component/Encryption";
import { ExpandableCardDemo } from "@/component/ExpandableCards";
import Hero from "@/component/Hero";
import { HeroParallaxDemo } from "@/component/HeroParallex";
import RecentProjects from "@/component/RecentProjects";
import Skills from "@/component/Skills";
import { TimelineDemo } from "@/component/Timeline";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="relative z-10">
        <Skills />
      </div>
      <RecentProjects />
      <Approach />
      <div className="relative z-20">
        <ExpandableCardDemo />
      </div>
      <TimelineDemo />
      <HeroParallaxDemo />
      <Encryption />
    </main>
  );
}
