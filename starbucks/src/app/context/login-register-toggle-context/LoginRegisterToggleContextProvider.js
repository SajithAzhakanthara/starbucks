"use client"
import { useState } from "react";
import LoginRegisterToggleContext from "./LoginRegisterToggleContext";

const LoginRegisterToggleContextProvider = ({children}) => {

    const [login, setLogin] = useState(true)

    return(
        <LoginRegisterToggleContext.Provider value={{login, setLogin}}>
            {children}
        </LoginRegisterToggleContext.Provider>
    );
}

export default LoginRegisterToggleContextProvider;