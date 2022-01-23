import axios from "axios";

export const api = axios.create({
  // baseURL = ao que se repete em todas requisicoes
  baseURL: "http://localhost:3000/api",
});
