import React from "react";

/**
 * PUBLIC_INTERFACE
 * DomainQuickFilters renders clickable/tappable chips for each major booking domain.
 * Uses static data, app palette, and modern "chip" UI.
 */
// PUBLIC_INTERFACE
function DomainQuickFilters() {
  // Later: fetch these from API.
  const domains = [
    { label: "Movies", color: "var(--accent)", icon: "🎬" },
    { label: "Sports", color: "var(--kavia-orange)", icon: "🏏" },
    { label: "Travel", color: "var(--kavia-orange)", icon: "✈️" },
    { label: "Concerts", color: "var(--accent)", icon: "🎤" },
    { label: "Events", color: "var(--accent)", icon: "🎪" },
    { label: "Venues", color: "var(--kavia-orange)", icon: "🏟️" },
    { label: "Resorts", color: "var(--kavia-orange)", icon: "🏝️" },
  ];

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        maxWidth: 690,
        padding: "0.5rem 1rem",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.7rem"
      }}
    >
      {domains.map((d) => (
        <button
          type="button"
          key={d.label}
          style={{
            background: d.color,
            color: "white",
            border: "none",
            borderRadius: 22,
            padding: "8px 26px 8px 17px",
            fontWeight: 600,
            fontSize: "1.03rem",
            letterSpacing: ".01em",
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
            display: "flex",
            alignItems: "center",
            gap: 9,
            cursor: "pointer",
            transition: "background .17s"
          }}
          // Add domain click logic later
        >
          <span>{d.icon}</span>
          {d.label}
        </button>
      ))}
    </div>
  );
}

export default DomainQuickFilters;
