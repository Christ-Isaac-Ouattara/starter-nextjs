"use client";

import { Hero } from "@/components/home/hero";
import { RecentArrivals } from "./recentArrivals";
import { Offers } from "./offers";
import { Footer } from "./footer";
import Collections from "./collections";

export default function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        <Offers />
        <RecentArrivals />
        <Collections />
        {/* <Testimonials /> */}
      </div>
      <Footer />
    </div>
  );
}
