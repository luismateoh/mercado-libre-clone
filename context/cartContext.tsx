import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

interface CardItemProps {
  id: number;
  name: string;
  price: number;
}

interface CartContextProps {
  cartItems: CardItemProps[];
  addToCart: (item: { price: number; name: string; id: number }) => void;
  removeFromCart: (itemId: number) => void;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const useCartContext = () => useContext(CartContext);

interface CartContextProviderProps {
  children: JSX.Element;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CardItemProps[]>([]);

  const addToCart = (item: CardItemProps) => {
    const itemExists = cartItems.find((i) => i.id === item.id);

    if (!itemExists) {
      setCartItems([...cartItems, item]);
      toast.success('Producto agregado al carrito');
    } else toast.info('Producto ya existe en el carrito');
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    toast.error('Producto eliminado del carrito');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
