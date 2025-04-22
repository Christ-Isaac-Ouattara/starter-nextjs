import ProductDetail from "@/components/products/products";

const products = () => {
  return <ProductDetail />;
};

export default products;

// Si vous utilisez le router Pages
// import ProductDetail from '@/components/products';

// export default ProductDetail;

// "use client";

// import { products } from "@/components/data/products";
// import ProductDetails from "@/components/products";

// export default function Page({ params }: { params: { id: string } }) {
//   const product = products.find(p => p.id === params.id);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return <ProductDetails product={product} />;
// }
