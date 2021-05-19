import React, {useEffect, useState} from 'react';
const { _HeaderLayout } = require('../styled/components/_Header');
const Header : React.FC = () => {
    
    return(
        <_HeaderLayout>
            <div onClick={() => console.log('asd')} >HEADER</div>
        </_HeaderLayout>
    )
}
export default Header;
