"use client";

import { useState } from "react";
import type { ReactElement } from "react";
import styles from "../styles/GitFlow.module.scss";

const stages = [
  {
    id: "edit",
    label: "Edit Files",
    icon: "pencil",
    description: "You make changes to your code — add a feature, fix a bug, tweak the design.",
    color: "var(--orange)",
  },
  {
    id: "stage",
    label: "Stage",
    icon: "plus",
    description: "You pick which changes you want to save. Like selecting photos before putting them in an album.",
    command: "git add .",
    color: "var(--blue)",
  },
  {
    id: "commit",
    label: "Commit",
    icon: "save",
    description: "You take a snapshot — a permanent save point with a message describing what you did.",
    command: 'git commit -m "added login page"',
    color: "var(--green)",
  },
  {
    id: "push",
    label: "Push",
    icon: "upload",
    description: "You upload your snapshot(s) to GitHub so they're backed up and shareable with others.",
    command: "git push",
    color: "var(--pink)",
  },
];

const icons: Record<string, ReactElement> = {
  pencil: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
  ),
  plus: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  ),
  save: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
  ),
  upload: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
  ),
};

export function GitFlow() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.container}>
      {/* Flow arrows */}
      <div className={styles.flowContainer}>
        {stages.map((stage, i) => (
          <div key={stage.id} className={styles.stageWrapper}>
            <button
              onClick={() => setActive(i)}
              className={`${styles.stageButton} ${active === i ? styles.active : ""}`}
            >
              <div
                className={`${styles.iconContainer} ${active === i ? styles.active : ""}`}
                style={{
                  background: active === i ? stage.color + "22" : "var(--surface-2)",
                  color: active === i ? stage.color : "var(--text-dim)",
                }}
              >
                {icons[stage.icon]}
              </div>
              <span
                className={`${styles.stageLabel} ${active === i ? styles.active : ""}`}
                style={{ color: active === i ? stage.color : "var(--text-dim)" }}
              >
                {stage.label}
              </span>
            </button>
            {i < stages.length - 1 && (
              <div className={styles.arrow}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detail card */}
      <div
        className={styles.detailCard}
        style={{ borderColor: stages[active].color + "44" }}
      >
        <p className={styles.description}>
          {stages[active].description}
        </p>
        {stages[active].command && (
          <div className={styles.command}>
            <span className={styles.prompt}>$</span>
            <span className={styles.commandText} style={{ color: stages[active].color }}>
              {stages[active].command}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}