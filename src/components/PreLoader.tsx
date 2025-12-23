"use client";

import { useEffect, useState } from "react";

export default function PreLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Track if component is still mounted
        let isMounted = true;
        let timeoutId: ReturnType<typeof setTimeout> | undefined;

        const handleLoad = () => {
            timeoutId = setTimeout(() => {
                if (isMounted) setIsLoading(false);
            }, 400); // smooth fade-out
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            // use `{ once: true }` so event auto-cleans after firing
            window.addEventListener("load", handleLoad, { once: true });
        }

        return () => {
            isMounted = false;
            if (timeoutId) clearTimeout(timeoutId);
            // remove just in case (safe even with `{ once: true }`)
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <div id="loader" className={`${!isLoading ? "fade-out d-none" : ""}`}></div>
    )
}