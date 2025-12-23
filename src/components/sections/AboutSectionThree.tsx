import ProgressBars from "@/components/sections/ProgressBars";

export default function AboutSectionThree() {
    return (
        <div id="about-3" className="about-section section-padding pt-0 pb-0">
            <div className="container">
                <div className="row">
                    <div className="about-content-wrap">
                        <div className="section-title">
                            <h6 className="pill">About Us</h6>
                            <h2 className="visible-slowly-right">Decades of Expertise in <br/> Quality Flooring</h2>
                        </div>
                        <div className="about-tab">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="history-tab" data-bs-toggle="tab"
                                            data-bs-target="#history" type="button" role="tab" aria-controls="history"
                                            aria-selected="true">History
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="mission-tab" data-bs-toggle="tab"
                                            data-bs-target="#mission" type="button" role="tab" aria-controls="mission"
                                            aria-selected="false">Mission
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="vision-tab" data-bs-toggle="tab"
                                            data-bs-target="#vision" type="button" role="tab" aria-controls="vision"
                                            aria-selected="false">Vision
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content mt-30" id="myTabContent">
                                <div className="tab-pane fade show active" id="history" role="tabpanel"
                                     aria-labelledby="history-tab">
                                    <p> At <b>Florix Flooring</b>, we are passionate about transforming spaces with
                                        high-quality flooring solutions that blend style, durability, and functionality.
                                        With over a decade of experience, our team specializes in a wide range of
                                        flooring services, including hardwood, laminate, vinyl, and tile installations
                                        for both residential and commercial properties.
                                    </p>
                                    <p>From custom designs to flooring repairs and refinishing, Florz Flooring is your
                                        trusted partner in creating beautiful, durable floors that enhance the value of
                                        your home or business.</p>
                                    <ProgressBars classes="mt-40"/>
                                </div>
                                <div className="tab-pane fade" id="mission" role="tabpanel"
                                     aria-labelledby="mission-tab">
                                    <p> At <b>Florix Flooring</b>, our mission is to deliver exceptional flooring
                                        solutions tailored to our clients' unique needs and styles. We are committed to
                                        providing high-quality materials and expert installation services while
                                        fostering a seamless and enjoyable customer experience. Through integrity,
                                        innovation, and a dedication to craftsmanship, we strive to enhance every space
                                        we touch, ensuring durability and beauty in every project. Our goal is to build
                                        lasting relationships with our clients, contributing to the transformation of
                                        their environments with flooring that inspires.
                                    </p>
                                    <p>From custom designs to flooring repairs and refinishing, Florz Flooring is your
                                        trusted partner in creating beautiful, durable floors that enhance the value of
                                        your home or business.</p>

                                </div>
                                <div className="tab-pane fade" id="vision" role="tabpanel" aria-labelledby="vision-tab">
                                    <p> At <b>Florix Flooring</b>, our vision is to become the leading provider of
                                        innovative, sustainable, and high-quality flooring solutions, transforming homes
                                        and businesses with surfaces that inspire beauty, comfort, and longevity. We aim
                                        to set the standard for excellence in craftsmanship and customer service while
                                        promoting environmentally responsible practices in every project we undertake.
                                    </p>
                                    <p>From custom designs to flooring repairs and refinishing, Florz Flooring is your
                                        trusted partner in creating beautiful, durable floors that enhance the value of
                                        your home or business.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="video-content-wrap">
                        <video autoPlay muted loop src="/media/video-03.mp4"></video>
                    </div>

                </div>
            </div>
        </div>
    )
}