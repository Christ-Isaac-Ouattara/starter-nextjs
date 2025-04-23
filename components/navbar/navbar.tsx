"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ShoppingCart, X, Search, User, Heart } from "lucide-react";
import { Cart } from "@/components/cart/cart";
import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";
import { Search01Icon } from "hugeicons-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, Button } from "@heroui/react";

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
    { label: "Boutique", href: "/shop" },
    // { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCartStore();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const searchVariants = {
    hidden: { opacity: 0, width: "0%" },
    visible: { opacity: 1, width: "100%", transition: { duration: 0.3 } },
    exit: { opacity: 0, width: "0%", transition: { duration: 0.2 } }
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
                  SNOB
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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
              {/* <Link
                href="/account"
                className="hidden md:flex p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                aria-label="Mon compte"
              >
                <User size={20} />
              </Link> */}

              {/* Panier */}
              <button
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
              </button>
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
                SNOB
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
              {/* <div className="pt-6 border-t border-gray-700/50">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/account"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <User size={18} />
                    <span>Mon compte</span>
                  </Link>
                  <Link
                    href="/favorites"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <Heart size={18} />
                    <span>Favoris</span>
                  </Link>
                </div>
              </div> */}

              {/* Réseaux sociaux */}
              <div className="pt-6 border-t border-gray-700/50">
                <p className="text-sm text-gray-400 mb-4">Suivez-nous</p>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-violet-600/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-violet-600/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-violet-600/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-violet-600/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a> */}
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

      {/* Composant Cart */}
      <Cart isOpen={isOpen} onCartClose={() => setIsOpen(false)} />
    </>
  );
};
