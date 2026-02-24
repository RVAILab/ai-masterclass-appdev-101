"use client";

import { useState } from "react";

/* ──────────────────────────────────────────────
   TYPES
   ────────────────────────────────────────────── */

interface Step {
  title: string;
  detail: string;
  link?: string;
  linkLabel?: string;
  command?: string;
  tag?: "optional" | "fallback";
}

interface Phase {
  id: string;
  phase?: number | string;
  name: string;
  icon: string;
  why: string;
  estimatedTime: string;
  macOnly?: boolean;
  steps: {
    mac: Step[];
    windows: Step[];
  };
}

interface Day {
  id: string;
  day: number;
  title: string;
  subtitle: string;
  accent: string;
  description: string;
  phases: Phase[];
}

type OS = "mac" | "windows";

/* ──────────────────────────────────────────────
   DATA — organised by workshop day
   ────────────────────────────────────────────── */

const DAYS: Day[] = [
  {
    id: "day1",
    day: 1,
    title: "Your Dev Environment",
    subtitle: "Tools, First App & the Dev Loop",
    accent: "#74c0fc",
    description:
      "This is the big one. We'll install everything you need to go from zero to running your first app. Follow each phase in order — later tools depend on earlier ones.",
    phases: [
      {
        id: "d1-phase1",
        phase: 1,
        name: "Claude Desktop",
        icon: "\u{1F4AC}",
        why: "We start here — the simplest way to make an app. You'll use Claude Desktop's Artifacts feature to build your first prototype just by talking.",
        estimatedTime: "3 min",
        steps: {
          mac: [
            {
              title: "Download Claude Desktop",
              detail: "Download the macOS app from claude.ai.",
              link: "https://claude.ai/download",
              linkLabel: "Download Claude Desktop \u2192",
            },
            {
              title: "Install and sign in",
              detail:
                "Open the .dmg, drag Claude to Applications, and launch it. Sign in with your Claude account (or create one). You'll need a Pro or Max plan for the full workshop.",
            },
            {
              title: "Try it out",
              detail:
                'Type something like "Build me a quiz app about movies" and watch it create a working app right in the chat. This is Artifacts in action.',
              tag: "optional",
            },
          ],
          windows: [
            {
              title: "Download Claude Desktop",
              detail: "Download the Windows app from claude.ai.",
              link: "https://claude.ai/download",
              linkLabel: "Download Claude Desktop \u2192",
            },
            {
              title: "Install and sign in",
              detail:
                "Run the installer and follow the prompts. Sign in with your Claude account (or create one). You'll need a Pro or Max plan for the full workshop.",
            },
            {
              title: "Try it out",
              detail:
                'Type something like "Build me a quiz app about movies" and watch it create a working app right in the chat. This is Artifacts in action.',
              tag: "optional",
            },
          ],
        },
      },
      {
        id: "d1-phase2",
        phase: 2,
        name: "Cursor",
        icon: "\u2728",
        why: "Your code editor — it's where you see, navigate, and browse your project files. It's based on VS Code but has AI built in. Install this first so you have a nice environment to work in.",
        estimatedTime: "5 min",
        steps: {
          mac: [
            {
              title: "Download Cursor",
              detail: "Download the macOS version. It's a .dmg file.",
              link: "https://cursor.com/download",
              linkLabel: "Download Cursor \u2192",
            },
            {
              title: "Install Cursor",
              detail:
                "Open the .dmg and drag Cursor into your Applications folder. Launch it from Applications.",
            },
          ],
          windows: [
            {
              title: "Download Cursor",
              detail: "Download the Windows version. It's a .exe installer.",
              link: "https://cursor.com/download",
              linkLabel: "Download Cursor \u2192",
            },
            {
              title: "Install Cursor",
              detail:
                "Run the .exe installer and follow the prompts. Use the defaults.",
            },
          ],
        },
      },
      {
        id: "d1-phase3",
        phase: 3,
        name: "Homebrew",
        icon: "\u{1F37A}",
        why: "A package manager for macOS — it installs other developer tools for you with simple terminal commands. Think of it as the App Store for your terminal. Everything else on Mac gets installed through this.",
        estimatedTime: "5 min",
        macOnly: true,
        steps: {
          mac: [
            {
              title: "Open Terminal in Cursor",
              detail:
                "Open Cursor, then press Ctrl+` (backtick) or go to View → Terminal. This opens the integrated terminal — much more convenient than switching between apps!",
            },
            {
              title: "Install Homebrew",
              detail:
                "Paste this command and press Enter. You'll be asked for your Mac password (the one you use to log in). You won't see the characters as you type it — that's normal.",
              command:
                '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
            },
            {
              title: 'Run the "Next steps" commands',
              detail:
                'After Homebrew finishes installing, it will print "Next steps" in your terminal. For Apple Silicon Macs (M1/M2/M3), these are usually the commands shown. Run them exactly as displayed in your terminal:',
              command: 'echo >> ~/.zprofile\necho \'eval "$(/opt/homebrew/bin/brew shellenv)"\' >> ~/.zprofile\neval "$(/opt/homebrew/bin/brew shellenv)"',
            },
            {
              title: "Verify it works",
              detail:
                "Close and reopen Cursor's terminal (or type 'source ~/.zprofile' in the current terminal). Then run this — you should see a version number like 4.x.x.",
              command: "brew --version",
            },
          ],
          windows: [],
        },
      },
      {
        id: "d1-phase4",
        phase: 4,
        name: "Claude Code",
        icon: "\u{1F916}",
        why: "Your AI pair-programmer. It lives in the terminal, reads your whole project, writes code, runs commands, and fixes bugs — all through conversation. This is the core tool of the workshop.",
        estimatedTime: "5 min",
        steps: {
          mac: [
            {
              title: "Install Claude Code via Homebrew",
              detail:
                "Since you already have Homebrew installed from Phase 2, this is the simplest method.",
              command: "brew install claude-code",
            },
            {
              title: "Alternative: curl installer",
              detail:
                "If the Homebrew method doesn't work, use the curl installer instead.",
              command: "curl -fsSL https://claude.ai/install.sh | bash",
              tag: "fallback",
            },
            {
              title: "Authenticate Claude Code",
              detail:
                "In Cursor's terminal, run claude. On first run, it opens your browser to sign in with your Claude account. Follow the prompts, then return to Cursor.",
              command: "claude",
            },
          ],
          windows: [
            {
              title: "First: Install Git Bash",
              detail:
                "Claude Code on Windows requires Git Bash. Download Git for Windows which includes Git Bash.",
              link: "https://git-scm.com/downloads/win",
              linkLabel: "Download Git for Windows →",
            },
            {
              title: "Run the Git installer",
              detail:
                'IMPORTANT: Make sure "Git Bash" is selected (it should be by default). Also select "Use Git and optional Unix tools from the Windows Command Prompt" when you see that option — this adds useful Unix commands like ls, grep, etc. to your system. Keep all other default options.',
            },
            {
              title: "Install Claude Code via WinGet",
              detail:
                "Open PowerShell or Command Prompt and run this command. WinGet is Microsoft's official package manager, pre-installed on Windows 11 and recent Windows 10 versions.",
              command: "winget install Anthropic.ClaudeCode",
            },
            {
              title: "Alternative: PowerShell installer",
              detail:
                "If WinGet isn't available on your system, use the PowerShell installer instead.",
              command: "irm https://claude.ai/install.ps1 | iex",
              tag: "fallback",
            },
            {
              title: "Authenticate Claude Code",
              detail:
                "Open Git Bash and run claude. On first run, it opens your browser to sign in with your Claude account. Follow the prompts, then return to the terminal.",
              command: "claude",
            },
          ],
        },
      },
      {
        id: "d1-phase5",
        phase: 5,
        name: "Node.js & npm",
        icon: "\u{1F49A}",
        why: "Node.js lets you run JavaScript outside the browser — it's required for Next.js and almost every tool we use. npm (Node Package Manager) comes with it and lets you install code libraries. We'll use Claude Code to install it!",
        estimatedTime: "5 min",
        steps: {
          mac: [
            {
              title: "Install Node.js using Claude Code",
              detail:
                "Now that Claude Code is installed, let's use it to install Node.js! Run claude in your terminal, then ask it to install Node.js LTS via Homebrew.",
              command: 'claude "Please install Node.js LTS using Homebrew"',
            },
            {
              title: "Verify Node.js and npm",
              detail: "Ask Claude Code to verify that Node.js and npm were installed correctly.",
              command: 'claude "Please verify that Node.js and npm are installed correctly and show me their versions"',
            },
          ],
          windows: [
            {
              title: "Install Node.js using Claude Code",
              detail:
                "Now that Claude Code is installed, let's use it to install Node.js! Open Git Bash, run claude, then ask it to help you install Node.js LTS for Windows.",
              command: 'claude "Please help me install Node.js LTS on Windows"',
            },
            {
              title: "Follow Claude's instructions",
              detail:
                "Claude will guide you through downloading and installing Node.js from nodejs.org. It will help ensure everything is configured correctly.",
            },
            {
              title: "Verify Node.js and npm",
              detail: "Ask Claude Code to verify that Node.js and npm were installed correctly.",
              command: 'claude "Please verify that Node.js and npm are installed correctly and show me their versions"',
            },
          ],
        },
      },
      {
        id: "d1-verify",
        phase: "\u2713",
        name: "Verify Everything Works",
        icon: "\u2705",
        why: "Let's use Claude Code to verify everything is installed correctly and create a test Next.js project. This is a great first real use of Claude Code!",
        estimatedTime: "5 min",
        steps: {
          mac: [
            {
              title: "Ask Claude Code to verify installations",
              detail:
                "In Cursor's terminal, ask Claude Code to check that everything is installed correctly.",
              command: 'claude "Please verify that Homebrew, Node.js, and npm are all installed correctly on my Mac"',
            },
            {
              title: "Create and run a test Next.js project",
              detail:
                'Ask Claude Code to create a test Next.js app and run it. Claude will handle all the setup for you!',
              command: 'claude "Please create a new Next.js app called test-app in the current folder and run the dev server"',
            },
            {
              title: "Check the result",
              detail:
                "Claude should have started the dev server. Open http://localhost:3000 in your browser. You should see the Next.js welcome page. \u{1F389}",
            },
            {
              title: "Clean up",
              detail:
                "Press Ctrl+C in Terminal to stop the server. You can delete the test-app folder — we'll create real projects during the workshop.",
            },
          ],
          windows: [
            {
              title: "Ask Claude Code to verify installations",
              detail:
                "Open Git Bash and ask Claude Code to check that everything is installed correctly.",
              command: 'claude "Please verify that Git, Node.js, and npm are all installed correctly on Windows"',
            },
            {
              title: "Create and run a test Next.js project",
              detail:
                'Ask Claude Code to create a test Next.js app and run it. Claude will handle all the setup for you!',
              command: 'claude "Please create a new Next.js app called test-app in the current folder and run the dev server"',
            },
            {
              title: "Check the result",
              detail:
                "Claude should have started the dev server. Open http://localhost:3000 in your browser. You should see the Next.js welcome page. \u{1F389}",
            },
            {
              title: "Clean up",
              detail:
                "Press Ctrl+C to stop the server. You can delete the test-app folder — we'll create real projects during the workshop.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "day2",
    day: 2,
    title: "Accounts & Deployment",
    subtitle: "Version Control, GitHub & Vercel",
    accent: "#b197fc",
    description:
      "Day 2 is about getting your code online. We'll set up Git (Mac users install it now, Windows users configure what they installed on Day 1), create GitHub and Vercel accounts, and you'll be ready to push and deploy.",
    phases: [
      {
        id: "d2-git",
        name: "Git Setup",
        icon: "\u{1F33F}",
        why: "Git tracks every change to your code — like an undo history on steroids. Mac users need to install it now; Windows users already have it from Day 1.",
        estimatedTime: "5 min",
        steps: {
          mac: [
            {
              title: "Install Git using Claude Code",
              detail:
                "Ask Claude Code to install Git via Homebrew.",
              command: 'claude "Please install Git using Homebrew"',
            },
            {
              title: "Configure Git identity",
              detail:
                "Ask Claude Code to help you configure Git with your name and email. Use your real name and the email you'll use for GitHub.",
              command: 'claude "Please help me configure Git with my name and email for commits"',
            },
            {
              title: "Verify installation",
              detail: "Check that Git was installed and configured correctly.",
              command: "git --version",
            },
          ],
          windows: [
            {
              title: "Configure Git identity",
              detail:
                "You already have Git from Day 1. Now ask Claude Code to help you configure it with your name and email.",
              command: 'claude "Please help me configure Git with my name and email for commits"',
            },
            {
              title: "Verify configuration",
              detail: "Check that Git is configured correctly.",
              command: "git config --list",
            },
          ],
        },
      },
      {
        id: "d2-github",
        name: "GitHub Account",
        icon: "\u{1F419}",
        why: "GitHub is where your code lives online. You'll push your projects here, and Vercel will pull from here to deploy your apps.",
        estimatedTime: "5 min",
        steps: {
          mac: [
            {
              title: "Create a GitHub account",
              detail:
                "Sign up for a free account. Choose a username you'd be happy to share — it becomes your public developer profile.",
              link: "https://github.com/join",
              linkLabel: "Sign up at GitHub \u2192",
            },
            {
              title: "Authenticate Git with GitHub",
              detail:
                "When you push code for the first time, Git will ask you to authenticate. The easiest way is via HTTPS with a personal access token. We'll walk through this together in class.",
            },
          ],
          windows: [
            {
              title: "Create a GitHub account",
              detail:
                "Sign up for a free account. Choose a username you'd be happy to share — it becomes your public developer profile.",
              link: "https://github.com/join",
              linkLabel: "Sign up at GitHub \u2192",
            },
            {
              title: "Authenticate Git with GitHub",
              detail:
                "When you push code for the first time, Git will ask you to authenticate. The easiest way is via HTTPS with a personal access token. We'll walk through this together in class.",
            },
          ],
        },
      },
      {
        id: "d2-vercel",
        name: "Vercel Account",
        icon: "\u25B2",
        why: "Vercel turns your GitHub repo into a live website. Push code \u2192 get a URL. It's that simple. Free for personal projects.",
        estimatedTime: "3 min",
        steps: {
          mac: [
            {
              title: "Create a Vercel account",
              detail:
                'Go to vercel.com and sign up using your GitHub account (click "Continue with GitHub"). This links them together automatically.',
              link: "https://vercel.com/signup",
              linkLabel: "Sign up at Vercel \u2192",
            },
            {
              title: "That's it!",
              detail:
                "No software to install. Vercel works entirely in the browser. We'll connect your first repo and deploy together during class.",
            },
          ],
          windows: [
            {
              title: "Create a Vercel account",
              detail:
                'Go to vercel.com and sign up using your GitHub account (click "Continue with GitHub"). This links them together automatically.',
              link: "https://vercel.com/signup",
              linkLabel: "Sign up at Vercel \u2192",
            },
            {
              title: "That's it!",
              detail:
                "No software to install. Vercel works entirely in the browser. We'll connect your first repo and deploy together during class.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "day3",
    day: 3,
    title: "Database Setup",
    subtitle: "Giving Your App Memory",
    accent: "#ffd43b",
    description:
      "Today we connect your local development to the cloud! We'll install the Vercel CLI, link your project, create a Neon Postgres database through Vercel, and pull environment variables — all with Claude Code's help.",
    phases: [
      {
        id: "d3-vercel-cli",
        name: "Vercel CLI Setup",
        icon: "\u{1F517}",
        why: "The Vercel CLI lets you link your local project to Vercel, pull environment variables, and manage deployments from the terminal. We'll use Claude Code to set it up!",
        estimatedTime: "5 min",
        steps: {
          mac: [
            {
              title: "Install Vercel CLI using Claude Code",
              detail:
                "Ask Claude Code to install the Vercel CLI globally using npm.",
              command: 'claude "Please install the Vercel CLI globally using npm"',
            },
            {
              title: "Authenticate with Vercel",
              detail:
                "Log in to your Vercel account through the CLI. This opens your browser to authenticate.",
              command: "vercel login",
            },
            {
              title: "Link your project",
              detail:
                "Navigate to your project folder and link it to your Vercel project. Claude Code will help you with this in class.",
              command: "vercel link",
            },
          ],
          windows: [
            {
              title: "Install Vercel CLI using Claude Code",
              detail:
                "Open Git Bash and ask Claude Code to install the Vercel CLI globally using npm.",
              command: 'claude "Please install the Vercel CLI globally using npm"',
            },
            {
              title: "Authenticate with Vercel",
              detail:
                "Log in to your Vercel account through the CLI. This opens your browser to authenticate.",
              command: "vercel login",
            },
            {
              title: "Link your project",
              detail:
                "Navigate to your project folder and link it to your Vercel project. Claude Code will help you with this in class.",
              command: "vercel link",
            },
          ],
        },
      },
      {
        id: "d3-db",
        name: "Neon Postgres Database",
        icon: "\u{1F418}",
        why: "Your apps need to remember things — user data, posts, scores. Neon Postgres (via Vercel) gives you a real database connected to your deployment, no server management needed.",
        estimatedTime: "10 min",
        steps: {
          mac: [
            {
              title: "Open your Vercel project",
              detail:
                "Go to your Vercel dashboard and click on the project you deployed on Day 2.",
              link: "https://vercel.com/dashboard",
              linkLabel: "Go to Vercel Dashboard \u2192",
            },
            {
              title: "Navigate to Storage tab",
              detail:
                'In your project, click on the "Storage" tab in the top navigation.',
            },
            {
              title: "Create a Postgres database",
              detail:
                'Click "Create Database" and select "Postgres". Choose the "Hobby" plan (free). Your database will be powered by Neon.',
            },
            {
              title: "Name your database",
              detail:
                "Give it a name like 'my-app-db' and select your preferred region (choose one close to you for better performance).",
            },
            {
              title: "Pull environment variables locally",
              detail:
                "After the database is created, use the Vercel CLI to pull the database connection strings to your local project.",
              command: "vercel env pull .env.local",
            },
            {
              title: "Install database packages with Claude",
              detail:
                "Ask Claude Code to install the necessary packages for working with Postgres in your Next.js app.",
              command: 'claude "Please install @vercel/postgres and any other packages I need to work with Postgres in Next.js"',
            },
            {
              title: "Test the connection",
              detail:
                "Ask Claude Code to help you create a simple test to verify the database connection works.",
              command: 'claude "Please help me test that my Postgres database connection is working"',
            },
          ],
          windows: [
            {
              title: "Open your Vercel project",
              detail:
                "Go to your Vercel dashboard and click on the project you deployed on Day 2.",
              link: "https://vercel.com/dashboard",
              linkLabel: "Go to Vercel Dashboard \u2192",
            },
            {
              title: "Navigate to Storage tab",
              detail:
                'In your project, click on the "Storage" tab in the top navigation.',
            },
            {
              title: "Create a Postgres database",
              detail:
                'Click "Create Database" and select "Postgres". Choose the "Hobby" plan (free). Your database will be powered by Neon.',
            },
            {
              title: "Name your database",
              detail:
                "Give it a name like 'my-app-db' and select your preferred region (choose one close to you for better performance).",
            },
            {
              title: "Pull environment variables locally",
              detail:
                "After the database is created, use the Vercel CLI to pull the database connection strings to your local project.",
              command: "vercel env pull .env.local",
            },
            {
              title: "Install database packages with Claude",
              detail:
                "Ask Claude Code to install the necessary packages for working with Postgres in your Next.js app.",
              command: 'claude "Please install @vercel/postgres and any other packages I need to work with Postgres in Next.js"',
            },
            {
              title: "Test the connection",
              detail:
                "Ask Claude Code to help you create a simple test to verify the database connection works.",
              command: 'claude "Please help me test that my Postgres database connection is working"',
            },
          ],
        },
      },
    ],
  },
  {
    id: "day4",
    day: 4,
    title: "Nothing to Install",
    subtitle: "Leveling Up — Advanced Techniques",
    accent: "#ff8787",
    description:
      "Day 4 is all about going deeper with the tools you already have. No new installations — just show up with everything from Days 1\u20133 working.",
    phases: [
      {
        id: "d4-check",
        name: "Pre-flight Check",
        icon: "\u{1F680}",
        why: "Make sure everything from the previous days is still working. We'll be moving fast on Day 4.",
        estimatedTime: "2 min",
        steps: {
          mac: [
            {
              title: "Quick verification",
              detail: "Open Terminal and confirm all your tools still respond.",
              command: "claude --version\ngit --version\nnode --version",
            },
            {
              title: "Optional: install GitLens in Cursor",
              detail:
                'Open Cursor, go to Extensions (Cmd+Shift+X), search "GitLens", and install it. Shows who changed what and when, right in the editor.',
              tag: "optional",
            },
          ],
          windows: [
            {
              title: "Quick verification",
              detail: "Open Git Bash and confirm all your tools still respond.",
              command: "claude --version\ngit --version\nnode --version",
            },
            {
              title: "Optional: install GitLens in Cursor",
              detail:
                'Open Cursor, go to Extensions (Ctrl+Shift+X), search "GitLens", and install it. Shows who changed what and when, right in the editor.',
              tag: "optional",
            },
          ],
        },
      },
    ],
  },
];

/* ──────────────────────────────────────────────
   HELPERS
   ────────────────────────────────────────────── */

function copyToClipboard(text: string): boolean {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    return true;
  } catch {
    return false;
  }
}

/* ──────────────────────────────────────────────
   COMPONENTS
   ────────────────────────────────────────────── */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (copyToClipboard(text)) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      }}
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        background: copied ? "#2d6a4f" : "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: copied ? "#b7e4c7" : "#adb5bd",
        borderRadius: 6,
        padding: "4px 10px",
        fontSize: 11,
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "all 0.2s",
      }}
    >
      {copied ? "Copied \u2713" : "Copy"}
    </button>
  );
}

function CommandBlock({ command }: { command: string }) {
  return (
    <div
      style={{
        position: "relative",
        background: "#111827",
        borderRadius: 10,
        padding: "14px 16px",
        paddingRight: 70,
        marginTop: 10,
        border: "1px solid rgba(255,255,255,0.06)",
        fontFamily:
          "var(--font-jetbrains-mono), 'SF Mono', 'Fira Code', monospace",
        fontSize: 12.5,
        lineHeight: 1.75,
        color: "#e0e0e0",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
      }}
    >
      <CopyButton text={command} />
      {command.split("\n").map((line, i) => (
        <div key={i}>
          <span style={{ color: "#4b5563", userSelect: "none" }}>$ </span>
          <span>{line}</span>
        </div>
      ))}
    </div>
  );
}

function TagBadge({ tag }: { tag: string }) {
  const styles: Record<string, { bg: string; color: string; label: string }> = {
    optional: {
      bg: "rgba(255,255,255,0.04)",
      color: "#6c757d",
      label: "Optional",
    },
    fallback: {
      bg: "rgba(255,212,59,0.08)",
      color: "#ffd43b",
      label: "Fallback",
    },
  };
  const s = styles[tag] || styles.optional;
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background: s.bg,
        color: s.color,
        padding: "2px 7px",
        borderRadius: 4,
        marginLeft: 8,
        verticalAlign: "middle",
      }}
    >
      {s.label}
    </span>
  );
}

function StepItem({
  step,
  checked,
  onToggle,
  index,
}: {
  step: Step;
  checked: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      onClick={onToggle}
      style={{
        display: "flex",
        gap: 12,
        padding: "14px 16px",
        background: checked
          ? "rgba(45, 106, 79, 0.06)"
          : "rgba(255,255,255,0.015)",
        borderRadius: 10,
        cursor: "pointer",
        border: checked
          ? "1px solid rgba(45, 106, 79, 0.2)"
          : "1px solid rgba(255,255,255,0.04)",
        transition: "all 0.2s ease",
        marginBottom: 6,
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          minWidth: 22,
          borderRadius: 6,
          border: checked
            ? "2px solid #40916c"
            : "2px solid rgba(255,255,255,0.12)",
          background: checked ? "#2d6a4f" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 1,
          transition: "all 0.15s ease",
          fontSize: 12,
          color: "#fff",
        }}
      >
        {checked && "\u2713"}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontWeight: 600,
            fontSize: 13.5,
            color: checked ? "#6c757d" : "#e9ecef",
            textDecoration: checked ? "line-through" : "none",
            transition: "all 0.15s",
            marginBottom: 3,
          }}
        >
          <span
            style={{
              color: "#4b5563",
              fontWeight: 400,
              marginRight: 6,
              fontSize: 12,
            }}
          >
            {index + 1}.
          </span>
          {step.title}
          {step.tag && <TagBadge tag={step.tag} />}
        </div>
        <div style={{ fontSize: 13, color: "#868e96", lineHeight: 1.5 }}>
          {step.detail}
        </div>
        {step.link && (
          <a
            href={step.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "inline-block",
              marginTop: 8,
              fontSize: 13,
              color: "#74c0fc",
              textDecoration: "none",
              fontWeight: 500,
              borderBottom: "1px solid rgba(116,192,252,0.25)",
              paddingBottom: 1,
            }}
          >
            {step.linkLabel}
          </a>
        )}
        {step.command && <CommandBlock command={step.command} />}
      </div>
    </div>
  );
}

function PhaseCard({
  phase,
  os,
  checkedSteps,
  onToggleStep,
  isExpanded,
  onToggleExpand,
}: {
  phase: Phase;
  os: OS;
  checkedSteps: Record<string, boolean>;
  onToggleStep: (key: string) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}) {
  const steps = phase.steps[os] || [];
  if (phase.macOnly && os === "windows") return null;
  const completedCount = steps.filter(
    (_, i) => checkedSteps[`${phase.id}-${i}`]
  ).length;
  const totalSteps = steps.length;
  const isComplete = totalSteps > 0 && completedCount === totalSteps;
  const progressPct =
    totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        borderRadius: 14,
        border: isComplete
          ? "1px solid rgba(45,106,79,0.3)"
          : "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
        transition: "all 0.25s ease",
        marginBottom: 8,
      }}
    >
      <div
        onClick={onToggleExpand}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px 18px",
          cursor: "pointer",
          gap: 14,
          userSelect: "none",
        }}
      >
        <div style={{ fontSize: 24 }}>{phase.icon}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            {phase.phase && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#4b5563",
                }}
              >
                Phase {phase.phase}
              </span>
            )}
            <span style={{ fontWeight: 700, fontSize: 15, color: "#f1f3f5" }}>
              {phase.name}
            </span>
            {phase.macOnly && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  background: "rgba(255,255,255,0.05)",
                  padding: "2px 7px",
                  borderRadius: 4,
                  color: "#6c757d",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Mac only
              </span>
            )}
            {isComplete && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  background: "rgba(45,106,79,0.15)",
                  padding: "2px 7px",
                  borderRadius: 4,
                  color: "#52b788",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Done
              </span>
            )}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{ fontSize: 11, color: "#4b5563", whiteSpace: "nowrap" }}
          >
            {completedCount}/{totalSteps}
          </span>
          <div
            style={{
              width: 40,
              height: 3,
              borderRadius: 2,
              background: "rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progressPct}%`,
                height: "100%",
                background: isComplete
                  ? "#40916c"
                  : progressPct > 0
                    ? "#74c0fc"
                    : "transparent",
                borderRadius: 2,
                transition: "width 0.25s ease",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#4b5563",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
              transition: "transform 0.2s ease",
              lineHeight: 1,
            }}
          >
            {"\u25BE"}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div
          style={{
            padding: "2px 18px 18px",
            borderTop: "1px solid rgba(255,255,255,0.03)",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#6c757d",
              lineHeight: 1.55,
              marginTop: 12,
              marginBottom: 14,
              paddingLeft: 2,
            }}
          >
            {phase.why}
          </div>
          {phase.estimatedTime && phase.estimatedTime !== "In class" && (
            <div
              style={{
                fontSize: 11,
                color: "#4b5563",
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span>{"\u23F1"}</span> ~{phase.estimatedTime}
            </div>
          )}
          {steps.map((step, i) => (
            <StepItem
              key={i}
              step={step}
              index={i}
              checked={!!checkedSteps[`${phase.id}-${i}`]}
              onToggle={() => onToggleStep(`${phase.id}-${i}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   MAIN APP
   ────────────────────────────────────────────── */

export default function SetupGuide() {
  const [os, setOs] = useState<OS>("mac");
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});
  const [expandedPhases, setExpandedPhases] = useState<
    Record<string, boolean>
  >(Object.fromEntries(DAYS[0].phases.map((p) => [p.id, true])));
  const [collapsedDays, setCollapsedDays] = useState<Record<string, boolean>>({
    day3: true,
    day4: true,
  });

  const toggleStep = (key: string) =>
    setCheckedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  const togglePhase = (id: string) =>
    setExpandedPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleDay = (id: string) =>
    setCollapsedDays((prev) => ({ ...prev, [id]: !prev[id] }));

  const dayProgress = (day: Day) => {
    const phases = day.phases.filter((p) => !(p.macOnly && os === "windows"));
    const total = phases.reduce(
      (a, p) => a + (p.steps[os]?.length || 0),
      0
    );
    const done = phases.reduce(
      (a, p) =>
        a +
        (p.steps[os] || []).filter((_, i) => checkedSteps[`${p.id}-${i}`])
          .length,
      0
    );
    return {
      total,
      done,
      pct: total > 0 ? Math.round((done / total) * 100) : 0,
    };
  };

  // Calculate which day we're on based on progress
  const currentDayIndex = DAYS.findIndex(day => {
    const p = dayProgress(day);
    return p.pct < 100;
  });
  const currentDay = currentDayIndex === -1 ? DAYS[DAYS.length - 1] : DAYS[currentDayIndex];
  const currentDayProg = dayProgress(currentDay);
  const completedDays = DAYS.filter(day => dayProgress(day).pct === 100).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0e14",
        color: "#e9ecef",
        fontFamily:
          "var(--font-dm-sans), 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background:
            "linear-gradient(170deg, #0a0e14 0%, #111827 40%, #0a0e14 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          padding: "52px 24px 44px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 25% 0%, rgba(116,192,252,0.04) 0%, transparent 55%), radial-gradient(ellipse at 75% 100%, rgba(82,183,136,0.03) 0%, transparent 55%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#52b788",
              marginBottom: 16,
            }}
          >
            White Rabbit {"\u00B7"} AI 101 Workshop
          </div>
          <h1
            style={{
              fontSize: 34,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: 14,
              color: "#f8f9fa",
            }}
          >
            Installation Guide
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "#6c757d",
              lineHeight: 1.6,
              maxWidth: 460,
              margin: "0 auto",
            }}
          >
            Everything you need, organized by workshop day.
            <br />
            <span style={{ color: "#74c0fc" }}>
              Complete Day 1 before arriving
            </span>{" "}
            &mdash; the rest we&apos;ll do together.
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 18px 80px" }}>
        {/* Sticky toolbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
            padding: "24px 0 18px",
            position: "sticky",
            top: 0,
            background: "#0a0e14",
            zIndex: 20,
            borderBottom: "1px solid rgba(255,255,255,0.03)",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              borderRadius: 9,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {(
              [
                { key: "mac" as const, label: "\u{1F34E}  macOS" },
                { key: "windows" as const, label: "\u{1FA9F}  Windows" },
              ] as const
            ).map((o) => (
              <button
                key={o.key}
                onClick={() => setOs(o.key)}
                style={{
                  padding: "9px 20px",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  border: "none",
                  background:
                    os === o.key ? "rgba(255,255,255,0.07)" : "transparent",
                  color: os === o.key ? "#f1f3f5" : "#4b5563",
                  transition: "all 0.15s",
                }}
              >
                {o.label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#52b788",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Day {currentDay.day}
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#f1f3f5",
                  lineHeight: 1,
                }}
              >
                {currentDayProg.pct}%
              </div>
              <div style={{ fontSize: 10.5, color: "#4b5563" }}>
                {currentDayProg.done}/{currentDayProg.total} steps
              </div>
            </div>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: `conic-gradient(${
                  currentDayProg.pct === 100 ? "#40916c" : currentDay.accent
                } ${currentDayProg.pct * 3.6}deg, rgba(255,255,255,0.04) 0deg)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "#0a0e14",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                }}
              >
                {completedDays === DAYS.length ? "\u{1F389}" : currentDay.day}
              </div>
            </div>
          </div>
        </div>

        {/* DAY SECTIONS */}
        {DAYS.map((day) => {
          const prog = dayProgress(day);
          const isDayCollapsed = !!collapsedDays[day.id];
          const visiblePhases = day.phases.filter(
            (p) => !(p.macOnly && os === "windows")
          );

          return (
            <div key={day.id} style={{ marginBottom: 32 }}>
              {/* Day header */}
              <div
                onClick={() => toggleDay(day.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  cursor: "pointer",
                  userSelect: "none",
                  padding: "8px 0",
                  marginBottom: isDayCollapsed ? 0 : 6,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${day.accent}18, ${day.accent}08)`,
                    border: `1px solid ${day.accent}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 16,
                    color: day.accent,
                    flexShrink: 0,
                  }}
                >
                  {day.day}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#f1f3f5",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                      }}
                    >
                      Day {day.day}: {day.title}
                    </span>
                  </div>
                  <div
                    style={{ fontSize: 12.5, color: "#4b5563", marginTop: 2 }}
                  >
                    {day.subtitle}
                  </div>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  {prog.pct === 100 && (
                    <span style={{ fontSize: 16 }}>{"\u2705"}</span>
                  )}
                  <span style={{ fontSize: 12, color: "#4b5563" }}>
                    {prog.done}/{prog.total}
                  </span>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#4b5563",
                      transform: isDayCollapsed
                        ? "rotate(-90deg)"
                        : "rotate(0)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    {"\u25BE"}
                  </div>
                </div>
              </div>

              {!isDayCollapsed && (
                <div style={{ marginTop: 4 }}>
                  <div
                    style={{
                      fontSize: 13.5,
                      color: "#6c757d",
                      lineHeight: 1.6,
                      marginBottom: 14,
                      paddingLeft: 60,
                    }}
                  >
                    {day.description}
                  </div>

                  <div
                    style={{
                      height: 3,
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: 2,
                      marginBottom: 14,
                      marginLeft: 60,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${prog.pct}%`,
                        height: "100%",
                        background:
                          prog.pct === 100 ? "#40916c" : day.accent,
                        borderRadius: 2,
                        transition: "width 0.3s ease",
                        opacity: 0.7,
                      }}
                    />
                  </div>

                  {visiblePhases.map((phase) => (
                    <PhaseCard
                      key={phase.id}
                      phase={phase}
                      os={os}
                      checkedSteps={checkedSteps}
                      onToggleStep={toggleStep}
                      isExpanded={!!expandedPhases[phase.id]}
                      onToggleExpand={() => togglePhase(phase.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* COMPLETION */}
        {completedDays === DAYS.length && (
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(45,106,79,0.12), rgba(45,106,79,0.04))",
              border: "1px solid rgba(45,106,79,0.25)",
              borderRadius: 14,
              padding: "28px",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>{"\u{1F389}"}</div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#b7e4c7",
                marginBottom: 6,
              }}
            >
              You&apos;re all set!
            </div>
            <div
              style={{ fontSize: 13.5, color: "#6c757d", lineHeight: 1.55 }}
            >
              Your entire development environment is ready. See you at the
              workshop!
            </div>
          </div>
        )}

        {/* HELP */}
        <div
          style={{
            padding: "22px 24px",
            background: "rgba(255,255,255,0.015)",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.04)",
            marginTop: 8,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginBottom: 10,
              color: "#dee2e6",
            }}
          >
            {"\u{1F198}"} Running into trouble?
          </div>
          <div
            style={{ fontSize: 13, color: "#6c757d", lineHeight: 1.65 }}
          >
            Installation hiccups are completely normal &mdash; debugging is
            literally 80% of development. Try closing and reopening your
            terminal, double-check you ran any &quot;Next steps&quot; commands
            that were shown, and make sure you&apos;re following the
            instructions for your OS. If you&apos;re still stuck, open Claude
            Desktop and paste the error message &mdash; it&apos;s great at
            diagnosing install issues. Or just bring your laptop to Day 1 and
            we&apos;ll sort it out together.
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 11.5,
            color: "#2d3748",
          }}
        >
          AI 101: Build Your Own App with Claude {"\u00B7"} White Rabbit
        </div>
      </div>
    </div>
  );
}
