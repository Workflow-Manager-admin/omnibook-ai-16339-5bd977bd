import React from "react";

// PUBLIC_INTERFACE
/**
 * MainContainer (App Shell) for OmniBook AI.
 * Applies theming background and text color for seamless support of auto/dark and black-orange palette.
 * Enhanced with landmark/ARIA roles for accessibility.
 */
function MainContainer({ children }) {
  return (
    <main
      className="main-container"
      style={{
        background: "var(--primary-bg)",
        color: "var(--primary-text)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
      role="main"
      aria-label="Main content"
      tabIndex={-1}
    >
      {children}
    </main>
  );
}

export default MainContainer;
