import Image from "next/image";
import teamImg21 from "@/assets/img/team/2-1.jpg";
import teamImg22 from "@/assets/img/team/2-2.jpg";
import teamImg23 from "@/assets/img/team/2-3.jpg";
import teamImg24 from "@/assets/img/team/2-4.jpg";
import Link from "next/link";

export default function TeamSectionThree() {
    return (
        <div id="team-3" className="service-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="section-title">
                            <h6 className="pill">Our Team</h6>
                            <h2 className="visible-slowly-right">Real flooring projects, real customer satisfaction</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-1 col-md-1"></div>
                    <div className="col-xl-4 col-lg-5 col-md-5">
                        <p className="pt-40">Meet our skilled team of flooring experts dedicated to delivering
                            exceptional craftsmanship and outstanding customer service for every project.</p>
                        <Link href="/team" className="details-link">Work with us<i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="row gx-0 mt-30 team-content-wrap">
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="single-team-wrap">
                        <div className="team-img">
                            <Image src={teamImg21} alt="" className="h-auto"/>
                            <div className="team-info">
                                <h6>Anna Taylor</h6>
                                <p>Team Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="single-team-wrap">
                        <div className="team-img">
                            <Image src={teamImg22} alt="" className="h-auto"/>
                            <div className="team-info">
                                <h6>Anna Taylor</h6>
                                <p>Team Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="single-team-wrap">
                        <div className="team-img">
                            <Image src={teamImg23} alt="" className="h-auto"/>
                            <div className="team-info">
                                <h6>Anna Taylor</h6>
                                <p>Team Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="single-team-wrap">
                        <div className="team-img">
                            <Image src={teamImg24} alt="" className="h-auto"/>
                            <div className="team-info">
                                <h6>Deniel Lee</h6>
                                <p>Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}