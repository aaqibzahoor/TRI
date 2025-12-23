import Image from "next/image";
import contactImg from "@/assets/img/tri/team3.jpg";

export default function ContactSectionOne() {
  return (
    <div id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-info-wrap">
          <div className="row mt-60">
            <div className="col-xl-6">
              <Image
                src={contactImg}
                alt=""
                width={800}
                height={800}
              />
              {/* <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3690.404245521138!2d91.80989606467384!3d22.338360085303748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdewanhat%20near%20Chattogram!5e0!3m2!1sen!2sbd!4v1677069314806!5m2!1sen!2sbd"
                  width="600"
                  height="600"
                  className="border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </div>
            <div className="col-xl-6">
              <div className="contact-info">
                <div className="section-title">
                  <h2 className="visible-slowly-right">Contact Us</h2>
                </div>
                {/* <div className="contact-info-inner">
                  <div
                    className="single-contact-info wow fadeInUp animated"
                    data-wow-delay="200ms"
                  >
                    <p>Email</p>
                    <h4>info@florix.com</h4>
                  </div>
                  <div
                    className="single-contact-info wow fadeInUp animated"
                    data-wow-delay="400ms"
                  >
                    <p>Phone</p>
                    <h4>(123) 456-7890</h4>
                  </div>
                  <div
                    className="single-contact-info wow fadeInUp animated"
                    data-wow-delay="600ms"
                  >
                    <p>Address</p>
                    <h4>77 Kennedy Road, Manhattan, New York - USA</h4>
                  </div>
                  <div className="social-area">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-skype"></i>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
