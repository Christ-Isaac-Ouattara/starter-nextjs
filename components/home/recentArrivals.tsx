import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  printNumber: string;
}

export const RecentArrivals: React.FC = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "Black Graphic T-shirt",
      image:
        "/images/complet-t-shirt-gris.png",
      price: 7499,
      printNumber: "#455",
    },
    {
      id: "2",
      name: "Black Graphic T-shirt",
      image:
        "/images/crop-top-blanc-porté.jpg",
      price: 7499,
      printNumber: "#457",
    },
    {
      id: "3",
      name: "White Graphic T-shirt",
      image:
        "/images/complet-hoodie-noire.png",
      price: 7499,
      printNumber: "#443",
    },
    {
      id: "4",
      name: "Black Graphic T-shirt",
      image:
        "/images/t-shirt-rose-porté.jpg",
      price: 7499,
      printNumber: "#468",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 rounded-xl ">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex justify-between items-center mb-8">
          <h3 className="text-4xl font-medium mb-4 md:mb-0 text-violet-400">
            Nouvelle collection
          </h3>
          <div className="md:flex items-center">
            <p className="text-sm text-gray-200 mr-4">
              Jettez un coup d&apos;oeil à notre nouvelle collection
            </p>
            <div className="md:block flex justify-end">
              <button className="inline-flex items-center bg-violet-200 text-gray-800 px-4 py-2 rounded-full hover:bg-violet-300 transition-colors">
                <span className="mr-2">Voir la boutique</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group ${
                index === 1 || index === 3 ? "lg:mt-16" : ""
              }`}
            >
              <div className="relative rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-200">
                    Graphic print {product.printNumber}
                  </p>
                  <button className="bg-gray-900 text-white p-1 rounded-full">
                    <ShoppingCart size={14} />
                  </button>
                </div>
                <p className="font-medium">{product.price} FCFA</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArrivals;
