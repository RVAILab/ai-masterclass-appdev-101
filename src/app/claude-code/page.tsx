"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import styles from "./page.module.scss";

type Method = "chat" | "desktop" | "terminal";

interface UsageMethod {
  id: Method;
  name: string;
  difficulty: "Easiest" | "Intermediate" | "Advanced";
  icon: string;
  description: string;
  steps: {
    title: string;
    detail: string | React.ReactNode;
    note?: string;
    command?: string;
    image?: string;
  }[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

const USAGE_METHODS: UsageMethod[] = [
  {
    id: "desktop",
    name: "Chat in Desktop App",
    difficulty: "Easiest",
    icon: "💬",
    description: "Download Claude Desktop and use the regular chat interface for coding help",
    steps: [
      {
        title: "Download Claude Desktop",
        detail: <span>Go to <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" style={{color: '#10b981', textDecoration: 'underline'}}>claude.ai/download</a> and download the Claude Desktop app for macOS or Windows</span>,
        note: "Free to download and use with any Claude account"
      },
      {
        title: "Install and launch",
        detail: "Run the installer and open Claude Desktop, then sign in with your Claude account"
      },
      {
        title: "Stay in Chat mode",
        detail: "Use the default 'Chat' tab (no need to switch to Cowork/Tasks)",
        note: "Chat mode is perfect for getting coding help and explanations"
      },
      {
        title: "Ask Claude to create an app",
        detail: "Try asking: \"Make a simple HTML app for ...\" and Claude will create an artifact",
        note: "Artifacts appear as interactive previews you can run directly in the chat"
      },
      {
        title: "Preview and iterate",
        detail: "View the live preview of your app and ask Claude to modify it as needed"
      },
      {
        title: "Download, copy, or publish",
        detail: "Download the artifact as a file, copy the code to your editor, or publish it to share with others",
        note: "Published artifacts get a unique URL you can share with anyone"
      }
    ],
    pros: [
      "Simple and familiar chat interface",
      "Works with free Claude accounts",
      "Native app performance",
      "Persistent chat history",
      "Can drag and drop files"
    ],
    cons: [
      "Manual copy-paste of code",
      "No direct file system editing",
      "Can't automate multi-step tasks"
    ],
    bestFor: "Learning to code, getting explanations, debugging help, and code reviews when you want to maintain control"
  },
  {
    id: "chat",
    name: "Claude Code Tab (Cowork)",
    difficulty: "Intermediate",
    icon: "🖥️",
    description: "Use the Claude Code/Cowork tab in desktop app to automate complex tasks with file access",
    steps: [
      {
        title: "Open Claude Desktop",
        detail: <span>Launch the Claude Desktop app (download from <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" style={{color: '#10b981', textDecoration: 'underline'}}>claude.ai/download</a> if needed)</span>
      },
      {
        title: "Switch to Code/Cowork mode",
        detail: "Click the 'Code' or 'Cowork' tab in the mode selector to switch from Chat to Tasks mode",
        note: "Both tabs offer the same features - Requires Pro, Max, Team, or Enterprise subscription"
      },
      {
        title: "Select your working folder",
        detail: "Click 'Select Folder' button and choose the project folder you want Claude to work in",
        note: "Claude will only access files within the folder you explicitly grant permission to"
      },
      {
        title: "Describe your task",
        detail: "Tell Claude what you want to accomplish - be specific about the end result"
      },
      {
        title: "Let Claude work",
        detail: "Claude will work on the task while you can focus on other things",
        note: "Keep the app open - closing it will end the session"
      }
    ],
    pros: [
      "Can automate multi-step tasks",
      "Direct access to your local files",
      "Works autonomously",
      "Can organize files and create documents",
      "Built-in deletion protection"
    ],
    cons: [
      "Requires Pro subscription or higher",
      "Uses more usage quota than chat",
      "Less interactive than chat mode"
    ],
    bestFor: "Automating workflows, organizing files, creating reports, refactoring code, and handling complex multi-file changes"
  },
  {
    id: "terminal",
    name: "Cursor Terminal",
    difficulty: "Advanced",
    icon: "⚡",
    description: "Run Claude directly in your Cursor IDE terminal for the most powerful development experience",
    steps: [
      {
        title: "Install Cursor IDE",
        detail: "Download Cursor from cursor.com if you haven't already"
      },
      {
        title: "Open your project",
        detail: "Open your project folder in Cursor using File > Open Folder"
      },
      {
        title: "Open the terminal",
        detail: "Press Ctrl+` (backtick) or View > Terminal to open the integrated terminal"
      },
      {
        title: "Run the claude command",
        detail: "Type 'claude' in the terminal and press Enter to start Claude Code",
        command: "claude",
        note: "Claude will have access to your entire project and can edit files directly"
      },
      {
        title: "Give Claude a task",
        detail: "Describe what you want Claude to build or fix, then watch it work",
        command: "Examples:\n\"Build a todo app with React\"\n\"Add dark mode to this project\"\n\"Fix all TypeScript errors\""
      }
    ],
    pros: [
      "Deepest IDE integration",
      "Work directly in your code editor",
      "Access to full development environment",
      "Can see and edit code in real-time",
      "Combines with other Cursor AI features"
    ],
    cons: [
      "Requires Cursor IDE installation",
      "Learning curve for Cursor-specific features",
      "More complex initial setup"
    ],
    bestFor: "Professional development, complex projects, and when you want AI deeply integrated into your coding workflow"
  }
];

export default function ClaudeCodePage() {
  const [selectedMethod, setSelectedMethod] = useState<Method>("desktop");
  const [completedSteps, setCompletedSteps] = useState<Record<string, Set<number>>>({
    chat: new Set(),
    desktop: new Set(),
    terminal: new Set()
  });

  const toggleStep = (methodId: Method, stepIndex: number) => {
    setCompletedSteps(prev => {
      const newSteps = { ...prev };
      const methodSteps = new Set(newSteps[methodId]);
      
      if (methodSteps.has(stepIndex)) {
        methodSteps.delete(stepIndex);
      } else {
        methodSteps.add(stepIndex);
      }
      
      newSteps[methodId] = methodSteps;
      return newSteps;
    });
  };

  const selectedMethodData = USAGE_METHODS.find(m => m.id === selectedMethod)!;
  const completionPercentage = Math.round(
    (completedSteps[selectedMethod].size / selectedMethodData.steps.length) * 100
  );

  return (
    <div className={styles.wrapper}>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
          3 Ways to Use Claude Code
        </h1>
        <p className={styles.subtitle}>
          Choose the method that best fits your workflow and experience level
        </p>
      </div>

      <div className={styles.methodTabs}>
        {USAGE_METHODS.map(method => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`${styles.methodTab} ${selectedMethod === method.id ? styles.activeTab : ""}`}
            data-difficulty={method.difficulty.toLowerCase()}
          >
            <span className={styles.methodIcon}>{method.icon}</span>
            <div className={styles.methodTabContent}>
              <div className={styles.methodName}>{method.name}</div>
              <div className={styles.methodDifficulty}>{method.difficulty}</div>
            </div>
          </button>
        ))}
      </div>

      <div className={styles.methodContent}>
        <div className={styles.methodHeader}>
          <h2 className={styles.methodTitle}>
            {selectedMethodData.icon} {selectedMethodData.name}
          </h2>
          <span className={styles.difficultyBadge} data-level={selectedMethodData.difficulty.toLowerCase()}>
            {selectedMethodData.difficulty}
          </span>
        </div>

        <p className={styles.methodDescription}>
          {selectedMethodData.description}
        </p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${completionPercentage}%` }} />
          <span className={styles.progressText}>
            {completionPercentage}% Complete
          </span>
        </div>

        <div className={styles.methodSteps}>
          <h3 className={styles.sectionTitle}>Setup Steps</h3>
          {selectedMethodData.steps.map((step, index) => (
            <div key={index} className={styles.stepItem}>
              <button
                onClick={() => toggleStep(selectedMethod, index)}
                className={`${styles.stepCheckbox} ${
                  completedSteps[selectedMethod].has(index) ? styles.completed : ""
                }`}
              >
                {completedSteps[selectedMethod].has(index) ? "✓" : ""}
              </button>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDetail}>{step.detail}</p>
                {step.note && (
                  <p className={styles.stepNote}>
                    💡 {step.note}
                  </p>
                )}
                {step.command && (
                  <pre className={styles.codeBlock}>
                    <code>{step.command}</code>
                  </pre>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.prosConsGrid}>
          <div className={styles.prosSection}>
            <h3 className={styles.sectionTitle}>✅ Pros</h3>
            <ul className={styles.prosList}>
              {selectedMethodData.pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </div>

          <div className={styles.consSection}>
            <h3 className={styles.sectionTitle}>⚠️ Cons</h3>
            <ul className={styles.consList}>
              {selectedMethodData.cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bestForSection}>
          <h3 className={styles.sectionTitle}>🎯 Best For</h3>
          <p className={styles.bestForText}>
            {selectedMethodData.bestFor}
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Choose the method that works best for your workflow and start coding with Claude! 🚀</p>
      </div>
    </main>
    </div>
  );
}