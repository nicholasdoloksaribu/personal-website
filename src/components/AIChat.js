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
                    background: "#0f0f0f",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    zIndex: 100,
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
                        background: "#fff",
                        border: "1px solid #e8e8e8",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                        zIndex: 100,
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            padding: "1rem 1.25rem",
                            borderBottom: "1px solid #e8e8e8",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#0f0f0f",
                            }}
                        />
                        <div>
                            <p style={{ fontSize: "13px" }}>
                                Ask about Nicholas
                            </p>
                            <p
                                style={{
                                    fontFamily: "Courier New, monospace",
                                    fontSize: "10px",
                                    color: "#bbb",
                                }}
                            >
                                AI Assistant
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
                                                ? "#0f0f0f"
                                                : "#f7f7f5",
                                        color:
                                            m.role === "user"
                                                ? "#fff"
                                                : "#0f0f0f",
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
                                    background: "#f7f7f5",
                                    fontSize: "13px",
                                    color: "#888",
                                    fontFamily: "Courier New, monospace",
                                    alignSelf: "flex-start",
                                }}
                            >
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
                                            border: "1px solid #e8e8e8",
                                            background: "transparent",
                                            fontSize: "12px",
                                            color: "#888",
                                            cursor: "pointer",
                                            fontFamily: "inherit",
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
                            borderTop: "1px solid #e8e8e8",
                            display: "flex",
                            gap: "8px",
                        }}
                    >
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && send()}
                            placeholder="Ask something..."
                            style={{
                                flex: 1,
                                border: "1px solid #e8e8e8",
                                padding: "8px 12px",
                                fontSize: "13px",
                                outline: "none",
                                fontFamily: "Georgia, serif",
                            }}
                        />
                        <button
                            onClick={() => send()}
                            disabled={loading || !input.trim()}
                            style={{
                                width: "36px",
                                height: "36px",
                                background: input.trim()
                                    ? "#0f0f0f"
                                    : "#e8e8e8",
                                color: input.trim() ? "#fff" : "#bbb",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "14px",
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
