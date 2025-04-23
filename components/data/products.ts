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
  { id: 'firstEdition', name: '1ère Collection', description:'Les basiques intemporels à avoir dans votre garde-robe', imageUrl: '/images/collection1/t-shirts-porté-6.png',itemCount: 4 },
  { id: 'secondEdition', name: '2ème Collection', description:'Découvrez nos pièces élégantes pour toute occasions',imageUrl: '/images/collection2/collection-3.jpg',itemCount: 3 },
  // { id: 'Luxury', name: 'Luxe', description:'Des articles exclusifs pour les occasions spéciales',imageUrl: '/images/collection1/collection.jpg',itemCount: 18 },
  // { id: 'NewArrivals', name: 'Nouveauté', description:'Les dernières tendances à ne pas manquer',imageUrl: '/images/collection1/collection.jpg',itemCount: 18 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'T-shirt snob (prémière collection)',
    price: 7499,
    collection: 'firstEdition',
    image: [
      '/images/collection1/t-shirt-blanc.png',
      '/images/collection1/t-shirt-beige.png',
      '/images/collection1/t-shirt-rose.png',
      '/images/collection1/t-shirt-noire.png',
      '/images/collection1/t-shirt-noir-porté.jpg',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  {
    id: '2',
    name: 'T-Shirt snob délaver (prémière collection)',
    price: 7499,
    collection: 'firstEdition',
    image: [
      '/images/collection1/t-shirt-noir-delaver.png',
      '/images/collection1/t-shirt-delaver-porté-4.jpg',
      '/images/collection1/t-shirts-porté-5.jpg',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  {
    id: '3',
    name: 'Pull snob (prémière collection)',
    price: 9999,
    collection: 'firstEdition',
    image: [
      '/images/collection1/hoodie-noire-sans-fond.png',
      '/images/collection1/hoodie-blanc-sans-fond.png',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  {
    id: '4',
    name: 'Crop top snob (prémière collection)',
    price: 3999,
    collection: 'firstEdition',
    image: [
      '/images/collection1/crop-porté-2.jpg',
      '/images/collection1/crop-porté-1.jpg',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  {
    id: '5',
    name: 'T-shirt snob (deuxième collection)',
    price: 7499,
    collection: 'secondEdition',
    image: [
      '/images/collection2/complet-t-shirt-gris-sans-fond.png',
      '/images/collection2/t-shirt-beige.jpg',
      '/images/collection2/back-t-shirt-beige.jpg',
      '/images/collection2/t-shirt-bleu-ciel.jpg',
      '/images/collection2/t-shirt-marron.jpg',
      '/images/collection2/t-shirt-rose-porté.jpg',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  {
    id: '6',
    name: 'Pull snob (deuxième collection)',
    price: 9999,
    collection: 'secondEdition',
    image: [
      '/images/collection2/complet-hoodie-noire-sans-fond.png',
      '/images/collection2/hoodie-gris-sans-fond.png',
      '/images/collection2/hoodie-noire-sans-fond.png',
      '/images/collection2/hoodie-beige-sans-fond.png',
      '/images/collection2/hoodie-blanc-sans-fond.png',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },
  {
    id: '7',
    name: 'Crop top snob (deuxième collection)',
    price: 3999,
    collection: 'secondEdition',
    image: [
      '/images/collection2/crop-top-blanc-porté.jpg',
      '/images/collection2/crop-top-blanc-porté-2.jpg',
      '/images/collection2/crop-top-noire-porté.jpg',
    ],
    description: 'Simple mais percutant, il arbore un logo imposant sur la hanche droite, inspiré des graffitis urbains. Fabriqué en coton épais, ce T-shirt est parfait pour un look épuré.'
  },

  
];