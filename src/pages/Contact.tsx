import { forwardRef } from "react";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";

const Contact = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="page-contact">
      <div className="block w-full mt-5 mb-10 bg-line/40 h-[1.5px] md:md-8 lg:mt-5 lg:mb-10 2xl:mt-15 2xl:mb-20"></div>
      <div className="lg:flex lg:items-center lg:justify-between">
        <h1 className="text-3xl text-medium md:text-4xl 2xl:text-6xl">
          Let's Collaborate
        </h1>
        <div className="group mt-8 inline-block self-end md:cursor-pointer lg:hidden">
          <div className="flex items-center gap-1 lg:text-lg xl:text-xl">
            <a href="#">paulninosalaan75@gmail.com</a>
            <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
          </div>

          {/* Outer full-width background bar */}
          <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
            {/* Inner animated bar */}
            <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-full group-hover:w-full" />
          </div>
        </div>

        {/* desktop-view */}
        <div className="">
          <div className="hidden group self-end md:cursor-pointer lg:inline-block">
            <div className="flex items-center gap-1 text-xl lg:text-[14px] xl:text-lg 2xl:text-3xl">
              <a href="#">paulninosalaan75@gmail.com</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            {/* Outer full-width background bar */}
            <div className="relative h-0.5 w-full bg-hover translate-y-3 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* footer-section */}
      {/* mobile-footer */}
      <footer className="mt-10">
        {/* social-media */}
        <div className="flex gap-8">
          <div className="group mt-8 inline-block self-end md:cursor-pointer lg:hidden">
            <div className="flex items-center gap-1 text-base lg:text-[14px] xl:text-lg">
              <a href="#">Github</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-full group-hover:w-full" />
            </div>
          </div>
          <div className="group mt-8 inline-block self-end md:cursor-pointer lg:hidden">
            <div className="flex items-center gap-1 text-base lg:text-[14px] xl:text-lg">
              <a href="#">Instagam</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            {/* Outer full-width background bar */}
            <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-full group-hover:w-full" />
            </div>
          </div>
          <div className="group mt-8 inline-block self-end md:cursor-pointer lg:hidden">
            <div className="flex items-center gap-1 text-base lg:text-[14px] xl:text-lg">
              <a href="#">LinkedIn</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            {/* Outer full-width background bar */}
            <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-full group-hover:w-full" />
            </div>
          </div>
        </div>
        <div className="mt-12 text-subtext lg:hidden">@ NINO SALAAN 2025</div>
      </footer>

      {/* desktop-footer */}
      <footer className="lg:mt-5 lg:flex lg:items-center lg:justify-between">
        <div className="hidden mt-12 text-subtext lg:block">
          @ NINO SALAAN 2025
        </div>
        {/* social-media */}
        <div className="hidden lg:flex lg:gap-8 lg:">
          <div className="group mt-8 inline-block self-end md:cursor-pointer">
            <div className="flex items-center gap-1 text-base lg:text-[14px] xl:text-lg">
              <a href="#">Github</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            {/* Outer full-width background bar */}
            <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-full lg:w-0 group-hover:w-full" />
            </div>
          </div>
          <div className="group mt-8 inline-block self-end md:cursor-pointer">
            <div className="flex items-center gap-1 text-base lg:text-[14px] xl:text-lg">
              <a href="#">Instagam</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            {/* Outer full-width background bar */}
            <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-full lg:w-0 group-hover:w-full" />
            </div>
          </div>
          <div className="group mt-8 inline-block self-end md:cursor-pointer">
            <div className="flex items-center gap-1 text-base lg:text-[14px] xl:text-lg">
              <a href="#">LinkedIn</a>
              <HiOutlineArrowSmallUp className="size-5 stroke-[1.5px] rotate-[45deg]" />
            </div>

            {/* Outer full-width background bar */}
            <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
              {/* Inner animated bar */}
              <div className="absolute left-0 top-0 h-0.5 bg-text dark:bg-text transition-all duration-300 ease-in-out w-full lg:w-0 group-hover:w-full" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
});

export default Contact;
