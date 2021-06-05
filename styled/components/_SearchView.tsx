import styled, { css } from 'styled-components';
const { mainColor } = require('../theme');
interface _SearchViewLayoutProps {
    visible: boolean;
}
const _SearchViewLayout = styled.div<_SearchViewLayoutProps>`
    position: absolute; 
    top:0px; left: 0px;
    height: 100vh;
    width: 100vw;
    background: black;
    opacity: 0.8;
    ${ props => props.visible === true && css `
            display: block ;
    `}
    ${ props => props.visible === false && css `
            display: none ;
    `}
    
`
const _SearchViewCloseBtn = styled.div`
// color:'white', position:'absolute', top:'20px', right:'20px',
    color: white;
    position: absolute; top: 20px; right:20px;
    &:hover{
        cursor: pointer;
    }
`
interface _SearchViewInputProps {
    active: boolean;
}
const _SearchViewInput = styled.input<_SearchViewInputProps>`
    background: none;
    margin-top:20vh;
    text-align: center;
    outline: none;
    border:none;
    border-bottom: 1px solid gray;
    width: 80%;
    margin-left:10%;
    color:#eeeeee;
    font-size: 25px;
    font-weight: 400;
    &::placeholder {
        color:gray;
    }
    
    
    ${ props => props.active === true && css `
        border-bottom: 2px solid ${mainColor}
    `}
`


module.exports = { _SearchViewLayout, _SearchViewCloseBtn, _SearchViewInput }