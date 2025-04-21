import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className=" pt-1 m-4 bg-violet-800 rounded-xl text-white  rounded-t-xl mt-16">      
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
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-100 text-sm">
          <p>Copyright © SNOB. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

