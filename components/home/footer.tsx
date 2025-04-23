import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Send, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden pt-16 pb-6 bg-gradient-to-b from-gray-900 to-black">
      {/* Éléments décoratifs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
      
      {/* Bannière promotionnelle */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-800 to-fuchsia-700">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
            </svg>
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center p-8 md:p-12">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Rejoignez la communauté <span className="text-violet-200">SNOB</span> <br />
                et obtenez <span className="text-violet-200">15% de réduction</span>
              </h2>
              <p className="text-white/80 max-w-md">
                Inscrivez-vous à notre newsletter pour recevoir des offres exclusives, 
                des mises à jour sur les nouvelles collections et des invitations à nos événements.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="w-full sm:w-80 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>
                <button className="px-6 py-4 rounded-full bg-white text-violet-900 font-medium hover:bg-violet-100 transition-colors flex items-center justify-center">
                  S&apos;inscrire <Send size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
            <Link href="/privacy" className="hover:text-violet-300 transition-colors">Politique de confidentialité</Link>
            <Link href="/terms" className="hover:text-violet-300 transition-colors">Conditions d&apos;utilisation</Link>
            <Link href="/shipping" className="hover:text-violet-300 transition-colors">Livraison</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
