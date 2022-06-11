import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1/";

export const getMovies = async () => {
  try {
    const response = await axios.get(BASE_URL + "movies/");
    return response.data;
  } catch (e) {
    return e;
  }
};
