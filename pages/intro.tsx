import React, {useEffect, useState} from 'react';
import PageLayout from '../components/PageLayout';
type IntroPageProps = {
    test: string;
}
const Intro : React.FC <IntroPageProps> = ( props ) => {
        
        return (
            <div>Intro</div>
        )
}

export default PageLayout( Intro );