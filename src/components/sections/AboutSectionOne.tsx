import Image from "next/image";
import aboutImg1 from "@/assets/img/about/1.jpg";
import Link from "next/link";

export default function AboutSectionOne() {
    return (
        <div id="about-1" className="about-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">10 Decades of Expertise in Quality Flooring</h2>
                            <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">We provide professional
                                flooring installation, repair, refinishing, maintenance, and custom design services for
                                homes and businesses.</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
                        <Link href="/about" className="bordered-btn">About Us <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img-wrap wow img-custom-anim-left" data-wow-delay=".3s">
                            <Image src={aboutImg1} alt="" className="h-auto"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="cp-custom-accordion">
                            <div className="accordions" id="accordionAbout">
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="aboutOne">
                                        <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            History
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="aboutOne" data-bs-parent="#accordionAbout">
                                        <div className="accordion-body">
                                            At Florix Flooring, we are passionate about transforming spaces with
                                            high-quality flooring solutions that blend style, durability, and
                                            functionality. With over a decade of experience, our team specializes in a
                                            wide range of flooring services, including hardwood, laminate, vinyl, and
                                            tile installations for both residential and commercial properties.
                                            We take pride in our attention to detail, from helping you select the
                                            perfect materials to ensuring expert installation and long-lasting results.
                                            Whether you're looking to renovate a single room or update your entire
                                            property, Florix Flooring is dedicated to delivering top-notch service,
                                            on-time project completion, and complete customer satisfaction.
                                            From custom designs to flooring repairs and refinishing.Florix Flooring is
                                            your trusted partner in creating beautiful, durable floors that enhance the
                                            value of your home or business.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="aboutTwo">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            Mission
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="aboutTwo" data-bs-parent="#accordionAbout">
                                        <div className="accordion-body">
                                            Flooring installation for a company like Florix typically involves the
                                            process of laying down flooring materials in residential, commercial, or
                                            industrial spaces. Florix could provide a variety of flooring options, such
                                            as hardwood, laminate, tile, carpet, or vinyl, each with its own
                                            installation techniques and considerations.
                                            We take pride in our attention to detail, from helping you select the
                                            perfect materials to ensuring expert installation and long-lasting results.
                                            Whether you're looking to renovate a single room or update your entire
                                            property, Florix Flooring is dedicated to delivering top-notch service,
                                            on-time project completion, and complete customer satisfaction.
                                            From custom designs to flooring repairs and refinishing.Florix Flooring is
                                            your trusted partner in creating beautiful, durable floors that enhance the
                                            value of your home or business.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="aboutThree">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            Vision
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="aboutThree" data-bs-parent="#accordionAbout">
                                        <div className="accordion-body">
                                            Flooring installation for a company like Florix typically involves the
                                            process of laying down flooring materials in residential, commercial, or
                                            industrial spaces. Florix could provide a variety of flooring options, such
                                            as hardwood, laminate, tile, carpet, or vinyl, each with its own
                                            installation techniques and considerations.
                                            We take pride in our attention to detail, from helping you select the
                                            perfect materials to ensuring expert installation and long-lasting results.
                                            Whether you're looking to renovate a single room or update your entire
                                            property, Florix Flooring is dedicated to delivering top-notch service,
                                            on-time project completion, and complete customer satisfaction.
                                            From custom designs to flooring repairs and refinishing.Florix Flooring is
                                            your trusted partner in creating beautiful, durable floors that enhance the
                                            value of your home or business.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}