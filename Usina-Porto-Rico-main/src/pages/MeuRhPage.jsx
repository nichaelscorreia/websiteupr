import React from "react";
import { motion } from "framer-motion";
import { HiDevicePhoneMobile, HiCheckCircle } from "react-icons/hi2";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import imgMeuRh from "../assets/apprh.png";

const funcionalidades = [
  "Consulta de holerites",
  "Dados pessoais atualizados",
  "Dependentes",
  "Informe de rendimentos",
  "Comunicados e eventos direto no celular",
  "E muito mais!",
];

function MeuRhPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="APP"
        highlightText="Meu RH"
        description="Seu aplicativo de Recursos Humanos na palma da mão. Gerencie sua vida profissional com praticidade e segurança."
        backgroundImage={imgMeuRh}
        backgroundPosition="center -70%"
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
                  <HiDevicePhoneMobile className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Baixe o App CS Meu RH
                </h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                Tenha acesso rápido e fácil a todas as informações do seu
                departamento de RH. Disponível para Android e iOS.
              </p>
            </div>

            {/* Card Body */}
            <div className="p-8 lg:p-12">
              {/* Funcionalidades */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Funcionalidades do App:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {funcionalidades.map((funcionalidade, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <HiCheckCircle className="w-6 h-6 text-usina-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {funcionalidade}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-12" />

              {/* Download Buttons */}
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Baixe agora gratuitamente
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Escolha sua plataforma e comece a usar o CS Meu RH hoje mesmo.
                </p>

                {/* Download Buttons Grid */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  {/* Google Play Button */}
                  <motion.a
                    href="https://play.google.com/store/apps/details?id=br.com.cscompusoftware.cs_meu_rh"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl min-w-[240px]"
                  >
                    <FaGooglePlay className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Disponível no</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </motion.a>

                  {/* Apple App Store Button */}
                  <motion.a
                    href="https://apps.apple.com/br/app/cs-meu-rh/id6470809064"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl min-w-[240px]"
                  >
                    <FaApple className="w-8 h-8" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Baixe na</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Card - Suporte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-12 border-2 border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Precisa de ajuda?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Nossa equipe de suporte está pronta para ajudá-lo com qualquer
              dúvida sobre o aplicativo CS Meu RH.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+558235120023"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-usina-primary hover:bg-usina-secondary text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                📞 (82) 3512-0023
              </a>
              <a
                href="mailto:recrutamento@grupoolivaltenorio.com.br"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <span className="break-all">
                  ✉️ recrutamento@grupoolivaltenorio.com.br
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default MeuRhPage;
