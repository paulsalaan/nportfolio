import { Link } from "react-router-dom";
import React from "react";

interface AnimatedLinkProps {
  to: string;
  text: string;
  icon?: React.ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  textSize?: string; // Optional text size (e.g., "text-sm", "text-xl")
  iconSize?: string; // Optional icon size class (e.g., "size-4", "w-5 h-5")
}

export const AnimatedLink = ({
  to,
  text,
  icon,
  external = false,
  className = "",
  onClick,
  textSize = "text-lg", // default text size
  iconSize = "size-3", // default icon size
}: AnimatedLinkProps) => {
  const baseTextClass = `flex items-center gap-1 ${textSize}`;

  return (
    <div className={`group ${className}`}>
      <div className="inline-block flex-col items-center">
        {external ? (
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            className={baseTextClass}
          >
            {text}
            {icon && <span className={iconSize}>{icon}</span>}
          </a>
        ) : (
          <Link to={to} onClick={onClick} className={baseTextClass}>
            {text}
            {icon && <span className={iconSize}>{icon}</span>}
          </Link>
        )}

        <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-0.5 bg-text 
               w-full
               lg:w-0 lg:transition-all lg:duration-300 lg:ease-in-out 
               lg:group-hover:w-full"
          />
        </div>
      </div>
    </div>
  );
};
