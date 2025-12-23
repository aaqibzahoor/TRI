import FooterBottom from "@/components/footer/FooterBottom";
import Link from "next/link";

export default function FooterOne() {
  return (
    <>
      <div className="footer-section pt-80 footer-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="footer-content-wrap">
                <div className="section-title">
                  <h2 className="text-white visible-slowly-right">
                    Transform Your Space
                  </h2>
                </div>
                <hr />
                <p
                  className="text-white wow fadeInUp animated"
                  data-wow-delay="400ms"
                >
                  Transform the look and feel of your existing home by replacing
                  tired timber or outdated aluminium windows with our modern,
                  high-performance systems. We focus on upgrades that
                  immediately improve thermal insulation, noise reduction, and
                  security.
                </p>
                <Link
                  href="#contact"
                  className="white-btn mt-20 wow fadeInDown animated"
                  data-wow-delay="600ms"
                >
                  Let's Talk <i className="fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-1"></div>
            <div className="col-xl-3 col-lg-3 col-md-5">
              <div className="contact-info-wrap mt-40">
                <div
                  className="single-contact-info wow fadeInUp animated"
                  data-wow-delay="200ms"
                >
                  <h6 className="text-white">Phone</h6>
                  <Link
                    style={{ fontSize: "18px" }}
                    className="text-white"
                    href="tel:1300003515"
                  >
                    1300 003 515
                  </Link>
                </div>
                <div
                  className="single-contact-info wow fadeInUp animated"
                  data-wow-delay="400ms"
                >
                  <h6 className="text-white">E-mail</h6>
                  <Link
                    style={{ fontSize: "18px" }}
                    className="text-white"
                    href="mailto:info@tripleewindows.com.au"
                  >
                    info@tripleewindows.com.au
                  </Link>
                </div>
                {/* <div className="single-contact-info wow fadeInUp animated" data-wow-delay="600ms">
                                    <h6 className="text-white">Directions</h6>
                                    <p>77 Kennedy Road <br/>
                                        Soho Manhattan <br/>
                                        New York - USA</p>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <FooterBottom/> */}
    </>
  );
}
