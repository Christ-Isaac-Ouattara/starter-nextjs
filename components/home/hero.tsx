import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ArrowUp, ArrowDown, Store } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const tagsRef = useRef(null);
  const navigationRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial animations
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=0.5"
      )
      .fromTo(
        titleRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1 },
        "-=1"
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        tagsRef.current.children,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        navigationRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=1"
      );

    // Scroll animation
    gsap.to(imageRef.current, {
      scale: 1.1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Parallax effect for text
    gsap.to(titleRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="relative  h-screen bg-slate-700 overflow-hidden flex items-center">
      <div ref={imageRef} className="absolute inset-0 z-10">
        <img
          src="/images/model-shirt.png"
          alt="Model wearing black t-shirt with print"
          className="md:w-3/5 w-full h-full object-cover"
        />
      </div>

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 to-transparent z-20"
      ></div>

      <div className="relative flex justify-end z-30 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="md:max-w-lg">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
          >
            <span className="block">SNOB.</span>
            <span className="block">Unique</span>
            <span className="block">Et Subtile</span>
          </h1>

          <button
            ref={buttonRef}
            className="bg-violet-600 flex justify-between text-gray-900 font-medium px-6 py-3 rounded-full hover:bg-violet-500 transition-colors mb-8"
          >
            <p>Visitez la Boutique</p>{" "}
            <Store className="p-1 ml-3 rounded-full bg-white " />
          </button>

          <p ref={textRef} className="text-gray-200 mb-8 max-w-md">
            Chaque article de qualité rayonne comme une étoile dans la nuit.
            Chaque couture porte en elle une noblesse unique. Les détails
            luxueux dansent avec subtilité
          </p>

          <div ref={tagsRef} className="flex flex-wrap gap-3">
            <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
              Qualité
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
              Audace
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
              Passion
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
              Elegance
            </button>
          </div>
        </div>
      </div>

      <div
        ref={navigationRef}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-30"
      >
        <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
          <ArrowUp size={20} className="text-gray-800" />
        </button>
        <div className="w-0.5 h-12 bg-white/30 mx-auto"></div>
        <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
          <ArrowDown size={20} className="text-gray-800" />
        </button>
      </div>
    </section>
  );
};
