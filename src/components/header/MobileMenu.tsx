"use client";

import MetisMenu from 'metismenujs';
import 'metismenujs/sass';
import {menuData, MenuItem} from "@/data/menuData";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";

const renderMenu = (items: MenuItem[]) => (
    <>
        {items.map((item, idx) => (
            <li key={idx}>
                {item.subMenu ? (
                    <>
                        <a className="has-arrow" href="#">
                            {item.title}
                        </a>
                        <ul className="sub-menu">{renderMenu(item.subMenu)}</ul>
                    </>
                ) : (
                    <Link href={item.path || "#"}>{item.title}</Link>
                )}
            </li>
        ))}
    </>
);

const MobileMenu = ()=> {
    const [navMobileVisible, setNavMobileVisible] = useState(false);

    const openNavMobileMenu = () => setNavMobileVisible(true);
    const closeNavMobileMenu = () => setNavMobileVisible(false);

    const menuRef = useRef<HTMLUListElement>(null);
    const metisMenuInstance = useRef<MetisMenu | null>(null);

    useEffect(() => {
        if (menuRef.current) {
            metisMenuInstance.current = new MetisMenu(menuRef.current);
        }

        return () => {
            metisMenuInstance.current?.dispose();
            metisMenuInstance.current = null;
        };
    }, []);

    return (
        <>
            <div className="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none">
                <div className="mobile-nav-wrap">
                    <div id="hamburger" onClick={openNavMobileMenu}>
                        <i className="las la-bars"></i>
                    </div>
                    {/*-- mobile menu - responsive menu  --*/}
                    <div className={`mobile-nav ${navMobileVisible ? "show" : ""}`}>
                        <button type="button" className="close-nav" onClick={closeNavMobileMenu}>
                            <i className="las la-times-circle"></i>
                        </button>
                        <nav className="sidebar-nav">
                            <ul className="metismenu" id="mobile-menu" ref={menuRef}>
                                {renderMenu(menuData)}
                            </ul>
                        </nav>
                        <div className="action-bar">
                            <a href="mailto:info@tripleewindows.com.au"><i className="las la-envelope"></i>info@tripleewindows.com.au</a>
                            <a href="tel:1300003515"><i className="fal fa-phone"></i>1300 003 515</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu;
