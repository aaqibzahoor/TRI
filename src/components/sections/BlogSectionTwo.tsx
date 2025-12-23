import Image from "next/image";
import imgInfo from "@/assets/img/info.png";
import Link from "next/link";

export default function BlogSectionTwo() {
    return (
        <div id="blog-2" className="blog-section section-padding blog-section-bg2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5">
                        <div className="blog-intro-wrap white-bg">
                            <div className="section-title">
                                <h6>Latest News</h6>
                                <h2 className="visible-slowly-right">Fresh flooring news, insights, <br/> and updates
                                </h2>
                            </div>
                            <p>Concept design involves creating a foundational framework that guides the development of
                                a project.</p>
                            <Link href="/blog" className="bordered-btn mt-20">All News<i
                                className="fa-light fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="row gy-5 gx-5 blog-content-wrap">
                            <div className="col-lg-6 wow fadeInLeft animated" data-wow-delay="200ms">
                                <div className="single-blog-item">
                                    <span><Image src={imgInfo} alt="" className="h-auto"/></span><span
                                    className="blog-meta">News</span>
                                    <div className="blog-title">
                                        <h5><Link href="/blog/details">Talent Management</Link></h5>
                                    </div>
                                    <p>Talent management in the flooring industry, like in any other sec</p>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInLeft animated" data-wow-delay="400ms">
                                <div className="single-blog-item">
                                    <span><Image src={imgInfo} alt="" className="h-auto"/></span><span
                                    className="blog-meta">News</span>
                                    <div className="blog-title">
                                        <h5><Link href="/blog/details">Sustainable Materials</Link></h5>
                                    </div>
                                    <p>Sustainable materials are resources that are produced and sourced</p>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInLeft animated" data-wow-delay="600ms">
                                <div className="single-blog-item">
                                    <span><Image src={imgInfo} alt="" className="h-auto"/></span><span
                                    className="blog-meta">News</span>
                                    <div className="blog-title">
                                        <h5><Link href="/blog/details">Technological Innovation</Link></h5>
                                    </div>
                                    <p>Technological innovation in flooring has transformed the industry</p>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInLeft animated" data-wow-delay="800ms">
                                <div className="single-blog-item">
                                    <span><Image src={imgInfo} alt="" className="h-auto"/></span><span
                                    className="blog-meta">News</span>
                                    <div className="blog-title">
                                        <h5><Link href="/blog/details">Dopamine Decor</Link></h5>
                                    </div>
                                    <p>Dopamine Decor refers to the concept of designing spaces that enh</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}