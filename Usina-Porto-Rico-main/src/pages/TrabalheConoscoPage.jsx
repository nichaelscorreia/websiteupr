import React from "react";
import { motion } from "framer-motion";
import { HiCheckCircle, HiBriefcase } from "react-icons/hi2";
import RedButton from "../components/RedButton";
import HeroSection from "../components/HeroSection";
import imgCarreiras from "../assets/trabalheConosco.png";

const beneficios = [
  "Valorizamos pessoas e suas trajetórias únicas",
  "Ambiente que atrai e desenvolve talentos",
  "Programas de capacitação e crescimento",
  "Compromisso com diversidade e inclusão",
  "Foco na saúde e segurança de todos",
  "Oportunidades de crescimento profissional",
];

function CarreirasTrabalheConosco() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="Trabalhe"
        highlightText="Conosco"
        description="Venha fazer parte de uma equipe que transforma vidas e constrói o futuro do setor sucroenergético."
        backgroundImage={imgCarreiras}
        height="70vh"
      />

      {/* Content Section */}
      <main className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-usina-primary to-usina-secondary p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <HiBriefcase className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Por que trabalhar na Usina Porto Rico?
                </h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                Aqui, valorizamos pessoas, atraímos talentos, desenvolvemos
                habilidades, promovemos a diversidade e a inclusão, e cuidamos
                da saúde e segurança de todos.
              </p>
            </div>

            {/* Card Body */}
            <div className="p-8 lg:p-12">
              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {beneficios.map((beneficio, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <HiCheckCircle className="w-6 h-6 text-usina-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {beneficio}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-8" />

              {/* CTA Section */}
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Pronto para começar?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Cadastre seu currículo em nosso sistema e seja notificado
                  quando surgirem oportunidades que combinam com seu perfil.
                </p>

                {/* CTA Button */}
                <div className="flex justify-center pt-4">
                  <RedButton
                    text="Faça parte do nosso time!"
                    href="https://app.grupoolivaltenorio.com.br/ords/apex/r/csdesenv/cs-curriculo/login?session=12136658335430"
                    size="lg"
                    variant="primary"
                    external
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default CarreirasTrabalheConosco;
