"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

export default function OrderConfirmation() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto my-16 px-4">
      <div className="bg-violet-800 bg-opacity-20 p-8 rounded-xl text-center">
        <div className="w-20 h-20 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-violet-400 mb-4">Commande confirmée!</h1>
        
        <p className="text-gray-300 mb-6">
          Merci pour votre commande. Nous avons bien reçu votre commande et nous préparons votre colis.
          Un email de confirmation a été envoyé avec tous les détails de votre commande.
        </p>
        
        <div className="bg-violet-900 bg-opacity-30 p-6 rounded-lg mb-8 max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">Que se passe-t-il ensuite?</h2>
          <ul className="text-left text-gray-300 space-y-2">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>Nous préparons votre commande</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>Vous recevrez un email lorsque votre commande sera expédiée</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>Votre colis sera livré à l&apos;adresse indiquée</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            color="primary" 
            variant="light"
            onPress={() => router.push("/shop")}
            className="px-6 py-2"
          >
            Continuer vos achats
          </Button>
          <Button 
            color="primary"
            onPress={() => router.push("/")}
            className="px-6 py-2"
          >
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </div>
  );
}
