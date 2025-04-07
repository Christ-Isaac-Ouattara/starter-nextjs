"use client";

import Link from "next/link";
import { products } from "@/components/data/products";
import { Card as CardUi, CardFooter, Image, Button } from "@heroui/react";

interface CardProps {
  selectedCollection: string | null;
}

export const Card: React.FC<CardProps> = ({ selectedCollection }) => {
  // Filtrer les produits en fonction de la collection sélectionnée
  const filteredProducts = selectedCollection
    ? products.filter(product => product.collection === selectedCollection)
    : products;

  return (
    <>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-16">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <CardUi key={product.id} isFooterBlurred className="border-none" radius="lg">
              <Link href={`/products/${product.id}`} className="">
                <Image
                  src={product.image[0]}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="relative h-full w-full object-cover hover:scale-105 transition-all duration-300 ease-in-out group-hover:scale-105"
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-black">{product.name}</p>
                  <Button
                    className="text-tiny text-white bg-violet-500"
                    color="primary"
                    radius="lg"
                    size="sm"
                    variant="flat"
                  >
                    {product.price}{" "}FCFA
                  </Button>
                </CardFooter>
              </Link>
            </CardUi>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-gray-600">Aucun produit trouvé dans cette collection.</p>
          </div>
        )}
      </div>
    </>
  );
};
