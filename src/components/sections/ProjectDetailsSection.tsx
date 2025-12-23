import Image from "next/image";
import projectDetailsImg1 from "@/assets/img/project/project-details-1.jpg";
import projectDetailsImg2 from "@/assets/img/project/project-details-2.jpg";
import projectDetailsImg3 from "@/assets/img/project/project-details-3.jpg";
import projectDetailsImg4 from "@/assets/img/project/project-details-4.jpg";
import projectDetailsImg5 from "@/assets/img/project/project-details-5.jpg";

export default function ProjectDetailsSection() {
    return (
        <div className="project-details-wrap section-padding">
            <div className="container">
                <div className="row align-items-end mb-60">
                    <div className="col-xl-6 col-lg-7">
                        <div className="project-desc">
                            <h3>Timberland Revival</h3>
                            <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                        </div>
                    </div>
                    <div className="col-xl-1 col-lg-1"></div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="row single-details-item gy-3 mt-30">
                            <div className="col-4">
                                <h5>Client</h5>
                            </div>
                            <div className="col-6">
                                <span>Alfa Inc.</span>
                            </div>
                            <div className="col-4">
                                <h5>Year</h5>
                            </div>
                            <div className="col-6">
                                <span>May, 2025</span>
                            </div>
                            <div className="col-4">
                                <h5>Category</h5>
                            </div>
                            <div className="col-6">
                                <span>Windows, Doors</span>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="row gx-5">
                    <div className="col-xl-12 col-lg-12">
                        <div className="project-details-inner">
                            <div className="project-feature-img wow img-custom-anim-top" data-wow-delay=".2s">
                                <Image src={projectDetailsImg1} alt="" className="h-auto"/>
                            </div>
                            <div className="project-details-content">
                                <h3>Project Overview</h3>
                                <p>Aenean interdum purus vitae purus laoreet, eu egestas augue dictum. Nunc tincidunt
                                    felis ullamcorper dolor euismod porttitor at tincidunt arcu. Ut molestie cursus
                                    sapien, a auctor quam viverra ac. Sed non blandit mi. Proin pharetra dui in molestie
                                    sollicitudin. Vivamus ornare lorem in tempus facilisis. Quisque tristique erat
                                    interdum augue sodales fringilla.</p>
                            </div>
                            <div className="project-image-gallery">
                                <div className="row">
                                    <div className="col-4 wow fadeInLeft animated" data-wow-delay="200ms">
                                        <Image src={projectDetailsImg2} alt="" className="h-auto"/>
                                    </div>
                                    <div className="col-4 wow fadeInLeft animated" data-wow-delay="400ms">
                                        <Image src={projectDetailsImg3} alt="" className="h-auto"/>
                                    </div>
                                    <div className="col-4 wow fadeInLeft animated" data-wow-delay="600ms">
                                        <Image src={projectDetailsImg4} alt="" className="h-auto"/>
                                    </div>
                                    <div className="col-12 mt-30 wow fadeInUp animated" data-wow-delay="200ms">
                                        <Image src={projectDetailsImg5} alt="" className="h-auto"/>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-30"> Phasellus euismod, dolor at efficitur condimentum, neque nulla viverra
                                lectus, varius bibendum quam sapien dignissim mi. Maecenas rhoncus leo turpis, sit amet
                                aliquet lectus viverra sed. Aliquam sodales commodo imperdiet. Morbi tincidunt ante
                                interdum urna commodo tempor vitae id orci. Suspendisse id orci ut erat convallis
                                iaculis luctus vel diam. Donec felis eros, consectetur sed ornare quis, ultrices a
                                libero. Vestibulum consectetur purus id libero euismod maximus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}