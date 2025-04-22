import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart } from "lucide-react"; // Icônes
import { Cart } from "@/components/cart";
import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";
import { Search01Icon } from "hugeicons-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody } from "@heroui/react";

export const NavbarComponent: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Accueil");
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    { label: "Contact", href: "/contact" },
  ];

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCartStore();

  return (
    <>
      <nav
        className={`w-full z-50 grid grid-cols-3 px-8 md:px-16 py-2 items-center justify-between transition duration-300 ease-in
        ${
          isSticky
            ? "fixed top-0 backdrop-blur-3xl"
            : "absolute top-0 bg-transparent"
        }`}
      >
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-start">
          <ul className="flex p-2 space-x-8 text-white font-medium text-sm border-2 border-gray-200 rounded-full">
            {menuItems.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`cursor-pointer transition-all duration-300 p-1 ${
                    pathname === link.href
                      ? "text-gray-900 bg-violet-200 rounded-full px-2"
                      : "hover:text-violet-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <div className="text-4xl flex justify-center font-bold tracking-wide text-gray-800">
          <Link href={"/"} className="text-violet-800 logo-text">SNOB</Link>
        </div>

        {/* Search and Cart */}
        <div className="flex justify-end">
          {/* <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="hidden md:block mt-[3px] md:w-64 md:h-10 md:rounded-full md:border-2 md:border-gray-300 md:pl-10 md:pr-10 md:text-sm md:leading-5 md:placeholder-gray-500 md:focus:border-violet-500 md:focus:ring-1 md:focus:ring-violet-500 md:focus:outline-none"
            />
            <Search01Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div> */}

          <button
            onClick={() => setIsOpen(true)}
            className="relative transition hover:bg-violet-950 p-3 bg-violet-600 rounded-full"
          >
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-violet-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
            <ShoppingCart size={22} className="text-white transition" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={() => setIsDrawerOpen(false)}
        radius="none"
      >
        <DrawerContent>
          <DrawerHeader className="flex justify-between items-center">
            <Link href={"/"} className="text-2xl font-bold">SNOB</Link>
            {/* <button onClick={() => setIsDrawerOpen(false)}>
              <X size={24} />
            </button> */}
          </DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col gap-6">
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full h-10 rounded-full border-2 border-gray-300 pl-10 pr-10 text-sm"
                />
                <Search01Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div> */}

              <div className="flex flex-col gap-4">
                {menuItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-lg font-medium ${
                      pathname === link.href
                        ? "text-violet-600"
                        : "hover:text-violet-600"
                    }`}
                    onClick={() => {
                      setActiveLink(link.label);
                      setIsDrawerOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Cart isOpen={isOpen} onCartClose={() => setIsOpen(false)} />
    </>
  );
};

// export default NavbarComponent;
