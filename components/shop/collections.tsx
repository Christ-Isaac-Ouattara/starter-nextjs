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
      <div className="flex flex-col justify-between items-center mb-4 mx-16">
        <h2 className="text-2xl text-white font-bold">Nos Collections</h2>
        {selectedCollection && (
          <Button
            onPress={() => onSelectCollection(null)}
            className="text-sm mt-4 text-violet-600 bg-transparent"
            variant="light"
          >
            Afficher toutes les collections
          </Button>
        )}
      </div>
      <div className={`mt-8 sticky top-14 z-50 backdrop-blur-3xl `}>
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
                      <p className="md:text-tiny text-xs  font-bold text-black">
                        {collection.name}
                      </p>
                      <p className="md:text-tiny text-xs text-black/60">
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
    </>
  );
};

export { collections };
