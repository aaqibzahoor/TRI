import Image from "next/image";
import teamImg from "@/assets/img/tri/team.jpg";

export default function TeamSectionTwo() {
  return (
    <div id="team-2" className="team-section section-padding team-bg2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-5 col-md-6">
            <div className="team-intro-wrap">
              <div className="section-title">
                {/* <h6 className="text-white">Our Story</h6> */}
                <h2 className="text-white visible-slowly-right">Our Story</h2>
              </div>
              <p className="text-white">
                A hands-on director with a commitment to detail.
              </p>
              <p className="text-white">
                Nick oversees every project from initial consultation through to
                installation. With years of experience in aluminium fabrication
                and residential window installation, he ensures each job is
                completed with accuracy, communication and care.
              </p>
              <p className="text-white">
                As a family-owned and operated business, Triple E Windows prides
                itself on honesty, reliability and workmanship that genuinely
                reflects the values behind the brand.
              </p>
              <p className="text-white">
                "Every window we fabricate and install is a reflection of our
                standards. We don't cut corners - ever." <br />– Nick, Director
              </p>

              {/* <Link href="/team" className="bordered-btn white-btn mt-20">Work with Us<i
                                className="fa-light fa-arrow-right"></i></Link> */}
            </div>
          </div>
          <div className="col-xl-4 col-lg-7 col-md-6">
            <div className="row team-content-wrap">
              <div className="col-xl-12 col-lg-4 col-md-6">
                <div className="single-team-wrap">
                  <div className="team-img">
                    <Image src={teamImg} alt="" className="h-auto" />
                    <div className="team-info">
                      <h6>Nick</h6>
                      <p>Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
