"use client";

import {usePathname} from "next/navigation";
import FooterOne from "@/components/footer/FooterOne";
import FooterTwo from "@/components/footer/FooterTwo";
import FooterThree from "@/components/footer/FooterThree";
import FooterFour from "@/components/footer/FooterFour";

export default function Footer() {
    const pathname = usePathname();

    if (pathname === '/contact') {
        return <FooterFour/>
    }
    if (pathname === '/home-3') {
        return <FooterThree/>
    }
    if (pathname === '/home-2') {
        return <FooterTwo/>
    }
    return <FooterOne/>
}