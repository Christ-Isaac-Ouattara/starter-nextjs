"use client";

import React, { useState } from "react";
import { Footer } from "../footer/footer";
import { Accordion, AccordionItem } from "@heroui/react";
import { Facebook01Icon, InstagramIcon, TwitterIcon } from "hugeicons-react";
import { CheckCircleIcon, Loader } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler un envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen mt-16  py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-200 mb-2">
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Nous sommes là pour répondre à toutes vos questions et vous aider
              à trouver les articles parfaits pour votre style.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
            <div className="bg-violet-600 text-white p-8 md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Informations</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                  <p className="opacity-80">123 Avenue de la Paix</p>
                  <p className="opacity-80">
                    75001 Abidjan, Côte d&apos;Ivoire
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                  <p className="opacity-80">+225 01 02 03 04 05</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="opacity-80">contact@snob.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Heures d&apos;ouverture
                  </h3>
                  <p className="opacity-80">Lun - Ven: 9h - 18h</p>
                  <p className="opacity-80">Sam: 10h - 16h</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-3">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Facebook01Icon  />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <InstagramIcon />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Envoyez-nous un message
              </h2>

              {submitSuccess ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      
                      <CheckCircleIcon className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        Votre message a été envoyé avec succès. Nous vous
                        répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="question">Question générale</option>
                      <option value="order">Commande</option>
                      <option value="return">Retour/Échange</option>
                      <option value="feedback">Commentaires</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors duration-200"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          
                          <Loader className="h-5 w-5 text-white" />
                          Envoi en cours...
                        </span>
                      ) : (
                        "Envoyer le message"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Notre emplacement
            </h2>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-80">
              {/* Remplacez l'URL par votre propre intégration Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254236.65415794295!2d-4.1444834556753785!3d5.348428099212515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan!5e0!3m2!1sfr!2sci!4v1744008018570!5m2!1sfr!2sci"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Carte de notre emplacement"
              ></iframe>
            </div>
          </div>

          <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Questions fréquentes
              </h2>
              <div className="space-y-6 text-black">
                <Accordion variant="splitted" className="text-black">
                  <AccordionItem
                    key="1"
                    aria-label="Quels sont les délais de livraison ?"
                    title="Quels sont les délais de livraison ?"
                  >
                    Nos délais de livraison standard sont de 2 à 3 jours
                    ouvrables. Pour les commandes express, dans la journée,
                    (frais supplémentaires).
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Comment puis-je retourner un article ?"
                    title="Comment puis-je retourner un article ?"
                  >
                    Vous disposez de 24 heures pour retourner un article.
                    L&apos;article devra être rendu dans le même etat qu&apos;à
                    la livraison.
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Où sont vos magasins ?"
                    title="Où sont vos magasins ?"
                  >
                    Nous sommes pour le moment une boutique en ligne et nous ne
                    possédons pas de magasins physiques.
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Quels sont les moyens de paiement acceptés ?"
                    title="Quels sont les moyens de paiement acceptés ?"
                  >
                    Nous acceptons tous les moyens de paiements mobile money,
                    Orange, MTN, Moov, Wave.
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
