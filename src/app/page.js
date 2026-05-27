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
            <footer className="px-5 md:px-10 py-6 border-t border-dark-border flex flex-col sm:flex-row justify-between gap-2">
                <span className="font-mono text-[11px] text-text-dimmer">
                    © 2026 Nicholas Juniarto Doloksaribu
                </span>
                <span className="font-mono text-[11px] text-text-dimmer">
                    Built with Next.js
                </span>
            </footer>
            <AIChat />
        </main>
    );
}
