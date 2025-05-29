import React from "react";

/** PUBLIC_INTERFACE
 * NavBar component for main navigation.
 * Uses CSS class 'navbar' styled with theme variables for auto black-orange theme support.
 */
function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-symbol" style={{ color: "var(--kavia-orange)" }}>●</span>
        <span style={{ fontWeight: 700 }}>OmniBook AI</span>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <a href="/" style={{
          color: "var(--text-color)",
          textDecoration: "none",
          fontWeight: 500,
          marginRight: 16
        }}>Home</a>
        <a href="/bookings" style={{
          color: "var(--text-color)",
          textDecoration: "none",
          fontWeight: 500,
          marginRight: 16
        }}>Bookings</a>
        <a href="/dashboard" style={{
          color: "var(--accent)",
          textDecoration: "none",
          fontWeight: 600
        }}>Dashboard</a>
      </div>
    </nav>
  );
}

export default NavBar;
