import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiSparkles, HiBriefcase } from "react-icons/hi2";
import RedButton from "./RedButton";
import imgCarreiras from "/src/assets/oportunidades2.jpg";
import imgSustentabilidade from "/src/assets/Etanol2.jpg";

function InfoSection() {
  const cards = [
    {
      id: "sustentabilidade",
      title: "Sustentabilidade",
      subtitle: "Nosso Compromisso",
      description:
        "Nosso compromisso com o meio ambiente e a comunidade é o alicerce do nosso crescimento.",
      cta: "Conheça nossas ações",
      link: "/sustentabilidade",
      image: imgSustentabilidade,
      icon: <HiSparkles className="w-5 h-5" />,
      gradient: "from-green-600/20 to-emerald-600/20",
      colSpan: "lg:col-span-2",
    },
    {
      id: "carreiras",
      title: "Trabalhe Conosco",
      subtitle: "Oportunidade",
      description: "Faça parte de uma equipe que move o futuro.",
      cta: "Saiba Mais",
      link: "/carreiras",
      image: imgCarreiras,
      icon: <HiBriefcase className="w-5 h-5" />,
      gradient: "from-blue-600/20 to-cyan-600/20",
      colSpan: "lg:col-span-1",
    },
  ];

  return (
    <section className="pb-4 pt-5 lg:px-10 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full min-h-[450px] lg:min-h-[500px]">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10" />
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
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-xl">
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { label: "Anos de Tradição", value: "50+" },
            { label: "Colaboradores", value: "1000+" },
            { label: "Toneladas/Ano", value: "1.5+ milhões" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="text-4xl font-bold text-usina-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default InfoSection;
