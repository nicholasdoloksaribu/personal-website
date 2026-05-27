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
        <section className="grid-bg min-h-screen flex flex-col justify-center px-5 md:px-10 pt-32 md:pt-40 pb-16 md:pb-20 border-b border-dark-border relative overflow-hidden">
            {/* Glow orb */}
            <div className="absolute top-[20%] -left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,rgba(74,222,128,0.04)_0%,transparent_70%)] pointer-events-none" />

            <p className="fade-up fade-up-1 font-mono text-xs tracking-[0.15em] uppercase text-accent mb-6 flex items-center gap-2">
                <span className="inline-block w-5 h-px bg-accent" />
                Available for work · Jakarta
            </p>

            <h1 className="fade-up fade-up-2 text-[clamp(2.2rem,6vw,5rem)] font-normal leading-[1.1] tracking-tight mb-6 text-text-bright">
                Nicholas Juniarto
                <br />
                <em className="text-text-dimmer italic">Doloksaribu.</em>
            </h1>

            <div className="fade-up fade-up-3 font-mono text-base md:text-lg text-accent mb-8 min-h-[28px]">
                <span>$ </span>
                <span>{displayed}</span>
                <span className="animate-blink text-accent">▋</span>
            </div>

            <p className="fade-up fade-up-3 max-w-[520px] text-base text-text-muted leading-[1.75] mb-12">
                Backend Developer focused on building scalable, production-ready
                systems using Laravel, Redis, and Docker. I turn complex
                problems into clean, maintainable solutions.
            </p>

            <div className="fade-up fade-up-4 flex gap-4 flex-col sm:flex-row flex-wrap">
                <a
                    href="#projects"
                    className="font-mono text-[13px] tracking-[0.08em] uppercase text-dark bg-accent px-6 py-2.5 no-underline transition-opacity duration-200 hover:opacity-80 text-center"
                >
                    View Projects →
                </a>
                <a
                    href="mailto:nicholasdoloksaribu450@gmail.com"
                    className="font-mono text-[13px] tracking-[0.08em] uppercase text-accent border border-accent px-6 py-2.5 no-underline transition-all duration-200 hover:bg-accent hover:text-dark text-center"
                >
                    Get in Touch
                </a>
            </div>

            <div className="fade-up fade-up-5 mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                {[
                    ["3+", "Years Experience"],
                    ["9+", "Projects Built"],
                    ["3.72", "GPA / 4.00"],
                    ["12+", "Certificates"],
                ].map(([num, label]) => (
                    <div key={label} className="border-l-2 border-accent pl-4">
                        <p className="text-2xl md:text-3xl text-text-bright leading-none mb-1">
                            {num}
                        </p>
                        <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-text-dim">
                            {label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
