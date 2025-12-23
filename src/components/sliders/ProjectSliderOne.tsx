"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import projectImg1 from "@/assets/img/project/1.jpg";
import projectImg2 from "@/assets/img/project/2.jpg";
import projectImg3 from "@/assets/img/project/3.jpg";
import projectImg4 from "@/assets/img/project/4.jpg";
import projectImg5 from "@/assets/img/project/5.jpg";
import Link from "next/link";

export default function ProjectSliderOne() {
    return (
        <div className="row project-wrapper">
            <div className="project-slider">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{delay: 3000}}
                    navigation={{
                        nextEl: ".owl-next",
                        prevEl: ".owl-prev",
                    }}
                    pagination={{clickable: true}}
                    breakpoints={{
                        575: {
                            slidesPerView: 1,
                            navigation: false,
                            pagination: false,
                        },
                        767: {
                            slidesPerView: 2,
                            pagination: {clickable: true},
                        },
                        990: {
                            slidesPerView: 3,
                            pagination: false,
                        },
                        1200: {
                            slidesPerView: 3,
                            pagination: false,
                        },
                    }}
                    className=" owl-carousel"
                >
                    <SwiperSlide className="single-project-item">
                        <div className="project-bg">
                            <Image src={projectImg1} alt="" className="h-auto"/>
                        </div>
                        <div className="project-info">
                            <h6>Luxury Living Spaces</h6>
                            <Link href="/projects/details">Read More</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-project-item">
                        <div className="project-bg">
                            <Image src={projectImg2} alt="" className="h-auto"/>
                        </div>
                        <div className="project-info">
                            <h6>Urban Renovation</h6>
                            <Link href="/projects/details">Read More</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-project-item">
                        <div className="project-bg">
                            <Image src={projectImg3} alt="" className="h-auto"/>
                        </div>
                        <div className="project-info">
                            <h6>Family Friendly Flooring</h6>
                            <Link href="/projects/details">Read More</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-project-item">
                        <div className="project-bg">
                            <Image src={projectImg4} alt="" className="h-auto"/>
                        </div>
                        <div className="project-info">
                            <h6>Elegant Essentials</h6>
                            <Link href="/projects/details">Read More</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-project-item">
                        <div className="project-bg">
                            <Image src={projectImg5} alt="" className="h-auto"/>
                        </div>
                        <div className="project-info">
                            <h6>Timberland Revival</h6>
                            <Link href="/projects/details">Read More</Link>
                        </div>
                    </SwiperSlide>

                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev"><i className="las la-arrow-left"></i>
                        </button>
                        <button type="button" role="presentation" className="owl-next"><i className="las la-arrow-right"></i>
                        </button>
                    </div>
                </Swiper>

            </div>
        </div>
    )
}