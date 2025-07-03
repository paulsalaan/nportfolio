import { useRef, useState } from "react";
import Header from "../components/Header";
import Hero from "../pages/Hero";
import About from "../pages/About";
import FloatingActions from "../components/FloatingActions";
import TechStack from "@/pages/TechStack";
import ViewAllStack from "../pages/ViewAllStacks";
import Project from "@/pages/Projects";
import Contact from "@/pages/Contact";

const MainLayout = () => {
  const [showStacks, setShowStacks] = useState(false);

  const aboutRef = useRef<HTMLElement | null>(null);
  const techRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLElement | null>,
    offset: number
  ) => {
    if (ref.current) {
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleViewAllClick = () => {
    setShowStacks(true);
  };

  return (
    <div className="flex flex-col gap-20 py-8 px-7 lg:px-9">
      <FloatingActions />

      <div className="min-h-screen flex flex-col">
        <Header
          onScroll={scrollToSection}
          refs={{ aboutRef, techRef, projectRef, contactRef }}
        />
        <Hero />
      </div>

      {/* sections */}
      <About ref={aboutRef} />
      <TechStack ref={techRef} onViewAllClick={handleViewAllClick} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />

      {/* view all stacks with animation */}
      {showStacks && <ViewAllStack />}
    </div>
  );
};

export default MainLayout;
