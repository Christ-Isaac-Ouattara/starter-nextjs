import React from "react";
import { Metadata } from "next";
import AboutContent from "@/components/about/about";

export const metadata: Metadata = {
  title: "À propos de SNOB | Notre histoire et notre vision",
  description: "Découvrez l'histoire de SNOB, notre vision, nos valeurs et l'équipe qui donne vie à notre marque de vêtements unique et audacieuse.",
};

export default function AboutPage() {
  return <AboutContent />;
}
