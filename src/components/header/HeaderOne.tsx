"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/img/tri/tri-white-logo.png";
import logoImg2 from "@/assets/img/tri/tri-logo.png";
import MainMenu from "@/components/header/MainMenu";
import MobileMenu from "@/components/header/MobileMenu";
import OffCanvas from "@/components/OffCanvas";
import { useRef, useState } from "react";
import useStickyHeaders from "@/utils/useStickyHeaders";
import { usePathname } from "next/navigation";
import "./HeaderOne.css";

export default function HeaderOne() {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();
  const isThankYouPage = pathname === "/thank-you";

  useStickyHeaders([headerRef]);

  return (
    <div
      id="header-1"
      className={`header-area ${isThankYouPage ? "" : "absolute-header"}`}
    >
      <div ref={headerRef} id="header-sticky">
        <div className="navigation">
          <div className="container-fluid">
            <div className="header-inner-box">
              {/*-- Main Menu  --*/}
              <MainMenu />

              {/*-- Logo --*/}
              <div className="logo">
                <Link className="navbar-brand" href="/">
                  <Image
                    src={isThankYouPage ? logoImg2 : logoImg}
                    alt=""
                    className=" h-auto"
                    style={{ width: "200px" }}
                  />
                </Link>
              </div>

              <div className="header-right">
                {/*-- Search Button  --*/}
                {/* <SearchMenu/> */}
                <Link
                  href="tel:1300003515"
                  className="white-btn phone-btn"
                  style={
                    isThankYouPage
                      ? { color: "#000000", borderColor: "#000000" }
                      : {}
                  }
                >
                  <i
                    className="fa-light fa-phone"
                    style={{ transform: "rotate(0deg)" }}
                  ></i>{" "}
                  1300 003 515
                </Link>
                {/*-- Header Button --*/}
                {/* --{" "}
                <a
                  href="quote.html"
                  className="theme-btn d-none d-lg-inline-block"
                >
                  Request a Quote
                </a>{" "}
                --
                <div className="header-btn">
                  <div
                    className="menu-trigger"
                    onClick={() => setIsActive(true)}
                  >
                    <span className="lines"></span>
                    <span className="lines"></span>
                    <span className="lines"></span>
                  </div>
                </div> */}
              </div>

              {/*-- Mobile Menu --*/}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>

      <OffCanvas isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
