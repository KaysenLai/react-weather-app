import axios from "axios";

export function requestGetUser() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
