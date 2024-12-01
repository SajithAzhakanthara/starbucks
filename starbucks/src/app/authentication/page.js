"use client"
import "./page.scss";
import Image from "next/image";
import {useContext} from 'react';
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import LoginRegisterToggleContext from "../context/login-register-toggle-context/LoginRegisterToggleContext";

const LoginPage = () => {

    const {login} = useContext(LoginRegisterToggleContext)

    return(
        <main>
            <section className="bg-gray-100 mb-1">
                <div className="container py-5">
                    <div className="mx-auto rounded-circle bg-white" style={{width:'110px',height:'110px',border:'3px solid #cba258'}}>
                        <Image src="/login-image.svg" width="102" height="102" alt="login-image"/>
                    </div>
                    {
                        login == true &&
                        <Login/>
                    }
                    {
                        login == false &&
                        <Register/>
                    }
                </div>
            </section>
        </main>
    )
}

export default LoginPage