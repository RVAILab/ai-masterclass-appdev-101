"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import { colors, fonts, spacing, radii, styles } from "@/styles/shared";

interface Step {
  title: string;
  detail: string | React.ReactNode;
  note?: string;
  command?: string;
  codeBlock?: string;
}

const SETUP_STEPS: Step[] = [
  {
    title: "Create an empty folder for your app",
    detail: "Create a new folder on your Desktop in a CodingProjects directory (e.g., Desktop/CodingProjects/my-new-app)",
    note: "Choose a descriptive name for your project folder"
  },
  {
    title: "Open the folder in Cursor",
    detail: "Launch Cursor and use File > Open Folder to open your new project folder",
    note: "Cursor will create a .cursor folder for project settings"
  },
  {
    title: "Add the CLAUDE.md file",
    detail: (
      <span>
        Download the{" "}
        <a 
          href="/day-1/CLAUDE.md" 
          download="CLAUDE.md"
          style={{color: colors.accentBlue, textDecoration: 'underline'}}
        >
          CLAUDE.md template file
        </a>
        {" "}and add it to your project root folder
      </span>
    ),
    note: "This file tells Claude about your project structure and preferences",
    codeBlock: `# AI 101 Workshop — Day 1

## Tech Stack

- **Next.js** (App Router) with TypeScript
- **Tailwind CSS** for styling
- No databases, ORMs, or external data services. If persistence is absolutely needed, use SQLite locally.

## Constraints

- Do not add authentication, middleware, or API routes unless specifically asked.
- Do not add extra dependencies unless the feature clearly requires it. Prefer what Next.js and Tailwind provide out of the box.
- Follow standard Next.js App Router conventions and proper project architecture.

## Code Style

- Use functional components with hooks.
- Use named exports.
- Extract components into their own files when reused or when they grow beyond a screenful.

## When Explaining

- Participants are note programmers. When asked what something does, explain in plain language and define jargon.`
  },
  {
    title: "Open a terminal in Cursor",
    detail: "Press Ctrl+` (backtick) or use View > Terminal to open the integrated terminal",
    note: "The terminal will open at the bottom of the Cursor window"
  },
  {
    title: "Start Claude Code",
    detail: "Type 'claude' in the terminal and press Enter",
    command: "claude",
    note: "Claude will start and have access to your project folder"
  },
  {
    title: "Plan your app with Claude",
    detail: "Tell Claude what kind of app you want to build. Start with something like:",
    command: `"Let's plan a new app to [describe your app idea]"

Examples:
"Let's plan a new app to track my daily habits"
"Let's plan a new app to manage recipes"
"Let's plan a new app to create flashcards for studying"`,
    note: "Be specific about what you want your app to do"
  },
  {
    title: "Let Claude build your app",
    detail: "Claude will create the project structure, install dependencies, and build your app step by step",
    note: "Watch as Claude creates files, writes code, and sets up your entire application"
  },
  {
    title: "Run your new app",
    detail: "After Claude finishes, run the development server to see your app",
    command: "npm run dev",
    note: "Your app will be available at http://localhost:3000"
  }
];

const TIPS = [
  "Start with a simple idea - you can always add features later",
  "Be specific about what you want: 'a todo app with categories' is better than just 'a todo app'",
  "Claude will use Next.js and Tailwind CSS by default (as specified in CLAUDE.md)",
  "You can ask Claude to modify the app after it's built: 'Add dark mode' or 'Change the color scheme'",
  "If something goes wrong, you can always start fresh in a new folder"
];

const EXAMPLE_APPS = [
  { name: "Habit Tracker", prompt: "Let's plan a new app to track daily habits with streaks and progress charts" },
  { name: "Recipe Manager", prompt: "Let's plan a new app to store and organize recipes with ingredients and instructions" },
  { name: "Study Flashcards", prompt: "Let's plan a new app to create and review flashcards for studying with spaced repetition" },
  { name: "Expense Tracker", prompt: "Let's plan a new app to track expenses with categories and monthly budgets" },
  { name: "Workout Logger", prompt: "Let's plan a new app to log workouts and track fitness progress over time" },
  { name: "Book Library", prompt: "Let's plan a new app to manage a personal book library with reading status and notes" }
];

const NEXT_STEPS = [
  { number: "1", title: "Claude plans your app", description: "Claude will ask clarifying questions and create a development plan" },
  { number: "2", title: "Project setup", description: "Claude initializes Next.js, installs dependencies, and creates the project structure" },
  { number: "3", title: "Component creation", description: "Claude builds your app components, pages, and styling" },
  { number: "4", title: "Testing and refinement", description: "Claude runs the app, fixes any issues, and helps you customize it" }
];

// Component helper
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copyCmd = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        copyCmd();
      }}
      style={copied ? { ...styles.copyButton, ...styles.copyButtonCopied } : styles.copyButton}
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

export default function StartNewAppPage() {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [showClaudeMd, setShowClaudeMd] = useState(false);

  const toggleStep = (stepIndex: number) => {
    setCompletedSteps(prev => {
      const newSteps = new Set(prev);
      if (newSteps.has(stepIndex)) {
        newSteps.delete(stepIndex);
      } else {
        newSteps.add(stepIndex);
      }
      return newSteps;
    });
  };

  const completionPercentage = Math.round(
    (completedSteps.size / SETUP_STEPS.length) * 100
  );

  return (
    <div style={styles.pageWrapper}>
      <Navigation />
      
      {/* HEADER */}
      <div style={styles.header}>
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 600,
          margin: "0 auto",
        }}>
          <h1 style={styles.title}>
            Start a New App with Claude
          </h1>
          <p style={styles.subtitle}>
            Build a complete web application from scratch using Claude Code in Cursor
          </p>
          <span style={{
            ...styles.badge,
            background: "rgba(239, 68, 68, 0.15)",
            color: "#ef4444",
            marginTop: spacing.xl,
            display: "inline-block"
          }}>
            Advanced Method
          </span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.container}>
        {/* Progress Bar */}
        <div style={{ ...styles.progressBar, marginTop: spacing.xxl, marginBottom: spacing.xxl }}>
          <div style={styles.progressFill(completionPercentage)} />
        </div>
        
        <div style={{ textAlign: "center", marginBottom: spacing.xxl }}>
          <span style={{ color: colors.textSecondary, fontSize: 14 }}>
            {completionPercentage}% Complete
          </span>
        </div>

        {/* Setup Steps */}
        <div style={{
          background: colors.bgCard,
          borderRadius: radii.xl,
          border: `1px solid ${colors.borderSubtle}`,
          padding: spacing.xxl,
          marginBottom: spacing.xxl
        }}>
          <h2 style={styles.sectionTitle}>Setup Steps</h2>
          {SETUP_STEPS.map((step, index) => (
            <div key={index} style={{ marginBottom: spacing.xl }}>
              <div 
                onClick={() => toggleStep(index)}
                style={{
                  display: "flex",
                  gap: spacing.lg,
                  cursor: "pointer"
                }}
              >
                <div style={completedSteps.has(index) ? { ...styles.checkbox, ...styles.checkboxChecked } : styles.checkbox}>
                  {completedSteps.has(index) && "✓"}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    ...styles.stepTitle,
                    ...(completedSteps.has(index) ? styles.stepTitleChecked : {})
                  }}>
                    Step {index + 1}: {step.title}
                  </h3>
                  <p style={styles.stepDetail}>{step.detail}</p>
                  {step.note && (
                    <p style={{ 
                      color: colors.textMuted, 
                      fontSize: 13, 
                      fontStyle: "italic",
                      marginTop: spacing.sm 
                    }}>
                      💡 {step.note}
                    </p>
                  )}
                  {step.command && (
                    <div style={{ ...styles.codeBlock, position: "relative" }}>
                      <CopyButton text={step.command} />
                      <code>{step.command}</code>
                    </div>
                  )}
                  {step.codeBlock && index === 2 && (
                    <div style={{ marginTop: spacing.lg }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowClaudeMd(!showClaudeMd);
                        }}
                        style={{
                          background: colors.accentBlue,
                          color: "white",
                          border: "none",
                          padding: `${spacing.sm}px ${spacing.xl}px`,
                          borderRadius: radii.md,
                          fontSize: 13,
                          cursor: "pointer",
                          fontFamily: fonts.primary
                        }}
                      >
                        {showClaudeMd ? "Hide" : "Show"} CLAUDE.md contents
                      </button>
                      {showClaudeMd && (
                        <pre style={styles.codeBlock}>
                          <code>{step.codeBlock}</code>
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tips */}
        <div style={{
          background: colors.bgCard,
          borderRadius: radii.xl,
          border: `1px solid ${colors.borderSubtle}`,
          padding: spacing.xxl,
          marginBottom: spacing.xxl
        }}>
          <h2 style={styles.sectionTitle}>💡 Pro Tips</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {TIPS.map((tip, index) => (
              <li key={index} style={{
                color: colors.textSecondary,
                lineHeight: 1.6,
                marginBottom: spacing.lg,
                paddingLeft: spacing.xxl,
                position: "relative"
              }}>
                <span style={{ position: "absolute", left: 0 }}>✨</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Example Apps */}
        <div style={{
          background: colors.bgCard,
          borderRadius: radii.xl,
          border: `1px solid ${colors.borderSubtle}`,
          padding: spacing.xxl,
          marginBottom: spacing.xxl
        }}>
          <h2 style={styles.sectionTitle}>🎯 Example App Ideas</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: spacing.lg
          }}>
            {EXAMPLE_APPS.map((app, index) => (
              <div key={index} style={{
                background: colors.bgPrimary,
                border: `1px solid ${colors.borderSubtle}`,
                borderRadius: radii.md,
                padding: spacing.xl,
                transition: "all 0.2s"
              }}>
                <h3 style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: colors.textPrimary,
                  marginBottom: spacing.sm
                }}>
                  {app.name}
                </h3>
                <p style={{
                  fontSize: 13,
                  color: colors.textMuted,
                  fontStyle: "italic",
                  lineHeight: 1.4
                }}>
                  &ldquo;{app.prompt}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What Happens Next */}
        <div style={{
          background: colors.bgCard,
          borderRadius: radii.xl,
          border: `1px solid ${colors.borderSubtle}`,
          padding: spacing.xxl,
          marginBottom: spacing.xxl
        }}>
          <h2 style={styles.sectionTitle}>🚀 What Happens Next?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: spacing.xl }}>
            {NEXT_STEPS.map((step, index) => (
              <div key={index} style={{ display: "flex", gap: spacing.lg, alignItems: "flex-start" }}>
                <div style={{
                  width: 32,
                  height: 32,
                  background: `linear-gradient(135deg, ${colors.accentGreen} 0%, ${colors.accentGreenDark} 100%)`,
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 14,
                  flexShrink: 0
                }}>
                  {step.number}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: colors.textPrimary,
                    marginBottom: spacing.xs
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    fontSize: 13,
                    color: colors.textSecondary,
                    lineHeight: 1.4
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          padding: `${spacing.xxxl}px 0`,
          color: colors.textSecondary
        }}>
          <p style={{ fontSize: 16 }}>
            Ready to build something amazing? Follow the steps above and let Claude do the heavy lifting! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}