"use client";
import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
    {
        num: "01",
        name: "Solvin Ticketing System",
        desc: "Web-based ticketing system for managing support requests and issue tracking with real-time notifications.",
        tags: ["Laravel", "MySQL", "RESTful API"],
    },
    {
        num: "02",
        name: "JDS Web",
        desc: "Full-stack company website with backend services built during internship at Jelajah Data Semesta.",
        tags: ["Laravel", "Next.js", "Redis", "Docker"],
    },
    {
        num: "03",
        name: "Sentiment Analysis — E-Commerce",
        desc: "NLP model to analyze Indonesian user reviews from major e-commerce platforms.",
        tags: ["Python", "Machine Learning", "NLP"],
    },
    {
        num: "04",
        name: "Motorcycle Data Analytics Dashboard",
        desc: "Interactive visualization dashboard for analyzing motorcycle sales and trend data.",
        tags: ["Python", "Data Analysis", "Visualization"],
    },
    {
        num: "05",
        name: "Online Loans Management App",
        desc: "Full-stack application for managing loan applications, approvals, and repayment tracking.",
        tags: ["Laravel", "MySQL", "PHP"],
    },
    {
        num: "06",
        name: "Library Information System",
        desc: "Digital library management system with book cataloging, member management, and borrowing records.",
        tags: ["Laravel", "PostgreSQL"],
    },
];

function ProjectCard({ p, index }) {
    const ref = useScrollReveal();
    return (
        <div
            ref={ref}
            className="scroll-reveal group flex flex-col sm:flex-row gap-6 p-6 md:p-8 bg-slate-900/30 border border-slate-800/50 hover:border-indigo-500/50 hover:bg-slate-900/70 transition-all duration-500 rounded-sm"
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            <div className="flex-1">
                <div className="flex items-start gap-4 mb-3">
                    <span className="font-mono text-xs  text-green-400 bg-slate-800 px-2 py-1 rounded shrink-0">
                        {p.num}
                    </span>
                    <p className="text-xl md:text-2xl text-white font-medium group-hover:text-cyan-300 transition-colors">
                        {p.name}
                    </p>
                </div>
                <p className="text-base md:text-lg  text-green-400 leading-relaxed group-hover:text-cyan-300 transition-colors">
                    {p.desc}
                </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end sm:justify-start sm:min-w-[140px] sm:pt-1">
                {p.tags.map((t) => (
                    <span
                        key={t}
                        className="font-mono text-xs uppercase tracking-wider text-indigo-300 border border-indigo-900/70 bg-indigo-950/40 px-3 py-1 rounded-full group-hover:border-indigo-500/70 transition-colors"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Projects() {
    const titleRef = useScrollReveal();
    return (
        <section
            id="projects"
            className="px-6 md:px-12 py-24 border-b border-slate-800/50"
        >
            <div ref={titleRef} className="scroll-reveal mb-12">
                <p className="font-mono text-sm tracking-widest uppercase text-indigo-400 mb-4 flex items-center gap-3">
                    <span className="inline-block w-6 h-px bg-gradient-to-r from-indigo-500 to-cyan-400" />
                    Projects
                </p>
                <h2 className="text-4xl md:text-5xl text-white font-normal">
                    Selected <span className="gradient-text">Work</span>
                </h2>
            </div>
            <div className="flex flex-col gap-4">
                {projects.map((p, i) => (
                    <ProjectCard key={i} p={p} index={i} />
                ))}
            </div>
        </section>
    );
}
