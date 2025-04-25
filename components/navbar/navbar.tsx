"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ShoppingCart, X, Search, User, Heart } from "lucide-react";
import Link from "next/link";
import {
  Facebook01Icon,
  InstagramIcon,
  Search01Icon,
  TwitterIcon,
} from "hugeicons-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
} from "@heroui/react";

export const NavbarComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Accueil", href: "/" },
    // { label: "Boutique", href: "/shop" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const searchVariants = {
    hidden: { opacity: 0, width: "0%" },
    visible: { opacity: 1, width: "100%", transition: { duration: 0.3 } },
    exit: { opacity: 0, width: "0%", transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className={`w-full z-50 fixed top-0 transition-all duration-300 ease-in-out ${
          isSticky
            ? "py-2 backdrop-blur-xl bg-gray-900/80 shadow-lg shadow-black/5"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo et Navigation Mobile */}
            <div className="flex items-center">
              {/* Bouton Menu Mobile */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none md:hidden"
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Menu principal"
              >
                <Menu size={24} />
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center ml-2 md:ml-0">
                <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text tracking-tight">
                  SITE WEB
                </span>
              </Link>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-violet-600 text-white"
                        : "text-gray-300 hover:bg-gray-800/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions (Recherche, Panier, etc.) */}
            <div className="flex items-center space-x-3">
              {/* Recherche */}
              <AnimatePresence>
                {isSearchOpen ? (
                  <motion.div
                    key="search-input"
                    variants={searchVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative md:w-64"
                  >
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      className="w-full py-2 pl-10 pr-4 bg-gray-800/70 border border-gray-700 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      autoFocus
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    key="search-button"
                    variants={searchVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                    aria-label="Rechercher"
                  >
                    <Search size={20} />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Favoris - visible uniquement sur desktop */}
              {/* <button
                className="hidden md:flex p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                aria-label="Favoris"
              >
                <Heart size={20} />
              </button> */}

              {/* Compte - visible uniquement sur desktop */}
              <Link
                href="/"
                className="hidden md:flex p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                aria-label="Mon compte"
              >
                <User size={20} />
              </Link>

              {/* Panier */}
              {/* <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white transition-colors"
                aria-label="Panier"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-white text-violet-600 text-xs font-bold rounded-full"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button> */}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Drawer Mobile */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={() => setIsDrawerOpen(false)}
        classNames={{
          base: "bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700/50",
          header: "border-b border-gray-700/50",
        }}
      >
        <DrawerContent>
          <DrawerHeader className="flex justify-between items-center py-4">
            <Link href="/" onClick={() => setIsDrawerOpen(false)}>
              <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">
                SITE WEB
              </span>
            </Link>
            {/* <button 
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/50"
            >
              <X size={24} />
            </button> */}
          </DrawerHeader>

          <DrawerBody className="py-6">
            <div className="space-y-6">
              {/* Recherche Mobile */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full py-3 pl-10 pr-4 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              {/* Navigation Mobile */}
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-violet-600/20 text-violet-400"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Actions supplémentaires */}
              <div className="pt-6 border-t border-gray-700/50">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <User size={18} />
                    <span>Mon compte</span>
                  </Link>
                  {/* <Link
                    href="/favorites"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <Heart size={18} />
                    <span>Favoris</span>
                  </Link> */}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="pt-6 border-t border-gray-700/50">
                <p className="text-sm text-gray-400 mb-4">Suivez-nous</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-violet-600/20 transition-colors"
                  >
                    <Facebook01Icon />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-violet-600/20 transition-colors"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-violet-600/20 transition-colors"
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-6 border-t border-gray-700/50">
                <Button
                  color="primary"
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg"
                  onPress={() => {
                    setIsDrawerOpen(false);
                    window.location.href = "/contact";
                  }}
                >
                  Contactez-nous
                </Button>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </>
  );
};
