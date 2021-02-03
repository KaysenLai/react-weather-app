import tinycolor from 'tinycolor2';

export const getThemeColor = (colors) => {
  let originColor;
  if (colors.length >= 5) originColor = colors[5];
  else originColor = colors[1];

  const themeHue = parseInt(tinycolor(originColor).toHsl().h);
  const primaryColor = '#' + tinycolor({ h: themeHue, s: 30, l: 30 }).toHex();
  const secondColor = '#' + tinycolor({ h: themeHue, s: 15, l: 70 }).toHex();
  return { primaryColor, secondColor };
};
