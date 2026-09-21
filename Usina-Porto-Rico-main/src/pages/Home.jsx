import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ProdutosSection from "../components/ProdutosSection";
import ContatoSection from "../components/ContatoSection";
import ValoresSection from "../components/ValoresSection";
import InfoSection from "../components/InfoSection";
import History from "../components/HistorySection";
import BackgroundHome from "../components/Background";
import InstagramFeed from "../components/InstagramFeed";
import CertificacoesSection from "../components/CertificacoesSection";

function Home() {
  const valoresRef = useRef(null);
  const feedRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#valores" && valoresRef.current) {
      valoresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === "#feed" && feedRef.current) {
      valoresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <BackgroundHome />
      <History />
      <ValoresSection id="valores" ref={valoresRef} />
      <ProdutosSection />
      <InfoSection />
      <CertificacoesSection />
      <InstagramFeed id="feed" ref={feedRef} />
      <ContatoSection />
    </div>
  );
}

export default Home;
