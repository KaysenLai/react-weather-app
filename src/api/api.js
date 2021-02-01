const dev_weatherKey = process.env.REACT_APP_DEV_WEATHER_KEY;
const prod_weatherKey = process.env.REACT_APP_PROD_WEATHER_KEY;
const mapboxKey = process.env.REACT_APP_MAPBOX_KEY;
const imageKey = process.env.REACT_APP_IMG_KEY;

// export const getCurrentWeatherApi = (coordinates) =>
//   `https://devapi.qweather.com/v7/weather/now?location=${coordinates}&key=${dev_weatherKey}`;
//
// export const getHourlyWeatherApi = (coordinates) =>
//   `https://api.qweather.com/v7/weather/24h?location=${coordinates}&key=${prod_weatherKey}`;
//
// export const getDailyWeatherApi = (coordinates) =>
//   `https://devapi.qweather.com/v7/weather/3d?location=${coordinates}&key=${dev_weatherKey}`;
//
// export const searchCityApi = (place) =>
//   `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${mapboxKey}&cachebuster=1612146300278&autocomplete=true&types=place`;
//
// export const getOneImgApi = (imgId) => `https://api.unsplash.com/photos/${imgId}?client_id=${imageKey}`;
//
// export const getSearchImgApi = (cityName) =>
//   `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${imageKey}`;
//
// export const getImgByIdApi = (cityName) =>
//   `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${imageKey}`;

export const getCurrentWeatherApi = (coordinates) => 'http://localhost:5000/currentWeather';

export const getHourlyWeatherApi = (coordinates) => 'http://localhost:5000/hourlyWeather';

export const getDailyWeatherApi = (coordinates) => 'http://localhost:5000/dailyWeather';

export const searchCityApi = (place) => 'http://localhost:5000/searchCity';

export const getOneImgApi = (imgId) => 'http://localhost:5000/getOneImage';

export const getSearchImgApi = (cityName) => 'http://localhost:5000/searchImg';
