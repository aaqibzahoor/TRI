"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Link from "next/link";

export default function HeroSectionOne() {
  return (
    <div id="home-1" className="homepage-slides ">
      <Swiper
        // modules={[Navigation, Autoplay, EffectFade]}
        // effect="fade"
        // loop={true}
        // autoplay={{
        //     delay: 4000,
        //     disableOnInteraction: false,
        // }}
        // navigation={{
        //     nextEl: ".owl-next",
        //     prevEl: ".owl-prev",
        // }}
        // speed={500}
        className="owl-carousel"
      >
        <SwiperSlide className="single-slide-item d-flex align-items-center banner-bg-1">
          <div className="overlay-4"></div>
          <div className="hero-area-content">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-xl-12 col-lg-12 col-md-10 wow fadeInUp animated"
                  data-wow-delay=".2s"
                >
                  <div className="section-title">
                    <h6 className="text-white">TRIPLE E WINDOWS</h6>
                    <h1 className="text-white">
                      <span>Premium Residential Window</span> Replacements &{" "}
                      <br /> Architectural Aluminium Windows
                    </h1>
                  </div>
                  <p className="text-white">
                    Melbourne-made. Architecturally crafted. Installed with
                    precision.
                  </p>
                  <p className="text-white">
                    Bring your home to life with high-quality aluminium window
                    replacements, bespoke architectural window designs, and
                    complete window packages for renovations and new builds.
                    Fabricated locally in Cranbourne and installed with
                    uncompromising attention to detail.
                  </p>
                  <div className="d-flex gap-2">
                    <Link href="#service-2" className="white-btn mt-40">
                      Our Services <i className="fa-light fa-arrow-right"></i>
                    </Link>
                    <Link href="#contact" className="white-btn mt-40">
                      Request a Quote{" "}
                      <i className="fa-light fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="single-slide-item d-flex align-items-center banner-bg-2">
                    <div className="overlay-5"></div>
                    <div className="hero-area-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-lg-12 col-md-10 wow fadeInUp animated"
                                     data-wow-delay=".2s">
                                    <div className="section-title">
                                        <h6 className="text-white">Duraable Design</h6>
                                        <h1 className="text-white"><span>Florix</span> Flooring: Your <br/>Foundation
                                            For
                                            Style </h1>
                                    </div>
                                    <p className="text-white">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                                        lacus. Etiam molestie justo neque, <br/> in convallis massa tempus in.</p>
                                    <Link href="/services" className="white-btn mt-40">Our Services <i
                                        className="fa-light fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
        {/* <SwiperSlide className="single-slide-item d-flex align-items-center banner-bg-3">
                    <div className="overlay-4"></div>
                    <div className="hero-area-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-lg-12 col-md-10 wow fadeInUp animated"
                                     data-wow-delay=".2s">
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
                </SwiperSlide> */}
      </Swiper>

      {/* <div className="owl-nav">
        <button type="button" role="presentation" className="owl-prev z-3">
          <i className="las la-arrow-left"></i>
        </button>
        <button type="button" role="presentation" className="owl-next z-3">
          <i className="las la-arrow-right"></i>
        </button>
      </div> */}
    </div>
  );
}
