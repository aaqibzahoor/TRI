import Link from "next/link";
import introImg from "@/assets/img/tri/team4.JPG";
import Image from "next/image";

export default function ProcessSectionTwo() {
  return (
    <div
      id="process-2"
      className="process-section section-padding pb-0"
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-5 col-lg-4 col-md-4">
            <div className="section-title">
              <h6>About</h6>
              <h2 className="visible-slowly-right">The Triple E Advantage</h2>
              <p className="pt-20">
                Whether you're replacing old windows, renovating your home, or
                requiring a fully customised architectural solution - our team
                delivers quality you can see and craftsmanship you can trust.
              </p>
            </div>
            <Link href="#service-3" className="bordered-btn">
              Our Work<i className="fa-light fa-arrow-right"></i>
            </Link>
            <Image
              src={introImg}
              alt=""
              width={550}
              height={505}
              className="pt-30 object-fit-cover"
            />
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1"></div>
          <div className="col-xl-6 col-lg-7 col-md-7">
            <div
              className="single-process-wrap wow fadeInUp animated"
              data-wow-delay="200ms"
            >
              <div className="process-icon">
                <i className="fa-light fa-industry fa-2xl"></i>
                {/* <span className="step-count">1.</span> */}
              </div>
              <div className="process-content">
                <div className="process-title">
                  <h5>Locally Manufactured</h5>
                </div>
                <div className="process-text">
                  <p>
                    All windows are fabricated in our Cranbourne facility for
                    superior quality control.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="single-process-wrap wow fadeInUp animated"
              data-wow-delay="400ms"
            >
              <div className="process-icon">
                <i className="fa-light fa-drafting-compass fa-2xl"></i>
                {/* <span className="step-count">2.</span> */}
              </div>
              <div className="process-content">
                <div className="process-title">
                  <h5>Complex Capability</h5>
                </div>
                <div className="process-text">
                  <p>
                    Experts in architectural designs, including round windows,
                    arches, and oversized glazing.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="single-process-wrap wow fadeInUp animated"
              data-wow-delay="600ms"
            >
              <div className="process-icon">
                <i className="fa-light fa-user-group fa-2xl"></i>
              </div>
              <div className="process-content">
                <div className="process-title">
                  <h5>Family-Owned Care</h5>
                </div>
                <div className="process-text">
                  <p>
                    You deal directly with a local team that cares about the
                    outcome, not just the sale.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="single-process-wrap wow fadeInUp animated"
              data-wow-delay="200ms"
            >
              <div className="process-icon">
                <i className="fa-light fa-comments fa-2xl"></i>
                {/* <span className="step-count">1.</span> */}
              </div>
              <div className="process-content">
                <div className="process-title">
                  <h5>Reliable Communication</h5>
                </div>
                <div className="process-text">
                  <p>
                    We pride ourselves on fast quoting and keeping you informed
                    every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="single-process-wrap mb-0 wow fadeInUp animated"
              data-wow-delay="400ms"
            >
              <div className="process-icon">
                <i className="fa-light fa-badge-check fa-2xl"></i>
                {/* <span className="step-count">2.</span> */}
              </div>
              <div className="process-content">
                <div className="process-title">
                  <h5>Trusted Quality</h5>
                </div>
                <div className="process-text">
                  <p>
                    The preferred choice of Melbourne’s leading custom builders
                    for precision installation and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
