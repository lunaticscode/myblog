import React, {useEffect, useState} from 'react';
const { _SearchViewLayout, _SearchViewInput, _SearchViewCloseBtn } = require('../styled/components/_SearchView')

interface SearchViewProps {
    isVisible: boolean;
    setUnvisible: () => void;
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
                <_SearchViewCloseBtn
                     onClick={ () => setUnvisible() }
                >
                    닫기
                </_SearchViewCloseBtn>
                <_SearchViewInput
                    placeholder={ "검색어를 입력해주세요." }
                    active = { ( inputValue.length ) ? true : false }
                    onChange={ onChangeSearchInput }
                />
        </_SearchViewLayout>
    )
}
export default SearchView;