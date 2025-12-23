import Link from "next/link";
import Image from "next/image";
import projectImg1 from "@/assets/img/project/1.jpg";
import projectImg2 from "@/assets/img/project/2.jpg";
import projectImg3 from "@/assets/img/project/3.jpg";
import projectImg4 from "@/assets/img/project/4.jpg";
import projectImg5 from "@/assets/img/project/5.jpg";

export default function ProjectSectionThree() {
    return (
        <div id="project-1" className="project-section section-padding">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Real flooring projects, real customer satisfaction</h2>
                            <p className="pt-20">Explore our flooring projects, featuring exceptional craftsmanship,
                                unique designs, and stunning transformations across spaces.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-5 text-md-end">
                        <Link href="/projects" className="bordered-btn">View All Projects <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row project-wrapper">
                    <div className="col-lg-4 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="single-project-item">
                            <div className="project-bg">
                                <Image src={projectImg1} alt="" className="h-auto"/>
                            </div>
                            <div className="project-info">
                                <h6>Luxury Living Spaces</h6>
                                <Link href="/projects/details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp animated" data-wow-delay="400ms">
                        <div className="single-project-item">
                            <div className="project-bg">
                                <Image src={projectImg2} alt="" className="h-auto"/>
                            </div>
                            <div className="project-info">
                                <h6>Urban Renovation</h6>
                                <Link href="/projects/details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp animated" data-wow-delay="600ms">
                        <div className="single-project-item">
                            <div className="project-bg">
                                <Image src={projectImg3} alt="" className="h-auto"/>
                            </div>
                            <div className="project-info">
                                <h6>Family Friendly Flooring</h6>
                                <Link href="/projects/details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="single-project-item">
                            <div className="project-bg">
                                <Image src={projectImg4} alt="" className="h-auto"/>
                            </div>
                            <div className="project-info">
                                <h6>Elegant Essentials</h6>
                                <Link href="/projects/details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp animated" data-wow-delay="400ms">
                        <div className="single-project-item">
                            <div className="project-bg">
                                <Image src={projectImg5} alt="" className="h-auto"/>
                            </div>
                            <div className="project-info">
                                <h6>Timberland Revival</h6>
                                <Link href="/projects/details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp animated" data-wow-delay="600ms">
                        <div className="single-project-item">
                            <div className="project-bg">
                                <Image src={projectImg1} alt="" className="h-auto"/>
                            </div>
                            <div className="project-info">
                                <h6>Timberland Revival</h6>
                                <Link href="/projects/details">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}