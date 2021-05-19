import React, {useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styled/global-style';

import { theme } from '../styled/theme';

const App : React.FC = ( { } )  => {
    const [testState, setTestState] = useState<string>("init")
 
    return(
        <>  
            {/*  <> = <React.Fragment> */}
            <ThemeProvider theme ={theme} >
            <GlobalStyle />
            <div>myblog - {testState}</div>    
            </ThemeProvider>

        </>
    )
}
export default App;