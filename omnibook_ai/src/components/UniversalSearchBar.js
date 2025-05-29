import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * UniversalSearchBar enables users to perform global, cross-domain search.
 * Uses the brand's black/orange palette and responsive container.
 */
// PUBLIC_INTERFACE
function UniversalSearchBar() {
  const [query, setQuery] = useState("");

  // Dummy intent tags for demonstration only
  const suggestions = [
    "Movies in Mumbai",
    "Book cricket tickets",
    "Rock concerts near me",
    "Best family resorts",
    "Next weekend events",
  ];

  return (
    <div
      style={{
        background: "var(--surface)",
        borderRadius: 16,
        boxShadow: "0 0 0 1px var(--border-color), 0 2px 8px rgba(0,0,0,0.06)",
        padding: "1.5rem 1rem 1.25rem 1.5rem",
        maxWidth: 660,
        margin: "32px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <label htmlFor="universal-search-input" style={{
        color: "var(--text-secondary)",
        fontSize: "1.05rem",
        marginBottom: 6,
        fontWeight: 500,
        letterSpacing: 0.2,
      }}>
        Search anything — movies, sports, flights, events, venues...
      </label>
      <div style={{
        display: "flex",
        alignItems: "center",
        background: "var(--secondary-bg)",
        borderRadius: 10,
        border: "1.5px solid var(--border-color)",
        width: "100%"
      }}>
        <input
          id="universal-search-input"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Try 'cricket finals tickets' or 'find jazz concerts nearby'"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "1.13rem",
            background: "transparent",
            padding: "12px",
            color: "var(--text-color)",
            borderRadius: 10,
          }}
        />
        <button
          type="button"
          style={{
            background: "var(--kavia-orange)",
            color: "white",
            border: "none",
            borderRadius: "9px",
            padding: "8px 16px",
            marginLeft: 8,
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </div>
      {/* Fake suggestions for UI illustration */}
      <div style={{
        marginTop: 10,
        color: "var(--text-secondary)",
        fontSize: ".95rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
      }}>
        {suggestions.map((s, idx) => (
          <span
            key={idx}
            style={{
              background: "var(--sidebar-bg)",
              padding: "5px 13px",
              borderRadius: "12px",
              color: "var(--kavia-orange)",
              fontWeight: 500,
              fontSize: ".98em",
              cursor: "pointer",
              border: "1px solid var(--border-color)",
              transition: "background .13s"
            }}
            onClick={() => setQuery(s)}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default UniversalSearchBar;
