import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop"; // ← Adicione este import

function RootLayout() {
  return (
    <div className="bg-usina-white min-h-screen flex flex-col">
      <ScrollToTop /> {/* ← Adicione aqui */}
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default RootLayout;
