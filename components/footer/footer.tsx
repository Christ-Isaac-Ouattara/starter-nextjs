import { ArrowDown01Icon, ArrowUp01Icon } from 'hugeicons-react';
import { ArrowDown01 } from 'lucide-react';
import React from 'react';

export const Footer: React.FC = () => {
  const [isUnrolled, setIsUnrolled] = React.useState(false);
  const handleUnroll = () => {
    setIsUnrolled(!isUnrolled);
  };
  return (
    <footer className={` m-4 h-16 overflow-hidden transition-all duration-300 ease-in-out bg-violet-950 rounded-xl text-white  rounded-t-xl mt-16 ${isUnrolled ? "h-auto" : "h-16"} `}>      
      {/* Footer Content */}

      {/** unroll button */}
      <div className="absolute m-3 right-4 flex justify-center items-center">
        <button onClick={handleUnroll} className="bg-violet-500 hover:bg-violet-600 text-white font-bold p-2 rounded-full">
          {isUnrolled ? <ArrowDown01Icon size={20} /> : <ArrowUp01Icon size={20} />}
          
        </button>
      </div>
      <div className="py-4 px-4 md:px-8 ">
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
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-100 text-sm">
          <p>Copyright © SNOB. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

