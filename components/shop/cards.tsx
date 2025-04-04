"use client";

import clsx from "clsx";
import Link from "next/link";
import { products } from "@/components/data/products";
import {Card as CardUi  , CardFooter, Image, Button } from "@heroui/react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

// const products: Product[] = [
//   {
//     id: "1",
//     name: "Acme white shirt",
//     price: 7499,
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500",
//   },
//   {
//     id: "2",
//     name: "Acme Circles T-Shirt",
//     price: 7499,
//     image:
//       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=500",
//   },
//   {
//     id: "3",
//     name: "Acme Drawstring Bag",
//     price: 7499,
//     image:
//       "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=500",
//   },
//   {
//     id: "4",
//     name: "Acme Keyboard",
//     price: 7499,
//     image:
//       "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500",
//   },
//   {
//     id: "5",
//     name: "Acme Prism T-Shirt",
//     price: 7499,
//     image:
//       "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=500",
//   },
//   {
//     id: "6",
//     name: "Acme T-Shirt",
//     price: 7499,
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500",
//   },
// ];

export const Card = () => {
  // const id = params.id as string;
  //   const product = products.find((p) => p.id === id);

  return (
    <>
      {/* Products Grid */}
      {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 flex rounded-full backdrop-blur-2xl justify-between items-center">
              <h3 className="text-sm font-medium text-gray-900">
                {product.name}
              </h3>
              <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-500 text-white font-medium">
                {product.price.toFixed(2)} FCFA
              </span>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-16">
        {products.map((product) => (
          <div
            key={product.id}
            className={clsx(
              "group relative border-neutral-200 dark:border-neutral-800 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg  bg-white hover:border-violet-600 border-2 dark:bg-black"
            )}
          >
            <img
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="relative h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-0 right-0 mx-4">
              <div className="flex items-center justify-between rounded-full border bg-white/70 py-1 pr-1 pl-2 text-xs font-semibold text-black backdrop-blur-sm dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                <h3 className="line-clamp-1">{product.name}</h3>
                <p className="flex items-center text-white bg-violet-600 px-1 py-2 rounded-full">
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "XOF",
                    currencyDisplay: "narrowSymbol",
                  }).format(product.price)}
                  
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-16">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div
              className={clsx(
                "group relative border-neutral-200 dark:border-neutral-800 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg  bg-white hover:border-violet-600 border-2 dark:bg-black"
              )}
            >
              <img
                src={product.image[0]}
                alt={product.name}
                width={500}
                height={500}
                className="relative h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/30 to-transparent z-20"></div>
              <div className="absolute bottom-4 left-0 right-0 mx-4 z-30">
                <div className="flex items-center justify-between rounded-full border bg-white/70 py-1 pr-1 pl-2 text-xs font-semibold text-black backdrop-blur-sm dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="line-clamp-1">{product.name}</h3>
                  <p className="flex items-center text-white bg-violet-600 px-1 py-2 rounded-full">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "XOF",
                      currencyDisplay: "narrowSymbol",
                    }).format(product.price)}
                    {/* <span className="ml-1">FCFA</span> */}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {products.map((product) => (
          <CardUi key={product.id} isFooterBlurred className="border-none" radius="lg">
            <Image
              src={product.image[0]}
              alt={product.name}
              width={400}
              height={400}
              className="relative h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-black">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter>
          </CardUi>
        ))}
      </div>
    </>
  );
};
