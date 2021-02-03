import tinycolor from 'tinycolor2';

export const getThemeColor = (colors) => {
  let originColor = '';
  switch (colors.length) {
    case 6:
      originColor = colors[5];
      break;
    case 5:
      originColor = colors[5];
      break;
    case 4:
      originColor = colors[2];
      break;
    case 3:
      originColor = colors[2];
      break;
    case 2:
      originColor = colors[2];
      break;
    default:
      originColor = '32425C';
  }
  const themeHue = parseInt(tinycolor(originColor).toHsl().h);
  const primaryColor = tinycolor({ h: themeHue, s: 30, l: 30 }).toHex();
  const secondColor = tinycolor({ h: themeHue, s: 15, l: 70 }).toHex();
  return { primaryColor, secondColor };
};
