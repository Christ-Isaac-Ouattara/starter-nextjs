"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Initial animations
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      0
    )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        0.3
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        0.5
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        1
      );

    // Background parallax effect
    gsap.to(sectionRef.current, {
      backgroundPositionY: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-background to-accent/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10 flex flex-col items-center text-center">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl"
        >
          We create
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-4 px-2">
            memorable
          </span>
          digital experiences
        </h1>
        
        <p
          ref={descriptionRef}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          A digital agency specialized in crafting exceptional websites, 
          applications, and brand experiences for forward-thinking companies.
        </p>
        
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col md:flex-row gap-4 items-center"
        >
          <Button size="lg" className="rounded-full text-md px-8">
            Explore our work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full text-md px-8">
            Get in touch
          </Button>
        </div>
      </div>
      
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-sm font-medium mb-2 text-muted-foreground">Scroll to explore</p>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-chart-1/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-chart-2/10 rounded-full blur-3xl"></div>
    </section>
  );
}