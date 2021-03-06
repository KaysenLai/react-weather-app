const weatherCN = [
  '晴',
  '多云',
  '少云',
  '晴间多云',
  '阴',
  '晴',
  '晴间多云',
  '阴',
  '阵雨',
  '强阵雨',
  '雷阵雨',
  '强雷阵雨',
  '雷阵雨伴有冰雹',
  '小雨',
  '中雨',
  '大雨',
  '极端降雨',
  '毛毛雨/细雨',
  '暴雨',
  '大暴雨',
  '特大暴雨',
  '冻雨',
  '小到中雨',
  '中到大雨',
  '大到暴雨',
  '暴雨到大暴雨',
  '大暴雨到特大暴雨',
  '雨',
  '阵雨',
  '强阵雨',
  '小雪',
  '中雪',
  '大雪',
  '暴雪',
  '雨夹雪',
  '雨雪天气',
  '阵雨夹雪',
  '阵雪',
  '小到中雪',
  '中到大雪',
  '大到暴雪',
  '雪',
  '阵雨夹雪',
  '阵雪',
  '薄雾',
  '雾',
  '霾',
  '扬沙',
  '浮尘',
  '沙尘暴',
  '强沙尘暴',
  '浓雾',
  '强浓雾',
  '中度霾',
  '重度霾',
  '严重霾',
  '大雾',
  '特强浓雾',
  '热',
  '冷',
  '未知',
];
const weatherEN = [
  'Sunny',
  'Cloudy',
  'Few Clouds',
  'Partly Cloudy',
  'Overcast',
  'Clear',
  'Partly Cloudy',
  'Overcast',
  'Shower Rain',
  'Heavy Shower Rain',
  'Thundershower',
  'Heavy Thunderstorm',
  'Thundershower with hail',
  'Light Rain',
  'Moderate Rain',
  'Heavy Rain',
  'Extreme Rain',
  'Drizzle Rain',
  'Storm',
  'Heavy Storm',
  'Severe Storm',
  'Freezing Rain',
  'Light to moderate rain',
  'Moderate to heavy rain',
  'Heavy rain to storm',
  'Storm to heavy storm',
  'Heavy to severe storm',
  'Rain',
  'Shower Rain',
  'Heavy Shower Rain',
  'Light Snow',
  'Moderate Snow',
  'Heavy Snow',
  'Snowstorm',
  'Sleet',
  'Rain And Snow',
  'Shower Snow',
  'Snow Flurry',
  'Light to moderate snow',
  'Moderate to heavy snow',
  'Heavy snow to snowstorm',
  'Snow',
  'Shower Snow',
  'Snow Flurry',
  'Mist',
  'Foggy',
  'Haze',
  'Sand',
  'Dust',
  'Duststorm',
  'Sandstorm',
  'Dense fog',
  'Strong fog',
  'Moderate haze',
  'Heavy haze',
  'Severe haze',
  'Heavy fog',
  'Extra heavy fog',
  'Hot',
  'Cold',
  'Unknown',
];

const translateWeatherText = (weatherTextCN) => {
  const index = weatherCN.indexOf(weatherTextCN);
  return index === -1 ? weatherTextCN : weatherEN[index];
};

const windDirCN = ['东风', '南风', '西风', '北风', '东北风', '东南风', '西北风', '西南风'];
const windDirEN = ['East', 'South', 'West', 'North', 'Northeast', 'Southeast', 'NorthWest', 'SouthWest'];

const translateWinDir = (windDirectionCN) => {
  const index = windDirCN.indexOf(windDirectionCN);
  return index === -1 ? windDirectionCN : windDirEN[index];
};

export { translateWeatherText, translateWinDir };
