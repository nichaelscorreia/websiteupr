import React from "react";
import { HiDocumentText, HiSparkles, HiCamera } from "react-icons/hi2";
import InfoCard from "../components/InfoCard";
import HeroSection from "../components/HeroSection";
import imgCarreiras from "../assets/galeria/adm3.jpg";

const cards = [
  {
    id: "historia",
    title: "História",
    description:
      "Conheça a trajetória que nos tornou líderes no setor sucroenergético",
    icon: <HiDocumentText className="w-8 h-8" />,
    link: "/a-usina/historia",
  },
  {
    id: "valores",
    title: "Valores e Propósito",
    description: "Os princípios que guiam todas as nossas ações e decisões",
    icon: <HiSparkles className="w-8 h-8" />,
    link: "/#valores",
  },
  {
    id: "galeria",
    title: "Galeria de Fotos",
    description: "Momentos e conquistas registrados ao longo da nossa jornada",
    icon: <HiCamera className="w-8 h-8" />,
    link: "/a-usina/galeria",
  },
];

function AUsinaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="A Usina, Nossa História e"
        highlightText="Valores"
        description="Descubra a jornada que nos trouxe até aqui e os valores que nos impulsionam para o futuro."
        backgroundImage={imgCarreiras}
        height="70vh"
      />

      {/* Cards Section */}
      <main className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
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

export default AUsinaPage;
