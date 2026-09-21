import React, { useState, useCallback, useEffect, memo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { HiChevronRight, HiArrowTopRightOnSquare } from "react-icons/hi2";

import logoUsina from "../assets/usina_logo.png";
import logoBranca from "../assets/UPR-LOGO-BRANCA.png";
import HamburgerIcon from "./HamburgerIcon";
import ThemeToggle from "./ThemeToggle";


const NAVIGATION_ITEMS = [
  {
    id: "usina",
    title: "A USINA",
    path: "/a-usina",
    hasSubmenu: true,
    sectionTitle: "Sobre Nós",
    items: [
      { title: "História", path: "/a-usina/historia" },
      { title: "Valores e Propósito", path: "/#valores" },
      { title: "Galeria de Fotos", path: "/a-usina/galeria" },
      { title: "Vídeo Institucional", path: "/a-usina/video-institucional" },
    ],
  },
  {
    id: "colaborador",
    title: "COLABORADOR",
    path: "/colaboradores",
    hasSubmenu: true,
    sectionTitle: "Acesso Rápido",
    items: [
      { title: "App Meu RH", path: "/colaboradores/Meu-RH" },
      {
        title: "Webmail",
        path: "https://webmail-seguro.com.br/grupoolivaltenorio.com.br/",
        external: true,
      },
       {
        title: "Holerite",
        path: "https://nstech.ddns.net:8443/NSTechWebUPR/Web/index.jsf",
        external: true,
      },
      {
        title: "Stratws",
        path: "https://usinaportorico.stratws.com/",
        external: true,
      },
    ],
  },
  {
    id: "fornecedor",
    title: "FORNECEDOR",
    path: "https://app.grupoolivaltenorio.com.br/ords/apex/f?p=113:LOGIN:11676414660859:::::",
    external: true,
    hasSubmenu: false,
  },
  {
    id: "carreiras",
    title: "CARREIRAS",
    path: "/carreiras",
    hasSubmenu: true,
    sectionTitle: "Oportunidades",
    items: [
      { title: "Trabalhe Conosco", path: "/carreiras/vagas" },
      { title: "Programa de Estágio", path: "/carreiras/estagio" },
      { title: "Programa Jovem Aprendiz", path: "/carreiras/jovem-aprendiz" },
      {
        title: "Histórias de Crescimento",
        path: "/carreiras/historias-de-crescimento",
      },
    ],
  },
  {
    id: "transparencia",
    title: "TRANSPARÊNCIA",
    path: "/transparencia",
    hasSubmenu: true,
    sectionTitle: "Transparência",
    items: [
      {
        title: "Relatório de Transparência Salarial",
        path: "/transparencia/#relatorio-de-transparencia",
      },
      {
        title: "Pagamento de Credores",
        path: "/transparencia/#pagamento-dos-credores",
      },
    ],
  },
];

const CONTACT_ITEMS = [
  { title: "Entre em Contato", path: "/contato" },
  {
    title: "Ouvidoria",
    path: "/ouvidoria",
  },
  { title: "Atendimento à Comunidade", path: "/comunidade" },
];

// ==================== COMPONENTE DE MENU ITEM REUTILIZÁVEL ====================
const MenuItem = memo(
  ({
    item,
    isDesktop,
    onClose,
    hoveredMenu,
    setHoveredMenu,
    openSubMenu,
    toggleSubMenu,
  }) => {
    const LinkComponent = item.external ? "a" : NavLink;
    const linkProps = item.external
      ? { href: item.path, target: "_blank", rel: "noopener noreferrer" }
      : { to: item.path };

    // Se não tem submenu
    if (!item.hasSubmenu) {
      return (
        <li className={isDesktop ? "" : ""}>
          <LinkComponent
            {...linkProps}
            onClick={!isDesktop ? onClose : undefined}
            className={
              isDesktop
                ? "px-5 py-7 hover:text-usina-primary hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300 relative group inline-block"
                : "block py-3.5 px-5 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            }
          >
            <span className="relative">
              {item.title}
              {isDesktop && (
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-usina-primary transition-all duration-300 group-hover:w-full" />
              )}
            </span>
          </LinkComponent>
        </li>
      );
    }

    // DESKTOP: Menu com hover
    if (isDesktop) {
      return (
        <li
          className="relative"
          onMouseEnter={() => setHoveredMenu(item.id)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-5 py-7 rounded-xl transition-all duration-300 relative group ${
                isActive
                  ? "text-usina-primary"
                  : "hover:text-usina-primary hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`
            }
          >
            <span className="relative">
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-usina-primary transition-all duration-300 group-hover:w-full" />
            </span>
            <motion.div
              animate={{ rotate: hoveredMenu === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaAngleDown className="text-xs" />
            </motion.div>
          </NavLink>

          {/* Desktop Dropdown */}
          <AnimatePresence>
            {hoveredMenu === item.id && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full mt-2 left-0 w-[320px] bg-white dark:bg-gray-800 shadow-2xl p-8 border-2 border-gray-100 dark:border-gray-700 rounded-3xl z-50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-usina-primary to-usina-secondary rounded-full" />
                  <p className="font-bold text-usina-primary text-lg">
                    {item.sectionTitle}
                  </p>
                </div>
                <ul className="space-y-2 text-sm font-normal">
                  {item.items.map((subItem, idx) => {
                    const SubLinkComponent = subItem.external ? "a" : Link;
                    const subLinkProps = subItem.external
                      ? {
                          href: subItem.path,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { to: subItem.path };

                    return (
                      <li key={idx}>
                        <SubLinkComponent
                          {...subLinkProps}
                          className="group relative flex items-center justify-between py-3 px-4 text-gray-800 dark:text-gray-200 transition-all duration-300 rounded-xl hover:text-usina-primary dark:hover:text-usina-primary hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/80 dark:hover:from-gray-700/70 dark:hover:to-gray-600/50 hover:pl-5 hover:shadow-sm font-medium"
                        >
                          <span>{subItem.title}</span>
                          {subItem.external ? (
                            <HiArrowTopRightOnSquare className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          ) : (
                            <HiChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                          )}
                        </SubLinkComponent>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      );
    }

    // MOBILE: Menu com click
    return (
      <li>
        <button
          onClick={() => toggleSubMenu(item.id)}
          className="w-full flex justify-between items-center py-3.5 px-5 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
        >
          <span>{item.title}</span>
          <motion.div
            className="w-6 h-6 relative flex-shrink-0"
            animate={{ rotate: openSubMenu === item.id ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="h-0.5 w-4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span className="h-4 w-0.5 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {openSubMenu === item.id && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pl-4 mt-2 space-y-1 border-l-2 border-white/30 ml-4">
                {item.items.map((subItem, idx) => {
                  const SubLinkComponent = subItem.external ? "a" : Link;
                  const subLinkProps = subItem.external
                    ? {
                        href: subItem.path,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : { to: subItem.path };

                  return (
                    <SubLinkComponent
                      key={idx}
                      {...subLinkProps}
                      onClick={onClose}
                      className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 hover:pl-5"
                    >
                      {subItem.title}
                    </SubLinkComponent>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    );
  }
);

// ==================== CUSTOM HOOK ====================
const useHeaderScroll = () => {
  const [state, setState] = useState({
    isScrolled: false,
    isVisible: true,
    lastScrollY: 0,
  });

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      setState({
        isScrolled: currentScrollY > 50,
        isVisible: currentScrollY < state.lastScrollY || currentScrollY < 50,
        lastScrollY: currentScrollY,
      });
    };

    window.addEventListener("scroll", controlHeader, { passive: true });
    return () => window.removeEventListener("scroll", controlHeader);
  }, [state.lastScrollY]);

  return { isScrolled: state.isScrolled, isVisible: state.isVisible };
};

// ==================== MAIN COMPONENT ====================
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const { isScrolled, isVisible } = useHeaderScroll();
  const location = useLocation();

  const closeAllMenus = useCallback(() => {
    setIsMenuOpen(false);
    setOpenSubMenu(null);
  }, []);

  const toggleSubMenu = useCallback((menuId) => {
    setOpenSubMenu((prev) => (prev === menuId ? null : menuId));
  }, []);

  const handleLogoClick = useCallback(
    (e) => {
      if (location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [location.pathname]
  );

  return (
    <>
      {/* ==================== HEADER ==================== */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: !isVisible && isScrolled ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`z-50 px-4 lg:px-8 transition-all duration-500 ${
          isScrolled
            ? "fixed w-full top-0 bg-white dark:bg-gray-900 shadow-2xl border-b-2 border-gray-100 dark:border-gray-800"
            : "sticky top-0 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-20 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 z-50 group relative"
            onClick={handleLogoClick}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <img
                src={logoUsina}
                alt="Logo"
                className="h-14 lg:h-16 dark:hidden"
              />
              <img
                src={logoBranca}
                alt="Logo"
                className="h-14 lg:h-16 hidden dark:block"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <ul className="flex items-center space-x-2 font-semibold text-sm text-gray-900 dark:text-white">
              {NAVIGATION_ITEMS.map((item, index) => (
                <React.Fragment key={item.id}>
                  {index === 1 && (
                    <li className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-700 mx-2" />
                  )}
                  {index === 5 && (
                    <li className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-700 mx-2" />
                  )}
                  <MenuItem
                    item={item}
                    isDesktop={true}
                    hoveredMenu={hoveredMenu}
                    setHoveredMenu={setHoveredMenu}
                  />
                </React.Fragment>
              ))}

              {/* Botão Contato especial */}
              <li className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-700 mx-2" />
              <li
                className="relative"
                onMouseEnter={() => setHoveredMenu("contato")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="flex items-center gap-1.5 px-6 py-3 rounded-xl bg-gradient-to-r from-usina-primary to-usina-secondary text-white shadow-lg shadow-usina-primary/30 hover:shadow-xl hover:shadow-usina-primary/40 transition-all duration-300 font-bold">
                  CONTATO
                  <motion.div
                    animate={{ rotate: hoveredMenu === "contato" ? 180 : 0 }}
                  >
                    <FaAngleDown className="text-xs" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {hoveredMenu === "contato" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full mt-2 right-0 w-[280px] bg-gradient-to-br from-usina-primary to-usina-secondary shadow-2xl p-6 rounded-3xl z-50"
                    >
                      <ul className="space-y-2">
                        {CONTACT_ITEMS.map((item, idx) => (
                          <li key={idx}>
                            {item.external ? (
                              <a
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-3 px-4 text-white rounded-xl hover:bg-white/20 transition-all"
                              >
                                {item.title}
                              </a>
                            ) : (
                              <Link
                                to={item.path}
                                className="block py-3 px-4 text-white rounded-xl hover:bg-white/20 transition-all"
                              >
                                {item.title}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
            <div className="ml-6">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-4 z-50">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HamburgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ==================== MOBILE MENU ==================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
              onClick={closeAllMenus}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-br from-usina-primary via-usina-seto-usina-secondary to-usina-secondary shadow-2xl z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b border-white/20 flex justify-between items-center">
                  <img src={logoBranca} alt="Logo" className="h-12" />
                  <button
                    onClick={closeAllMenus}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-all"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-2 text-white font-semibold">
                    {NAVIGATION_ITEMS.map((item) => (
                      <MenuItem
                        key={item.id}
                        item={item}
                        isDesktop={false}
                        onClose={closeAllMenus}
                        openSubMenu={openSubMenu}
                        toggleSubMenu={toggleSubMenu}
                      />
                    ))}

                    {/* Contato Mobile */}
                    <li className="mt-4">
                      <button
                        onClick={() => toggleSubMenu("contato")}
                        className="w-full flex justify-between items-center py-3.5 px-5 rounded-xl bg-white/20 border-2 border-white/40 hover:bg-white/30 transition-all font-bold"
                      >
                        <span>Contato</span>
                        <motion.div
                          className="w-6 h-6 relative"
                          animate={{
                            rotate: openSubMenu === "contato" ? 45 : 0,
                          }}
                        >
                          <span className="h-0.5 w-4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                          <span className="h-4 w-0.5 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openSubMenu === "contato" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 mt-2 space-y-1 border-l-2 border-white/30 ml-4">
                              {CONTACT_ITEMS.map((item, idx) => (
                                item.external ? (
                                  <a
                                    key={idx}
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeAllMenus}
                                    className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                  >
                                    {item.title}
                                  </a>
                                ) : (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    onClick={closeAllMenus}
                                    className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                  >
                                    {item.title}
                                  </Link>
                                )
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
