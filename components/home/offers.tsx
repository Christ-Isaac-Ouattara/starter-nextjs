import React from 'react';
import { CircleArrowUpRightIcon } from "hugeicons-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Offers: React.FC = () => {
  return (
    <section className="relative">
      {/* Cercle décoratif */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-violet-600/20 rounded-full blur-3xl"></div>
      
      {/* Titre de section avec animation */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">
          Offres personnalisées
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Exprimez votre style unique avec nos créations sur mesure
        </p>
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Contenu principal */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        {/* Image avec effet de bordure */}
        <div className="md:col-span-3 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-violet-500/50">
            <img
              src="/images/snob-personnalisé.jpg"
              alt="T-shirts personnalisés SNOB"
              className="w-full h-[400px] object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <span className="inline-block px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full mb-2">
                Exclusif
              </span>
              <h3 className="text-white text-2xl font-bold">Collection Personnalisée</h3>
            </div>
          </div>
        </div>
        
        {/* Texte et CTA */}
        <div className="md:col-span-2 flex flex-col space-y-6">
          <h3 className="text-3xl md:text-4xl text-white font-bold leading-tight">
            Créez votre <span className="text-violet-400">SNOB</span> unique
          </h3>
          <p className="text-gray-300 text-lg">
            Choisissez votre design, vos couleurs et votre style. Nous créons des vêtements qui reflètent votre personnalité.
          </p>
          <ul className="space-y-3">
            {['Designs exclusifs', 'Matériaux premium', 'Fabrication soignée'].map((item, i) => (
              <li key={i} className="flex items-center text-gray-200">
                <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
            >
              <span className="mr-2 font-medium">Personnaliser maintenant</span>
              <CircleArrowUpRightIcon size={22} className="stroke-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
