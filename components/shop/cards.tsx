"use client";

import Link from "next/link";
import { products } from "@/components/data/products";
import { Card as CardUi, CardFooter, Image, Button, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useState } from "react";

interface CardProps {
  selectedCollection: string | null;
  searchQuery?: string;
}

export const Card: React.FC<CardProps> = ({
  selectedCollection,
  searchQuery = "",
}) => {
  // Filtrer les produits en fonction de la collection sélectionnée et de la recherche
  const filteredProducts = products.filter((product) => {
    const matchesCollection = selectedCollection
      ? product.collection === selectedCollection
      : true;
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCollection && matchesSearch;
  });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-1 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative rounded-xl overflow-hidden bg-gray-800">
                  <Link
                    href={`/products/${product.id}`}
                    className="block relative"
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay avec actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <button
                          onClick={() => {
                            window.location.href = "/products/" + product.id;
                          }}
                          className="bg-white text-gray-900 p-3 rounded-full hover:bg-violet-500 hover:text-white transition-colors"
                        >
                          <Eye size={18} />
                        </button>
                        <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-violet-500 hover:text-white transition-colors">
                          <ShoppingCart size={18} />
                        </button>
                        {/* <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-violet-500 hover:text-white transition-colors">
                          <Heart size={18} />
                        </button> */}
                      </div>
                    </div>
                  </Link>

                  {/* Badges */}
                  {/* <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Chip size="sm" color="primary" variant="flat">Nouveau</Chip>
                    )}
                    {product.discount && (
                      <Chip size="sm" color="danger" variant="flat">-{product.discount}%</Chip>
                    )}
                  </div> */}
                </div>

                {/* Informations produit */}
                <div className="p-4 flex flex-col justify-between h-auto">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-medium text-white group-hover:text-violet-300 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-2 flex justify-between items-center">
                    <div>
                      {product.oldPrice ? (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-violet-400">
                            {product.price.toLocaleString()} FCFA
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            {product.oldPrice.toLocaleString()} FCFA
                          </span>
                        </div>
                      ) : (
                        <span className="font-semibold text-violet-400">
                          {product.price.toLocaleString()} FCFA
                        </span>
                      )}
                    </div>

                    {/* <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star} 
                          className={`w-4 h-4 ${star <= (product.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div> */}
                  </div>

                  {/* <div className="mt-4 items-end">
                    <Button
                      color="primary"
                      radius="full"
                      className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700"
                    >
                      <ShoppingCart size={16} className="mr-2" />
                      Ajouter au panier
                    </Button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              Aucun produit trouvé
            </h3>
            <p className="text-gray-400 max-w-md">
              Nous n&apos;avons pas trouvé de produits correspondant à votre
              recherche. Essayez avec d&apos;autres termes ou parcourez nos
              collections.
            </p>
            <Button
              color="primary"
              variant="flat"
              radius="full"
              className="mt-6"
              onPress={() => {
                // Réinitialiser la recherche et la collection
                if (typeof window !== "undefined") {
                  const searchInput = document.querySelector(
                    'input[type="text"]'
                  ) as HTMLInputElement;
                  if (searchInput) searchInput.value = "";
                }
              }}
            >
              Voir tous les produits
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
