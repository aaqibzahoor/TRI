"use client";

import { useEffect, useRef, useCallback } from "react";

export default function BackToTop() {
    const pathRef = useRef<SVGPathElement | null>(null);
    const progressWrapRef = useRef<HTMLDivElement | null>(null);
    const totalLengthRef = useRef(0);
    const ticking = useRef(false);

    // Initialize path once
    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const totalLength = path.getTotalLength();
        totalLengthRef.current = totalLength;

        // Setup path for scroll progress
        path.style.transition = "none";
        path.style.strokeDasharray = `${totalLength} ${totalLength}`;
        path.style.strokeDashoffset = totalLength.toString();

        // Force reflow before enabling transition
        path.getBoundingClientRect();

        // Modern transition (no deprecated vendor prefixes)
        path.style.transition = "stroke-dashoffset 10ms linear";
    }, []);

    // Efficient scroll handler (throttled via rAF)
    const handleScroll = useCallback(() => {
        if (ticking.current) return;
        ticking.current = true;

        requestAnimationFrame(() => {
            const path = pathRef.current;
            const progressWrap = progressWrapRef.current;
            if (!path || !progressWrap) return;

            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            const drawLength = totalLengthRef.current * (1 - scrollPercent);

            path.style.strokeDashoffset = drawLength.toString();

            if (scrollTop > 50) {
                progressWrap.classList.add("active-progress");
            } else {
                progressWrap.classList.remove("active-progress");
            }

            ticking.current = false;
        });
    }, []);

    // Add/remove scroll listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initialize immediately

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    // Scroll to top
    const scrollToTop = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div
            className="progress-wrap"
            ref={progressWrapRef}
            onClick={scrollToTop}
        >
            <svg
                className="progress-circle svg-content"
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
            >
                <path
                    ref={pathRef}
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                />
            </svg>
        </div>
    );
}
