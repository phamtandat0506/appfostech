export const URL = `https://api.fostech.vn`;
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
export const getData = async (url) => {
  const res = await axios.get(
    `${URL}/api/60939744ac969b4078488026/${url}?access_token=e8ba858476afc6a0f6c1d3d686e275a8`
  );

  return res;
};

export const getItem = async (url, _id) => {
  const res = await axios.get(
    `${URL}/api/60939744ac969b4078488026/${url}/${_id}?access_token=e8ba858476afc6a0f6c1d3d686e275a8`
  );

  return res;
};
