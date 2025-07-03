import { AnimatedLink } from "@/components/AnimatedLink";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const ViewAllStacks = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const timeout = setTimeout(() => {
      setVisible(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  const backendTools = [
    "Python",
    "Node.js",
    "Express.js",
    "Postgre SQL",
    "MySQL",
    "Cassandra",
    "MongoDB",
  ];

  const frontendTools = [
    "Javascript",
    "Typescript",
    "Next.js",
    "Vue.js",
    "Vite",
    "Prettier",
    "React",
    "Tailwind",
  ];

  const designAndDevTools = [
    "Git",
    "Github",
    "Figma",
    "Slack",
    "Trello",
    "Notion",
    "ClickUp",
    "Discord",
    "VS Code",
  ];

  return (
    <>
      <section
        className="bg-background px-7 py-7"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <div className="flex items-center justify-between mb-10">
          <AnimatedLink to="/" text="BACK TO HOME" textSize="text-[1rem]" />
          <h1 className="uppercase text-[1rem]">Tech Stack</h1>
        </div>

        <div className="">
          <h1 className="text-text text-[2rem] mb-4 lg:text-[2.5rem]">
            Front-end
          </h1>
          <div className="flex flex-wrap gap-5 mb-17 2xl:mb-20 text-subtext text-[1.4rem] lg:text-[1.6rem] lg:gap-8 2xl:text-[2.5rem]">
            {frontendTools.map((tool) => (
              <p
                key={tool}
                className="transition-transform duration-200 hover:translate-x-1"
              >
                {tool}
              </p>
            ))}
          </div>
        </div>

        <div className="">
          <h1 className="text-text text-[2rem] mb-4 lg:text-[2.5rem]">
            Back-end
          </h1>
          <div className="flex flex-wrap gap-5 mb-17 2xl:mb-20  text-subtext text-[1.4rem] lg:text-[1.6rem] lg:gap-8 2xl:text-[2.5rem]">
            {backendTools.map((tool) => (
              <p
                key={tool}
                className="transition-transform duration-200 hover:translate-x-1"
              >
                {tool}
              </p>
            ))}
          </div>
        </div>

        <div className="">
          <h1 className="text-text text-[2rem] mb-4 lg:text-[2.5rem]">
            Design & Development Tools
          </h1>
          <div className="flex flex-wrap gap-5 2xl:mb-20 text-subtext text-[1.4rem] lg:text-[1.6rem] lg:gap-8 2xl:text-[2.5rem]">
            {designAndDevTools.map((tool) => (
              <p
                key={tool}
                className="transition-transform duration-200 hover:translate-x-1"
              >
                {tool}
              </p>
            ))}
          </div>
        </div>

        {/* line-div */}
        <div className="block w-full mt-20 mb-15 bg-line/40 h-[1.5px] md:md-8 lg:mt-5 lg:mb-10 lg:md:-10"></div>

        <div className="">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ViewAllStacks;
