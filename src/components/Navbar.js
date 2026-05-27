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
                    ? "1px solid #222"
                    : "1px solid transparent",
                background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                transition: "all 0.3s ease",
                padding: "1.25rem 2.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <a
                href="#"
                style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "14px",
                    color: "#e8e8e8",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                }}
            >
                <span style={{ color: "#4ade80" }}>~/</span>nicholas.dev
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
                                color: "#666",
                                textDecoration: "none",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#4ade80")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color = "#666")
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
