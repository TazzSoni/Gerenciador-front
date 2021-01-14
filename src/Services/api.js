import axios from "axios";


function api() {

}
/*const api = axios.create({
  baseURL: "http://localhost:8080"
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('app-token')
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});
*/

export default api;