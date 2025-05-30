import React, { useState } from "react";

// PUBLIC_INTERFACE
export default function UniversalSearch() {
  /**
   * UniversalSearch: Controlled, accessible search bar.
   * - Input state, onChange, and onSubmit
   * - Filter and show mock results for demonstration
   */
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Mock "universal" data, normally would come from a backend or ML/search.
  const mockData = [
    { id: 1, type: "Event", label: "Champions League Final", domain: "Sports" },
    { id: 2, type: "Movie", label: "Interstellar", domain: "Movies" },
    { id: 3, type: "Flight", label: "NY to Tokyo", domain: "Travel" },
    { id: 4, type: "Hotel", label: "Hilton Downtown", domain: "Venues" },
    { id: 5, type: "Concert", label: "Taylor Swift 'Eras Tour'", domain: "Concerts" },
    { id: 6, type: "Event", label: "Local Food Festival", domain: "Events" },
    { id: 7, type: "Resort", label: "Palm Beach Resort", domain: "Resorts" },
    { id: 8, type: "Event", label: "U2 World Tour", domain: "Concerts" },
    { id: 9, type: "Movie", label: "Oppenheimer", domain: "Movies" },
    { id: 10, type: "Flight", label: "London to Paris", domain: "Travel" },
  ];

  // Filter function for demonstration: case-insensitive match in label or domain
  const filteredResults =
    query.trim() === ""
      ? []
      : mockData.filter(
          (item) =>
            item.label.toLowerCase().includes(query.trim().toLowerCase()) ||
            item.domain.toLowerCase().includes(query.trim().toLowerCase())
        );

  // Handle input state
  function handleChange(e) {
    setQuery(e.target.value);
    setSubmitted(false); // reset result state on edit
  }

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true); // show filtered/mock results
  }

  return (
    <div style={{width: "100%", maxWidth: 400, margin: "0 auto"}}>
      <form
        role="search"
        aria-label="Universal AI search"
        style={{
          width: "100%",
          maxWidth: 400,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          value={query}
          onChange={handleChange}
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
            boxSizing: "border-box",
          }}
          aria-label="Universal search"
          aria-describedby="search-desc"
          autoComplete="on"
        />
        {/* visually hidden search description for screen readers */}
        <span id="search-desc" style={{position: "absolute", left: "-10000px", width:1, height:1, overflow:"hidden"}}>
          Search for events, movies, hotels, flights and more using OmniBook AI.
        </span>
        <span
          aria-hidden="true"
          style={{
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
      </form>
      {submitted && (
        <div
          style={{
            marginTop: 12,
            background: "rgba(255,255,255,0.035)",
            border: "1px solid var(--border-color)",
            borderRadius: 7,
            padding: "12px 8px 7px 12px",
            color: "var(--text-secondary)",
            fontSize: "0.98rem",
            boxShadow: "0px 2px 10px 0px rgba(30,23,0,0.06)"
          }}
          aria-live="polite"
        >
          <div style={{fontWeight: 600, color: "var(--kavia-orange)", marginBottom: 6}}>
            Search Results
          </div>
          {filteredResults.length === 0 ? (
            <div style={{color: "#CD5731"}}>No results found for "{query.trim()}".</div>
          ) : (
            <ul style={{margin: 0, padding: 0, listStyle: "none"}}>
              {filteredResults.map((item) => (
                <li
                  key={item.id}
                  style={{
                    margin: "0 0 7px 0",
                    padding: "7px 0 4px 2px",
                    borderBottom: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span role="img" aria-label={item.domain}>
                    {getDomainEmoji(item.domain)}
                  </span>
                  <span style={{fontWeight: 500, color: "var(--text-color)"}}>{item.label}</span>
                  <span style={{marginLeft: 7, color: "var(--accent)", fontSize: "0.92em"}}>[{item.domain}]</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

// Helper to give a simple emoji for each domain for demonstration.
function getDomainEmoji(domain) {
  switch ((domain || "").toLowerCase()) {
    case "sports": return "🏟️";
    case "movies": return "🎬";
    case "concerts": return "🎶";
    case "travel": return "✈️";
    case "venues": return "🏨";
    case "events": return "📆";
    case "resorts": return "🌴";
    default: return "🎫";
  }
}
