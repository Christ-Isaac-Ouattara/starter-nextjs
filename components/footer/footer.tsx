import React from 'react';
import { Instagram, Facebook, Twitter, Send, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const [isUnrolled, setIsUnrolled] = React.useState(false);
  const handleUnroll = () => {
    setIsUnrolled(!isUnrolled);
  };
  return (
    <footer className="relative mt-10 overflow-hidden pt-16 pb-6 bg-gradient-to-b from-gray-900 to-black">
      {/* Éléments décoratifs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
    
      
      {/* Contenu principal du footer */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Informations de la marque */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white">SNOB</h2>
              <p className="text-violet-300 text-sm mt-1">Style. Nouveauté. Originalité. Beauté.</p>
            </div>
            <p className="text-gray-400 mb-6">
              SNOB est une marque de vêtements ivoirienne qui célèbre l&apos;individualité et l&apos;expression personnelle à travers des designs uniques et des matériaux de qualité.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3 text-violet-400" />
                <span>Abidjan, Cocody, Côte d&apos;Ivoire</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-violet-400" />
                <span>+225 07 07 07 07 07</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-violet-400" />
                <span>contact@snob-style.com</span>
              </div>
            </div>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-violet-500 mr-3"></span>
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-violet-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 text-violet-500" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-violet-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 text-violet-500" />
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-violet-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 text-violet-500" />
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-violet-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 text-violet-500" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Collections */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-violet-500 mr-3"></span>
              Collections
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-violet-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 text-violet-500" />
                  Première Édition
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-violet-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 text-violet-500" />
                  Seconde Édition
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-violet-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 text-violet-500" />
                  Édition Limitée
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-violet-300 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2 text-violet-500" />
                  Personnalisation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-violet-500 mr-3"></span>
              Suivez-nous
            </h3>
            <p className="text-gray-400 mb-6">
              Rejoignez notre communauté sur les réseaux sociaux pour découvrir nos dernières créations et partager votre style SNOB.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-violet-900/50 flex items-center justify-center text-white hover:bg-violet-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-violet-900/50 flex items-center justify-center text-white hover:bg-violet-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-violet-900/50 flex items-center justify-center text-white hover:bg-violet-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Séparateur */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm py-6">
          <p>© {new Date().getFullYear()} SNOB. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-violet-300 transition-colors">Politique de confidentialité</Link>
            <Link href="/" className="hover:text-violet-300 transition-colors">Conditions d&apos;utilisation</Link>
            <Link href="/" className="hover:text-violet-300 transition-colors">Livraison</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

