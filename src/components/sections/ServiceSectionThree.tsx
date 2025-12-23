import Image from "next/image";
import serviceImg1 from "@/assets/img/tri/window6.jpg";
import serviceImg2 from "@/assets/img/tri/window7.jpg";
import serviceImg3 from "@/assets/img/tri/window3.jpg";
import serviceImg4 from "@/assets/img/tri/window9.jpg";
import serviceImg5 from "@/assets/img/tri/window4.jpg";
import serviceImg6 from "@/assets/img/tri/window15.jpg";
import serviceImg7 from "@/assets/img/tri/window5.jpg";
import serviceImg8 from "@/assets/img/tri/window14.jpg";
import serviceImg9 from "@/assets/img/tri/window8.jpg";
import serviceImg10 from "@/assets/img/tri/window10.JPG";
import serviceImg11 from "@/assets/img/tri/window12.jpg";
import serviceImg12 from "@/assets/img/tri/window17.jpg";
import Link from "next/link";

export default function ServiceSectionThree() {
  return (
    <div id="service-3" className="service-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-title">
              <h6>Our Work</h6>
              <h2 className="visible-slowly-right">Recent Projects</h2>
              <p className="pt-40">
                A curated selection of residential installations, architectural
                window designs and premium replacements.
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-1"></div>
          {/* <div className="col-xl-4 col-lg-4 col-md-5">
            <p className="pt-40">Showcase:</p>
            <ul>
              <li>Finished home fronts</li>
              <li>Interior captures</li>
              <li>Detail shots</li>
              <li>On-site action and installation process</li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="service-wrapper mt-30">
        <div className="row gx-0">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg1}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Stylish Surfaces</span>
                                <h6>Tiling Installation</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg2}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Durable Design</span>
                                <h6>Floor Repair</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg3}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Quality Floor</span>
                                <h6>Floor Refinishing</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg4}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Timeless Elegance</span>
                                <h6>Tile Grouting</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg5}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Modern Flooring</span>
                                <h6>Underfloor Heating Installation</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg6}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Enduring Craftsmanship</span>
                                <h6>Floor Polishing</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg7}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Seamless Style</span>
                                <h6>Waterprofing</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg8}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Seamless Style</span>
                                <h6>Waterprofing</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg9}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Seamless Style</span>
                                <h6>Waterprofing</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg10}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Seamless Style</span>
                                <h6>Waterprofing</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg11}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Seamless Style</span>
                                <h6>Waterprofing</h6>
                            </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service-item">
              <Image
                src={serviceImg12}
                alt=""
                height={250}
                className="w-100 object-fit-cover"
              />
              {/* <div className="service-info">
                                <span>Seamless Style</span>
                                <h6>Waterprofing</h6>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
