"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";
import { Footer } from "../footer/footer";

const AboutContent = () => {
  // Animation pour les sections qui entrent dans la vue
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Équipe (fictive)
  const team = [
    {
      name: "Alex Kouamé",
      role: "Fondateur & Directeur Créatif",
      image: "/images/team-1.jpg", // Remplacer par des images réelles
      bio: "Passionné de mode depuis son plus jeune âge, Alex a fondé SNOB avec la vision de créer des vêtements qui allient élégance et audace.",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Marie Diallo",
      role: "Directrice Artistique",
      image: "/images/team-2.jpg",
      bio: "Avec son œil aiguisé pour les tendances et son talent pour le design, Marie donne vie à l'identité visuelle unique de SNOB.",
      social: {
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "David Koné",
      role: "Responsable Production",
      image: "/images/team-3.jpg",
      bio: "David veille à ce que chaque pièce SNOB respecte nos standards élevés de qualité et notre engagement envers une production responsable.",
      social: {
        instagram: "#",
        facebook: "#",
      },
    },
  ];

  // Valeurs de la marque
  const values = [
    {
      title: "Qualité",
      description: "Nous ne faisons aucun compromis sur la qualité de nos matériaux et de notre fabrication.",
      icon: "✨",
    },
    {
      title: "Originalité",
      description: "Chaque design est unique et reflète notre vision audacieuse de la mode contemporaine.",
      icon: "🎨",
    },
    {
      title: "Durabilité",
      description: "Nous nous engageons à réduire notre impact environnemental à chaque étape de notre processus.",
      icon: "🌱",
    },
    {
      title: "Communauté",
      description: "Nous valorisons la connexion avec notre communauté et soutenons les talents locaux.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">
              Notre Histoire
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Découvrez l&apos;histoire de SNOB, notre vision et les personnes qui donnent vie à notre marque.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="aspect-[21/9] w-full">
              <Image
                src="/images/complet-t-shirt-gris.png" // Remplacer par une image de l'équipe ou des locaux
                alt="L'équipe SNOB"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-8 md:p-12 w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Une vision audacieuse de la mode
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  Fondée en 2022 à Abidjan, SNOB est née d&apos;une passion pour la mode et d&apos;une vision audacieuse : créer des vêtements qui permettent à chacun d&apos;exprimer sa personnalité avec élégance et originalité.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                De l&apos;idée à la réalité
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Tout a commencé avec une idée simple : créer des vêtements qui se démarquent par leur qualité et leur design unique. Notre fondateur, passionné de mode depuis son plus jeune âge, a rassemblé une équipe de talents partageant la même vision.
                </p>
                <p>
                  Après des mois de recherche et de développement, la première collection SNOB a vu le jour, captivant immédiatement l&apos;attention par son approche novatrice du style urbain contemporain.
                </p>
                <p>
                  Aujourd&apos;hui, SNOB est devenue une marque reconnue pour son audace créative et son engagement envers l&apos;excellence, habillant ceux qui osent se démarquer avec subtilité et élégance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/model-shirt.png" // Remplacer par une image appropriée
                  alt="L'atelier SNOB"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-violet-600/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Nos Valeurs
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ces principes guident chacune de nos décisions et façonnent l&apos;identité de notre marque.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              L&apos;Équipe SNOB
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Rencontrez les personnes passionnées qui donnent vie à notre vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden"
              >
                <div className="aspect-[4/5] relative">
                  <div className="absolute inset-0 bg-violet-600/20 mix-blend-overlay"></div>
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    {/* Remplacer par des images réelles */}
                    <span className="text-6xl text-gray-500">👤</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-violet-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-gray-400 hover:text-violet-400 transition-colors">
                        <Instagram size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-violet-400 transition-colors">
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a href={member.social.facebook} className="text-gray-400 hover:text-violet-400 transition-colors">
                        <Facebook size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rejoignez-nous */}
      <section className="py-16 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Rejoignez la communauté SNOB
                </h2>
                <p className="text-gray-300 mb-6">
                  Suivez-nous sur les réseaux sociaux pour découvrir nos dernières collections, nos événements et les coulisses de notre marque.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Instagram size={24} className="text-white" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Facebook size={24} className="text-white" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Twitter size={24} className="text-white" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Inscrivez-vous à notre newsletter
                </h3>
                <p className="text-gray-300 mb-4">
                  Recevez en avant-première nos nouvelles collections et offres exclusives.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    S&apos;inscrire
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur SNOB et nos produits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Comment sont fabriqués vos vêtements ?",
                answer: "Nos vêtements sont fabriqués localement à Abidjan, en collaboration avec des artisans qualifiés. Nous utilisons des matériaux de haute qualité et veillons à ce que chaque étape de production respecte nos standards d'excellence."
              },
              {
                question: "Quelle est votre politique de retour ?",
                answer: "Nous offrons une politique de retour de 30 jours pour tous nos produits. Si vous n'êtes pas satisfait de votre achat, vous pouvez nous retourner l'article dans son état d'origine pour un échange ou un remboursement."
              },
              {
                question: "Proposez-vous des collaborations avec des artistes ?",
                answer: "Absolument ! Nous sommes toujours ouverts aux collaborations avec des artistes et créateurs qui partagent notre vision. Si vous êtes intéressé, n'hésitez pas à nous contacter via notre formulaire en ligne."
              },
              {
                question: "Livrez-vous à l'international ?",
                answer: "Oui, nous livrons dans plusieurs pays. Les frais de livraison et les délais varient selon la destination. Vous pouvez consulter les détails lors du processus de commande."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-6">
              Vous avez d&apos;autres questions ? N&apos;hésitez pas à nous contacter.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-medium rounded-full transition-all duration-300"
            >
              Contactez-nous
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Notre Engagement */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Notre Engagement
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Chez SNOB, nous croyons que la mode peut être à la fois belle et responsable. C&apos;est pourquoi nous nous engageons à réduire notre impact environnemental à chaque étape de notre processus de création.
                </p>
                <p>
                  Nous travaillons avec des fournisseurs locaux autant que possible, utilisons des matériaux durables et veillons à ce que nos conditions de travail soient équitables et sécurisées.
                </p>
                <p>
                  Notre objectif est de créer des vêtements qui non seulement vous font vous sentir bien, mais qui sont aussi bons pour notre planète et nos communautés.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 md:order-2 relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/snob-personnalisé.jpg" // Remplacer par une image appropriée
                  alt="Notre engagement"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-fuchsia-600/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="text-6xl text-violet-500 mb-6">&quot;</div>
            <blockquote className="text-2xl md:text-3xl font-light text-white max-w-3xl mx-auto mb-8">
              Notre mission est de créer des vêtements qui permettent à chacun d&apos;exprimer sa personnalité avec élégance et audace. Chez SNOB, nous ne suivons pas les tendances, nous les créons.
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 flex items-center justify-center">
                <span className="text-xl text-gray-500">👤</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-white">Alex Kouamé</p>
                <p className="text-gray-400">Fondateur & Directeur Créatif</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutContent;

