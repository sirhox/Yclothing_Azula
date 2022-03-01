import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [],
  totalPrice: 0
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE);

  const addItem = (item) => {
    if (isInCart(item.id)) {
      // ya existe el item no hago nada
      return;
    }
    const newAddedItems=[...cart.addedItems,item];
    const newTotalPrice = cart.totalPrice + item.price * item.quantityToAdd
    setCart({ ...cart, addedItems: newAddedItems, totalPrice: newTotalPrice} );
  };

const isInCart = (idItem)=>{
  return cart.addedItems.some((addedItem) => addedItem.id === idItem)
}

const removeItem= (itemId)=>{
  const removedItemList = cart.addedItems.filter(item => item.id !== itemId)
  const removedItem = cart.addedItems.find(item => item.id === itemId)
  const newTotalPrice = cart.totalPrice - removedItem.price * removedItem.quantityToAddity
  setCart({...cart, addedItems: removedItemList, totalPrice: newTotalPrice})
}

  
  const clear = () => {
    setCart(INITIAL_STATE);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear,isInCart,removeItem}}>
      {children}
    </CartContext.Provider>
  );
};
