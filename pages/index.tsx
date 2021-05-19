import React, {useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styled/global-style';
import PageLayout from '../components/PageLayout';
const { _PageLayout } = require( '../styled/pages/Layout')
type IndexPageProps = {
    isMobile: boolean;
}
const App : React.FC <IndexPageProps> = ( { isMobile } )  => {
    console.log(isMobile);
    return(
        <>  
            <div>index</div>    
        </>
    )
}
export default PageLayout(App);