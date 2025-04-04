import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  printNumber?: string;
  quantity: number;
  size: string;
  color: string;
};

type CartStore = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (itemId: string, size: string, color: string) => void;
  updateQuantity: (itemId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      
      addItem: (item) => {
        const { items } = get();
        const quantity = item.quantity || 1;
        
        // Check if item already exists with same size and color
        const existingItemIndex = items.findIndex(
          (i) => i.id === item.id && i.size === item.size && i.color === item.color
        );
        
        if (existingItemIndex !== -1) {
          // Update quantity if item exists
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += quantity;
          
          set((state) => ({
            items: updatedItems,
            totalItems: state.totalItems + quantity,
            totalPrice: state.totalPrice + (item.price * quantity),
          }));
        } else {
          // Add new item
          set((state) => ({
            items: [...state.items, { ...item, quantity }],
            totalItems: state.totalItems + quantity,
            totalPrice: state.totalPrice + (item.price * quantity),
          }));
        }
      },
      
      removeItem: (itemId, size, color) => {
        const { items } = get();
        const itemToRemove = items.find(
          (i) => i.id === itemId && i.size === size && i.color === color
        );
        
        if (itemToRemove) {
          set((state) => ({
            items: state.items.filter(
              (i) => !(i.id === itemId && i.size === size && i.color === color)
            ),
            totalItems: state.totalItems - itemToRemove.quantity,
            totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
          }));
        }
      },
      
      updateQuantity: (itemId, size, color, quantity) => {
        const { items } = get();
        const itemIndex = items.findIndex(
          (i) => i.id === itemId && i.size === size && i.color === color
        );
        
        if (itemIndex !== -1) {
          const item = items[itemIndex];
          const quantityDiff = quantity - item.quantity;
          
          const updatedItems = [...items];
          updatedItems[itemIndex].quantity = quantity;
          
          set((state) => ({
            items: updatedItems,
            totalItems: state.totalItems + quantityDiff,
            totalPrice: state.totalPrice + (item.price * quantityDiff),
          }));
        }
      },
      
      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },
    }),
    {
      name: 'snob-cart-storage',
    }
  )
);
