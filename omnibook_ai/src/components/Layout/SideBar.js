import React from "react";

// PUBLIC_INTERFACE
/**
 * SideBar layout component for OmniBook AI.
 * Applies sidebar section classes and theme variables for dark/auto black-orange palette.
 */
function SideBar() {
  return (
    <aside
      className="sidebar"
      style={{
        background: "var(--sidebar-bg)",
        borderRight: "1px solid var(--border-color)",
        color: "var(--text-color)",
        minWidth: 160,
        minHeight: "calc(100vh - 64px)", // Leave space for navbar
        paddingTop: 64,
        paddingLeft: 8
      }}>
      <div style={{ padding: "2rem 1rem 1rem 1rem" }}>
        <div style={{
          color: "var(--kavia-orange)",
          fontWeight: 600,
          marginBottom: 24
        }}>Quick Filters</div>
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <li><a href="/bookings" style={{ color: "var(--accent)", textDecoration: "none" }}>Bookings</a></li>
          <li><a href="/profile" style={{ color: "var(--text-color)", textDecoration: "none" }}>Profile</a></li>
          <li><a href="/dashboard" style={{ color: "var(--kavia-orange)", textDecoration: "none" }}>Admin</a></li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
