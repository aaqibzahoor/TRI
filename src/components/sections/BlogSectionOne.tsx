import Link from "next/link";

export default function BlogSectionOne() {
    return (
        <div id="blog-1" className="blog-section section-padding pt-0 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Fresh flooring news, insights, and updates</h2>
                        </div>
                        <p className="wow fadeInUp animated" data-wow-delay=".4s">We provide professional flooring
                            installation, repair, refinishing, maintenance, and custom design services for homes and
                            businesses.</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-5 text-md-end">
                        <Link href="/blog" className="bordered-btn">View Latest News <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row mt-60">
                    <div className="col-lg-6 col-md-12 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="single-blog-item">
                            <div className="blog-title">
                                <h5><Link href="/blog/details">Talent Management</Link></h5>
                            </div>
                            <div className="blog-content">
                                <p>Talent management in the flooring industry, like in any other sector, plays a crucial
                                    role in ensuring a business’</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>
                            <hr/>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 wow fadeInUp animated" data-wow-delay="400ms">
                        <div className="single-blog-item">
                            <div className="blog-title">
                                <h5><Link href="/blog/details">Sustaintable Materials</Link></h5>
                            </div>
                            <div className="blog-content">
                                <p>Talent management in the flooring industry, like in any other sector, plays a crucial
                                    role in ensuring a business’</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>
                            <hr/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 wow fadeInUp animated" data-wow-delay="600ms">
                        <div className="single-blog-item">
                            <div className="blog-title">
                                <h5><Link href="/blog/details">Technological Innovation</Link></h5>
                            </div>
                            <div className="blog-content">
                                <p>Talent management in the flooring industry, like in any other sector, plays a crucial
                                    role in ensuring a business’</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 wow fadeInUp animated" data-wow-delay="800ms">
                        <div className="single-blog-item">
                            <div className="blog-title">
                                <h5><Link href="/blog/details">Dopamine Detox</Link></h5>
                            </div>
                            <div className="blog-content">
                                <p>Talent management in the flooring industry, like in any other sector, plays a crucial
                                    role in ensuring a business’</p>
                            </div>
                            <Link href="/blog/details" className="read-more-btn bordered-btn">Read More</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}