import React, {useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styled/global-style';
type IndexPageProps = {
    isMobile: boolean; 
}
const App : React.FC <IndexPageProps> = ( { isMobile } )  => {
    return(
        <>  
            <div>myblog</div>    
        </>
    )
}
export default App;