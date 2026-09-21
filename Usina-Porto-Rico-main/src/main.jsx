import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ColaboradoresPage from "./pages/ColaboradoresPage";
import MeuRhPage from "./pages/MeuRhPage";
import CarreirasPage from "./pages/CarreirasPage";
import TrabalheConoscoPage from "./pages/TrabalheConoscoPage";
import EstagioPage from "./pages/EstagioPage";
import JovemAprendizPage from "./pages/JovemAprendizPage";
import HistoriasCrescimentoPage from "./pages/HistoriasCrescimentoPage";
import AUsinaPage from "./pages/AUsinaPage";
import GaleriaPage from "./pages/GaleriaPage";
import HistoriaPage from "./pages/HistoriaPage";
import TransparenciaPage from "./pages/TransparenciaPage";
import SustentabilidadePage from "./pages/sustentabilidadePage";
import PoliticasPage from "./pages/PoliticasPage";
import ContatoPage from "./pages/ContatoPage";
import ComunidadePage from "./pages/ComunidadePage";
import VideoPage from "./pages/VideoInstitucionalPage";
import OuvidoriaPage from "./pages/OuvidoriaPage";

const PlaceholderPage = ({ title }) => (
  <div className="container mt-40 mx-auto py-20 px-4 text-center">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="mt-4">Página em construção.</p>
  </div>
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },

        { path: "/a-usina", element: <AUsinaPage /> },
        { path: "/a-usina/historia", element: <HistoriaPage /> },
        { path: "/a-usina/galeria", element: <GaleriaPage /> },
        { path: "/a-usina/video-institucional", element: < VideoPage/>},
        {
          path: "/negocios-e-produtos",
          element: <PlaceholderPage title="Negócios & Produtos" />,
        },
        {
          path: "/sustentabilidade",
          element: <SustentabilidadePage />,
        },
        { path: "/carreiras", element: <CarreirasPage /> },

        { path: "/colaboradores", element: <ColaboradoresPage /> },
        { path: "/colaboradores/Meu-RH", element: <MeuRhPage /> },
        {
          path: "/transparencia",
          element: <TransparenciaPage />,
        },
        {
          path: "/politicas",
          element: <PoliticasPage />,
        },

        { path: "/carreiras/vagas", element: <TrabalheConoscoPage /> },
        { path: "/carreiras/estagio", element: <EstagioPage /> },
        { path: "/carreiras/jovem-aprendiz", element: <JovemAprendizPage /> },
        {
          path: "/carreiras/historias-de-crescimento",
          element: <HistoriasCrescimentoPage />,
        },
        { path: "/contato", element: <ContatoPage /> },
        { path: "/ouvidoria", element: <OuvidoriaPage /> },
        {path: "/comunidade", element: <ComunidadePage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: "/Usina-Porto-Rico/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
