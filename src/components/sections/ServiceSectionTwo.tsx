export default function ServiceSectionTwo() {
  return (
    <div id="service-2" className="service-section section-padding pb-90">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-xl-6 col-lg-5 col-md-6">
            <div className="section-title">
              <h6>Services</h6>
              <h2 className="visible-slowly-right">
                Complete Aluminium Solutions. <br /> Locally Crafted.
              </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 col-md-5">
            <p className="pt-40">
              At Triple E Windows, we don’t just supply windows; we deliver
              complete glazing solutions. Whether you are upgrading a single
              room or building a complex architectural home, our Cranbourne
              facility gives us the versatility to handle it all.
            </p>
            {/* <Link href="/services" className="details-link">
              View All Services <i className="fa-light fa-arrow-right"></i>
            </Link> */}
          </div>
        </div>
        <div className="row mt-60">
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
            data-wow-delay="200ms"
          >
            <div className="single-service-item">
              <div className="service-icon">
                <i className="fa-light fa-house fa-3x"></i>
              </div>
              <div className="service-title">
                <h5>Residential Window Replacements</h5>
              </div>
              {/* <Link href="/services/details" className="details-link">
                <i className="fa-light fa-arrow-right"></i>
              </Link> */}
              <div className="border-right d-none d-md-inline-block"></div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
            data-wow-delay="400ms"
          >
            <div className="single-service-item">
              <div className="service-icon">
                <i className="fa-light fa-window-frame fa-3x"></i>
              </div>
              <div className="service-title">
                <h5>Architectural & Bespoke Windows</h5>
              </div>
              {/* <Link href="/services/details" className="details-link">
                <i className="fa-light fa-arrow-right"></i>
              </Link> */}
              <div className="border-right d-none d-lg-inline-block"></div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
            data-wow-delay="600ms"
          >
            <div className="single-service-item">
              <div className="service-icon">
                <i className="fa-light fa-hammer fa-3x"></i>
              </div>
              <div className="service-title">
                <h5>New Homes & Renovations</h5>
              </div>
              {/* <Link href="/services/details" className="details-link">
                <i className="fa-light fa-arrow-right"></i>
              </Link> */}
              <div className="border-right d-none d-md-inline-block"></div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated"
            data-wow-delay="800ms"
          >
            <div className="single-service-item">
              <div className="service-icon">
                <i className="fa-light fa-building fa-3x"></i>
              </div>
              <div className="service-title">
                <h5>Commercial Aluminium Partitions</h5>
              </div>
              {/* <Link href="/services/details" className="details-link">
                <i className="fa-light fa-arrow-right"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
