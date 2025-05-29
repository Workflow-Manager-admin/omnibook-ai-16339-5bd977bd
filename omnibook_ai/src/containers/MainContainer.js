import React from "react";

// PUBLIC_INTERFACE
/**
 * MainContainer (App Shell) for OmniBook AI.
 * Applies theming background and text color for seamless support of auto/dark and black-orange palette.
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
    >
      {children}
    </main>
  );
}

export default MainContainer;
