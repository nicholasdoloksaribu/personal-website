import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AIChat from "../components/AIChat";

export default function Home() {
    return (
        <main className="bg-slate-950 min-h-screen">
            <Navbar />
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <footer className="px-6 md:px-12 py-6 border-t border-slate-800/50 flex justify-between items-center">
                <span className="font-mono text-sm text-slate-700">
                    © 2026 Nicholas Juniarto Doloksaribu
                </span>
                <span className="font-mono text-sm text-slate-700">
                    Built with <span className="text-indigo-500">Next.js</span>
                </span>
            </footer>
            <AIChat />
        </main>
    );
}
