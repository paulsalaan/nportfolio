import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeMode";

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
  onScroll: (ref: React.RefObject<HTMLElement | null>, offset: number) => void;
  refs: {
    aboutRef: React.RefObject<HTMLElement | null>;
    techRef: React.RefObject<HTMLElement | null>;
    projectRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
    // Add others when ready
  };
};

const SideNav: React.FC<SideBarProps> = ({
  isOpen,
  onClose,
  onScroll,
  refs,
}) => {
  // Disable page scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const { isDarkMode, toggleTheme } = useTheme();

  const handleClick = (
    ref: React.RefObject<HTMLElement | null>,
    offset: number
  ) => {
    onScroll(ref, offset);
    onClose(); // close the sidebar after scrolling
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-full bg-background transition-opacity duration-300 ease-in-out lg:hidden ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Main Sidebar Content */}
      <div className="h-full px-8 py-10">
        {/* Top CLOSE Button */}
        <div className="flex justify-end">
          <button onClick={onClose} className="text-text cursor-pointer">
            CLOSE
            <div className="bg-text h-0.5 w-full translate-y-1"></div>
          </button>
        </div>
        <div className="flex flex-col justify-between h-full pb-5 md:flex-row md:justify-center md:items-center w-full mx-auto">
          {/* //nav links for mobile */}
          <div className="flex flex-col h-full mt-10">
            <nav className="flex flex-col gap-10 text-4xl font-medium md:text-4xl md:gap-10 md:items-start md:">
              <button
                onClick={() => handleClick(refs.aboutRef, 15)}
                className="cursor-pointer text-left uppercase"
              >
                ABOUT
              </button>
              <button
                onClick={() => handleClick(refs.techRef, 15)}
                className="cursor-pointer text-left uppercase"
              >
                TECH STACK
              </button>
              <button
                onClick={() => handleClick(refs.projectRef, 50)}
                className="cursor-pointer text-left uppercase"
              >
                PROJECTS
              </button>
              <button
                onClick={() => handleClick(refs.projectRef, 50)}
                className="cursor-pointer text-left uppercase"
              >
                CONTACTS
              </button>
            </nav>
          </div>
          <div className="flex items-center justify-between md:flex-col md:justify-center md:h-full md:ml-20 md:gap-10">
            <div className="group md:text-xl">
              <h1 className="text-darkash">Message me</h1>

              <a
                href="mailto:paulninosalaan75@gmail.com"
                className="text-darkash cursor-pointer flex items-center gap-1 mt-2"
              >
                paulninosalaan75@gmail.com
              </a>

              <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-0.5 bg-text 
                  w-full 
                  lg:transition-all lg:duration-300 lg:ease-in-out 
                  lg:group-hover:w-full"
                />
              </div>
            </div>

            <div
              onClick={toggleTheme}
              className="cursor-pointer text-darkash md:mt-8 md:self-start"
            >
              Switch to <br />{" "}
              <div className="mt-2">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </div>
              <div className="bg-text h-0.5 w-full translate-y-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
