import React, { useState, useRef } from "react";

// PUBLIC_INTERFACE
export default function ChatSupport() {
  /**
   * ChatSupport: Interactive panel with open/close state.
   * - Accessible toggle button.
   * - Visual feedback for open/close; mock chat messages on open.
   */
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  function handlePanelKeyDown(e) {
    if (e.key === "Escape") {
      setOpen(false);
      if (buttonRef.current) buttonRef.current.focus();
    }
  }

  return (
    <div>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="chatsupport-panel"
        className="btn"
        tabIndex={0}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          marginBottom: 0,
          background: open ? "var(--kavia-orange)" : "var(--secondary)",
          color: "#fff",
          fontWeight: 600,
          transition: "background 0.18s",
          border: open ? "2px solid var(--accent)" : "1px solid var(--border-color)",
          outline: open ? "2px solid var(--accent)" : undefined,
        }}
        aria-label={open ? "Close chat support panel" : "Open chat support panel"}
      >
        <span aria-hidden="true" style={{ marginRight: 7 }}>💬</span>
        {open ? "AI Chat (Open)" : "AI Chat"}
      </button>
      {open && (
        <div
          id="chatsupport-panel"
          role="dialog"
          aria-modal="false"
          aria-label="AI Chat Support"
          tabIndex={-1}
          onKeyDown={handlePanelKeyDown}
          style={{
            marginTop: 9,
            background: "rgba(255,255,255,0.13)",
            border: "2px solid var(--border-color)",
            borderRadius: 8,
            color: "var(--secondary)",
            textAlign: "left",
            boxShadow: "0 2px 13px 0 rgba(130, 30, 4, 0.11)",
            padding: "14px 10px 10px 13px",
            fontSize: "0.995rem",
            minWidth: 210
          }}
        >
          <strong>AI Chat Support</strong>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: 7,
              padding: "8px 8px 6px 13px",
              marginTop: 10,
              color: "var(--text-color)",
              minHeight: 28,
            }}
          >
            <div>
              <span style={{ color: "var(--kavia-orange)", fontWeight: 700 }}>AI:</span> Hello! 👋 How can I help you today?
            </div>
            <div style={{ fontSize: ".98em", color: "#fff", margin: "6px 0 0 0" }}><em>[This is a demo chat preview]</em></div>
          </div>
          <button
            type="button"
            className="btn"
            tabIndex={0}
            aria-label="Close chat support"
            style={{
              marginTop: 13,
              background: "var(--kavia-orange)",
              color: "#fff",
              border: "1px solid var(--accent)",
              padding: "6px 15px",
              borderRadius: "5px",
              fontWeight: 500,
            }}
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
