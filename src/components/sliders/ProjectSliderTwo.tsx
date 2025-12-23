"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay, EffectFade, Pagination} from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import Image from "next/image";
import projectImg2 from "@/assets/img/project-slider/2-1.jpg";
import projectImg3 from "@/assets/img/project-slider/2-2.jpg";
import projectImg4 from "@/assets/img/project-slider/2-4.jpg";

export default function ProjectSliderTwo() {
    return (
        <div className="project-slider-wrap-two">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade, Pagination]}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={3000}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        pagination: { clickable: true },
                    },
                    575: {
                        slidesPerView: 1,
                        navigation: false,
                    },
                    767: {
                        slidesPerView: 3,
                        navigation: false,
                    },
                    990: {
                        slidesPerView: 3,
                        loop: true,
                    },
                    1200: {
                        slidesPerView: 3,
                        loop: true,
                    },
                }}
                className="project-img-slider-two owl-carousel"
            >
                <SwiperSlide className="project-img">
                    <Image src={projectImg2} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="project-img">
                    <Image src={projectImg3} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="project-img">
                    <Image src={projectImg4} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="project-img">
                    <Image src={projectImg2} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="project-img">
                    <Image src={projectImg3} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="project-img">
                    <Image src={projectImg4} alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}