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

const headerHeight = '60px';
const footerHeight = '90px';
const footerBackColor = '#454545';
const footerFontColor = '#eeeeee';

module.exports = { sizes, colors, headerHeight, footerHeight, footerBackColor, footerFontColor }
