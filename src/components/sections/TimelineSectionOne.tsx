import Image from "next/image";
import timeLimeImg1 from "@/assets/img/timeline/1.jpg";
import timeLimeImg2 from "@/assets/img/timeline/2.jpg";
import timeLimeImg3 from "@/assets/img/timeline/3.jpg";
import timeLimeImg4 from "@/assets/img/timeline/4.jpg";
import timeLimeImg5 from "@/assets/img/timeline/5.jpg";

export default function TimelineSectionOne() {
    return (
        <div className="timeline-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="timeline-wrapper">
                        <div className="timeline-item obverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-img-wrap">
                                    <Image src={timeLimeImg1} alt="" className="h-auto"/>
                                </div>
                                <div className="timeline-content-wrap">
                                    <span className="timeline-date">2010</span>
                                    <h5 className="timeline-title">Founding Year</h5>
                                    <p className="timeline-text">Inception: Florz was founded by a team of flooring
                                        enthusiasts with a vision to redefine flooring solutions for homeowners and
                                        businesses alike. Their goal was to combine quality materials with exceptional
                                        service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item reverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-content-wrap order-2 order-md-1">
                                    <span className="timeline-date">2013</span>
                                    <h5 className="timeline-title">Initial Launch</h5>
                                    <p className="timeline-text">Business Setup: Florz established its headquarters in
                                        New York, partnering with top manufacturers to offer a diverse range of flooring
                                        products, including hardwood, laminate, vinyl, and tile.</p>
                                </div>
                                <div className="timeline-img-wrap order-1 order-md-2">
                                    <Image src={timeLimeImg2} alt="" className="h-auto"/>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item obverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-img-wrap">
                                    <Image src={timeLimeImg3} alt="" className="h-auto"/>
                                </div>
                                <div className="timeline-content-wrap">
                                    <span className="timeline-date">2015</span>
                                    <h5 className="timeline-title">Growth and Community Recognition</h5>
                                    <p className="timeline-text">Market Expansion: As demand grew, Florz expanded its
                                        product offerings to include eco-friendly flooring options, catering to
                                        environmentally conscious consumers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item reverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-content-wrap order-2 order-md-1">
                                    <span className="timeline-date">2017</span>
                                    <h5 className="timeline-title">Service Diversification</h5>
                                    <p className="timeline-text">New Services: Launched additional services such as
                                        flooring consultations, custom design solutions, and installation services,
                                        enhancing the overall customer experience.</p>
                                </div>
                                <div className="timeline-img-wrap order-1 order-md-2">
                                    <Image src={timeLimeImg4} alt="" className="h-auto"/>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item obverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-img-wrap">
                                    <Image src={timeLimeImg5} alt="" className="h-auto"/>
                                </div>
                                <div className="timeline-content-wrap">
                                    <span className="timeline-date">2022</span>
                                    <h5 className="timeline-title">Strategic Partnerships</h5>
                                    <p className="timeline-text">Collaboration: Built strong partnerships with real
                                        estate developers and interior designers, leading to significant commercial
                                        projects and larger residential contracts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}