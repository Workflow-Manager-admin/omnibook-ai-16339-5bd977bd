import React from "react";

// PUBLIC_INTERFACE
export default function UniversalSearch() {
  /** Placeholder component for universal AI-powered search bar. */
  return (
    <div style={{
      width: "100%",
      maxWidth: 400,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
      <input
        type="search"
        placeholder="Search events, movies, flights, hotels, etc..."
        style={{
          width: "100%",
          padding: "10px 36px 10px 14px",
          border: "1px solid var(--border-color)",
          borderRadius: 6,
          background: "var(--primary)",
          color: "var(--text-color)",
          outline: "none",
          fontSize: "1rem",
          boxSizing: "border-box"
        }}
        aria-label="Universal search"
      />
      <span style={{
        position: "relative",
        left: -30,
        color: "var(--kavia-orange)",
        pointerEvents: "none",
        fontWeight: 400
      }}>
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="2"/>
          <line x1="16.2322" y1="16.6465" x2="19.0607" y2="19.4749" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    </div>
  );
}
