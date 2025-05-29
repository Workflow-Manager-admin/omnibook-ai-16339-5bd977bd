import React from "react";
import RevenueWidget from "../components/AdminWidgets/RevenueWidget";
import TicketSalesWidget from "../components/AdminWidgets/TicketSalesWidget";
import VisitorsWidget from "../components/AdminWidgets/VisitorsWidget";

// PUBLIC_INTERFACE
/**
 * AdminVendorDashboard – displays admin/vendor analytics and management widgets.
 */
function AdminVendorDashboard() {
  return (
    <div className="container" style={{ marginTop: 40 }}>
      <div style={{
        fontWeight: 700,
        fontSize: "1.5rem",
        color: "var(--kavia-orange)",
        margin: "16px 0 12px 0"
      }}>
        Admin & Vendor Dashboard
      </div>
      <div style={{
        color: "var(--text-secondary)",
        fontSize: "1.07rem",
        marginBottom: 32
      }}>
        Analytics and management widgets for revenue, ticket sales, visitors, and more.
      </div>
      <div style={{
        display: "flex",
        gap: 22,
        flexWrap: "wrap",
        marginBottom: 36
      }}>
        <RevenueWidget />
        <TicketSalesWidget />
        <VisitorsWidget />
      </div>
      <div style={{
        marginTop: 30,
        color: "var(--text-secondary)",
        fontSize: "1rem"
      }}>
        {/* Placeholder for future management actions */}
        <div style={{
          background: "var(--sidebar-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: 10,
          padding: "18px 22px",
          maxWidth: 420
        }}>
          <span role="img" aria-label="tools" style={{ fontSize: "1.3em", marginRight: 7 }}>🛠️</span>
          <b>Management Tools:</b> Event creation, vendor management, and user controls coming soon!
        </div>
      </div>
    </div>
  );
}

export default AdminVendorDashboard;
