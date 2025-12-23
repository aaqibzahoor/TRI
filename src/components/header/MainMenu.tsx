"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {menuData, MenuItem} from "@/data/menuData";

export default function MainMenu() {
    const pathname = usePathname();

    return (
        <div className="main-menu d-none d-lg-block">
            <ul>
                {menuData.map((menu: MenuItem, idx: number) => {
                    const isActive =
                        menu.path === pathname ||
                        menu.subMenu?.some((sub) => sub.path === pathname);

                    return (
                        <li key={idx} className={isActive ? "active" : ""}>
                            {menu.path ? (
                                <Link className="navlink" href={menu.path}>
                                    {menu.title}
                                </Link>
                            ) : (
                                <a className="navlink" href="#">
                                    {menu.title}
                                </a>
                            )}

                            {menu.subMenu && (
                                <ul className="sub-menu">
                                    {menu.subMenu.map((sub, subIdx) => (
                                        <li key={subIdx}>
                                            <Link
                                                href={sub.path}
                                                className={pathname === sub.path ? "active" : ""}
                                            >
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
