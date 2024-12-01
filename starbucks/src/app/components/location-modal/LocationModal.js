import "./LocationModal.scss";
import Image from "next/image";

const LocationModal = () => {
    return(
        <div className="modal fade" id="location-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{width:'385px'}}>
                <div className="modal-content">
                <div className="modal-body p-5 bg-gray-100 rounded-5 position-relative">
                    <Image className="position-absolute" src="/modal/Group566.svg" width="45" height="50" style={{top:'0',left:'0'}} alt="modal-image"/>
                    <Image className="position-absolute" src="modal/Group45.svg" width="45" height="50" style={{bottom:'0',right:'0'}} alt="modal-image"/>
                    <p className="fs-16px text-center text-green-800 fw-400">Please turn on Location Service from Browser settings to allow "Starbucks" to determine your location.</p>
                    <div className="text-center">
                        <button className="py-2 px-3 bg-green-800 text-white fs-14px fw-200 border-0 rounded-4" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LocationModal;