import styled, { css, ThemedStyledInterface } from 'styled-components';

const sizes = {
  desktop: 1167,
  tablet: 778,
  phone: 576,
}

const colors = {
    dark: {
      fontColor: "#eeeeee",
    },    
    light: {
      fontColor: "#000000",
    }
}

const mainColor = "#e54242"

const headerHeight = '60px';
const headerTitleColor = mainColor;

const headerMenuColor = 'silver';
const headerMenuActiveColor = 'black';

const footerHeight = '60px';
const footerBackColor = mainColor;
const footerFontColor = '#eeeeee';

module.exports = { 
    sizes, colors, 
    mainColor,
    headerHeight,
    headerTitleColor, 
    headerMenuColor, headerMenuActiveColor, 
    footerHeight, footerBackColor, footerFontColor 
}
