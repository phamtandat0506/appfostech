export const URL = "https://api.fostech.vn";
import axios from "axios";

export default function getLogin(endpoint, method = "GET", data, headers) {
  return axios({
    method,
    url: `${URL}/${endpoint}`,
    data,
    headers,
  }).catch((error) => {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
    console.log(error.config);
  });
}
