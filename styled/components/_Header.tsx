import styled, { css } from 'styled-components';

const { headerHeight } = require('../theme');

const _HeaderLayout = styled.div<HTMLDivElement>`
 position: sticky;
 top:0px; left:0px;
 height:${headerHeight};
 border-bottom:1px solid #eeeeee;
 box-shadow: 0px 2px 2px #eeeeee;
`

const _HeaderTitle = styled.div<HTMLDivElement>`
    
`

module.exports = { _HeaderLayout }