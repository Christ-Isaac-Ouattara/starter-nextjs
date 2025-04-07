import React from "react";
import { ShoppingCart } from "lucide-react";
import { products } from "../data/products";
import Link from "next/link";

export const RecentArrivals: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 rounded-xl ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-violet-500 md:text-4xl font-bold mb-4">
            Nouvelles sorties
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Jettez un coup d&apos;oeil à notre nouvelle collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className={`group ${
                index === 1 || index === 3 ? "lg:mt-16" : ""
              }`}
            >
              <div className="relative rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-200">{product.name}</p>
                  <button className="bg-gray-900 text-white p-1 rounded-full">
                    <ShoppingCart size={14} />
                  </button>
                </div>
                <p className="font-medium text-violet-600">{product.price} FCFA</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArrivals;
