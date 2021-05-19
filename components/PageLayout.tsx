import React, {ReactChildren, useEffect, useState} from 'react';

import Header from './Header';
import Footer from './Footer';

function PageLayout <P> ( WrappedComponent: React.ComponentType<P> ) {
    const PageLayoutComponent = ( props: P ) => {
        return( 
                <>  
                     <Header/>
                     <WrappedComponent {...props} />
                     <Footer/>
                </>
            )
    }
    return PageLayoutComponent;
}
export default PageLayout;