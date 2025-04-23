import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const statsRef = useRef(null);
  const decorationRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animation initiale
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
      .fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=0.5"
      )
      .fromTo(
        titleRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
        "-=1"
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        statsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        decorationRef.current.children,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.8"
      );

    // Animation au scroll
    gsap.to(imageRef.current, {
      scale: 1.1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Effet parallaxe pour le texte
    gsap.to(titleRef.current, {
      y: -80,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Nettoyage des ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-gray-900">
      {/* Image de fond avec overlay */}
      <div ref={imageRef} className="absolute inset-0 z-10">
        <img
          src="/images/complet-t-shirt-gris.png"
          alt="SNOB Collection"
          className="w-full h-full object-cover  md:object-right"
        />
      </div>

      {/* Overlay dégradé */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-20"
      ></div>

      {/* Éléments décoratifs */}
      <div ref={decorationRef} className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-violet-500/20 backdrop-blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full border-2 border-violet-500/10 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-violet-600/10 backdrop-blur-sm"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative md:pt-16 z-30 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texte et CTA */}
          <div className="text-white">
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-2 leading-tight">
              <span className="block bg-gradient-to-r from-white to-violet-300 text-transparent bg-clip-text">SNOB.</span>
              <span className="block text-violet-400">Élégance</span>
              <span className="block">Redéfinie</span>
            </h1>

            <p ref={subtitleRef} className="text-gray-300 text-base md:text-xl mb-2 max-w-lg">
              Des vêtements qui racontent votre histoire. Chaque couture, chaque détail est pensé pour exprimer votre individualité avec une élégance subtile et audacieuse.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-6">
              <Link 
                href="/shop"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
              >
                <span className="relative z-10 flex items-center">
                  Découvrir la collection
                  <ShoppingBag className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/10 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              </Link>
              
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-transparent border border-violet-500/30 hover:border-violet-500 rounded-full text-white font-medium transition-colors duration-300"
              >
                Notre histoire
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Statistiques */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Qualité Premium</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-1">+1K</div>
                <div className="text-sm text-gray-400">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-1">4.9<span className="text-lg">/5</span></div>
                <div className="text-sm text-gray-400 flex items-center justify-center">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 mr-1" />
                  Avis Clients
                </div>
              </div>
            </div>
          </div>

          {/* Espace réservé pour l'image (déjà en arrière-plan) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center">
        <span className="text-white/60 text-sm mb-2">Découvrez plus</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};
