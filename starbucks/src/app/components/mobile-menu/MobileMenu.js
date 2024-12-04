'use client'
import "./MobileMenu.scss";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "../searchbar/Searchbar";
import { useContext } from "react";
import HeaderMenuFunctionContext from "@/app/context/header-menu-function-context/HeaderMenuFunctionContext";

const MobileMenu = () => {

    const {menu,setMenu} = useContext(HeaderMenuFunctionContext);

    console.log()

    const OnClickHandler = () => {
        setMenu(false);
    }

    return(
        <div className={`mobile-menu p-4 bg-white shadow-sm position-fixed ${menu == true && 'show'}`} style={{zIndex:'2',top:'0',height:'100%',maxWidth:'500px',width:'100%'}}>
            <span className="position-absolute" role="button" style={{top:'20px',right:'20px'}} onClick={OnClickHandler}>
                <i className="bi bi-x-lg fs-20px text-green-800 fw-500"></i>
            </span>
            <div className="text-center">
                <Image src="/logo.png" alt="logo" width="100" height="100" style={{width:'60px',height:'60px'}}/>
            </div>
            <div className="mt-4">
                <Searchbar placeholder="Looking for somthing special"/>
            </div>
            <ul className="list-style-none m-0 p-0 mt-4">
                <li className="text-center mb-3">
                    <Link className="fs-14px fw-500 text-green-800 text-decoration-none" href="/">Home</Link>
                </li>
                <li className="text-center mb-3">
                    <Link className="fs-14px fw-500 text-green-800 text-decoration-none" href="/gift">Gift</Link>
                </li>
                <li className="text-center mb-3">
                    <Link className="fs-14px fw-500 text-green-800 text-decoration-none" href="/order">Order</Link>
                </li>
                <li className="text-center mb-3">
                    <Link className="fs-14px fw-500 text-green-800 text-decoration-none" href="/authentication">Pay</Link>
                </li>
                <li className="text-center mb-3">
                    <Link className="fs-14px fw-500 text-green-800 text-decoration-none" href="/store">Store</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu;