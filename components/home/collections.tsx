import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collections } from "../data/products";
import { CircleArrowUpRightIcon } from "hugeicons-react";

const Collections = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-violet-500 md:text-4xl font-bold mb-4">
            Nos Collections
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Explorez nos collections soigneusement sélectionnées pour tous les
            styles et occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
          {collections.map((collection) => (
            <Link href={`/shop`} key={collection.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-72 w-full">
                  {/* Remplacez par vos propres images */}
                  <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                    {collection.imageUrl ? (
                      <Image
                        src={collection.imageUrl}
                        alt={collection.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-gray-400">
                        Image non disponible
                      </span>
                    )}
                  </div>
                  <div className="p-2 rounded-xl absolute bottom-1 m-2 bg-white/35 backdrop-blur-lg">
                    <h3 className="font-bold text-lg text-violet-900">
                      {collection.name}
                    </h3>
                    <p className="text-white font-extralight mb-1 text-xs">
                      {collection.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-800">
                        {collection.itemCount} articles
                      </span>
                      {/* <span className="text-sm font-medium text-indigo-600">
                        Voir plus
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-6 mb-2">
          <Link
            href={"/shop"}
            className=" inline-flex items-center bg-violet-600 text-gray-800 px-4 py-2 rounded-full hover:bg-violet-400 transition-colors"
          >
            <span className="mr-2">Voir toutes les collections</span>
            <CircleArrowUpRightIcon size={22} className="stroke-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;
