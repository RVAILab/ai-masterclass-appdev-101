"use client";

import { useState } from "react";
import styles from "../styles/ConceptCard.module.scss";

interface Concept {
  term: string;
  emoji: string;
  short: string;
  detail: string;
  color: string;
}

export function ConceptCards({ concepts }: { concepts: Concept[] }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className={styles.grid}>
      {concepts.map((c, i) => (
        <button
          key={c.term}
          onClick={() => toggle(i)}
          className={styles.card}
          style={{
            borderColor: flipped.has(i) ? c.color + "66" : undefined,
            background: flipped.has(i) ? c.color + "0a" : undefined,
          }}
        >
          {!flipped.has(i) ? (
            <>
              <span className={styles.emoji}>{c.emoji}</span>
              <span className={styles.term}>{c.term}</span>
              <span className={styles.short}>{c.short}</span>
              <span className={styles.hint}>click to learn more</span>
            </>
          ) : (
            <>
              <span className={styles.flippedTerm} style={{ color: c.color }}>
                {c.term}
              </span>
              <span className={styles.detail}>
                {c.detail}
              </span>
            </>
          )}
        </button>
      ))}
    </div>
  );
}