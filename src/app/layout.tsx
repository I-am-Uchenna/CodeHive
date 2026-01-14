import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeHive - AI-Powered Development Platform",
  description: "A modern web application framework with AI capabilities built on Next.js, Firebase, and Google Genkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
