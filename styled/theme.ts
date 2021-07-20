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

const mainColor = "#27bde6"
//#2790e6
//
//#e54242
//#98cfed

const headerHeight = '60px';
const headerTitleColor = mainColor;

const headerMenuColor = 'silver';
const headerMenuActiveColor = mainColor;

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
