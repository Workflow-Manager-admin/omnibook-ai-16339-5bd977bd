import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * DomainQuickFilters renders clickable/tappable chips for each major booking domain.
 * Uses static data, app palette, and modern "chip" UI.
 */
// PUBLIC_INTERFACE
function DomainQuickFilters() {
  /**
   * Defines the quick filter domains and their metadata
   * Each chip will navigate to /domain/:domainSlug
   */
  const domains = [
    { label: "Movies", color: "var(--accent)", icon: "🎬", slug: "movies" },
    { label: "Sports", color: "var(--kavia-orange)", icon: "🏏", slug: "sports" },
    { label: "Travel", color: "var(--kavia-orange)", icon: "✈️", slug: "travel" },
    { label: "Concerts", color: "var(--accent)", icon: "🎤", slug: "concerts" },
    { label: "Events", color: "var(--accent)", icon: "🎪", slug: "events" },
    { label: "Venues", color: "var(--kavia-orange)", icon: "🏟️", slug: "venues" },
    { label: "Resorts", color: "var(--kavia-orange)", icon: "🏝️", slug: "resorts" },
  ];

  const navigate = useNavigate();

  /**
   * Handles clicks on filter chips, routing to a domain's page
   * @param {string} slug
   */
  function handleDomainClick(slug) {
    navigate(`/domain/${slug}`);
  }

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
          onClick={() => handleDomainClick(d.slug)}
          aria-label={`Filter by ${d.label}`}
        >
          <span>{d.icon}</span>
          {d.label}
        </button>
      ))}
    </div>
  );
}

export default DomainQuickFilters;
