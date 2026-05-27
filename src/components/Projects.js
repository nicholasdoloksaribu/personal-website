"use client";

const projects = [
    {
        num: "01",
        name: "Solvin Ticketing System",
        desc: "Web-based ticketing system for managing support requests and issue tracking.",
        tags: ["Laravel", "MySQL", "RESTful API"],
    },
    {
        num: "02",
        name: "JDS Web",
        desc: "Company website built during internship at Jelajah Data Semesta.",
        tags: ["Laravel", "Next.js", "Redis", "Docker"],
    },
    {
        num: "03",
        name: "Sentiment Analysis — E-Commerce",
        desc: "NLP model to analyze Indonesian user reviews from e-commerce platforms.",
        tags: ["Python", "Machine Learning"],
    },
    {
        num: "04",
        name: "Motorcycle Data Analytics Dashboard",
        desc: "Interactive dashboard for visualizing and analyzing motorcycle sales data.",
        tags: ["Python", "Data Analysis"],
    },
    {
        num: "05",
        name: "Online Loans Management App",
        desc: "Full-stack application for managing loan applications and approvals.",
        tags: ["Laravel", "MySQL"],
    },
    {
        num: "06",
        name: "Library Information System",
        desc: "Digital library management with book cataloging and member management.",
        tags: ["Laravel", "PostgreSQL"],
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="px-5 md:px-10 py-16 md:py-20 border-b border-dark-border"
        >
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-10 md:mb-12 flex items-center gap-2">
                <span className="inline-block w-4 h-px bg-accent" />
                Selected Projects
            </p>
            {projects.map((p, i) => (
                <div
                    key={i}
                    className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 p-5 md:p-7 mb-px bg-dark-card transition-all duration-200 border-l-2 border-l-transparent hover:bg-dark-hover hover:border-l-accent cursor-default"
                >
                    <div className="flex-1">
                        <p className="font-mono text-[11px] text-accent mb-1.5">
                            {p.num}
                        </p>
                        <p className="text-[17px] text-text-bright mb-1.5">
                            {p.name}
                        </p>
                        <p className="text-sm text-text-dim leading-relaxed">
                            {p.desc}
                        </p>
                    </div>
                    <div className="flex gap-1.5 flex-wrap md:justify-end md:pt-7 md:max-w-[220px]">
                        {p.tags.map((t) => (
                            <span
                                key={t}
                                className="font-mono text-[10px] tracking-[0.06em] uppercase text-accent border border-accent-border px-2 py-0.5 bg-accent-bg"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
