import React, { useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import PostNavbar from './PostNavbar';
import SearchView from './SearchView';
import { useMediaQuery } from 'react-responsive';
import { GlobalStyle } from '../styled/global-style';
const { _PageLayout } = require('../styled/pages/Layout')
const { sizes } = require('../styled/theme');

// 고차 컴포넌트
function PageLayout <P> ( WrappedComponent: React.ComponentType<P> ) {

    const PageLayoutComponent = ( props: P, ) => {

        const [ nowPath, setNowPath ] = useState<string>("");
        const [ isSearchViewVisible, SetIsSearchViewVisible ] = useState<boolean>(false);

        useEffect( () => {
            setNowPath( location.pathname );
        })
        
        const isMobile = useMediaQuery({
            query: `(max-width:${sizes.phone}px)`,
        })

        const setSearchViewVisible = () => {
            SetIsSearchViewVisible( true );
        }

        const setSearchViewUnvisible = () => {
            SetIsSearchViewVisible( false );
        }

        return( 
            <>
                <GlobalStyle/>
                <Header 
                    setSearchViewVisible = { setSearchViewVisible } 
                />
                <_PageLayout>
                    <div style={{padding:'15px'}} >
                    <WrappedComponent
                        {...props} 
                        isMobile={isMobile} 
                    />
                    </div>
                </_PageLayout>
                {
                    ( isMobile || nowPath.indexOf('/post') === -1 )
                    ?
                    ""
                    :
                    <PostNavbar/>
                }
                <Footer/>
                <SearchView
                    isVisible = { isSearchViewVisible }
                    setUnvisible = { setSearchViewUnvisible }  
                />
            </>
            )
    }
    return PageLayoutComponent;
}
export default PageLayout;