import React from "react";

// Componente para o ícone de Hambúrguer que anima para um 'X'
function HamburgerIcon({ isOpen }) {
  const lineBaseStyles =
    "h-0.5 w-7 bg-usina-dark dark:bg-usina-light rounded-full transition-all duration-300 ease-in-out";

  return (
    <div className="w-8 h-8 flex flex-col justify-center items-center gap-y-1.5">
      <span
        className={`${lineBaseStyles} ${
          isOpen ? "transform rotate-45 translate-y-2" : ""
        }`}
      />

      <span
        className={`${lineBaseStyles} ${isOpen ? "opacity-0" : "opacity-100"}`}
      />

      <span
        className={`${lineBaseStyles} ${
          isOpen ? "transform -rotate-45 -translate-y-2" : ""
        }`}
      />
    </div>
  );
}

export default HamburgerIcon;
