// src/pages/SustentabilidadePage.jsx
import React from "react";
import { motion } from "framer-motion";
import { HiSparkles, HiCheckCircle } from "react-icons/hi2";
import { FaLeaf, FaSeedling, FaRecycle, FaWater, FaTree } from "react-icons/fa";

import imgSustentabilidade from "../assets/socioamb.png";

const pilaresAmbientais = [
  {
    icon: <FaTree />,
    titulo: "Reflorestamento",
    descricao: "Mais de 120 hectares de áreas reflorestadas",
    numero: "120+",
    unidade: "hectares",
  },
  {
    icon: <FaSeedling />,
    titulo: "Produção de Mudas",
    descricao: "Mais de 285 mil mudas de espécies da Mata Atlântica",
    numero: "285mil+",
    unidade: "mudas",
  },
  {
    icon: <FaWater />,
    titulo: "Gestão Hídrica",
    descricao: "Uso consciente e responsável dos recursos hídricos",
    numero: "100%",
    unidade: "monitorado",
  },
  {
    icon: <FaRecycle />,
    titulo: "Reciclagem",
    descricao: "Aproveitamento de resíduos e economia circular",
    numero: "95%",
    unidade: "reaproveitamento",
  },
];

const acoesAmbientais = [
  "Produção de mudas de espécies nativas da Mata Atlântica",
  "Reflorestamento de áreas degradadas",
  "Doações de mudas para órgãos públicos",
  "Projetos de conscientização ambiental",
  "Monitoramento contínuo de impactos ambientais",
  "Preservação de nascentes e cursos d'água",
  "Educação ambiental para colaboradores e comunidade",
  "Manejo sustentável do solo e da água",
];

function SustentabilidadePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden lg:-mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgSustentabilidade})` }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent" />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />

        {/* Content */}
        <div className="relative h-full flex items-end z-20">
          <div className="max-w-7xl mx-auto w-full px-4 lg:px-10 pb-12 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
                <span className="text-green-400 relative inline-block">
                  Sustentabilidade
                  {/* Underline */}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-0 left-0 h-1 bg-green-400 rounded-full"
                  />
                </span>
                <br />
                Um compromisso de décadas
              </h1>

              {/* Description */}
              <p className="text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                Cuidar do meio ambiente é um compromisso que cultivamos há
                décadas, com responsabilidade e visão de futuro.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
      </section>

      {/* Content Section */}
      <main className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <div className="space-y-16">
            {/* Intro Text */}
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                  <FaLeaf className="w-10 h-10 text-green-500" />
                </div>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Compromisso Ambiental
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Com mais de 120 hectares de áreas reflorestadas e mais de 285
                mil mudas utilizadas, seguimos firmes no propósito de plantar
                com responsabilidade e garantir um futuro mais verde.
              </p>
            </div>

            {/* Pilares Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pilaresAmbientais.map((pilar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-green-100 dark:border-green-900">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                      {React.cloneElement(pilar.icon, {
                        className:
                          "w-8 h-8 text-green-500 group-hover:text-white transition-colors",
                      })}
                    </div>

                    {/* Number */}
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-500 mb-1">
                        {pilar.numero}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {pilar.unidade}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {pilar.titulo}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {pilar.descricao}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Ações Ambientais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10 rounded-3xl p-8 lg:p-12 border-2 border-green-200 dark:border-green-800"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                  <HiSparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Nossas Ações Ambientais
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {acoesAmbientais.map((acao, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
                  >
                    <HiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {acao}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center bg-green-500 rounded-3xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-4">
                Inteligência Ecológica e Crescimento Responsável 🌱
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Crescimento responsável e produção eficiente. Na Usina Porto
                Rico, operamos sob a premissa de que a indústria moderna deve
                atuar em sintonia com o meio ambiente. Nossas diretrizes de
                sustentabilidade integram o vigor do agronegócio à inteligência
                ecológica, assegurando a perenidade do negócio e o respeito às
                futuras gerações. 🌎
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SustentabilidadePage;
