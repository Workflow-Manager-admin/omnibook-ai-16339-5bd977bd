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
    <div
      className="filter-btns-group"
      role="group"
      aria-label="Main quick filter buttons"
    >
      {filters.map(btn => (
        <button
          key={btn.label}
          className="btn filter-btn"
          tabIndex={0}
          aria-label={`Filter: ${btn.label}`}
          type="button"
        >
          <span aria-hidden="true" className="filter-btn-icon">
            {btn.icon}
          </span>
          {btn.label}
        </button>
      ))}
    </div>
  );
}
