import axios from "axios";

const api = axios.create();

api.defaults.baseURL = "/api";

export { api };