import React, { useState } from "react";
import "./AdminPortal.css";
import { useNavigate } from "react-router-dom";

// Vendor domains for switching context
const VENDORS = [
  { key: "cinema", label: "Cinemas", icon: "🎬" },
  { key: "resort", label: "Resorts", icon: "🌴" },
  { key: "event", label: "Event Organizers", icon: "📆" },
];

// Mock analytics for each vendor type (for demo display)
const MOCK_ANALYTICS = {
  cinema: {
    revenue: "₹8,30,200",
    traffic: "47,100",
    ticketSales: "24,500",
    events: "32",
    heat: [50, 64, 98, 75, 35, 120, 87],
    chartLabel: "Last 7 Days - Ticket Sales"
  },
  resort: {
    revenue: "₹2,54,900",
    traffic: "7,200",
    ticketSales: "1,930",
    events: "11",
    heat: [40, 51, 78, 65, 32, 60, 93],
    chartLabel: "Last 7 Days - Room Nights Sold"
  },
  event: {
    revenue: "₹5,71,600",
    traffic: "29,540",
    ticketSales: "13,100",
    events: "19",
    heat: [33, 42, 70, 56, 60, 88, 104],
    chartLabel: "Last 7 Days - Tickets Sold"
  },
};

function formatTraffic(num) {
  return num.toLocaleString();
}

// Simple SVG bar chart as visualization placeholder
function SimpleMiniBar({ values = [], color = "#FF6600" }) {
  const max = Math.max(...values, 1);
  return (
    <svg viewBox="0 0 72 22" width={72} height={22} aria-hidden="true">
      {values.map((val, i) => (
        <rect
          key={i}
          x={i * 10 + 3}
          y={22 - (val / max) * 18}
          width={7}
          height={(val / max) * 18}
          rx={2}
          fill={color}
          opacity={0.87 - i * 0.09}
        />
      ))}
    </svg>
  );
}

/** 
 * PUBLIC_INTERFACE
 * AdminPortal is always accessible: route: "/admin". 
 * Includes clear navigation to return to Home and Booking.
 */
export default function AdminPortal() {
  /**
   * AdminPortal: Multi-domain vendor dashboard for analytics/management.
   * - Vendor switcher (cinemas, resorts, event orgs)
   * - Mock statistics cards (revenue, traffic, sales, events)
   * - Mini bar chart as traffic/heat map placeholder
   * - Responsive layout, black-orange theme
   * - Entry/exit navigation to main experience
   */
  const [activeVendor, setActiveVendor] = useState("cinema");
  const activeAnalytics = MOCK_ANALYTICS[activeVendor];
  const navigate = useNavigate();

  // Card config
  const STAT_CARDS = [
    {
      label: "Total Revenue",
      icon: "💰",
      field: "revenue",
      color: "#FFA500",
      description: "Gross earnings across bookings",
    },
    {
      label: "Platform Traffic",
      icon: "👥",
      field: "traffic",
      color: "#f98d32",
      description: "Visitors this month",
    },
    {
      label: "Tickets Sold",
      icon: "🎫",
      field: "ticketSales",
      color: "#FF6600",
      description: "Bookings completed",
    },
    {
      label: "Active Events",
      icon: "📆",
      field: "events",
      color: "#7ABF6F",
      description: "Live or upcoming events",
    },
  ];

  // Main dashboard UI
  return (
    <div className="adminportal-root">
      <header className="adminportal-header" style={{ position: "relative" }}>
        <h2 style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span>
            <span className="adminportal-icon">🛠️</span>
            <span style={{ marginRight: 13 }}>Admin Portal Dashboard</span>
          </span>
          {/* Navigation drop-down for Home or Booking */}
          <nav style={{ display: "flex", gap: 7 }} aria-label="Back navigation from Admin Portal">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn"
              style={{
                fontSize: "1em",
                fontWeight: 700,
                background: "var(--sidebar-bg)",
                color: "var(--kavia-orange)",
                border: "2px solid var(--accent)",
                borderRadius: 8,
                marginLeft: 0,
                marginRight: 4,
                padding: "8px 1.5em 8px 1em",
                outline: "none",
                boxShadow: "0 1px 5px 0 rgba(120,60,0,0.07)",
                top: 0, right: 0,
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "background 0.17s, color 0.15s"
              }}
              aria-label="Return to Home"
              tabIndex={0}
              onKeyUp={e => { if (e.key === "Enter" || e.key === " ") navigate("/"); }}
              autoFocus
            >
              <span aria-hidden="true" style={{ marginRight: 7, fontSize: "1.25em" }}>🏠</span>
              <span>Home</span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/booking")}
              className="btn"
              style={{
                fontSize: "1em",
                fontWeight: 700,
                background: "var(--sidebar-bg)",
                color: "var(--accent)",
                border: "2px solid var(--accent)",
                borderRadius: 8,
                marginRight: 0,
                padding: "8px 1.5em 8px 1em",
                outline: "none",
                boxShadow: "0 1px 5px 0 rgba(120,60,0,0.07)",
                top: 0, right: 0,
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "background 0.17s, color 0.15s"
              }}
              aria-label="Return to Booking"
              tabIndex={0}
              onKeyUp={e => { if (e.key === "Enter" || e.key === " ") navigate("/booking"); }}
            >
              <span aria-hidden="true" style={{ marginRight: 7, fontSize: "1.25em" }}>🎟️</span>
              <span>Booking</span>
            </button>
          </nav>
        </h2>
        <div className="adminportal-vendor-switcher" role="tablist" aria-label="Switch Dashboard Vendor Type">
          {VENDORS.map((v) => (
            <button
              key={v.key}
              type="button"
              className={
                "adminportal-vendor-btn" +
                (activeVendor === v.key ? " vendor-active" : "")
              }
              aria-selected={activeVendor === v.key}
              tabIndex={0}
              aria-pressed={activeVendor === v.key}
              onClick={() => setActiveVendor(v.key)}
              onKeyDown={e => {
                if ((e.key === "Enter" || e.key === " ") && activeVendor !== v.key) {
                  setActiveVendor(v.key);
                }
              }}
              style={{
                background: activeVendor === v.key
                  ? "var(--kavia-orange)"
                  : "rgba(255,255,255,0.04)",
                color: activeVendor === v.key ? "#fff" : "var(--text-secondary)",
                border: activeVendor === v.key
                  ? "2px solid var(--accent)"
                  : "1.5px solid var(--border-color)",
                outline: activeVendor === v.key ? "2px solid var(--accent)" : undefined,
                fontWeight: activeVendor === v.key ? 700 : 500,
                boxShadow: activeVendor === v.key ? "0 0 0 2px var(--accent)" : undefined,
                cursor: activeVendor === v.key ? "default" : "pointer",
                position: "relative"
              }}
              aria-label={
                activeVendor === v.key
                  ? `${v.label} (selected)`
                  : `Switch to ${v.label} analytics`
              }
            >
              <span aria-hidden="true" style={{ fontSize: "1.28em", marginRight: 7 }}>{v.icon}</span>
              {v.label}
              {activeVendor === v.key && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 8,
                    fontWeight: 700,
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: "3px",
                    padding: "1px 7px",
                    fontSize: "0.95em",
                    marginLeft: 6,
                  }}
                >✓</span>
              )}
            </button>
          ))}
          <div style={{
            width: "100%",
            marginTop: 6,
            marginBottom: 2,
            color: "var(--kavia-orange)",
            minHeight: 23,
            fontWeight: 500,
            fontSize: "1.04em",
            letterSpacing: "0.01em"
          }} aria-live="polite">
            Currently viewing dashboard for: <span style={{
              color: "var(--accent)",
              fontWeight: 700,
              marginLeft: 2
            }}>{VENDORS.find(v => v.key === activeVendor)?.label}</span>
          </div>
        </div>
      </header>
      <section className="adminportal-analytics-cards">
        {STAT_CARDS.map((card) => (
          <div
            key={card.field}
            className="adminportal-stat-card"
            style={{
              borderColor: card.color,
              boxShadow: `0 2px 8px 0 rgba(255, 102, 0, 0.06)`,
            }}
            aria-label={card.label}
            tabIndex={0}
          >
            <div className="stat-card-label">
              <span aria-hidden="true" className="stat-card-icon" style={{ color: card.color, marginRight: 7 }}>
                {card.icon}
              </span>
              {card.label}
            </div>
            <div className="stat-card-value">{activeAnalytics[card.field]}</div>
            <div className="stat-card-desc">{card.description}</div>
          </div>
        ))}
      </section>
      <section className="adminportal-charts-section">
        <div className="dash-chart">
          <div className="dash-chart-title">
            <span role="img" aria-label="Heat chart" style={{ marginRight: 6 }}>📊</span>
            {activeAnalytics.chartLabel}
          </div>
          <SimpleMiniBar values={activeAnalytics.heat} color="var(--accent)" />
          <div className="dash-chart-legend">
            <span className="legend-dot" style={{ background: "var(--accent)" }}></span>
            Ticket/Room/Event activity (demo)
          </div>
        </div>
        <div className="dash-heatmap-placeholder" aria-label="Heat map chart placeholder">
          <span role="img" aria-label="Heat map" style={{ fontSize: "2rem" }}>🔥</span>
          <div style={{
            marginTop: 7,
            color: "var(--accent)",
            fontWeight: 500,
            fontSize: "1.07em"
          }}>
            Heat Map (area/zone demo)
          </div>
          <div style={{
            marginTop: 4,
            fontSize: "0.96em",
            color: "var(--text-secondary)"
          }}>
            [Interactive map visualization placeholder]
          </div>
        </div>
      </section>
      <div className="adminportal-footer">
        <span>Demo Mode • OmniBook Admin Tools</span>
      </div>
    </div>
  );
}
