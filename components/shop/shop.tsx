"use client";

import React, { useState } from "react";
import { FilterComponent } from "./filter";
import { Card } from "./cards";
import { Collections } from "./collections";
import { Footer } from "../footer/footer";

export const Shop = () => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  );

  const handleSelectCollection = (collectionId: string | null) => {
    setSelectedCollection(collectionId);
  };

  return (
    <div className="mt-24">
      {/* <FilterComponent /> */}
      <Collections
        onSelectCollection={handleSelectCollection}
        selectedCollection={selectedCollection}
      />
      <div className="mx-16">
        <h2 className="md:text-3xl text-white text-2xl font-bold text-center my-8">
          {selectedCollection
            ? `Collection ${selectedCollection}`
            : "Tous nos produits"}
        </h2>
      </div>
      <Card selectedCollection={selectedCollection} />
      <Footer />
    </div>
  );
};
