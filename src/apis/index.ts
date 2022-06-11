import axios, { AxiosRequestConfig } from "axios";
export * from "./authentication";
export * from "./movies";

// axios.interceptors.request.use((config: AxiosRequestConfig) => {
//   const accessToken = localStorage.getItem("accessToken");
//   config.headers.Authorization = `Bearer ${accessToken}`;
//   return config;
// });
