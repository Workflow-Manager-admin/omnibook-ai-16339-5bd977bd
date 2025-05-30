import React, { useState, useRef } from "react";

// Mock booking steps (could expand/replace w/ real logic)
const STEPS = [
  { id: 101, label: "1. Choose Event", emoji: "🎫" },
  { id: 102, label: "2. Select Date & Time", emoji: "📅" },
  { id: 103, label: "3. Pick Seat", emoji: "🪑" },
  { id: 104, label: "4. Confirm Booking", emoji: "✅" },
];

// PUBLIC_INTERFACE
export default function BookingFlow() {
  /**
   * Step-wise booking UI mockup.
   * - Each step is selectable.
   * - Keyboard and screen reader accessible.
   */
  const [currentStep, setCurrentStep] = useState(0);
  const listRef = useRef([]);

  function handleClick(idx) {
    setCurrentStep(idx);
  }
  function handleKeyDown(e, idx) {
    // Select on Enter or Space
    if (e.key === " " || e.key === "Enter") {
      setCurrentStep(idx);
      e.preventDefault();
    }
    // Keyboard step navigation with arrows
    if (e.key === "ArrowDown") {
      const next = (idx + 1) % STEPS.length;
      listRef.current[next]?.focus();
      e.preventDefault();
    }
    if (e.key === "ArrowUp") {
      const prev = (idx - 1 + STEPS.length) % STEPS.length;
      listRef.current[prev]?.focus();
      e.preventDefault();
    }
  }

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px dashed var(--accent)",
      borderRadius: 10,
      color: "var(--accent)",
      padding: "9px 0 6px 0",
      minHeight: 64,
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }}>
      <div
        role="list"
        aria-label="Booking Flow Steps"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          justifyContent: "space-evenly"
        }}
      >
        {STEPS.map((step, idx) => {
          const isActive = currentStep === idx;
          return (
            <button
              ref={el => (listRef.current[idx] = el)}
              key={step.id}
              tabIndex={0}
              role="listitem"
              aria-pressed={isActive}
              aria-label={`${step.label}${isActive ? " (current)" : ""}`}
              type="button"
              onClick={() => handleClick(idx)}
              onKeyDown={e => handleKeyDown(e, idx)}
              style={{
                background: isActive ? "var(--kavia-orange)" : "rgba(255,255,255,0.10)",
                color: isActive ? "#fff" : "var(--accent)",
                border: isActive
                  ? "2.2px solid var(--accent)"
                  : "1px dashed var(--accent)",
                borderRadius: 7,
                minWidth: 110,
                minHeight: 48,
                padding: "11px 10px",
                fontWeight: isActive ? 700 : 500,
                fontSize: "1.05rem",
                outline: isActive ? "2.4px solid var(--accent)" : undefined,
                cursor: "pointer",
                boxShadow: isActive
                  ? "0 0 0 2px var(--accent)"
                  : undefined,
                transition: "background 0.15s, border 0.14s, box-shadow 0.13s",
                opacity: isActive ? 1 : 0.93,
                display: "flex",
                alignItems: "center",
                gap: 6,
                position: "relative",
              }}
              onFocus={() => {}}
            >
              <span aria-hidden="true" style={{
                fontSize: "1.25rem",
                marginRight: "0.40em"
              }}>{step.emoji}</span>
              <span>{step.label}</span>
              {isActive && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 7,
                    right: 7,
                    fontWeight: "bold",
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: "2.8px",
                    padding: "0 5px",
                    fontSize: "1em",
                  }}
                >✓</span>
              )}
            </button>
          );
        })}
      </div>
      {/* Mock display of current step detail */}
      <div
        style={{
          margin: "12px 0 0 0",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 6,
          color: "var(--accent)",
          minHeight: 28,
          padding: "7px 12px",
          fontSize: "1.04em",
          transition: "background 0.13s",
        }}
        aria-live="polite"
      >
        <span>
          {(() => {
            switch (currentStep) {
              case 0: return "Select an event to book tickets for.";
              case 1: return "Choose your preferred date and time.";
              case 2: return "Pick your seat for the event (try AR preview next!).";
              case 3: return "Review and confirm your booking.";
              default: return null;
            }
          })()}
        </span>
      </div>
    </div>
  );
}
