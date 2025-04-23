"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./cards";
import { Collections } from "./collections";
import { Footer } from "../footer/footer";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";

export const Shop = () => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSelectCollection = (collectionId: string | null) => {
    setSelectedCollection(collectionId);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-12 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Section des collections */}
      <Collections
        onSelectCollection={handleSelectCollection}
        selectedCollection={selectedCollection}
      />

      {/* Hero section de la boutique */}
      <div className="relative  pb-4 overflow-hidden">
        {/* Éléments décoratifs */}
        {/* <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl"></div> */}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          {/* <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">
            Notre Boutique
          </h1> */}
          
          
          {/* Barre de recherche et filtres */}
          {/* <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 ">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="px-5 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors flex items-center justify-center sm:justify-start"
            >
              <Filter size={18} className="mr-2" />
              Filtres
            </button>
          </div> */}
        </motion.div>
      </div>

      
      
      {/* Titre de la section produits */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          {selectedCollection
            ? `Collection ${selectedCollection}`
            : "Tous nos produits"}
        </h2>
        <div className="w-24 mb-4 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
        
      </motion.div>
      
      {/* Grille de produits */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card selectedCollection={selectedCollection} searchQuery={searchQuery} />
      </motion.div>
      
      <Footer />
    </div>
  );
};
