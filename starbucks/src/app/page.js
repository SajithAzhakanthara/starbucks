import Image from "next/image";
import Link from "next/link";
import KnowMore from "@/app/components/know-more/KnowMore";
import HomeBannerSlider from "@/app/components/home-banner-slider/HomeBannerSlider";
import ImageRound from "./components/image-round/ImageRound";
import RecommendedItems from "./components/recommended-items/RecommendedItems";
import { MainMenuData } from "@/app/Data/MainMenuData";
import {RecommendedItemsData} from "@/app/Data/RecommendedItemsData";
import "@/app/Homepage.scss";

export default function Home() {
  return (
    <main>
      <div>
        <KnowMore/>
      </div>
      <section className="mt-3">
        <div className="container">
          <HomeBannerSlider/>
        </div>
      </section>
      <section className="">
        <div className="container mt-5">
            <h4 className="mb-4 fs-md-24px fs-16px text-green-800 fw-600 text-lg-start text-center">Handcrafted Curations</h4>
            <div className="d-flex flex-wrap align-items-center justify-content-between">
               {
                MainMenuData.map((item,index)=>{
                  return(
                    <div className="mb-3 main-menu-items" key={index}>
                        <Link className="d-block text-decoration-none" href={item.href}>
                          <div className="text-lg-start text-center">
                            <ImageRound image={item.image}/>
                          </div>
                          <h4 className="mb-0 mt-3 fs-14px fw-500 text-center text-black">{item.title}</h4>
                        </Link>
                    </div>
                  )
                })
               }
            </div>
        </div>
      </section>
      <section className="bg-green-100 mt-5">
        <div className="container py-5">
          <h4 className="fw-600 text-green-800 fs-md-24px fs-16px">Barista Recommends</h4>
          <div className="mt-4">
            <div className="row">
              {
                RecommendedItemsData.map((item,index) => {
                  return(
                    <div className="col-lg-4 col-md-6 mb-3" key={index}>
                      <RecommendedItems
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-100 mt-5 py-5">
        <div className="container">
          <h4 className="mb-4  fs-md-24px fs-16px text-green-800 fw-600">Handcrafted Curations</h4>
          <div className="p-4 rounded-2 position-relative overflow-hidden" style={{backgroundImage:'url(/bg/ICW_Live_Event_Day5_41f11ca3d2.jpg)'}}>
              <div className="position-relative" style={{zIndex:'1'}}>
                <span className="text-green-500 fs-10px d-inline-block px-3 py-1 bg-white rounded-4">Coffee culture</span>
                <h4 className="text-white fw-600 fs-28px mt-100px">Art & Science Of Coffee Brewing</h4>
                <p className="text-white fs-12px fw-200"> Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
                <Link href="#" className="text-green-800 fs-12px fw-400 px-3 py-2 rounded-4 bg-white border-0 d-inline-block text-decoration-none">Learn more</Link>
              </div>
              <div className="position-absolute" style={{top:'0',left:'0',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,.5)'}}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
