import React, {useEffect, useState} from 'react';
const { HEADER_MENUS } = require('../common');
const { _MobileMenuListLayout, _MobileMenuListBox, _MobileMenuListItem } = require('../styled/components/_MobileMenuList')
interface headerMenusInterface {
    title: string;
    link: string;
}
const MobileMenuList:React.FC = () => {
    useEffect( () => {
        console.log(HEADER_MENUS);
    }, [])
    return(
        <_MobileMenuListLayout>
            <_MobileMenuListBox>
                {
                    HEADER_MENUS.map( (menu: headerMenusInterface, index:number) => {
                        return <>
                        <_MobileMenuListItem
                            key={index}
                        >
                                {menu['title']}
                        </_MobileMenuListItem>
                        <br/>
                        </>
                    })  
                }
            </_MobileMenuListBox>
        </_MobileMenuListLayout>
    )    
}

export default MobileMenuList;