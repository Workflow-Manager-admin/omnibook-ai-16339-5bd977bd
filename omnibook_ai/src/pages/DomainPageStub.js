import React from "react";
import { useParams } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * DomainPageStub - renders a stub page for a domain (e.g., Movies, Sports, Travel, etc.)
 */
function DomainPageStub() {
  const { domainSlug } = useParams();

  // Simple mapping for nice display
  const titles = {
    movies: "Movies",
    sports: "Sports",
    travel: "Travel",
    concerts: "Concerts",
    events: "Events",
    venues: "Venues",
    resorts: "Resorts"
  };

  const displayTitle = titles[domainSlug] || domainSlug;

  return (
    <div className="container" style={{ marginTop: 40 }}>
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.7rem",
          color: "var(--kavia-orange)",
          margin: "16px 0 12px 0"
        }}
      >
        {displayTitle} Domain
      </div>
      <div style={{ color: "var(--text-secondary)", fontSize: "1.07rem", marginBottom: 32 }}>
        This is a stub page for the <b>{displayTitle}</b> domain. Future: populate with domain-specific events and offers.
      </div>
      <div
        style={{
          background: "var(--sidebar-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: 10,
          padding: "18px 22px",
          maxWidth: 420
        }}
      >
        <span role="img" aria-label="placeholder" style={{ fontSize: "1.3em", marginRight: 7 }}>
          🚧
        </span>
        More domain features coming soon!
      </div>
    </div>
  );
}
export default DomainPageStub;
