"use client";

const contacts = [
    {
        label: "Email",
        value: "nicholasdoloksaribu450@gmail.com",
        href: "mailto:nicholasdoloksaribu450@gmail.com",
    },
    {
        label: "LinkedIn",
        value: "Nicholas Doloksaribu",
        href: "https://linkedin.com/in/nicholas-doloksaribu",
    },
    {
        label: "GitHub",
        value: "nicholasdoloksaribu",
        href: "https://github.com/nicholasdoloksaribu",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="px-5 md:px-10 py-16 md:py-20 border-b border-dark-border"
        >
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-10 md:mb-12 flex items-center gap-2">
                <span className="inline-block w-4 h-px bg-accent" />
                Contact
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div>
                    <h2 className="text-3xl md:text-4xl text-text-bright font-normal mb-6 leading-tight">
                        Let&apos;s work
                        <br />
                        <em className="text-text-dimmer italic">together.</em>
                    </h2>
                    <p className="text-base text-text-muted leading-[1.75] max-w-md">
                        I&apos;m currently open to new opportunities. Whether
                        you have a project in mind or just want to connect, feel
                        free to reach out.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {contacts.map((c) => (
                        <a
                            key={c.label}
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-5 bg-dark-card border border-dark-border no-underline transition-all duration-200 hover:bg-dark-hover hover:border-accent"
                        >
                            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent mb-2">
                                {c.label}
                            </p>
                            <p className="text-[15px] text-text-muted transition-colors duration-200 group-hover:text-text-bright">
                                {c.value}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
