import { NEWS_TYPE } from "../actions/newsAction";

const initialState = {
  loading: false,
  news: [],
  result: 0,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_TYPE.LOAIDNG:
      return {
        ...state,
        loading: true,
      };
    case NEWS_TYPE.NEWS: {
      return {
        ...state,
        news: action.payload.data,
        result: action.payload.data.length,
      };
    }
    default:
      return state;
  }
};
export default newsReducer;
