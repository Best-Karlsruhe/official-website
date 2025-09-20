'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
    const navBarLinks: { title: string, link: string, key: number }[] = [
        { title: "Home", link: "/", key: 0 },
        { title: "About BEST", link: "/best", key: 1 },
        { title: "Events", link: "/events", key: 2 },
    ];

    const [menuShown, setMenuShown] = useState(false);

    const toggleMenu = () => {
        setMenuShown(!menuShown);
        console.log("toggling");
    };

    const menuRef = useRef<HTMLUListElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target as Node)
            ) {
                setMenuShown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setMenuShown(false);
    }, [pathname]);

    const baseAnimationDuration = 50;

    return (
        <div className="flex flex-col items-center">
            <div className="transition-all shadow-sm max-w-min min-w-max bg-base-300 my-4 p-3 z-20 fixed rounded-4xl">
                <div className="navbar p-0 min-h-0 justify-center-safe space-x-2 max-w-min min-w-max">
                    <div className="navbar-start max-w-min min-w-max">
                        <div className="dropdown">
                            <button ref={menuButtonRef} onClick={toggleMenu} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </button>
                            <Link href="/" className="btn btn-ghost text-xl">OG BEST KA</Link>
                        </div>
                    </div>

                    <div className="navbar-center hidden lg:flex max-w-min min-w-max max-h-min p-0">
                        <ul className="menu menu-horizontal p-0 space-x-1">
                            {navBarLinks.map(navBarLink => (
                                <li key={navBarLink.key}>
                                    <Link href={navBarLink.link}>{navBarLink.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="navbar-end max-w-min min-w-max">
                        <Link href="/contact" className="btn btn-primary">Contact</Link>
                    </div>
                </div>

                <ul
                    ref={menuRef}
                    className={`overflow-hidden transition-all duration-${navBarLinks.length * baseAnimationDuration} flex flex-col items-center space-y-2 lg:hidden ${menuShown ? "max-h-96 opacity-100 pt-6" : "max-h-0 opacity-0"
                        }`}
                >
                    {navBarLinks.map((navBarLink, index) => (
                        <li
                            key={navBarLink.key}
                            className={`transition-opacity duration-${navBarLinks.length * baseAnimationDuration} w-full ${menuShown ? "opacity-100" : "opacity-0"
                                }`}
                            style={{ transitionDelay: `${(index + 1) * baseAnimationDuration}ms` }}
                        >
                            <Link href={navBarLink.link} className=" btn h-12 w-full btn-ghost" onClick={() => setMenuShown(false)}>{navBarLink.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
