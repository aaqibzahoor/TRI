"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import quoteGray from "@/assets/img/quote-gray.png";
import testimonialImg21 from "@/assets/img/testimonial/2-1.jpg";
import testimonialImg22 from "@/assets/img/testimonial/2-2.jpg";
import testimonialImg23 from "@/assets/img/testimonial/2-3.jpg";

export default function TestimonialTwoSlider() {
    return (
        <div className="row mt-60">
            <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                autoplay={false}
                speed={3000}
                slidesPerView={1}
                spaceBetween={50}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                        navigation: false,
                    },
                    767: {
                        slidesPerView: 2,
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
                className="testimonial-two owl-carousel"
            >
                <SwiperSlide className="single-testimonial-wrap">
                    <div className="quote-wrap">
                        <Image src={quoteGray} alt="" className="h-auto"/>
                    </div>
                    <div className="testimonial-text">
                        <p>I gained so much confidence in my ability to connect and deepen my relationships with
                            people. It’s amazing how much easier it has been to meet new people and create
                            instant connections. I have the exact same personality, the only thing that has
                            changed is my mindset and a few behaviors.</p>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-img">
                            <Image src={testimonialImg21} alt="" className="h-auto"/>
                        </div>
                        <div className="author-title">
                            <h6>James Clark</h6>
                            <p>CEO - Atlas</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial-wrap">
                    <div className="quote-wrap">
                        <Image src={quoteGray} alt="" className="h-auto"/>
                    </div>
                    <div className="testimonial-text">
                        <p>I had an excellent experience with Florz Flooring. From the initial consultation to
                            the final walk-through, their team was dedicated to providing top-notch service. My
                            laminate floors look amazing, and I appreciate their attention to detail. The team
                            was professional, attentive, and guided me Thank you, Florix!</p>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-img">
                            <Image src={testimonialImg22} alt="" className="h-auto"/>
                        </div>
                        <div className="author-title">
                            <h6>Jenifer Lopez</h6>
                            <p>Manager - Beacon</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial-wrap">
                    <div className="quote-wrap">
                        <Image src={quoteGray} alt="" className="h-auto"/>
                    </div>
                    <div className="testimonial-text">
                        <p>Florix Flooring transformed my outdated kitchen with beautiful tile flooring. They
                            helped me choose the perfect design and color that matched my vision. The
                            installation was quick and efficient, and the team was friendly and knowledgeable.
                            I’ll definitely use them for future projects!</p>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-img">
                            <Image src={testimonialImg23} alt="" className="h-auto"/>
                        </div>
                        <div className="author-title">
                            <h6>Michael Carrick</h6>
                            <p>CEO - Alfa Inc.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial-wrap">
                    <div className="quote-wrap">
                        <Image src={quoteGray} alt="" className="h-auto"/>
                    </div>
                    <div className="testimonial-text">
                        <p>I gained so much confidence in my ability to connect and deepen my relationships with
                            people. It’s amazing how much easier it has been to meet new people and create
                            instant connections. I have the exact same personality, the only thing that has
                            changed is my mindset and a few behaviors.</p>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-img">
                            <Image src={testimonialImg21} alt="" className="h-auto"/>
                        </div>
                        <div className="author-title">
                            <h6>James Clark</h6>
                            <p>CEO - Atlas</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial-wrap">
                    <div className="quote-wrap">
                        <Image src={quoteGray} alt="" className="h-auto"/>
                    </div>
                    <div className="testimonial-text">
                        <p>I had an excellent experience with Florz Flooring. From the initial consultation to
                            the final walk-through, their team was dedicated to providing top-notch service. My
                            laminate floors look amazing, and I appreciate their attention to detail. The team
                            was professional, attentive, and guided me Thank you, Florix!</p>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-img">
                            <Image src={testimonialImg22} alt="" className="h-auto"/>
                        </div>
                        <div className="author-title">
                            <h6>Jenifer Lopez</h6>
                            <p>Manager - Beacon</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial-wrap">
                    <div className="quote-wrap">
                        <Image src={quoteGray} alt="" className="h-auto"/>
                    </div>
                    <div className="testimonial-text">
                        <p>Florix Flooring transformed my outdated kitchen with beautiful tile flooring. They
                            helped me choose the perfect design and color that matched my vision. The
                            installation was quick and efficient, and the team was friendly and knowledgeable.
                            I’ll definitely use them for future projects!</p>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-img">
                            <Image src={testimonialImg23} alt="" className="h-auto"/>
                        </div>
                        <div className="author-title">
                            <h6>Michael Carrick</h6>
                            <p>CEO - Alfa Inc.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}