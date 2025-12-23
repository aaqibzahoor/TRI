import Image from "next/image";
import teamImg1 from "@/assets/img/team/1.jpg";
import teamImg2 from "@/assets/img/team/2.jpg";
import teamImg3 from "@/assets/img/team/3.jpg";
import teamImg4 from "@/assets/img/team/4.jpg";
import Link from "next/link";

export default function TeamSectionFour() {
    return (
        <div className="team-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Meet our skilled team of flooring experts</h2>
                        </div>
                        <p>We provide professional flooring installation, repair, refinishing, maintenance, and custom
                            design services for homes and businesses.</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-5 text-md-end">
                        <Link href="/team" className="bordered-btn">Our Team <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row mt-30">
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="single-team-item">
                            <div className="team-img">
                                <Image src={teamImg1} alt="" className="h-auto"/>
                            </div>
                            <div className="team-info">
                                <span>CTO</span>
                                <h5>Benjamin Scott</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="400ms">
                        <div className="single-team-item">
                            <div className="team-img">
                                <Image src={teamImg2} alt="" className="h-auto"/>
                            </div>
                            <div className="team-info">
                                <span>Director</span>
                                <h5>Anna Hallberg</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="600ms">
                        <div className="single-team-item">
                            <div className="team-img">
                                <Image src={teamImg3} alt="" className="h-auto"/>
                            </div>
                            <div className="team-info">
                                <span>Manager</span>
                                <h5>Deniel Lee</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="800ms">
                        <div className="single-team-item">
                            <div className="team-img">
                                <Image src={teamImg4} alt="" className="h-auto"/>
                            </div>
                            <div className="team-info">
                                <span>Engineer</span>
                                <h5>Sophia Ramirez</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}