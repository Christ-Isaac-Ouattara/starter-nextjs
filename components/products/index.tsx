"use client";

import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ArrowRight02Icon, ArrowLeft02Icon } from "hugeicons-react";
import { products } from "@/components/data/products";
import { useState } from "react";
import Link from "next/link";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-4xl">
        Aucun produit trouvé
      </div>
    );
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const colors = ["Black", "White", "Blue"];
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="mt-16 ">
      {/* Header */}
      <div className=" ">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/shop"
            className="flex items-center gap-2 text-gray-200 hover:text-gray-600"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour aux articles</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={productImages[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <div className="absolute grid grid-cols-2 gap-8 top-3/4 md:left-[40%] left-[35%] -translate-y-1/2 backdrop-blur-xl rounded-full px-4 py-2">
                <div className="absolute rounded-full inset-0 bg-gradient-to-t from-[#1a1a1a]/20 to-transparent"></div>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev > 0 ? prev - 1 : productImages.length - 1
                    )
                  }
                  className="z-20 p-1 hover:scale-125 transition-all duration-300"
                >
                  <ArrowLeft02Icon className="w-6 h-6 text-white hover:text-gray-700" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev < productImages.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="z-20 p-1 hover:scale-125 transition-all duration-300"
                >
                  <ArrowRight02Icon className="w-6 h-6 text-white hover:text-gray-700" />
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-4 mt-4">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index
                      ? "border-violet-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={productImages[index]}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-200">{product.name}</h1>
            <div className="mt-4">
              <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-violet-500 text-white font-medium ">
                {product.price} FCFA
              </span>
            </div>

            {/* Color Selection */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-200">COLOR</h3>
              <div className="flex gap-3 mt-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedColor === color
                        ? "border-violet-500 bg-violet-50 text-violet-600"
                        : "border-gray-200 text-white hover:border-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-200">SIZE</h3>
              <div className="flex gap-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-1 px-3 rounded-full border ${
                      selectedSize === size
                        ? "border-violet-500 bg-violet-50 text-violet-600"
                        : "border-gray-200 text-white hover:border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="mt-8">
              <p className="text-gray-200">
                50% combed ringspun cotton/40% polyester jersey tee.
              </p>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-8 w-full bg-violet-500 text-white py-4 px-8 rounded-xl font-medium hover:bg-violet-600 transition-colors">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
