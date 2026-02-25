"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/presentation.module.scss";

export function SlideShell({
  slides,
}: {
  slides: ReactNode[];
}) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const router = useRouter();

  const go = useCallback(
    (dir: "next" | "prev") => {
      setCurrent((c) => {
        if (dir === "next") return Math.min(c + 1, total - 1);
        return Math.max(c - 1, 0);
      });
    },
    [total]
  );

  const handleExit = useCallback(() => {
    router.push("/");
  }, [router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go("next");
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go("prev");
      }
      if (e.key === "Escape") {
        e.preventDefault();
        handleExit();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, handleExit]);

  const progress = ((current + 1) / total) * 100;

  return (
    <div className={styles.slideContainer}>
      {/* Exit button */}
      <button
        onClick={handleExit}
        className={styles.exitButton}
        aria-label="Exit presentation (ESC)"
        title="Exit presentation (ESC)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Progress bar */}
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      />

      {/* Slides */}
      <div className={styles.slidesContainer}>
        {slides.map((slide, i) => {
          let slideClass = styles.slide;
          if (i === current) {
            slideClass += ` ${styles.current}`;
          } else if (i < current) {
            slideClass += ` ${styles.prev}`;
          } else {
            slideClass += ` ${styles.next}`;
          }
          
          return (
            <div key={i} className={slideClass}>
              <div className={styles.slideContent}>{slide}</div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className={styles.navigation}>
        <button
          onClick={() => go("prev")}
          disabled={current === 0}
          className={styles.navButton}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className={styles.slideCounter}>
          {current + 1} / {total}
        </span>
        <button
          onClick={() => go("next")}
          disabled={current === total - 1}
          className={styles.navButton}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}