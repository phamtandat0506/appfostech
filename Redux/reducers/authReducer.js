import { PROFILE_TYPES } from "../actions/authAction";
import { GLOBALTYPES } from "../actions/GlobalTypes";

const initialState = {
  token: null,
  err: "Error",
  id_app: null,
  profile: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      return {
        ...state,
        token: action.payload,
      };
    case GLOBALTYPES.ALERT: {
      return {
        state,
        err: action.payload,
      };
    }
    case GLOBALTYPES.ID_APP:
      return {
        ...state,
        id_app: action.payload._id,
      };
    case PROFILE_TYPES.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
