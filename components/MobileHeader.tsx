import React, {useEffect, useState } from 'react';
const { _HeaderLayout, _HeaderTitle } = require('../styled/components/_Header');
const { _MobileHeaderMenu } = require( '../styled/components/_MobileHedaer' );
const {  HEADER_TITLE, HEADER_MENUS } = require('../common');

interface MobileHeaderProps {
    onClickMobileMenu: () => void;
}
const MobileHeader: React.FC <MobileHeaderProps> = ( { onClickMobileMenu } ) => {
        return(
            <>
            <_HeaderLayout>

                <_HeaderTitle onClick={() => { location.href='/' }}>
                    <span>{"<"}</span>
                        { HEADER_TITLE }
                    <span>{"/>"}</span>
                </_HeaderTitle>

                <_MobileHeaderMenu
                    onClick={ () => onClickMobileMenu() }
                >
                    <img src ="/images/menu.png" alt="mobile-menu" style={{width:'100%'}} />
                </_MobileHeaderMenu>    

            </_HeaderLayout>
            
            </>
        )
}

export default MobileHeader;