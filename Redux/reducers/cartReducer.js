import { CART_TYPES } from "../actions/cartAction";

const initialState = {
  cart: [],
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TYPES.LOADING:
      return {
        ...state,
        loading: true,
      };
    case CART_TYPES.ADD_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case CART_TYPES.GET_ALL_ITEM:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default cartReducer;
