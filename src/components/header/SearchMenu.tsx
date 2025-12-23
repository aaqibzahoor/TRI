"use client";

import {useEffect} from "react";
import SearchDropdown from "@/components/header/SearchDropdown";

export default function SearchMenu() {
    const openSearch = () => document.body.classList.add('search-active');
    const closeSearch = () => document.body.classList.remove('search-active');

    useEffect(() => {
        return () => document.body.classList.remove('search-active');
    }, []);

    return (
        <>
            <div className="search-trigger" onClick={openSearch}>
                <i className="fal fa-search"></i>
            </div>
            {/*-- Search Dropdown --*/}
            <SearchDropdown closeSearch={closeSearch}/>
        </>
    )
}