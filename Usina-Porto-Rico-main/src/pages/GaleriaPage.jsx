import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiCamera,
  HiXMark,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import HeroSection from "../components/HeroSection";

// Importar todas as imagens
import imgHero from "../assets/gearUsina.jpg";
import imgCampo1 from "../assets/galeria/campo1.jpg";
import imgCampo2 from "../assets/galeria/campo2.JPG";
import imgCampo3 from "../assets/galeria/campo3.JPG";
import imgCampo4 from "../assets/galeria/campo4.JPG";
import imgCampo5 from "../assets/galeria/campo5.JPG";
import imgCampo6 from "../assets/galeria/campo6.JPG";
import imgCampo7 from "../assets/galeria/campo7.JPG";
import imgIrri1 from "../assets/galeria/irri1.jpg";
import imgIrri2 from "../assets/galeria/irri2.jpg";
import imgIrri3 from "../assets/galeria/irri3.jpg";
import imgIrri4 from "../assets/galeria/irri4.jpg";
import imgIrri5 from "../assets/galeria/irri5.jpg";
import imgIrri6 from "../assets/galeria/irri6.jpg";
import imgInd1 from "../assets/galeria/ind1.webp";
import imgInd2 from "../assets/galeria/ind2.jpg";
import imgInd3 from "../assets/galeria/ind3.jpg";
import imgInd4 from "../assets/galeria/ind4.png";
import imgInd5 from "../assets/galeria/ind5.png";
import imgInd6 from "../assets/galeria/ind6.jpg";
import imgInd7 from "../assets/galeria/ind7.jpg";
import imgInd8 from "../assets/galeria/ind8.jpg";
import imgInd9 from "../assets/galeria/ind9.jpg";
import imgAdm1 from "../assets/galeria/adm1.png";
import imgAdm2 from "../assets/galeria/adm2.jpg";
import imgAdm3 from "../assets/galeria/adm3.jpg";
import imgColheita1 from "../assets/galeria/colheita1.png";
import imgColheita2 from "../assets/galeria/colheita2.jpg";
import imgColheita3 from "../assets/galeria/colheita3.jpg";
import imgColheita4 from "../assets/galeria/colheita4.jpg";
import imgColheita5 from "../assets/galeria/colheita5.jpg";
import imgColheita6 from "../assets/galeria/colheita6.jpg";

// ==================== COMPONENTE DE IMAGEM COM SKELETON ====================
const LazyImage = ({ src, alt, onClick, categoria }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "100px", // Começa a carregar 100px antes
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={imgRef}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
      style={{ paddingBottom: "100%" }}
      onClick={onClick}
    >
      <div className="absolute inset-0">
        {/* Skeleton Animado */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse">
            {/* Efeito shimmer */}
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Ícone de câmera no centro */}
            <div className="absolute inset-0 flex items-center justify-center">
              <HiCamera className="w-12 h-12 text-gray-400 dark:text-gray-500 opacity-30" />
            </div>
          </div>
        )}

        {/* Imagem Real - só carrega quando está no viewport */}
        {isInView && (
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isLoaded
                ? "opacity-100 scale-100 blur-0 group-hover:scale-110"
                : "opacity-0 scale-110 blur-2xl"
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
          />
        )}

        {/* Overlay com hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
            isLoaded ? "opacity-0 group-hover:opacity-100" : "opacity-0"
          }`}
        />

        {/* Info */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
            isLoaded
              ? "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              : "opacity-0"
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#EF233C] text-white text-xs font-semibold mb-2">
            {categoria}
          </span>
          <p className="text-white font-semibold line-clamp-2">{alt}</p>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== COMPONENTE DE IMAGEM DO MODAL ====================
const ModalImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full" style={{ paddingBottom: "75%" }}>
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        {/* Skeleton no modal */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="relative">
              {/* Spinner */}
              <div className="w-16 h-16 border-4 border-white/10 border-t-white rounded-full animate-spin" />
              {/* Texto */}
              <p className="text-white/60 text-sm mt-4 text-center">
                Carregando...
              </p>
            </div>
          </div>
        )}

        {/* Imagem do modal */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-contain transition-all duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

// Array de imagens
const galeriaImagens = [
  {
    id: 1,
    src: imgCampo1,
    alt: "Barragem para Irrigação de cana-de-açúcar",
    categoria: "Campo",
  },
  {
    id: 2,
    src: imgCampo2,
    alt: "Preparo de Solo Georreferenciado",
    categoria: "Campo",
  },
  {
    id: 3,
    src: imgCampo3,
    alt: "Irrigação com Pivot Central",
    categoria: "Campo",
  },
  {
    id: 4,
    src: imgCampo4,
    alt: "Irrigação com Pivot Central",
    categoria: "Campo",
  },
  {
    id: 5,
    src: imgCampo5,
    alt: "Cana Cortada Manualmente",
    categoria: "Campo",
  },
  { id: 6, src: imgCampo6, alt: "Piscina de Decantação da Vinhaça e Águas Residuárias", categoria: "Campo" },
  { id: 7, src: imgCampo7, alt: "Piscina e Irrigação por Gotejamento", categoria: "Campo" },
  {
    id: 8,
    src: imgIrri1,
    alt: "Projeto de Irrigação por Gotejamento",
    categoria: "Irrigação",
  },
  {
    id: 9,
    src: imgIrri2,
    alt: "Projeto de Irrigação por Gotejamento",
    categoria: "Irrigação",
  },
  {
    id: 10,
    src: imgIrri3,
    alt: "Dia de Campo – Palestras Agrícolas",
    categoria: "Irrigação",
  },
  {
    id: 22,
    src: imgIrri4,
    alt: "Pivot Central Irrigador",
    categoria: "Irrigação",
  },
  {
    id: 23,
    src: imgIrri5,
    alt: "Fertirrigação Localizada com Vinhaça Enriquecida",
    categoria: "Irrigação",
  },
  {
    id: 24,
    src: imgIrri6,
    alt: "Irrigação com Pivot em cana-de-açúcar",
    categoria: "Irrigação",
  },
  {
    id: 11,
    src: imgInd1,
    alt: "Destilaria anexa (Etanol) –Industrial Porto Rico S.A.",
    categoria: "Indústria",
  },
  {
    id: 12,
    src: imgInd2,
    alt: "Complexo industrial em operação",
    categoria: "Indústria",
  },
  { id: 13, src: imgInd3, alt: "Pátio de estacionamento Industrial", categoria: "Indústria" },
  {
    id: 14,
    src: imgInd4,
    alt: "Vista lateral da indústria",
    categoria: "Indústria",
  },
  { id: 21, src: imgInd5, alt: "Central de Turbinas de açúcar", categoria: "Indústria" },
  { id: 27, src: imgInd6, alt: "Vista aérea", categoria: "Indústria" },
  { id: 29, src: imgInd7, alt: "Monumento Industrial", categoria: "Indústria" },
  { id: 30, src: imgInd8, alt: "Tancagem armazenadora de Etanol", categoria: "Indústria" },
  { id: 31, src: imgInd9, alt: "", categoria: "Indústria" },
  {
    id: 15,
    src: imgAdm1,
    alt: "Sede administrativa",
    categoria: "Administrativo",
  },
  {
    id: 16,
    src: imgAdm2,
    alt: "Portaria principal da Usina Porto Rico",
    categoria: "Administrativo",
  },
  {
    id: 28,
    src: imgAdm3,
    alt: "Escritório Usina Porto Rico",
    categoria: "Administrativo",
  },
  {
    id: 17,
    src: imgColheita1,
    alt: "Colheita mecanizada de cana-de-açúcar",
    categoria: "Colheita",
  },
  {
    id: 18,
    src: imgColheita2,
    alt: "Transbordo de cana-de-açúcar no corte mecanizado.",
    categoria: "Colheita",
  },
  {
    id: 19,
    src: imgColheita3,
    alt: "Transbordo de cana-de-açúcar no corte mecanizado.",
    categoria: "Colheita",
  },
  {
    id: 20,
    src: imgColheita4,
    alt: "Transbordo de cana-de-açúcar no corte mecanizado.",
    categoria: "Colheita",
  },
  {
    id: 25,
    src: imgColheita5,
    alt: "Colheita mecanizada de cana-de-açúcar",
    categoria: "Colheita",
  },
  {
    id: 26,
    src: imgColheita6,
    alt: "Colheita mecanizada de cana-de-açúcar",
    categoria: "Colheita",
  },
];

const categorias = [
  "Todas",
  "Campo",
  "Irrigação",
  "Indústria",
  "Administrativo",
  "Colheita",
];

function GaleriaPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [indiceAtual, setIndiceAtual] = useState(0);

  const imagensFiltradas =
    categoriaAtiva === "Todas"
      ? galeriaImagens
      : galeriaImagens.filter((img) => img.categoria === categoriaAtiva);

  const abrirModal = (imagem, indice) => {
    setImagemSelecionada(imagem);
    setIndiceAtual(indice);
  };

  const fecharModal = () => {
    setImagemSelecionada(null);
  };

  const proximaImagem = () => {
    const novoIndice = (indiceAtual + 1) % imagensFiltradas.length;
    setIndiceAtual(novoIndice);
    setImagemSelecionada(imagensFiltradas[novoIndice]);
  };

  const imagemAnterior = () => {
    const novoIndice =
      indiceAtual === 0 ? imagensFiltradas.length - 1 : indiceAtual - 1;
    setIndiceAtual(novoIndice);
    setImagemSelecionada(imagensFiltradas[novoIndice]);
  };

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!imagemSelecionada) return;
      if (e.key === "ArrowLeft") imagemAnterior();
      if (e.key === "ArrowRight") proximaImagem();
      if (e.key === "Escape") fecharModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imagemSelecionada, indiceAtual]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeroSection
        title="Galeria de"
        highlightText="Fotos"
        description="Conheça nossas instalações, estruturas e territórios através de imagens."
        backgroundImage={imgHero}
        height="70vh"
      />

      <main className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#EF233C]/10 dark:bg-[#EF233C]/20 flex items-center justify-center">
                <HiCamera className="w-7 h-7 text-[#EF233C]" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Nossas Instalações
              </h2>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-3">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setCategoriaAtiva(categoria)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    categoriaAtiva === categoria
                      ? "bg-[#EF233C] text-white shadow-lg scale-105"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow"
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid de Imagens */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {imagensFiltradas.map((imagem, index) => (
                <LazyImage
                  key={imagem.id}
                  src={imagem.src}
                  alt={imagem.alt}
                  categoria={imagem.categoria}
                  onClick={() => abrirModal(imagem, index)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Contador */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Exibindo{" "}
              <strong className="text-[#EF233C]">
                {imagensFiltradas.length}
              </strong>{" "}
              {imagensFiltradas.length === 1 ? "imagem" : "imagens"}
              {categoriaAtiva !== "Todas" && (
                <span>
                  {" "}
                  na categoria <strong>{categoriaAtiva}</strong>
                </span>
              )}
            </p>
          </motion.div>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {imagemSelecionada && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={fecharModal}
          >
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <HiXMark className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                imagemAnterior();
              }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <HiChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                proximaImagem();
              }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <HiChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <ModalImage
                src={imagemSelecionada.src}
                alt={imagemSelecionada.alt}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#EF233C] text-white text-xs font-semibold mb-2">
                      {imagemSelecionada.categoria}
                    </span>
                    <p className="text-white font-semibold text-lg">
                      {imagemSelecionada.alt}
                    </p>
                  </div>
                  <p className="text-white/60 text-sm">
                    {indiceAtual + 1} / {imagensFiltradas.length}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white/60 text-sm">
              <span>← → Navegar</span>
              <span>ESC Fechar</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GaleriaPage;
