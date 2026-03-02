"use client";

import Image from "next/image";
import { SlideShell } from "./components/SlideShell";
import { Terminal, InteractiveTerminal } from "./components/Terminal";
import { GitFlow } from "./components/GitFlow";
import { ConceptCards } from "./components/ConceptCard";
import { DeployFlow } from "./components/DeployFlow";
import styles from "./styles/presentation.module.scss";

/* ─── Slide content ─── */

function TitleSlide() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className={`${styles.animateFadeInUp}`} style={{ marginBottom: '1.5rem' }}>
        <Image 
          src="/white-rabbit-logo.png" 
          alt="White Rabbit Logo" 
          width={200} 
          height={85}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <div className={`${styles.dayBadge} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Day 2 of 4
      </div>
      <h1 style={{
        fontSize: 'clamp(3rem, 8vw, 4rem)',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '1rem'
      }} className={`${styles.animateFadeInUp} ${styles.stagger2}`}>
        Version Control,{" "}
        <span className={styles.titleGradient}>
          GitHub
        </span>
        {" & "}
        <span className={styles.titleGradient2}>
          Deployment
        </span>
      </h1>
      <p style={{
        color: 'var(--text-dim)',
        fontSize: '1.125rem',
        maxWidth: '28rem',
        margin: '0 auto'
      }} className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        AI 101: Build Your Own App with Claude
      </p>
      <p style={{
        color: 'var(--text-dim)',
        fontSize: '1rem',
        maxWidth: '28rem',
        margin: '0.5rem auto 0 auto',
        opacity: 0.8
      }} className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        Take your app from your laptop to the world
      </p>
      <div style={{
        marginTop: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        fontSize: '0.875rem',
        color: 'var(--text-dim)'
      }} className={`${styles.animateFadeInUp} ${styles.stagger4}`}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <kbd style={{
            padding: '0.125rem 0.5rem',
            borderRadius: '0.25rem',
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            fontSize: '0.75rem',
            fontFamily: 'ui-monospace, monospace'
          }}>&larr;</kbd>
          <kbd style={{
            padding: '0.125rem 0.5rem',
            borderRadius: '0.25rem',
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            fontSize: '0.75rem',
            fontFamily: 'ui-monospace, monospace'
          }}>&rarr;</kbd>
          to navigate
        </span>
      </div>
    </div>
  );
}

function GoalsSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Today&rsquo;s Goals
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        What we&rsquo;re covering today
      </h2>
      <div className={`${styles.animateFadeInUp} ${styles.stagger2}`}>
        {[
          { icon: "🔀", text: "Understand why version control matters and how Git works", color: "var(--accent)" },
          { icon: "🐙", text: "Push your project to GitHub", color: "var(--pink)" },
          { icon: "🚀", text: "Deploy your app live on Vercel so anyone can visit it", color: "var(--green)" },
          { icon: "🌐", text: "Configure a custom domain (optional)", color: "var(--orange)" },
        ].map((goal) => (
          <div key={goal.text} className={styles.goalCard}>
            <span className={styles.goalIcon}>{goal.icon}</span>
            <span className={styles.goalText}>{goal.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyVersionControlSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        The Problem
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        What is Version Control?
      </h2>
      <div className={`${styles.comparisonGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={styles.comparisonCard}>
          <div className={styles.cardIcon}>😰</div>
          <h4 className={`${styles.cardTitle} ${styles.negative}`}>Without Git</h4>
          <div className={styles.cardContent}>
            <div className={styles.codeBlock}>
              my-app-final.zip<br />
              my-app-final-v2.zip<br />
              my-app-ACTUALLY-final.zip<br />
              my-app-final-final-fixed.zip
            </div>
            <p>No idea what changed, when, or why. One mistake and your work might be gone forever.</p>
          </div>
        </div>
        <div className={`${styles.comparisonCard} ${styles.highlighted}`}>
          <div className={styles.cardIcon}>😎</div>
          <h4 className={`${styles.cardTitle} ${styles.positive}`}>With Git</h4>
          <div className={styles.cardContent}>
            <div className={styles.codeBlock}>
              <span style={{color: 'var(--green)'}}>✓</span> Added login page &nbsp;<span style={{color: 'var(--text-dim)'}}>2 hours ago</span><br />
              <span style={{color: 'var(--green)'}}>✓</span> Fixed nav colors &nbsp;<span style={{color: 'var(--text-dim)'}}>yesterday</span><br />
              <span style={{color: 'var(--green)'}}>✓</span> Initial homepage &nbsp;<span style={{color: 'var(--text-dim)'}}>2 days ago</span>
            </div>
            <p>Every change is tracked. You can rewind to any point. Nothing is ever truly lost.</p>
          </div>
        </div>
      </div>
      <p className={`${styles.mt4} ${styles.textSmall} ${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger3}`}>
        Think of it like <strong className={styles.textBold}>Google Docs version history</strong> — but powerful enough to manage millions of files across thousands of people.
      </p>
    </div>
  );
}

function GitWorkflowSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Core Workflow
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        The 4-Step Git Loop
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click each step to learn more
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <GitFlow />
      </div>
    </div>
  );
}

function GitConceptsSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Key Concepts
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Git Vocabulary
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click any card to flip it
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <ConceptCards
          concepts={[
            {
              term: "Commit",
              emoji: "📸",
              short: "A snapshot in time",
              detail: "A commit saves your changes to Git's history with a message. Think of it like a save point in a video game — you can always come back to it.",
              color: "var(--green)",
            },
            {
              term: "Push",
              emoji: "☁️",
              short: "Upload to GitHub",
              detail: "Push sends your local commits to GitHub. Until you push, your changes only exist on your computer. Push makes them safe and shareable.",
              color: "var(--blue)",
            },
            {
              term: "Diff",
              emoji: "🔍",
              short: "See what changed",
              detail: "A diff shows lines added (green) and removed (red) between two versions. It's how you review what happened in a commit.",
              color: "var(--orange)",
            },
            {
              term: "Stash",
              emoji: "📦",
              short: "Set changes aside",
              detail: "Stash lets you temporarily shelve uncommitted work. Like putting papers in a drawer — you can pull them back out when you're ready.",
              color: "var(--pink)",
            },
            {
              term: "Merge",
              emoji: "🔀",
              short: "Combine code together",
              detail: "Merge combines two branches of history together. When two people worked on different features, merging brings them into one codebase.",
              color: "var(--accent)",
            },
            {
              term: "GitHub",
              emoji: "🐙",
              short: "Social network for code",
              detail: "GitHub hosts your Git repositories online. It's where your code lives on the internet — backed up, shareable, and connected to tools like Vercel.",
              color: "var(--text)",
            },
          ]}
        />
      </div>
    </div>
  );
}

function CommitVsPushSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Common Confusion
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Commit vs. Push
      </h2>
      <div className={`${styles.commitPushGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={styles.commitCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardBadge}>C</div>
            <h4 className={styles.cardTitle}>Commit</h4>
          </div>
          <ul className={styles.cardList}>
            <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> Saves locally on your machine</li>
            <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> Like pressing &ldquo;Save&rdquo; in a game</li>
            <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> You can make many commits offline</li>
            <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> Nobody else can see it yet</li>
          </ul>
        </div>
        <div className={styles.pushCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardBadge}>P</div>
            <h4 className={styles.cardTitle}>Push</h4>
          </div>
          <ul className={styles.cardList}>
            <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Uploads to GitHub (the cloud)</li>
            <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Like backing up your save to iCloud</li>
            <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Requires internet</li>
            <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Now others can see your work</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.textCenter} ${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger3}`}>
        <strong className="text-text">Rule of thumb:</strong> Commit often. Push when you&rsquo;re ready to share or back up.
      </div>
    </div>
  );
}

function ExerciseGitSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`} style={{ color: 'var(--green)' }}>
        Exercise
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Push Your App to GitHub
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Follow along — click &ldquo;Run next command&rdquo; to step through
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <InteractiveTerminal
          steps={[
            {
              command: "cd my-app",
              output: [],
            },
            {
              command: "git init",
              output: ["Initialized empty Git repository in /my-app/.git/"],
              note: "Important: Initialize the git repository first before adding files",
            },
            {
              command: "git add .",
              output: [],
            },
            {
              command: 'git commit -m "initial commit - my first app!"',
              output: [
                "[main (root-commit) a1b2c3d] initial commit - my first app!",
                " 15 files changed, 420 insertions(+)",
              ],
            },
            {
              command: "git remote add origin https://github.com/you/my-app.git",
              output: [],
            },
            {
              command: "git push -u origin main",
              output: [
                "Enumerating objects: 20, done.",
                "Counting objects: 100% (20/20), done.",
                "Writing objects: 100% (20/20), 12.34 KiB, done.",
                "To https://github.com/you/my-app.git",
                " * [new branch]      main -> main",
                "Branch 'main' set up to track remote branch 'main'.",
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

function VercelIntroSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Deployment
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        What is{" "}
        <span className="bg-gradient-to-r from-[var(--green)] to-[var(--blue)] bg-clip-text text-transparent">
          Vercel
        </span>
        ?
      </h2>
      <div className={`${styles.threeColumnGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div className={styles.featureIcon}>☁️</div>
          <h4 className={styles.featureTitle}>Hosting</h4>
          <p className={styles.featureDescription}>
            Vercel puts your app on fast servers around the world so anyone can visit it
          </p>
        </div>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div className={styles.featureIcon}>⚡</div>
          <h4 className={styles.featureTitle}>Auto-Deploy</h4>
          <p className={styles.featureDescription}>
            Push code to GitHub and your live site updates automatically. No manual steps.
          </p>
        </div>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div className={styles.featureIcon}>🆓</div>
          <h4 className={styles.featureTitle}>Free Tier</h4>
          <p className={styles.featureDescription}>
            Perfect for personal projects and learning. You won&rsquo;t need to pay for anything today.
          </p>
        </div>
      </div>
      <div className={`${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger3}`} style={{ marginTop: '1.5rem' }}>
        <p className={styles.textSmall}>
          Vercel was built by the same team that makes <strong className="text-text">Next.js</strong> — they work together perfectly.
        </p>
      </div>
    </div>
  );
}

function DeployFlowSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Step by Step
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        How Deployment Works
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click through each step
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <DeployFlow />
      </div>
    </div>
  );
}

function AutoDeploySlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        The Magic Loop
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Automatic Redeployment
      </h2>
      <div className={`${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={styles.autoDeployContainer}>
          <div className={styles.workflowStepsGrid}>
            {[
              { step: "1", label: "Change code in Claude Code", icon: "💻", color: "var(--accent)" },
              { step: "2", label: "Commit & push to GitHub", icon: "📤", color: "var(--green)" },
              { step: "3", label: "Vercel auto-deploys", icon: "🚀", color: "var(--pink)" },
            ].map((item) => (
              <div
                key={item.step}
                className={styles.workflowStepCard}
                style={{ borderColor: item.color + "44" }}
              >
                <div className={styles.stepIcon}>{item.icon}</div>
                <div
                  className={styles.stepNumber}
                  style={{ color: item.color }}
                >
                  Step {item.step}
                </div>
                <div className={styles.stepLabel}>{item.label}</div>
              </div>
            ))}
          </div>
          <div className={styles.workflowDescription}>
            <p>
              Every time you push new code to GitHub, Vercel picks it up and updates your live site.{" "}
              <strong style={{ color: 'var(--text)' }}>No manual deploy needed — ever.</strong>
            </p>
          </div>
        </div>
        <Terminal
          title="Your workflow"
          lines={[
            { prompt: true, text: '# Make a change, then...' },
            { prompt: true, text: 'git add .' },
            { prompt: true, text: 'git commit -m "updated homepage design"' },
            { prompt: true, text: 'git push' },
            { text: '# Your live site updates in ~30 seconds!', color: "var(--green)" },
          ]}
        />
      </div>
    </div>
  );
}

function DomainSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Optional
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Custom Domain Names
      </h2>
      <div className={`${styles.commitPushGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={styles.domainCard}>
          <h4 className={`${styles.domainTitle} ${styles.default}`}>Default (Free)</h4>
          <div className={`${styles.domainExample} ${styles.default}`}>
            my-app.vercel.app
          </div>
          <p className={styles.domainNote}>You get this automatically</p>
        </div>
        <div className={`${styles.domainCard} ${styles.highlighted}`}>
          <h4 className={`${styles.domainTitle} ${styles.custom}`}>Custom Domain</h4>
          <div className={`${styles.domainExample} ${styles.custom}`}>
            mycoolapp.com
          </div>
          <p className={styles.domainNote}>Buy a domain and point it at Vercel</p>
        </div>
      </div>
      <div className={`${styles.setupCard} ${styles.animateFadeInUp} ${styles.stagger3}`}>
        <h4 className={styles.setupTitle}>How to set it up</h4>
        <ol className={styles.setupList}>
          <li><span className={styles.stepNumber}>1.</span> Buy a domain from a registrar (Namecheap, Google Domains, etc.)</li>
          <li><span className={styles.stepNumber}>2.</span> In Vercel Dashboard → Settings → Domains → Add your domain</li>
          <li><span className={styles.stepNumber}>3.</span> Update your DNS settings to point at Vercel (they walk you through it)</li>
          <li><span className={styles.stepNumber}>4.</span> Wait a few minutes for it to propagate — done!</li>
        </ol>
      </div>
    </div>
  );
}

function PWASlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Bonus
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Your App on Your Phone
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2} ${styles.mb6}`}>
        Turn your web app into something that <strong style={{ color: 'var(--text)' }}>feels like a native app</strong> on your phone
      </p>
      <div className={`${styles.pwaGrid} ${styles.animateFadeInUp} ${styles.stagger3}`}>
        <div className={styles.pwaCard}>
          <h4 className={`${styles.pwaTitle} ${styles.what}`}>What is a PWA?</h4>
          <p className={styles.pwaContent}>
            A <strong style={{ color: 'var(--text)' }}>Progressive Web App</strong> is a website that can be &ldquo;installed&rdquo; on your phone. It gets its own icon on the home screen, runs full-screen (no browser bar), and can even work offline.
          </p>
        </div>
        <div className={styles.pwaCard}>
          <h4 className={`${styles.pwaTitle} ${styles.benefits}`}>What you get</h4>
          <ul className={styles.pwaList}>
            <li><span className={styles.checkmark}>✓</span> Home screen icon</li>
            <li><span className={styles.checkmark}>✓</span> Full-screen mode (no browser UI)</li>
            <li><span className={styles.checkmark}>✓</span> Works offline</li>
            <li><span className={styles.checkmark}>✓</span> No App Store required</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.textCenter} ${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger4} ${styles.mt4}`}>
        We&rsquo;ll show you how to set this up — it&rsquo;s just a few config files Claude Code can generate for you.
      </div>
    </div>
  );
}

function AppIdeasSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Build Time
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Day 2 App Ideas
      </h2>
      <div className={`${styles.appIdeasGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        {[
          {
            title: "Personal Portfolio / Link-in-Bio",
            description: "A polished landing page with your bio, links, and a clean design. Deploy it and share the link.",
            tags: ["Deploy & Share", "Personal Brand"],
            color: "var(--accent)",
          },
          {
            title: "Event Countdown Page",
            description: "A shareable page counting down to an event — a launch, birthday, trip — with a custom design.",
            tags: ["Fun", "Shareable"],
            color: "var(--pink)",
          },
          {
            title: "Workshop Resource Guide",
            description: "Build the notes for this workshop as a web app, with a QR code linking to its own URL. Meta!",
            tags: ["Meta", "Useful"],
            color: "var(--green)",
          },
        ].map((idea) => (
          <div key={idea.title} className={styles.appIdeaCard}>
            <div className={styles.ideaHeader}>
              <div className={styles.ideaContent}>
                <h4 className={styles.ideaTitle}>{idea.title}</h4>
                <p className={styles.ideaDescription}>{idea.description}</p>
              </div>
            </div>
            <div className={styles.ideaTags}>
              {idea.tags.map((tag) => (
                <span
                  key={tag}
                  className={styles.tag}
                  style={{
                    color: idea.color,
                    borderColor: idea.color + "44",
                    background: idea.color + "11",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecapSlide() {
  return (
    <div className={styles.textCenter}>
      <h2 className={`${styles.animateFadeInUp}`} style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem' }}>
        Day 2{" "}
        <span className={styles.titleGradient}>
          Recap
        </span>
      </h2>
      <div className={`${styles.recapGrid} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        {[
          { icon: "✅", text: "Git tracks every change" },
          { icon: "✅", text: "Commit = save, Push = upload" },
          { icon: "✅", text: "GitHub = cloud backup" },
          { icon: "✅", text: "Vercel = instant deploy" },
        ].map((item) => (
          <div key={item.text} className={styles.recapCard}>
            <span className={styles.recapIcon}>{item.icon}</span>
            <span className={styles.recapText}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className={`${styles.animateFadeInUp} ${styles.stagger2} ${styles.mt8}`}>
        <p className={styles.recapDescription}>
          Your app is now <strong className={styles.highlight}>live on the internet</strong>. Anyone with the link can visit it.
        </p>
        <p className={`${styles.textSmall} ${styles.mt2}`}>
          Tomorrow: <strong style={{ color: 'var(--accent)' }}>Databases</strong> — giving your app memory.
        </p>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */

export default function Presentation() {
  const slides = [
    <TitleSlide key="title" />,
    <GoalsSlide key="goals" />,
    <WhyVersionControlSlide key="why-vc" />,
    <GitWorkflowSlide key="git-workflow" />,
    <GitConceptsSlide key="git-concepts" />,
    <CommitVsPushSlide key="commit-push" />,
    <ExerciseGitSlide key="exercise-git" />,
    <VercelIntroSlide key="vercel-intro" />,
    <DeployFlowSlide key="deploy-flow" />,
    <AutoDeploySlide key="auto-deploy" />,
    <DomainSlide key="domain" />,
    <PWASlide key="pwa" />,
    <AppIdeasSlide key="app-ideas" />,
    <RecapSlide key="recap" />,
  ];

  return <SlideShell slides={slides} />;
}