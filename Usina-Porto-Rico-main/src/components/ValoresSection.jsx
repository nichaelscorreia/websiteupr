// src/components/ValoresSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  HiLink,
  HiUserGroup,
  HiShieldCheck,
  HiScale,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import { TbHeartHandshake } from "react-icons/tb";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const valores = [
  {
    icon: <HiLink />,
    titulo: "COMPROMETIMENTO",
    descricao:
      "Prezamos por colaboradores motivados e identificados com a empresa.",
  },
  {
    icon: <TbHeartHandshake />,
    titulo: "ACOLHER E ACREDITAR",
    descricao:
      "Valorizamos as pessoas e acreditamos que a melhor forma de evoluir é compreendendo e tratando bem o outro.",
  },
  {
    icon: <HiUserGroup />,
    titulo: "TRABALHO EM EQUIPE",
    descricao:
      "Somos interdependentes, necessitamos um do outro e estamos ligados pelo mesmo objetivo.",
  },
  {
    icon: <HiShieldCheck />,
    titulo: "SEGURANÇA",
    descricao:
      "Visamos proteger a saúde e integridade, física e emocional, de todas as pessoas na empresa.",
  },
  {
    icon: <HiScale />,
    titulo: "COMPROMISSO ÉTICO E SOCIAL",
    descricao:
      "Baseamos nossa conduta em valores como Honestidade, Integridade, Respeito e Justiça.",
  },
];

// Card Component
const ValorCard = ({ valor, index }) => (
  <div className="relative h-full bg-usina-primary rounded-3xl px-6 py-12 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg min-h-[400px]">
    {/* Icon Circle */}
    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300">
      {React.cloneElement(valor.icon, {
        className: "w-10 h-10 text-gray-900",
      })}
    </div>

    {/* Title */}
    <h3 className="text-lg font-bold text-white mb-4 uppercase leading-tight min-h-[3.5rem] flex items-center justify-center">
      {valor.titulo}
    </h3>

    {/* Description */}
    <p className="text-white/95 leading-relaxed text flex-1">
      {valor.descricao}
    </p>

    {/* Bottom shadow/border effect */}
    <div className="absolute bottom-0 left-0 right-0 rounded-b-3xl" />
  </div>
);

function ValoresSection() {
  return (
    <section id="valores" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            NOSSOS VALORES
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Nossos valores são a base de tudo que fazemos e refletem nosso
            compromisso com as pessoas, qualidade e integridade.
          </p>
        </motion.div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 lg:gap-6">
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <ValorCard valor={valor} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper (visible only on mobile and tablet) */}
        <div className="lg:hidden relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".valores-button-prev",
              nextEl: ".valores-button-next",
            }}
            pagination={{
              clickable: true,
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-white",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            centeredSlides={false}
            loop={true}
            className="valores-swiper pb-12"
          >
            {valores.map((valor, index) => (
              <SwiperSlide key={index}>
                <ValorCard valor={valor} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="valores-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#EF233C] shadow-lg flex items-center justify-center hover:bg-[#C41E3A] transition-colors"
            aria-label="Anterior"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <HiChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="valores-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#EF233C] shadow-lg flex items-center justify-center hover:bg-[#C41E3A] transition-colors"
            aria-label="Próximo"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <HiChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      
    </section>
  );
}

export default ValoresSection;
