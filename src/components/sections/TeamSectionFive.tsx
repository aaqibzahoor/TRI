import Image from "next/image";
import teamImg1 from "@/assets/img/team/1.jpg";
import teamImg2 from "@/assets/img/team/2.jpg";
import teamImg3 from "@/assets/img/team/3.jpg";
import teamImg4 from "@/assets/img/team/4.jpg";
import teamImg5 from "@/assets/img/team/5.jpg";
import teamImg6 from "@/assets/img/team/6.jpg";
import teamImg7 from "@/assets/img/team/7.jpg";
import teamImg8 from "@/assets/img/team/8.jpg";

export default function TeamSectionFive() {
    return (
        <div className="team-section section-padding pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6">
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
                    <div className="col-xl-3 col-lg-3 col-md-6">
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
                    <div className="col-xl-3 col-lg-3 col-md-6">
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
                    <div className="col-xl-3 col-lg-3 col-md-6">
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
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-team-item">
                            <div className="team-img">
                                <Image src={teamImg5} alt="" className="h-auto"/>
                            </div>
                            <div className="team-info">
                                <span>CTO</span>
                                <h5>Benjamin Scott</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-team-item">
                            <div className="team-img">
                                <Image src={teamImg6} alt="" className="h-auto"/>
                            </div>
                            <div className="team-info">
                                <span>Director</span>
                                <h5>Anna Hallberg</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-team-item">
                            <div className="team-img">
                                <Image src={teamImg7} alt="" className="h-auto"/>
                            </div>
                            <div className="team-info">
                                <span>Manager</span>
                                <h5>Deniel Lee</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-team-item">
                            <div className="team-img">
                                <Image src={teamImg8} alt="" className="h-auto"/>
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