import * as actions from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actions.CART_ADD_REQUEST:
      const item = action.payload;
      const existItem = state.cartItems.find((e) => e.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actions.CART_REMOVE_REQUEST:
      console.log(state.cartItems.filter((x) => x.product !== action.payload));
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};