import tinycolor from 'tinycolor2';

export const getThemeColor = (colors) => {
  let originColor = colors[2];
  const themeHue = parseInt(tinycolor(originColor).toHsl().h);
  const primaryColor = '#' + tinycolor({ h: themeHue, s: 30, l: 30 }).toHex();
  const secondColor = '#' + tinycolor({ h: themeHue, s: 15, l: 70 }).toHex();
  return { primaryColor, secondColor };
};
