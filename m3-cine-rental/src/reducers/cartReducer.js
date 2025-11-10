//* Initial State
const initialState = {
  cartData: [],
};

//* Reducer Function
const cartReducer = (cartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        cartData: [...cartState.cartData, action.payload],
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...cartState,
        cartData: cartState.cartData.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export { cartReducer, initialState };
