"use client";
import { useEffect, useState } from "react";

const ROLES = [
    "Backend Developer",
    "API Engineer",
    "Laravel Developer",
    "System Builder",
];

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const role = ROLES[roleIdx];
        let timeout;

        if (!deleting && displayed.length < role.length) {
            timeout = setTimeout(
                () => setDisplayed(role.slice(0, displayed.length + 1)),
                80,
            );
        } else if (!deleting && displayed.length === role.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(
                () => setDisplayed(displayed.slice(0, -1)),
                40,
            );
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setRoleIdx((i) => (i + 1) % ROLES.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, roleIdx]);

    return (
        <section
            className="grid-bg"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "8rem 2.5rem 5rem",
                borderBottom: "1px solid #1a1a1a",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Glow orb */}
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "-10%",
                    width: "500px",
                    height: "500px",
                    background:
                        "radial-gradient(circle, rgba(74,222,128,0.04) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <p
                className="fade-up fade-up-1"
                style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#4ade80",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        width: "20px",
                        height: "1px",
                        background: "#4ade80",
                    }}
                />
                Available for work · East Jakarta
            </p>

            <h1
                className="fade-up fade-up-2"
                style={{
                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    fontWeight: "normal",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    marginBottom: "1.5rem",
                    color: "#f0f0f0",
                }}
            >
                Nicholas Juniarto
                <br />
                <em style={{ color: "#444", fontStyle: "italic" }}>
                    Doloksaribu.
                </em>
            </h1>

            <div
                className="fade-up fade-up-3"
                style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "18px",
                    color: "#4ade80",
                    marginBottom: "2rem",
                    minHeight: "28px",
                }}
            >
                <span>$ </span>
                <span>{displayed}</span>
                <span className="cursor-blink" style={{ color: "#4ade80" }}>
                    ▋
                </span>
            </div>

            <p
                className="fade-up fade-up-3"
                style={{
                    maxWidth: "520px",
                    fontSize: "16px",
                    color: "#888",
                    lineHeight: 1.75,
                    marginBottom: "3rem",
                }}
            >
                Backend Developer focused on building scalable, production-ready
                systems using Laravel, Redis, and Docker. I turn complex
                problems into clean, maintainable solutions.
            </p>

            <div
                className="fade-up fade-up-4"
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
                <a
                    href="#projects"
                    style={{
                        fontFamily: "Courier New, monospace",
                        fontSize: "13px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#0a0a0a",
                        background: "#4ade80",
                        padding: "10px 24px",
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.8")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                    View Projects →
                </a>
                <a
                    href="mailto:nicholasdoloksaribu450@gmail.com"
                    style={{
                        fontFamily: "Courier New, monospace",
                        fontSize: "13px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#4ade80",
                        border: "1px solid #4ade80",
                        padding: "10px 24px",
                        textDecoration: "none",
                        transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#4ade80";
                        e.currentTarget.style.color = "#0a0a0a";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#4ade80";
                    }}
                >
                    Get in Touch
                </a>
            </div>

            <div
                className="fade-up fade-up-5"
                style={{
                    marginTop: "5rem",
                    display: "flex",
                    gap: "3rem",
                    flexWrap: "wrap",
                }}
            >
                {[
                    ["3+", "Years Experience"],
                    ["9+", "Projects Built"],
                    ["3.72", "GPA / 4.00"],
                    ["12+", "Certificates"],
                ].map(([num, label]) => (
                    <div
                        key={label}
                        style={{
                            borderLeft: "2px solid #4ade80",
                            paddingLeft: "1rem",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "2rem",
                                color: "#f0f0f0",
                                lineHeight: 1,
                                marginBottom: "4px",
                            }}
                        >
                            {num}
                        </p>
                        <p
                            style={{
                                fontFamily: "Courier New, monospace",
                                fontSize: "11px",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#666",
                            }}
                        >
                            {label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
