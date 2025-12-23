import Image from "next/image";
import aboutImg21 from "@/assets/img/about/2-1.jpg";

export default function AboutSectionFour() {
    return (
        <div id="about-page" className="about-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 order-2 order-md-1">
                        <div className="about-content-wrap">
                            <p>At <b>Florz Flooring</b>, we are passionate about transforming spaces with high-quality
                                flooring solutions that blend style, durability, and functionality. With over a decade
                                of experience, our team specializes in a wide range of flooring services, including
                                hardwood, laminate, vinyl, and tile installations for both residential and commercial
                                properties.</p>
                            <p>We take pride in our attention to detail, from helping you select the perfect materials
                                to ensuring expert installation and long-lasting results. Whether you’re looking to
                                renovate a single room or update your entire property, Florz Flooring is dedicated to
                                delivering top-notch service, on-time project completion, and complete customer
                                satisfaction.</p>
                            <p>From custom designs to flooring repairs and refinishing, Florz Flooring is your trusted
                                partner in creating beautiful, durable floors that enhance the value of your home or
                                business.</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-md-2">
                        <div className="about-img-wrap">
                            <Image src={aboutImg21} alt="" className="h-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}