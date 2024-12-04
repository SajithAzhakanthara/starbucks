'use client'
import {useState} from 'react';
import HeaderMenuFunctionContext from './HeaderMenuFunctionContext';

const HeaderMenuFunctionContextProvider = ({children}) => {

    const [menu, setMenu] = useState(false);

    return(
        <HeaderMenuFunctionContext.Provider value={{menu,setMenu}}>
            {children}
        </HeaderMenuFunctionContext.Provider>
    );
}

export default HeaderMenuFunctionContextProvider;