"use client";

import { Hero } from "@/components/home/hero";
import { RecentArrivals } from "./recentArrivals";
import { Offers } from "./offers";
import { Testimonials } from "./testimonial";
import { Footer } from "./footer";
import Collections from "./collections";

export default function Content() {
  return (
    <>
      <Hero />
      <div className="m-4 p-4 rounded-xl bg-slate-700">
        <Offers />
        <RecentArrivals />
        <Collections />
        {/* <Testimonials /> */}
      </div>
      <Footer />
    </>
  );
}
