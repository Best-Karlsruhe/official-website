'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
    const navBarLinks = [
        { title: "Home", link: "/", key: 0 },
        { title: "About BEST", link: "/best", key: 1 },
        { title: "Events", link: "/events", key: 2 },
    ];

    const [menuShown, setMenuShown] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();

    const baseAnimationDuration = 100;

    const toggleMenu = () => setMenuShown(prev => !prev);

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

    const [maxHeight, setMaxHeight] = useState(0);
    useEffect(() => {
        if (menuRef.current) {
            setMaxHeight(menuRef.current.scrollHeight);
        }
    }, [menuShown]);

    return (
        <div className="flex flex-col items-center">
            <div className="transition-all ease-in-out duration-100 shadow-sm max-w-min min-w-max bg-base-300 my-4 p-3 z-20 fixed rounded-4xl">
                <div className="navbar p-0 min-h-0 justify-center-safe space-x-2 max-w-min min-w-max">
                    <div className="navbar-start max-w-min min-w-max">
                        <div className="dropdown">
                            <button
                                ref={menuButtonRef}
                                onClick={toggleMenu}
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </button>
                            <Link href="/" className="btn btn-ghost text-xl">OG BEST KA</Link>
                        </div>
                    </div>

                    <div className="navbar-center hidden lg:flex max-w-min min-w-max max-h-min p-0">
                        <ul className="menu menu-horizontal p-0 space-x-1">
                            {navBarLinks.map(link => (
                                <li key={link.key}>
                                    <Link href={link.link}>{link.title}</Link>
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
                    className="overflow-hidden flex flex-col items-center space-y-2 lg:hidden"
                    style={{
                        maxHeight: menuShown ? `${maxHeight}px` : "0px",
                        transition: `max-height ${baseAnimationDuration}ms ease-in-out`,
                    }}
                >
                    {navBarLinks.map((link, index) => (
                        <li
                            key={link.key}
                            className="w-full"
                            style={{
                                opacity: menuShown ? 1 : 0,
                                transition: `opacity ${baseAnimationDuration}ms ease-in-out`,
                                transitionDelay: menuShown ? `${index * baseAnimationDuration}ms` : "0ms",
                            }}
                        >
                            <Link
                                href={link.link}
                                className="btn h-12 w-full btn-ghost"
                                onClick={() => setMenuShown(false)}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
