import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({
  title,
  highlightText,
  description,
  backgroundImage,
  height = "70vh", // altura customizável (padrão 70vh)
  backgroundPosition = "center", // posição customizável (padrão center)
}) => {
  return (
    <section className={`relative h-[${height}] overflow-hidden lg:-mt-20`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: backgroundPosition,
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-usina-primary/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative h-full flex items-end z-20">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-10 pb-12 lg:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
              {title}{" "}
              {highlightText && (
                <span className="text-usina-primary relative inline-block">
                  {highlightText}
                  {/* Underline animation */}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-0 left-0 h-1 bg-usina-primary rounded-full"
                  />
                </span>
              )}
            </h1>

            {description && (
              <p className="text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-usina-primary to-transparent" />
    </section>
  );
};

export default HeroSection;
