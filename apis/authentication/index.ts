import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1/accounts/";

export const signup = async (credentials: Credentials) => {
  const response = await axios
    .post(BASE_URL + "signup/", credentials)
    .then((res) => {
      console.log(res);
    });
};
