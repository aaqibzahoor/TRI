import ProjectSliderOne from "@/components/sliders/ProjectSliderOne";
import Link from "next/link";

export default function ProjectSectionOne() {
    return (
        <div id="project-1" className="project-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Real flooring projects, real customer satisfaction</h2>
                            <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">Explore our flooring
                                projects, featuring exceptional craftsmanship, unique designs, and stunning
                                transformations across spaces.</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
                        <Link href="/projects" className="bordered-btn">View All Projects <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <ProjectSliderOne />
            </div>
        </div>
    )
}