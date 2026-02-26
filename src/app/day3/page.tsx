"use client";

import { SlideShell } from "../day2/components/SlideShell";
import { Terminal, InteractiveTerminal } from "../day2/components/Terminal";
import { ConceptCards } from "../day2/components/ConceptCard";
import styles from "../day2/styles/presentation.module.scss";

/* ─── Slide content ─── */

function TitleSlide() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className={`${styles.dayBadge} ${styles.animateFadeInUp}`}>
        Day 3 of 4
      </div>
      <h1 style={{
        fontSize: 'clamp(3rem, 8vw, 4rem)',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '1rem'
      }} className={`${styles.animateFadeInUp} ${styles.stagger1}`}>
        <span className={styles.titleGradient}>
          Databases
        </span>
        {": "}
        Giving Your App{" "}
        <span className={styles.titleGradient2}>
          Memory
        </span>
      </h1>
      <p style={{
        color: 'var(--text-dim)',
        fontSize: '1.125rem',
        maxWidth: '28rem',
        margin: '0 auto'
      }} className={`${styles.animateFadeInUp} ${styles.stagger2}`}>
        Learn to store, retrieve, and manage data that persists
      </p>
      <div style={{
        marginTop: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        fontSize: '0.875rem',
        color: 'var(--text-dim)'
      }} className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
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
          { icon: "🗄️", text: "Understand what databases are and why your app needs one", color: "var(--accent)" },
          { icon: "🐘", text: "Learn SQL basics and relational database concepts", color: "var(--pink)" },
          { icon: "🔗", text: "Connect your Next.js app to a Postgres database on Vercel", color: "var(--green)" },
          { icon: "💾", text: "Store and retrieve real data that persists", color: "var(--orange)" },
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

function WhatIsADatabaseSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        The Problem
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Why Do Apps Need Databases?
      </h2>
      <div className={`${styles.comparisonGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={styles.comparisonCard}>
          <div className={styles.cardIcon}>🧠</div>
          <h4 className={`${styles.cardTitle} ${styles.negative}`}>Without a Database</h4>
          <div className={styles.cardContent}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>❌ Refresh page = everything resets</li>
              <li style={{ marginBottom: '0.5rem' }}>❌ Can&rsquo;t have user accounts</li>
              <li style={{ marginBottom: '0.5rem' }}>❌ No saved preferences or history</li>
              <li style={{ marginBottom: '0.5rem' }}>❌ Data only exists in memory</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>Your app is like a whiteboard — write something, erase it, it&rsquo;s gone forever.</p>
          </div>
        </div>
        <div className={`${styles.comparisonCard} ${styles.highlighted}`}>
          <div className={styles.cardIcon}>💾</div>
          <h4 className={`${styles.cardTitle} ${styles.positive}`}>With a Database</h4>
          <div className={styles.cardContent}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>✅ Data persists between sessions</li>
              <li style={{ marginBottom: '0.5rem' }}>✅ Multiple users can have accounts</li>
              <li style={{ marginBottom: '0.5rem' }}>✅ Track history, scores, settings</li>
              <li style={{ marginBottom: '0.5rem' }}>✅ Data lives on a server</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>Your app is like a filing cabinet — data stays organized and accessible until you deliberately change it.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DatabaseTypesSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Database Types
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Different Kinds of Databases
      </h2>
      <div className={`${styles.threeColumnGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div className={styles.featureIcon}>🗂️</div>
          <h4 className={styles.featureTitle}>SQL/Relational</h4>
          <p className={styles.featureDescription}>
            Tables with rows and columns, like spreadsheets. Most common type. Examples: Postgres, MySQL, SQLite
          </p>
        </div>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div className={styles.featureIcon}>📄</div>
          <h4 className={styles.featureTitle}>NoSQL/Document</h4>
          <p className={styles.featureDescription}>
            Stores data as flexible documents. Good for unstructured data. Examples: MongoDB, Firebase
          </p>
        </div>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div className={styles.featureIcon}>🔑</div>
          <h4 className={styles.featureTitle}>Key-Value</h4>
          <p className={styles.featureDescription}>
            Simple pairs of keys and values. Super fast for caching. Examples: Redis, DynamoDB
          </p>
        </div>
      </div>
      <div className={`${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger3}`} style={{ marginTop: '1.5rem' }}>
        <p className={styles.textSmall}>
          Today we&rsquo;ll focus on <strong className="text-text">SQL/Relational databases</strong> — they&rsquo;re the most common and what Vercel provides.
        </p>
      </div>
    </div>
  );
}

function SQLPronunciationSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Quick Note
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        How to Pronounce{" "}
        <span className={styles.titleGradient}>SQL</span>
      </h2>
      <div className={`${styles.commitPushGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={styles.commitCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardBadge}>🗣️</div>
            <h4 className={styles.cardTitle}>&ldquo;Sequel&rdquo;</h4>
          </div>
          <ul className={styles.cardList}>
            <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> Most common pronunciation</li>
            <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> What most developers say</li>
            <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> Sounds natural in conversation</li>
            <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> &ldquo;Let&rsquo;s write some sequel queries&rdquo;</li>
          </ul>
        </div>
        <div className={styles.pushCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardBadge}>🔤</div>
            <h4 className={styles.cardTitle}>&ldquo;S-Q-L&rdquo;</h4>
          </div>
          <ul className={styles.cardList}>
            <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Also perfectly correct</li>
            <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Some prefer spelling it out</li>
            <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> Common in certain regions/teams</li>
            <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> &ldquo;Let&rsquo;s write some S-Q-L queries&rdquo;</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.textCenter} ${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger3}`}>
        <strong className="text-text">Both are correct!</strong> Use whichever feels natural to you. Most people say &ldquo;sequel&rdquo;.
      </div>
    </div>
  );
}

function DatabaseConceptsSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Core Concepts
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Database Vocabulary
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click any card to flip it
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <ConceptCards
          concepts={[
            {
              term: "Table",
              emoji: "📊",
              short: "Like a spreadsheet tab",
              detail: "Stores one type of thing (users, posts, products). Each table has a name and defined columns. Think of it as a specific sheet in Excel.",
              color: "var(--green)",
            },
            {
              term: "Row/Record",
              emoji: "📝",
              short: "One item in a table",
              detail: "A single entry in your table. One user, one post, one order. Each row contains data for all the columns defined in that table.",
              color: "var(--blue)",
            },
            {
              term: "Column/Field",
              emoji: "📏",
              short: "A property or attribute",
              detail: "Defines what information you store. A users table might have columns for: name, email, created_at. Each column has a specific data type.",
              color: "var(--orange)",
            },
            {
              term: "Primary Key (ID)",
              emoji: "🔑",
              short: "Unique identifier",
              detail: "Every row needs a unique ID so you can reference it specifically. Usually an auto-incrementing number. Like a serial number for each record.",
              color: "var(--pink)",
            },
            {
              term: "Query",
              emoji: "🔍",
              short: "Request for data",
              detail: "A command you send to the database. 'Give me all users', 'Update this post', 'Delete old records'. Written in SQL language.",
              color: "var(--accent)",
            },
            {
              term: "Schema",
              emoji: "🏗️",
              short: "Database blueprint",
              detail: "The structure of your database — what tables exist, what columns they have, how they relate. It's your database's architecture plan.",
              color: "var(--text)",
            },
          ]}
        />
      </div>
    </div>
  );
}

function SQLBasicsSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        SQL Commands
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        The 4 Basic Operations
      </h2>
      <div className={`${styles.animateFadeInUp} ${styles.stagger2}`}>
        <Terminal
          title="SELECT - Read data"
          lines={[
            { prompt: true, text: "-- Get all users" },
            { prompt: false, text: "SELECT * FROM users;" },
            { text: "" },
            { prompt: true, text: "-- Get specific columns" },
            { prompt: false, text: "SELECT name, email FROM users;" },
            { text: "" },
            { prompt: true, text: "-- Filter with WHERE" },
            { prompt: false, text: "SELECT * FROM users WHERE age > 25;" },
          ]}
        />
        <Terminal
          title="INSERT - Add data"
          lines={[
            { prompt: true, text: "-- Add a new user" },
            { prompt: false, text: "INSERT INTO users (name, email, age)" },
            { prompt: false, text: "VALUES ('Alice', 'alice@example.com', 28);" },
          ]}
        />
        <Terminal
          title="UPDATE - Change data"
          lines={[
            { prompt: true, text: "-- Update a user's email" },
            { prompt: false, text: "UPDATE users" },
            { prompt: false, text: "SET email = 'newemail@example.com'" },
            { prompt: false, text: "WHERE id = 1;" },
          ]}
        />
        <Terminal
          title="DELETE - Remove data"
          lines={[
            { prompt: true, text: "-- Delete a user" },
            { prompt: false, text: "DELETE FROM users WHERE id = 1;" },
            { text: "" },
            { prompt: true, text: "-- Delete all old records" },
            { prompt: false, text: "DELETE FROM users WHERE created_at < '2023-01-01';" },
          ]}
        />
      </div>
      <p className={`${styles.textCenter} ${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger3}`} style={{ marginTop: '1rem' }}>
        <strong className="text-text">Good news:</strong> Claude Code writes SQL for you! Just describe what data you want.
      </p>
    </div>
  );
}

function DatabaseHostingSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Database Hosting
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Where Databases Live
      </h2>
      <div className={`${styles.comparisonGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={styles.comparisonCard}>
          <div className={styles.cardIcon}>💻</div>
          <h4 className={`${styles.cardTitle}`}>Local Database</h4>
          <div className={styles.cardContent}>
            <p style={{ marginBottom: '0.75rem' }}>Lives on your computer during development:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• SQLite (file-based)</li>
              <li style={{ marginBottom: '0.5rem' }}>• Local Postgres server</li>
              <li style={{ marginBottom: '0.5rem' }}>• Only you can access it</li>
              <li style={{ marginBottom: '0.5rem' }}>• Good for development</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.comparisonCard} ${styles.highlighted}`}>
          <div className={styles.cardIcon}>☁️</div>
          <h4 className={`${styles.cardTitle} ${styles.positive}`}>Cloud Database</h4>
          <div className={styles.cardContent}>
            <p style={{ marginBottom: '0.75rem' }}>Lives on a server, accessible from anywhere:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• Managed by providers</li>
              <li style={{ marginBottom: '0.5rem' }}>• Always available</li>
              <li style={{ marginBottom: '0.5rem' }}>• Handles backups for you</li>
              <li style={{ marginBottom: '0.5rem' }}>• Your deployed app uses this</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger3}`} style={{ marginTop: '1.5rem' }}>
        <p className={styles.textSmall}>
          Today we&rsquo;ll use <strong className="text-text">Neon Postgres</strong> through Vercel — a cloud database that&rsquo;s free to start.
        </p>
      </div>
    </div>
  );
}

function NeonVercelSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Database Provider
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Vercel +{" "}
        <span className="bg-gradient-to-r from-[var(--green)] to-[var(--blue)] bg-clip-text text-transparent">
          Neon Postgres
        </span>
      </h2>
      <div className={`${styles.threeColumnGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div className={styles.featureIcon}>🐘</div>
          <h4 className={styles.featureTitle}>PostgreSQL</h4>
          <p className={styles.featureDescription}>
            Industry-standard SQL database. More powerful than SQLite, perfect for production apps.
          </p>
        </div>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div className={styles.featureIcon}>⚡</div>
          <h4 className={styles.featureTitle}>Serverless</h4>
          <p className={styles.featureDescription}>
            Scales automatically. You don&rsquo;t manage servers — just use the database.
          </p>
        </div>
        <div className={`${styles.featureCard} ${styles.textCenter}`}>
          <div className={styles.featureIcon}>🎯</div>
          <h4 className={styles.featureTitle}>Integrated</h4>
          <p className={styles.featureDescription}>
            One-click setup from Vercel. Connection strings automatically configured.
          </p>
        </div>
      </div>
      <div className={`${styles.setupCard} ${styles.animateFadeInUp} ${styles.stagger3}`}>
        <h4 className={styles.setupTitle}>What Neon provides</h4>
        <ul className={styles.setupList}>
          <li><span className={styles.stepNumber}>•</span> Free tier with 0.5 GB storage (plenty for learning)</li>
          <li><span className={styles.stepNumber}>•</span> Automatic backups and point-in-time recovery</li>
          <li><span className={styles.stepNumber}>•</span> Database branching for preview deployments</li>
          <li><span className={styles.stepNumber}>•</span> Works perfectly with Next.js and serverless functions</li>
        </ul>
      </div>
    </div>
  );
}

function SetupDatabaseSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`} style={{ color: 'var(--green)' }}>
        Exercise
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Create Your Database
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Follow these steps in your Vercel dashboard
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <div className={styles.autoDeployContainer}>
          <div className={styles.workflowStepsGrid}>
            {[
              { step: "1", label: "Go to Vercel Dashboard", icon: "🌐", color: "var(--accent)" },
              { step: "2", label: "Click Storage tab", icon: "🗄️", color: "var(--green)" },
              { step: "3", label: "Create Database → Postgres", icon: "🐘", color: "var(--pink)" },
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
        <div className={`${styles.setupCard} ${styles.mt4}`}>
          <h4 className={styles.setupTitle}>Database Settings</h4>
          <ul className={styles.setupList}>
            <li><span className={styles.stepNumber}>•</span> <strong>Name:</strong> my-app-db (or similar)</li>
            <li><span className={styles.stepNumber}>•</span> <strong>Plan:</strong> Hobby (free)</li>
            <li><span className={styles.stepNumber}>•</span> <strong>Region:</strong> Choose closest to you</li>
            <li><span className={styles.stepNumber}>•</span> <strong>Provider:</strong> Powered by Neon</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ConnectDatabaseSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`} style={{ color: 'var(--green)' }}>
        Exercise
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Connect to Your App
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Pull database credentials to your local project
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <InteractiveTerminal
          steps={[
            {
              command: "vercel link",
              output: ["? Set up and develop: ./my-app", "? Link to existing project? Yes", "? What's the name of your existing project? my-app", "✅ Linked to my-app (created .vercel)"],
              note: "Links your local folder to your Vercel project",
            },
            {
              command: "vercel env pull .env.local",
              output: [
                "Downloading Development Environment Variables for my-app",
                "✅ Created .env.local file",
                "✅ Pulled 5 environment variables",
              ],
              note: "Downloads database connection strings",
            },
            {
              command: "npm install @vercel/postgres",
              output: [
                "added 8 packages in 2s",
                "✅ @vercel/postgres installed",
              ],
              note: "Install the database client library",
            },
            {
              command: 'claude "Create a simple test to verify database connection"',
              output: [
                "I'll help you test the database connection...",
                "✅ Created app/api/test-db/route.ts",
                "✅ Database connection test ready at /api/test-db",
              ],
            },
          ]}
        />
      </div>
      <p className={`${styles.textCenter} ${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger4} ${styles.mt4}`}>
        Your app can now read and write to a real database! 🎉
      </p>
    </div>
  );
}

function SchemaExampleSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Example Schema
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        A Simple Guestbook Database
      </h2>
      <div className={`${styles.animateFadeInUp} ${styles.stagger2}`}>
        <Terminal
          title="Create a messages table"
          lines={[
            { prompt: false, text: "CREATE TABLE messages (" },
            { prompt: false, text: "  id SERIAL PRIMARY KEY," },
            { prompt: false, text: "  name VARCHAR(100) NOT NULL," },
            { prompt: false, text: "  message TEXT NOT NULL," },
            { prompt: false, text: "  created_at TIMESTAMP DEFAULT NOW()" },
            { prompt: false, text: ");" },
          ]}
        />
        <div className={`${styles.commitPushGrid} ${styles.mt4}`}>
          <div className={styles.commitCard}>
            <h4 className={styles.cardTitle}>Column Types</h4>
            <ul className={styles.cardList}>
              <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> <strong>SERIAL:</strong> Auto-incrementing number</li>
              <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> <strong>VARCHAR(n):</strong> Text up to n characters</li>
              <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> <strong>TEXT:</strong> Unlimited text</li>
              <li className="flex items-start gap-2"><span className="text-green mt-0.5">→</span> <strong>TIMESTAMP:</strong> Date and time</li>
            </ul>
          </div>
          <div className={styles.pushCard}>
            <h4 className={styles.cardTitle}>Constraints</h4>
            <ul className={styles.cardList}>
              <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> <strong>PRIMARY KEY:</strong> Unique identifier</li>
              <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> <strong>NOT NULL:</strong> Must have a value</li>
              <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> <strong>DEFAULT:</strong> Auto-fill if not provided</li>
              <li className="flex items-start gap-2"><span className="text-blue mt-0.5">→</span> <strong>UNIQUE:</strong> No duplicates allowed</li>
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
        Day 3 App Ideas
      </h2>
      <div className={`${styles.appIdeasGrid} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        {[
          {
            title: "Guestbook / Message Board",
            description: "Visitors can leave messages with their name. All messages are stored and displayed from the database.",
            tags: ["Simple", "Classic"],
            color: "var(--accent)",
          },
          {
            title: "Poll / Voting App",
            description: "Create questions with options, let people vote, and show live results pulled from the database.",
            tags: ["Interactive", "Real-time"],
            color: "var(--pink)",
          },
          {
            title: "Simple Bookmark Manager",
            description: "Save URLs with titles and tags. Browse, search, and organize your bookmarks stored in the database.",
            tags: ["Useful", "CRUD"],
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
        Day 3{" "}
        <span className={styles.titleGradient}>
          Recap
        </span>
      </h2>
      <div className={`${styles.recapGrid} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        {[
          { icon: "✅", text: "Databases store persistent data" },
          { icon: "✅", text: "SQL = structured query language" },
          { icon: "✅", text: "Tables, rows, columns, IDs" },
          { icon: "✅", text: "Neon + Vercel = easy setup" },
        ].map((item) => (
          <div key={item.text} className={styles.recapCard}>
            <span className={styles.recapIcon}>{item.icon}</span>
            <span className={styles.recapText}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className={`${styles.animateFadeInUp} ${styles.stagger2} ${styles.mt8}`}>
        <p className={styles.recapDescription}>
          Your app now has <strong className={styles.highlight}>real memory</strong>. Data persists between sessions and users.
        </p>
        <p className={`${styles.textSmall} ${styles.mt2}`}>
          Tomorrow: <strong style={{ color: 'var(--accent)' }}>Advanced Techniques</strong> — level up your skills.
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
    <WhatIsADatabaseSlide key="what-is-db" />,
    <DatabaseTypesSlide key="db-types" />,
    <SQLPronunciationSlide key="sql-pronunciation" />,
    <DatabaseConceptsSlide key="db-concepts" />,
    <SQLBasicsSlide key="sql-basics" />,
    <DatabaseHostingSlide key="db-hosting" />,
    <NeonVercelSlide key="neon-vercel" />,
    <SetupDatabaseSlide key="setup-db" />,
    <ConnectDatabaseSlide key="connect-db" />,
    <SchemaExampleSlide key="schema-example" />,
    <AppIdeasSlide key="app-ideas" />,
    <RecapSlide key="recap" />,
  ];

  return <SlideShell slides={slides} />;
}