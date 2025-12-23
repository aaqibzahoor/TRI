import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/assets/img/logo-white.png";

interface SearchDropdownProps {
    closeSearch: () => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ closeSearch }) => {
    return (
        <>
            <div className="search-popup">
                <span className="search-back-drop" onClick={closeSearch}></span>

                <div className="search-inner">
                    <div className="container bg-transparent">
                        <div className="logo">
                            <Link className="navbar-brand" href="/">
                                <Image src={logoWhite} alt=""/></Link>
                        </div>
                        <button className="close-search" onClick={closeSearch}>
                            <span className="la la-times"></span>
                        </button>
                        <form method="post" action="/">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Type your keyword"/>
                                <button type="submit">
                                    <i className="fal fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchDropdown;