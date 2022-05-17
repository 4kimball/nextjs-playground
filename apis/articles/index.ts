import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1/";

export const getArticles = (url: string) => {
  return axios
    .get(BASE_URL + url)
    .then((res) => res)
    .catch((error) => error);
};
