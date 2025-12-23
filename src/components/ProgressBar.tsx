"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
    label: string;
    percentage: number;
    shouldAnimate: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, shouldAnimate }) => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;

        if (shouldAnimate) {
            timer = setTimeout(() => {
                setWidth(percentage);
            }, 200);
        }

        return () => {
            if (timer) clearTimeout(timer); // prevent memory leaks
        };
    }, [shouldAnimate, percentage]);

    return (
        <div className="progress-bar-wrapper">
            <div className="single-bar-item">
                <h5>{label}</h5>
                <div className="bar-percentage">{percentage}%</div>
            </div>
            <div className="barfiller">
                <span className="fill" style={{ width: `${width}%` }}></span>
            </div>
        </div>
    );
};

export default ProgressBar;
