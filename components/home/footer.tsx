import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className=" pt-1 text-white">
      {/* Promotion Banner */}
      <div className="bg-violet-800 text-white py-16 px-4 md:px-8 m-4 rounded-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-medium leading-tight">
              Do you want a <span className="font-bold">hoodie</span> with an<br />
              excellent print for a great<br />
              <span className="font-bold">discount?</span>
            </h2>
            <button className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Explore More
            </button>
          </div>
          <div className="relative">
            <img 
              src="/images/model-shirt.png" 
              alt="Hoodie with print" 
              className="w-64 h-64 object-cover "
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full w-32 h-32 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">60%</span>
              <span className="text-xl font-medium text-gray-800 flex items-center">OFF <ArrowRight size={20} /></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="py-12 px-4 md:px-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold tracking-tighter">SNOB</h2>
            </div>
            <p className="text-gray-400 mb-2">Côte d&apos;Ivoire</p>
            <p className="text-gray-400 mb-2">Abidjan, Cocody </p>
            <p className="text-gray-400 mb-2">info@snob.com</p>
            <p className="text-gray-400">+225 00 00 00 00 00</p>
          </div>
          
          {/* Menu */}
          <div>
            <h3 className="text-lg font-medium mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-900">Accueil</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900">Boutique</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900">A propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-900">Panier</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900">Wishlist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900">Compte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900">Politique de confidentialité</a></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Réseaux sociaux</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-900">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>Copyright © SNOB. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

