import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1/";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export const getMovies = async () => {
  const accessToken = localStorage.getItem("access_token");

  return await axios.get(BASE_URL + "movies/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
