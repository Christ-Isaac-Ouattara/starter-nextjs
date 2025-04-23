"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Check, Truck, RefreshCw, Shield } from "lucide-react";
import { ArrowRight02Icon, ArrowLeft02Icon } from "hugeicons-react";
import { products } from "@/components/data/products";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "../footer/footer";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Noir");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);

  const { addItem } = useCartStore();

  useEffect(() => {
    // Réinitialiser le scroll quand on change de produit
    window.scrollTo(0, 0);
    
    // Trouver des produits similaires (même collection ou prix similaire)
    if (product) {
      const similar = products
        .filter(p => 
          p.id !== product.id && 
          (p.collection === product.collection || 
           Math.abs(p.price - product.price) < 5000)
        )
        .slice(0, 4);
      setRelatedProducts(similar);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm max-w-md"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-700 flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Produit introuvable</h1>
          <p className="text-gray-300 mb-6">
            Nous n&apos;avons pas pu trouver le produit que vous recherchez. Il a peut-être été retiré ou l&apos;URL est incorrecte.
          </p>
          <Link href="/shop">
            <button className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors">
              Retour à la boutique
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const colors = ["Blanc", "Noir", "Rose", "Beige"];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      image: product.image[0],
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });

    toast.success("Produit ajouté au panier", {
      style: {
        background: '#333',
        color: '#fff',
        borderRadius: '10px',
      },
      iconTheme: {
        primary: '#8b5cf6',
        secondary: '#fff',
      },
    });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-16 ">
      {/* Éléments décoratifs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
      
      {/* Fil d'Ariane */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à la boutique</span>
          </Link>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <Link href="/" className="hover:text-violet-400 transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-violet-400 transition-colors">Boutique</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">{product.name}</span>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galerie d'images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-2xl">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-800 relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.image[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Badges */}
                {/* <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-violet-600 text-white text-xs font-medium rounded-full">
                      Nouveau
                    </span>
                  )}
                  {product.discount && (
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                </div> */}

                {/* Boutons de navigation */}
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev > 0 ? prev - 1 : product.image.length - 1
                    )
                  }
                  className="absolute z-10 left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Image précédente"
                >
                  <ArrowLeft02Icon className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev < product.image.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="absolute z-10 right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Image suivante"
                >
                  <ArrowRight02Icon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Miniatures */}
            <div className="flex justify-center gap-3 mt-4">
              {product.image.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? "ring-2 ring-violet-500 scale-105"
                      : "ring-1 ring-gray-700 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={product.image[index]}
                    alt={`${product.name} vue ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Informations produit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* En-tête produit */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.name}</h1>
              {/* <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={16} 
                      className={`${star <= (product.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">(24 avis)</span>
                </div>
                <span className="text-sm text-gray-400">Réf: {product.id}</span>
              </div> */}
              
              {/* Prix */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-purple-800">{product.price.toLocaleString()} FCFA</span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-500 line-through">{product.oldPrice.toLocaleString()} FCFA</span>
                )}
                {product.discount && (
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded">
                    Économisez {product.discount}%
                  </span>
                )}
              </div>
            </div>
            
            {/* Description courte */}
            <p className="text-gray-300 mb-8">
              {product.description || "Un vêtement unique de la collection SNOB, conçu pour exprimer votre style avec élégance et originalité."}
            </p>
            
            {/* Sélection de couleur */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-300 mb-3">COULEUR</h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => {
                  // Mapper les noms de couleurs aux classes Tailwind
                  const colorClass = {
                    "Blanc": "bg-white",
                    "Noir": "bg-black",
                    "Rose": "bg-pink-400",
                    "Beige": "bg-amber-100",
                  }[color];
                  
                  return (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`group relative w-10 h-10 rounded-full ${colorClass} ${
                        selectedColor === color
                          ? "ring-2 ring-offset-2 ring-offset-gray-800 ring-violet-500"
                          : "ring-1 ring-gray-600"
                      }`}
                      aria-label={`Couleur ${color}`}
                    >
                      {selectedColor === color && (
                        <Check 
                          size={16} 
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                            color === "Blanc" || color === "Beige" ? "text-black" : "text-white"
                          }`} 
                        />
                      )}
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Sélection de taille */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-gray-300">TAILLE</h3>
                <button className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
                  Guide des tailles
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-violet-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Sélection de quantité */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-300 mb-3">QUANTITÉ</h3>
              <div className="flex items-center">
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-l-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <div className="w-16 h-12 flex items-center justify-center bg-gray-800 text-white font-medium">
                  {quantity}
                </div>
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-r-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 px-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-medium rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/20"
              >
                <ShoppingCart size={18} className="mr-2" />
                Ajouter au panier
              </button>
              {/* <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                <Heart size={20} />
              </button>
              <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                <Share2 size={20} />
              </button> */}
            </div>
            
            {/* Avantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                <Truck size={18} className="text-violet-400" />
                <span className="text-sm text-gray-300">Livraison rapide</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                <RefreshCw size={18} className="text-violet-400" />
                <span className="text-sm text-gray-300">Retours sous 7 jours</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                <Shield size={18} className="text-violet-400" />
                <span className="text-sm text-gray-300">Garantie qualité</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Onglets d'information */}
        <div className="mt-16">
          <div className="border-b border-gray-800">
            <div className="flex overflow-x-auto hide-scrollbar">
              {[
                "description",
                "caractéristiques",
                // "avis"
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? "text-violet-400 border-b-2 border-violet-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="py-8">
            {activeTab === "description" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-300 space-y-4"
              >
                <p>
                  {product.description || `Le ${product.name} est un vêtement unique de la collection SNOB, conçu pour exprimer votre style avec élégance et originalité.`}
                </p>
                <p>
                  Fabriqué à partir de matériaux de haute qualité, ce vêtement offre un confort exceptionnel tout en affichant un design distinctif qui ne manquera pas d&apos;attirer l&apos;attention.
                </p>
                <p>
                  Chaque pièce est soigneusement confectionnée avec une attention particulière aux détails, reflétant l&apos;engagement de SNOB envers l&apos;excellence et l&apos;innovation dans la mode.
                </p>
              </motion.div>
            )}
            
            {activeTab === "caractéristiques" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-violet-400 mt-0.5" />
                    <span>Matière: 100% coton premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-violet-400 mt-0.5" />
                    <span>Impression: Sérigraphie haute qualité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-violet-400 mt-0.5" />
                    <span>Entretien: Lavage à 30°C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-violet-400 mt-0.5" />
                    <span>Coupe: Regular fit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-violet-400 mt-0.5" />
                    <span>Col: Rond renforcé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={18} className="text-violet-400 mt-0.5" />
                    <span>Origine: Fabriqué en Côte d&apos;Ivoire</span>
                  </li>
                </ul>
              </motion.div>
            )}
            
            {activeTab === "avis" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={20} 
                          className="text-yellow-400 fill-yellow-400" 
                        />
                      ))}
                      <span className="ml-2 text-lg font-medium text-white">4.9/5</span>
                    </div>
                    <p className="text-sm text-gray-400">Basé sur 24 avis</p>
                  </div>
                  <button className="px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors">
                    Écrire un avis
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Avis fictifs */}
                  {[
                    {
                      name: "Marie K.",
                      date: "12 juin 2023",
                      rating: 5,
                      comment: "J'adore ce t-shirt ! La qualité est exceptionnelle et le design est vraiment unique. Je reçois des compliments à chaque fois que je le porte."
                    },
                    {
                      name: "Thomas L.",
                      date: "3 mai 2023",
                      rating: 4,
                      comment: "Très bon produit, confortable et stylé. La taille correspond parfaitement aux indications. Je retire une étoile car le délai de livraison était un peu long."
                    },
                    {
                      name: "Sophie M.",
                      date: "17 avril 2023",
                      rating: 5,
                      comment: "C'est mon deuxième achat chez SNOB et je ne suis pas déçue. Qualité au rendez-vous et le design est toujours aussi original."
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-gray-800 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-white">{review.name}</h4>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              size={16} 
                              className={`${star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Produits similaires */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Vous pourriez aussi aimer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <Link href={`/products/${relatedProduct.id}`} className="block group">
                    <div className="relative rounded-xl overflow-hidden bg-gray-800 aspect-[3/4]">
                      <img
                        src={relatedProduct.image[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {relatedProduct.discount && (
                        <span className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                          -{relatedProduct.discount}%
                        </span>
                      )}
                    </div>
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:text-violet-400 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-medium text-violet-400">
                          {relatedProduct.price.toLocaleString()} FCFA
                        </span>
                        {/* <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              size={12} 
                              className={`${star <= (relatedProduct.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                            />
                          ))}
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <Footer />
    </div>
  );
}

