import styled, {css} from 'styled-components';

const { colors, headerHeight, footerHeight } = require('../../styled/theme') 
console.log(colors);

const _PageLayout = styled.div<HTMLDivElement>`
    //margin-top:100px;
    color: ${colors.light.fontColor};
    height: calc( 100vh -   ( ${headerHeight} + ${footerHeight}) ) ;
`
module.exports = { _PageLayout }