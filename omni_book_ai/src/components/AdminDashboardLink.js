import React from "react";

// PUBLIC_INTERFACE
export default function AdminDashboardLink() {
  /** Placeholder for admin/dashboard navigation. */
  return (
    <a href="/admin" className="btn" style={{
      background: "var(--kavia-orange)",
      color: "#fff",
      borderRadius: 5,
      fontWeight: 500,
      fontSize: "1rem",
      textDecoration: "none",
      padding: "6px 18px",
      margin: "0 6px"
    }}>
      <span style={{ marginRight: 6, fontWeight: 700, fontSize: "1.1rem" }}>🛠️</span>
      Admin Dashboard
    </a>
  );
}
