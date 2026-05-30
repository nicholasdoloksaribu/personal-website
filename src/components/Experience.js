"use client";
import useScrollReveal from "../hooks/useScrollReveal";

const experiences = [
    {
        company: "Jelajah Data Semesta",
        location: "Central Jakarta",
        role: "Internship Backend Developer",
        period: "Oct 2025 – Apr 2026",
        points: [
            "Developed backend services using Laravel for scalable web applications",
            "Designed and implemented RESTful APIs for frontend integration (Next.js, Inertia.js)",
            "Implemented Redis-based queue system for asynchronous task processing",
            "Containerized application using Docker for consistent environments",
            "Improved system stability through debugging, refactoring, and performance tuning",
        ],
    },
    {
        company: "deGadai",
        location: "South Jakarta",
        role: "Internship Web Developer",
        period: "Jun – Aug 2024",
        points: [
            "Built responsive web pages and supported frontend/backend development",
            "Improved website performance and SEO",
            "Performed testing and debugging across devices",
        ],
    },
    {
        company: "SLA Martoba",
        location: "North Sumatra",
        role: "IT Support",
        period: "Jun – Aug 2022",
        points: [
            "Provided technical support and resolved hardware, software, and network issues",
            "Maintained system performance and minimized downtime",
        ],
    },
];

function ExpItem({ exp, index }) {
    const ref = useScrollReveal();
    return (
        <div
            ref={ref}
            className="scroll-reveal grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-12 py-12 border-b border-slate-800/50 group"
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            {/* Left */}
            <div>
                <p className="text-xl md:text-2xl text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {exp.company}
                </p>
                <p className="font-mono text-sm text-slate-500 mb-3">
                    {exp.location}
                </p>
                <span className="font-mono text-xs text-cyan-300 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full">
                    {exp.period}
                </span>
            </div>

            {/* Right */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-green-400/60" />
                    <p className="text-lg text-cyan-300 font-medium">
                        {exp.role}
                    </p>
                </div>
                <ul className="flex flex-col gap-4 list-none">
                    {exp.points.map((pt, j) => (
                        <li
                            key={j}
                            className="flex gap-4 leading-relaxed group/item"
                            style={{ animationDelay: `${j * 0.05}s` }}
                        >
                            <span className="text-cyan-500 shrink-0 mt-1 text-xs">
                                ▸
                            </span>
                            <span className="text-base text-slate-300 group-hover/item:text-white transition-colors duration-200">
                                {pt}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Experience() {
    const titleRef = useScrollReveal();
    const eduRef = useScrollReveal();

    return (
        <section
            id="experience"
            className="px-6 md:px-12 py-24 border-b border-slate-800/50"
        >
            {/* Title */}
            <div ref={titleRef} className="scroll-reveal mb-4">
                <p className="font-mono text-sm tracking-widest uppercase text-cyan-400 mb-4 flex items-center gap-3">
                    <span className="inline-block w-6 h-px bg-gradient-to-r from-green-400 to-cyan-400" />
                    Experience
                </p>
                <h2 className="text-4xl md:text-5xl text-white font-normal">
                    Work <span className="text-cyan-400">History</span>
                </h2>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-green-500/30 via-cyan-500/20 to-transparent mb-12" />

            {/* Experience items */}
            {experiences.map((exp, i) => (
                <ExpItem key={i} exp={exp} index={i} />
            ))}

            {/* Education */}
            <div
                ref={eduRef}
                className="scroll-reveal mt-16 pt-12 border-t border-slate-800/50"
            >
                <p className="font-mono text-sm tracking-widest uppercase text-cyan-400 mb-8 flex items-center gap-3">
                    <span className="inline-block w-6 h-px bg-gradient-to-r from-green-400 to-cyan-400" />
                    Education
                </p>
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-12 p-6 md:p-8 bg-slate-900/40 border border-slate-800/50 hover:border-green-500/30 transition-colors duration-300 rounded-sm">
                    <div>
                        <p className="text-xl text-white font-semibold mb-2">
                            Indonesian Adventist University
                        </p>
                        <p className="font-mono text-sm text-slate-500">
                            Bandung · 2021 – 2025
                        </p>
                    </div>
                    <div>
                        <p className="text-lg text-cyan-300 italic mb-4">
                            Bachelor of Information System
                        </p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-5xl text-white font-normal">
                                3.72
                            </p>
                            <p className="text-xl text-slate-600 font-mono">
                                / 4.00
                            </p>
                        </div>
                        <p className="font-mono text-xs text-cyan-400 mt-2 tracking-wider uppercase">
                            Cumulative GPA
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
