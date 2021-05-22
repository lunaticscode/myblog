import styled, {css} from 'styled-components';
const { footerHeight, footerBackColor, footerFontColor } = require('../theme');

const _FooterLayout = styled.div`
    height: ${footerHeight};
    position: relative;
    bottom:0px;
    left:0px;
    width: 100%;
    opacity:0.9;
    color: ${footerFontColor};
    background: ${footerBackColor};
`

const _FooterContentBox = styled.div`
    padding:10px;   
`

module.exports = { _FooterLayout, _FooterContentBox }