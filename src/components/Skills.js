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
            className="px-5 md:px-10 py-16 md:py-20 border-b border-dark-border"
        >
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-10 md:mb-12 flex items-center gap-2">
                <span className="inline-block w-4 h-px bg-accent" />
                Skills & Stack
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dark-border border border-dark-border">
                {groups.map((g) => (
                    <div
                        key={g.category}
                        className="bg-dark-card p-7 transition-colors duration-200 hover:bg-dark-hover"
                    >
                        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent mb-4">
                            {g.category}
                        </p>
                        <div className="flex flex-col gap-2">
                            {g.skills.map((s) => (
                                <span
                                    key={s}
                                    className="text-[15px] text-[#ccc] flex items-center gap-2"
                                >
                                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
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
