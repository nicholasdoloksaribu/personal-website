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
        <section id="contact" className="px-6 md:px-12 py-20 md:py-24">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <div ref={titleRef} className="scroll-reveal mb-10 md:mb-14">
                    <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-cyan-400 mb-4 flex items-center gap-3">
                        <span className="inline-block w-6 h-px bg-gradient-to-r from-green-400 to-cyan-400" />
                        Contact
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-normal italic leading-tight mb-4">
                        Let's build something
                        <br />
                        <span className="text-cyan-300">great together.</span>
                    </h2>
                    <p className="font-mono text-sm md:text-base text-slate-500 max-w-md leading-relaxed mt-4">
                        Open to full-time roles, freelance projects, and
                        interesting collaborations.
                    </p>
                </div>

                {/* Contact list */}
                <div ref={listRef} className="scroll-reveal flex flex-col">
                    {contacts.map((c, i) => (
                        <a
                            key={i}
                            href={c.href}
                            target={
                                c.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between py-5 md:py-6 border-t border-slate-800/60 no-underline hover:pl-3 md:hover:pl-4 transition-all duration-300"
                            style={{ transitionDelay: `${i * 0.05}s` }}
                        >
                            <span className="text-base md:text-xl text-white group-hover:text-cyan-300 transition-colors duration-300 font-medium">
                                {c.label}
                            </span>
                            <div className="flex items-center gap-2 md:gap-3">
                                <span className="font-mono text-xs md:text-sm text-slate-500 group-hover:text-cyan-300 transition-colors duration-300 truncate max-w-[140px] sm:max-w-xs md:max-w-none">
                                    {c.handle}
                                </span>
                                <span className="text-slate-700 group-hover:text-cyan-300 transition-all duration-300 group-hover:translate-x-1 inline-block">
                                    →
                                </span>
                            </div>
                        </a>
                    ))}
                    <div className="border-t border-slate-800/60" />
                </div>

                {/* CTA */}
                <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4">
                    <a
                        href="mailto:nicholasdoloksaribu450@gmail.com"
                        className="font-mono text-sm tracking-widest uppercase text-slate-950 bg-cyan-400 px-6 md:px-8 py-3 md:py-4 no-underline  transition-colors text-center font-bold"
                    >
                        Send me an email →
                    </a>

                    <a
                        href="https://github.com/nicholasdoloksaribu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm tracking-widest uppercase text-cyan-400 border border-cyan-300 px-6 md:px-8 py-3 md:py-4 no-underline hover:text-black hover:border-cyan-400 hover:bg-cyan-400 transition-all text-center"
                    >
                        View GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
