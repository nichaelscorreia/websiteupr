import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiClock,
  HiCheckCircle,
  HiExclamationCircle,
} from "react-icons/hi2";
import { FaWhatsapp, FaInstagram, FaFax } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import imgHero from "../assets/img_enter3.jpg";

function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "fdbb0a65-7b23-44b8-99b8-49ffe2460cbe");
    formDataToSend.append("nome", formData.nome);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("telefone", formData.telefone);
    formDataToSend.append("assunto", formData.assunto);
    formDataToSend.append("mensagem", formData.mensagem);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
          mensagem: "",
        });
        setTimeout(() => setResult(null), 5000);
      } else {
        setResult("error");
        setTimeout(() => setResult(null), 5000);
      }
    } catch (error) {
      console.error("Erro:", error);
      setResult("error");
      setTimeout(() => setResult(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contatosInfo = [
    {
      icon: <HiMapPin className="w-6 h-6" />,
      titulo: "Endereço",
      conteudo: "Fazenda São José - Campo Alegre-AL",
      complemento: "CEP: 57253-899",
      link: "https://www.google.com/maps/place/Industrial+Porto+Rico/@-9.814279,-36.218969,17z",
      cor: "from-green-500 to-emerald-500",
    },
    {
      icon: <HiEnvelope className="w-6 h-6" />,
      titulo: "E-mail",
      conteudo: "usinaportorico@grupoolivaltenorio.com.br",
      link: "mailto:usinaportorico@grupoolivaltenorio.com.br",
      cor: "from-usina-primary to-usina-secondary",
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      titulo: "Telefone",
      conteudo: "(82) 3512-0023",
      link: "tel:+558235120023",
      cor: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaFax className="w-6 h-6" />,
      titulo: "Fax",
      conteudo: "(82) 3512-0023",
      link: null,
      cor: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="Entre em"
        highlightText="Contato"
        description="Nossas portas estão sempre abertas para você. Estamos à disposição para tirar dúvidas, ouvir sugestões e fortalecer relações."
        backgroundImage={imgHero}
        height="70vh"
      />

      {/* Content Section */}
      <main className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Info Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contatosInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block h-full"
                  >
                    <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-usina-primary/50 dark:hover:border-usina-primary/50 group-hover:-translate-y-1">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.cor} flex items-center justify-center text-white mb-4 shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                        {item.titulo}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed break-all">
                        {item.conteudo}
                      </p>
                      {item.complemento && (
                        <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                          {item.complemento}
                        </p>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-100 dark:border-gray-700">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.cor} flex items-center justify-center text-white mb-4 shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                      {item.titulo}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.conteudo}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form and Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2 border-gray-100 dark:border-gray-700"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-usina-primary to-usina-secondary rounded-full"></div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Envie sua Mensagem
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Preencha o formulário e entraremos em contato em breve.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-usina-primary focus:ring-2 focus:ring-usina-primary/20 outline-none transition-all disabled:opacity-50"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-usina-primary focus:ring-2 focus:ring-usina-primary/20 outline-none transition-all disabled:opacity-50"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-usina-primary focus:ring-2 focus:ring-usina-primary/20 outline-none transition-all disabled:opacity-50"
                    placeholder="(82) 99999-9999"
                  />
                </div>

                {/* Assunto */}
                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-usina-primary focus:ring-2 focus:ring-usina-primary/20 outline-none transition-all disabled:opacity-50"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="comercial">Proposta Comercial</option>
                    <option value="fornecedor">Ser Fornecedor</option>
                    <option value="carreira">Oportunidades de Carreira</option>
                    <option value="parcerias">Parcerias</option>
                    <option value="duvidas">Dúvidas Gerais</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-usina-primary focus:ring-2 focus:ring-usina-primary/20 outline-none transition-all resize-none disabled:opacity-50"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {result === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800"
                  >
                    <HiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                      Mensagem enviada com sucesso! Entraremos em contato em
                      breve.
                    </p>
                  </motion.div>
                )}

                {result === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800"
                  >
                    <HiExclamationCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                      Erro ao enviar mensagem. Tente novamente.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-usina-primary to-usina-secondary text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-usina-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </motion.div>

            {/* Map and Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-[450px]">
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
                      title="Localização Usina Porto Rico"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2 border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-usina-primary to-usina-secondary rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Redes Sociais
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Acompanhe nossas novidades no Instagram.
                </p>
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://www.instagram.com/usinaportorico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaInstagram className="w-5 h-5" />
                    <span>@usinaportorico</span>
                  </a>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-usina-primary/10 to-usina-primary/5 dark:from-usina-primary/20 dark:to-usina-primary/10 border border-usina-primary/20">
                  <div className="flex items-start gap-2">
                    <HiClock className="w-5 h-5 text-usina-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-usina-primary mb-1">
                        Horário de atendimento:
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Segunda a sexta, das 8h às 17h
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContatoPage;
