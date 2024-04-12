import axios from "axios";
import config from "../Secrets";

export default axios.create({
  baseURL: config.BACKEND_BASE_URL,
  headers: {
    accessToken: "",
  },
});
