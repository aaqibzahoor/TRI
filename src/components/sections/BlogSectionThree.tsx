import Image from "next/image";
import blogImg31 from "@/assets/img/blog/3-1.jpg";
import blogImg32 from "@/assets/img/blog/3-2.jpg";
import blogImg33 from "@/assets/img/blog/3-3.jpg";
import Link from "next/link";

export default function BlogSectionThree() {
    return (
        <div id="blog-3" className="blog-section pt-0 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                        <div className="section-title">
                            <h6 className="pill">Latest News</h6>
                            <h2 className="visible-slowly-right">Latest News Fresh flooring news, insights, and
                                updates</h2>
                        </div>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1"></div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <p className="pt-40">Stay informed with our latest news on flooring innovations, product
                            launches, promotions, and upcoming events in the industry!</p>
                        <Link href="/blog" className="details-link">View Fresh News<i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row mt-30">
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
                        <Link href="/blog/details" className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg31} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Talent Management</h5>
                            </div>
                            <div className="blog-content">
                                <p>Talent management in the flooring industry, like in any other sector, plays a crucial
                                    role in ensuring a b</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="400ms">
                        <div className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg32} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Sustainable Material</h5>
                            </div>
                            <div className="blog-content">
                                <p>Sustainable materials are resources that are produced and sourced in a way that
                                    minimizes environmental im</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="600ms">
                        <div className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg33} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Technological Innovation</h5>
                            </div>
                            <div className="blog-content">
                                <p>Technological innovation in flooring has transformed the industry, improving the
                                    durability, aesthetics, a</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="800ms">
                        <div className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg33} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Dopamine Decor</h5>
                            </div>
                            <div className="blog-content">
                                <p>Dopamine Decor refers to the concept of designing spaces that enhance mood and
                                    well-being, often through t</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}