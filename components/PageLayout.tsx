import React, {ReactChildren, useEffect, useState} from 'react';

import Header from './Header';

function PageLayout <P> (    
    WrappedComponent: React.ComponentType<P>
){
    const PageLayoutComponent = ( props: P ) => {
        return( 
                <>  
                     <Header/>
                     <WrappedComponent {...props} />
                </>
           
            )
    }
    return PageLayoutComponent;
}
export default PageLayout;