import { PRODUCT_TYPES } from "../actions/productAction";

const initialState = {
  loading: false,
  product: [],
  productDe: [],
  result: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCT_TYPES.LIST_PRODUCT:
      return {
        ...state,
        loading: false,
        product: action.payload.data,
        result: action.payload.data.length,
      };
    case PRODUCT_TYPES.GET_ITEM_PRODUCT:
      return {
        ...state,
        productDe: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
