"use client";

import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/img/logo.png";
import MainMenu from "@/components/header/MainMenu";
import MobileMenu from "@/components/header/MobileMenu";
import {useRef, useState} from "react";
import OffCanvas from "@/components/OffCanvas";
import SearchMenu from "@/components/header/SearchMenu";
import useStickyHeaders from "@/utils/useStickyHeaders";

export default function HeaderThree() {
    const [isActive, setIsActive] = useState(false);
    const headerRef = useRef(null);

    useStickyHeaders([headerRef]);

    return (
        <div id="header-1" className="header-area">
            <div ref={headerRef} id="header-sticky">
                <div className="navigation">
                    <div className="container">
                        <div className="header-inner-box">

                            {/*-- Main Menu  --*/}
                            <MainMenu/>

                            {/*-- Logo --*/}
                            <div className="logo">
                                <Link className="navbar-brand" href="/">
                                    <Image src={logoImg} alt="" className="h-auto"/>
                                </Link>
                            </div>

                            <div className="header-right">

                                {/*-- Search Button  --*/}
                                <SearchMenu/>
                                <div className="contact-number d-none">
                                    <div className="icon"><i className="las la-phone-volume"></i></div>
                                    <div className="title"><h4>1 800 458 56 97</h4></div>
                                </div>
                                {/*-- Header Button --*/}
                                {/*-- <a href="quote.html" className="theme-btn d-none d-lg-inline-block">Request a Quote</a> --*/}
                                <div className="header-btn">
                                    <div className="menu-trigger" onClick={() => setIsActive(true)}>
                                        <span className="lines"></span>
                                        <span className="lines"></span>
                                        <span className="lines"></span>
                                    </div>
                                </div>

                            </div>

                            {/*-- Mobile Menu --*/}
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
            </div>

            <OffCanvas isActive={isActive} setIsActive={setIsActive}/>
        </div>
    )
}