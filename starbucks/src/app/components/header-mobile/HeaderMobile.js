'use client'

import "./HeaderMobile.scss";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import HeaderMenuFunctionContext from "@/app/context/header-menu-function-context/HeaderMenuFunctionContext";



const HeaderMobile = () => {

    const {setMenu} = useContext(HeaderMenuFunctionContext);

    const OnClickHandler = () => {
        setMenu(true)
    }






    return(
        <div style={{height:'150px',backgroundImage:'url(/bg/2640_1127_1_c6e195f6ff.png)',backgroundPosition:'center',backgroundSize:'cover'}}>
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between pt-3">
                    <div>
                        <Link href="#">
                            <Image src="/store-icon.svg" width="24" height="24" alt="store-icon"/>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <Link href="#">
                            <Image src="/account_thick.svg" width="24" height="24" alt="account-icon"/>
                        </Link>
                        <button className="bg-transparent border-0 p-0" onClick={OnClickHandler}>
                                <i className="bi bi-list fs-24px text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile;