import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center mt-10 justify-center text-center py-20 px-4">
      <h1 className="text-8xl md:text-9xl font-extrabold text-usina-green tracking-wider">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-usina-dark mt-4">
        Página Não Encontrada
      </h2>
      <p className="text-lg text-usina-text mt-4 max-w-md">
        Ops! Parece que o link que você clicou está quebrado ou a página foi
        removida.
      </p>
      <Link
        to="/"
        className="mt-8 bg-usina-green text-usina-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}

export default NotFoundPage;
