import React, {useEffect, useState} from 'react';
const { _HeaderLayout, _HeaderTitle, _HeaderMenuLayout, _HeaderMenu, _SearchButton } = require('../styled/components/_Header');
const {  HEADER_TITLE, HEADER_MENUS } = require('../common');

interface headerMenusInterface {
    title: string;
    link: string;
}

interface HeaderProps {
    setSearchViewVisible: () => void;
}

const Header : React.FC<HeaderProps> = ( { setSearchViewVisible } ) => {

    const [ nowPath, setNowPath ] = useState<string>("");

    const onClickMenu = ( link:string ) => {
        console.log(link);
        location.href = '.'+link;
    }

    useEffect( () => {
        setNowPath( location.pathname );
    })
    
    return(
        <>
        <_HeaderLayout>
            <_HeaderTitle onClick={() => { location.href='/' }} >
                <span>{"<"}</span>
                { HEADER_TITLE }
                <span>{"/>"}</span>
            </_HeaderTitle>
            {
                ( HEADER_MENUS.length )
                ?
                <_HeaderMenuLayout>
                    {
                        HEADER_MENUS.map( ( elem: headerMenusInterface, index: number ) => {
                           return (
                                <_HeaderMenu 
                                    key={ index }
                                    onClick={ () => onClickMenu( elem.link ) } 
                                    active = {  ( nowPath ).indexOf( elem.link ) !== -1 ? true : false }
                                >
                                    { elem.title }
                                </_HeaderMenu>
                            )
                        })
                    }
                </_HeaderMenuLayout>
                
                :""
            }
        <_SearchButton
                onClick ={ () => setSearchViewVisible() }
            >
                <img src ="/images/search.png" alt="insoo" style={{width:'100%'}} />
        </_SearchButton>
        </_HeaderLayout>
       
     
        </>
    )
}
export default Header;
