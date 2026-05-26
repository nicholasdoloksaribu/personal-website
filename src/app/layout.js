import "./globals.css";

export const metadata = {
    title: "Nicholas Juniarto Doloksaribu — Backend Developer",
    description:
        "Backend Developer with hands-on experience building scalable web applications using Laravel, Redis, and Docker.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    );
}
