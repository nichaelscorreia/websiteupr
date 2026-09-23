import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HiArrowDown,
  HiClock,
  HiDocumentText,
  HiUserGroup,
  HiXMark,
} from "react-icons/hi2";
import imgSalarial from "../assets/2°Relatorio Igualdade Salarial UPR Lote_2026.jpg";
import imgSalarial2 from "../assets/2° RelatorioIgualdadeSalarial DPA Lote_2026.jpg";
import uprHistorico2026 from "../assets/1° RelatorioIgualdadeSalarial UPR Lote_2026.jpg";
import dpaHistorico2026 from "../assets/1°RelatorioIgualdadeSalarial DPA Lote_2026.jpg";
import uprHistorico2024 from "../assets/1°RelatorioIgualdadeSalarial UPR Lote_2024.jpg";
import uprHistorico2025 from "../assets/1°RelatorioIgualdadeSalarial UPR Lote_2025.jpg";
import uprHistorico2024Segundo from "../assets/2°RelatorioIgualdadeSalarial UPR Lote_2024.jpg";
import uprHistorico2025Segundo from "../assets/2°RelatorioIgualdadeSalarial UPR Lote_2025.jpg";
import dpaHistorico2024 from "../assets/1°RelatorioIgualdadeSalarial DPA Lote_2024.jpg";
import dpaHistorico2025 from "../assets/1°RelatorioIgualdadeSalarial DPALote_2025.jpg";
import dpaHistorico2024Segundo from "../assets/2°RelatorioIgualdadeSalarial DPA Lote_2024.jpg";
import dpaHistorico2025Segundo from "../assets/2°RelatorioIgualdadeSalarial DPA Lote_2025.jpg";
import bgTransparencia from "../assets/img_1.jpg";

export default function TransparenciaPage() {
  const [historicoAberto, setHistoricoAberto] = useState(null);
  const [imagemExpandida, setImagemExpandida] = useState(null);

  const historicos = {
    UPR: [
      { src: uprHistorico2024, alt: "Relatório UPR 2024 - 1º relatório" },
      { src: uprHistorico2024Segundo, alt: "Relatório UPR 2024 - 2º relatório" },
      { src: uprHistorico2025, alt: "Relatório UPR 2025 - 1º relatório" },
      { src: uprHistorico2025Segundo, alt: "Relatório UPR 2025 - 2º relatório" },
      { src: uprHistorico2026, alt: "Relatório UPR 2026 - 1º relatório" },
    ],
    DPA: [
      { src: dpaHistorico2024, alt: "Relatório DPA 2024 - 1º relatório" },
      { src: dpaHistorico2024Segundo, alt: "Relatório DPA 2024 - 2º relatório" },
      { src: dpaHistorico2025, alt: "Relatório DPA 2025 - 1º relatório" },
      { src: dpaHistorico2025Segundo, alt: "Relatório DPA 2025 - 2º relatório" },
      { src: dpaHistorico2026, alt: "Relatório DPA 2026 - 1º relatório" },
    ],
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setImagemExpandida(null);
        setHistoricoAberto(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      {/* Background com overlay sofisticado - MUDADO PARA ABSOLUTE */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgTransparencia})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95 -z-10" />

      {/* Decorative elements - MUDADO PARA ABSOLUTE */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-usina-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-usina-primary/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 py-20 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Transparência e{" "}
              <span className="text-usina-primary">Integridade</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Nosso compromisso com a transparência se reflete em todas as
              nossas ações e decisões.
            </p>

            {/* Indicador de scroll */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-12 inline-block"
            >
              <HiArrowDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </motion.div>

          {/* Cards Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          >
            <a
              href="#relatorio-de-transparencia"
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-usina-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-usina-primary/10 flex items-center justify-center mb-6 group-hover:bg-usina-primary group-hover:scale-110 transition-all duration-300">
                  <HiDocumentText className="w-8 h-8 text-usina-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Relatório de Transparência Salarial
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Acesse nosso relatório completo de transparência salarial
                  conforme legislação vigente.
                </p>
                <div className="mt-6 flex items-center gap-2 text-usina-primary font-semibold">
                  Ver relatório
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </a>

            <a
              href="#pagamento-dos-credores"
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-usina-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-usina-primary/10 flex items-center justify-center mb-6 group-hover:bg-usina-primary group-hover:scale-110 transition-all duration-300">
                  <HiUserGroup className="w-8 h-8 text-usina-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Pagamento dos Credores Trabalhistas
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Informações sobre o processo de recuperação judicial e
                  pagamento de credores.
                </p>
                <div className="mt-6 flex items-center gap-2 text-usina-primary font-semibold">
                  Ver informações
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Seção 1: Relatório de Transparência Salarial */}
          <motion.section
            id="relatorio-de-transparencia"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 scroll-mt-20"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header da seção */}
              <div className="bg-gradient-to-r from-usina-primary to-usina-secondary p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <HiDocumentText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                    Documento Oficial
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Relatório de Transparência Salarial UPR
                  </h2>
                  <button
                    type="button"
                    onClick={() => setHistoricoAberto("UPR")}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/25"
                  >
                    <HiClock className="h-5 w-5" />
                    Visualizar Histórico de Relatórios
                  </button>
                </div>
                <p className="text-white/90 mt-4 text-lg">
                  Conforme Lei nº 14.611/2023 - Transparência Salarial e
                  Critérios Remuneratórios
                </p>
              </div>

              {/* Imagem do relatório */}
              <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-900">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                  <img
                    src={imgSalarial}
                    alt="Relatório de Transparência Salarial UPR"
                    className="w-full h-auto cursor-zoom-in object-contain"
                    loading="lazy"
                    onClick={() =>
                      setImagemExpandida({
                        src: imgSalarial,
                        alt: "Relatório de Transparência Salarial UPR",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Seção 1.5: Relatório de Transparência Salarial DPA*/}
          <motion.section
            id="relatorio-de-transparencia"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 scroll-mt-20"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header da seção */}
              <div className="bg-gradient-to-r from-usina-primary to-usina-secondary p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <HiDocumentText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                    Documento Oficial
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Relatório de Transparência Salarial DPA
                  </h2>
                  <button
                    type="button"
                    onClick={() => setHistoricoAberto("DPA")}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/25"
                  >
                    <HiClock className="h-5 w-5" />
                    Visualizar Histórico de Relatórios
                  </button>
                </div>
                <p className="text-white/90 mt-4 text-lg">
                  Conforme Lei nº 14.611/2023 - Transparência Salarial e
                  Critérios Remuneratórios
                </p>
              </div>

              {/* Imagem do relatório */}
              <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-900">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                  <img
                    src={imgSalarial2}
                    alt="Relatório de Transparência Salarial DPA"
                    className="w-full h-auto cursor-zoom-in object-contain"
                    loading="lazy"
                    onClick={() =>
                      setImagemExpandida({
                        src: imgSalarial2,
                        alt: "Relatório de Transparência Salarial DPA",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Seção 2: Pagamento dos Credores */}
          <motion.section
            id="pagamento-dos-credores"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 scroll-mt-20"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header da seção */}
              <div className="bg-gradient-to-r from-usina-primary to-usina-secondary p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <HiUserGroup className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                    Recuperação Judicial
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Pagamento dos Credores Trabalhistas
                </h2>
              </div>

              {/* Conteúdo */}
              <div className="p-6 lg:p-12">
                <div className="max-w-none space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-gray-900 dark:text-white">
                      Prezado(a) Credor(a) Trabalhista,
                    </strong>
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Informamos que no último dia 25/10/2021 houve a Assembleia
                    da "Recuperação Judicial" da Porto Rico. Houve aprovação do
                    Plano, com decisão judicial homologando, que foi publicada
                    no Diário Oficial no último dia 10/11/2021.
                  </p>

                  <div className="bg-usina-primary/5 dark:bg-usina-primary/10 rounded-2xl p-6 lg:p-8 border-l-4 border-usina-primary">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Assim, convocamos todos os credores trabalhistas para que:
                    </h3>

                    <div className="space-y-6">
                      {/* Item 1 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-usina-primary text-white font-bold text-base">
                            1
                          </span>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Informem os dados bancários para depósito dos
                            valores a receber, de acordo com a previsão do Plano
                            (folhas 2784 a 2810, do processo
                            0009191-45.2017.8.02.0001), sobretudo indicando se
                            tem saldo de salário, a fim de que tal pagamento se
                            dê de acordo com a Lei (art. 54, §1º, da Lei nº
                            11.101/05).
                          </p>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-usina-primary text-white font-bold text-base">
                            2
                          </span>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Informem qual a opção de pagamento vai preferir:
                          </p>
                          <div className="space-y-4 pl-0 lg:pl-4">
                            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                <strong className="text-usina-primary text-base">
                                  Opção A:
                                </strong>{" "}
                                Em dinheiro, no limite de até R$ 25.000,00
                                (vinte e cinco mil reais), OU
                              </p>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                <strong className="text-usina-primary text-base">
                                  Opção B:
                                </strong>{" "}
                                Recebimento em lote, cujo loteamento ainda será
                                elaborado pela Porto Rico, para recebimento em
                                até 03 anos, tudo de acordo com as previsões
                                aprovadas de folhas 2797 a 2801, do processo.
                                Cada lote corresponderá a R$ 40.000,00 e o
                                credor poderá receber no máximo dois lotes, não
                                mais que dois (02).
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 lg:p-8 border-l-4 border-amber-500">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-2xl">⚠️</span>
                      Observações Importantes:
                    </h4>
                    <ul className="space-y-3 list-disc list-inside">
                      <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        A escolha pela <strong>Opção A</strong> deverá ser
                        entregue, por escrito, com assinatura, na recepção da
                        Usina Porto Rico.
                      </li>
                      <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        O Credor Trabalhista que escolher pela{" "}
                        <strong>Opção B (Terreno)</strong> deverá escolher no
                        prazo de até 20 dias (contado da Homologação do Plano),
                        mediante petição protocolada nos autos da Recuperação
                        Judicial, conforme previsão no Plano. Ou seja, até o dia
                        10/12/2021 (quando se fará 20 dias úteis).
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Por fim, informamos que de acordo com a previsão do item 07
                    (sete) do Plano Aprovado, os credores trabalhistas que
                    aderiram à mediação, deverão aguardar para recebimento dos
                    valores residuais (isto é, os 20%).{" "}
                    <em>
                      Obs: acaso haja mudança de conta bancária (onde foram
                      pagos os 80% iniciais da mediação), favor informar.
                    </em>
                  </p>

                  <div className="bg-gradient-to-br from-usina-primary/10 to-usina-primary/5 dark:from-usina-primary/20 dark:to-usina-primary/10 rounded-2xl p-6 lg:p-8 border border-usina-primary/20">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Contato e Envio de Documentação
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Para tanto, dispomos do e-mail (correio eletrônico):
                    </p>
                    <a
                      href="mailto:juridico.upr@grupoolivaltenorio.com.br"
                      className="inline-flex items-center gap-2 text-usina-primary hover:text-usina-secondary font-semibold text-base lg:text-lg transition-colors break-all"
                    >
                      juridico.upr@grupoolivaltenorio.com.br
                      <span className="text-xl flex-shrink-0">→</span>
                    </a>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6 text-sm">
                      Neste e-mail deverão ser encaminhados os dados completos
                      dos trabalhadores: nome completo, CPF, endereço e os dados
                      bancários (tipo de conta ou poupança, banco, agência e
                      número da conta ou poupança, bem como o CPF do titular da
                      conta ou poupança).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {historicoAberto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setHistoricoAberto(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800 lg:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-usina-primary">
                  Relatórios anteriores
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                  Histórico de Relatórios {historicoAberto}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Fechar histórico"
                onClick={() => setHistoricoAberto(null)}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                <HiXMark className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {historicos[historicoAberto].map((imagem) => (
                <button
                  type="button"
                  key={imagem.src}
                  onClick={() => setImagemExpandida(imagem)}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 text-left shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                >
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-auto w-full cursor-zoom-in object-contain"
                    loading="lazy"
                  />
                  <span className="block p-4 text-sm font-semibold text-gray-700 group-hover:text-usina-primary dark:text-gray-300">
                    {imagem.alt}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {imagemExpandida && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setImagemExpandida(null)}
        >
          <button
            type="button"
            aria-label="Fechar imagem ampliada"
            onClick={() => setImagemExpandida(null)}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <HiXMark className="h-7 w-7" />
          </button>
          <img
            src={imagemExpandida.src}
            alt={imagemExpandida.alt}
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
