import React, {useEffect, useState} from 'react';
const { _SearchViewLayout, _SearchViewInput } = require('../styled/components/_SearchView')

interface SearchViewProps {
    isVisible: boolean;
    setUnvisible: () => void;
}

const SearchViewCloseBtnStyle:object = {
    color:'white', position:'absolute', top:'0px', left:'0px',
}

const SearchView:React.FC<SearchViewProps> = ( { isVisible, setUnvisible } ) => {

    const [ inputValue, setInputValue ] = useState<string>("")
    //const [ isActive, setIsActive ] = useState<boolean>(false);
    
    useEffect( () => {
        console.log(isVisible);
    }, [isVisible] )

    const onChangeSearchInput = ( e: any ) => {
        const value = e.target.value;
        setInputValue( value );
    }   

    return(
        <_SearchViewLayout
            visible = { isVisible }
        >
                <div
                    style={SearchViewCloseBtnStyle}
                    onClick={ () => setUnvisible() }
                >
                    닫기
                </div>
                <_SearchViewInput
                    placeholder={ "검색어를 입력해주세요." }
                    active = { ( inputValue.length ) ? true : false }
                    onChange={ onChangeSearchInput }
                />
        </_SearchViewLayout>
    )
}
export default SearchView;