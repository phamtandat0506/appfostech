import getLogin from "../../utils/fetchApi";
import { GLOBALTYPES } from "./GlobalTypes";
import { Buffer } from "buffer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = (username, password) => {
  var credentials = Buffer.from(username + ":" + password).toString("base64");
  var basicAuth = "Basic " + credentials;

  const add = async (dispatch) => {
    try {
      const res = await getLogin(`auth/local`, "GET", "", {
        Authorization: basicAuth,
      });
      console.log(res);
      if (res.data) {
        dispatch({
          type: GLOBALTYPES.AUTH,
          payload: res.data,
        });
        try {
          const jsonToken = JSON.stringify(res.data.token);
          await AsyncStorage.setItem("@token_key", jsonToken);
        } catch (error) {
          console.log(error);
        }
      } else {
        dispatch({
          type: GLOBALTYPES.AUTH,
          payload: res,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
