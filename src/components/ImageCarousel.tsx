import { useState } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

type ImageCarouselProps = {
  images: string[];
  containerClassName?: string;
  imageClassName?: string;
  iconSize?: number;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  containerClassName = "w-full lg:max-w-[110rem]",
  imageClassName = "w-full h-[270px] md:h-[600px] lg:h-[500px] 2xl:h-[500px] max-w-full sm:max-w-xl md:max-w-4xl ",
  iconSize = 28,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`flex flex-col items-center ${containerClassName}`}>
      {/* Image Block */}
      <div className="w-screen lg:w-full bg-black lg:rounded p-8 flex justify-center">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={`${imageClassName} object-contain transition-all duration-300`}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between w-full gap-6 my-8 lg:gap-12">
        <span className="text-lg text-text">
          {currentIndex + 1} &nbsp;/&nbsp; {images.length}
        </span>
        <div className="flex gap-8">
          <button onClick={prevImage}>
            <HiArrowSmallLeft size={iconSize} className="text-text" />
          </button>
          <button onClick={nextImage}>
            <HiArrowSmallRight size={iconSize} className="text-text" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
