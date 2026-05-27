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
            <button
                onClick={() => setOpen(!open)}
                style={{
                    position: "fixed",
                    bottom: "2rem",
                    right: "2rem",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    color: "#0a0a0a",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    boxShadow: "0 4px 24px rgba(74,222,128,0.3)",
                    zIndex: 100,
                    transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.boxShadow =
                        "0 4px 32px rgba(74,222,128,0.5)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                        "0 4px 24px rgba(74,222,128,0.3)";
                }}
            >
                {open ? "✕" : "✦"}
            </button>

            {open && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "5.5rem",
                        right: "2rem",
                        width: "360px",
                        maxHeight: "520px",
                        background: "#0f0f0f",
                        border: "1px solid #222",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
                        zIndex: 100,
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            padding: "1rem 1.25rem",
                            borderBottom: "1px solid #1a1a1a",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "#111",
                        }}
                    >
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#4ade80",
                                boxShadow: "0 0 8px rgba(74,222,128,0.6)",
                            }}
                        />
                        <div>
                            <p style={{ fontSize: "13px", color: "#f0f0f0" }}>
                                Ask about Nicholas
                            </p>
                            <p
                                style={{
                                    fontFamily: "Courier New, monospace",
                                    fontSize: "10px",
                                    color: "#4ade80",
                                }}
                            >
                                AI Assistant · Online
                            </p>
                        </div>
                    </div>

                    <div
                        className="chat-scroll"
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "1.25rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    justifyContent:
                                        m.role === "user"
                                            ? "flex-end"
                                            : "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: "85%",
                                        padding: "10px 14px",
                                        background:
                                            m.role === "user"
                                                ? "#4ade80"
                                                : "#1a1a1a",
                                        color:
                                            m.role === "user"
                                                ? "#0a0a0a"
                                                : "#ccc",
                                        fontSize: "13px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div
                                style={{
                                    padding: "10px 14px",
                                    background: "#1a1a1a",
                                    fontSize: "13px",
                                    color: "#4ade80",
                                    fontFamily: "Courier New, monospace",
                                    alignSelf: "flex-start",
                                }}
                            >
                                <span className="cursor-blink">▋</span>{" "}
                                thinking...
                            </div>
                        )}
                        {messages.length === 1 && (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                }}
                            >
                                {SUGGESTIONS.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => send(s)}
                                        style={{
                                            textAlign: "left",
                                            padding: "8px 12px",
                                            border: "1px solid #222",
                                            background: "transparent",
                                            fontSize: "12px",
                                            color: "#666",
                                            cursor: "pointer",
                                            fontFamily: "inherit",
                                            transition: "all 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor =
                                                "#4ade80";
                                            e.currentTarget.style.color =
                                                "#4ade80";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor =
                                                "#222";
                                            e.currentTarget.style.color =
                                                "#666";
                                        }}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    <div
                        style={{
                            padding: "1rem 1.25rem",
                            borderTop: "1px solid #1a1a1a",
                            display: "flex",
                            gap: "8px",
                            background: "#111",
                        }}
                    >
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && send()}
                            placeholder="Ask something..."
                            style={{
                                flex: 1,
                                border: "1px solid #222",
                                padding: "8px 12px",
                                fontSize: "13px",
                                outline: "none",
                                fontFamily: "Georgia, serif",
                                color: "#f0f0f0",
                                background: "#0f0f0f",
                                transition: "border-color 0.2s",
                            }}
                            onFocus={(e) =>
                                (e.target.style.borderColor = "#4ade80")
                            }
                            onBlur={(e) =>
                                (e.target.style.borderColor = "#222")
                            }
                        />
                        <button
                            onClick={() => send()}
                            disabled={loading || !input.trim()}
                            style={{
                                width: "36px",
                                height: "36px",
                                background: input.trim()
                                    ? "#4ade80"
                                    : "#1a1a1a",
                                color: input.trim() ? "#0a0a0a" : "#444",
                                border: "none",
                                cursor: input.trim() ? "pointer" : "default",
                                fontSize: "14px",
                                transition: "all 0.2s",
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
