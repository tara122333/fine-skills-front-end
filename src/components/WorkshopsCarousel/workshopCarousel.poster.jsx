import React from "react";
import settings from "../../config/SlideSettings";
import HeroSlider from 'react-slick';
import Slider from "react-slick";
import { WorkShopBanner } from "../../config/home/home.config";
import WorkShopPoster from "../Workshops/poster.workshop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkShopsCarouselPoster = () =>{
    return(
        <>
                <Slider {...settings} className="w-full h-full" >
                    {
                        WorkShopBanner.map((image)=>(
                            <WorkShopPoster img={image} />
                        ))
                    }
                </Slider>
        </>
    );
}

export default WorkShopsCarouselPoster;