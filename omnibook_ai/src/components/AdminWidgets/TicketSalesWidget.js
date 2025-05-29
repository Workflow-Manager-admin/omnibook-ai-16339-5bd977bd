import React from "react";

// PUBLIC_INTERFACE
/**
 * TicketSalesWidget – Placeholder analytics card for ticket sales.
 */
function TicketSalesWidget() {
  return (
    <div
      style={{
        background: "var(--surface)",
        borderRadius: 12,
        boxShadow: "0 1px 6px rgba(0,0,0,0.09)",
        padding: "1.4rem 1.1rem 1.1rem 1.35rem",
        minWidth: 180,
        flex: 1,
        border: "1px solid var(--border-color)",
        margin: 8
      }}
    >
      <div style={{ color: "var(--accent)", fontWeight: 700, fontSize: "1.07rem", marginBottom: 9 }}>
        Tickets Sold
      </div>
      <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--primary-text)" }}>
        3,548
      </div>
      <div style={{ color: "var(--text-secondary)", fontSize: ".97rem", marginTop: 8 }}>
        +6% this month <span role="img" aria-label="ticket">🎫</span>
      </div>
    </div>
  );
}

export default TicketSalesWidget;
