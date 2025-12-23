import Image from "next/image";
import Link from "next/link";

import blogImg41 from "@/assets/img/blog/4-1.jpg";
import blogImg42 from "@/assets/img/blog/4-2.jpg";
import blogImg43 from "@/assets/img/blog/4-3.jpg";
import blogImg44 from "@/assets/img/blog/4-4.jpg";
import blogImg45 from "@/assets/img/blog/4-5.jpg";
import blogImg46 from "@/assets/img/blog/4-6.jpg";

export default function BlogSectionFour() {
    return (
        <div id="blog-page" className="blog-section section-padding pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg41} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Talent Management</h5>
                            </div>
                            <div className="blog-content">
                                <p>Talent management in the flooring industry, like in any other sector, plays a crucial
                                    role in ensuring a big platform.</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="400ms">
                        <div className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg42} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Sustainable Material</h5>
                            </div>
                            <div className="blog-content">
                                <p>Sustainable materials are resources that are produced and sourced in a way that
                                    minimizes environmental important role.</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="600ms">
                        <div className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg43} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Technological Innovation</h5>
                            </div>
                            <div className="blog-content">
                                <p>Technological innovation in flooring has transformed the industry, improving the
                                    durability, aesthetics, a vital area.</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg44} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Dopamine Decor</h5>
                            </div>
                            <div className="blog-content">
                                <p>Dopamine Decor refers to the concept of designing spaces that enhance mood and
                                    well-being, often through task project.</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="400ms">
                        <div className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg45} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Talent Management</h5>
                            </div>
                            <div className="blog-content">
                                <p>Talent management in the flooring industry, like in any other sector, plays a crucial
                                    role in ensuring a big platform.</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="600ms">
                        <div className="single-blog-item">
                            <div className="blog-img">
                                <Image src={blogImg46} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-meta">
                                <span>News</span>
                            </div>
                            <div className="blog-title">
                                <h5>Sustainable Material</h5>
                            </div>
                            <div className="blog-content">
                                <p>Sustainable materials are resources that are produced and sourced in a way that
                                    minimizes environmental important role.</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}