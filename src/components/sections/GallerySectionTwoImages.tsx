"use client"

import Image from "next/image";
import {useEffect} from "react";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import galleryImgG1 from "@/assets/img/gallery/g-1.jpg";
import galleryImgG2 from "@/assets/img/gallery/g-2.jpg";
import galleryImgG3 from "@/assets/img/gallery/g-3.jpg";
import galleryImgG4 from "@/assets/img/gallery/g-4.jpg";
import galleryImgG5 from "@/assets/img/gallery/g-5.jpg";
import galleryImgG6 from "@/assets/img/gallery/g-6.jpg";

export default function GallerySectionTwoImages() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]");
        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="row gy-4">
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                <a href={galleryImgG1.src} data-fancybox="gallery">
                    <Image src={galleryImgG1} alt="" className="h-auto"/>
                </a>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="400ms">
                <a href={galleryImgG2.src} data-fancybox="gallery">
                    <Image src={galleryImgG2} alt="" className="h-auto"/>
                </a>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                <a href={galleryImgG3.src} data-fancybox="gallery">
                    <Image src={galleryImgG3} alt="" className="h-auto"/>
                </a>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                <a href={galleryImgG4.src} data-fancybox="gallery">
                    <Image src={galleryImgG4} alt="" className="h-auto"/>
                </a>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="400ms">
                <a href={galleryImgG5.src} data-fancybox="gallery">
                    <Image src={galleryImgG5} alt="" className="h-auto"/>
                </a>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                <a href={galleryImgG6.src} data-fancybox="gallery">
                    <Image src={galleryImgG6} alt="" className="h-auto"/>
                </a>
            </div>
        </div>
    )
}