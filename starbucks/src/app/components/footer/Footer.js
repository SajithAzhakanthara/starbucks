import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <div className="bg-green-800 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-4">
                        <div>
                            <Image src="/logo.png" width="62" height="62" alt="footer-logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-3">
                        <div>
                            <h4 className="fs-18px fw-500 mb-3 text-white text-capitalize">About Us</h4>
                            <ul className="p-0 m-0 list-style-none">
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">About Us</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Coffee house</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Our company</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-3">
                        <div>
                            <h4 className="fs-18px fw-500 mb-3 text-white text-capitalize">Responsibility</h4>
                            <ul className="p-0 m-0 list-style-none">
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Diversity</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Community</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Ethical sourcing</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Environmental stewardship</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Learn more</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-3">
                        <div>
                            <h4 className="fs-18px fw-500 mb-3 text-white text-capitalize">Quick links</h4>
                            <ul className="p-0 m-0 list-style-none">
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Privacy Policy</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">FAQs</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Starbucks India Mobile App Terms of Use</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Customer Service</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Delivery</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Season's Gifting</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Loyalty Program Terms and Conditions</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Starbucks Rewards Day Offer</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Diwali Bonus Star Offer</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Beverage Subscription</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">Classics Combo Offer</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-3">
                        <div>
                            <h4 className="fs-18px fw-500 mb-3 text-white text-capitalize">Social media</h4>
                            <ul className="p-0 m-0 list-style-none d-flex align-items-center flex-wrap gap-4">
                                <li className="">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">
                                        <i className="bi bi-instagram fs-20px text-white"></i>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">
                                        <i className="bi bi-facebook fs-20px text-white"></i>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className="text-white fs-14px fw-200 text-decoration-none text-capitalize">
                                        <i className="bi bi-twitter fs-20px text-white"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-3">
                        <div>
                            <Link href="#" className="d-inline-block mb-2">
                                <img src="/appstoreiOS.png" alt="app-store-image"/>
                            </Link>
                            <Link href="#" className="d-inline-block">
                                <img src="/appstoreAndroid.png" alt="play-store-image"/>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-sm-center align-items-start flex-sm-row flex-column justify-content-sm-between justify-content-start py-2" style={{borderTop:'1px solid #ddd'}}>
                    <div>
                        <ul className="list-style-none m-0 p-0 d-flex align-items-sm-center flex-sm-row flex-column align-items-start">
                            <li className="pe-4">
                                <Link href="#" className="fs-12px text-white text-decoration-none fw-200">Web Accessiblity</Link>
                            </li>
                            <li className="pe-4">
                                <Link href="#" className="fs-12px text-white text-decoration-none fw-200">Privacy Statement</Link>
                            </li>
                            <li className="pe-4">
                                <Link href="#" className="fs-12px text-white text-decoration-none fw-200">Terms of Use</Link>
                            </li>
                            <li className="pe-4">
                                <Link href="#" className="fs-12px text-white text-decoration-none fw-200">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="m-0 fs-10px text-white fw-100">© 2024 Starbucks Coffee Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;