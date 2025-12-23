import FooterBottom from "@/components/footer/FooterBottom";
import Link from "next/link";

export default function FooterTwo() {
    return (
        <>
            <div className="footer-section pt-80 footer-bg-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="footer-content-wrap">
                                <div className="section-title">
                                    <h2 className="text-white visible-slowly-right">
                                        Transform Your Space</h2>
                                </div>
                                <hr/>
                                <p className="text-white wow fadeInUp animated" data-wow-delay="400ms">You're invited to
                                    explore our innovative flooring solutions, featuring durable, water-resistant vinyl
                                    planks and engineered wood, perfect for enhancing the beauty of your space!</p>
                                <Link href="/contact" className="white-btn mt-20 wow fadeInDown animated"
                                   data-wow-delay="600ms">Let's Talk <i className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-3"></div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="contact-info-wrap mt-40">
                                <div className="single-contact-info">
                                    <h6 className="text-white">Phone</h6>
                                    <p className="p-xl">+34 567 721 12 35</p>
                                </div>
                                <div className="single-contact-info">
                                    <h6 className="text-white">E-mail</h6>
                                    <p>info@florix.com</p>
                                </div>
                                <div className="single-contact-info">
                                    <h6 className="text-white">Directions</h6>
                                    <p>77 Kennedy Road <br/>
                                        Soho Manhattan <br/>
                                        New York - USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <FooterBottom/>
        </>
    )
}