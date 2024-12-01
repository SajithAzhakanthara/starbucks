import "./page.scss";
import OrderItem from "../components/order-item/OrderItem";
import {OrderItemData} from "@/app/Data/OrderItemData";
import DatabaseErrorModal from "@/app/components/database-error-modal/DatabaseErrorModal";


const OrderPage = () => {
    return(
        <main>
            <section className="py-5 bg-green-800">
                <div className="container">
                    <h4 className="fs-24px fw-500 text-white m-0">Order</h4>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {
                            OrderItemData.map((item,index)=>{
                                return(
                                    <div className="col-lg-4 col-md-6 mb-3" key={index}>
                                        <div>
                                            <OrderItem
                                            image={item.image}
                                            name={item.name}
                                            description={item.description}
                                            price={item.price}
                                            quantity={item.quantity}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <DatabaseErrorModal/>
        </main>
    )
}

export default OrderPage;