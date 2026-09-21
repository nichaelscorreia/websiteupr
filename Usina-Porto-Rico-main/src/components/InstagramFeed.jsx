// src/components/InstagramFeed.jsx
import React from "react";
import { motion } from "framer-motion";
import { InstagramEmbed } from "react-social-media-embed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// URLs dos últimos posts do Instagram atualizar a API da meta quando possível
const instagramPosts = [
  "https://www.instagram.com/usinaportorico/reel/DVHGj1VEuW9/",
  "https://www.instagram.com/usinaportorico/p/DU_wSbxEtr7/",
  "https://www.instagram.com/usinaportorico/p/DUAykgLDvrG/",
];

function InstagramFeed() {
  return (
    <section
      id="feed"
      className="py-10 lg:py-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
              <FaInstagram className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Siga-nos no Instagram
            </h2>
          </div>
          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Acompanhe nossos últimos posts e fique por dentro das novidades da
            Usina Porto Rico
          </p>
          <a
            href="https://www.instagram.com/usinaportorico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FaInstagram className="w-5 h-5" />
            @usinaportorico
          </a>
        </motion.div>

        {/* Desktop: Grid | Mobile: Swiper */}

        {/* Desktop Grid (oculto no mobile) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {instagramPosts.slice(0, 6).map((postUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[400px]">
                <InstagramEmbed url={postUrl} width="100%" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper (visível apenas no mobile) */}
        <div className="lg:hidden relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".instagram-button-prev",
              nextEl: ".instagram-button-next",
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !bg-pink-500",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            className="instagram-swiper pb-12"
          >
            {instagramPosts.map((postUrl, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center px-4">
                  <div className="w-full max-w-[400px]">
                    <InstagramEmbed url={postUrl} width="100%" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botões de navegação customizados - CORRIGIDO */}
          <button
            className="instagram-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Anterior"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <HiChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            className="instagram-button-next absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Próximo"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <HiChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .instagram-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .instagram-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
        }
        .instagram-swiper .swiper-pagination-bullet-active {
          background: #ec4899 !important;
          width: 24px;
          border-radius: 4px;
        }

        /* Garante que os botões fiquem acima do iframe */
        .instagram-button-prev,
        .instagram-button-next {
          pointer-events: auto !important;
        }

        /* Impede que o swiper capture os cliques dos botões */
        .instagram-swiper {
          position: relative;
        }
      `}</style>
    </section>
  );
}

export default InstagramFeed;
