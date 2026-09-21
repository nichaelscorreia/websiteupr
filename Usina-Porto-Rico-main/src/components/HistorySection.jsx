import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiSparkles, HiUserCircle, HiNewspaper } from "react-icons/hi2";
import RedButton from "./RedButton";

import imgOlival from "../assets/OLIVALTENORIO.jpeg";
import imgHistoria from "../assets/gearUsina.jpg";
import imgBanner from "../assets/novidades.jpg";

function History() {
  const cards = [
    {
      id: "historia",
      title: "Nossa História",
      subtitle: "Trajetória",
      description:
        "Conheça a trajetória que nos tornou líderes no setor sucroenergético.",
      cta: "Conheça nossa história",
      link: "/a-usina/historia",
      image: imgHistoria,
      icon: <HiSparkles className="w-5 h-5" />,
      gradient: "from-blue-600/20 to-cyan-600/20",
      colSpan: "lg:col-span-1",
    },
    {
      id: "fundador",
      title: "Olival Tenório",
      subtitle: "A Fundação",
      description:
        "A trajetória de vida do empresário responsável pela fundação e crescimento da Usina Porto Rico.",
      cta: "Nosso Fundador",
      link: "/a-usina/historia",
      image: imgOlival,
      icon: <HiUserCircle className="w-5 h-5" />,
      gradient: "from-amber-600/20 to-orange-600/20",
      colSpan: "lg:col-span-1",
    },
    {
      id: "novidades",
      title: "Acompanhe as Novidades",
      subtitle: "Novidades",
      description:
        "Fique por dentro das últimas notícias, projetos e conquistas da Usina Porto Rico.",
      cta: "Ver Novidades",
      link: "#feed",
      image: imgBanner,
      icon: <HiNewspaper className="w-5 h-5" />,
      gradient: "from-green-600/20 to-emerald-600/20",
      colSpan: "lg:col-span-2",
    },
  ];

  return (
    <section className="py-10 px-4 lg:px-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-9xl mx-auto">
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={card.colSpan}
            >
              <div className="group block h-full">
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full min-h-[400px]">
                  {/* Image with zoom effect */}
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />

                    {/* Multiple overlay gradients for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} mix-blend-multiply opacity-60`}
                    />

                    {/* Subtle vignette effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
                  </div>

                  {/* Content Container */}
                  <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                    {/* Top Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="self-start"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold shadow-lg">
                        {card.icon}
                        <span>{card.subtitle}</span>
                      </div>
                    </motion.div>

                    {/* Bottom Content */}
                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-2xl">
                        {card.description}
                      </p>

                      {/* CTA Button usando RedButton */}
                      <RedButton
                        text={card.cta}
                        to={card.link}
                        size="md"
                        variant="primary"
                      />
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default History;
