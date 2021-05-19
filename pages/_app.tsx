import { AppProps } from 'next/app';
import React from 'react';

const ReactApp = ( { Component, pageProps } : AppProps ) => {    
    return(
       <>
       <Component 
            {...pageProps} 
       />
       </>
    )
} 

export default  ReactApp;