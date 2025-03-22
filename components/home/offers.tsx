import React from 'react';
import { ArrowRight } from 'lucide-react';
import {CircleArrowUpRightIcon} from "hugeicons-react";

export const Offers: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-medium text-gray-200 mb-4">Nos offres</h3>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="T-shirts collection" 
                className="w-[70%] h-40 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className='font-normal'>
            <p className="text-2xl text-gray-200 font-extralight mb-2">Envie d&apos;un SNOB personnaliser?</p>
            <p className="mb-6 text-gray-200 font-extralight text-4xl">
              Commandez votre style dès maintenant!
            </p>
            <button className="inline-flex items-center bg-violet-600 text-gray-800 px-4 py-2 rounded-full hover:bg-violet-400 transition-colors">
              <span className="mr-2">Passer commande</span>
              <CircleArrowUpRightIcon size={22} className='stroke-2' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

