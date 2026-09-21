import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle, HiRocketLaunch, HiXMark } from "react-icons/hi2";
import RedButton from "../components/RedButton";
import HeroSection from "../components/HeroSection";
import jovem1 from "../assets/luana.jpg";
import jovem2 from "../assets/jackson.jpg";
import jovem3 from "../assets/claudia.jpg";
import jovem4 from "../assets/andrez.jpg";
import jovem5 from "../assets/josemauri.jpg";
import jovem6 from "../assets/deyse.jpg";
import jovem7 from "../assets/rayssa.jpg";
import jovem8 from "../assets/erika.jpg";
import jovem9 from "../assets/maria.jpg";
import imgCarreiras from "../assets/img_pessoas.jpg";

const depoimentos = [
  {
    nome: "Luana Teles",
    funcao: "Analista Contábil",
    texto: [
      "Faço parte da Industrial Porto Rico desde 2012 como jovem aprendiz. Em 2013, fui contratada efetivamente, com muito orgulho, como a primeira soldadora do sexo feminino da história da empresa!",
      "No ano de 2019, assumi o cargo de Analista Contábil, onde atuo até hoje. Sou muito grata por todas as oportunidades que a Usina Porto Rico me proporcionou ao longo desses anos.",
    ],
    foto: jovem1,
  },
  {
    nome: "Jackson Albuquerque",
    funcao: "Líder de Oficina de Colhedora",
    texto: [
      "No ano de 2012 iniciei minha carreira na Usina Porto Rico no programa Jovem Aprendiz, foi um ano de muito aprendizado e crescimento na minha vida.",
      "Após o encerramento do programa e com todo conhecimento adquirido através dele pude passar por algumas funções na empresa, como: auxiliar de mecânico, mecânico de colhedora, inspetor de manutenção e rota e hoje atuo como líder da oficina de colhedora.",
    ],
    foto: jovem2,
  },
  {
    nome: "Cláudia Albuquerque",
    funcao: "Auxiliar Administrativo PPCM",
    texto: [
      "Iniciei minha trajetória na empresa no ano de 2012 no programa de aprendizagem oferecido pela usina, passei algumas moagens sendo safrista atuando como assistente de tráfego, e hoje faço parte da equipe do PPCM agrícola como auxiliar administrativo.",
      "Sinto-me orgulhosa pela história que estou fazendo na usina e sou grata a todos pela oportunidade de fazer parte da Industrial Porto Rico.",
    ],
    foto: jovem3,
  },
  {
    nome: "Andrez Domingos",
    funcao: "Comprador Jr.",
    texto: [
      "Através do programa de aprendizagem industrial, oriundo da parceria entre Usina Porto Rico e o SENAI, iniciei minha jornada profissional como jovem aprendiz, o que possibilitou crescimento tanto pessoal, como também, profissional. Uma vez que, através dessa oportunidade, junto à convivência com profissionais das mais diversas áreas, pude aprender na prática valores que levarei pra toda vida, como trabalho em equipe, gestão do tempo, relacionamento interpessoal, resiliência frente aos desafios da vida e do trabalho.",
      "Além disso, foi uma oportunidade de colocar em prática meus conhecimentos acadêmicos, adquiridos ao longo dos 4 anos de faculdade. Passei por algumas áreas até chegar no cargo que ocupo hoje, o de comprador Jr. o que, sem dúvidas, contribuiu para exercer essa função, que considero bastante desafiadora, mas que desperta cada vez mais o meu interesse.",
      "Diante disso, sou grato por fazer parte do time da Usina Porto Rico, há 7 anos.",
    ],
    foto: jovem4,
  },
  {
    nome: "José Mauri",
    funcao: "Analista Fiscal Jr.",
    texto: [
      "Meu nome é José Maurí, tenho 28 anos, e iniciei minha trajetória profissional no projeto Jovem Aprendiz, fruto da parceria entre o SENAI e a Usina Porto Rico. Nesse período, contei com profissionais dedicados que contribuíram diretamente para meu desenvolvimento, oferecendo apoio, orientação e incentivo diante dos desafios do primeiro emprego.",
      "Vivenciei aprendizados importantes ao passar por diferentes setores, desenvolvendo responsabilidade, organização, comprometimento, capacidade de ouvir, respeito e trabalho em equipe, fatores que impactaram tanto meu crescimento pessoal quanto profissional.",
      "Mesmo não sendo efetivado ao final do projeto, saí com a certeza de ter deixado uma marca de dedicação. Após dez meses, retornei como safrista, fui efetivado oito meses depois e, hoje, com quase cinco anos de empresa, já assumi funções com maiores responsabilidades. Atualmente, atuo como Analista Fiscal Jr, sempre buscando novos objetivos.",
    ],
    foto: jovem5,
  },
  {
    nome: "Deyse Medeiros",
    funcao: "Assistente Administrativo",
    texto: [
      "Iniciei minha jornada profissional na Usina Porto Rico em 2021 como jovem aprendiz, com o objetivo de transformar meu potencial em habilidades sólidas. Ao longo de dois anos, desenvolvi competências práticas essenciais e pude fortalecer meu perfil profissional.",
      "Fui efetivada e, desde então, venho obtendo oportunidades de crescimento e desenvolvimento dentro da empresa. Sou grata por fazer parte da família UPR e por ter a oportunidade de aprender e crescer ao lado de profissionais experientes e dedicados.",
    ],
    foto: jovem6,
  },
  {
    nome: "Rayssa Vitória",
    funcao: "Assistente de Departamento Pessoal",
    texto: [
      "Minha trajetória na Usina Porto Rico iniciou como Jovem Aprendiz, período em que desenvolvi habilidades administrativas e a importância do trabalho em equipe. Como Auxiliar de Departamento Pessoal, ampliei minhas responsabilidades e aprofundei conhecimentos em rotinas trabalhistas, prazos e atendimento aos colaboradores.",
      "Atualmente, como Assistente de Departamento Pessoal, consolido meu crescimento com maturidade e compromisso, atuando em processos mais complexos e contribuindo para a organização, eficiência e segurança das informações do setor. Entre as principais conquistas, destaco a padronização de procedimentos, melhoria na comunicação interna, suporte em períodos de alta demanda e manutenção rígida da conformidade.",
      "Tenho orgulho de fazer parte de um ambiente que valoriza pessoas e oferece oportunidades de desenvolvimento. São 4 anos de dedicação e aprendizado que fortalecem minha jornada na instituição.",
    ],
    foto: jovem7,
  },
  {
    nome: "Érika Beatriz",
    funcao: "Assistente de Gestão de Pessoas",
    texto: [
      "Minha trajetória na Usina Porto Rico começou em 2021, quando ingressei como Jovem Aprendiz e dei meus primeiros passos na área administrativa. Foi um período de descobertas, aprendizado e amadurecimento profissional.",
      "Com dedicação e vontade de crescer, fui me desenvolvendo a cada nova tarefa e entendendo a importância do setor de Gestão de Pessoas para o funcionamento da empresa. Hoje, sou Assistente de Gestão de Pessoas, resultado de muito empenho e das oportunidades que a usina oferece a quem deseja evoluir.",
      "Sou grata por cada etapa dessa caminhada e continuo comprometida em aprender, contribuir e construir uma história sólida dentro da Usina Porto Rico.",
    ],
    foto: jovem8,
  },
  {
    nome: "Maria Aparecida",
    funcao: "Soldadora",
    texto: [
      "Minha trajetória começou com o programa de Jovem Aprendiz, onde tive a oportunidade de realizar o curso que abriu portas e transformou minha vida. Durante essa fase, adquiri diversos conhecimentos técnicos, especialmente na área de soldagem, que foram fundamentais para o meu crescimento profissional e pessoal.",
      "Hoje, tenho muito orgulho de atuar na Usina Porto Rico como a segunda mulher soldadora, representando não apenas minha história, mas também a força e a dedicação de todas as mulheres que buscam seu espaço no setor industrial.",
      "Agradeço imensamente à Usina Porto Rico pela oportunidade, por acreditar no meu potencial e por não fazer distinção de gênero, valorizando a capacidade, o esforço e a vontade de aprender de cada colaborador. Sou profundamente grata por todos os ensinamentos que recebi e sigo recebendo diariamente, que levarei comigo para o resto da minha vida.",
      "Além disso, graças à oportunidade dessa vaga de emprego como soldadora, hoje posso realizar o sonho de cursar a faculdade de Fisioterapia, investindo no meu futuro e ampliando ainda mais meus conhecimentos. Essa oportunidade não apenas construiu minha carreira, mas também fortaleceu quem eu sou, e por isso levo comigo um sentimento de gratidão, orgulho e determinação em seguir crescendo.",
    ],
    foto: jovem9,
  },
];

const requisitos = [
  "Jovem Aprendiz",
  "Ensino médio completo ou cursando",
  "Não ter registro na CTPS",
  "Disponibilidade de horário",
];

function CarreirasJovemAprendiz() {
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
        title="Programa"
        highlightText="Jovem Aprendiz"
        description="Sua primeira oportunidade profissional com aprendizado teórico e prático."
        backgroundImage={imgCarreiras}
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
                  <HiRocketLaunch className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Sobre o Programa Jovem Aprendiz
                </h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                O Programa Jovem Aprendiz é uma oportunidade para quem deseja
                iniciar sua trajetória profissional com aprendizado e
                desenvolvimento. O programa alia atividades teóricas e práticas,
                contribuindo para a formação técnica e o crescimento pessoal dos
                participantes.
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
                Histórias de Sucesso
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-3xl mx-auto">
                Conheça as trajetórias de quem iniciou como Jovem Aprendiz e
                hoje são profissionais consolidados na empresa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

                    {/* Preview do texto - limitado */}
                    <div className="relative h-40 overflow-hidden mb-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">
                        {dep.texto[0]}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
                    </div>

                    <div className="text-center space-y-1">
                      <span className="font-bold text-gray-900 dark:text-white block">
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
                  Pronto para começar sua carreira?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Cadastre-se em nosso programa Jovem Aprendiz e dê o primeiro
                  passo para uma carreira de sucesso.
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
                    <p className="text-white/80 text-sm">
                      {depoimentos[depoimentoExpandido].funcao}
                    </p>
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

export default CarreirasJovemAprendiz;
