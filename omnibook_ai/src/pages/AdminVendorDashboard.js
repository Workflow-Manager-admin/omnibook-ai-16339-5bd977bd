import React from "react";
import RevenueWidget from "../components/AdminWidgets/RevenueWidget";
import TicketSalesWidget from "../components/AdminWidgets/TicketSalesWidget";
import VisitorsWidget from "../components/AdminWidgets/VisitorsWidget";
import { useBookings } from "../contexts/BookingsContext";

// PUBLIC_INTERFACE
/**
 * AdminVendorDashboard – displays admin/vendor analytics, management widgets and booking history.
 */
function AdminVendorDashboard() {
  // Consume global bookings context for all booking entries
  const { bookings } = useBookings();

  /**
   * (UI Helper) Format booking details as a summary line.
   * @param {object} data - Booking form data (fields/values)
   * @return {string} - Summary string
   */
  function bookingDetailsSummary(data) {
    return Object.entries(data)
      .map(([field, val]) =>
        `${field.replace(/([A-Z])/g, " $1").replace(/^./, x => x.toUpperCase())}: ${val}`
      ).join(" | ");
  }

  // Optional: allow future filters/search state (stub for filterable table)
  // Example: const [filter, setFilter] = React.useState("");

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

      {/* Booking History Display */}
      <div style={{
        marginTop: 34,
        marginBottom: 16,
        fontWeight: 600,
        fontSize: "1.2rem",
        color: "var(--primary-text)"
      }}>
        Booking History
      </div>

      {/* Render booking table or no-bookings message */}
      {
        !bookings.length ? (
          <div style={{ color: "var(--text-secondary)", marginBottom: 22 }}>No bookings made yet.</div>
        ) : (
          <div style={{
            overflowX: "auto",
            marginBottom: 24,
            background: "var(--surface)",
            borderRadius: 10,
            boxShadow: "0 1px 7px rgba(0,0,0,0.05)",
            border: "1.3px solid var(--border-color)",
            maxWidth: "100%"
          }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: 500,
              fontSize: "1.03rem"
            }}>
              <thead>
                <tr style={{ background: "var(--sidebar-bg)" }}>
                  <th style={{ textAlign: "left", padding: "10px 16px", color: "var(--kavia-orange)", fontWeight: 700 }}>#</th>
                  <th style={{ textAlign: "left", padding: "10px 16px", color: "var(--kavia-orange)", fontWeight: 700 }}>Purpose</th>
                  <th style={{ textAlign: "left", padding: "10px 16px", color: "var(--kavia-orange)", fontWeight: 700 }}>Details</th>
                  <th style={{ textAlign: "left", padding: "10px 16px", color: "var(--kavia-orange)", fontWeight: 700 }}>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, idx) => (
                  <tr
                    key={booking.id}
                    style={{
                      borderBottom: "1px solid var(--border-color)",
                      background:
                        idx % 2 === 0 ? "var(--primary-bg)" : "var(--secondary-bg)"
                    }}
                  >
                    <td style={{ padding: "8px 14px", color: "var(--accent)", fontWeight: 600 }}>
                      {idx + 1}
                    </td>
                    <td style={{ padding: "8px 14px", fontWeight: 600 }}>
                      {booking.typeLabel || booking.purpose}
                    </td>
                    <td style={{ padding: "8px 14px", color: "var(--primary-text)" }}>
                      {bookingDetailsSummary(booking.data)}
                    </td>
                    <td style={{ padding: "8px 14px", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
                      {booking.timestamp ? (new Date(booking.timestamp).toLocaleString()) : "--"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }

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
