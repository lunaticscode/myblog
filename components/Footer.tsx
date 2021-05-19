import React from 'react';
const { _FooterLayout, _FooterContentBox } = require('../styled/components/_Footer');
const Footer : React.FC = () => {
    
    return(
        <_FooterLayout>
            <_FooterContentBox>
            Footer
            </_FooterContentBox>
        </_FooterLayout>
    )
}

export default Footer;