import { getData } from "../../utils/fetchApi";
import { GLOBALTYPES } from "./GlobalTypes";
export const NEWS_TYPE = {
  NEWS: "NEWS",
  LOADING: "LOADING_NEWS",
};

export const getNewsData = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_TYPE.LOADING, payload: { loading: true } });
    const res = await getData("news");

    dispatch({ type: NEWS_TYPE.NEWS, payload: res });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};
