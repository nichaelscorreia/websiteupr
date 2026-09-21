import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDroplet, TbPlant2, TbCertificate } from "react-icons/tb";
import { GiSugarCane } from "react-icons/gi";
import { FaGasPump, FaCube } from "react-icons/fa";
import { MdEnergySavingsLeaf, MdWaterDrop } from "react-icons/md";
import { HiArrowRight, HiXMark } from "react-icons/hi2";
import RedButton from "../components/RedButton.jsx";

// Imagens locais importadas
import imgAcucar from "../assets/acucar.png";
import imgCana from "../assets/canavial.jpg";
import imgEtanol from "../assets/etanol.jpg";
import imgBioenergia from "../assets/bioenergia.jpg";
import imgMelaco from "../assets/melado.png";
import imgVinhaca from "../assets/vinhaca.jpg";
import imgCbio from "../assets/cbios.webp";
import imgTorta from "../assets/torta.png";

const produtos = [
  {
    id: "cana",
    nome: "Cana-de-Açúcar",
    icone: <GiSugarCane />,
    imagem: imgCana,
    descricao:
      "Insumo principal da cadeia sucroenergética, fonte de sacarose e biomassa.",
    stats: "Insumo principal",
    color: "from-green-500/20 to-lime-500/20",
    accentColor: "bg-green-500",
    categoria: "insumo",
    posicao: 0,
  },
  {
    id: "acucar",
    nome: "Açúcar",
    icone: <FaCube />,
    imagem: imgAcucar,
    descricao:
      "Sacarose cristalizada de alta pureza para indústria alimentícia e exportação.",
    stats: "Commodity global",
    color: "from-amber-500/20 to-orange-500/20",
    accentColor: "bg-amber-500",
    categoria: "produto",
    posicao: 1,
  },
  {
    id: "etanol",
    nome: "Etanol",
    icone: <FaGasPump />,
    imagem: imgEtanol,
    descricao: "Biocombustível renovável obtido por fermentação de açúcares.",
    stats: "Combustível renovável",
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "bg-blue-500",
    categoria: "produto",
    posicao: 2,
  },
  {
    id: "energia",
    nome: "Energia Elétrica",
    icone: <MdEnergySavingsLeaf />,
    imagem: imgBioenergia,
    descricao:
      "Eletricidade gerada pela queima do bagaço em sistemas de cogeração.",
    stats: "Cogeração",
    color: "from-green-500/20 to-emerald-500/20",
    accentColor: "bg-green-500",
    categoria: "produto",
    posicao: 3,
  },
  {
    id: "cbio",
    nome: "CBIO",
    icone: <TbCertificate />,
    imagem: imgCbio,
    descricao:
      "Crédito de descarbonização que certifica energia renovável de biomassa.",
    stats: "Ativo ambiental",
    color: "from-teal-500/20 to-cyan-500/20",
    accentColor: "bg-teal-500",
    categoria: "produto",
    posicao: 4,
  },
  {
    id: "melaco",
    nome: "Melaço",
    icone: <TbDroplet />,
    imagem: imgMelaco,
    descricao:
      "Subproduto viscoso da cristalização, rico em açúcares residuais.",
    stats: "Coproduto",
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "bg-purple-500",
    categoria: "coproduto",
    posicao: 5,
  },
  {
    id: "vinhaca",
    nome: "Vinhaça",
    icone: <MdWaterDrop />,
    imagem: imgVinhaca,
    descricao:
      "Efluente da destilação, utilizado em fertirrigação e biodigestão.",
    stats: "Efluente valorizado",
    color: "from-indigo-500/20 to-purple-500/20",
    accentColor: "bg-indigo-500",
    categoria: "coproduto",
    posicao: 6,
  },
  {
    id: "torta",
    nome: "Torta de Filtro",
    icone: <TbPlant2 />,
    imagem: imgTorta,
    descricao:
      "Resíduo sólido rico em nutrientes, utilizado como fertilizante orgânico e condicionador de solo.",
    stats: "Fertilizante orgânico",
    color: "from-emerald-500/20 to-green-500/20",
    accentColor: "bg-emerald-500",
    categoria: "coproduto",
    posicao: 7,
  },
];

// Modal de detalhes por produto
function ProdutoModal({ aberto, onClose, produtoId }) {
  if (!aberto || !produtoId) return null;

  const conteudoPorProduto = {
    cana: (
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Cana-de-Açúcar (Insumo Principal)
        </h3>
        <div className="space-y-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Planta perene da família Poaceae, cultivada para extração de
            sacarose. Os colmos fibrosos contêm aproximadamente 70–75% de água,
            10–15% de sacarose e 10–15% de fibra bruta.
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Principais Usos
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Fonte primária de açúcares fermentáveis</li>
              <li>• Fornecimento de biomassa para cogeração energética</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Características Relevantes
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>Teor de Brix:</strong> 12–18°
              </li>
              <li>
                • <strong>Polarização:</strong> 11–16%
              </li>
              <li>
                • <strong>Pureza do caldo:</strong> 85–90%
              </li>
              <li>
                • <strong>Safra:</strong> Concentrada em 6–8 meses
              </li>
              <li>
                • <strong>Processamento:</strong> Máximo 48h pós-colheita
                (degradação rápida)
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
    acucar: (
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Açúcar (Cristal / VHP)
        </h3>
        <div className="space-y-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Sacarose cristalizada com pureza mínima de 99,8%. Obtida por
            evaporação, cozimento e cristalização do caldo clarificado,
            resultando em um sólido cristalino branco de alta qualidade.
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Principais Usos
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Indústria alimentícia e bebidas</li>
              <li>• Confeitaria</li>
              <li>• Indústria farmacêutica</li>
              <li>• Exportação como commodity global</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Características Relevantes
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>Densidade:</strong> 1,59 g/cm³
              </li>
              <li>
                • <strong>Solubilidade:</strong> ~2 g/mL (20°C)
              </li>
              <li>
                • <strong>Granulometria:</strong> 0,5–2,5 mm (padronizada)
              </li>
              <li>
                • <strong>Umidade:</strong> {"<"}0,1%
              </li>
              <li>
                • <strong>Higroscopicidade:</strong> Controlada
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
    etanol: (
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Etanol (Álcool Etílico - C₂H₅OH)
        </h3>
        <div className="space-y-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Álcool combustível obtido por fermentação anaeróbia dos açúcares do
            caldo de cana, utilizando leveduras{" "}
            <em>Saccharomyces cerevisiae</em>. Líquido incolor e volátil de alta
            pureza.
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Principais Usos
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Biocombustível automotivo (gasolina E27)</li>
              <li>• Alcoolquímica</li>
              <li>• Indústria de bebidas</li>
              <li>• Produtos desinfetantes</li>
              <li>• Indústria cosmética</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Características Relevantes
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>Pureza:</strong> ≥99,8% (etanol anidro)
              </li>
              <li>
                • <strong>Densidade:</strong> 0,789 g/cm³
              </li>
              <li>
                • <strong>Ponto de ebulição:</strong> 78,4°C
              </li>
              <li>
                • <strong>Poder calorífico:</strong> 26,7 MJ/kg
              </li>
              <li>
                • <strong>Monitoramento:</strong> Densimetria e cromatografia
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
    energia: (
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Energia Elétrica Cogerada
        </h3>
        <div className="space-y-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Eletricidade produzida pela queima do bagaço de cana em caldeiras de
            alta pressão (60–90 bar) acopladas a turbinas. Processo de cogeração
            calor-eletricidade integrado.
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Principais Usos
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Autossuficiência energética da usina</li>
              <li>• Venda de excedentes à rede elétrica</li>
              <li>• Mercado livre de energia</li>
              <li>• Agregação em usinas virtuais</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Características Relevantes
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>Rendimento energético:</strong> 60–70%
              </li>
              <li>
                • <strong>Geração:</strong> Contínua durante safra (6–8 meses)
              </li>
              <li>
                • <strong>Diferencial:</strong> Complementa fontes intermitentes
                (solar/eólica)
              </li>
              <li>
                • <strong>Pressão das caldeiras:</strong> 60–90 bar
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
    cbio: (
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          CBIO (Crédito de Bioeletricidade)
        </h3>
        <div className="space-y-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Ativo financeiro que certifica a geração de eletricidade renovável a
            partir de biomassa de cana (bagaço e palha). Negociado em mercado
            regulado pela B3.
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Principais Usos
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Monetização de excedentes energéticos</li>
              <li>• Conformidade com mandatos de energia renovável</li>
              <li>• Investimentos ESG (Environmental, Social, Governance)</li>
              <li>• Atendimento a metas de descarbonização</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Características Relevantes
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>Equivalência:</strong> 1 CBIO = 1 MWh de energia
                renovável
              </li>
              <li>
                • <strong>Preço:</strong> Flutuante (oferta e demanda)
              </li>
              <li>
                • <strong>Registro:</strong> Sistema de rastreabilidade
              </li>
              <li>
                • <strong>Regulamentação:</strong> ANEEL
              </li>
              <li>
                • <strong>Certificação:</strong> Apenas títulos nacionais no
                momento
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
    melaco: (
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Melaço
        </h3>
        <div className="space-y-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Subproduto viscoso resultante da cristalização do açúcar. Líquido
            escuro (cor ICUMSA 2.000–3.000) com 48–55% de açúcares redutores não
            cristalizáveis.
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Principais Usos
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Fermentação de etanol (alternativa ao caldo direto)</li>
              <li>• Ração animal</li>
              <li>• Produção de levedura</li>
              <li>• Alcoolquímica</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Características Relevantes
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>Densidade:</strong> 1,38–1,42 g/cm³
              </li>
              <li>
                • <strong>Viscosidade:</strong> 3.000–5.000 cP (20°C)
              </li>
              <li>
                • <strong>pH:</strong> 5,0–6,5
              </li>
              <li>
                • <strong>Cor ICUMSA:</strong> 2.000–3.000
              </li>
              <li>
                • <strong>Nutrientes:</strong> Alto teor de potássio e fósforo
                (qualidade para ração)
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
    vinhaca: (
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Vinhaça (Resíduo Líquido de Fermentação)
        </h3>
        <div className="space-y-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Efluente aquoso gerado na destilação do etanol. Apesar de ser um
            resíduo, possui elevado potencial de aproveitamento agronômico e
            energético.
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Principais Usos
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Fertirrigação (aplicação em canaviais)</li>
              <li>• Condicionador de solo</li>
              <li>• Fonte de potássio e matéria orgânica</li>
              <li>• Potencial para bioenergia (biogás via biodigestão)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Características Relevantes
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>Relação caldo/vinhaça:</strong> 1:10–13
              </li>
              <li>
                • <strong>Teor de potássio:</strong> Alto (K)
              </li>
              <li>
                • <strong>Economia de fertilizantes:</strong> ~50 kg K₂O/ha
              </li>
              <li>
                • <strong>Aplicação:</strong> Fertirrigação reduz custos de
                adubação mineral
              </li>
              <li>
                • <strong>Potencial energético:</strong> Biogás via
                biodigestores
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
    torta: (
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Torta de Filtro
        </h3>
        <div className="space-y-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Resíduo sólido coletado em filtros durante clarificação do caldo.
            Lodo biodinâmico contendo aproximadamente 40-50% de umidade e 13-15%
            de matéria seca.
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Principais Usos
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Fertilizante e condicionador de solo</li>
              <li>• Compostagem</li>
              <li>• Cobertura nitrogenada</li>
              <li>• Biomassa para energia (após secagem)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border-l-4 border-usina-primary">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Características Relevantes
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>Nitrogênio (N):</strong> 2-3%
              </li>
              <li>
                • <strong>Fósforo (P₂O₅):</strong> 4-8%
              </li>
              <li>
                • <strong>Potássio (K₂O):</strong> 1,5-2%
              </li>
              <li>
                • <strong>pH:</strong> 6,5-7,5
              </li>
              <li>
                • <strong>Matéria orgânica:</strong> 45-60% (base seca)
              </li>
              <li>
                • <strong>Aplicação típica:</strong> 20-40 t/ha
              </li>
              <li>
                • <strong>Valor agregado:</strong> Adubo ecológico de crescente
                valorização
              </li>
            </ul>
          </div>
        </div>
      </section>
    ),
  };

  const produtoAtual = produtos.find((p) => p.id === produtoId);
  const tituloModal = produtoAtual?.nome || "Produto";

  return (
    <AnimatePresence>
      {aberto && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Clique fora para fechar */}
          <div
            className="absolute inset-0"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35 }}
          >
            {/* Header do modal */}
            <div className="flex items-center justify-between px-6 lg:px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-usina-primary/10 to-transparent">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                  Negócios & Produtos
                </p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tituloModal}
                </h2>
              </div>

              <button
                onClick={onClose}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Fechar detalhes do produto"
              >
                <HiXMark className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo scrollável */}
            <div className="px-6 lg:px-8 py-6 overflow-y-auto">
              {conteudoPorProduto[produtoId]}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProdutosSection() {
  const [produtoAtivo, setProdutoAtivo] = useState(produtos[0].id);
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoModal, setProdutoModal] = useState(null);
  const containerRef = useRef(null);

  const produtoSelecionado = produtos.find((p) => p.id === produtoAtivo);
  const produtoIndex = produtos.findIndex((p) => p.id === produtoAtivo);

  const abrirModal = (produtoId) => {
    setProdutoModal(produtoId);
    setModalAberto(true);
  };

  // Lógica de janela deslizante: mostra 5 produtos começando do índice adequado
  const getJanelaInicio = () => {
    // Se estiver nos primeiros 2, mostra do 0 ao 4
    if (produtoIndex <= 1) return 0;
    // Se estiver nos últimos 2, mostra do 3 ao 7
    if (produtoIndex >= produtos.length - 2) return produtos.length - 5;
    // Caso contrário, centraliza (mostra 2 antes e 2 depois)
    return produtoIndex - 2;
  };

  const janelaInicio = getJanelaInicio();
  const produtosVisiveis = produtos.slice(janelaInicio, janelaInicio + 5);

  // Scroll suave para o item ativo quando a janela muda
  useEffect(() => {
    if (containerRef.current) {
      const activeButton = containerRef.current.querySelector(
        '[data-active="true"]'
      );
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [produtoAtivo]);

  return (
    <>
      <section className="pt-10 lg:px-10 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-9xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Negócios & Produtos
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Soluções sustentáveis que impulsionam o futuro da energia
                renovável.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Coluna Esquerda: Lista de Produtos */}
            <div
              ref={containerRef}
              className="lg:col-span-4 space-y-3 overflow-hidden"
            >
              <AnimatePresence initial={false} mode="popLayout">
                {produtosVisiveis.map((produto) => (
                  <motion.button
                    key={produto.id}
                    onClick={() => setProdutoAtivo(produto.id)}
                    data-active={produtoAtivo === produto.id}
                    className="w-full group relative"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 ${
                        produtoAtivo === produto.id
                          ? "bg-white dark:bg-gray-800 shadow-2xl shadow-usina-primary/10"
                          : "bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 shadow-md"
                      }`}
                    >
                      {/* Barra lateral vermelha */}
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-usina-primary"
                        initial={{ height: 0 }}
                        animate={{
                          height: produtoAtivo === produto.id ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Gradiente sutil quando ativo */}
                      {produtoAtivo === produto.id && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-usina-primary/5 to-usina-primary/10 opacity-50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          exit={{ opacity: 0 }}
                        />
                      )}

                      <div className="relative z-10 flex items-center gap-4">
                        {/* Ícone */}
                        <div
                          className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            produtoAtivo === produto.id
                              ? "bg-usina-primary text-white shadow-lg shadow-usina-primary/30"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          {React.cloneElement(produto.icone, {
                            className: "w-7 h-7",
                          })}
                        </div>

                        {/* Texto */}
                        <div className="flex-1 text-left">
                          <h3
                            className={`font-bold text-lg transition-colors ${
                              produtoAtivo === produto.id
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {produto.nome}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                            {produto.stats}
                          </p>
                        </div>

                        {/* Seta indicadora */}
                        <motion.div
                          animate={{
                            x: produtoAtivo === produto.id ? 0 : -10,
                            opacity: produtoAtivo === produto.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <HiArrowRight className="w-5 h-5 text-usina-primary" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Coluna Direita: Preview do Produto Selecionado */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {produtoSelecionado && (
                  <motion.div
                    key={produtoSelecionado.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-2xl"
                  >
                    {/* Imagem de fundo */}
                    <div className="relative h-[500px] lg:h-[600px]">
                      <motion.img
                        key={produtoSelecionado.id}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        src={produtoSelecionado.imagem}
                        alt={produtoSelecionado.nome}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay escuro */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                      {/* Overlay colorido do produto */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${produtoSelecionado.color} mix-blend-multiply`}
                      />
                    </div>

                    {/* Conteúdo sobreposto */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                      {/* Badge superior */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-auto pt-4 flex items-center justify-between"
                      >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium">
                          <span className="w-2 h-2 rounded-full bg-usina-primary" />
                          {produtoSelecionado.categoria === "insumo"
                            ? "Insumo"
                            : produtoSelecionado.categoria === "produto"
                            ? "Produto"
                            : "Coproduto"}
                        </span>
                      </motion.div>

                      {/* Conteúdo principal */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Título */}
                        <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                          {produtoSelecionado.nome}
                        </h3>

                        {/* Descrição */}
                        <p className="text-white/90 text-lg lg:text-xl max-w-2xl leading-relaxed">
                          {produtoSelecionado.descricao}
                        </p>

                        {/* CTA: abre modal */}
                        <RedButton
                          text="Saiba Mais"
                          onClick={() => abrirModal(produtoSelecionado.id)}
                          size="md"
                          variant="primary"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Indicadores de navegação mobile */}
          <div className="flex gap-2 mt-8 justify-center lg:hidden overflow-x-auto pb-2">
            {produtos.map((produto) => (
              <button
                key={produto.id}
                onClick={() => setProdutoAtivo(produto.id)}
                className="group flex-shrink-0"
                aria-label={`Ver ${produto.nome}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    produtoAtivo === produto.id
                      ? "w-12 bg-usina-primary"
                      : "w-1.5 bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProdutoModal
        aberto={modalAberto}
        onClose={() => setModalAberto(false)}
        produtoId={produtoModal}
      />
    </>
  );
}

export default ProdutosSection;
