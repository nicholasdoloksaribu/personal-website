export default function Hero() {
    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "8rem 2.5rem 5rem",
                borderBottom: "1px solid #e8e8e8",
            }}
        >
            <p
                style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        width: "20px",
                        height: "1px",
                        background: "#888",
                    }}
                />
                Backend Developer · East Jakarta
            </p>
            <h1
                style={{
                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    fontWeight: "normal",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    marginBottom: "2rem",
                }}
            >
                Nicholas Juniarto
                <br />
                <em style={{ color: "#888" }}>Doloksaribu.</em>
            </h1>
            <p
                style={{
                    maxWidth: "520px",
                    fontSize: "17px",
                    color: "#3a3a3a",
                    lineHeight: 1.75,
                    marginBottom: "3rem",
                }}
            >
                Backend Developer focused on building scalable, production-ready
                systems using Laravel, Redis, and Docker.
            </p>
            <div style={{ display: "flex", gap: "2rem" }}>
                <a
                    href="#projects"
                    style={{
                        fontFamily: "Courier New, monospace",
                        fontSize: "13px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#0f0f0f",
                        textDecoration: "none",
                        borderBottom: "1px solid #0f0f0f",
                        paddingBottom: "2px",
                    }}
                >
                    View Projects →
                </a>
                <a
                    href="mailto:nicholasdoloksaribu450@gmail.com"
                    style={{
                        fontFamily: "Courier New, monospace",
                        fontSize: "13px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#888",
                        textDecoration: "none",
                    }}
                >
                    Get in Touch
                </a>
            </div>
            <div
                style={{
                    marginTop: "5rem",
                    display: "flex",
                    gap: "3rem",
                    flexWrap: "wrap",
                }}
            >
                {[
                    ["3+", "Years Experience"],
                    ["9+", "Projects Built"],
                    ["3.72", "GPA / 4.00"],
                    ["12+", "Certificates"],
                ].map(([num, label]) => (
                    <div key={label}>
                        <p
                            style={{
                                fontSize: "2rem",
                                color: "#0f0f0f",
                                lineHeight: 1,
                                marginBottom: "4px",
                            }}
                        >
                            {num}
                        </p>
                        <p
                            style={{
                                fontFamily: "Courier New, monospace",
                                fontSize: "11px",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#888",
                            }}
                        >
                            {label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
