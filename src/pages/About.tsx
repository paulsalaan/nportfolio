import { useState } from "react";
import AboutImage from "../assets/abt_img.png";
import AboutText from "../components/AboutText";
import NavLinkHover from "../components/NavLink";
import { forwardRef } from "react";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";

const About = forwardRef<HTMLElement>((_, ref) => {
  const transformStates = ["scale-100", "scale-x-[-1]", "scale-y-[-1]"];

  const [transformIndex, setTransformIndex] = useState(0);

  const handleImageClick = () => {
    setTransformIndex((prev) => (prev + 1) % transformStates.length);
  };

  return (
    <section ref={ref}>
      <h1 className="text-text font-medium text-4xl uppercase lg:text-6xl lg:font-medium">
        About
      </h1>
      {/* line-div */}
      <div className="block w-full mt-5 mb-10 bg-line/40 h-[1.5px] md:md-8 lg:mt-5 lg:mb-10 2xl:mt-15 2xl:mb-20"></div>

      {/* image-section */}
      <div className="lg:flex lg:items-center lg:justify-center lg:h-auto">
        <img
          src={AboutImage}
          alt="about_image"
          onClick={handleImageClick}
          className={`rounded cursor-pointer 
              transition-transform duration-400 hover:brightness-85 ease-in-out 
              lg:size-110 xl:size-120 
              ${transformStates[transformIndex]}`}
        />

        <div className="text-right flex flex-col gap-6 mt-7 w-full lg:mt-0 lg:gap-6 xl:gap-10">
          <AboutText title="Name" description="Paul Niño Salaan" />
          <AboutText
            title="Mbti"
            description="Introverted, Intuitive, Feeling, Judging (INFJ) "
          />
          <AboutText title="Birthdate" description="December 29, 2003" />
          <AboutText title="Program" description="BS Information Technology" />
          <AboutText
            title="Univerisity/School"
            description="Univerisity of Science and Technology of Southern Philippines - CDO Campus"
          />
        </div>
      </div>

      {/* about-me-descriptions */}
      <div className="h-full lg:pt-18 pt-15 2xl:pt-25">
        <div className="lg:h-full lg:flex lg:flex-row">
          <div className="flex flex-col lg:flex lg:justify-between">
            {/* desktop-info-only */}
            <div className="lg:flex lg:flex-col lg:justify-between">
              <h1 className="text-3xl leading-11 lg:text-[1.7rem] lg:leading-10 lg:mr-10 xl:text-[2.5rem] xl:leading-13 xl:mr-20">
                As a student, I’m passionate about building accessible,
                user-focused digital experiences while continuously learning and
                growing as a future full stack developer.
              </h1>
              <h2 className="text-xl mt-8 hidden leading-9 lg:text-2xl xl:mt-5">
                Aspiring Developer & <br />
                UI/UX Designer
              </h2>
            </div>
            <div className="hidden lg:flex lg:gap-12 xl:flex xl:flex-row xl:items-center xl:gap-15">
              <div className="">
                <h2 className="hidden text-xl lg:flex lg:items-center lg:flex-row lg:text-[13px] xl:text-lg">
                  Aspiring Developer
                </h2>
                <h1 className="hidden text-xl lg:flex lg:items-center lg:flex-row lg:text-[13px] xl:text-lg">
                  & UI/UX Designer
                </h1>
              </div>
              <div className="lg:flex lg:flex-row lg:items-center lg:gap-13 xl:gap-15 lg:self-end">
                <NavLinkHover
                  className="inline-block"
                  labelClass="text-[1px] lg:text-[14px] xl:text-lg"
                  linkClass="text-[15px] lg:text-[14px] xl:text-lg"
                  title="Message me"
                  label="paulninosalaan75@gmail.com"
                  href="mailto:paulninosalaan75@gmail.com"
                />
                <div className="group self-end md:cursor-pointer">
                  <div className="flex items-center gap-1 lg:text-[14px] xl:text-lg">
                    <a href="#">View LinkedIn</a>
                    <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
                  </div>

                  {/* Outer full-width background bar */}
                  <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
                    {/* Inner animated bar */}
                    <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* log-text-description-section */}
          <div className="mt-10 lg:mt-0">
            <div className="flex flex-col gap-9 text-[16px] lg:text-[1erem] lg:gap-10 lg:pl-10 lg:max-w-7xl xl:text-xl xl:gap-10 2xl:gap-11 xl:max-w-[135rem] 2xl:max-w-[140rem]">
              <p className="text-subtext">
                With a strong interest in UI/UX design, I aim to craft
                interfaces that are both functional and visually engaging. I am
                committed to designing user-centric solutions that enhance
                usability and accessibility. By combining aesthetic appeal with
                strategic functionality, I strive to deliver intuitive and
                effective digital experiences.
              </p>
              <p className="text-subtext">
                Combining the aesthetic appeal with strategic functionality, I
                strive to deliver intuitive and effective digital experiences.
              </p>
              <p className="text-subtext">
                I’m also expanding my skills in full-stack development while
                exploring the potential of AI in modern applications. This
                journey drives me to continuously learn, build, and improve with
                every project.
              </p>
              <p className="text-subtext">
                Outside of tech, I enjoy mobile gaming, particularly strategy
                games like League of Legends: Wild Rift. Gaming helps me sharpen
                problem-solving, adaptability, and collaboration skills I bring
                into my work as a future developer.
              </p>
            </div>
          </div>

          {/* mobile-info-only */}
          <div className="mt-10">
            <h2 className="text-xl leading-9 lg:hidden">
              Aspiring Developer & <br />
              UI/UX Designer
            </h2>
          </div>
          <div className="flex flex-row mt-8 lg:hidden">
            <NavLinkHover
              className="inline-block mr-5"
              labelClass="text-[14px]"
              linkClass="text-[14px]"
              title="Message me"
              label="paulninosalaan75@gmail.com"
              href="mailto:paulninosalaan75@gmail.com"
            />
            <div className="group self-end md:cursor-pointer">
              <div className="flex items-center gap-1 text-[14px]">
                <a href="#">View LinkedIn</a>
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
        </div>
      </div>
    </section>
  );
});

export default About;
