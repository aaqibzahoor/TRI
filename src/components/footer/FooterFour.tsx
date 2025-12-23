import FooterBottom from "@/components/footer/FooterBottom";
import Link from "next/link";

export default function FooterFour() {
    return (
        <>
            <div className="footer-section-three section-padding pt-0 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-title">
                                <h6>All queries are replied within 24hrs.</h6>
                                <h2 className="visible-slowly-right">Let's Work Together</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-6">
                            <div className="footer-text">
                                <p className="wow fadeInUp animated" data-wow-delay="400ms">You're invited to explore
                                    our innovative flooring solutions, featuring durable, water-resistant vinyl planks
                                    and engineered wood, perfect for enhancing the beauty of your space!</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <Link href="/contact" className="footer-btn bordered-btn wow fadeInUp animated"
                               data-wow-delay="600ms">Let's Talk <i className="fa-light fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

            </div>

            <FooterBottom/>
        </>
    )
}
