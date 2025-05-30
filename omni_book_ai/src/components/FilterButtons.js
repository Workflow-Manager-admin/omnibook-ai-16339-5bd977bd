import React from "react";

// PUBLIC_INTERFACE
export default function FilterButtons() {
  /** Placeholder for filter and quick-access buttons. */
  const filters = [
    { label: "Sports", icon: "🏟️" },
    { label: "Movies", icon: "🎬" },
    { label: "Concerts", icon: "🎶" },
    { label: "Travel", icon: "✈️" },
    { label: "Venues", icon: "🏨" },
    { label: "Events", icon: "📆" },
    { label: "Resorts", icon: "🌴" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
      {filters.map(btn => (
        <button
          key={btn.label}
          className="btn"
          style={{
            background: "var(--secondary)",
            color: "#fff",
            fontWeight: 500,
            fontSize: "1rem",
            margin: "2px 0",
            minWidth: 102,
            display: "flex",
            alignItems: "center",
            gap: 7
          }}>
          <span style={{ fontSize: "1.2rem" }}>{btn.icon}</span> {btn.label}
        </button>
      ))}
    </div>
  );
}
