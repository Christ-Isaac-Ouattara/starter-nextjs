"use client";

import React, { useState } from "react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/utils";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

type PaymentMethod = "mobile_money" | "card" | "cash_on_delivery";

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  additionalInfo: string;
  paymentMethod: PaymentMethod;
}

export const CheckoutComponent: React.FC = () => {
  const { items, totalPrice, clearCart } = useCartStore();
  const router = useRouter();
  
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    additionalInfo: "",
    paymentMethod: "mobile_money",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
  
    try {
      const orderData = {
        customer: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          address: formData.address,
          city: formData.city,
          additionalInfo: formData.additionalInfo,
        },
        payment: {
          method: formData.paymentMethod,
        },
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
          color: item.color,
          printNumber: item.printNumber,
        })),
        totalAmount: totalPrice,
      };
  
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      const data = await response.json();
  
      if (!data.success) {
        throw new Error(data.message || 'Une erreur est survenue');
      }
      
      setSuccess(true);
      clearCart();
      
      // Rediriger vers une page de confirmation après quelques secondes
      setTimeout(() => {
        router.push("/order-confirmation");
      }, 3000);
      
    } catch (err) {
      console.error("Erreur lors du traitement de la commande:", err);
      setError("Une erreur est survenue lors du traitement de votre commande. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="max-w-6xl mx-auto mt-24 my-12 px-4">
      <h1 className="text-3xl font-bold text-violet-500 mb-8 text-center">Finaliser votre commande</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">Votre panier est vide</p>
          <Button color="secondary" onClick={() => router.push("/shop")}>
            Continuer vos achats
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de commande */}
          <div className="lg:col-span-2">
            <div className="bg-violet-800 bg-opacity-20 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-200 mb-6">Informations de livraison</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-violet-900 bg-opacity-30 border border-violet-400 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-violet-900 bg-opacity-30 border border-violet-400 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-violet-900 bg-opacity-30 border border-violet-400 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                    Adresse de livraison *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-violet-900 bg-opacity-30 border border-violet-400 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
                    Ville *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-violet-900 bg-opacity-30 border border-violet-400 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-1">
                    Informations complémentaires
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 bg-violet-900 bg-opacity-30 border border-violet-400 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-200 mb-4">Méthode de paiement</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-4 border border-violet-400 rounded-lg cursor-pointer hover:bg-violet-800 hover:bg-opacity-30 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="mobile_money"
                        checked={formData.paymentMethod === "mobile_money"}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-violet-500"
                      />
                      <span className="text-gray-200">Mobile Money (Orange, MTN, Moov, Wave)</span>
                    </label>
                    
                    {/* <label className="flex items-center space-x-3 p-4 border border-violet-400 rounded-lg cursor-pointer hover:bg-violet-800 hover:bg-opacity-30 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-violet-500"
                      />
                      <span className="text-gray-200">Carte bancaire</span>
                    </label> */}
                    
                    <label className="flex items-center space-x-3 p-4 border border-violet-400 rounded-lg cursor-pointer hover:bg-violet-800 hover:bg-opacity-30 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash_on_delivery"
                        checked={formData.paymentMethod === "cash_on_delivery"}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-violet-500"
                      />
                      <span className="text-gray-200">Paiement à la livraison</span>
                    </label>
                  </div>
                </div>
                
                {error && (
                  <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-200">
                    {error}
                  </div>
                )}
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    color="primary" 
                    disabled={isSubmitting}
                    className="px-8 py-3 text-lg"
                  >
                    {isSubmitting ? "Traitement en cours..." : "Confirmer la commande"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Résumé de la commande */}
          <div>
            <div className="bg-violet-800 bg-opacity-20 p-6 rounded-xl sticky top-24">
              <h2 className="text-xl font-semibold text-gray-200 mb-6">Résumé de la commande</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-300 text-sm">{item.name}</h3>
                      <div className="text-xs text-gray-400 mt-1">
                        <span>Taille: {item.size}</span>
                        <span className="mx-1">•</span>
                        <span>Couleur: {item.color}</span>
                        {item.printNumber && (
                          <>
                            <span className="mx-1">•</span>
                            <span>Print: {item.printNumber}</span>
                          </>
                        )}
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-400 text-sm">{item.quantity} x {formatPrice(item.price)} FCFA</span>
                        <span className="font-medium text-gray-300 text-sm">
                          {formatPrice(item.price * item.quantity)} FCFA
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-violet-400 pt-4 space-y-2">
                <div className="flex justify-between items-center">
                <span className="text-gray-400">Sous-total</span>
                  <span className="font-medium text-gray-300">{formatPrice(totalPrice)} FCFA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Livraison</span>
                  <span className="font-medium text-gray-300">Calculé à la livraison</span>
                </div>
                <div className="flex justify-between items-center text-lg font-semibold mt-4">
                  <span className="text-gray-200">Total</span>
                  <span className="text-gray-200">{formatPrice(totalPrice)} FCFA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
