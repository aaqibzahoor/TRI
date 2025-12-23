import Image from "next/image";
import serviceImg from "@/assets/img/service/service-img.jpg";
import serviceImg2 from "@/assets/img/service/service-img-2.jpg";
import serviceImg41 from "@/assets/img/service/4-1.jpg";
import serviceImg42 from "@/assets/img/service/4-2.jpg";
import serviceImg43 from "@/assets/img/service/4-3.jpg";
import serviceImg44 from "@/assets/img/service/4-4.jpg";
import Link from "next/link";

export default function ServiceSectionFour() {
    return (
        <div id="service-3" className="service-page service-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Flooring Installation for <br/> Homes and Businesses
                            </h2>
                            <p className="pt-20">We provide professional flooring installation, repair, refinishing,
                                maintenance, and custom design services for homes and businesses.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-5 text-md-end">
                        <Link href="/services" className="bordered-btn">View All Services <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="service-img-wrap wow img-custom-anim-left" data-wow-delay=".3s">
                            <Image src={serviceImg} alt="" className="h-auto"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row gy-4">
                            <div className="col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay="200ms">
                                <div className="single-service-item">
                                    <Image src={serviceImg41} alt="" className="h-auto"/>
                                    <div className="service-info">
                                        <span>Premium Flooring</span>
                                        <h6>Flooring Installation</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay="400ms pt-60">
                                <div className="single-service-item">
                                    <Image src={serviceImg42} alt="" className="h-auto"/>
                                    <div className="service-info">
                                        <span>Premium Flooring</span>
                                        <h6>Flooring Installation</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay="600ms pt-m-60">
                                <div className="single-service-item">
                                    <Image src={serviceImg43} alt="" className="h-auto"/>
                                    <div className="service-info">
                                        <span>Premium Flooring</span>
                                        <h6>Flooring Installation</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay="800ms">
                                <div className="single-service-item">
                                    <Image src={serviceImg44} alt="" className="h-auto"/>
                                    <div className="service-info">
                                        <span>Premium Flooring</span>
                                        <h6>Flooring Installation</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-120">
                    <div className="col-lg-6">
                        <div className="cp-custom-accordion">
                            <div className="accordions" id="accordionExample">
                                <div className="accordion-items">
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
                                            Flooring installation for a company like Florix typically involves the
                                            process of laying down flooring materials in residential, commercial, or
                                            industrial spaces. Florix could provide a variety of flooring options, such
                                            as hardwood, laminate, tile, carpet, or vinyl, each with its own
                                            installation techniques and considerations.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#serviceTwo"
                                                aria-expanded="false" aria-controls="serviceTwo">
                                            Flooring Installation
                                        </button>
                                    </h2>
                                    <div id="serviceTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Flooring installation for a company like Florix typically involves the
                                            process of laying down flooring materials in residential, commercial, or
                                            industrial spaces. Florix could provide a variety of flooring options, such
                                            as hardwood, laminate, tile, carpet, or vinyl, each with its own
                                            installation techniques and considerations.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
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
                                            Flooring installation for a company like Florix typically involves the
                                            process of laying down flooring materials in residential, commercial, or
                                            industrial spaces. Florix could provide a variety of flooring options, such
                                            as hardwood, laminate, tile, carpet, or vinyl, each with its own
                                            installation techniques and considerations.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
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
                                            Flooring installation for a company like Florix typically involves the
                                            process of laying down flooring materials in residential, commercial, or
                                            industrial spaces. Florix could provide a variety of flooring options, such
                                            as hardwood, laminate, tile, carpet, or vinyl, each with its own
                                            installation techniques and considerations.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-img-wrap wow img-custom-anim-right" data-wow-delay=".3s">
                            <Image src={serviceImg2} alt="" className="h-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}