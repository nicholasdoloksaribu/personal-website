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
            style={{
                padding: "5rem 2.5rem",
                borderBottom: "1px solid #1a1a1a",
            }}
        >
            <p
                style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#4ade80",
                    marginBottom: "3rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        width: "16px",
                        height: "1px",
                        background: "#4ade80",
                    }}
                />
                Experience
            </p>

            {experiences.map((exp, i) => (
                <div
                    key={i}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "220px 1fr",
                        gap: "2rem",
                        padding: "2.5rem 0",
                        borderBottom:
                            i < experiences.length - 1
                                ? "1px solid #1a1a1a"
                                : "none",
                    }}
                >
                    <div>
                        <p
                            style={{
                                fontSize: "15px",
                                color: "#f0f0f0",
                                marginBottom: "4px",
                            }}
                        >
                            {exp.company}
                        </p>
                        <p
                            style={{
                                fontFamily: "Courier New, monospace",
                                fontSize: "11px",
                                color: "#666",
                                marginBottom: "4px",
                            }}
                        >
                            {exp.location}
                        </p>
                        <p
                            style={{
                                fontFamily: "Courier New, monospace",
                                fontSize: "11px",
                                color: "#444",
                            }}
                        >
                            {exp.period}
                        </p>
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#4ade80",
                                fontStyle: "italic",
                                marginBottom: "1rem",
                            }}
                        >
                            {exp.role}
                        </p>
                        <ul
                            style={{
                                listStyle: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px",
                            }}
                        >
                            {exp.points.map((pt, j) => (
                                <li
                                    key={j}
                                    style={{
                                        fontSize: "14px",
                                        color: "#888",
                                        display: "flex",
                                        gap: "10px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "#4ade80",
                                            flexShrink: 0,
                                        }}
                                    >
                                        ▸
                                    </span>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}

            <div
                style={{
                    marginTop: "3rem",
                    paddingTop: "2.5rem",
                    borderTop: "1px solid #1a1a1a",
                }}
            >
                <p
                    style={{
                        fontFamily: "Courier New, monospace",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#4ade80",
                        marginBottom: "2rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            width: "16px",
                            height: "1px",
                            background: "#4ade80",
                        }}
                    />
                    Education
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "220px 1fr",
                        gap: "2rem",
                    }}
                >
                    <div>
                        <p
                            style={{
                                fontSize: "15px",
                                color: "#f0f0f0",
                                marginBottom: "4px",
                            }}
                        >
                            Indonesian Adventist University
                        </p>
                        <p
                            style={{
                                fontFamily: "Courier New, monospace",
                                fontSize: "11px",
                                color: "#666",
                            }}
                        >
                            Bandung · 2021 – 2025
                        </p>
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#4ade80",
                                fontStyle: "italic",
                                marginBottom: "4px",
                            }}
                        >
                            Bachelor of Information System
                        </p>
                        <p
                            style={{
                                fontFamily: "Courier New, monospace",
                                fontSize: "13px",
                                color: "#f0f0f0",
                            }}
                        >
                            GPA 3.72 / 4.00
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
