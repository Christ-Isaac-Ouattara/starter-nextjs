"use client";

import React, { useEffect, useState } from "react";
import { Card, CardFooter, Image, Button } from "@heroui/react";
import { collections } from "@/components/data/products";

interface CollectionsProps {
  onSelectCollection: (collectionId: string | null) => void;
  selectedCollection: string | null;
}


export const Collections: React.FC<CollectionsProps> = ({
  onSelectCollection,
  selectedCollection,
}) => {
  const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-between items-center ">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text mb-4">
            Nos Collections
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center text-base mb-4">
            Découvrez nos collections de vêtements uniques, conçus pour exprimer votre style avec élégance et originalité.
          </p>
          {selectedCollection && (
            <Button
              onPress={() => onSelectCollection(null)}
              className="text-sm text-violet-400 bg-violet-900/30 hover:bg-violet-900/50"
              variant="flat"
              radius="full"
              size="sm"
            >
              Afficher toutes les collections
            </Button>
          )}
        </div>
      </div>
      <div className={` sticky md:relative top-14 md:top-0 z-50 md:z-10 backdrop-blur-3xl `}>
        <div className="">
          <div className="flex justify-center overflow-x-auto hide-scrollbar md:mx-16 mx-4 space-x-4">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                isFooterBlurred
                className={`border-none w-28 md:w-40 flex-shrink-0 m-2 ${
                  selectedCollection === collection.id
                    ? "ring-2 ring-violet-500"
                    : ""
                }`}
                radius="lg"
                isPressable
                onPress={() => onSelectCollection(collection.id)}
                //style={{ width: '200px' }} // Taille fixe réduite
              >
                <div className={`relative h-24 md:h-24 w-full`}>
                  {" "}
                  {/* Hauteur réduite */}
                  <Image
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="object-cover w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                  <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <div>
                      <p className="md:text-tiny text-xs  font-bold text-white">
                        {collection.name}
                      </p>
                      <p className="md:text-tiny text-xs text-white/50">
                        {collection.itemCount} articles
                      </p>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
      
    </>
  );
};

export { collections };
