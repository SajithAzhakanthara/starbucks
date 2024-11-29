import Image from "next/image";
import KnowMore from "@/app/components/know-more/KnowMore";
import HomeBannerSlider from "@/app/components/home-banner-slider/HomeBannerSlider";

export default function Home() {
  return (
    <main>
      <div>
        <KnowMore/>
      </div>
      <div className="mt-3">
        <div className="container">
          <HomeBannerSlider/>
        </div>
      </div>
    </main>
  );
}
