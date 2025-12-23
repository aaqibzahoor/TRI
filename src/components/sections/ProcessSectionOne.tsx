import Image from "next/image";
import processImg1 from "@/assets/img/process/1.png";
import processImg2 from "@/assets/img/process/2.png";
import processImg3 from "@/assets/img/process/3.png";
import processImg4 from "@/assets/img/process/4.png";
import Link from "next/link";

export default function ProcessSectionOne() {
    return (
        <div id="process-1" className="process-section section-padding pt-0 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">From consultation to perfection, every time</h2>
                            <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">Our seamless flooring
                                process ensures quality from consultation to installation, guaranteeing satisfaction
                                every step of the way.</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
                        <Link href="/contact" className="bordered-btn">Our Process <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="row mt-30 process-bg-wrap align-items-center justify-content-center process-bg">
                <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                    <div className="single-process-item">
                        <div className="process-icon">
                            <Image src={processImg1} alt="" className="h-auto"/>
                            <span className="step-count">1.</span>
                            <div className="process-line d-none d-md-inline-block"></div>
                        </div>
                        <div className="process-title">
                            <h5>Consultation & meeting</h5>
                        </div>
                        <div className="process-content">
                            <p>The architecture company meets with the client to discuss their needs, budget, and
                                timeline.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="400ms">
                    <div className="single-process-item">
                        <div className="process-icon">
                            <Image src={processImg2} alt="" className="h-auto"/>
                            <span className="step-count">2.</span>
                            <div className="process-line d-none d-lg-inline-block"></div>
                        </div>
                        <div className="process-title">
                            <h5>Concept design</h5>
                        </div>
                        <div className="process-content">
                            <p>Based on the client's requirements, the architecture company creates a concept
                                design.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                    <div className="single-process-item">
                        <div className="process-icon">
                            <Image src={processImg3} alt="" className="h-auto"/>
                            <span className="step-count">3.</span>
                            <div className="process-line d-none d-md-inline-block"></div>
                        </div>
                        <div className="process-title">
                            <h5>Design development</h5>
                        </div>
                        <div className="process-content">
                            <p>The architecture company meets with the client to discuss their needs, budget, and
                                timeline.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="800ms">
                    <div className="single-process-item">
                        <div className="process-icon">
                            <Image src={processImg4} alt="" className="h-auto"/>
                            <span className="step-count">4.</span>
                        </div>
                        <div className="process-title">
                            <h5>Permitting & approvals</h5>
                        </div>
                        <div className="process-content">
                            <p>The architecture company meets with the client to discuss their needs, budget, and
                                timeline.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}