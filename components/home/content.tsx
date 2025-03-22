"use client";

import { Hero } from "@/components/home/hero";
import { RecentArrivals } from "./recentArrivals";
import { Offers } from "./offers";
import { Testimonials } from "./testimonial";
import { Footer } from "./footer";

export default function Content() {
  return (
    <>
      <Hero />
      <div className="m-4 rounded-xl ">
        <Offers />
        <RecentArrivals />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
