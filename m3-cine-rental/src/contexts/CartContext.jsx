import { createContext, useContext, useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/cartReducer';

//* Create Context API
export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const cart = cartState.cartData;

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

//* Custom Hook for using Context
export const useCart = () => {
  return useContext(CartContext);
};

export const useCartDispatch = () => {
  return useContext(CartDispatchContext);
};

export default CartProvider;
