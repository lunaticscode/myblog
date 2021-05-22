import styled, {css} from 'styled-components';
const { colors, headerHeight, footerHeight } = require('../../styled/theme') 

const _PageLayout = styled.div<HTMLDivElement>`
    color: ${colors.light.fontColor};
    height: calc( 100vh -   ( ${headerHeight} + ${footerHeight}) ) ;
    
    
`
module.exports = { _PageLayout }