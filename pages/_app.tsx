import { Container, AppProps } from 'next/app';
import React from 'react';
import { GlobalStyle } from '../styled/global-style';
import Intro from './intro';
import { useMediaQuery } from 'react-responsive';

const ReactApp = ( { Component, pageProps } : AppProps ) => {
    const isMobile = useMediaQuery({
        query: "(max-width:560px)"
    })
    return(
       <>
       <div>{( isMobile ) ? 'mobile' : 'pc'}</div>
       <Component 
            {...pageProps} 
            isMobile = { isMobile }
       />
       </>
    )
} 

export default  ReactApp;