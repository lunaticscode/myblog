import styled, { css } from 'styled-components';
const { headerHeight, headerTitleColor, headerMenuColor, headerMenuActiveColor } = require('../theme');

const _HeaderLayout = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
 position: sticky;
 top:0px; left:0px;
 height:${headerHeight};
 border-bottom:1px solid #eeeeee;
 box-shadow: 0px 2px 2px #eeeeee;
 font-family: 'Syne Mono', monospace;
 display: flex;
`

const _HeaderTitle = styled.div`
    display: inline-flex;
    align-items: center;
    color: ${headerTitleColor};
    font-size: 20px;
    font-weight:1000;
    margin-left:10px;
    margin-top:-5px; 
    &:hover{
        cursor: pointer;
    }
`

const _HeaderMenuLayout = styled.div`
    font-family: initial;
    display: inline-flex;
    width:70%;
    max-width: 500px;
    align-items: center;
    justify-content: space-around;
`

interface _HeaderMenuProps {
    active: boolean;
}
const _HeaderMenu = styled.div<_HeaderMenuProps>`
    display: inline-block;
    color: ${headerMenuColor};
    padding:0px 5px;
    font-weight: 400;
    &:hover{
        color:black;
        cursor: pointer;
        font-weight: 600;
    }

    ${ props => props.active === true && css `
        color: ${headerMenuActiveColor};
        font-weight: 600;
    `}
`
console.log(_HeaderMenu);

const _SearchButton = styled.div`
    font-family: initial;
    display: inline-flex;
    margin-left:50px; 
    align-items: center;
    width: 22px;
    color:silver;
    opacity: 0.3;
    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`

module.exports = { 
        _HeaderLayout, 
        _HeaderTitle, 
        _HeaderMenuLayout, 
        _HeaderMenu, 
        _SearchButton,
}