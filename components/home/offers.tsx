import React from 'react';
import { ArrowRight } from 'lucide-react';
import {CircleArrowUpRightIcon} from "hugeicons-react";
import Link from 'next/link';

export const Offers: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-violet-500 md:text-4xl font-bold mb-4">
            Offres personnalisées
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Découvrez nos offres spéciales pour des vêtements personnalisés.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/snob-personnalisé.jpg"
                alt="T-shirts collection"
                className="md:w-[80%] w-full md:h-72 object-top object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="font-normal flex flex-col">
            <div>
              <p className="text-2xl text-gray-200 text-center md:text-justify font-extralight mb-2">
                Envie d&apos;un SNOB personnaliser? <br /> Commandez votre style
                dès maintenant!
              </p>
            </div>
            {/* <p className="mb-6 text-gray-200 font-extralight text-4xl">
              
            </p> */}
            <div className="flex justify-center md:justify-start  mt-4  ">
              <Link
                href={"/contact"}
                className="inline-flex items-center bg-violet-600 text-gray-800 px-4 py-2 rounded-full hover:bg-violet-400 transition-colors"
              >
                <span className="mr-2">Passer commande</span>
                <CircleArrowUpRightIcon size={22} className="stroke-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

