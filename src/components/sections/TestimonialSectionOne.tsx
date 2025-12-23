import TestimonialOneSlider from "@/components/sliders/TestimonialOneSlider";
import Link from "next/link";

export default function TestimonialSectionOne() {
    return (
        <div className="testimonial-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Real Customers, Real Reviews, Real Quality!</h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
                        <Link href="/services" className="bordered-btn">Testimonial
                            <i className="fa-light fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                <TestimonialOneSlider/>
            </div>
        </div>
    )
}