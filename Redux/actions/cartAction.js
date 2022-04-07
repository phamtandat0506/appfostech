import { GLOBALTYPES } from "./GlobalTypes";

export const CART_TYPES = {
  ADD_CART: "ADD_CART",
  GET_ALL_ITEM: "GET_ALL_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  LOADING: "LOADING",
};

export const addCart = (auth, products) => async (dispatch) => {
  try {
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.reponse.data.msg },
    });
  }
};

export const getAllItemCart = (auth, product) => async (dispatch) => {
  try {
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.reponse.data.msg },
    });
  }
};
