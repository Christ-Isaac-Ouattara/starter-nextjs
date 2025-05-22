"use client";

import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  fromVars?: gsap.TweenVars;
  toVars?: gsap.TweenVars;
  scrollTrigger?: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    toggleActions?: string;
    markers?: boolean;
  };
  delay?: number;
}

export function useGsapAnimation<T extends HTMLElement>(
  options: AnimationOptions = {}
): RefObject<T> {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      fromVars = { opacity: 0, y: 30 },
      toVars = { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      scrollTrigger = {
        trigger: element,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
      delay = 0,
    } = options;

    const animation = gsap.fromTo(
      element,
      fromVars,
      {
        ...toVars,
        delay,
        scrollTrigger: {
          ...scrollTrigger,
          trigger: element,
        },
      }
    );

    return () => {
      animation.kill();
      if (ScrollTrigger.getById(element.id)) {
        ScrollTrigger.getById(element.id).kill();
      }
    };
  }, [options]);

  return elementRef;
}

// For animating multiple elements with staggered timing
export function useGsapStaggerAnimation<T extends HTMLElement>(
  options: AnimationOptions & { stagger?: number } = {}
): RefObject<T> {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !container.children.length) return;

    const {
      fromVars = { opacity: 0, y: 20 },
      toVars = { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      scrollTrigger = {
        trigger: container,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
      stagger = 0.1,
      delay = 0,
    } = options;

    const animation = gsap.fromTo(
      container.children,
      fromVars,
      {
        ...toVars,
        stagger,
        delay,
        scrollTrigger: {
          ...scrollTrigger,
          trigger: container,
        },
      }
    );

    return () => {
      animation.kill();
      if (ScrollTrigger.getById(container.id)) {
        ScrollTrigger.getById(container.id).kill();
      }
    };
  }, [options]);

  return containerRef;
}