import React from "react";
import { HiEnvelope, HiChartBar, HiUser } from "react-icons/hi2";
import InfoCard from "../components/InfoCard";
import HeroSection from "../components/HeroSection";
import imgColaboradores from "../assets/colaborador.jpg";

// Links principais do colaborador
const linksColaborador = [
  {
    id: "meu-rh",
    title: "App Meu RH",
    link: "/colaboradores/meu-rh",
    description:
      "Acesse o portal de Recursos Humanos para holerites e informações pessoais.",
    icon: <HiUser className="w-8 h-8" />,
  },
  {
    id: "webmail",
    title: "Webmail",
    link: "https://webmail-seguro.com.br/grupoolivaltenorio.com.br/",
    description:
      "Acesse seu e-mail corporativo do Grupo Olival Tenorio de qualquer lugar.",
    icon: <HiEnvelope className="w-8 h-8" />,
  },
  {
    id: "holerite",
    title: "Holerite Online",
    link: "https://nstech.ddns.net:8443/NSTechWebUPR/Web/index.jsf",
    description:
      "Acesse seus holerites de forma rápida e segura!",
    icon: <HiChartBar className="w-8 h-8" />,
  },
  {
    id: "stratws",
    title: "Stratws",
    link: "https://usinaportorico.stratws.com/",
    description:
      "Plataforma de gestão de performance e estratégias da Usina Porto Rico.",
    icon: <HiChartBar className="w-8 h-8" />,
  },
];

function ColaboradoresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="Área do"
        highlightText="Colaborador"
        description="Acesso rápido às principais ferramentas e sistemas para os colaboradores da Usina Porto Rico."
        backgroundImage={imgColaboradores}
        backgroundPosition="center 60%"
        height="70vh"
      />

      {/* Cards Section */}
      <main className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {linksColaborador.map((link, index) => (
              <InfoCard key={link.id} {...link} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ColaboradoresPage;
