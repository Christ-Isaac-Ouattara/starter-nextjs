"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Divider,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Delete01Icon, ShoppingBag01Icon } from "hugeicons-react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, X, AlertCircle } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

interface CartProps {
  isOpen: boolean;
  onCartClose: () => void;
}

export const Cart = ({ isOpen, onCartClose }: CartProps) => {
  const { onOpen, onOpenChange } = useDisclosure();
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCartStore();
  const [removingItemId, setRemovingItemId] = useState<string | null>(null);

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  const handleRemoveItem = (id: string, size: string, color: string) => {
    setRemovingItemId(`${id}-${size}-${color}`);
    // Petit délai pour permettre à l'animation de se terminer
    setTimeout(() => {
      removeItem(id, size, color);
      setRemovingItemId(null);
    }, 200);
  };

  return (
    <Drawer
      isOpen={isOpen}
      radius="lg"
      onClose={onCartClose}
      onOpenChange={onOpenChange}
      placement="right"
      classNames={{
        base: "bg-gradient-to-b from-gray-900 to-gray-800 border-l border-gray-700/50",
        header: "border-b border-gray-700/50",
        footer: "border-t border-gray-700/50",
      }}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <ShoppingBag className="w-5 h-5 text-violet-400 mr-2" />
                <h2 className="text-xl font-bold text-white">Votre Panier</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm bg-violet-500/20 text-violet-300 px-2 py-1 rounded-full">
                  {items.length} article{items.length !== 1 ? "s" : ""}
                </span>
                {/* <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button> */}
              </div>
            </DrawerHeader>

            <DrawerBody className="py-6 overflow-y-auto custom-scrollbar">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center h-full text-center px-4"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                    <ShoppingBag size={32} className="text-gray-500" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Votre panier est vide</h3>
                  <p className="text-gray-400 mb-8">
                    Découvrez nos collections et ajoutez des articles à votre panier.
                  </p>
                  <Button 
                    color="primary" 
                    variant="flat" 
                    onPress={onClose}
                    className="rounded-full px-6 bg-violet-600 text-white hover:bg-violet-700"
                  >
                    Continuer vos achats
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <AnimatePresence>
                    {items.map((item) => {
                      const itemKey = `${item.id}-${item.size}-${item.color}`;
                      const isRemoving = removingItemId === itemKey;
                      
                      return (
                        <motion.div
                          key={itemKey}
                          variants={itemVariants}
                          initial="hidden"
                          animate={isRemoving ? "exit" : "visible"}
                          exit="exit"
                          className="group"
                        >
                          <div className="flex gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h3 className="font-medium text-white">{item.name}</h3>
                                <button 
                                  onClick={() => handleRemoveItem(item.id, item.size, item.color)}
                                  className="text-gray-400 hover:text-red-400 transition-colors"
                                  aria-label="Supprimer l'article"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                              <div className="text-sm text-gray-400 mt-1 space-y-1">
                                <div className="flex flex-wrap gap-x-3">
                                  <span className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-violet-400 mr-1"></span>
                                    Taille: {item.size}
                                  </span>
                                  <span className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-violet-400 mr-1"></span>
                                    Couleur: {item.color}
                                  </span>
                                </div>
                                {item.printNumber && (
                                  <span className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-violet-400 mr-1"></span>
                                    Print: {item.printNumber}
                                  </span>
                                )}
                              </div>
                              <div className="flex justify-between items-center mt-3">
                                <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
                                  <button 
                                    className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                                    onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                                    aria-label="Diminuer la quantité"
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="w-8 h-8 flex items-center justify-center text-white font-medium">
                                    {item.quantity}
                                  </span>
                                  <button 
                                    className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                                    onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                                    aria-label="Augmenter la quantité"
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                                <span className="font-medium text-white">
                                  {formatPrice(item.price * item.quantity)} FCFA
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </DrawerBody>

            {items.length > 0 && (
              <DrawerFooter className="flex flex-col pt-4 space-y-4">
                <div className="space-y-3">
                  {/* <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sous-total</span>
                    <span className="font-medium text-white">{formatPrice(totalPrice)} FCFA</span>
                  </div> */}
                  {/* <div className="flex justify-between items-center">
                    <span className="text-gray-400">Livraison</span>
                    <span className="font-medium text-white">Calculé à la commande</span>
                  </div> */}
                  {/* <Divider className="bg-gray-700/50 my-2" /> */}
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-violet-400">{formatPrice(totalPrice)} FCFA</span>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-3 flex items-start gap-3 mb-4">
                  <AlertCircle size={18} className="text-violet-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    Les frais de livraison seront calculés à après validation de la commande.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={() => clearCart()}
                    className="rounded-lg flex items-center justify-center gap-2 bg-red-500/10 text-red-400 hover:bg-red-500/20"
                  >
                    <Trash2 size={16} />
                    Vider le panier
                  </Button>

                  <Link 
                    href="/checkout" 
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Commander
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </DrawerFooter>
            )}
          </>
        )}
      </DrawerContent>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </Drawer>
  );
};
