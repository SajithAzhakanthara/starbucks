import "./RecommendedItems.scss";
import Image from "next/image";

const RecommendedItems = (props) => {
    return(
        <div className="rounded border bg-white p-3">
            <div className="d-flex align-items-top gap-3">
                <div>
                    <Image className="rounded-2 overflow-hidden object-fit-cover" width="80" height="80" src={props.image} alt="recommended-item-image"/>
                </div>
                <div>
                    <Image src="/recommended-items/veg.svg" width="16" height="16" alt="veg-icon"/>
                    <h4 className="mt-1 fw-500 text-black fs-14px mb-1">{props.title}</h4>
                    <p className="fs-10px fw-200 text-gray-500 mt-1 mb-0">{props.description}</p>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <div>
                    <h4 className="m-0 fs-14px fw-600 text-green-800">{props.price}</h4>
                </div>
                <div>
                    <button className="text-capitalize fs-12px fw-400 text-white rounded-4 border-0 bg-green-800 py-1 px-3">Add item</button>
                </div>
            </div>
        </div>
    )
}

export default RecommendedItems