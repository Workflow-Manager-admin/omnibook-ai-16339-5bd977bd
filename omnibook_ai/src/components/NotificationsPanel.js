import React from "react";

/**
 * PUBLIC_INTERFACE
 * NotificationsPanel – displays real-time alerts, in-app notifications (event reminders, offers), and chat support entry.
 * Features: alert summary, offer badges, notifications list, and a chat support call-to-action.
 */
function NotificationsPanel() {
  return (
    <section
      className="notifications-panel"
      style={{
        background: "var(--surface)",
        borderRadius: 14,
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        padding: "2rem 1.7rem 1.3rem 1.7rem",
        margin: "32px auto",
        maxWidth: 440,
        color: "var(--primary-text)"
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "1.22rem", color: "var(--kavia-orange)", marginBottom: 5 }}>
        Notifications & Alerts
      </div>
      {/* Placeholder: Important Alerts */}
      <div
        style={{
          background: "var(--secondary-bg)",
          borderRadius: 10,
          color: "#e35050",
          fontWeight: 600,
          padding: "0.8rem 1rem",
          marginBottom: 13,
          border: "1.1px solid var(--border-color)"
        }}
      >
        <span role="img" aria-label="bell">🔔</span>
        &nbsp;Alert: "Your flight departs in 2 hours!" (mock)
      </div>
      {/* Placeholder: Promo/Offer Notification */}
      <div
        style={{
          background: "var(--kavia-orange)",
          color: "#fff",
          borderRadius: 8,
          fontWeight: 600,
          padding: "0.7rem 1rem",
          marginBottom: 13,
          display: "flex",
          alignItems: "center",
          border: "1px solid var(--border-color)"
        }}
      >
        <span role="img" aria-label="ticket" style={{ fontSize: "1.15em" }}>🎟️</span>
        <span style={{ marginLeft: 9 }}>Limited Offer: "50% off IPL Finals Tickets!"</span>
      </div>
      {/* Placeholder: In-App Notifications Feed */}
      <div
        style={{
          background: "var(--sidebar-bg)",
          borderRadius: 8,
          padding: "0.7rem 1rem",
          color: "var(--primary-text)",
          fontSize: ".98rem",
          border: "1px solid var(--border-color)",
          marginBottom: 12
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 5, color: "var(--accent)" }}>
          In-App Updates
        </div>
        <ul style={{ padding: 0, margin: 0, listStyle: "none", lineHeight: 1.52 }}>
          <li><b>Events moved:</b> Arijit Singh concert now at 7:30 PM (mock)</li>
          <li><b>Travel update:</b> Train tickets confirmed (mock)</li>
          <li><b>Chat:</b> New message from Support (mock)</li>
        </ul>
      </div>
      {/* Chat Support Button Placeholder */}
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <button
          className="btn"
          style={{
            background: "var(--kavia-orange)",
            color: "#fff",
            border: "none",
            borderRadius: 7,
            padding: "10px 24px",
            fontSize: "1.07rem",
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: 2
          }}
        >
          <span role="img" aria-label="chat" style={{ marginRight: 8 }}>💬</span>
          Chat Support
        </button>
        <div style={{ color: "var(--text-secondary)", fontSize: ".98rem", marginTop: 5 }}>
          AI assistant can help 24/7 (Demo)
        </div>
      </div>
    </section>
  );
}

export default NotificationsPanel;
