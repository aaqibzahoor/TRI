"use client";

import { useEffect, useRef, useState } from "react";

type UseIntersectionObserverOptions = IntersectionObserverInit;

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
    options: UseIntersectionObserverOptions = { threshold: 0.5 }
) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<T | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current; // snapshot current
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [options]);

    return { ref, isIntersecting };
}