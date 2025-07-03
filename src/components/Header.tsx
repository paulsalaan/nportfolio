import { useState } from "react";
import NavLinkHover from "./NavLink";
import SideNav from "./SideNav";
import { useTheme } from "../context/ThemeMode";

interface HeaderProps {
  onScroll: (ref: React.RefObject<HTMLElement | null>, offset: number) => void;
  refs: {
    aboutRef: React.RefObject<HTMLElement | null>;
    techRef: React.RefObject<HTMLElement | null>;
    projectRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
  };
}

const Header: React.FC<HeaderProps> = ({ onScroll, refs }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <section className="">
        <div className="flex items-center justify-between">
          {/* nav-links-section */}
          <div className="flex items-center text-[18px] lg:gap-10 xl:gap-13 2xl:text-[18px] 2xl:gap-27">
            <h1 className="lg:text-[15px] xl:text-[18px] 2xl:text-[18px]">
              Based on
              <h1 className="mt-1">Cagayan de Oro, Philippines</h1>
            </h1>
            <NavLinkHover
              className="hidden lg:block"
              labelClass="lg:text-[15px] xl:text-[18px]  2xl:text-[18px]"
              linkClass="lg:text-[15px] xl:text-[18px]  2xl:text-[18px]"
              title="Message me"
              label="paulninosalaan75@gmail.com"
              href="mailto:paulninosalaan75@gmail.com"
            />

            {/* dark-mode-text-button*/}
            <div
              onClick={toggleTheme}
              className="group hidden lg:inline-block md:cursor-pointer"
            >
              <span className="text-darkash dark:text-lightash lg:text-[15px] xl:text-[18px] 2xl:text-[18px]">
                Switch to <br />
                <div className="mt-1">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </div>
              </span>

              {/* Outer full-width background bar */}
              <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
                {/* Inner animated bar */}
                <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex lg:uppercase 2xl:gap-15 lg:text-[15px] lg:gap-5 2xl:text-[18px]">
            <button
              onClick={() => onScroll(refs.aboutRef, 40)}
              className="cursor-pointer transition-transform duration-200 hover:translate-x-1"
            >
              ABOUT
            </button>
            <button
              onClick={() => onScroll(refs.techRef, 45)}
              className="cursor-pointer transition-transform duration-200 hover:translate-x-1"
            >
              TECH STACKS
            </button>
            <button
              onClick={() => onScroll(refs.projectRef, 50)}
              className="cursor-pointer transition-transform duration-200 hover:translate-x-1"
            >
              PROJECTS
            </button>
            <button
              onClick={() => onScroll(refs.contactRef, 100)}
              className="cursor-pointer transition-transform duration-200 hover:translate-x-1"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile menu trigger */}
          <div
            className="block lg:hidden cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            MENU
            <div className="bg-text h-0.5 w-full translate-y-1"></div>
          </div>
        </div>
      </section>

      {/* Mobile sidebar overlay */}
      <SideNav
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onScroll={onScroll}
        refs={refs}
      />
    </>
  );
};

export default Header;
