"use client";

import ProgressBar from "@/components/ProgressBar";
import {useEffect, useRef, useState} from "react";

interface ProgressBarsProps {
    classes?: string
}

const ProgressBars: React.FC<ProgressBarsProps> = ({ classes }) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const progressRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% visible
        );

        const currentRef = progressRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        };
    }, [hasAnimated]);

    const bars = [
        { label: "Market Leadership", percentage: 90 },
        { label: "Affordable Luxury", percentage: 70 },
        { label: "Durable Materials", percentage: 80 },
    ];

    return (
        <div ref={progressRef} className={`progress-bar-area ${classes}`}>
            {bars.map((bar, i) => (
                <ProgressBar key={i} label={bar.label} percentage={bar.percentage} shouldAnimate={hasAnimated}/>
            ))}
        </div>
    );
};

export default ProgressBars;
