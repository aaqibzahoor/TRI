"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {EffectFade, Navigation, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Link from "next/link";

export default function HeroSectionTwo() {
    return (
        <div id="home-2" className="homepage-slides">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".owl-next",
                    prevEl: ".owl-prev",
                }}
                speed={500}
                className="owl-carousel"
            >
                <SwiperSlide className="single-slide-item d-flex align-items-center hm2-banner-bg-3">
                    <div className="overlay-5"></div>
                    <div className="hero-area-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-lg-12 col-md-12 wow fadeInUp animated" data-wow-delay=".2s">
                                    <div className="section-title">
                                        <h6 className="text-white">Premium Flooring</h6>
                                        <h1 className="text-white"><span>Creating</span> Beautiful Spaces, <br/> One Floor
                                            At A Time</h1>
                                    </div>
                                    <p className="text-white">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                                        lacus. Etiam molestie justo neque, <br/> in convallis massa tempus in.</p>
                                    <Link href="/services" className="white-btn mt-40">Our Services <i
                                        className="fa-light fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-slide-item d-flex align-items-center hm2-banner-bg-4">
                    <div className="overlay-5"></div>
                    <div className="hero-area-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-lg-12 col-md-12 wow fadeInUp animated" data-wow-delay=".2s">
                                    <div className="section-title">
                                        <h6 className="text-white">Duraable Design</h6>
                                        <h1 className="text-white"><span>Stylish</span>, Durable Flooring <br/> for Every
                                            Room.</h1>
                                    </div>
                                    <p className="text-white">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                                        lacus. Etiam molestie justo neque, <br/> in convallis massa tempus in.</p>
                                    <Link href="/services" className="white-btn mt-40">Our Services <i
                                        className="fa-light fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-slide-item d-flex align-items-center hm2-banner-bg-5">
                    <div className="overlay-5"></div>
                    <div className="hero-area-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-lg-12 col-md-12 wow fadeInUp animated" data-wow-delay=".2s">
                                    <div className="section-title">
                                        <h6 className="text-white">Duraable Design</h6>
                                        <h1 className="text-white">Your <span>Dream</span> Floors, <br/> Our Expert
                                            Installation</h1>
                                    </div>
                                    <p className="text-white">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                                        lacus. Etiam molestie justo neque, <br/> in convallis massa tempus in.</p>
                                    <Link href="/services" className="white-btn mt-40">Our Services <i
                                        className="fa-light fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev z-3"><i className="las la-arrow-left"></i>
                </button>
                <button type="button" role="presentation" className="owl-next z-3"><i className="las la-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}