import Image from "next/image";
import processImg31 from "@/assets/img/process/3-1.png";
import processImg32 from "@/assets/img/process/3-2.png";
import processImg33 from "@/assets/img/process/3-3.png";
import processImg34 from "@/assets/img/process/3-4.png";
import Link from "next/link";

interface ProcessSectionThreeProps {
    classes?: string
}

export default function ProcessSectionThree({
                                                classes = "",
                                            }: ProcessSectionThreeProps)  {
    return (
        <div id="process-3" className={`process-section section-padding ${classes}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="section-title">
                            <h6 className="pill">Our Process</h6>
                            <h2 className="visible-slowly-right">From consultation to <br/> perfection, every time</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-1"></div>
                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <p className="pt-40">Our seamless flooring process ensures quality from consultation to
                            installation, satisfaction every step of the way.</p>
                        <Link href="/contact" className="details-link">Get In Touch<i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row mt-30">
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                        <div className="single-process-item">
                            <div className="process-icon">
                                <Image src={processImg31} alt="" className="h-auto"/>
                                <span className="step-count">1.</span>
                                <div className="process-line d-none d-md-inline-block"></div>
                            </div>
                            <div className="process-title">
                                <h5>Consultation</h5>
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
                                <Image src={processImg32} alt="" className="h-auto"/>
                                <span className="step-count">2.</span>
                                <div className="process-line d-none d-lg-inline-block"></div>
                            </div>
                            <div className="process-title">
                                <h5>Material Selection</h5>
                            </div>
                            <div className="process-content">
                                <p>Based on the client's requirements, the architecture creates a concept design.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                        <div className="single-process-item">
                            <div className="process-icon">
                                <Image src={processImg33} alt="" className="h-auto"/>
                                <span className="step-count">3.</span>
                                <div className="process-line d-none d-md-inline-block"></div>
                            </div>
                            <div className="process-title">
                                <h5>Preparation</h5>
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
                                <Image src={processImg34} alt="" className="h-auto"/>
                                <span className="step-count">4.</span>
                            </div>
                            <div className="process-title">
                                <h5>Installation</h5>
                            </div>
                            <div className="process-content">
                                <p>The architecture company meets with the client to discuss their needs, budget, and
                                    timeline.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}