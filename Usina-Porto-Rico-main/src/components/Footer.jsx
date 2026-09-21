import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RedButton from "./RedButton";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbMail,
  TbPhone,
  TbMapPin,
} from "react-icons/tb";
import logoUsina from "../assets/UPR-LOGO-BRANCA.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <TbBrandFacebook className="w-5 h-5" />,
      href: "https://facebook.com/usinaportorico",
      label: "Facebook",
    },
    {
      icon: <TbBrandInstagram className="w-5 h-5" />,
      href: "https://instagram.com/usinaportorico",
      label: "Instagram",
    },
    {
      icon: <TbBrandLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/company/usinaportorico",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { name: "A Usina", path: "/a-usina" },
    { name: "Negócios & Produtos", path: "/negocios-e-produtos" },
    { name: "Carreiras", path: "/carreiras" },
    { name: "Transparência", path: "/transparencia" },
  ];

  const legalLinks = [
    { name: "Aviso de Privacidade / LGPD", path: "/politicas" },
    { name: "Política de Cookies", path: "/politicas" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-usina-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-usina-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 lg:px-10 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Coluna 1: Logo e Descrição */}
            <div className="lg:col-span-1">
              <img
                src={logoUsina}
                alt="Usina Porto Rico"
                className="h-16 mb-6"
              />
              <p className="text-gray-400 leading-relaxed mb-6">
                Compromisso com a excelência e sustentabilidade no setor
                sucroenergético.
              </p>
              {/* Redes Sociais */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-usina-primary flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    {React.cloneElement(social.icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-usina-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-usina-primary group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Contato */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <TbMapPin className="w-5 h-5 text-usina-primary flex-shrink-0 mt-1" />
                  <span className="text-sm leading-relaxed">
                    Fazenda São José
                    <br />
                    Campo Alegre-AL
                    <br />
                    CEP: 57253-899
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <TbPhone className="w-5 h-5 text-usina-primary flex-shrink-0" />
                  <span className="text-sm">(82) 3512-0023</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <TbMail className="w-5 h-5 text-usina-primary flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:usinaportorico@grupoolivaltenorio.com.br"
                    className="text-sm hover:text-usina-primary transition-colors break-words"
                  >
                    usinaportorico@
                    <br />
                    grupoolivaltenorio.com.br
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Newsletter ou CTA */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">
                Fique por Dentro
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Receba as últimas notícias e atualizações da Usina Porto Rico.
              </p>
              <RedButton
                text="Trabalhe Conosco"
                to="/carreiras"
                size="sm"
                variant="primary"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Usina Porto Rico. Todos os direitos reservados.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-usina-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-700">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Made with */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-xs">
              Desenvolvido com <span className="text-[#EF233C]">♥</span> pela
              <a
                href="https://www.mavien.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Mavien
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
