"use client";

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

export default function Experience() {
    return (
        <section
            id="experience"
            className="px-5 md:px-10 py-16 md:py-20 border-b border-dark-border"
        >
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-10 md:mb-12 flex items-center gap-2">
                <span className="inline-block w-4 h-px bg-accent" />
                Experience
            </p>

            {experiences.map((exp, i) => (
                <div
                    key={i}
                    className={`grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8 py-8 md:py-10 ${
                        i < experiences.length - 1
                            ? "border-b border-dark-border"
                            : ""
                    }`}
                >
                    <div>
                        <p className="text-[15px] text-text-bright mb-1">
                            {exp.company}
                        </p>
                        <p className="font-mono text-[11px] text-text-dim mb-1">
                            {exp.location}
                        </p>
                        <p className="font-mono text-[11px] text-text-dimmer">
                            {exp.period}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-accent italic mb-4">
                            {exp.role}
                        </p>
                        <ul className="list-none flex flex-col gap-1.5">
                            {exp.points.map((pt, j) => (
                                <li
                                    key={j}
                                    className="text-sm text-text-muted flex gap-2.5 leading-relaxed"
                                >
                                    <span className="text-accent shrink-0">
                                        ▸
                                    </span>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}

            {/* Education */}
            <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-dark-border">
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-8 flex items-center gap-2">
                    <span className="inline-block w-4 h-px bg-accent" />
                    Education
                </p>
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8">
                    <div>
                        <p className="text-[15px] text-text-bright mb-1">
                            Indonesian Adventist University
                        </p>
                        <p className="font-mono text-[11px] text-text-dim">
                            Bandung · 2021 – 2025
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-accent italic mb-1">
                            Bachelor of Information System
                        </p>
                        <p className="font-mono text-[13px] text-text-bright">
                            GPA 3.72 / 4.00
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
