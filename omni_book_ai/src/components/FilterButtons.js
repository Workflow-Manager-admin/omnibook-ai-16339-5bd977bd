import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * FilterButtons: Interactive filter and quick-access buttons.
 * - Allows toggling multiple filters on/off.
 * - Shows which filters are active (visually & with ARIA).
 * - Applies mock logic to demo content (UI-only, no real backend).
 * - Accessible with keyboard navigation and screen readers.
 */
export default function FilterButtons() {
  // Available filters for demonstration
  const filters = [
    { label: "Sports", icon: "🏟️" },
    { label: "Movies", icon: "🎬" },
    { label: "Concerts", icon: "🎶" },
    { label: "Travel", icon: "✈️" },
    { label: "Venues", icon: "🏨" },
    { label: "Events", icon: "📆" },
    { label: "Resorts", icon: "🌴" },
  ];

  // Local state: which filters are active (by label)
  const [active, setActive] = useState([]);

  // PUBLIC_INTERFACE
  function toggleFilter(label) {
    setActive((curr) =>
      curr.includes(label)
        ? curr.filter((f) => f !== label)
        : [...curr, label]
    );
  }

  // Optional: Provide some UI demonstration of the active filters
  // (In real app, this would affect filtered results/events, etc.)
  function renderActiveFeedback() {
    if (active.length === 0) {
      return (
        <div
          style={{
            marginTop: 10,
            color: "var(--text-secondary)",
            fontSize: "0.97rem",
            textAlign: "center",
          }}
          aria-live="polite"
        >
          No filters active. Showing all domains.
        </div>
      );
    }
    return (
      <div
        style={{
          marginTop: 10,
          color: "var(--kavia-orange)",
          textAlign: "center",
          fontWeight: 500,
        }}
        aria-live="polite"
      >
        {active.map((f) => (
          <span
            key={f}
            style={{
              background: "rgba(255,136,0,0.12)",
              color: "var(--secondary)",
              borderRadius: 6,
              padding: "1px 9px",
              margin: "0 7px 0 0",
              fontSize: "0.98em",
              border: "1px solid var(--accent)",
            }}
            aria-label={`Filter active: ${f}`}
          >
            {filters.find((x) => x.label === f)?.icon || "✨"} {f}
          </span>
        ))}
        <span style={{fontWeight: 300, marginLeft: 5, color: "var(--text-secondary)"}}>
          {active.length === 1 ? "filter active" : "filters active"}
        </span>
      </div>
    );
  }

  return (
    <div
      className="filter-btns-group"
      role="group"
      aria-label="Main quick filter buttons"
    >
      {filters.map((btn) => {
        const isSelected = active.includes(btn.label);
        return (
          <button
            key={btn.label}
            className={`btn filter-btn${isSelected ? " filter-btn--active" : ""}`}
            tabIndex={0}
            aria-label={`Filter: ${btn.label}${isSelected ? " (active)" : ""}`}
            aria-pressed={isSelected}
            type="button"
            onClick={() => toggleFilter(btn.label)}
            style={{
              background: isSelected
                ? "var(--kavia-orange)"
                : "var(--secondary)",
              color: isSelected ? "#fff" : "#fff",
              border:
                isSelected
                  ? "2px solid var(--accent)"
                  : "1.5px solid var(--border-color)",
              boxShadow: isSelected
                ? "0 0 0 2px var(--accent)"
                : undefined,
              outline: isSelected
                ? "2px solid var(--accent)"
                : undefined,
              fontWeight: isSelected ? 700 : 500,
              opacity: isSelected ? 1 : 0.94,
              transition: "background 0.19s, border 0.16s, box-shadow 0.18s",
            }}
          >
            <span
              aria-hidden="true"
              className="filter-btn-icon"
              style={{ textShadow: isSelected ? "0 0 4px #FF9100" : undefined }}
            >
              {btn.icon}
            </span>
            {btn.label}
            {isSelected && (
              <span
                aria-hidden="true"
                style={{
                  fontWeight: 400,
                  marginLeft: 5,
                  fontSize: "0.97em",
                  color: "#fff",
                  background: "var(--accent)",
                  borderRadius: "4px",
                  padding: "1px 7px",
                  marginRight: -3,
                  marginLeft: 8,
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
      {/* Live feedback area below buttons: what filters are active */}
      <div style={{ width: "100%" }}>{renderActiveFeedback()}</div>
    </div>
  );
}

