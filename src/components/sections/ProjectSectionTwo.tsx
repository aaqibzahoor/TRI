import Image from "next/image";
import projectIng21 from "@/assets/img/project/2-1.jpg";
import projectIng22 from "@/assets/img/project/2-2.jpg";
import projectIng23 from "@/assets/img/project/2-3.jpg";
import projectIng24 from "@/assets/img/project/2-4.jpg";
import projectIng25 from "@/assets/img/project/2-5.jpg";
import projectIng26 from "@/assets/img/project/2-6.jpg";
import Link from "next/link";

export default function ProjectSectionTwo() {
    return (
        <div id="project-2" className="project-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="section-title">
                            <h6>Latest Project</h6>
                            <h2 className="visible-slowly-right">Real flooring projects, real customer satisfaction</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-1"></div>
                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <p className="pt-40">Explore our flooring projects, featuring exceptional craftsmanship, unique
                            designs, and stunning transformations across spaces.</p>
                        <Link href="/projects" className="details-link">View Latest Works <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="row gy-4 mt-40">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                            <Link href="/projects/details" className="single-project-wrapper">
                                <div className="project-bg">
                                    <Image src={projectIng21} alt="" className="h-auto"/>
                                    <div className="project-details">
                                        <h4>Interior Design</h4>
                                        <p>Aesthetic</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="400ms">
                            <Link href="/projects/details" className="single-project-wrapper">
                                <div className="project-bg">
                                    <Image src={projectIng22} alt="" className="h-auto"/>
                                    <div className="project-details">
                                        <h4>Home Renovation</h4>
                                        <p>Aesthetic</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                            <Link href="/projects/details" className="single-project-wrapper">
                                <div className="project-bg">
                                    <Image src={projectIng23} alt="" className="h-auto"/>
                                    <div className="project-details">
                                        <h4>Home Renovation</h4>
                                        <p>Aesthetic</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                            <Link href="/projects/details" className="single-project-wrapper">
                                <div className="project-bg">
                                    <Image src={projectIng24} alt="" className="h-auto"/>
                                    <div className="project-details">
                                        <h4>Exterior Design</h4>
                                        <p>Aesthetic</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="400ms">
                            <Link href="/projects/details" className="single-project-wrapper">
                                <div className="project-bg">
                                    <Image src={projectIng25} alt="" className="h-auto"/>
                                    <div className="project-details">
                                        <h4>Furniture Remodel</h4>
                                        <p>Aesthetic</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                            <Link href="/projects/details" className="single-project-wrapper">
                                <div className="project-bg">
                                    <Image src={projectIng26} alt="" className="h-auto"/>
                                    <div className="project-details">
                                        <h4>Functional Space</h4>
                                        <p>Aesthetic</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}