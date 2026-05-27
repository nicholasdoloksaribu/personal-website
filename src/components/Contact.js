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
                Selected Projects
            </p>
            {projects.map((p, i) => (
                <div
                    key={i}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "2rem",
                        padding: "1.75rem",
                        marginBottom: "1px",
                        background: "#0f0f0f",
                        transition: "background 0.2s, border-left 0.2s",
                        borderLeft: "2px solid transparent",
                        cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#141414";
                        e.currentTarget.style.borderLeft = "2px solid #4ade80";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#0f0f0f";
                        e.currentTarget.style.borderLeft =
                            "2px solid transparent";
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <p
                            style={{
                                fontFamily: "Courier New, monospace",
                                fontSize: "11px",
                                color: "#4ade80",
                                marginBottom: "6px",
                            }}
                        >
                            {p.num}
                        </p>
                        <p
                            style={{
                                fontSize: "17px",
                                color: "#f0f0f0",
                                marginBottom: "6px",
                            }}
                        >
                            {p.name}
                        </p>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#666",
                                lineHeight: 1.6,
                            }}
                        >
                            {p.desc}
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "6px",
                            flexWrap: "wrap",
                            justifyContent: "flex-end",
                            paddingTop: "28px",
                            maxWidth: "220px",
                        }}
                    >
                        {p.tags.map((t) => (
                            <span
                                key={t}
                                style={{
                                    fontFamily: "Courier New, monospace",
                                    fontSize: "10px",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    color: "#4ade80",
                                    border: "1px solid #1f3d2a",
                                    padding: "3px 8px",
                                    background: "#0d1f15",
                                }}
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
