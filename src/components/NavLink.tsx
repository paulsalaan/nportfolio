import React from "react";
import type { ReactNode } from "react";

interface NavLinkProps {
  title: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
  labelClass?: string;
  linkClass?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  title,
  label,
  href = "/",
  icon,
  className = "",
  labelClass = "text-sm",
  linkClass = "text-sm",
}) => {
  return (
    <div className={`group ${className}`}>
      <h1 className={`${labelClass} text-text`}>{title}</h1>
      <a
        href={href}
        className={`${linkClass} mt-1 text-darkash cursor-pointer flex items-center gap-1`}
      >
        {label}
        {icon && <span>{icon}</span>}
      </a>

      {/* Outer full-width background bar */}
      <div className="relative h-0.5 w-full bg-hover translate-y-2 overflow-hidden">
        {/* Inner animated bar - only animated on lg and up */}
        <div
          className="
        absolute left-0 top-0 h-0.5 bg-text 
        w-full
        lg:w-0 lg:transition-all lg:duration-300 lg:ease-in-out 
        lg:group-hover:w-full"
        />
      </div>
    </div>
  );
};

export default NavLink;
