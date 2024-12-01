import "./OrderItem.scss";
import Image from "next/image";

const OrderItem = (props) => {
    return(
        <div className="bg-gray-100 rounded-2 border shadow-sm p-3">
            <div className="d-flex gap-3">
                <div>
                    <Image className="rounded-circle" src={props.image} width="96" height="96" alt="order-item"/>
                </div>
                <div>
                    <h4 className="mb-1 fs-14px fw-500 text-green-800">{props.name}</h4>
                    <p className="mb-1 fs-12px text-gray-500 fa-200">{props.quantity}</p>
                    <p className="fs-12px fw-400">{props.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h4 className="fs-16px fw-500 text-green-800 m-0">{props.price}</h4>
                        </div>
                        <div>
                            <button className="fs-12px fw-300 text-white bg-gray-600 rounded-4 px-3 py-2 border-0" data-bs-toggle="modal" data-bs-target="#database-error-modal">Add item</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;
