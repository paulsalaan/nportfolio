const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-between w-full py-10 text-text">
      <div className="flex-1 flex flex-col justify-center py-3">
        <div className="text-left">
          <h1 className="text-[5rem] lg:text-[8rem] font-medium uppercase md:text-[7.5rem] xl:text-[12rem] lg:pl-6">
            Niño
          </h1>
        </div>

        <div className="text-right">
          <h1 className="text-[5rem] lg:text-[8rem] font-medium uppercase md:text-[7.5rem] xl:text-[12rem] lg:pr-6">
            Salaan
          </h1>
        </div>
      </div>

      {/* Bottom description */}
      <div className="max-w-sm md:max-w-lg lg:max-w-3xl">
        <h2 className="text-lg text-text sm:text-xl md:text-2xl lg:leading-9 lg:text2xl 2xl:text-3xl 2xl:leading-10">
          Aspiring 4th year BSIT student specializing in{" "}
          <span className="text-accent font-medium">UI/UX Design</span>, working
          hard toward becoming a full-stack developer.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
