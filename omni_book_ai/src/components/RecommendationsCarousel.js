import React, { useState, useRef } from "react";

// Mock recommendations (replace with backend/API in real app)
const RECS = [
  { id: 11, label: "NY to Tokyo – Flight Deal", emoji: "✈️" },
  { id: 12, label: "Hilton Downtown Hotel", emoji: "🏨" },
  { id: 13, label: "Concert: U2 World Tour", emoji: "🎶" },
  { id: 14, label: "Oppenheimer – Movie", emoji: "🎬" },
  { id: 15, label: "Palm Beach Resort", emoji: "🌴" },
];

// PUBLIC_INTERFACE
export default function RecommendationsCarousel() {
  /**
   * Interactive recommendations carousel:
   * - Cards with click/keyboard selection and hover highlight
   * - aria-pressed and keyboard nav (left/right arrows)
   */
  const [selected, setSelected] = useState(null);
  const [focusIdx, setFocusIdx] = useState(-1);
  const listRef = useRef([]);

  function handleClick(idx) {
    setSelected(idx);
  }
  function handleKeyDown(e, idx) {
    if (e.key === " " || e.key === "Enter") {
      setSelected(idx);
      e.preventDefault();
    }
    if (e.key === "ArrowRight") {
      const next = (idx + 1) % RECS.length;
      listRef.current[next]?.focus();
      setFocusIdx(next);
      e.preventDefault();
    }
    if (e.key === "ArrowLeft") {
      const prev = (idx - 1 + RECS.length) % RECS.length;
      listRef.current[prev]?.focus();
      setFocusIdx(prev);
      e.preventDefault();
    }
  }

  return (
    <section
      aria-label="Personalized Recommendations"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--border-color)",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "10px 8px",
        minHeight: 76,
        overflowX: "auto",
        gap: "0.8rem",
      }}
      role="list"
    >
      {RECS.map((item, idx) => {
        const isSelected = selected === idx;
        return (
          <button
            ref={el => (listRef.current[idx] = el)}
            key={item.id}
            className="rec-card"
            tabIndex={0}
            role="listitem"
            aria-pressed={isSelected}
            aria-label={`${item.label}${isSelected ? " (selected)" : ""}`}
            onClick={() => handleClick(idx)}
            onKeyDown={e => handleKeyDown(e, idx)}
            style={{
              background: isSelected
                ? "var(--accent)"
                : "rgba(255,255,255,0.10)",
              color: isSelected
                ? "#fff"
                : "var(--text-color)",
              border: isSelected
                ? "2.5px solid var(--secondary)"
                : "1.5px solid var(--border-color)",
              boxShadow: isSelected
                ? "0 0 0 2px var(--accent)"
                : undefined,
              outline: isSelected
                ? "2.4px solid var(--accent)"
                : undefined,
              borderRadius: 8,
              minWidth: 135,
              minHeight: 50,
              padding: "12px 17px",
              marginRight: "7px",
              fontWeight: 500,
              fontSize: "1.02rem",
              display: "flex",
              alignItems: "center",
              gap: 11,
              cursor: "pointer",
              transition: "background 0.17s, border 0.15s, box-shadow 0.13s",
              opacity: isSelected ? 1 : 0.94,
              position: "relative",
            }}
            onMouseOver={() => setFocusIdx(idx)}
            onFocus={() => setFocusIdx(idx)}
            onBlur={() => setFocusIdx(-1)}
            data-active={isSelected ? "true" : undefined}
          >
            <span aria-hidden="true" style={{ fontSize: "1.35rem" }}>
              {item.emoji}
            </span>
            <span>{item.label}</span>
            {isSelected && (
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: 7,
                  top: 7,
                  fontWeight: 700,
                  fontSize: "1.13em",
                  background: "var(--secondary)",
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "1px 6px",
                  letterSpacing: "0.04em",
                  boxShadow: "0 1px 5px 0 rgba(120,60,0,0.12)",
                }}
              >
                ✓
              </span>
            )}
          </button>
        );
      })}
      {/* Visual feedback area */}
      <div style={{
        marginLeft: 16,
        color: "var(--text-secondary)",
        fontSize: "0.98em"
      }} aria-live="polite">
        {selected !== null ? (
          <span>
            Selected: <strong>{RECS[selected].label}</strong>
          </span>
        ) : (
          <span>Click a card to see recommendation details</span>
        )}
      </div>
    </section>
  );
}
