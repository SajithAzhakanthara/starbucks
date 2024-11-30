import "./HeaderMobile.scss";
import Link from "next/link";
import Image from "next/image";

const HeaderMobile = () => {
    return(
        <div style={{height:'150px',backgroundImage:'url(/bg/2640_1127_1_c6e195f6ff.png)',backgroundPosition:'center',backgroundSize:'cover'}}>
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between pt-3">
                    <div>
                        <Link href="#">
                            <Image src="/store-icon.svg" width="24" height="24" alt="store-icon"/>
                        </Link>
                    </div>
                    <div>
                        <Link href="#">
                            <Image src="/account_thick.svg" width="24" height="24" alt="account-icon"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile;