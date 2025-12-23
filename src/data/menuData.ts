export interface SubMenuItem {
    title: string;
    path: string;
}

export interface MenuItem {
    title: string;
    path?: string; // optional if it only has sub-menu
    subMenu?: SubMenuItem[];
    isExternal?: boolean;
}

// data
export const menuData: MenuItem[] = [
    {
        title: "Home",
        subMenu: [
            { title: "Home - One", path: "/" },
            { title: "Home - Two", path: "/home-2" },
            { title: "Home - Three", path: "/home-3" },
        ],
    },
    {
        title: "Pages",
        subMenu: [
            { title: "About Us", path: "/about" },
            { title: "Our Services", path: "/services" },
            { title: "Our Team", path: "/team" },
            { title: "Pricing", path: "/price" },
            { title: "FAQs", path: "/faq" },
        ],
    },
    {
        title: "Services",
        subMenu: [
            { title: "Services", path: "/services" },
            { title: "Service Details", path: "/services/details" },
        ],
    },
    {
        title: "Projects",
        subMenu: [
            { title: "Projects", path: "/projects" },
            { title: "Project Details", path: "/projects/details" },
        ],
    },
    {
        title: "Blog",
        subMenu: [
            { title: "Blog", path: "/blog" },
            { title: "Blog Details", path: "/blog/details" },
        ],
    },
    {
        title: "Contact",
        path: "/contact",
    },
];
