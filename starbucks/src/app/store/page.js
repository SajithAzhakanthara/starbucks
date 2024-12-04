import "./page.scss";
import Searchbar from "../components/searchbar/Searchbar";
import Image from "next/image";
import DatabaseErrorModal from "../components/database-error-modal/DatabaseErrorModal";

const StorePage = () => {
    return(
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="p-4 bg-green-800">
                            <div data-bs-toggle="modal" data-bs-target="#database-error-modal">
                                <Searchbar placeholder="Find a store near you"/>
                            </div>
                        </div>
                        <div>
                        <div className="px-5 text-center pt-5">
                            <Image className="image-responsive" src="/gpsOff.svg" width="220" height="220" alt="no-gps-image"/>
                        </div>
                        <div className="mt-4">
                           <h4 className="fs-16px mb-2 fw-400 text-center">Sorry! we can't seem to spot you.</h4> 
                           <p className="text-gray-500 fs-14px fw-300 m-0 text-center">Please enable your location to find the nearest Starbucks</p>
                        </div>
                        <div className="mt-4 text-center mb-5">
                            <button className="fs-12px fw-400 text-capitalize text-green-800 px-5 py-2 bg-white rounded-4" style={{border:'1px solid #0a3622'}} data-bs-toggle="modal" data-bs-target="#database-error-modal">Enter location manually</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15718.696132018931!2d76.27684838715818!3d9.961055000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sStarbucks!5e0!3m2!1sen!2sin!4v1733140950919!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <DatabaseErrorModal/>
        </div>
    )
}

export default StorePage;