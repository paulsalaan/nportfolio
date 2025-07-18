import { useRef, useEffect, useState } from "react";
import LoadingScreen from "../layout/LoadingScreen";
import Header from "../components/Header";
import Hero from "../pages/Hero";
import About from "../pages/About";
import FloatingActions from "../components/FloatingActions";
import TechStack from "@/pages/TechStack";
import ViewAllStack from "../pages/ViewAllStacks";
import Project from "@/pages/Projects";
import Contact from "@/pages/Contact";

const MainLayout: React.FC = () => {
  const [showStacks, setShowStacks] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    const alreadyVisited = sessionStorage.getItem("hasVisited");
    return !alreadyVisited;
  });

  const aboutRef = useRef<HTMLElement | null>(null);
  const techRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 3000); // adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

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
    <>
      {/* loading-screen  */}
      <LoadingScreen isVisible={isLoading} />
      {/* Only render content when not loading, or fade in using opacity */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col gap-20 py-8 px-7 lg:px-9">
          <FloatingActions />

          <div className="min-h-screen flex flex-col">
            <Header
              onScroll={scrollToSection}
              refs={{ aboutRef, techRef, projectRef, contactRef }}
            />
            <Hero />
          </div>

          <About ref={aboutRef} />
          <TechStack ref={techRef} onViewAllClick={handleViewAllClick} />
          <Project ref={projectRef} />
          <Contact ref={contactRef} />

          {showStacks && <ViewAllStack />}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
