import React from "react";

// PUBLIC_INTERFACE
/**
 * Footer layout component for OmniBook AI.
 * Applies footer styling using theme variables (auto/dark black-orange accent palette).
 */
function Footer() {
  return (
    <footer
      className="footer"
      style={{
        background: "var(--footer-bg)",
        color: "var(--text-secondary)",
        textAlign: "center",
        fontSize: "0.95rem",
        padding: "16px 0",
        borderTop: "1px solid var(--border-color)",
        marginTop: "auto"
      }}
    >
      &copy; {new Date().getFullYear()} OmniBook AI &mdash; Smart Booking Platform
    </footer>
  );
}

export default Footer;
