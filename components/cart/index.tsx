import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Cancel01Icon, Delete01Icon } from "hugeicons-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/utils";

interface CartProps {
  isOpen: boolean;
  onCartClose: () => void;
}

export const Cart = ({ isOpen, onCartClose }: CartProps) => {
  const { onOpen, onOpenChange } = useDisclosure();
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCartStore();

  return (
    <>
      <Drawer isOpen={isOpen} radius="none" onClose={onCartClose} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-semibold text-gray-400">Votre Panier</h2>
                <span className="text-sm text-gray-600">
                  {items.length} article{items.length !== 1 ? 's' : ''}
                </span>
              </DrawerHeader>
              <DrawerBody className="py-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-gray-600 mb-4">Votre panier est vide</p>
                    <Button color="primary" variant="light" onPress={onClose}>
                      Continuer vos achats
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 pb-4 border-b">
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <img src={item.image[0]} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium text-gray-400">{item.name}</h3>
                            <button 
                              onClick={() => removeItem(item.id, item.size, item.color)}
                              className="text-white bg-red-300 p-2 rounded-full hover:bg-red-500 transition-all duration-300"
                            >
                              <Delete01Icon className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            <span>Taille: {item.size}</span>
                            <span className="mx-2">•</span>
                            <span>Couleur: {item.color}</span>
                            {item.printNumber && (
                              <>
                                <span className="mx-2">•</span>
                                <span>Print: {item.printNumber}</span>
                              </>
                            )}
                          </div>
                          <div className="flex justify-between items-center mt-3">
                            <div className="flex items-center border rounded-lg">
                              <button 
                                className="px-3 py-1 text-gray-600 hover:text-violet-500"
                                onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                              >
                                -
                              </button>
                              <span className="px-3 py-1 text-gray-400">{item.quantity}</span>
                              <button 
                                className="px-3 py-1 text-gray-600 hover:text-violet-500"
                                onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <span className="font-medium text-gray-400">
                              {formatPrice(item.price * item.quantity)} FCFA
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </DrawerBody>
              {items.length > 0 && (
                <DrawerFooter className="border-t flex flex-col pt-4 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="font-medium text-gray-400">{formatPrice(totalPrice)} FCFA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Livraison</span>
                    <span className="font-medium text-gray-400">Calculé à la caisse</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span className="text-gray-400">Total</span>
                    <span className="text-gray-400">{formatPrice(totalPrice)} FCFA</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button color="danger" variant="light" onPress={() => clearCart()}>
                      Vider le panier
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Commander
                    </Button>
                  </div>
                </DrawerFooter>
              )}
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
