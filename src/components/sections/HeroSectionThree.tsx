"use client";

import Image, { StaticImageData } from "next/image";

export default function HeroSectionThree({
  index,
  subtitle,
  title,
  description,
  image,
}: {
  index: number;
  subtitle: string;
  title: string;
  description: React.ReactNode;
  image: string | StaticImageData;
}) {
  return (
    <div id="home-3" style={{ marginBottom: "10rem" }} className="hero-area">
      <div className={`row hero-area-inner align-items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
        <div className="col-xl-5 col-lg-5">
          <div className="hero-content-wrap">
            <div className="section-title">
              <h6>{subtitle}</h6>
              <h2 className="visible-slowly-right">{title}</h2>
            </div>
            <p className="wow fadeInUp animated" data-wow-delay="400ms">
              {description}
            </p>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7">
          <Image src={image} alt="" className="h-auto" />
        </div>
      </div>
    </div>
  );
}
