"use client"; // Ensures it runs only on the client

import { useEffect } from "react";

const WowProvider = () => {
    useEffect(() => {
        // Dynamically import WOW.js only in the browser
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        import("wow.js").then((module) => {
            const WOW = module.default;
            new WOW().init();
        });
    }, []);

    return null; // No UI, just initialization
};

export default WowProvider;