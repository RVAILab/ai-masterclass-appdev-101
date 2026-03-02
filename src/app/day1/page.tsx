"use client";

import Image from "next/image";
import { SlideShell } from "../day2/components/SlideShell";
import { Terminal, InteractiveTerminal } from "../day2/components/Terminal";
import { ConceptCards } from "../day2/components/ConceptCard";
import styles from "../day2/styles/presentation.module.scss";

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
        Day 1 of 4
      </div>
      <h1 style={{
        fontSize: 'clamp(3rem, 8vw, 4rem)',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '1rem'
      }} className={`${styles.animateFadeInUp} ${styles.stagger2}`}>
        Getting Started:{" "}
        <span className={styles.titleGradient}>
          Tools
        </span>
        {", First App, & the "}
        <span className={styles.titleGradient2}>
          Dev Loop
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
        Your journey from zero to first working app
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

function IntensiveIntroSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Important
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        This is an Intensive Experience
      </h2>
      <div className={`${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={styles.setupCard} style={{ marginBottom: '1.5rem' }}>
          <h4 className={styles.setupTitle} style={{ color: 'var(--accent)' }}>Choose Your Own Adventure 🗺️</h4>
          <p className={styles.textSmall}>
            You can take away as much or as little as you want. You can just watch and take in the craziness of what&rsquo;s possible today, but I encourage you to follow along and do your best to keep up.
          </p>
        </div>
        
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: '1.5rem' }}>
          <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📝</div>
            <h5 style={{ margin: '0 0 0.5rem 0', color: 'var(--green)' }}>Take Notes</h5>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>A lot of terms will fly by. Think of it like a movie — first time you follow the plot, second time you catch details you missed.</p>
          </div>
          
          <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>❓</div>
            <h5 style={{ margin: '0 0 0.5rem 0', color: 'var(--pink)' }}>Ask Questions</h5>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>See it as your duty to ask questions you have. It helps everyone learn. We&rsquo;ll stay in app development, out of philosophy.</p>
          </div>
          
          <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🤝</div>
            <h5 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent)' }}>Community Support</h5>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>You have us here to hold your hand, and if you choose to go further, a creative community to collaborate with.</p>
          </div>
        </div>
        
        <div className={styles.setupCard}>
          <h4 className={styles.setupTitle} style={{ color: 'var(--orange)' }}>The Next Version of the University 🎓</h4>
          <p className={styles.textSmall}>
            What we see in White Rabbit is the beginnings of the next version of the university, built on a whole new kind of technical foundation, but with the core premise that made universities valuable for centuries: <strong>the people you sit beside as you take on hard problems and new puzzles</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

function BioSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Your Workshop Leader
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        About Me
      </h2>
      <div className={`${styles.threeColumnGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Image 
              src="/white-rabbit-logo.png" 
              alt="White Rabbit Logo" 
              width={80} 
              height={40}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h4 className={styles.featureTitle}>White Rabbit</h4>
          <p className={styles.featureDescription}>
            Co-founder of this experimental learning community, building the next version of the university.
          </p>
        </div>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Image 
              src="/autom-insights-logo.png" 
              alt="Autom Insights Logo" 
              width={120} 
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h4 className={styles.featureTitle}>Autom Insights</h4>
          <p className={styles.featureDescription}>
            Head of Technology, developing AI-powered business intelligence and automation solutions.
          </p>
        </div>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Image 
              src="/immersion-analytics-logo.png" 
              alt="Immersion Analytics Logo" 
              width={120} 
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h4 className={styles.featureTitle}>Immersion Analytics</h4>
          <p className={styles.featureDescription}>
            Building the next generation of data visualization — new ways of seeing and understanding data.
          </p>
        </div>
      </div>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`} style={{ marginTop: '2rem' }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '1.5rem', 
          background: 'var(--surface-2)', 
          borderRadius: '0.75rem',
          border: '1px solid var(--border)'
        }}>
          <h4 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.125rem', 
            fontWeight: '600', 
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>
            About Aaron Moffatt
          </h4>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '0.875rem', 
            color: 'var(--text-dim)',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-jetbrains-mono)'
          }}>
            aaron@whiterabbitashland.com
          </p>
          <div style={{ fontSize: '0.925rem', lineHeight: '1.6', color: 'var(--text)', textAlign: 'left' }}>
            <p style={{ marginBottom: '1rem' }}>
              Aaron is a leader at the crossroads of emerging technologies, data systems, and community transformation. Over 20 years, he has specialized in turning complex, fragmented data into intuitive interactive experiences.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              As a full-stack architect and AI systems designer, he has led projects spanning scientific data visualization, GPU-accelerated rendering, and large-scale data pipelines. This has included working with partners locally (ScienceWorks, White Rabbit) and globally (Apple, Tableau, HTC, Factset).
            </p>
            <p style={{ marginBottom: '1rem' }}>
              His work in flow cytometry delivered tools that let labs visually analyze billions of data points at a time, and as CTO of Immersion Analytics he continues to build frameworks for exploring massive datasets in immersive 3D environments.
            </p>
            <p style={{ 
              textAlign: 'center', 
              fontStyle: 'italic', 
              color: 'var(--text-dim)',
              borderTop: '1px solid var(--border)',
              paddingTop: '1rem',
              marginTop: '1.5rem',
              marginBottom: '0'
            }}>
              &ldquo;I believe AI will transform how we learn, build, and create. Let&rsquo;s explore what&rsquo;s possible together.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FourDayOverviewSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        The Journey
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        4-Day AI 101 Masterclass Overview
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click any card for details
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <ConceptCards
          concepts={[
            {
              term: "Day 1: Getting Started",
              emoji: "1️⃣",
              short: "Tools, first app, dev loop • TODAY",
              detail: "Claude Desktop & Artifacts • Dev environment setup • Your first Next.js app • The debugging loop. Get comfortable with the essential tools and workflow.",
              color: "var(--accent)",
            },
            {
              term: "Day 2: Going Live",
              emoji: "2️⃣",
              short: "Version control & deployment",
              detail: "Git & version control • Push to GitHub • Deploy on Vercel • Custom domains & PWAs. Take your app from your laptop to the world.",
              color: "var(--green)",
            },
            {
              term: "Day 3: Databases",
              emoji: "3️⃣",
              short: "Give your app memory",
              detail: "What databases are & why • SQL basics & concepts • Postgres on Vercel/Neon • Persistent data storage. Learn to store and manage data that persists.",
              color: "var(--pink)",
            },
            {
              term: "Day 4: Level Up",
              emoji: "4️⃣",
              short: "Advanced techniques",
              detail: "Advanced Claude Code • MCP plugins & skills • Advanced Git & editing • Build your own project. Master advanced development techniques and build independently.",
              color: "var(--orange)",
            },
          ]}
        />
      </div>
      <div className={`${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger4} ${styles.mt4}`}>
        <p className={styles.textSmall}>
          <strong className="text-text">By Day 4, you&rsquo;ll have:</strong> A live app with a database, version control mastery, and advanced AI development skills.
        </p>
      </div>
    </div>
  );
}

function ClaudeCodeLevelsSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Key Tool
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        3 Ways to Use Claude Code
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click any card to flip it
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <ConceptCards
          concepts={[
            {
              term: "Chat in Desktop App",
              emoji: "💬",
              short: "Easiest - Regular chat interface",
              detail: "Download Claude Desktop and use the regular chat interface for coding help. Works with free accounts. Perfect for learning, explanations, and code reviews.",
              color: "var(--green)",
            },
            {
              term: "Claude Code Tab (Cowork)", 
              emoji: "🖥️",
              short: "Intermediate - Automated tasks",
              detail: "Use the Code/Cowork tab in desktop app to automate complex tasks with file access. Requires Pro subscription. Great for multi-step workflows and file organization.",
              color: "var(--orange)",
            },
            {
              term: "Cursor Terminal",
              emoji: "⚡",
              short: "Advanced - Full IDE integration",
              detail: "Run Claude directly in your Cursor IDE terminal for the most powerful development experience. Deep integration with your code editor and development environment.",
              color: "var(--accent)",
            },
          ]}
        />
      </div>
      <div className={`${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger4} ${styles.mt4}`}>
        <p className={styles.textSmall}>
          <strong className="text-text">Today we start with Desktop App.</strong> Full setup guide available in the workshop app.
        </p>
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
          { icon: "🛠️", text: "Get comfortable with Claude Desktop, Claude Code, Cursor, and the terminal", color: "var(--accent)" },
          { icon: "📁", text: "Understand what a project looks like on your filesystem", color: "var(--pink)" },
          { icon: "🚀", text: "Plan, build, and run your first Next.js app", color: "var(--green)" },
          { icon: "🔄", text: "Learn the core debugging loop", color: "var(--orange)" },
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

function ClaudeDesktopSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        First Steps
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Claude Desktop — Your First Taste
      </h2>
      <div className={`${styles.comparisonGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={styles.comparisonCard}>
          <div className={styles.cardIcon}>✨</div>
          <h4 className={`${styles.cardTitle} ${styles.positive}`}>Artifacts</h4>
          <div className={styles.cardContent}>
            <p style={{ marginBottom: '0.75rem' }}>Claude can generate interactive HTML/JS/CSS directly in the chat.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• See it running immediately</li>
              <li style={{ marginBottom: '0.5rem' }}>• Use it right in the chat</li>
              <li style={{ marginBottom: '0.5rem' }}>• Ask Claude to change it</li>
              <li style={{ marginBottom: '0.5rem' }}>• Iterate in real-time</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.comparisonCard} ${styles.highlighted}`}>
          <div className={styles.cardIcon}>🔗</div>
          <h4 className={`${styles.cardTitle} ${styles.positive}`}>Publishing</h4>
          <div className={styles.cardContent}>
            <p style={{ marginBottom: '0.75rem' }}>Claude Desktop lets you publish artifacts and share them with a link.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• One-click publishing</li>
              <li style={{ marginBottom: '0.5rem' }}>• Shareable URL</li>
              <li style={{ marginBottom: '0.5rem' }}>• No hosting needed</li>
              <li style={{ marginBottom: '0.5rem' }}>• Perfect for prototyping</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger3} ${styles.mt4}`}>
        <div className={styles.setupCard}>
          <h4 className={styles.setupTitle} style={{ color: 'var(--green)' }}>Exercise: Build Your First App</h4>
          <p className={styles.textSmall}>
            Prompt Claude Desktop to build a small app — like a personal dashboard or a quiz. See how fast you can go from idea to working prototype just by talking.
          </p>
        </div>
      </div>
    </div>
  );
}

function DevEnvironmentSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Setup
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Setting Up Your Dev Environment
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2} ${styles.mb6}`}>
        Now we leave the walled garden and install real tools. This is where it gets powerful.
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <div className={styles.setupCard}>
          <h4 className={styles.setupTitle}>Essential Developer Tools</h4>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h5 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent)' }}>Homebrew (Mac)</h5>
              <p style={{ margin: 0, fontSize: '0.875rem' }}>Package manager for macOS — installs other tools for you. Makes installing everything else painless.</p>
            </div>
            <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h5 style={{ margin: '0 0 0.5rem 0', color: 'var(--green)' }}>Node.js</h5>
              <p style={{ margin: 0, fontSize: '0.875rem' }}>JavaScript runtime — lets you run code outside a browser. Required for most modern web apps.</p>
            </div>
            <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h5 style={{ margin: '0 0 0.5rem 0', color: 'var(--pink)' }}>Claude Code</h5>
              <p style={{ margin: 0, fontSize: '0.875rem' }}>Your AI co-builder. Lives in the terminal and helps you plan, build, and debug.</p>
            </div>
            <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h5 style={{ margin: '0 0 0.5rem 0', color: 'var(--orange)' }}>Cursor / VS Code</h5>
              <p style={{ margin: 0, fontSize: '0.875rem' }}>Code editor with AI built in. Where you&rsquo;ll see and navigate your project files.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger4} ${styles.mt4}`}>
        <p className={styles.textSmall}>
          <strong className="text-text">The workshop app includes installation instructions</strong> for both Mac and Windows.
        </p>
      </div>
    </div>
  );
}


function DebuggingLoopSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Essential Skill
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        The Debugging Loop
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2} ${styles.mb6}`}>
        This is where the magic really clicks — <strong style={{ color: 'var(--text)' }}>this loop is 80% of development with AI</strong>
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <div className={styles.autoDeployContainer}>
          <div className={styles.workflowStepsGrid}>
            {[
              { step: "1", label: "Something breaks", icon: "💥", color: "var(--pink)" },
              { step: "2", label: "Copy the error message", icon: "📋", color: "var(--orange)" },
              { step: "3", label: "Paste it into Claude Code", icon: "🤖", color: "var(--accent)" },
              { step: "4", label: "Claude fixes the code", icon: "🔧", color: "var(--green)" },
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
        </div>
        <div className={`${styles.commitPushGrid} ${styles.mt4}`}>
          <div className={styles.commitCard}>
            <h4 className={styles.cardTitle}>Browser Console Errors</h4>
            <ul className={styles.cardList}>
              <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> Right-click → Inspect → Console</li>
              <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> Or <code>Cmd+Option+J</code> on Mac</li>
              <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> Shows frontend JavaScript errors</li>
              <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> Copy the red error messages</li>
            </ul>
          </div>
          <div className={styles.pushCard}>
            <h4 className={styles.cardTitle}>Server Logs</h4>
            <ul className={styles.cardList}>
              <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Check your terminal where dev server runs</li>
              <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Shows backend/API errors</li>
              <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Copy the error output</li>
              <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Screenshots work too!</li>
            </ul>
          </div>
        </div>
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
        Day 1 App Ideas
      </h2>
      <div className={`${styles.appIdeasGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        {[
          {
            title: "Personal Dashboard",
            description: "A single-page app showing your name, photo, social links, favorite quote, and current weather (or hardcoded data).",
            tags: ["Simple", "Personal"],
            color: "var(--accent)",
          },
          {
            title: "Quiz or Trivia App",
            description: "A multi-question quiz on any topic you like, with scoring and a results screen.",
            tags: ["Interactive", "Fun"],
            color: "var(--pink)",
          },
          {
            title: "Recipe Card Collection",
            description: "A browsable set of recipe cards with ingredients and instructions, filterable by category.",
            tags: ["Practical", "Content"],
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
        Day 1{" "}
        <span className={styles.titleGradient}>
          Recap
        </span>
      </h2>
      <div className={`${styles.recapGrid} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        {[
          { icon: "✅", text: "Claude Desktop for quick prototypes" },
          { icon: "✅", text: "Dev environment set up" },
          { icon: "✅", text: "First Next.js app running" },
          { icon: "✅", text: "Debugging loop mastered" },
        ].map((item) => (
          <div key={item.text} className={styles.recapCard}>
            <span className={styles.recapIcon}>{item.icon}</span>
            <span className={styles.recapText}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className={`${styles.animateFadeInUp} ${styles.stagger2} ${styles.mt8}`}>
        <p className={styles.recapDescription}>
          You now have <strong className={styles.highlight}>a working development environment</strong> and can share your app with others.
        </p>
        <p className={`${styles.textSmall} ${styles.mt2}`}>
          Tomorrow: <strong style={{ color: 'var(--accent)' }}>Version Control & Deployment</strong> — take your app live.
        </p>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */

export default function Presentation() {
  const slides = [
    <TitleSlide key="title" />,
    <IntensiveIntroSlide key="intensive-intro" />,
    <BioSlide key="bio" />,
    <FourDayOverviewSlide key="four-day-overview" />,
    <ClaudeCodeLevelsSlide key="claude-levels" />,
    <GoalsSlide key="goals" />,
    <ClaudeDesktopSlide key="claude-desktop" />,
    <DevEnvironmentSlide key="dev-environment" />,
    <DebuggingLoopSlide key="debugging-loop" />,
    <AppIdeasSlide key="app-ideas" />,
    <RecapSlide key="recap" />,
  ];

  return <SlideShell slides={slides} />;
}