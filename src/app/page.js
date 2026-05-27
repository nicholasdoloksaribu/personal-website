import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AIChat from "../components/AIChat";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <footer
                style={{
                    padding: "1.5rem 2.5rem",
                    borderTop: "1px solid #1a1a1a",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <span
                    style={{
                        fontFamily: "Courier New, monospace",
                        fontSize: "11px",
                        color: "#444",
                    }}
                >
                    © 2026 Nicholas Juniarto Doloksaribu
                </span>
                <span
                    style={{
                        fontFamily: "Courier New, monospace",
                        fontSize: "11px",
                        color: "#444",
                    }}
                >
                    Built with Next.js
                </span>
            </footer>
            <AIChat />
        </main>
    );
}
