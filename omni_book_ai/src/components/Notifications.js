import React, { useState, useRef } from "react";

// PUBLIC_INTERFACE
export default function Notifications() {
  /**
   * Notifications: Interactive panel with open/close state.
   * - Accessible toggle button.
   * - Basic visual feedback for states.
   */
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  // Keyboard accessibility: ESC closes; focus returns to the button.
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
        aria-controls="notifications-panel"
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
        aria-label={open ? "Close notifications panel" : "Show notifications"}
      >
        <span aria-hidden="true" style={{ marginRight: 7 }}>🔔</span>
        {open ? "Notifications (Open)" : "Notifications"}
      </button>
      {open && (
        <div
          id="notifications-panel"
          role="dialog"
          aria-modal="false"
          aria-label="Notifications"
          tabIndex={-1}
          onKeyDown={handlePanelKeyDown}
          style={{
            marginTop: 9,
            background: "rgba(255,255,255,0.13)",
            border: "2px solid var(--border-color)",
            borderRadius: 8,
            color: "var(--kavia-orange)",
            textAlign: "left",
            boxShadow: "0 2px 13px 0 rgba(130, 30, 4, 0.11)",
            padding: "16px 13px",
            fontSize: "0.99rem"
          }}
        >
          <strong>Recent Notifications</strong>
          <ul style={{marginTop:10, marginLeft: 0, paddingLeft: 15, color: "var(--text-secondary)", fontWeight: 400}}>
            <li key="ntfy1">[Demo] 🎉 New event: Concert in your city next week</li>
            <li key="ntfy2">[Demo] 🕒 Your movie ticket is confirmed for today 6:00pm</li>
            <li key="ntfy3">[Demo] ✈️ Flight deal: NY → Tokyo – 10% discount for OmniBook users</li>
          </ul>
          <button
            type="button"
            className="btn"
            tabIndex={0}
            aria-label="Close notifications"
            style={{
              marginTop: 14,
              background: "var(--kavia-orange)",
              color: "#fff",
              border: "1px solid var(--accent)",
              padding: "6px 16px",
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
