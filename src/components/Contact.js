"use client";

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
    return (
        <section id="contact" style={{ padding: "5rem 2.5rem 6rem" }}>
            <p
                style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: "2.5rem",
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
                        background: "#888",
                    }}
                />
                Contact
            </p>
            <h2
                style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: "normal",
                    fontStyle: "italic",
                    marginBottom: "1rem",
                }}
            >
                Lets work together.
            </h2>
            <p
                style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "14px",
                    color: "#888",
                    marginBottom: "3rem",
                    maxWidth: "420px",
                    lineHeight: 1.6,
                }}
            >
                Open to new opportunities, freelance projects, and interesting
                collaborations.
            </p>
            {contacts.map((c, i) => (
                <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1.25rem 0",
                        borderTop: "1px solid #e8e8e8",
                        textDecoration: "none",
                        color: "#0f0f0f",
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.4")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                    <span style={{ fontSize: "16px" }}>{c.label}</span>
                    <span
                        style={{
                            fontFamily: "Courier New, monospace",
                            fontSize: "13px",
                            color: "#888",
                        }}
                    >
                        {c.handle} →
                    </span>
                </a>
            ))}
            <div style={{ borderTop: "1px solid #e8e8e8" }} />
        </section>
    );
}
