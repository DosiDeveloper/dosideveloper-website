import ContactMe from "@/components/home/ContactMe";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import TechnologyStack from "@/components/home/SkillStack";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <TechnologyStack />
      <ContactMe />
    </>
  );
}