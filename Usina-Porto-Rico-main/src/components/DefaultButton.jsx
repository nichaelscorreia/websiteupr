// src/components/DefaultButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";

const DefaultButton = ({
  text,
  to,
  className = "",
  icon = <FiArrowRightCircle />,
  external = false,
}) => {
  const baseClasses = `
    inline-flex items-center gap-2 
    px-6 py-3 
    font-medium text-base
    rounded-lg
    transition-all duration-300
    bg-usina-green hover:bg-usina-green/90
    text-white
    dark:bg-usina-green dark:hover:bg-usina-green/80
    dark:text-white
    transform hover:scale-105
    ${className}
  `.trim();

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {text}
        {icon && <span className="text-xl">{icon}</span>}
      </a>
    );
  }

  return (
    <Link to={to} className={baseClasses}>
      {text}
      {icon && <span className="text-xl">{icon}</span>}
    </Link>
  );
};

export default DefaultButton;
