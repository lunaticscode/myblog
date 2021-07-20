import styled, { css } from 'styled-components';
const { headerTitleColor } = require('../theme');

const _MobileMenuListLayout = styled.div<HTMLDivElement>`
    width: 50%;
    min-width: 220px;
    height: 100vh;
    position: absolute;
    right:0px;
    top:0px;
    background: black;
    opacity: 0.8;
    border-top-left-radius:5px;
    box-shadow: 0px 0px 10px black;
`

const _MobileMenuListBox = styled.div<HTMLDivElement>`
    padding:10px;
    margin-top:10px;
    color: #e7e7e7;
`

const _MobileMenuListItem = styled.div<HTMLDivElement>`
    width:auto;
    display: inline-block;
    margin-top:20px;
    font-weight: 600;
    margin-left:5px;
    padding-bottom:2px;
    &:hover{
        border-bottom: 1px solid ${headerTitleColor};
    }
`

module.exports = { 
    _MobileMenuListLayout,
    _MobileMenuListBox,
    _MobileMenuListItem,
}