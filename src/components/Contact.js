"use client";
import useScrollReveal from "../hooks/useScrollReveal";

const contacts = [
    {
        label: "Email",
        handle: "nicholasdoloksaribu450@gmail.com",
        href: "mailto:nicholasdoloksaribu450@gmail.com",
    },
    {
        label: "GitHub",
        handle: "@nicholasdoloksaribu",
        href: "https://github.com/nicholasdoloksaribu",
    },
    {
        label: "LinkedIn",
        handle: "nicholas-juniartodoloksaribu",
        href: "https://www.linkedin.com/in/nicholas-juniartodoloksaribu-54a341296/",
    },
    { label: "Phone", handle: "+62 899 352 8931", href: "tel:+628993528931" },
];

export default function Contact() {
    const titleRef = useScrollReveal();
    const listRef = useScrollReveal();

    return (
        <section id="contact" className="px-6 md:px-12 py-24">
            <div ref={titleRef} className="scroll-reveal mb-12">
                <p className="font-mono text-sm tracking-widest uppercase text-indigo-400 mb-4 flex items-center gap-3">
                    <span className="inline-block w-6 h-px bg-gradient-to-r from-indigo-500 to-cyan-400" />
                    Contact
                </p>
                <h2 className="text-4xl md:text-6xl text-white font-normal italic leading-tight mb-4">
                    Let's build something
                    <br />
                    <span className="gradient-text">great together.</span>
                </h2>
                <p className="font-mono text-base text-slate-500 max-w-md leading-relaxed">
                    Open to full-time roles, freelance projects, and interesting
                    collaborations.
                </p>
            </div>

            <div
                ref={listRef}
                className="scroll-reveal flex flex-col max-w-2xl"
            >
                {contacts.map((c, i) => (
                    <a
                        key={i}
                        href={c.href}
                        target={
                            c.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className="group flex justify-between items-center py-6 border-t border-slate-800/50 no-underline hover:pl-4 transition-all duration-300"
                        style={{ transitionDelay: `${i * 0.05}s` }}
                    >
                        <span className="text-xl text-white group-hover:text-cyan-300 transition-colors">
                            {c.label}
                        </span>
                        <span className="font-mono text-sm text-slate-500 group-hover:text-cyan-400 transition-colors">
                            {c.handle} →
                        </span>
                    </a>
                ))}
                <div className="border-t border-slate-800/50" />
            </div>
        </section>
    );
}
