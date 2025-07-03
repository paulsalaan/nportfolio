import { AnimatedLink } from "@/components/AnimatedLink";
import { forwardRef } from "react";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import { TfiArrowTopRight } from "react-icons/tfi";

interface TechStackProps {
  onViewAllClick: () => void;
}

const TechStack = forwardRef<HTMLElement, TechStackProps>(
  ({ onViewAllClick }, ref) => {
    return (
      <section ref={ref}>
        <h1 className="text-text font-medium text-4xl uppercase lg:text-6xl lg:font-medium">
          TECH STACK
        </h1>
        {/* line-div */}
        <div className="block w-full mt-5 mb-10 bg-line/40 h-[1.5px] md:md-8 lg:mt-5 lg:mb-10 2xl:mt-15 2xl:mb-20"></div>

        <div className="flex flex-col gap-16">
          {/* frontend-section */}
          <div className="">
            <h1 className="text-text text-[2rem] mb-7 mt-5 lg:text-[2.5rem]">
              Front-end
            </h1>
            <div className="text-subtext flex flex-wrap gap-5 text-[1.4rem] lg:text-[1.6rem] lg:gap-8 2xl:text-[2.5rem]">
              <p className="transition-transform duration-200 hover:translate-x-1">
                Javascript
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Typescript
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                React
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Next.js
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Vue.js
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Tailwind
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Vite
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Prettier
              </p>
            </div>
          </div>

          {/* backend-section */}
          <div className="">
            <h1 className="text-text text-[2rem] mb-7 lg:text-[2.5rem]">
              Back-end
            </h1>
            <div className="flex flex-wrap gap-5 text-subtext text-[1.4rem] lg:text-[1.6rem] lg:gap-8 2xl:text-[2.5rem]">
              <p className="transition-transform duration-200 hover:translate-x-1">
                Python
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Node.js
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Express.js
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Postgre SQL
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                MySQL
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                Cassandra
              </p>
              <p className="transition-transform duration-200 hover:translate-x-1">
                MongoDB
              </p>
            </div>
          </div>
        </div>

        <div className="mt-18 flex justify-end">
          <AnimatedLink
            to="/viewallstack"
            text="View all stack"
            onClick={onViewAllClick}
            icon={
              <HiOutlineArrowSmallUp className="size-6 stroke-[1.5px] rotate-[45deg]" />
            }
            textSize="text-xl gap-3 md:text-xl xl:text-2xl"
            iconSize="w-5 h-5"
          />
        </div>
      </section>
    );
  }
);

export default TechStack;
