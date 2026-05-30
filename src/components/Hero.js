"use client";
import { useEffect, useState } from "react";

const ROLES = [
    "Backend Developer",
    "API Engineer",
    "Laravel Expert",
    "System Architect",
];

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [count, setCount] = useState({ exp: 0, proj: 0, gpa: 0, cert: 0 });

    useEffect(() => {
        const role = ROLES[roleIdx];
        let t;
        if (!deleting && displayed.length < role.length) {
            t = setTimeout(
                () => setDisplayed(role.slice(0, displayed.length + 1)),
                75,
            );
        } else if (!deleting && displayed.length === role.length) {
            t = setTimeout(() => setDeleting(true), 2200);
        } else if (deleting && displayed.length > 0) {
            t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        } else {
            setDeleting(false);
            setRoleIdx((i) => (i + 1) % ROLES.length);
        }
        return () => clearTimeout(t);
    }, [displayed, deleting, roleIdx]);

    // Counter animation
    useEffect(() => {
        const duration = 1500;
        const steps = 60;
        const interval = duration / steps;
        let step = 0;
        const timer = setInterval(() => {
            step++;
            const p = step / steps;
            setCount({
                exp: Math.min(3, Math.floor(p * 3)),
                proj: Math.min(9, Math.floor(p * 9)),
                gpa: Math.min(372, Math.floor(p * 372)) / 100,
                cert: Math.min(12, Math.floor(p * 12)),
            });
            if (step >= steps) clearInterval(timer);
        }, interval);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="grid-bg relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 border-b border-indigo-500/10 overflow-hidden">
            {/* Glow orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            <p className="fade-up delay-1 font-mono text-sm tracking-widest uppercase text-cyan-400 mb-8 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gradient-to-r from-indigo-500 to-cyan-400" />
                Available for work · East Jakarta, Indonesia
            </p>

            <h1
                className="fade-up delay-2 font-serif font-normal leading-none tracking-tight text-white mb-8"
                style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
                Nicholas
                <br />
                <span className="gradient-text">Juniarto</span>
                <br />
                <span className="text-slate-600 italic">Doloksaribu.</span>
            </h1>

            <div className="fade-up delay-3 font-mono text-xl md:text-2xl text-white mb-6 flex items-center gap-1 min-h-9">
                <span className="text-indigo-400">$ </span>
                <span className="text-cyan-300">{displayed}</span>
                <span className="cursor-blink text-cyan-300">▋</span>
            </div>

            <p className="fade-up delay-3 text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
                Backend Developer focused on building{" "}
                <span className="text-white font-medium">
                    scalable, production-ready systems
                </span>{" "}
                using Laravel, Redis, and Docker. I turn complex problems into
                clean, maintainable solutions.
            </p>

            <div className="fade-up delay-4 flex flex-col sm:flex-row gap-4">
                <a
                    href="#projects"
                    className="glow-btn font-mono text-sm tracking-widest uppercase bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 no-underline hover:opacity-90 transition-all text-center rounded-sm"
                >
                    View Projects →
                </a>
                <a
                    href="mailto:nicholasdoloksaribu450@gmail.com"
                    className="font-mono text-sm tracking-widest uppercase border border-indigo-500/50 text-indigo-300 px-8 py-4 no-underline hover:border-cyan-400 hover:text-cyan-400 transition-all text-center rounded-sm"
                >
                    Get in Touch
                </a>
            </div>

            <div className="fade-up delay-5 flex flex-wrap gap-10 mt-20">
                {[
                    [`${count.exp}+`, "Years Experience"],
                    [`${count.proj}+`, "Projects Built"],
                    [count.gpa.toFixed(2), "GPA / 4.00"],
                    [`${count.cert}+`, "Certificates"],
                ].map(([num, label]) => (
                    <div key={label} className="group">
                        <p className="text-5xl md:text-6xl text-white font-normal leading-none mb-2 group-hover:gradient-text transition-all">
                            {num}
                        </p>
                        <p className="font-mono text-xs tracking-widest uppercase text-slate-600">
                            {label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
