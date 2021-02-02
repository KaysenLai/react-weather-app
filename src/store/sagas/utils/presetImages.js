const presetImages = {
  melbourne: 'NHgGemjJb0o',
  sydney: 'KeDdztmEqVc',
  gold_coast: 'evtWtv0i-6E',
  brisbane: 'LyXjaTNxUcE',
  perth: 'ymgOYi8mroc',
  canberra: 'qqqkdrgIw8M',
  hobart: 'CjWTOcdnvK4',
  wollongong: 'efOgkiiCdqU',
  geelong: 'UxektwAqMVw',
  townsville: 'yuyD22L5794',
  cairns: '77IET9z4S-4',
};

export const getPresetImages = (cityName) => {
  const lowerCaseCityName = cityName.toLowerCase();
  const noSpaceCityName = lowerCaseCityName.replace(' ', '_');
  return presetImages.hasOwnProperty(noSpaceCityName) ? presetImages[noSpaceCityName] : '';
};
