import axios from "axios";
const { baseUrl } = require("../config");
const { store } = require("../redux/store");

const token = store.getState((state) => state).auth.token;

// Create an instance of Axios with custom configurations
export const API = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
});
