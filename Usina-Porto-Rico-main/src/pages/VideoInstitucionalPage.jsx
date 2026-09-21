import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  HiExclamationTriangle,
  HiDocumentText,
  HiSparkles,
} from "react-icons/hi2";
import { FaLeaf } from "react-icons/fa";
import InfoCard from "../components/InfoCard";
import HeroSection from "../components/HeroSection";
import imgHero from "../assets/socioamb.png";
import videoInstitucional from "../assets/24.mp4";

const cards = [
  {
    id: "historia",
    title: "Nossa História",
    description:
      "Mais de cinco décadas de tradição, inovação e compromisso com o desenvolvimento do setor.",
    icon: <HiDocumentText className="w-8 h-8" />,
    link: "/a-usina/historia",
  },
  {
    id: "valores",
    title: "Valores e Propósito",
    description:
      "Os princípios que guiam nossa atuação e nosso compromisso com a excelência.",
    icon: <HiSparkles className="w-8 h-8" />,
    link: "/#valores",
  },
  {
    id: "sustentabilidade",
    title: "Sustentabilidade",
    description:
      "Práticas sustentáveis e responsabilidade ambiental em toda nossa cadeia produtiva.",
    icon: <FaLeaf className="w-8 h-8" />,
    link: "/#sustentabilidade",
  },
];

function VideoInstitucionalPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleError = (e) => {
    setHasError(true);
    console.error("Erro ao carregar o vídeo:", e);
    console.error("Caminho tentado:", videoRef.current?.currentSrc);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="Vídeo"
        highlightText="Institucional"
        description="Conheça nossa história, valores e compromisso com o futuro sustentável."
        backgroundImage={imgHero}
        backgroundPosition="center 20%"
        height="70vh"
      />

      {/* Content Section */}
      <main className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-usina-primary to-usina-secondary p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Usina Porto Rico
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Assista ao nosso vídeo institucional e descubra como trabalhamos
                para construir um futuro mais sustentável e próspero para todos.
              </p>
            </div>

            {/* Video Player */}
            <div className="p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl"
              >
                {hasError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    <HiExclamationTriangle className="w-16 h-16 text-[#EF233C] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">
                      Erro ao carregar o vídeo
                    </h3>
                    <p className="text-gray-400 max-w-md">
                      Não foi possível carregar o vídeo. Verifique o console
                      para mais detalhes.
                    </p>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={handleError}
                    controls
                    preload="metadata"
                  >
                    <source src={videoInstitucional} type="video/mp4" />
                    Seu navegador não suporta a reprodução de vídeos.
                  </video>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Conheça Mais Sobre a Usina Porto Rico
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-3xl mx-auto">
              Explore nossa trajetória, valores e compromissos!
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {cards.map((card, index) => (
              <InfoCard key={card.id} {...card} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default VideoInstitucionalPage;
