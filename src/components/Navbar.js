"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const links = [
        ["#experience", "Experience"],
        ["#skills", "Skills"],
        ["#projects", "Projects"],
        ["#contact", "Contact"],
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 md:px-10 py-5 flex justify-between items-center ${
                scrolled
                    ? "border-b border-line bg-dark/[.92] backdrop-blur-md"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <a
                href="#"
                className="font-mono text-sm text-text no-underline tracking-[0.05em]"
            >
                <span className="text-accent">~/</span>nicholas.dev
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-8 list-none">
                {links.map(([href, label]) => (
                    <li key={href}>
                        <a
                            href={href}
                            className="font-mono text-xs tracking-[0.1em] uppercase text-text-dim no-underline transition-colors duration-200 hover:text-accent"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
                aria-label="Toggle menu"
            >
                <span
                    className={`block w-5 h-0.5 bg-accent transition-all duration-300 origin-center ${
                        menuOpen
                            ? "rotate-45 translate-y-[7px]"
                            : ""
                    }`}
                />
                <span
                    className={`block w-5 h-0.5 bg-accent transition-all duration-300 ${
                        menuOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                    className={`block w-5 h-0.5 bg-accent transition-all duration-300 origin-center ${
                        menuOpen
                            ? "-rotate-45 -translate-y-[7px]"
                            : ""
                    }`}
                />
            </button>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-md border-b border-line md:hidden transition-all duration-300 overflow-hidden ${
                    menuOpen
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <ul className="list-none flex flex-col py-4">
                    {links.map(([href, label]) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="block font-mono text-xs tracking-[0.1em] uppercase text-text-dim no-underline px-5 py-3 transition-colors duration-200 hover:text-accent hover:bg-dark-hover"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
