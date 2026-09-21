import React from "react";
import { motion } from "framer-motion";
import {
  HiShieldCheck,
  HiCircleStack,
  HiArrowDown,
  HiEnvelope,
  HiCheckCircle,
} from "react-icons/hi2";
import bgPoliticas from "../assets/img_1.jpg";

function PoliticasPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      {/* Background com overlay sofisticado */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgPoliticas})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#EF233C]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EF233C]/5 rounded-full blur-3xl -z-10" />

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
              Política de Privacidade e{" "}
              <span className="text-[#EF233C]">Cookies</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Seu compromisso com a proteção de dados pessoais e transparência
              no tratamento de informações, conforme a LGPD.
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
              href="#politica-de-privacidade"
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EF233C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#EF233C]/10 flex items-center justify-center mb-6 group-hover:bg-[#EF233C] group-hover:scale-110 transition-all duration-300">
                  <HiShieldCheck className="w-8 h-8 text-[#EF233C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Política de Privacidade
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Como coletamos, tratamos e protegemos seus dados pessoais
                  conforme a LGPD (Lei nº 13.709/2018).
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#EF233C] font-semibold">
                  Ver política
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
              href="#politica-de-cookies"
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EF233C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#EF233C]/10 flex items-center justify-center mb-6 group-hover:bg-[#EF233C] group-hover:scale-110 transition-all duration-300">
                  <HiCircleStack className="w-8 h-8 text-[#EF233C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Política de Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Entenda quais cookies utilizamos, suas finalidades e como
                  gerenciar suas preferências.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#EF233C] font-semibold">
                  Ver política
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

          {/* Seção 1: Política de Privacidade */}
          <motion.section
            id="politica-de-privacidade"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 scroll-mt-20"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header da seção */}
              <div className="bg-gradient-to-r from-[#EF233C] to-[#C41E3A] p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <HiShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                    Lei Geral de Proteção de Dados
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Política de Privacidade e Proteção de Dados
                </h2>
                <p className="text-white/90 mt-4 text-lg">
                  Última atualização: Novembro de 2025
                </p>
              </div>

              {/* Conteúdo */}
              <div className="p-6 lg:p-12">
                <div className="max-w-none space-y-8">
                  {/* Introdução */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      1. Introdução
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      A <strong>Usina Porto Rico</strong> está comprometida com
                      a proteção da privacidade e dos dados pessoais de todos os
                      seus usuários, colaboradores, parceiros e visitantes do
                      site. Esta Política de Privacidade descreve como
                      coletamos, utilizamos, armazenamos e protegemos suas
                      informações pessoais em conformidade com a Lei Geral de
                      Proteção de Dados (LGPD - Lei nº 13.709/2018).
                    </p>
                  </div>

                  {/* Definições */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      2. Definições Importantes
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong className="text-[#EF233C]">
                            Dados Pessoais:
                          </strong>{" "}
                          Informações relacionadas à pessoa natural identificada
                          ou identificável (ex: nome, CPF, RG, e-mail, telefone,
                          endereço).
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong className="text-[#EF233C]">
                            Dados Sensíveis:
                          </strong>{" "}
                          Dados sobre origem racial ou étnica, convicção
                          religiosa, opinião política, filiação sindical, saúde,
                          vida sexual, dado genético ou biométrico.
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong className="text-[#EF233C]">
                            Controlador:
                          </strong>{" "}
                          A Usina Porto Rico, responsável pelas decisões sobre o
                          tratamento de dados pessoais.
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong className="text-[#EF233C]">Titular:</strong>{" "}
                          Você, pessoa natural a quem se referem os dados
                          pessoais que são objeto de tratamento.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dados Coletados */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      3. Quais Dados Coletamos
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Coletamos os seguintes tipos de dados pessoais:
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong>Dados de identificação:</strong> nome
                          completo, CPF, RG, data de nascimento, nacionalidade
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong>Dados de contato:</strong> endereço de e-mail,
                          telefone, endereço residencial
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong>Dados de navegação:</strong> endereço IP,
                          localização geográfica, tipo de navegador, páginas
                          visitadas, tempo de acesso
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong>Dados profissionais:</strong> currículo,
                          histórico profissional, formação acadêmica (para
                          candidatos a vagas)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Finalidade */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      4. Como Utilizamos Seus Dados
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Seus dados pessoais são tratados para as seguintes
                      finalidades:
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Processar candidaturas a vagas de emprego, estágio e
                          jovem aprendiz
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Responder solicitações, dúvidas e contatos via
                          formulários do site
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Melhorar a experiência de navegação e funcionalidades
                          do site
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Cumprir obrigações legais e regulatórias
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Realizar análises estatísticas e pesquisas internas
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Enviar comunicações institucionais quando autorizado
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Base Legal */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      5. Base Legal para o Tratamento
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      O tratamento dos seus dados pessoais fundamenta-se nas
                      seguintes bases legais previstas na LGPD:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong className="text-[#EF233C]">
                            Consentimento:
                          </strong>{" "}
                          Quando você fornece autorização expressa para o
                          tratamento dos dados
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong className="text-[#EF233C]">
                            Legítimo interesse:
                          </strong>{" "}
                          Para finalidades legítimas como segurança, prevenção
                          de fraudes e melhorias do site
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong className="text-[#EF233C]">
                            Execução de contrato:
                          </strong>{" "}
                          Para realizar processos seletivos e vínculos
                          empregatícios
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong className="text-[#EF233C]">
                            Obrigação legal:
                          </strong>{" "}
                          Para cumprimento de obrigações trabalhistas, fiscais e
                          regulatórias
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Compartilhamento */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      6. Compartilhamento de Dados
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      A Usina Porto Rico não vende, aluga ou comercializa seus
                      dados pessoais. Podemos compartilhar dados apenas nas
                      seguintes situações:
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Com fornecedores de serviços (hospedagem, analytics,
                          e-mail marketing) sob contrato de confidencialidade
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Com autoridades competentes quando exigido por lei ou
                          ordem judicial
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Com empresas do Grupo Olival Tenório para finalidades
                          administrativas internas
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Direitos do Titular */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      7. Seus Direitos como Titular (Art. 18 da LGPD)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Você tem direito a solicitar à Usina Porto Rico, a
                      qualquer momento:
                    </p>
                    <div className="bg-[#EF233C]/5 dark:bg-[#EF233C]/10 rounded-2xl p-6 lg:p-8 border-l-4 border-[#EF233C]">
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF233C] text-white font-bold text-sm flex-shrink-0">
                            I
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                            <strong>Confirmação da existência</strong> de
                            tratamento dos seus dados
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF233C] text-white font-bold text-sm flex-shrink-0">
                            II
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                            <strong>Acesso aos dados</strong> em formato
                            legível, impresso ou eletrônico
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF233C] text-white font-bold text-sm flex-shrink-0">
                            III
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                            <strong>Correção</strong> de dados incompletos,
                            inexatos ou desatualizados
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF233C] text-white font-bold text-sm flex-shrink-0">
                            IV
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                            <strong>
                              Anonimização, bloqueio ou eliminação
                            </strong>{" "}
                            de dados desnecessários, excessivos ou tratados em
                            desconformidade
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF233C] text-white font-bold text-sm flex-shrink-0">
                            V
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                            <strong>Portabilidade</strong> dos dados a outro
                            fornecedor de serviço
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF233C] text-white font-bold text-sm flex-shrink-0">
                            VI
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                            <strong>Eliminação</strong> dos dados tratados com
                            base no consentimento
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF233C] text-white font-bold text-sm flex-shrink-0">
                            VII
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                            <strong>Informação sobre compartilhamento</strong>{" "}
                            dos dados com entidades públicas e privadas
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF233C] text-white font-bold text-sm flex-shrink-0">
                            VIII
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                            <strong>Informação sobre a possibilidade</strong> de
                            não fornecer consentimento e suas consequências
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF233C] text-white font-bold text-sm flex-shrink-0">
                            IX
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                            <strong>Revogação do consentimento</strong> a
                            qualquer momento
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Segurança */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      8. Segurança dos Dados
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      A Usina Porto Rico adota medidas técnicas e
                      administrativas para proteger seus dados pessoais contra
                      acessos não autorizados, perda, destruição ou alteração:
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Criptografia de dados sensíveis em trânsito e em
                          repouso
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Controle de acesso restrito apenas a pessoas
                          autorizadas
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Termo de confidencialidade assinado por colaboradores
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Armazenamento em servidores seguros e idôneos
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Monitoramento contínuo de vulnerabilidades e ameaças
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Retenção */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      9. Retenção dos Dados
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Seus dados pessoais serão armazenados pelo tempo
                      necessário para cumprir as finalidades para as quais foram
                      coletados, incluindo obrigações legais, contratuais,
                      regulatórias e de auditoria. Após esse período, os dados
                      serão eliminados ou anonimizados de forma segura.
                    </p>
                  </div>

                  {/* Menores */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      10. Dados de Menores de Idade
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      O site da Usina Porto Rico não coleta intencionalmente
                      dados pessoais de menores de 18 anos sem o consentimento
                      de pais ou responsáveis legais. Para programas de Jovem
                      Aprendiz, a coleta de dados de menores de idade é
                      realizada com autorização expressa dos responsáveis,
                      conforme legislação trabalhista vigente.
                    </p>
                  </div>

                  {/* Alterações */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      11. Alterações nesta Política
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Esta Política de Privacidade pode ser atualizada
                      periodicamente para refletir mudanças nas práticas de
                      tratamento de dados ou em requisitos legais. Recomendamos
                      que você revise esta página regularmente. Alterações
                      significativas serão comunicadas através do site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Seção 2: Política de Cookies */}
          <motion.section
            id="politica-de-cookies"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 scroll-mt-20"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header da seção */}
              <div className="bg-gradient-to-r from-[#EF233C] to-[#C41E3A] p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <HiCircleStack className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                    Guia ANPD 2025
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Política de Cookies
                </h2>
                <p className="text-white/90 mt-4 text-lg">
                  Conforme Guia Orientativo ANPD sobre Cookies e Proteção de
                  Dados
                </p>
              </div>

              {/* Conteúdo */}
              <div className="p-6 lg:p-12">
                <div className="max-w-none space-y-8">
                  {/* O que são cookies */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      1. O Que São Cookies
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Cookies são pequenos arquivos de texto armazenados no seu
                      dispositivo (computador, smartphone ou tablet) quando você
                      visita um site. Eles permitem que o site reconheça seu
                      dispositivo e lembre de informações sobre sua visita, como
                      preferências de idioma, configurações e histórico de
                      navegação.
                    </p>
                  </div>

                  {/* Tipos de cookies */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      2. Tipos de Cookies Utilizados
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      O site da Usina Porto Rico utiliza os seguintes tipos de
                      cookies:
                    </p>

                    <div className="space-y-6">
                      {/* Cookies Essenciais */}
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-[#EF233C]">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#EF233C]" />
                          Cookies Estritamente Necessários (Essenciais)
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                          São indispensáveis para o funcionamento do site e não
                          podem ser desativados. Geralmente são definidos em
                          resposta a ações suas, como configurar preferências de
                          privacidade, fazer login ou preencher formulários.
                        </p>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 mt-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong className="text-gray-900 dark:text-white">
                              Exemplos:
                            </strong>{" "}
                            Cookies de sessão, autenticação, segurança e
                            gerenciamento de consentimento.
                          </p>
                        </div>
                      </div>

                      {/* Cookies de Performance */}
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-amber-500">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-amber-500" />
                          Cookies de Performance e Análise
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                          Coletam informações sobre como os visitantes usam o
                          site, permitindo melhorias na navegação e
                          funcionalidades. Todos os dados são agregados e
                          anônimos.
                        </p>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 mt-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong className="text-gray-900 dark:text-white">
                              Exemplos:
                            </strong>{" "}
                            Google Analytics, métricas de páginas mais
                            visitadas, tempo de permanência, taxa de rejeição.
                          </p>
                        </div>
                      </div>

                      {/* Cookies Funcionais */}
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-blue-500">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-blue-500" />
                          Cookies de Funcionalidade
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                          Permitem que o site lembre de escolhas que você faz
                          (como idioma, região ou tema escuro/claro) para
                          fornecer uma experiência mais personalizada.
                        </p>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 mt-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong className="text-gray-900 dark:text-white">
                              Exemplos:
                            </strong>{" "}
                            Preferências de tema (dark mode), configurações de
                            idioma, localização geográfica.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabela de Cookies */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      3. Lista Detalhada de Cookies
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden">
                        <thead>
                          <tr className="bg-[#EF233C] text-white">
                            <th className="p-4 text-left font-bold">
                              Nome do Cookie
                            </th>
                            <th className="p-4 text-left font-bold">
                              Categoria
                            </th>
                            <th className="p-4 text-left font-bold">
                              Finalidade
                            </th>
                            <th className="p-4 text-left font-bold">Duração</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700 dark:text-gray-300">
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="p-4 font-mono text-sm">
                              cookie_consent
                            </td>
                            <td className="p-4">Essencial</td>
                            <td className="p-4">
                              Armazena suas preferências de cookies
                            </td>
                            <td className="p-4">1 ano</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="p-4 font-mono text-sm">
                              theme_preference
                            </td>
                            <td className="p-4">Funcional</td>
                            <td className="p-4">
                              Salva preferência de tema escuro/claro
                            </td>
                            <td className="p-4">6 meses</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="p-4 font-mono text-sm">_ga</td>
                            <td className="p-4">Análise</td>
                            <td className="p-4">
                              Google Analytics - identifica visitantes únicos
                            </td>
                            <td className="p-4">2 anos</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="p-4 font-mono text-sm">_gid</td>
                            <td className="p-4">Análise</td>
                            <td className="p-4">
                              Google Analytics - distingue usuários
                            </td>
                            <td className="p-4">24 horas</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="p-4 font-mono text-sm">_gat</td>
                            <td className="p-4">Análise</td>
                            <td className="p-4">
                              Google Analytics - limita taxa de solicitações
                            </td>
                            <td className="p-4">1 minuto</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-mono text-sm">
                              session_id
                            </td>
                            <td className="p-4">Essencial</td>
                            <td className="p-4">
                              Mantém sessão ativa durante navegação
                            </td>
                            <td className="p-4">Sessão</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Gerenciamento */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      4. Como Gerenciar Cookies
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Você tem o direito de aceitar, recusar ou gerenciar
                      cookies de acordo com suas preferências. Veja como:
                    </p>

                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          Através do Navegador
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          Todos os navegadores modernos permitem que você
                          controle cookies através das configurações. Consulte
                          os links abaixo:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex gap-2">
                            <span className="text-[#EF233C]">→</span>
                            <span className="text-gray-700 dark:text-gray-300">
                              <strong>Google Chrome:</strong> Configurações →
                              Privacidade e Segurança → Cookies
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#EF233C]">→</span>
                            <span className="text-gray-700 dark:text-gray-300">
                              <strong>Mozilla Firefox:</strong> Opções →
                              Privacidade e Segurança → Cookies
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#EF233C]">→</span>
                            <span className="text-gray-700 dark:text-gray-300">
                              <strong>Safari:</strong> Preferências →
                              Privacidade → Gerenciar Dados
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#EF233C]">→</span>
                            <span className="text-gray-700 dark:text-gray-300">
                              <strong>Microsoft Edge:</strong> Configurações →
                              Cookies e Permissões
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border-l-4 border-amber-500 mt-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        <strong className="text-amber-700 dark:text-amber-400">
                          ⚠️ Atenção:
                        </strong>{" "}
                        Desabilitar cookies pode afetar a funcionalidade do site
                        e impedir que você acesse certos recursos. Cookies
                        essenciais não podem ser desativados, pois são
                        necessários para o funcionamento básico do site.
                      </p>
                    </div>
                  </div>

                  {/* Cookies de terceiros */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      5. Cookies de Terceiros
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Alguns cookies são definidos por serviços de terceiros que
                      aparecem em nossas páginas:
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong>Google Analytics:</strong> Para análise de
                          tráfego e comportamento dos visitantes
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong>Instagram Embed:</strong> Para exibição de
                          posts na galeria do site
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <HiCheckCircle className="w-6 h-6 text-[#EF233C] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          <strong>Google Maps:</strong> Para exibição de mapas e
                          localização
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-sm">
                      Esses terceiros têm suas próprias políticas de privacidade
                      e não temos controle sobre seus cookies. Recomendamos que
                      você consulte suas políticas diretamente.
                    </p>
                  </div>

                  {/* Atualização */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      6. Atualizações desta Política
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Esta Política de Cookies pode ser atualizada
                      periodicamente para refletir mudanças nos cookies que
                      utilizamos ou por razões operacionais, legais ou
                      regulatórias. Você pode revogar ou alterar seu
                      consentimento a qualquer momento através das configurações
                      de cookies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Seção de Contato */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#EF233C]/10 to-[#EF233C]/5 dark:from-[#EF233C]/20 dark:to-[#EF233C]/10 rounded-3xl p-8 lg:p-12 border border-[#EF233C]/20">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#EF233C] flex items-center justify-center mx-auto mb-6">
                  <HiEnvelope className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Dúvidas ou Solicitações sobre Seus Dados?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Para exercer seus direitos como titular de dados pessoais ou
                  esclarecer dúvidas sobre esta Política, entre em contato com
                  nosso Encarregado de Proteção de Dados (DPO):
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:recrutamento@grupoolivaltenorio.com.br"
                    className="inline-flex items-center gap-2 text-[#EF233C] hover:text-[#C41E3A] font-semibold text-lg transition-colors break-all"
                  >
                    <span className="break-all">
                      recrutamento@grupoolivaltenorio.com.br
                    </span>
                    <span className="text-xl flex-shrink-0">→</span>
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Responderemos sua solicitação em até 15 dias úteis, conforme
                    previsto na LGPD.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default PoliticasPage;
