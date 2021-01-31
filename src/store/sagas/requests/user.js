import axios from "axios";

export function requestGetUser() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

export function requestLocation() {
  return axios.get(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/brisban.json?access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw&cachebuster=1612034902505&autocomplete=true"
  );
}

export function requestLocationFake() {
  return axios.get("http://localhost:5000/ddd");
}
