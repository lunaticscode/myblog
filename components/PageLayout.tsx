import React, { useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import PostNavbar from './PostNavbar';
import { useMediaQuery } from 'react-responsive';
import { GlobalStyle } from '../styled/global-style';
const { _PageLayout } = require('../styled/pages/Layout')
const { sizes } = require('../styled/theme');

function PageLayout <P> ( WrappedComponent: React.ComponentType<P> ) {

    const PageLayoutComponent = ( props: P, ) => {
        const isMobile = useMediaQuery({
            query: `(max-width:${sizes.phone}px)`,
        })
        const viewMode = isMobile ? 'mobile' : 'pc';
        return( 
            <>
                <GlobalStyle/>
                <Header/>
                <_PageLayout>
                    <WrappedComponent
                        {...props} 
                        isMobile={isMobile} 
                    />
                </_PageLayout>
                {
                    ( isMobile )
                    ?
                    ""
                    :
                    <PostNavbar/>
                }
                <Footer/>
            </>
            )
    }
    return PageLayoutComponent;
}
export default PageLayout;