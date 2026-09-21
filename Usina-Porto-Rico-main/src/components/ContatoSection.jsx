import React from "react";
import { motion } from "framer-motion";
import {
  TbMapPin,
  TbMail,
  TbPhone,
  TbPrinter,
  TbBrandInstagram,
} from "react-icons/tb";
import { HiArrowRight } from "react-icons/hi2";

// Componente auxiliar para os itens de contato
const ContatoItem = ({ icon, title, children, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-usina-primary/10 dark:bg-usina-primary/20 flex items-center justify-center group-hover:bg-usina-primary group-hover:scale-110 transition-all duration-300">
      {React.cloneElement(icon, {
        className:
          "w-6 h-6 text-usina-primary group-hover:text-white transition-colors",
      })}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-base">
        {title}
      </h3>
      <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  </motion.div>
);

function ContatoSection() {
  const contactItems = [
    {
      icon: <TbMapPin />,
      title: "Endereço",
      content: (
        <>
          <p>Fazenda São José - Campo Alegre-AL</p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
            CEP: 57253-899
          </p>
        </>
      ),
    },
    {
      icon: <TbMail />,
      title: "E-mail",
      content: (
        <a
          href="mailto:usinaportorico@grupoolivaltenorio.com.br"
          className="hover:text-usina-primary transition-colors break-all inline-flex flex-wrap items-center gap-1 group/link"
        >
          <span className="break-all">
            usinaportorico@grupoolivaltenorio.com.br
          </span>
          <HiArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
        </a>
      ),
    },
    {
      icon: <TbPhone />,
      title: "Telefones",
      content: (
        <>
          <p>(82) 3512-0023</p>
        </>
      ),
    },
    {
      icon: <TbPrinter />,
      title: "Fax",
      content: <p>(82) 3512-0023</p>,
    },
    {
      icon: <TbBrandInstagram />,
      title: "Instagram",
      content: (
        <a
          href="https://www.instagram.com/usinaportorico"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-usina-primary transition-colors inline-flex items-center gap-1 group/link"
        >
          @usinaportorico
          <HiArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
        </a>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nossas portas estão sempre abertas para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Coluna Esquerda: Informações de Contato */}
          <div className="space-y-2">
            {contactItems.map((item, index) => (
              <ContatoItem
                key={index}
                icon={item.icon}
                title={item.title}
                index={index}
              >
                {item.content}
              </ContatoItem>
            ))}

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-usina-primary/10 to-usina-primary/5 dark:from-usina-primary/20 dark:to-usina-primary/10 border border-usina-primary/20"
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-bold text-usina-primary">
                  Horário de atendimento:
                </span>{" "}
                Segunda a sexta, das 8h às 17h.
              </p>
            </motion.div>
          </div>

          {/* Coluna Direita: Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px] lg:min-h-[600px]"
          >
            {/* Border gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-usina-primary/20 to-transparent p-0.5 rounded-3xl">
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3777.85767072967!2d-36.218969!3d-9.814279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7041e4c92f5671b%3A0x4e9cd16e227e7f54!2sIndustrial%20Porto%20Rico!5e1!3m2!1spt-BR!2sbr!4v1759860442164!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContatoSection;
