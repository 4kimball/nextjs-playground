import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1/";

type LoginInfo = {
  username: string;
  password: string;
};

export const signup = async (credentials: SignupInfo) => {
  const response = await axios
    .post(BASE_URL + "accounts/signup/", credentials)
    .then((res) => {
      console.log(res);
    });
};

export const login = async (credentials: LoginInfo) => {
  const response = await axios
    .post(BASE_URL + "token/", credentials)
    .then((res) => {
      console.log(res);
    });
};
