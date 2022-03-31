import { GLOBALTYPES } from "../actions/GlobalTypes";

const initialState = {
  token: "",
  once: "",
  err: "Error",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      return {
        ...state,
        token: action.payload.token,
        once: action.payload.once,
      };
    case GLOBALTYPES.ALERT: {
      return {
        state,
        err: action.payload,
      };
    }
    default:
      return state;
  }
};
export default authReducer;
