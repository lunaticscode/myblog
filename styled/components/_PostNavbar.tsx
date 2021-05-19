import styled, { css } from 'styled-components';

const { headerHeight, footerHeight } = require('../theme');
const _PostNavbarLayout = styled.div`
    position: fixed;
    //padding-top:15px;
    top:${headerHeight};
    right:0px; 
    height: calc( 100vh -  ( ${headerHeight} + ${footerHeight} ) );
    width: 25%;
    min-width: 200px;
    max-width: 400px;
    //positionbackground: #000000;
    border-left:1px solid white;
    box-shadow: -10px 2px 10px silver;
    
`
module.exports = { _PostNavbarLayout }