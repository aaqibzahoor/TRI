import Image from "next/image";
import serviceImg31 from "@/assets/img/service/3-1.jpg";
import serviceImg32 from "@/assets/img/service/3-2.jpg";
import serviceImg33 from "@/assets/img/service/3-3.jpg";
import serviceImg34 from "@/assets/img/service/3-4.jpg";
import serviceImg35 from "@/assets/img/service/3-5.jpg";
import serviceImg36 from "@/assets/img/service/3-6.jpg";
import serviceImg37 from "@/assets/img/service/3-7.jpg";
import serviceImg38 from "@/assets/img/service/3-8.jpg";
import Link from "next/link";

export default function ServiceSectionThree() {
    return (
        <div id="service-3" className="service-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="section-title">
                            <h6 className="pill">Our Work</h6>
                            <h2 className="visible-slowly-right">Recent Projects</h2>
                            <p className="pt-40">A curated selection of residential installations, architectural window designs and premium replacements.</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-1"></div>
                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <p className="pt-40">Showcase:</p>
                        <ul>
                            <li>Finished home fronts</li>
                            <li>Interior captures</li>
                            <li>Detail shots</li>
                            <li>On-site action and installation process</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="service-wrapper mt-30">
                <div className="row gx-0">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-service-item">
                            <Image src={serviceImg31} alt="" className="h-auto"/>
                            <div className="service-info">
                                <span>Premium Flooring</span>
                                <h6>Flooring Installation</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-service-item">
                            <Image src={serviceImg32} alt="" className="h-auto"/>
                            <div className="service-info">
                                <span>Stylish Surfaces</span>
                                <h6>Tiling Installation</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-service-item">
                            <Image src={serviceImg33} alt="" className="h-auto"/>
                            <div className="service-info">
                                <span>Durable Design</span>
                                <h6>Floor Repair</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-service-item">
                            <Image src={serviceImg34} alt="" className="h-auto"/>
                            <div className="service-info">
                                <span>Quality Floor</span>
                                <h6>Floor Refinishing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-service-item">
                            <Image src={serviceImg35} alt="" className="h-auto"/>
                            <div className="service-info">
                                <span>Timeless Elegance</span>
                                <h6>Tile Grouting</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-service-item">
                            <Image src={serviceImg36} alt="" className="h-auto"/>
                            <div className="service-info">
                                <span>Modern Flooring</span>
                                <h6>Underfloor Heating Installation</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-service-item">
                            <Image src={serviceImg37} alt="" className="h-auto"/>
                            <div className="service-info">
                                <span>Enduring Craftsmanship</span>
                                <h6>Floor Polishing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-service-item">
                            <Image src={serviceImg38} alt="" className="h-auto"/>
                            <div className="service-info">
                                <span>Seamless Style</span>
                                <h6>Waterprofing</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
