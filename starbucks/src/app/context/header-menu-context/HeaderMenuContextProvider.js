'use client'

import React,{useState} from 'react';
import HeaderMenuContext from './HeaderMenuContext';
import { HeaderMenuData } from "@/app/Data/HeaderMenuData";

const HeaderMenuContextProvider = ({children}) => {

    const [ headerMenuData, setHeaderMenuData ] = useState(HeaderMenuData);

    return  (
        <HeaderMenuContext.Provider value={{headerMenuData, setHeaderMenuData}}>
            {children}
        </HeaderMenuContext.Provider>
    )
}

export default HeaderMenuContextProvider;