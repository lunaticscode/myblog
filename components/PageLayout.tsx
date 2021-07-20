import React, { useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
const Header = dynamic( async () => await import('./Header'), {ssr: false} );
const MobileHeader = dynamic( async () => await import('./MobileHeader'), {ssr: false} );
import MobileMenuList from './MobileMenuList';
//const MobileMenuList = dynamic(async() => await import ('./MobileMenuList'), {ssr: false});
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
        const [ isMobileMenuListVisible, setIsMobileMenuListVisible ] = useState<boolean>(false);
        
        useEffect( () => {
            console.log( location.pathname );
            setNowPath( location.pathname );
        }, [])
        
        const isMobile = useMediaQuery({
            query: `(max-width:${sizes.phone}px)`,
        })

        const setSearchViewVisible = () => {
            SetIsSearchViewVisible( true );
        }

        const setSearchViewUnvisible = () => {
            SetIsSearchViewVisible( false );
        }
        const onClickMobileMenu = () => { setIsMobileMenuListVisible(true) }

        return( 
            <>
                <GlobalStyle/>
                {
                    ( isMobile )
                    ?
                    <>
                    <MobileHeader 
                        onClickMobileMenu = { onClickMobileMenu } 
                    />
                        {
                            (isMobileMenuListVisible)
                            ?
                            <MobileMenuList/>
                            :""
                        }
                    </>
                    :
                    <Header 
                        setSearchViewVisible = { setSearchViewVisible } 
                    />
                }
               
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

                {
                    ( isSearchViewVisible )
                    ?
                    <SearchView
                        isVisible = { isSearchViewVisible }
                        setUnvisible = { setSearchViewUnvisible }  
                    />
                    :
                    ""
                }


               
            </>
            )
    }
    return PageLayoutComponent;
}
export default PageLayout;