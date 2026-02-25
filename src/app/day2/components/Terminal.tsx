"use client";

import { useState } from "react";
import styles from "../styles/terminal.module.scss";

export function Terminal({
  lines,
  title = "Terminal",
}: {
  lines: { prompt?: boolean; text: string; color?: string }[];
  title?: string;
}) {
  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.trafficLights}>
          <div className={`${styles.light} ${styles.red}`} />
          <div className={`${styles.light} ${styles.yellow}`} />
          <div className={`${styles.light} ${styles.green}`} />
        </div>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.content}>
        {lines.map((line, i) => (
          <div key={i} className={styles.line}>
            {line.prompt && (
              <span className={styles.prompt}>$</span>
            )}
            <span 
              className={line.prompt ? styles.command : styles.output}
              style={{ color: line.color }}
            >
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InteractiveTerminal({
  steps,
}: {
  steps: { command: string; output: string[]; note?: string }[];
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const visibleSteps = steps.slice(0, currentStep + 1);

  return (
    <div className={styles.interactiveTerminal}>
      <div className={styles.header}>
        <div className={styles.trafficLights}>
          <div className={`${styles.light} ${styles.red}`} />
          <div className={`${styles.light} ${styles.yellow}`} />
          <div className={`${styles.light} ${styles.green}`} />
        </div>
        <span className={styles.title}>Interactive Terminal</span>
      </div>
      <div className={styles.interactiveContent}>
        {visibleSteps.map((step, i) => (
          <div key={i} className={styles.step}>
            <div className={styles.stepCommand}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>{step.command}</span>
            </div>
            {i < currentStep && (
              <>
                {step.output.map((line, j) => (
                  <div key={j} className={styles.stepOutput}>
                    {line}
                  </div>
                ))}
                {step.note && (
                  <div className={styles.note}>
                    💡 {step.note}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        <div className={styles.controls}>
          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep((s) => s + 1)}
              className={styles.nextButton}
            >
              Run next command &rarr;
            </button>
          ) : (
            <span className={styles.completed}>All done!</span>
          )}
        </div>
      </div>
    </div>
  );
}