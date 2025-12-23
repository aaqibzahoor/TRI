import Image from "next/image";
import serviceImg1 from "@/assets/img/service/1.jpg";
import serviceImg2 from "@/assets/img/service/2.jpg";
import serviceImg3 from "@/assets/img/service/3.jpg";
import serviceImg4 from "@/assets/img/service/4.jpg";
import Link from "next/link";

export default function ServiceSectionOne() {
    return (
        <div id="service-1" className="service-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Flooring Installation for <br/> Homes and Businesses
                            </h2>
                            <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">We provide professional
                                flooring installation, repair, refinishing, maintenance, and custom design services for
                                homes and businesses.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-5 text-md-end">
                        <Link href="/services" className="bordered-btn">View All Services <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row service-wrapper">

                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                        <div className="single-service-item">
                            <Image src={serviceImg1} alt="" className="h-auto"/>
                            <div className="service-info-wrap">
                                <div className="service-info-inner">
                                    <span>Premium Flooring</span>
                                    <h5>Flooring <br/> Installation</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 mt-50 wow fadeInLeft animated" data-wow-delay="400ms">
                        <div className="single-service-item">
                            <Image src={serviceImg2} alt="" className="h-auto"/>
                            <div className="service-info-wrap">
                                <div className="service-info-inner">
                                    <span>Stylish Surface</span>
                                    <h5>Tiling <br/> Installation</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                        <div className="single-service-item">
                            <Image src={serviceImg3} alt="" className="h-auto"/>
                            <div className="service-info-wrap">
                                <div className="service-info-inner">
                                    <span>Durable Design</span>
                                    <h5>Floor <br/> Repair</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mt-50 wow fadeInLeft animated" data-wow-delay="800ms">
                        <div className="single-service-item">
                            <Image src={serviceImg4} alt="" className="h-auto"/>
                            <div className="service-info-wrap">
                                <div className="service-info-inner">
                                    <span>Interior Design</span>
                                    <h5>Floor <br/> Refinishing</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-60">
                    <div className="cp-custom-accordion">
                        <div className="accordions" id="accordionExample">
                            <div className="accordion-items wow fadeInUp animated" data-wow-delay="200ms">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#serviceOne" aria-expanded="true"
                                            aria-controls="serviceOne">
                                        Flooring Installation
                                    </button>
                                </h2>
                                <div id="serviceOne" className="accordion-collapse collapse show"
                                     aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Flooring installation for a company like Florix typically involves the process
                                        of laying down flooring materials in residential, commercial, or industrial
                                        spaces. Florix could provide a variety of flooring options, such as hardwood,
                                        laminate, tile, carpet, or vinyl, each with its own installation techniques and
                                        considerations.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-items wow fadeInUp animated" data-wow-delay="400ms">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#serviceTwo" aria-expanded="false"
                                            aria-controls="serviceTwo">
                                        Flooring Installation
                                    </button>
                                </h2>
                                <div id="serviceTwo" className="accordion-collapse collapse"
                                     aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Flooring installation for a company like Florix typically involves the process
                                        of laying down flooring materials in residential, commercial, or industrial
                                        spaces. Florix could provide a variety of flooring options, such as hardwood,
                                        laminate, tile, carpet, or vinyl, each with its own installation techniques and
                                        considerations.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-items wow fadeInUp animated" data-wow-delay="600ms">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#serviceThree"
                                            aria-expanded="false" aria-controls="serviceThree">
                                        Floor Repairs
                                    </button>
                                </h2>
                                <div id="serviceThree" className="accordion-collapse collapse"
                                     aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Flooring installation for a company like Florix typically involves the process
                                        of laying down flooring materials in residential, commercial, or industrial
                                        spaces. Florix could provide a variety of flooring options, such as hardwood,
                                        laminate, tile, carpet, or vinyl, each with its own installation techniques and
                                        considerations.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-items wow fadeInUp animated" data-wow-delay="800ms">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#serviceFour"
                                            aria-expanded="false" aria-controls="serviceFour">
                                        Floor Refinishing
                                    </button>
                                </h2>
                                <div id="serviceFour" className="accordion-collapse collapse"
                                     aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Flooring installation for a company like Florix typically involves the process
                                        of laying down flooring materials in residential, commercial, or industrial
                                        spaces. Florix could provide a variety of flooring options, such as hardwood,
                                        laminate, tile, carpet, or vinyl, each with its own installation techniques and
                                        considerations.
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