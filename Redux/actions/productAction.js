import { getData, getItem } from "../../utils/fetchApi";
import { GLOBALTYPES } from "./GlobalTypes";

export const PRODUCT_TYPES = {
  LOADING: "LOADING",
  LIST_PRODUCT: "LIST_PRODUCT",
  FAVORITE_PRODUCT: "FAVORITE_PRODUCT",
  GET_ITEM_PRODUCT: "GET_ITEM_PRODUCT",
};

export const getListProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TYPES.LOADING, payload: true });
    const listProduct = await getData("dmvt");

    dispatch({ type: PRODUCT_TYPES.LIST_PRODUCT, payload: listProduct });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};
export const getItemProduct = (_id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TYPES.LOADING, payload: true });
    const res = await getItem("dmvt", _id);

    dispatch({ type: PRODUCT_TYPES.GET_ITEM_PRODUCT, payload: res.data });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};
