'use client'
import Link from "next/link";
import {useContext } from "react";
import HeaderMenuContext from "@/app/context/header-menu-context/HeaderMenuContext";
import "./header-menu.scss";



const HeaderMenu = () => {

    const {headerMenuData} = useContext(HeaderMenuContext);



    return(
        <ul className="d-flex align-items-center m-0 header-menu" style={{listStyle:'none'}}>
            {
                headerMenuData.map((item,index) => {
                    return(
                        <li className="px-3" key={index}>
                            <Link className="position-relative d-inline-block text-black fs-14px"  href={item.link}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default HeaderMenu;