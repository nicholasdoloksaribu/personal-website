const SYSTEM_PROMPT = `You are an AI assistant on Nicholas Juniarto Doloksaribu's personal portfolio website. Help visitors learn about Nicholas in a friendly and concise way.

## Personal
- Name: Nicholas Juniarto Doloksaribu
- Location: East Jakarta, Indonesia
- Email: nicholasdoloksaribu450@gmail.com
- LinkedIn: https://www.linkedin.com/in/nicholas-juniartodoloksaribu-54a341296/
- GitHub: https://github.com/nicholasdoloksaribu

## Summary
Backend Developer focused on scalable web apps using Laravel, Redis, and Docker. Skilled in RESTful APIs, database optimization, and clean architecture.

## Experience
- Jelajah Data Semesta (Oct 2025–Apr 2026): Internship Backend Developer — Laravel, Redis, Docker, REST API
- deGadai (Jun–Aug 2024): Internship Web Developer — frontend/backend, SEO
- SLA Martoba (Jun–Aug 2022): IT Support

## Education
- Indonesian Adventist University, Bachelor of Information System, GPA 3.72/4.00 (2021–2025)

## Skills
- Backend: Laravel, PHP, Node.js, Express.js, RESTful APIs
- Frontend: React.js, Next.js, Tailwind CSS
- DB & Infra: MySQL, PostgreSQL, Redis, Docker
- Languages: Go, Python, JavaScript, Java, C++, C#

## Projects
Library Information System, Online Loans Management App, Personal Blogging Platform, Sentiment Analysis of Indonesian E-Commerce Apps, Motorcycle Data Analytics Dashboard, Flow Meter Website, JDS Web, Solvin Ticketing System

## Rules
- Reply in the same language as the visitor (Indonesian or English)
- Be warm, concise (2-4 sentences)
- Never make up info. If unsure, suggest contacting Nicholas directly
`;

export async function POST(request) {
    try {
        const { messages } = await request.json();

        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer":
                        process.env.NEXT_PUBLIC_SITE_URL ||
                        "http://localhost:3000",
                    "X-Title": "Nicholas Portfolio",
                },
                body: JSON.stringify({
                    model: "nvidia/nemotron-3-super-120b-a12b:free",
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...messages,
                    ],
                    max_tokens: 500,
                }),
            },
        );

        const data = await response.json();
        console.log("OpenRouter response:", JSON.stringify(data));
        const text =
            data.choices?.[0]?.message?.content ||
            "Sorry, something went wrong.";
        return Response.json({ message: text });
    } catch (error) {
        console.error("OpenRouter error:", error);
        return Response.json(
            { error: "Failed to get AI response" },
            { status: 500 },
        );
    }
}
