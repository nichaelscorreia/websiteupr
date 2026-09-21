import React from "react";
import { motion } from "framer-motion";
import renovabioImg from "../assets/renovabio.png";
import abrinqImg from "../assets/logo-abrinq.png";

const certificacoes = [
  {
    nome: "RenovaBio",
    logo: renovabioImg,
    link: "https://www.gov.br/anp/pt-br/assuntos/renovabio",
  },
  {
    nome: "Fundação Abrinq",
    logo: abrinqImg,
    link: "https://www.fadc.org.br/",
  },
];

function CertificacoesInline() {
  return (
    <section className="relative pb-4 px-4 lg:px-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239, 35, 60) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Label Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-14 bg-gradient-to-b from-usina-primary to-usina-secondary rounded-full"></div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-1">
                    Certificações
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Nossos Compromissos
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Divider Vertical (Desktop) */}
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

            {/* Divider Horizontal (Mobile) */}
            <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

            {/* Logos Section */}
            <div className="flex items-center gap-6 lg:gap-10">
              {certificacoes.map((cert, index) => (
                <motion.a
                  key={cert.nome}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group cursor-pointer"
                  title={`Saiba mais sobre ${cert.nome}`}
                >
                  <div className="relative">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-usina-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Logo Container */}
                    <div className="relative bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border-2 border-gray-200 dark:border-gray-700 group-hover:border-usina-primary/50 dark:group-hover:border-usina-primary/50 transition-all duration-300 group-hover:shadow-xl">
                      <img
                        src={cert.logo}
                        alt={cert.nome}
                        className="h-12 lg:h-14 w-auto object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificacoesInline;
