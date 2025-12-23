"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import projectSliderImg1 from "@/assets/img/project-slider/1.jpg";
import projectSliderImg2 from "@/assets/img/project-slider/2.jpg";
import projectSliderImg3 from "@/assets/img/project-slider/3.jpg";
import projectSliderImg4 from "@/assets/img/project-slider/4.jpg";
import projectSliderImg5 from "@/assets/img/project-slider/5.jpg";

export default function ProjectSliderSection() {
    return (
        <div className="project-slider-wrap">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={3000}
                slidesPerView={3}
                spaceBetween={0}
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
                className="project-img-slider owl-carousel"
            >
                <SwiperSlide className="project-img">
                    <Image src={projectSliderImg1} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="project-img">
                    <Image src={projectSliderImg2} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="project-img">
                    <Image src={projectSliderImg3} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="project-img">
                    <Image src={projectSliderImg4} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="project-img">
                    <Image src={projectSliderImg5} alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}