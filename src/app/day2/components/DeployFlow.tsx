"use client";

import { useState } from "react";
import styles from "../styles/DeployFlow.module.scss";

const steps = [
  {
    title: "Push to GitHub",
    description: "Your code goes from your computer to GitHub — a backup in the cloud that Vercel can access.",
    visual: (
      <div className={styles.visualContainer}>
        <div className={styles.visualColumn}>
          <div className={styles.visualBox}>💻</div>
          <span className={styles.visualLabel}>Your Computer</span>
        </div>
        <div className={`${styles.visualArrow} text-accent`}>
          <span className={styles.visualCommand}>git push</span>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none"><path d="M2 8h24m0 0l-6-5m6 5l-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className={styles.visualColumn}>
          <div className={styles.visualBox}>🐙</div>
          <span className={styles.visualLabel}>GitHub</span>
        </div>
      </div>
    ),
  },
  {
    title: "Vercel Detects Changes",
    description: "Vercel is connected to your GitHub repo. Every time you push, it automatically starts building your app.",
    visual: (
      <div className={styles.visualContainer}>
        <div className={styles.visualColumn}>
          <div className={styles.visualBox}>🐙</div>
          <span className={styles.visualLabel}>GitHub</span>
        </div>
        <div className={`${styles.visualArrow} text-green`}>
          <span className={styles.visualCommand}>webhook</span>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none"><path d="M2 8h24m0 0l-6-5m6 5l-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className={styles.visualColumn}>
          <div className={styles.visualBox}>▲</div>
          <span className={styles.visualLabel}>Vercel</span>
        </div>
      </div>
    ),
  },
  {
    title: "Build & Deploy",
    description: "Vercel builds your Next.js app and puts it on fast servers around the world. Takes about 30-60 seconds.",
    visual: (
      <div className={styles.visualContainer}>
        <div className={styles.visualColumn}>
          <div className={styles.visualBox}>▲</div>
          <span className={styles.visualLabel}>Vercel builds</span>
        </div>
        <div className={`${styles.visualArrow} text-orange`}>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none"><path d="M2 8h24m0 0l-6-5m6 5l-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className={styles.visualColumn}>
          <div className={styles.visualBox}>🌐</div>
          <span className={styles.visualLabel}>Live on the web</span>
        </div>
      </div>
    ),
  },
  {
    title: "You Get a URL!",
    description: "Your app is live at yourapp.vercel.app — share it with anyone. Every future push auto-updates it.",
    visual: (
      <div className={styles.visualContainer} style={{ flexDirection: 'column', gap: '0.75rem' }}>
        <div className={styles.urlDisplay}>
          https://my-cool-app.vercel.app
        </div>
        <span className={styles.urlDescription}>Anyone with this link can visit your app</span>
      </div>
    ),
  },
];

export function DeployFlow() {
  const [step, setStep] = useState(0);

  return (
    <div className={styles.container}>
      {/* Step indicators */}
      <div className={styles.stepIndicators}>
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`${styles.stepButton} ${step === i ? styles.active : ""}`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h4 className={styles.title}>
          Step {step + 1}: {steps[step].title}
        </h4>
        <p className={styles.description}>
          {steps[step].description}
        </p>
        {steps[step].visual}
      </div>

      {/* Nav */}
      <div className={styles.navigation}>
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className={styles.navButton}
        >
          &larr; Previous step
        </button>
        <button
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={step === steps.length - 1}
          className={styles.nextButton}
        >
          Next step &rarr;
        </button>
      </div>
    </div>
  );
}