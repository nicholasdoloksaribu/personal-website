"use client";
import { useState, useRef, useEffect } from "react";

const SUGGESTIONS = [
    "What's Nicholas's tech stack?",
    "Tell me about his work experience",
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
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-8 right-6 w-14 h-14 rounded-full border-none cursor-pointer text-xl z-50 transition-all duration-300 hover:scale-110 flex items-center justify-center text-white font-bold"
                style={{
                    background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                    boxShadow: "0 4px 24px rgba(99,102,241,0.4)",
                }}
            >
                {open ? "✕" : "✦"}
            </button>

            {open && (
                <div
                    className="fixed bottom-28 right-6 w-[calc(100vw-3rem)] sm:w-96 max-h-[540px] bg-slate-950 border border-slate-800 flex flex-col shadow-2xl z-50 overflow-hidden rounded-sm"
                    style={{
                        boxShadow:
                            "0 25px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(99,102,241,0.2)",
                    }}
                >
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800 bg-slate-900">
                        <div
                            className="w-2.5 h-2.5 rounded-full bg-cyan-400"
                            style={{
                                boxShadow: "0 0 8px rgba(34,211,238,0.8)",
                            }}
                        />
                        <div>
                            <p className="text-base text-white font-medium">
                                Ask about Nicholas
                            </p>
                            <p className="font-mono text-xs text-indigo-400">
                                AI Assistant · Online
                            </p>
                        </div>
                    </div>

                    <div className="chat-scroll flex-1 overflow-y-auto p-5 flex flex-col gap-3">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed rounded-sm ${
                                        m.role === "user"
                                            ? "text-white"
                                            : "bg-slate-800/80 text-slate-200"
                                    }`}
                                    style={
                                        m.role === "user"
                                            ? {
                                                  background:
                                                      "linear-gradient(135deg, #6366f1, #06b6d4)",
                                              }
                                            : {}
                                    }
                                >
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="self-start px-4 py-3 bg-slate-800/80 font-mono text-sm text-indigo-400 rounded-sm">
                                <span className="cursor-blink">▋</span>{" "}
                                thinking...
                            </div>
                        )}
                        {messages.length === 1 && (
                            <div className="flex flex-col gap-2 mt-1">
                                {SUGGESTIONS.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => send(s)}
                                        className="text-left px-3 py-2.5 border border-slate-800 bg-transparent text-sm text-slate-500 cursor-pointer font-serif hover:border-indigo-500/60 hover:text-indigo-300 hover:bg-indigo-950/20 transition-all duration-200 rounded-sm"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    <div className="flex gap-2 px-4 py-3 border-t border-slate-800 bg-slate-900">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && send()}
                            placeholder="Ask something..."
                            className="flex-1 bg-slate-800 border border-slate-700 focus:border-indigo-500 outline-none px-4 py-2.5 text-sm text-white placeholder-slate-600 font-serif transition-colors rounded-sm"
                        />
                        <button
                            onClick={() => send()}
                            disabled={loading || !input.trim()}
                            className={`w-10 h-10 border-none text-base cursor-pointer transition-all rounded-sm font-bold ${input.trim() ? "text-white hover:opacity-80" : "bg-slate-800 text-slate-600 cursor-default"}`}
                            style={
                                input.trim()
                                    ? {
                                          background:
                                              "linear-gradient(135deg, #6366f1, #06b6d4)",
                                      }
                                    : {}
                            }
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
