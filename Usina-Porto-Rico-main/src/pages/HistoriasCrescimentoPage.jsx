import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles, HiHeart, HiXMark } from "react-icons/hi2";
import RedButton from "../components/RedButton";
import HeroSection from "../components/HeroSection";
import imgCarreiras from "../assets/histCrescimento.jpg";

import lidianeRocha from "../assets/lidiane-rocha.jpg";
import marcosLourenco from "../assets/marcos-lourenco.jpg";
import joseErenildo from "../assets/jose-erenildo.jpg";
import millena from "../assets/millena.jpg";
import marcelo from "../assets/marcelo.jpg";
import dilmo from "../assets/dilmo.jpg";

const historias = [
  {
    nome: "Lidiane Rocha",
    cargo: "Coordenadora de Controladoria",
    texto: [
      "Iniciei minha trajetória na empresa em 2007, como analista contábil, trazendo comigo muita vontade de aprender, mas também a timidez que, aos poucos, precisei enfrentar. Ao longo dos anos, cada desafio, projeto e nova responsabilidade me ajudou a desenvolver confiança, ampliar minha visão e fortalecer minhas habilidades técnicas e pessoais.",
      "Foram muitos aprendizados: aprendi a me comunicar melhor, a liderar, a tomar decisões com segurança e a enxergar desafios como oportunidades de evolução. Com dedicação, resiliência e apoio das pessoas ao meu redor, superei barreiras que antes pareciam grandes.",
      "Hoje, após uma década de crescimento contínuo, tenho orgulho de atuar como coordenadora de controladoria, uma conquista que simboliza não apenas a evolução profissional, mas também a superação pessoal de quem acreditou no próprio potencial.",
      "Sigo motivada a construir resultados, aprender sempre e continuar evoluindo ao lado uma equipe que faz a diferença.",
    ],
    foto: lidianeRocha,
  },
  {
    nome: "Marcos Lourenço",
    cargo: "Coordenador de Planejamento e Custos",
    texto: [
      "Meu nome é Marcos Lourenço, nascido em 29/11/1979 no interior de Alagoas em Chã Preta. Minha gratidão em fazer parte da história da Usina Porto Rico.",
      "A história começou no ano de 2001 com um estágio obrigatório para conclusão do curso em Agropecuária. Chegando em setembro daquele ano, estagiei o período regular e um pouco mais, certo de que se voltasse ao interior ficaria fora das oportunidades de emprego à época. Falei com o Gerente Agrícola, Dr. Carlos José Monteiro, sobre essa situação e da vontade de trabalhar, disse: 'Doutor Carlos, tudo que tenho é a vontade de trabalhar e se eu voltar hoje, para a fazenda onde moro vou ficar fora das oportunidades de trabalho, me deixe ficar um pouco mais, aqui estagiando' e ele me concedeu mais algum tempo de estágio e disse 'podes ficar, mas não garanto emprego, pois no momento não há vagas em aberto'.",
      "Em abril de 2002 comecei na área de Entomologia e Experimentos Científicos (Pesquisas em campo) e hoje em 2025 já fazem 23 anos e atualmente estou como Coordenador de Planejamento e Custos na área de Governança Corporativa, consubstanciando a Diretoria e o Conselho Administrativo.",
    ],
    foto: marcosLourenco,
  },
  {
    nome: "José Erenildo",
    cargo: "Coordenador de Tratos Culturais",
    texto: [
      "Meu primeiro emprego na Usina Porto Rico, foi como trabalhador rural em 1989 até 1991, nesse mesmo ano saí da Fazenda Bananeira para estudar e ir em busca de conhecimentos.",
      "Em 1999 já formado como Técnico em Agropecuária, procurei Dr. Carlos Monteiro para conseguir o primeiro estágio e concedido pelo mesmo, comecei estagiar e posteriormente em novembro deste ano fui contratado para o cargo de Técnico da Irrigação e isso já seria a realização de um sonho.",
      "No ano de 2010 até 2024 numa nova função, Supervisor dos tratos culturais. Em 2019 comecei estudar agronomia e concluindo em 2024.",
      "Em abril de 2025, depois de uma busca árdua por conhecimentos, visando contribuir com minhas habilidades fui agraciado com a promoção para Engenheiro Agrônomo e Coordenador dos tratos culturais.",
    ],
    foto: joseErenildo,
  },
  {
    nome: "Millena Quintela",
    cargo: "Supervisora de Controle e Planejamento Agrícola",
    texto: [
      "Minha trajetória na Usina Porto Rico começou em 2016 no laboratório na área de análise de microbiologia, no meu primeiro emprego. Era tudo novo para mim, e ali dei meus primeiros passos profissionais. Na safra seguinte retornei ao laboratório e, pouco tempo depois, surgiu a chance de trabalhar na recepção, onde vivi anos importantes da minha história. Tive ainda a oportunidade de passar por outros setores, como o financeiro e a oficina automotiva, até chegar, recentemente, à supervisão do agrícola.",
      "Cada mudança, cada desafio e cada pessoa que encontrei pelo caminho contribuíram para quem sou hoje. Trabalhar na Porto Rico me deu orgulho, propósito e a confiança de que eu podia ir além. Foi aqui que reafirmei meu propósito, não desisti do meu sonho de me tornar engenheira e pude construir minha carreira com dignidade e reconhecimento.",
      "Sou profundamente grata por tudo que vivi e por todos que me acompanharam nessa caminhada. Tenho muito orgulho de fazer parte desta história.",
    ],
    foto: millena,
  },
  {
    nome: "Marcelo Ferreira",
    cargo: "Líder de Fabricação",
    texto: [
      "Iniciei minha trajetória na Usina Porto Rico em 2003, atuando como ajudante geral. Desde o início, estabeleci para mim mesmo o compromisso de crescer profissionalmente e tenho alcançado esse objetivo graças ao meu esforço e à política da empresa, que valoriza o desenvolvimento interno e oferece oportunidades reais para a evolução de cada colaborador.",
      "Ao longo dos anos, desempenhei diversas funções, incluindo a de operador, até chegar ao cargo que ocupo atualmente, como Líder de Fabricação. Sinto orgulho da minha caminhada e gratidão por fazer parte dessa história. Permaneço empenhado em evoluir continuamente e contribuir cada vez mais com a empresa.",
    ],
    foto: marcelo,
  },
  {
    nome: "Dilmo do Nascimento",
    cargo: "Líder de Instrumentação",
    texto: [
      "Eu me chamo Dilmo e atualmente sou Supervisor de Instrumentação. Minha trajetória na Usina Porto Rico iniciou em 1998, quando comecei como Operador de Caldeira. Desde o início, sempre mantive dedicação e entusiasmo, buscando algo especial para minha vida profissional. Foi então que o gerente industrial da época me direcionou para o setor de Instrumentação, área pela qual me apaixonei e que exerço com orgulho até hoje.",
      "Trabalhar na Porto Rico é uma honra. A empresa sempre ofereceu oportunidades reais de crescimento profissional, pessoal e até familiar. Sou grato a Deus e à diretoria da usina por acreditarem no meu potencial e por me permitirem construir essa história.",
      "Meu desejo é, no futuro, me aposentar com a satisfação de ter sido um trabalhador vitorioso. Seguirei com a mesma energia e compromisso, contribuindo para o crescimento da empresa e crescendo com ela.",
      "Obrigado, Porto Rico, por fazer parte da minha vida. Que Deus abençoe a todos.",
    ],
    foto: dilmo,
  },
];

function CarreirasHistoriasCrescimento() {
  const [historiaExpandida, setHistoriaExpandida] = useState(null);

  const abrirHistoria = (index) => {
    setHistoriaExpandida(index);
  };

  const fecharHistoria = () => {
    setHistoriaExpandida(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <HeroSection
        title="Histórias de"
        highlightText="Crescimento"
        description="Conheça as trajetórias inspiradoras de quem cresceu e se desenvolveu conosco."
        backgroundImage={imgCarreiras}
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
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-usina-primary to-usina-secondary p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <HiSparkles className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Trajetórias de Sucesso
                </h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                Na Usina Porto Rico, valorizamos o crescimento de cada
                colaborador. Conheça as histórias de profissionais que começaram
                em diferentes posições e hoje são líderes e referências em suas
                áreas, construindo carreiras sólidas e inspiradoras.
              </p>
            </div>
          </motion.div>

          {/* Seção: Plante e colherás */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-16 border-2 border-gray-100 dark:border-gray-700"
          >
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-usina-primary to-usina-secondary flex items-center justify-center shadow-lg">
                  <HiHeart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    "Plante e colherás."
                  </h2>
                  <div className="w-32 h-1 bg-usina-primary rounded-full mt-2" />
                </div>
              </div>

              <div className="space-y-5 text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
                <p className="text-justify">
                  Se queremos colher, precisamos plantar. Essa filosofia traduz
                  a caminhada do senhor Olival Tenório Costa, líder inspirador
                  que semeou valores essenciais — respeito, comprometimento,
                  dedicação e amor pelo trabalho e pela família. Um homem que
                  abraçou causas capazes de transformar realidades e que soube
                  reconhecer, com sabedoria, o maior patrimônio da Usina Porto
                  Rico: as pessoas. Honesto, íntegro e coerente, viveu em
                  perfeito equilíbrio entre o que dizia e o que praticava.
                </p>
                <p className="text-justify">
                  O legado que deixou é de valor imensurável. Senhor Olival foi
                  — e sempre será — um líder humano, verdadeiro e visionário,
                  que nos ensina que o exemplo não é apenas o principal caminho
                  para inspirar: é o único quando se tem metas claras e quando
                  se sonha junto. E, na Porto Rico, quando os sonhos são
                  compartilhados, eles se tornam realidade.
                </p>
                <p className="text-justify">
                  Por isso, seguimos firmes, construindo uma Porto Rico cada vez
                  mais forte em valores, com lideranças e equipes competentes,
                  comprometidas e capazes de transformar trabalho em
                  crescimento. Pessoas que cultivam e espalham conhecimento,
                  geram engajamento e fazem da Usina Porto Rico uma empresa que
                  evolui, se fortalece e se torna, a cada ciclo, mais
                  sustentável.
                </p>

                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-usina-primary/10 to-usina-primary/5 dark:from-usina-primary/20 dark:to-usina-primary/10 border-l-4 border-usina-primary">
                  <p className="text-xl lg:text-2xl font-bold text-usina-primary text-center italic">
                    Porque aqui nós acreditamos em uma verdade simples e
                    poderosa:
                    <br />
                    <span className="text-2xl lg:text-3xl">
                      quem cultiva pessoas, colhe futuro.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Histórias Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Histórias Inspiradoras
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Conheça as trajetórias de profissionais que construíram suas
              carreiras na Usina Porto Rico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {historias.map((hist, idx) => (
              <motion.div
                key={hist.nome}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => abrirHistoria(idx)}
                className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 border-transparent hover:border-usina-primary"
              >
                <div className="p-8">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <img
                        src={hist.foto}
                        alt={`Foto de ${hist.nome}`}
                        className="w-24 h-24 rounded-full object-cover border-4 border-usina-primary/20 group-hover:border-usina-primary transition-colors"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-usina-primary flex items-center justify-center">
                        <HiSparkles className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {hist.nome}
                      </h3>
                      <span className="text-usina-primary font-semibold text-sm">
                        {hist.cargo}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-usina-primary/20 via-usina-primary/50 to-usina-primary/20 mb-6" />

                  <div className="relative h-32 overflow-hidden mb-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">
                      {hist.texto[0]}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
                  </div>

                  <div className="text-center">
                    <RedButton size="sm" text="Leia a história completa" />
                  </div>
                </div>

                <div className="h-2 bg-gradient-to-r from-usina-primary to-usina-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>

          {/* CTA Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-usina-primary/10 to-usina-primary/5 dark:from-usina-primary/20 dark:to-usina-primary/10 border border-usina-primary/20 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Faça parte da nossa história!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Se você se identificou com essas trajetórias e quer construir sua
              própria história de sucesso, explore nossas oportunidades de
              carreira.
            </p>
          </motion.div>
        </div>
      </main>

      {/* Modal de História Expandida */}
      <AnimatePresence>
        {historiaExpandida !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={fecharHistoria}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-usina-primary to-usina-secondary p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={historias[historiaExpandida].foto}
                    alt={historias[historiaExpandida].nome}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/30"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {historias[historiaExpandida].nome}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {historias[historiaExpandida].cargo}
                    </p>
                  </div>
                </div>
                <button
                  onClick={fecharHistoria}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Fechar"
                >
                  <HiXMark className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <div className="space-y-4">
                  {historias[historiaExpandida].texto.map((paragrafo, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
                    >
                      {paragrafo}
                    </p>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                <button
                  onClick={fecharHistoria}
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

export default CarreirasHistoriasCrescimento;
