"use client";
import { useState, useEffect } from "react";

const links = [
    ["#experience", "Experience"],
    ["#skills", "Skills"],
    ["#projects", "Projects"],
    ["#contact", "Contact"],
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${scrolled || menuOpen ? "border-b border-indigo-500/20 bg-slate-950/90 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}
        >
            <a
                href="#"
                className="font-mono text-base tracking-wider text-white no-underline z-50 font-bold"
            >
                <span className="gradient-text">~/</span>
                <span className="text-white">nicholas</span>
                <span className="text-indigo-400">.dev</span>
            </a>

            <ul className="hidden md:flex gap-10 list-none">
                {links.map(([href, label]) => (
                    <li key={href}>
                        <a
                            href={href}
                            className="font-mono text-xs tracking-widest uppercase text-slate-500 no-underline hover:text-cyan-400 transition-colors duration-300 relative group"
                        >
                            {label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                        </a>
                    </li>
                ))}
            </ul>

            <button
                className="md:hidden text-white text-2xl z-50 bg-transparent border-none cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {menuOpen && (
                <div className="fixed inset-0 bg-slate-950/98 backdrop-blur-xl flex flex-col items-center justify-center gap-12 z-40">
                    {links.map(([href, label]) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="font-mono text-2xl tracking-widest uppercase text-slate-400 no-underline hover:text-cyan-400 transition-colors duration-300"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
