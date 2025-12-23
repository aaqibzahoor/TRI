import TestimonialOneSlider from "@/components/sliders/TestimonialOneSlider";

export default function TestimonialSectionThree() {
    return (
        <div id="testimonial-3" className="testimonial-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 text-center">
                        <div className="section-title">
                            <h6 className="pill">Testimonial</h6>
                            <h2 className="visible-slowly-right">Real Customers, Real Reviews, Real <br/> Quality!</h2>
                        </div>
                    </div>
                </div>
                <TestimonialOneSlider/>
            </div>
        </div>
    )
}