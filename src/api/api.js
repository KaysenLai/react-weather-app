const dev_weatherKey = '2ff4a2da7a34436b96711fb8f61d52d5';
const prod_weatherKey = '834bbda19299440daa2a3c0af2cab421';
const mapboxKey = 'pk.eyJ1Ijoia2F5c2VubGFpIiwiYSI6ImNrZWt6M2xhdDBib2syc292cWM0OXB2cTMifQ.UcjWOv7EtnjNMw2yH7rABA';

export const getCurrentWeatherApi = (coordinates) =>
  `https://devapi.qweather.com/v7/weather/now?location=${coordinates}&key=${dev_weatherKey}`;

export const getHourlyWeatherApi = (coordinates) =>
  `https://api.qweather.com/v7/weather/24h?location=${coordinates}&key=${prod_weatherKey}`;

export const getDailyWeatherApi = (coordinates) =>
  `https://devapi.qweather.com/v7/weather/3d?location=${coordinates}&key=${dev_weatherKey}`;

export const searchCityApi = (place) =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${mapboxKey}&cachebuster=1612146300278&autocomplete=true&types=place`;
// https://api.mapbox.com/geocoding/v5/mapbox.places/syd.json?access_token=pk.eyJ1Ijoia2F5c2VubGFpIiwiYSI6ImNrZWt6M2xhdDBib2syc292cWM0OXB2cTMifQ.UcjWOv7EtnjNMw2yH7rABA&cachebuster=1612146300278&autocomplete=true&types=place
