import React from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { products } from "../data/products";
import Link from "next/link";
import { motion } from "framer-motion";

const newProducts = products.filter((product) => product.collection === "secondEdition");

export const RecentArrivals: React.FC = () => {
  return (
    <section className="relative">
      {/* Élément décoratif */}
      <div className="absolute -z-10 top-1/2 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
      
      <div className="text-center mb-16 relative">
        <span className="inline-block px-3 py-1 bg-violet-900/50 text-violet-300 text-sm font-medium rounded-full mb-3">
          Nouveautés
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">
          Dernières sorties
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Découvrez notre nouvelle collection et soyez parmi les premiers à porter nos créations exclusives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {newProducts.slice(0,4).map((product, index) => (
          <div 
            key={product.id} 
            className={`group relative ${index === 1 || index === 3 ? "lg:mt-16" : ""}`}
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay avec actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Link href={`/products/${product.id}`}>
                      <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-violet-500 hover:text-white transition-colors">
                        <Eye size={18} />
                      </button>
                    </Link>
                    {/* <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-violet-500 hover:text-white transition-colors">
                      <ShoppingCart size={18} />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badge de nouveauté */}
            <div className="absolute top-3 left-3 bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-md">
              NEW
            </div>
            
            <div className="mt-4 px-2">
              <Link href={`/products/${product.id}`} className="block">
                <h3 className="text-lg font-medium text-white group-hover:text-violet-400 transition-colors">
                  {product.name}
                </h3>
                <p className="font-semibold text-violet-400 mt-1">{product.price.toLocaleString()} FCFA</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bouton "Voir plus" */}
      <div className="flex justify-center mt-12">
        <Link
          href="/shop"
          className="group relative inline-flex items-center overflow-hidden rounded-full bg-violet-800 px-8 py-3 text-white transition-all duration-300 hover:bg-violet-700"
        >
          <span className="absolute right-0 translate-x-full opacity-0 transition-transform group-hover:-translate-x-4 group-hover:opacity-100">
            <ShoppingCart size={16} />
          </span>
          <span className="text-sm font-medium transition-all group-hover:mr-4">Voir toute la collection</span>
        </Link>
      </div>
    </section>
  );
};

export default RecentArrivals;
