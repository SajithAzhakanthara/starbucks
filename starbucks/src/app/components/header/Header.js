import Image from "next/image";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Searchbar from "../searchbar/Searchbar";

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between py-3">
                    <div className="d-flex align-items-center gap-4">
                        <div>
                            <Image src="/logo.png" height="40" width="40" alt="logo"/>
                        </div>
                        <div>
                            <nav>
                                <HeaderMenu/>
                            </nav>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <div>
                            <Searchbar placeholder="Looking for somthing specific"/>
                        </div>
                        <div>
                            <Image src="/account_thin.svg" width="32" height="32" alt="account"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;