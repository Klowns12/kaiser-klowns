"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Left: Hamburger + Search */}
                <div className="flex items-center">
                    <HamburgerMenu />
                </div>

                {/* Center: Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <Image
                        src="/logo/favicon copy.ico"
                        alt="Kaiser Klowns"
                        width={50}
                        height={50}
                        priority
                        className={`transition-all duration-500 ${scrolled ? "w-[36px]" : "w-[50px]"
                            } h-auto`}
                    />
                </Link>

                {/* Right: Language Switcher */}
                <div className="flex items-center">
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}