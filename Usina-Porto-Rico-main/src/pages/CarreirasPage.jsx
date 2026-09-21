import React from "react";
import {
  TbBriefcase,
  TbSchool,
  TbUserPlus,
  TbTrendingUp,
} from "react-icons/tb";
import InfoCard from "../components/InfoCard";
import HeroSection from "../components/HeroSection";
import imgCarreiras from "../assets/oportunidades2.jpg";

const oportunidades = [
  {
    id: "vagas",
    icon: <TbBriefcase className="w-8 h-8" />,
    title: "Trabalhe Conosco",
    description:
      "Confira nossas vagas abertas, envie seu currículo e venha fazer parte da nossa equipe.",
    link: "/carreiras/vagas",
  },
  {
    id: "estagio",
    icon: <TbSchool className="w-8 h-8" />,
    title: "Programa de Estágio",
    description:
      "Inicie sua jornada profissional aprendendo na prática em um ambiente de inovação e excelência.",
    link: "/carreiras/estagio",
  },
  {
    id: "jovem-aprendiz",
    icon: <TbUserPlus className="w-8 h-8" />,
    title: "Programa Jovem Aprendiz",
    description:
      "Oferecemos a sua primeira oportunidade de trabalho, combinando aprendizado teórico e prático.",
    link: "/carreiras/jovem-aprendiz",
  },
  {
    id: "historias",
    icon: <TbTrendingUp className="w-8 h-8" />,
    title: "Histórias de Crescimento",
    description:
      "Conheça a trajetória de colaboradores que cresceram e se desenvolveram conosco.",
    link: "/carreiras/historias-de-crescimento",
  },
];

function CarreirasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="Oportunidades de"
        highlightText="Carreira"
        description="Venha crescer com a gente e fazer parte de uma equipe que transforma o futuro do setor sucroenergético."
        backgroundImage={imgCarreiras}
        backgroundPosition="center 45%"
        height="70vh"
      />

      {/* Cards Section */}
      <main className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            {oportunidades.map((oportunidade, index) => (
              <InfoCard key={oportunidade.id} {...oportunidade} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CarreirasPage;
