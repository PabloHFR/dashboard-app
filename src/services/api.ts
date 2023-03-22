import axios from "axios";

export const api = axios.create({
  baseURL: "https://dashboard-app-azure.vercel.app/api",
});
