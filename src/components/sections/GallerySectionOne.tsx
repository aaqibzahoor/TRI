"use client"
import Image from "next/image";
import {useEffect} from "react";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import galleryImg1 from "@/assets/img/gallery/1.jpg";
import galleryImg2 from "@/assets/img/gallery/2.jpg";
import galleryImg3 from "@/assets/img/gallery/3.jpg";
import galleryImg4 from "@/assets/img/gallery/4.jpg";
import galleryImg5 from "@/assets/img/gallery/5.jpg";
import galleryImg6 from "@/assets/img/gallery/6.jpg";

export default function GallerySectionOne() {

    useEffect(() => {
        Fancybox.bind("[data-fancybox]");
        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="gallery-section gray-bg section-padding">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                        <a href={galleryImg1.src} data-fancybox="gallery">
                            <Image src={galleryImg1} alt="" className="h-auto"/>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="400ms">
                        <a href={galleryImg2.src} data-fancybox="gallery">
                            <Image src={galleryImg2} alt="" className="h-auto"/>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                        <a href={galleryImg3.src} data-fancybox="gallery">
                            <Image src={galleryImg3} alt="" className="h-auto"/>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                        <a href={galleryImg4.src} data-fancybox="gallery">
                            <Image src={galleryImg4} alt="" className="h-auto"/>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="400ms">
                        <a href={galleryImg5.src} data-fancybox="gallery">
                            <Image src={galleryImg5} alt="" className="h-auto"/>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                        <a href={galleryImg6.src} data-fancybox="gallery">
                            <Image src={galleryImg6} alt="" className="h-auto"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}