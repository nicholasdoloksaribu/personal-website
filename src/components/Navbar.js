"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                borderBottom: scrolled
                    ? "1px solid #e8e8e8"
                    : "1px solid transparent",
                background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                transition: "all 0.3s ease",
                padding: "1.25rem 2.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "1100px",
                margin: "0 auto",
            }}
        >
            <a
                href="#"
                style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "14px",
                    color: "#0f0f0f",
                    textDecoration: "none",
                }}
            >
                nicholas.dev
            </a>
            <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
                {[
                    ["#experience", "Experience"],
                    ["#skills", "Skills"],
                    ["#projects", "Projects"],
                    ["#contact", "Contact"],
                ].map(([href, label]) => (
                    <li key={href}>
                        <a
                            href={href}
                            style={{
                                fontFamily: "Courier New, monospace",
                                fontSize: "12px",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#888",
                                textDecoration: "none",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#0f0f0f")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color = "#888")
                            }
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
