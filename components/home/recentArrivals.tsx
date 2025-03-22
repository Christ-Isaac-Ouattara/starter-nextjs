import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

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
      id: '1',
      name: 'Black Graphic T-shirt',
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 7499,
      printNumber: '#455'
    },
    {
      id: '2',
      name: 'Black Graphic T-shirt',
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 7499,
      printNumber: '#457'
    },
    {
      id: '3',
      name: 'White Graphic T-shirt',
      image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 7499,
      printNumber: '#443'
    },
    {
      id: '4',
      name: 'Black Graphic T-shirt',
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      price: 7499,
      printNumber: '#468'
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 rounded-xl bg-gray-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-medium text-gray-200">Arrivées récentes
          </h3>
          <div className="flex items-center">
            <p className="text-sm text-gray-200 mr-4">Jettez un coup d&apos;oeil à nos différentes collections</p>
            <button className="inline-flex items-center bg-violet-200 text-gray-800 px-4 py-2 rounded-full hover:bg-violet-300 transition-colors">
              <span className="mr-2">Voir la boutique</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
            key={product.id} 
            className={`group ${index === 1 || index === 3 ? 'lg:mt-16' : ''}`}
            >
              <div className="relative rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full aspect-[3/4] object-cover"
                />
                <button className="absolute bottom-4 right-4 bg-gray-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingCart size={18} />
                </button>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-200">Graphic print {product.printNumber}</p>
                  <button className="bg-gray-900 text-white p-1 rounded-full">
                    <ShoppingCart size={14} />
                  </button>
                </div>
                <p className="font-medium">{product.price}{" "}FCFA</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArrivals;