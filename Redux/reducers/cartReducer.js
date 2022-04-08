import { CART_TYPES } from "../actions/cartAction";
import { DeleteData } from "../actions/GlobalTypes";

const initialState = {
  cart: [],
  loading: false,
  getCart: [],
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
        getCart: action.payload,
        loading: false,
      };
    case CART_TYPES.DELETE_ITEM:
      return {
        ...state,
        getCart: DeleteData(state.getCart, action.payload._id),
        loading: false,
      };
    default:
      return state;
  }
};
export default cartReducer;
