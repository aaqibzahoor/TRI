"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import quoteImg from "@/assets/img/quote.png";

export default function TestimonialOneSlider() {
    return (
        <div className="row">
            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={3000} // matches smartSpeed
                autoplay={false} // since autoplay: false
                className="testimonial-one owl-carousel"
            >

                <SwiperSlide className="single-testimonial-item">
                    <div className="testimonial-quote">
                        <Image src={quoteImg} alt="" className="h-auto"/>
                    </div>
                    <div className="testimonial-content">
                        <div className="testimonial-text">
                            <p>I couldn’t be happier with my new hardwood floors from Florz Flooring! The team
                                was professional, attentive, and guided me through every step of the process.
                                The installation was seamless, and the quality of the work is outstanding.
                                Highly recommend!</p>
                        </div>
                        <div className="testimonial-author">
                            <h5>James Clark</h5>
                            <span>CEO, Alfa Inc.</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial-item">
                    <div className="testimonial-quote">
                        <Image src={quoteImg} alt="" className="h-auto"/>
                    </div>
                    <div className="testimonial-content">
                        <div className="testimonial-text">
                            <p>I couldn’t be happier with my new hardwood floors from Florz Flooring! The team
                                was professional, attentive, and guided me through every step of the process.
                                The installation was seamless, and the quality of the work is outstanding.
                                Highly recommend!</p>
                        </div>
                        <div className="testimonial-author">
                            <h5>James Clark</h5>
                            <span>CEO, Alfa Inc.</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}