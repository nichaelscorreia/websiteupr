import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeroSection from "../components/HeroSection";
import imgHero from "../assets/gearUsina.jpg";
import imgSec1 from "../assets/usinaantiga.jpg";
import imgSec2 from "../assets/socioamb.png";
import imgSec3 from "../assets/OLIVALTENORIO.jpeg";

const pagesContent = [
  {
    title: "História – Olival Tenório Costa",
    texts: [
      "A história do Grupo Olival Tenório está diretamente ligada à trajetória de seu fundador, o empresário Olival Tenório Costa. Nascido em 8 de novembro de 1922, em Atalaia – AL, filho de José da Costa Tenório e Isabel Tenório Cavalcante, Olival Tenório formou-se em Química Industrial pela Universidade Federal de Pernambuco, iniciando sua atuação profissional na Usina Uruba, no mesmo município.",
      "Em 1958, consolidou seu ingresso definitivo no setor sucroenergético ao adquirir, em sociedade com seu sogro, José Tenório de Albuquerque, o Engenho Ilhota, localizado em Boca da Mata – AL, empreendimento que viria a se tornar a atual Usina Triunfo. Dando continuidade ao processo de expansão, em 1971 os sócios adquiriram a Usina Porto Rico, inicialmente instalada no município de Colônia Leopoldina – AL e posteriormente transferida para Campo Alegre – AL.",
      "Após essa etapa, a sociedade foi encerrada, permanecendo Olival Tenório como proprietário da Usina Porto Rico. Demonstrando visão estratégica e compromisso com o fortalecimento do setor, o empresário reativou a unidade de Colônia Leopoldina, que passou a operar como Destilaria Autônoma Porto Alegre.",
      "A trajetória de Olival Tenório Costa representa o alicerce sobre o qual o Grupo Olival Tenório consolidou seu crescimento, pautado pela inovação, pelo empreendedorismo e por investimentos contínuos na cadeia sucroenergética.",
    ],
    image: imgSec3,
    year: "1922-2013",
  },
  {
    title: "Fundação e Crescimento",
    texts: [
      "Localizada na Fazenda São José, no município de Campo Alegre – AL, a Industrial Porto Rico S/A foi fundada em 1973 pelo empresário Olival Tenório Costa. Desde sua implantação, a usina apresentou um crescimento contínuo, conquistando posição de destaque entre as principais empresas do setor sucroenergético da região Nordeste.",
      "Atualmente, a unidade conta com uma área total de 27.000 hectares, dos quais 19.000 hectares são destinados ao cultivo de cana-de-açúcar, enquanto o restante abriga atividades de pecuária e áreas de reflorestamento.",
      "A Usina Porto Rico desempenha papel fundamental no desenvolvimento socioeconômico de Campo Alegre, sendo a principal geradora de renda do município e uma das mais importantes indústrias do estado de Alagoas.",
      "Com foco em eficiência e qualidade, a Porto Rico produz açúcar VHP, álcool anidro carburante e álcool hidratado carburante, abastecendo o mercado interno e atendendo também à demanda de exportação.",
    ],
    image: imgSec1,
    year: "1973",
  },
  {
    title: "Compromisso Socioambiental",
    texts: [
      "Desde a fundação, a Usina Porto Rico incorporou práticas de responsabilidade ambiental, buscando o equilíbrio entre produção e conservação, obtendo diversas certificações ambientais e sendo um modelo em energia renovável na região.",
      "A empresa é exemplo em sustentabilidade, com certificações nacionais que atestam seu compromisso com a preservação ambiental e o desenvolvimento sustentável.",
      "Investimentos contínuos em tecnologias limpas, reflorestamento e gestão responsável de recursos naturais consolidam a posição da Porto Rico como referência no setor sucroenergético brasileiro.",
    ],
    image: imgSec2,
    year: "Presente",
  },
];

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section Componentizado */}
      <HeroSection
        title="História da"
        highlightText="Usina Porto Rico"
        description="Uma jornada de mais de 50 anos de excelência, inovação e compromisso com o futuro."
        backgroundImage={imgHero}
        height="70vh"
      />

      {/* Carousel Section */}
      <main className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-usina-primary",
            }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            className="historia-swiper rounded-3xl shadow-2xl"
          >
            {pagesContent.map(({ title, texts, image, year }, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white dark:bg-gray-800 overflow-hidden min-h-[400px] lg:min-h-[500px]">
                  {/* Image Side */}
                  <div className="relative h-[250px] lg:h-auto">
                    <img
                      src={image}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent" />

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10">
                      <div className="px-4 py-2 lg:px-6 lg:py-3 rounded-xl bg-usina-primary text-white font-bold text-lg lg:text-2xl shadow-lg">
                        {year}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-col justify-center p-6 lg:p-10 xl:p-12">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-4 lg:space-y-6"
                    >
                      {/* Title */}
                      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                        {title}
                      </h2>

                      {/* Divider */}
                      <div className="w-16 lg:w-20 h-1 bg-usina-primary rounded-full" />

                      {/* Texts */}
                      <div className="space-y-3 lg:space-y-4 max-h-[280px] lg:max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                        {texts.map((txt, i) => (
                          <p
                            key={i}
                            className="text-sm lg:text-base xl:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify"
                          >
                            {txt}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8 lg:mt-12">
            <button
              className="swiper-button-prev-custom group w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:bg-usina-primary border-2 border-gray-200 dark:border-gray-700 hover:border-usina-primary"
              aria-label="Anterior"
            >
              <HiChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
            </button>
            <button
              className="swiper-button-next-custom group w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:bg-usina-primary border-2 border-gray-200 dark:border-gray-700 hover:border-usina-primary"
              aria-label="Próximo"
            >
              <HiChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </main>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .historia-swiper .swiper-pagination {
          bottom: 16px !important;
        }
        .historia-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .historia-swiper .swiper-pagination-bullet-active {
          background: #ef233c !important;
          width: 28px;
          border-radius: 5px;
        }

        /* Scrollbar customizado para área de texto */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 2px;
        }
        .dark .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #4b5563;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }

        @media (max-width: 1024px) {
          .historia-swiper .swiper-pagination {
            bottom: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
