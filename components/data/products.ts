export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
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

export const products: Product[] = [
  {
    id: '1',
    name: 'Acme Slip-On Shoes',
    price: 7500,
    image: '/images/s-bl.png',
  },
  {
    id: '2',
    name: 'Acme Circles T-Shirt',
    price: 7500,
    image: '/images/s-be.png',
  },
  {
    id: '3',
    name: 'Acme Drawstring Bag',
    price: 7500,
    image: '/images/s-nr.png',
  },
  {
    id: '4',
    name: 'Acme Keyboard',
    price: 7500,
    image: '/images/s-rs.png',
  },
  {
    id: '5',
    name: 'Acme Prism T-Shirt',
    price: 25.00,
    image: '/images/crop.jpg',
  },
  {
    id: '6',
    name: 'Acme T-Shirt',
    price: 7500,
    image: '/images/s-nrc.png',
  },
];