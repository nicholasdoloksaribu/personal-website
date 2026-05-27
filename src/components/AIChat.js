"use client";
import { useState, useRef, useEffect } from "react";

const SUGGESTIONS = [
    "What's Nicholas's tech stack?",
    "Tell me about his experience",
    "What projects has he built?",
    "How can I contact him?",
];

export default function AIChat() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hi! I'm Nicholas's AI assistant. Ask me anything about his experience, skills, or projects.",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, open]);

    const send = async (text) => {
        const msg = text || input.trim();
        if (!msg || loading) return;
        setInput("");
        const next = [...messages, { role: "user", content: msg }];
        setMessages(next);
        setLoading(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next }),
            });
            const data = await res.json();
            setMessages([
                ...next,
                {
                    role: "assistant",
                    content: data.message || "Sorry, something went wrong.",
                },
            ]);
        } catch {
            setMessages([
                ...next,
                {
                    role: "assistant",
                    content: "Failed to connect. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-5 md:bottom-8 md:right-8 w-[52px] h-[52px] rounded-full bg-accent text-dark border-none cursor-pointer text-xl shadow-[0_4px_24px_rgba(74,222,128,0.3)] z-[100] transition-all duration-200 hover:scale-[1.08] hover:shadow-[0_4px_32px_rgba(74,222,128,0.5)]"
            >
                {open ? "✕" : "✦"}
            </button>

            {/* Chat Window */}
            {open && (
                <div className="fixed bottom-20 md:bottom-[5.5rem] right-5 md:right-8 w-[calc(100vw-2.5rem)] md:w-[360px] max-h-[70vh] md:max-h-[520px] bg-dark-card border border-line flex flex-col shadow-[0_8px_40px_rgba(0,0,0,0.6)] z-[100] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 md:px-5 py-4 border-b border-dark-border flex items-center gap-2.5 bg-dark-input">
                        <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                        <div>
                            <p className="text-[13px] text-text-bright">
                                Ask about Nicholas
                            </p>
                            <p className="font-mono text-[10px] text-accent">
                                AI Assistant · Online
                            </p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="chat-scroll flex-1 overflow-y-auto p-4 md:p-5 flex flex-col gap-3">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex ${
                                    m.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div
                                    className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                                        m.role === "user"
                                            ? "bg-accent text-dark"
                                            : "bg-dark-border text-[#ccc]"
                                    }`}
                                >
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="px-3.5 py-2.5 bg-dark-border text-[13px] text-accent font-mono self-start">
                                <span className="animate-blink">▋</span>{" "}
                                thinking...
                            </div>
                        )}
                        {messages.length === 1 && (
                            <div className="flex flex-col gap-1.5">
                                {SUGGESTIONS.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => send(s)}
                                        className="text-left px-3 py-2 border border-line bg-transparent text-xs text-text-dim cursor-pointer font-[inherit] transition-all duration-200 hover:border-accent hover:text-accent"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input */}
                    <div className="px-4 md:px-5 py-4 border-t border-dark-border flex gap-2 bg-dark-input">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && send()}
                            placeholder="Ask something..."
                            className="flex-1 border border-line px-3 py-2 text-[13px] outline-none font-serif text-text-bright bg-dark-card transition-colors duration-200 focus:border-accent"
                        />
                        <button
                            onClick={() => send()}
                            disabled={loading || !input.trim()}
                            className={`w-9 h-9 border-none text-sm transition-all duration-200 ${
                                input.trim()
                                    ? "bg-accent text-dark cursor-pointer"
                                    : "bg-dark-border text-text-dimmer cursor-default"
                            }`}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
