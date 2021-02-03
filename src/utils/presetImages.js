const presetImages = {
  tokyo: 'hwLAI5lRhdM',
  delhi: 'NWo6rTtvT40',
  shanghai: 'mnyJEvSLtvk',
  sao_paulo: 'BxoaHOKCD_Q',
  mexico_city: '7LDBKPWAHJ4',
  cairo: 'GXIr_uawluA',
  beijing: 'yBroAF1cN3I',
  mumbai: 'tsXADt9ldio',
  osaka: 'SMwAfgzj-VU',
  karachi: '3-wEWslwdgA',
  chongqing: '38hY_MCMoJs',
  tianjin: 'jNgqc3ySqq0',
  guangzhou: 'b_bD3zhhYgQ',
  rio_de_janeiro: 'CErddu-JwKw',
  moscow: 'L4jrg4c7928',
  shenzhen: 'eJiJZeQ3aAQ',
  paris: 'bQxGg8Vx1Vc',
  bangkok: '8aSAEuPHg-o',
  seoul: 'p_D5pbQG5TE',
  london: 'EXdXLrZXS9Q',
  chengdu: 'HFgxFulbsF4',
  nanjing: 'Pnc2Uxb7PG0',
  wuhan: 'EvIq84tlhgg',
  new_york: 'SVVTZtTGyaU',
  hangzhou: 'gNKfVese1_4',
  hong_kong: 'ckxoFlEtlUc',
  dongguan: '1twbwtYGEY0',
  suzhou: 'G7FS48MlGfo',
  foshan: 'rAJS1AruT30',
  shenyang: 'CzkubFD-gDA',
  baghdad: 'nyMYcVUcnDE',
  santiago: 'xvfG1pXWMuc',
  madrid: 'od-qHnPg9J8',
  haerbin: '3xgI47fu128',
  toronto: 'XeYmx-qBsUk',
  singapore: '__cBlRzLSTg',
  dalian: 'JS18Jpd7ifU',
  qingdao: 'OxQVedU-nEk',
  barcelona: 'nD2WzCZrlLE',
  fukuoka: 'qTPCqxCR-LA',
  jinan: 'Skm6M0du79Y',
  zhengzhou: 'QnqirwLtCv4',
  melbourne: 'iFdPrhOPI_E',
  sydney: 'KeDdztmEqVc',
  hefei: 'imYKxcVODCc',
  rome: '0Bs3et8FYyg',
  gold_coast: 'evtWtv0i-6E',
  brisbane: 'LyXjaTNxUcE',
  perth: 'ymgOYi8mroc',
  zhuhai: 'EfYmZS8l_zA',
  adelaide: 'VX5w9--e9Rk',
  mianyang: 'cdzePwLapgM',
  zhenjiang: 't5Qz1Y281VA',
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