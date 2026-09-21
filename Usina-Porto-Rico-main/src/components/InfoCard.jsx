import React from "react";
import { motion } from "framer-motion";
import RedButton from "./RedButton";

const InfoCard = ({
  icon,
  title,
  description,
  link,
  index,
  useGradient = true, // prop para controlar o gradiente (padrão true)
}) => {
  const gradient = "from-usina-primary to-usina-secondary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <div className="group relative flex flex-col h-full rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Gradient background on hover */}
        {useGradient && (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          />
        )}

        {/* Icon container */}
        <div className="relative z-10 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-usina-primary/10 dark:bg-usina-primary/20 flex items-center justify-center group-hover:bg-usina-primary group-hover:scale-110 transition-all duration-300">
            {React.cloneElement(icon, {
              className:
                "w-8 h-8 text-usina-primary group-hover:text-white transition-colors",
            })}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-usina-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1">
            {description}
          </p>

          {/* CTA usando RedButton com tamanho sm */}
          <div className="mt-auto">
            <RedButton
              text="Saiba Mais"
              to={link}
              size="sm"
              variant="primary"
            />
          </div>
        </div>

        {/* Bottom accent line */}
        {useGradient && (
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
          />
        )}
      </div>
    </motion.div>
  );
};

export default InfoCard;
