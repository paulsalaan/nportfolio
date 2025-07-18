import ImageCarousel from "@/components/ImageCarousel";
import { forwardRef } from "react";
import Interture1 from "@/assets/interture_1.png";
import Interture2 from "@/assets/interture_2.png";
import Affitnity1 from "@/assets/affitnity_1.png";
import Affitnity2 from "@/assets/affitnity_2.png";
import Exerease1 from "@/assets/exerease_1.png";
import Exerease2 from "@/assets/exerease_2.png";
import Exerease3 from "@/assets/exerease_3.png";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";

const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref}>
      <h1 className="text-text font-medium text-4xl uppercase lg:text-6xl lg:font-medium">
        Projects
      </h1>

      {/* line-div */}
      <div className="block w-full mt-5 mb-10 bg-line/40 h-[1.5px] md:md-8 lg:mt-5 lg:mb-10 2xl:mt-15 2xl:mb-20"></div>

      {/* interture section */}
      <div className="mb-28 lg:flex lg:flex-row lg:gap-20">
        <div className="lg:max-w-2/6">
          <div className="space-y-4 mb-5 md:space-y-2 md:mb-6">
            <h2 className="text-xl text-text md:text-2xl 2xl:text-3xl">
              Interture Furniture E-commerce
            </h2>
            <p className="text-lg text-text">Web Development, Design</p>
            <p className="text-lg text-text">2023</p>
          </div>
          <div className="hidden lg:block space-y-4">
            <p className="">
              Interture is a modern furniture e-commerce platform designed to
              offer a seamless and elegant online shopping experience. It
              connects users with high-quality furniture pieces, providing an
              intuitive way to browse, select, and purchase home essentials from
              trusted brands.
            </p>
            <p className="">
              Key features of Interture include smart product filtering, and a
              smooth checkout process. The platform also supports personalized
              recommendations and secure payment options for a reliable and
              user-friendly shopping journey.
            </p>
            <p className="">
              This system was developed by yours truly, Christine Mosqueda,
              Sheri Nicole Tilan, Daniella Ebajay, Rachel Naliatan and Leann
              Christian Flores, a dedicated team committed to creating
              functional and visually appealing digital solutions.
            </p>
          </div>
          <div className="group hidden self-end md:cursor-pointer lg:mt-4 lg:inline-block 2xl:mt-6">
            <div className="flex items-center gap-1">
              <a href="#">View Github repository</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            {/* Outer full-width background bar */}
            <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
            </div>
          </div>
        </div>
        <ImageCarousel images={[Interture1, Interture2]} />
        <div className="flex flex-col gap-5 leading-7 mb-4 text-base md:text-xl lg:hidden">
          <p className="">
            Interture is a modern furniture e-commerce platform designed to
            offer a seamless and elegant online shopping experience. It connects
            users with high-quality furniture pieces, providing an intuitive way
            to browse, select, and purchase home essentials from trusted brands.
          </p>
          <p className="">
            Key features of Interture include smart product filtering, and a
            smooth checkout process. The platform also supports personalized
            recommendations and secure payment options for a reliable and
            user-friendly shopping journey.
          </p>
          <p className="">
            This system was developed by yours truly, Christine Mosqueda, Sheri
            Nicole Tilan, Daniella Ebajay, Rachel Naliatan and Leann Christian
            Flores, a dedicated team committed to creating functional and
            visually appealing digital solutions.
          </p>
        </div>
        <div className="group inline-block mt-8 self-end md:cursor-pointer lg:hidden">
          <div className="flex items-center gap-1 text-base">
            <a href="#">View Github repository</a>
            <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
          </div>

          {/* Outer full-width background bar */}
          <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
            {/* Inner animated bar */}
            <div
              className="absolute left-0 top-0 h-0.5 bg-text 
                w-full
                lg:w-0 lg:transition-all lg:duration-300 lg:ease-in-out 
                lg:group-hover:w-full"
            />
          </div>
        </div>
      </div>

      {/* afftinitly section */}
      <div className="mb-28 lg:flex lg:flex-row lg:gap-20">
        <div className="hidden lg:block">
          <ImageCarousel images={[Affitnity1, Affitnity2]} />
        </div>
        <div className="lg:max-w-2/6">
          <div className="space-y-4 mb-5 md:space-y-2 md:mb-6">
            <h2 className="text-xl text-text md:text-2xl 2xl:text-3xl">
              Affitnity Web Based AI Meal and Exercise Plan Generator
            </h2>
            <p className="text-lg text-text">Web Development, Design</p>
            <p className="text-lg text-text">2025</p>
          </div>
          <div className="hidden lg:block space-y-4">
            <p className="">
              Affitnity is a web-based AI-powered system that generates
              personalized meal and exercise plans tailored to individual health
              goals. It’s built for users looking to improve their wellness
              through smart, data-driven recommendations.
            </p>
            <p className="">
              The system features include AI-generated meal plans, adaptive
              exercise routines and a user health profile tracker. Affitnity
              also provides weekly progress reports and nutrition insights to
              keep users engaged and informed.
            </p>
            <p className="">
              Affitnity was proudly developed by yours truly, Christine
              Mosqueda, Sheri Nicole Tilan, Leann Christian Flores, combining
              expertise in health science, design, and machine learning to
              deliver a smart, practical fitness assistant for everyday users.
            </p>
          </div>
          <div className="group hidden self-end md:cursor-pointer lg:mt-4 lg:inline-block 2xl:mt-6">
            <div className="flex items-center gap-1">
              <a href="#">View Github repository</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            {/* Outer full-width background bar */}
            <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <ImageCarousel images={[Affitnity1, Affitnity2]} />
        </div>
        <div className="flex flex-col gap-5 leading-7 mb-4 text-base md:text-xl lg:hidden">
          <p className="">
            Affitnity is a web-based AI-powered system that generates
            personalized meal and exercise plans tailored to individual health
            goals. It’s built for users looking to improve their wellness
            through smart, data-driven recommendations.
          </p>
          <p className="">
            The system features include AI-generated meal plans, adaptive
            exercise routines and a user health profile tracker. Affitnity also
            provides weekly progress reports and nutrition insights to keep
            users engaged and informed.
          </p>
          <p className="">
            Affitnity was proudly developed by yours truly, Christine Mosqueda,
            Sheri Nicole Tilan, Leann Christian Flores, combining expertise in
            health science, design, and machine learning to deliver a smart,
            practical fitness assistant for everyday users.
          </p>
        </div>
        <div className="group inline-block mt-8 self-end md:cursor-pointer lg:hidden">
          <div className="flex items-center gap-1 text-base">
            <a href="#">View Github repository</a>
            <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
          </div>

          {/* Outer full-width background bar */}
          <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
            {/* Inner animated bar */}
            <div
              className="absolute left-0 top-0 h-0.5 bg-text 
                w-full
                lg:w-0 lg:transition-all lg:duration-300 lg:ease-in-out 
                lg:group-hover:w-full"
            />
          </div>
        </div>
      </div>

      {/* exerease section */}
      <div className="lg:flex lg:flex-row lg:gap-20">
        <div className="lg:max-w-2/6">
          <div className="space-y-4 mb-5 md:space-y-2 md:mb-6">
            <h2 className="text-xl text-text md:text-2xl 2xl:text-3xl">
              Exerease Mobile App UI
            </h2>
            <p className="text-lg text-text">Design, Mobile Development</p>
            <p className="text-lg text-text">2024</p>
          </div>
          <div className="hidden lg:block space-y-4">
            <p className="">
              ExerEase offers a streamlined and intuitive UI/UX experience that
              simplifies workout planning through user-friendly design. The
              platform tailors exercise routines based on user preferences such
              as available time, fitness goals, and skill level—ensuring every
              interaction feels personalized and effortless.
            </p>
            <p className="">
              The interface was crafted with accessibility and engagement in
              mind, featuring clean layouts, easy navigation, and responsive
              elements that work seamlessly across devices. Key features like
              customizable workout flows, animated step-by-step demonstrations,
              and adaptive difficulty levels are all integrated into a cohesive,
              visually guided experience.
            </p>
            <p className="">
              This project was designed by yours truly using Figma, dedicated to
              building health-focused tools through thoughtful, human-centered
              UI/UX design.
            </p>
          </div>
          <div className="group hidden self-end md:cursor-pointer lg:mt-4 lg:inline-block 2xl:mt-6">
            <div className="flex items-center gap-1">
              <a href="#">View in Figma</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            {/* Outer full-width background bar */}
            <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
            </div>
          </div>
        </div>
        <ImageCarousel images={[Exerease1, Exerease2, Exerease3]} />
        <div className="flex flex-col gap-5 leading-7 mb-4 text-base md:text-xl lg:hidden">
          <p className="">
            ExerEase offers a streamlined and intuitive UI/UX experience that
            simplifies workout planning through user-friendly design. The
            platform tailors exercise routines based on user preferences such as
            available time, fitness goals, and skill level—ensuring every
            interaction feels personalized and effortless.
          </p>
          <p className="">
            The interface was crafted with accessibility and engagement in mind,
            featuring clean layouts, easy navigation, and responsive elements
            that work seamlessly across devices. Key features like customizable
            workout flows, animated step-by-step demonstrations, and adaptive
            difficulty levels are all integrated into a cohesive, visually
            guided experience.
          </p>
          <p className="">
            This project was designed by yours truly using Figma, dedicated to
            building health-focused tools through thoughtful, human-centered
            UI/UX design.
          </p>
        </div>
        <div className="group inline-block mt-8 self-end md:cursor-pointer lg:hidden">
          <div className="flex items-center gap-1 text-base">
            <a href="#">View in Figma</a>
            <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
          </div>

          {/* Outer full-width background bar */}
          <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
            {/* Inner animated bar */}
            <div
              className="absolute left-0 top-0 h-0.5 bg-text 
                w-full
                lg:w-0 lg:transition-all lg:duration-300 lg:ease-in-out 
                lg:group-hover:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
