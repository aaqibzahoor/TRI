"use client";

import {useIntersectionObserver} from "@/utils/useIntersectionObserver";
import CountUp from "react-countup";

export default function CounterSectionOne() {
    const { ref: counterRef, isIntersecting: startCount } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.5,
    });

    return (
        <div ref={counterRef} className="counter-section section-padding pb-0">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="single-counter-box highlights">
                            <p className="counter-number">
                                <span className="purecounter">
                                    <CountUp end={1995} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : undefined} />
                                </span>
                            </p>
                            <h6>Since</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <span className="purecounter">
                                    <CountUp end={16} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : undefined} />
                                </span>
                            </p>
                            <h6>Offices</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <span className="purecounter">
                                    <CountUp end={215} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : undefined} />
                                </span>
                            </p>
                            <h6>Projects</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <span className="purecounter">
                                    <CountUp end={47} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : undefined} />
                                </span>
                            </p>
                            <h6>Countries</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}