import GiftItem from "@/app/components/gift-item/GiftItem";
import { GiftItemData } from "../Data/GiftItemData";


const GiftPage = () => {
    return(
        <main>
            <section className="py-5 bg-green-800">
                <div className="container">
                    <h4 className="fs-24px fw-500 text-white m-0">Gift</h4>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {
                            GiftItemData.map((item,index)=>{
                                return(
                                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                        <div>
                                            <GiftItem
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default GiftPage;