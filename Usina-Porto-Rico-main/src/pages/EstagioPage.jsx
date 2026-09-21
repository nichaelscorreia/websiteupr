import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle, HiAcademicCap, HiXMark } from "react-icons/hi2";
import RedButton from "../components/RedButton";
import HeroSection from "../components/HeroSection";
import estagiario1 from "../assets/joyce.jpg";
import estagiario2 from "../assets/diogo.jpg";
import estagiario3 from "../assets/athos.jpg";
import imgCarreiras from "../assets/estagio.jpg";

const depoimentos = [
  {
    nome: "Joycce Vitória",
    funcao: "Eletricista de Manutenção",
    texto: [
      "Minha jornada na Usina Porto Rico se iniciou em 2022, quando ingressei como estagiária em Eletrotécnica aos 16 anos, mesmo jovem e com pouca experiência, adentrei em um ambiente que me deu a oportunidade de aprender na prática, sempre ao lado de profissionais que contribuíram para meu desenvolvimento.",
      "Ao finalizar o período de estágio, ainda com 17 anos, tive meu contrato renovado, o que foi um reconhecimento importante para mim. No momento em que atingi a maioridade, fui contratada efetivamente e assim surge minha trajetória como Auxiliar de Elétrica. Com dedicação, responsabilidade e apoio dos profissionais mais experientes, avancei para a função de Eletricista de Manutenção, cargo que ocupo hoje.",
      "Atualmente curso Engenharia Elétrica, buscando ampliar ainda mais meu conhecimento para contribuir de forma cada vez mais qualificada. Tenho orgulho da evolução que construí dentro da empresa e sou grata pela confiança e pelas oportunidades que contribuíram para o meu crescimento profissional.",
    ],
    foto: estagiario1,
  },
  {
    nome: "Diogo Rodrigues",
    funcao: "Tec. Segurança do Trabalho",
    texto: [
      "Sou Diogo Rodrigues, Técnico de Segurança do Trabalho na Usina Porto Rico, onde minha história começou antes mesmo da minha entrada, inspirada pelo legado do meu pai, que dedicou mais de 30 anos à empresa. Cresci acompanhando seu compromisso e orgulho, o que motivou minha escolha profissional.",
      "Passei por diversos setores da usina, adquirindo visão ampla dos processos, mas foi na Segurança do Trabalho que encontrei minha verdadeira vocação. Durante o estágio na área, desenvolvi habilidades técnicas e confirmei minha identificação com a profissão, o que me levou ao convite para integrar o SESMT.",
      "Há sete anos atuo como Técnico de Segurança, vivenciando aprendizados, desafios e conquistas importantes. Entre elas, destaco o apoio da empresa para meu desenvolvimento acadêmico, por meio de uma bolsa de estudos. Atualmente, estou no 8º período de Engenharia de Produção, tendo realizado meu estágio curricular na própria usina, e me preparo para iniciar a pós-graduação em Engenharia e Segurança do Trabalho. Sigo minha trajetória com ética, humildade e determinação, honrando o legado do meu pai e contribuindo para a segurança e o crescimento da Usina Porto Rico.",
    ],
    foto: estagiario2,
  },
  {
    nome: "Athos Aleff",
    funcao: "Tec. Segurança do Trabalho",
    texto: [
      "Meu nome é Athos Aleff e minha trajetória na Usina Porto Rico começou como estagiário na área de Segurança do Trabalho, onde tive meus primeiros aprendizados profissionais. Foram seis meses de intenso aprendizado, tanto na área industrial quanto na agrícola, que me proporcionaram uma visão ampla dos processos e desafios do setor.",
      "Ao concluir o estágio, tive a grande oportunidade de ser contratado. Esse momento marcou o início da minha carreira profissional e representou para mim não apenas uma conquista, mas também o reconhecimento do meu esforço e dedicação ao longo do período de estágio.",
      "Sou profundamente grato a todos que fizeram parte dessa jornada: líderes, colegas e parceiros de trabalho, que me apoiaram, confiaram no meu potencial e contribuíram para meu crescimento. Cada orientação, cada desafio e cada experiência me ajudaram a me tornar o profissional que sou hoje.",
      "Sigo comprometido em evoluir e retribuir, com empenho e responsabilidade, tudo o que aprendi aqui. A Usina Porto Rico não foi apenas o começo da minha carreira, mas também o lugar onde descobri minha paixão e propósito dentro da Segurança do Trabalho.",
    ],
    foto: estagiario3,
  },
];

const requisitos = [
  "Estudantes do ensino técnico ou superior",
  "Disponibilidade para estagiar conforme a carga horária do curso",
  "Identificados com os valores da Usina Porto Rico",
  "Dispostos a aprender e evoluir continuamente",
];

function CarreirasEstagio() {
  const [depoimentoExpandido, setDepoimentoExpandido] = useState(null);

  const abrirDepoimento = (index) => {
    setDepoimentoExpandido(index);
  };

  const fecharDepoimento = () => {
    setDepoimentoExpandido(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="Programa de"
        highlightText="Estágio"
        description="Inicie sua jornada profissional com aprendizado prático e desenvolvimento em um ambiente inovador."
        backgroundImage={imgCarreiras}
        backgroundPosition="center 0%"
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
                  <HiAcademicCap className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Sobre o Programa de Estágio
                </h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                O Programa de Estágio da Usina Porto Rico é uma oportunidade
                para estudantes que desejam colocar em prática o que aprendem na
                sala de aula e desenvolver suas habilidades profissionais em um
                ambiente desafiador e acolhedor. O programa oferece aprendizado
                técnico, vivência prática e desenvolvimento pessoal,
                contribuindo para a formação de futuros profissionais
                comprometidos com o crescimento sustentável da empresa.
              </p>
            </div>

            {/* Card Body */}
            <div className="p-8 lg:p-12">
              {/* Requisitos */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Quem pode participar:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {requisitos.map((requisito, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <HiCheckCircle className="w-6 h-6 text-usina-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {requisito}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-8" />

              {/* Depoimentos */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Depoimentos dos Estagiários
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {depoimentos.map((dep, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    onClick={() => abrirDepoimento(index)}
                    className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-usina-primary"
                  >
                    <div className="flex justify-center mb-4">
                      <img
                        src={dep.foto}
                        alt={`Foto de ${dep.nome}`}
                        className="w-24 h-24 rounded-full object-cover border-4 border-usina-primary/20 group-hover:border-usina-primary transition-all duration-300"
                      />
                    </div>

                    {/* Preview do texto - limitado a 3 linhas */}
                    <div className="relative h-60 overflow-hidden mb-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">
                        {dep.texto[0]}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
                    </div>

                    <div className="text-center">
                      <span className="font-bold text-gray-900 dark:text-white block mb-2">
                        {dep.nome}
                      </span>
                      <span className="text-usina-primary text-sm font-semibold block mb-2">
                        {dep.funcao}
                      </span>
                      <RedButton size="sm" text="Saiba mais" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-8" />

              {/* CTA Section */}
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Pronto para começar sua jornada?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Cadastre-se em nosso programa de estágio e dê o primeiro passo
                  para uma carreira de sucesso.
                </p>

                <div className="flex justify-center pt-4">
                  <RedButton
                    text="Candidate-se ao Programa"
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

      {/* Modal de Depoimento Expandido */}
      <AnimatePresence>
        {depoimentoExpandido !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={fecharDepoimento}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col"
            >
              {/* Header do Modal */}
              <div className="bg-gradient-to-r from-usina-primary to-usina-secondary p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={depoimentos[depoimentoExpandido].foto}
                    alt={depoimentos[depoimentoExpandido].nome}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/30"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {depoimentos[depoimentoExpandido].nome}
                    </h3>
                    <p className="text-white/80 text-sm">Depoimento</p>
                  </div>
                </div>
                <button
                  onClick={fecharDepoimento}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Fechar"
                >
                  <HiXMark className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Conteúdo do Modal com Scroll */}
              <div className="p-8 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <div className="space-y-4">
                  {depoimentos[depoimentoExpandido].texto.map(
                    (paragrafo, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
                      >
                        {paragrafo}
                      </p>
                    )
                  )}
                </div>
              </div>

              {/* Footer do Modal */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                <button
                  onClick={fecharDepoimento}
                  className="w-full py-3 px-6 bg-usina-primary hover:bg-usina-secondary text-white font-semibold rounded-xl transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CarreirasEstagio;
