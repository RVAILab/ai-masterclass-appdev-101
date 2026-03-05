"use client";

import Image from "next/image";
import { SlideShell } from "../day2/components/SlideShell";
import { InteractiveTerminal } from "../day2/components/Terminal";
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
        Day 3 of 4
      </div>
      <h1 style={{
        fontSize: 'clamp(3rem, 8vw, 4rem)',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '1rem'
      }} className={`${styles.animateFadeInUp} ${styles.stagger2}`}>
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
          { icon: "🗄️", text: "Understand what databases are and why your app needs one", color: "var(--accent)" },
          { icon: "🏗️", text: "Learn about data types and database structure", color: "var(--pink)" },
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
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click to compare
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <ConceptCards
          concepts={[
            {
              term: "Without Database",
              emoji: "🧠",
              short: "Like a whiteboard",
              detail: "• Refresh page = everything resets\n• Can't have user accounts\n• No saved preferences or history\n• Data only exists in memory while page is open",
              color: "var(--pink)",
            },
            {
              term: "With Database",
              emoji: "💾",
              short: "Like a filing cabinet",
              detail: "• Data persists between sessions\n• Multiple users can have accounts\n• Track history, scores, settings\n• Enable collaboration & sharing\n• Scale to millions of users",
              color: "var(--green)",
            },
            {
              term: "Real Examples",
              emoji: "🌟",
              short: "What databases enable",
              detail: "• User profiles that remember you\n• Shopping carts that persist\n• Message history in chat apps\n• Friend lists in social apps\n• Scores in games\n• Everything that makes apps useful!",
              color: "var(--blue)",
            },
          ]}
        />
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
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click any card to learn more
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <ConceptCards
          concepts={[
            {
              term: "SQL/Relational",
              emoji: "🗂️",
              short: "Tables with rows and columns",
              detail: "• Like spreadsheets that talk to each other\n• Most common type worldwide\n• Examples: Postgres, MySQL, SQLite\n• Great for structured data with relationships",
              color: "var(--green)",
            },
            {
              term: "NoSQL/Document",
              emoji: "📄",
              short: "Flexible document storage",
              detail: "• Stores data as JSON-like documents\n• No strict schema required\n• Examples: MongoDB, Firebase\n• Good for rapidly changing data structures",
              color: "var(--blue)",
            },
            {
              term: "Graph",
              emoji: "🕸️",
              short: "All about relationships",
              detail: "• Stores connections between things\n• Perfect for social networks, recommendations\n• Great for fraud detection\n• Examples: Neo4j, Amazon Neptune",
              color: "var(--orange)",
            },
            {
              term: "Key-Value",
              emoji: "🔑",
              short: "Simple and super fast",
              detail: "• Just pairs of keys and values\n• Lightning fast for caching, sessions\n• Simple lookups and storage\n• Examples: Redis, DynamoDB, Memcached",
              color: "var(--pink)",
            },
          ]}
        />
      </div>
      <div className={`${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger4}`} style={{ marginTop: '1.5rem' }}>
        <p className={styles.textSmall}>
          Today we&rsquo;ll focus on <strong className="text-text">SQL/Relational</strong> — most common and what Vercel provides.
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

function ColumnTypesSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Data Types
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Common Column Types
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click any card to see details
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <ConceptCards
          concepts={[
            {
              term: "TEXT",
              emoji: "📝",
              short: "Words & sentences",
              detail: "• VARCHAR(n) for short text like names, emails\n• TEXT for long content like descriptions, blog posts\n• CHAR(n) for fixed-length codes\n• Perfect for user input and content",
              color: "var(--green)",
            },
            {
              term: "NUMBERS",
              emoji: "🔢",
              short: "Counting & calculating",
              detail: "• INTEGER for whole numbers (IDs, quantities)\n• SERIAL for auto-incrementing IDs\n• DECIMAL for precise money values\n• Use the right size for your data",
              color: "var(--blue)",
            },
            {
              term: "DATES",
              emoji: "📅",
              short: "When things happen",
              detail: "• TIMESTAMP for exact moments (created_at, updated_at)\n• DATE for birthdays, deadlines\n• TIME for schedules\n• Always store in UTC when possible",
              color: "var(--orange)",
            },
            {
              term: "BOOLEAN",
              emoji: "✅",
              short: "True or false",
              detail: "• Perfect for flags: is_active, is_admin, is_published\n• Simple yes/no questions\n• Takes minimal storage space\n• Easy to query and filter",
              color: "var(--pink)",
            },
            {
              term: "JSON",
              emoji: "📦",
              short: "Flexible structured data",
              detail: "• Store complex objects, settings, metadata\n• Great for data that doesn't fit a rigid structure\n• PostgreSQL has excellent JSON support\n• Can query inside JSON fields",
              color: "var(--accent)",
            },
            {
              term: "UUID",
              emoji: "🆔",
              short: "Global unique IDs",
              detail: "• Better than auto-incrementing IDs for distributed systems\n• Impossible to guess, safe for public URLs\n• Slightly larger than integers\n• Great for security and scalability",
              color: "var(--text)",
            },
          ]}
        />
      </div>
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

function BlobStorageSlide() {
  return (
    <div>
      <h3 className={`${styles.slideHeader} ${styles.animateFadeInUp}`}>
        Beyond Text & Numbers
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        Blob Storage for Files
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click cards to learn about each storage type
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <ConceptCards
          concepts={[
            {
              term: "Database",
              emoji: "🗄️",
              short: "Structured data",
              detail: "• Perfect for user accounts, post content, settings\n• Fast queries, transactions, relationships\n• Great for numbers, text, dates\n• Not designed for large files",
              color: "var(--green)",
            },
            {
              term: "Blob Storage",
              emoji: "📁", 
              short: "Files & media",
              detail: "• For profile photos, PDFs, videos, audio, images\n• Optimized for large files\n• Store file → get URL → save URL in database\n• Unlimited file sizes and types",
              color: "var(--blue)",
            },
            {
              term: "Working Together",
              emoji: "🔗",
              short: "Best of both worlds",
              detail: "• Database stores metadata (filename, size, type)\n• Database also stores the file URL\n• Blob storage holds the actual file\n• Fast queries + unlimited file sizes",
              color: "var(--accent)",
            },
          ]}
        />
      </div>
      <div className={`${styles.textCenter} ${styles.animateFadeInUp} ${styles.stagger4}`} style={{ marginTop: '1.5rem' }}>
        <p className={styles.textSmall}>
          Vercel provides both <strong className="text-text">Postgres databases</strong> and <strong className="text-text">blob storage</strong> that work together seamlessly.
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
        Real Example
      </h3>
      <h2 className={`${styles.slideTitle} ${styles.animateFadeInUp} ${styles.stagger1}`}>
        A Blog Database Schema
      </h2>
      <p className={`${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger2}`}>
        Click each table to see its structure
      </p>
      <div className={`${styles.animateFadeInUp} ${styles.stagger3}`}>
        <ConceptCards
          concepts={[
            {
              term: "users",
              emoji: "👤",
              short: "People who use the blog",
              detail: "• id: SERIAL (unique ID)\n• username: VARCHAR(50)\n• email: VARCHAR(255)\n• is_admin: BOOLEAN\n• created_at: TIMESTAMP\n• Sample: 1, 'alice', 'alice@email.com', false, 2024-01-15",
              color: "var(--green)",
            },
            {
              term: "posts",
              emoji: "📝",
              short: "Blog articles and content",
              detail: "• id: SERIAL (unique ID)\n• title: VARCHAR(200)\n• content: TEXT\n• author_id: INTEGER (links to users.id)\n• view_count: INTEGER\n• published: BOOLEAN\n• created_at: TIMESTAMP",
              color: "var(--blue)",
            },
            {
              term: "Relationships",
              emoji: "🔗",
              short: "How tables connect",
              detail: "• author_id in posts table references id in users table\n• This means each post belongs to a user\n• One user can have many posts\n• This is called a one-to-many relationship",
              color: "var(--accent)",
            },
          ]}
        />
      </div>
      <p className={`${styles.textCenter} ${styles.textSmall} ${styles.animateFadeInUp} ${styles.stagger4}`} style={{ marginTop: '1rem' }}>
        This is how real apps store data — connected tables that reference each other.
      </p>
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
    <ColumnTypesSlide key="column-types" />,
    <DatabaseHostingSlide key="db-hosting" />,
    <BlobStorageSlide key="blob-storage" />,
    <NeonVercelSlide key="neon-vercel" />,
    <SetupDatabaseSlide key="setup-db" />,
    <ConnectDatabaseSlide key="connect-db" />,
    <SchemaExampleSlide key="schema-example" />,
    <AppIdeasSlide key="app-ideas" />,
    <RecapSlide key="recap" />,
  ];

  return <SlideShell slides={slides} />;
}