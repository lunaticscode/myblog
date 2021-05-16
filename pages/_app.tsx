import React, {useEffect, useState } from 'react';

const App : React.FC = ( {  } ) => {
    
    const [testState, setTestState] = useState<string>("init")
    
    return(
        <div>myblog - {testState}</div>
    )
}
export default App;