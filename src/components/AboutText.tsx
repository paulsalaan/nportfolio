import React from "react";

interface AboutTextProps {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const AboutText: React.FC<AboutTextProps> = ({
  title,
  description,
  titleClassName = "text-xl font-medium text-text lg:text-xlxl:text-2xl",
  descriptionClassName = "mt-2 text-lg text-text lg:text-lg xl:text-xl",
}) => {
  return (
    <div>
      <h2 className={titleClassName}>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
};

export default AboutText;
