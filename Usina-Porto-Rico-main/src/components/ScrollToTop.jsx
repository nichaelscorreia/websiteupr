import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se não tem hash, vai pro topo
    if (!hash) {
      // Força scroll imediato
      window.scrollTo(0, 0);

      // Força novamente após render completo
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });

      // Força uma última vez após todos os componentes carregarem
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}
