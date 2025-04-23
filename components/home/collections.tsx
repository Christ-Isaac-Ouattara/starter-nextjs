import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collections } from "../data/products";
import { CircleArrowUpRightIcon } from "hugeicons-react";

const Collections = () => {
  return (
    <section className="relative">
      {/* Éléments décoratifs */}
      <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-1/3 right-1/4 w-48 h-48 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
      
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-violet-900/50 text-violet-300 text-sm font-medium rounded-full mb-3">
          Explorez
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">
          Nos Collections
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Des styles uniques pour tous les goûts et toutes les occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {collections.map((collection, index) => {
          // Définir la taille des cartes pour créer une grille asymétrique
          let colSpan = "lg:col-span-3";
          let rowSpan = "";
          
          if (index === 0) {
            colSpan = "lg:col-span-6";
            rowSpan = "lg:row-span-2";
          } else if (index === 3) {
            colSpan = "lg:col-span-6";
          }
          
          return (
            <Link 
              href={`/shop`} 
              key={collection.id}
              className={`group ${colSpan} ${rowSpan}`}
            >
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl">
                {/* Overlay de couleur */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                
                {/* Image */}
                <div className="absolute inset-0 bg-violet-900/30">
                  {collection.imageUrl ? (
                    <Image
                      src={collection.imageUrl}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-violet-800 to-fuchsia-900 flex items-center justify-center">
                      <span className="text-white/50 text-lg">Image à venir</span>
                    </div>
                  )}
                </div>
                
                {/* Contenu */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 max-w-xs">
                    {collection.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      {collection.itemCount} articles
                    </span>
                    <span className="inline-flex items-center text-violet-300 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Découvrir <CircleArrowUpRightIcon size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bouton "Voir toutes les collections" */}
      <div className="flex justify-center mt-12">
        <Link
          href="/shop"
          className="relative overflow-hidden group bg-white/10 backdrop-blur-sm text-white border border-violet-500/30 hover:border-violet-500 rounded-full px-8 py-3 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center">
            <span className="mr-2">Voir toutes les collections</span>
            <CircleArrowUpRightIcon 
              size={22} 
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y--1" 
            />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>
    </section>
  );
};

export default Collections;
