import { useEffect, useRef, useState } from "react";
import {
  HiArrowSmallUp,
  HiOutlineDocument,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";
import { useTheme } from "../context/ThemeMode";

const FloatingActions: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [atFooter, setAtFooter] = useState(false); // Detect footer
  const { isDarkMode, toggleTheme } = useTheme();

  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    contactRef.current = document.getElementById("page-contact") as HTMLElement;
    if (!contactRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [hovered, setHovered] = useState<"cv" | "theme" | null>(null);

  const showLeftActions = visible && !atFooter;
  const showRightButton = visible;

  return (
    <>
      {/* Left Floating Buttons */}
      <div
        className={`fixed left-5 bottom-5 z-50 transition-all duration-300 ${
          showLeftActions
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <div className="flex flex-col text-[14px] gap-3 relative z-50">
          {/* Download CV Button */}
          <div
            className="relative flex items-center group cursor-pointer"
            onMouseEnter={() => setHovered("cv")}
            onMouseLeave={() => setHovered(null)}
          >
            <a
              href="/"
              download
              className="relative bg-button-bg text-button-text hover:bg-hover-btn p-2 rounded inline-flex items-center justify-center size-12 transition-all"
            >
              <HiOutlineDocument
                className={`size-6 transition-transform duration-500 ${
                  hovered === "cv" ? "rotate-[360deg]" : ""
                }`}
              />
            </a>

            <div
              className={`hidden absolute top-1/2 -translate-y-1/2 h-12 px-3 py-3 bg-hover-btn text-button-text rounded lg:flex items-center gap-3 text-base overflow-hidden
              transition-all duration-400 ease-in-out cursor-pointer ${
                hovered === "cv" ? "opacity-100 w-[15rem]" : "opacity-0 w-0"
              }`}
            >
              <HiOutlineDocument
                className={`size-6 transition-transform duration-500 ${
                  hovered === "cv" ? "rotate-[360deg]" : ""
                }`}
              />
              <span
                className={`transition-all duration-100 ease-in-out whitespace-nowrap ${
                  hovered === "cv"
                    ? "opacity-100 scale-100 ml-6"
                    : "opacity-0 scale-95 ml-0"
                }`}
              >
                View CV
              </span>
            </div>
          </div>

          {/* Toggle Theme Button */}
          <div
            className="relative flex items-center group cursor-pointer"
            onMouseEnter={() => setHovered("theme")}
            onMouseLeave={() => setHovered(null)}
          >
            <button
              onClick={toggleTheme}
              className="relative bg-button-bg text-button-text hover:bg-hover-btn p-2 rounded inline-flex items-center justify-center size-12 transition-all"
            >
              {isDarkMode ? (
                <HiOutlineSun
                  className={`size-6 transition-transform duration-500 ${
                    hovered === "theme" ? "rotate-[360deg]" : ""
                  }`}
                />
              ) : (
                <HiOutlineMoon
                  className={`size-6 transition-transform duration-500 ${
                    hovered === "theme" ? "rotate-[360deg]" : ""
                  }`}
                />
              )}
            </button>

            <div
              onClick={toggleTheme}
              className={`absolute top-1/2 -translate-y-1/2 h-12 px-3 py-3 bg-hover-btn text-button-text rounded
  overflow-hidden text-base hidden lg:flex items-center gap-3 transition-all duration-400 ease-in-out ${
    hovered === "theme" ? "opacity-100 w-[15rem]" : "opacity-0 w-0"
  }`}
            >
              <span
                className={`transition-transform duration-500 ${
                  hovered === "theme" ? "rotate-[360deg]" : ""
                }`}
              >
                {isDarkMode ? (
                  <HiOutlineSun className="size-5" />
                ) : (
                  <HiOutlineMoon className="size-5" />
                )}
              </span>
              <span
                className={`whitespace-nowrap transition-opacity duration-300 ease-in-out ml-6 ${
                  hovered === "theme" ? "opacity-100" : "opacity-0"
                }`}
              >
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Floating Scroll Up Button (Always visible at bottom) */}
      <div
        className={`fixed right-5 bottom-5 z-50 transition-all duration-300 cursor-pointer ${
          showRightButton
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="bg-button-bg text-button-text hover:bg-arrowHover p-3 rounded text-left cursor-pointer flex items-center gap-2 size-12"
        >
          <HiArrowSmallUp className="stroke-[1px] size-6" />
        </button>
      </div>
    </>
  );
};

export default FloatingActions;
