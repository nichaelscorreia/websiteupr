import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiUserGroup,
  HiCheckCircle,
  HiExclamationCircle,
  HiPhone,
  HiEnvelope,
  HiMapPin,
} from "react-icons/hi2";
import HeroSection from "../components/HeroSection";
import imgHero from "../assets/galeria/campo1.jpg";

function ComunidadePage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    assunto: "",
    mensagem: "",
    aceitoPrivacidade: false,
  });

  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.aceitoPrivacidade) {
      setResult("privacy-error");
      setTimeout(() => setResult(null), 5000);
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "fdbb0a65-7b23-44b8-99b8-49ffe2460cbe");
    formDataToSend.append(
      "subject",
      "Atendimento à Comunidade - Usina Porto Rico"
    );
    formDataToSend.append("nome", formData.nome);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("telefone", formData.telefone);
    formDataToSend.append("endereco", formData.endereco);
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
          endereco: "",
          assunto: "",
          mensagem: "",
          aceitoPrivacidade: false,
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

  const infoCards = [
    {
      icon: <HiPhone className="w-6 h-6" />,
      titulo: "Telefone",
      conteudo: "(82) 3512-0023",
      link: "tel:+558235120023",
      cor: "from-blue-500 to-cyan-500",
    },
    {
      icon: <HiEnvelope className="w-6 h-6" />,
      titulo: "E-mail",
      conteudo: "recrutamento@grupoolivaltenorio.com.br",
      link: "mailto:recrutamento@grupoolivaltenorio.com.br",
      cor: "from-usina-primary to-usina-secondary",
    },
    {
      icon: <HiMapPin className="w-6 h-6" />,
      titulo: "Endereço",
      conteudo: "Fazenda São José - Campo Alegre-AL",
      complemento: "CEP: 57253-899",
      link: "https://www.google.com/maps/place/Industrial+Porto+Rico/@-9.814279,-36.218969,17z",
      cor: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="Atendimento à"
        highlightText="Comunidade"
        description="Estamos à disposição para ouvir e atender às necessidades da comunidade local."
        backgroundImage={imgHero}
        height="70vh"
      />

      {/* Content Section */}
      <main className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-12 border-2 border-gray-100 dark:border-gray-700"
          >
            <div className="bg-gradient-to-r from-usina-primary to-usina-secondary p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <HiUserGroup className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Nossa Responsabilidade Social
                </h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                A Usina Porto Rico valoriza o relacionamento com a comunidade
                onde atua. Através deste canal, você pode compartilhar suas
                dúvidas, sugestões, elogios ou registrar demandas que impactem a
                sua localidade. Nossa equipe está pronta para ouvir e trabalhar
                em conjunto para fortalecer os laços com a comunidade.
              </p>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {infoCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
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
                    <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-usina-primary/50 group-hover:-translate-y-1">
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

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-gray-100 dark:border-gray-700"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-8 bg-gradient-to-b from-usina-primary to-usina-secondary rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Formulário de Atendimento
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Preencha o formulário abaixo para entrar em contato com nossa
                equipe.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder="Seu nome completo"
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Telefone */}
                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-usina-primary focus:ring-2 focus:ring-usina-primary/20 outline-none transition-all disabled:opacity-50"
                    placeholder="(82) 99999-9999"
                  />
                </div>

                {/* Endereço */}
                <div>
                  <label
                    htmlFor="endereco"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Endereço/Localidade
                  </label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-usina-primary focus:ring-2 focus:ring-usina-primary/20 outline-none transition-all disabled:opacity-50"
                    placeholder="Cidade, bairro ou localidade"
                  />
                </div>
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
                  <option value="duvida">Dúvida</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="elogio">Elogio</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="solicitacao">Solicitação</option>
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
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-usina-primary focus:ring-2 focus:ring-usina-primary/20 outline-none transition-all resize-none disabled:opacity-50"
                  placeholder="Descreva sua mensagem..."
                ></textarea>
              </div>

              {/* Checkbox Privacidade */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="aceitoPrivacidade"
                  name="aceitoPrivacidade"
                  checked={formData.aceitoPrivacidade}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 w-5 h-5 rounded border-2 border-gray-300 dark:border-gray-600 text-usina-primary focus:ring-usina-primary disabled:opacity-50"
                />
                <label
                  htmlFor="aceitoPrivacidade"
                  className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  Autorizo o uso dos dados informados neste formulário para
                  manter contato com a Usina Porto Rico, de acordo com a
                  Política de Privacidade. *
                </label>
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

              {result === "privacy-error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-800"
                >
                  <HiExclamationCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">
                    É necessário aceitar a Política de Privacidade para
                    continuar.
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
        </div>
      </main>
    </div>
  );
}

export default ComunidadePage;
