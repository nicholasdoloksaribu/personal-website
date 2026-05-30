"use client";
import useScrollReveal from "../hooks/useScrollReveal";

const groups = [
    {
        category: "Backend",
        icon: "⚙️",
        skills: ["Laravel", "PHP", "Node.js", "Express.js", "RESTful APIs"],
    },
    {
        category: "Frontend",
        icon: "🎨",
        skills: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
        category: "Database & Infra",
        icon: "🗄️",
        skills: ["MySQL", "PostgreSQL", "Redis", "Docker"],
    },
    {
        category: "Languages",
        icon: "💻",
        skills: ["Go", "Python", "JavaScript", "Java", "C++", "C#"],
    },
];

export default function Skills() {
    const titleRef = useScrollReveal();

    return (
        <section
            id="skills"
            className="px-6 md:px-12 py-24 border-b border-slate-800/50"
        >
            <div ref={titleRef} className="scroll-reveal mb-12">
                <p className="font-mono text-sm tracking-widest uppercase text-indigo-400 mb-4 flex items-center gap-3">
                    <span className="inline-block w-6 h-px bg-gradient-to-r from-indigo-500 to-cyan-400" />
                    Skills
                </p>
                <h2 className="text-4xl md:text-5xl text-white font-normal">
                    Tech <span className="gradient-text">Stack</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {groups.map((g, i) => {
                    const ref = useScrollReveal();
                    return (
                        <div
                            key={g.category}
                            ref={ref}
                            className="scroll-reveal group bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/50 p-6 transition-all duration-500 hover:bg-slate-900 hover:-translate-y-1 rounded-sm"
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">{g.icon}</span>
                                <p className="font-mono text-xs tracking-widest uppercase text-indigo-400 group-hover:text-cyan-400 transition-colors">
                                    {g.category}
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                {g.skills.map((s) => (
                                    <span
                                        key={s}
                                        className="text-lg text-slate-300 group-hover:text-white flex items-center gap-3 transition-colors"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-cyan-400 transition-colors shrink-0" />
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
