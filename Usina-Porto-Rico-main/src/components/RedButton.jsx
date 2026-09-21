import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const RedButton = ({
  text = "Clique Aqui",
  to,
  href,
  onClick,
  external,
  icon = (
    <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  ),
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all group";

  const variants = {
    primary: "bg-usina-primary text-white hover:bg-usina-secondary",
    secondary: "bg-white text-[#EF233C] shadow-lg hover: border-2 border-[#EF233C]",
    outline: "bg-transparent text-[#EF233C] border-2 border-[#EF233C] hover:bg-[#EF233C] hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {text}
      {icon && icon}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.95 }}>
        <Link
          to={to}
          className={classes}
          target={external ? "_blank" : undefined}
          {...props}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default RedButton;