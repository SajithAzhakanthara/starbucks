import "./home-banner-slider.scss";
import Link from "next/link";
import {HomeBannerData} from "@/app/Data/HomebannerData";

const HomeBannerSlider = () => {
    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide home-banner-slider">
                <div className="carousel-inner rounded-2 overflow-hidden">
                    {
                        HomeBannerData.map((item,index)=>{
                            return(
                                <div className={`carousel-item p-4 rounded-2 ${index == 0 && 'active'}`} key={index} style={{backgroundImage:`url(${item.background})`}}>
                                    <div className="d-flex justify-content-between align-items-md-end align-items-start flex-md-row flex-column">
                                        <div className="d-flex gap-4">
                                            <div>
                                                <img src={item.image} style={{width:'100px'}}/>
                                            </div>
                                            <div>
                                                <p className="fs-14px text-white fw-300 my-4">{item.textOne}</p>
                                                <h4 className="fs-20px fw-500 text-white mb-4">{item.textTwo}</h4>
                                                <p className="fs-14px text-white fw-300 mb-4">{item.textThree}</p> 
                                            </div>
                                        </div>
                                        <div>
                                            <Link href={item.href} className="d-inline-block px-3 py-2 fs-14px fw-400 bg-white rounded-4 text-green-800 text-decoration-none me-5 mb-4">Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">
                        <i className="bi bi-arrow-left text-green-800 fs-20px"></i>
                    </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">
                        <i className="bi bi-arrow-right text-green-800 fs-20px"></i>
                    </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HomeBannerSlider;