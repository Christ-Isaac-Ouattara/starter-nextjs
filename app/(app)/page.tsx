"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/sections/hero-section";

// Add a CSS class for the grid pattern
const addGridStyles = () => {
  const style = document.createElement("style");
  style.textContent = `
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: 
        linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
    }
  `;
  document.head.appendChild(style);
};

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    addGridStyles();

    // Smooth scrolling
    const smoothScroll = (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      }
    };

    // Set up click handlers for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
        if (href) {
          smoothScroll(href);
        }
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <HeroSection />
    </>
  );
}