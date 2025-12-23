import TestimonialTwoSlider from "@/components/sliders/TestimonialTwoSlider";
import Link from "next/link";

interface TestimonialSectionTwoProps {
    classes?: string
}

export default function TestimonialSectionTwo({
                                                  classes = "",
                                              }: TestimonialSectionTwoProps) {
    return (
        <div id="testimonial-2" className={`testimonial-section section-padding ${classes}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="section-title">
                            <h6>testimonials</h6>
                            <h2 className="visible-slowly-right">Real Customers, Real Reviews, Real Quality!</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2"></div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <p className="pt-40">Concept design involves creating a foundational framework that guides the
                            development of a project.</p>
                        <Link href="/contact" className="details-link">Get in Touch<i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <TestimonialTwoSlider/>
            </div>
        </div>
    )
}