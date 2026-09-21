import React from "react";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi2";
import videoSrc from "/background_home.mp4";

function BackgroundHome() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative lg:h-screen h-[90vh] overflow-hidden lg:-mt-20 mt-0">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover contrast-[1.1]"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay gradiente sofisticado com múltiplas camadas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#EF233C]/10 to-transparent z-10" />

      {/* Vignette effect nas bordas */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 z-10" />

      {/* Conteúdo centralizado */}
      <div className="relative h-full flex flex-col items-center justify-center z-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          >
            Nosso propósito é crescer com responsabilidade
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Unindo pessoas, resultados e sustentabilidade em cada passo.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group z-30"
        aria-label="Rolar para baixo"
      >
        <span className="text-sm font-medium uppercase tracking-wider text-center">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 rounded-full border-2 border-white/40 group-hover:border-white/80 flex items-center justify-center transition-colors"
        >
          <HiArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#EF233C]/20 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#EF233C]/20 rounded-full blur-3xl z-10" />
    </section>
  );
}

export default BackgroundHome;
