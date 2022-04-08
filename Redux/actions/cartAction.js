import { deleteDataAPI, getAllCart, postDataAPI } from "../../utils/fetchApi";
import { GLOBALTYPES } from "./GlobalTypes";

export const CART_TYPES = {
  ADD_CART: "ADD_CART",
  GET_ALL_ITEM: "GET_ALL_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  LOADING: "LOADING",
};

export const addCart = (auth, products) => async (dispatch) => {
  try {
    const details = [];
    details.push(products);

    const cart = { details, ...auth };

    dispatch({ type: CART_TYPES.LOADING, payload: true });
    const res = await postDataAPI("ft_cart", cart, auth.id_app, auth.token);

    dispatch({
      type: CART_TYPES.ADD_CART,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const RemoveItemInCart = (auth, item, cart) => async (dispatch) => {
  try {
    dispatch({ type: CART_TYPES.DELETE_ITEM, payload: cart });
    //const update = cart.filter((value) => value._id !== item._id);

    await deleteDataAPI("ft_cart", item._id, auth.id_app, auth.token);
  } catch (error) {
    console.log(error);
  }
};

export const getAllItemCart = (auth) => async (dispatch) => {
  try {
    const res = await getAllCart("ft_cart", auth.id_app, auth.token);

    dispatch({ type: CART_TYPES.GET_ALL_ITEM, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
