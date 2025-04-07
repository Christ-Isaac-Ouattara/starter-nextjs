export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string[];
  description: string;
  collection: string;
}

export const categories: Category[] = [
  { id: 'bags', name: 'Bags', icon: '👜' },
  { id: 'wallets', name: 'Wallets', icon: '👛' },
  { id: 'footwear', name: 'Footwear', icon: '👟' },
  { id: 'clothes', name: 'Clothes', icon: '👕' },
  { id: 'watches', name: 'Watches', icon: '⌚' },
];

export const filters = [
  { id: 'ratings', name: 'Ratings' },
  { id: 'size', name: 'Size' },
  { id: 'color', name: 'Color' },
  { id: 'price', name: 'Price' },
];

export const collections = [
  { id: 'Essentials', name: 'Essentials', description:'Les basiques intemporels à avoir dans votre garde-robe', imageUrl: '/images/collection.jpg',itemCount: 18 },
  { id: 'Summer2024', name: 'Été 2024', description:'Découvrez nos pièces légères et élégantes pour l\'été',imageUrl: '/images/collection.jpg',itemCount: 18 },
  { id: 'Luxury', name: 'Luxe', description:'Des articles exclusifs pour les occasions spéciales',imageUrl: '/images/collection.jpg',itemCount: 18 },
  { id: 'NewArrivals', name: 'Nouveauté', description:'Les dernières tendances à ne pas manquer',imageUrl: '/images/collection.jpg',itemCount: 18 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'T-shirt snob',
    price: 7499,
    collection: 'Essentials',
    image: [
      '/images/s-bl.png',
      '/images/s-be.png',
      '/images/complet-t-shirt-gris.png',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  {
    id: '2',
    name: 'T-Shirt snob délaver',
    price: 7499,
    collection: 'Essentials',
    image: [
      '/images/s-nrc.png',
      '/images/s-nrc.png',
      '/images/s-nrc.png',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  {
    id: '3',
    name: 'Pull snob',
    price: 9999,
    collection: 'Essentials',
    image: [
      '/images/hoodie-gris.png',
      '/images/hoodie-noire.png',
      '/images/complet-hoodie-noire.png',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  {
    id: '4',
    name: 'Crop top snob',
    price: 3999,
    collection: 'Essentials',
    image: [
      '/images/crop-top-blanc-porté-2.jpg',
      '/images/crop-top-blanc-porté.jpg',
      '/images/crop.jpg',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  
];