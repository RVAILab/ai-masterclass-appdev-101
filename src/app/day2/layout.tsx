import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 101 Workshop — Day 2",
  description: "Version Control, GitHub & Deployment",
};

export default function Day2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      {children}
    </div>
  );
}