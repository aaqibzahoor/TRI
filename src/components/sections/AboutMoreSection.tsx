import Image from "next/image";
import moreImg1 from "@/assets/img/about/about-more-img-1.jpg";

export default function AboutMoreSection() {
    return (
        <div className="about-more">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h4>Elevate your home’s aesthetic with floors that blend elegance, durability, and modern
                            design—crafted to last and transform every space beautifully.</h4>
                    </div>
                </div>
                <div className="row gy-4 mt-40">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-more-img obverse">
                            <Image src={moreImg1} alt="" className="h-auto"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="about-content-wrap obverse">
                            <p>At <b>Florz Flooring</b>, our mission is to deliver exceptional flooring solutions
                                tailored to our clients’ unique needs and styles. We are committed to providing
                                high-quality materials and expert installation services while fostering a seamless and
                                enjoyable customer experience. Through integrity, innovation, and a dedication to
                                craftsmanship, we strive to enhance every space we touch, ensuring durability and beauty
                                in every project. Our goal is to build lasting relationships with our clients,
                                contributing to the transformation of their environments with flooring that inspires.
                            </p>
                            <p>We aim to set the standard for excellence in craftsmanship and customer service while
                                promoting environmentally responsible practices in every project we undertake.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}