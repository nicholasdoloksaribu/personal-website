"use client";

const groups = [
    {
        category: "Backend",
        skills: ["Laravel", "PHP", "Node.js", "Express.js", "RESTful APIs"],
    },
    { category: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS"] },
    {
        category: "Database & Infra",
        skills: ["MySQL", "PostgreSQL", "Redis", "Docker"],
    },
    {
        category: "Languages",
        skills: ["Go", "Python", "JavaScript", "Java", "C++", "C#"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
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
                Skills & Stack
            </p>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1px",
                    background: "#1a1a1a",
                    border: "1px solid #1a1a1a",
                }}
            >
                {groups.map((g) => (
                    <div
                        key={g.category}
                        style={{
                            background: "#0f0f0f",
                            padding: "1.75rem",
                            transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#141414")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "#0f0f0f")
                        }
                    >
                        <p
                            style={{
                                fontFamily: "Courier New, monospace",
                                fontSize: "10px",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#4ade80",
                                marginBottom: "1rem",
                            }}
                        >
                            {g.category}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            {g.skills.map((s) => (
                                <span
                                    key={s}
                                    style={{
                                        fontSize: "15px",
                                        color: "#ccc",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: "4px",
                                            height: "4px",
                                            borderRadius: "50%",
                                            background: "#4ade80",
                                            flexShrink: 0,
                                        }}
                                    />
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
