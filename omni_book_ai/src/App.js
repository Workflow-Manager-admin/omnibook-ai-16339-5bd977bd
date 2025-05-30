import React from 'react';
import './App.css';
import UniversalSearch from './components/UniversalSearch';
import TrendingCarousel from './components/TrendingCarousel';
import RecommendationsCarousel from './components/RecommendationsCarousel';
import FilterButtons from './components/FilterButtons';
import BookingFlow from './components/BookingFlow';
import SeatMapAR from './components/SeatMapAR';
import Notifications from './components/Notifications';
import ChatSupport from './components/ChatSupport';
// import AdminDashboardLink from './components/AdminDashboardLink'; // Direct link replaced with router link
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';

// Stub route page components

/**
 * PUBLIC_INTERFACE
 * Home page with grid for all principal sections, ensuring non-overlapping and clear hierarchy.
 */
function Home() {
  return (
    <div className="homepage-grid">
      {/* Filter & Quick-access Buttons */}
      <div className="grid-filters">
        <FilterButtons />
      </div>
      {/* Trending Events & Recommendations in a two-row grid */}
      <div className="grid-main-carousels">
        <div className="carousel-box">
          <div className="homepage-section-title homepage-trending-title">
            <span role="img" aria-label="trending">🔥</span> Trending Now
          </div>
          <TrendingCarousel />
        </div>
        <div className="carousel-box">
          <div className="homepage-section-title homepage-recommended-title">
            <span role="img" aria-label="recommended">✨</span> Recommended For You
          </div>
          <RecommendationsCarousel />
        </div>
      </div>
      {/* Booking & AR seat in responsive row/column */}
      <div className="grid-booking-ar">
        <div className="booking-ar-box">
          <div className="homepage-section-title"><span role="img" aria-label="booking">🎫</span> Book Your Seat</div>
          <BookingFlow />
        </div>
        <div className="booking-ar-box">
          <div className="homepage-section-title"><span role="img" aria-label="ar-seat">🪑</span> AR Seat Map Preview</div>
          <SeatMapAR />
        </div>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function Booking() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Booking Flow</h2>
      <BookingFlow />
      <section style={{ margin: '32px 0' }}>
        <div style={{ fontWeight: 600, fontSize: '1.16rem', color: 'var(--secondary)', marginBottom: 7 }}>🪑 AR Seat Map Preview</div>
        <SeatMapAR />
      </section>
    </div>
  );
}

// PUBLIC_INTERFACE
function AdminPortal() {
  return (
    <div style={{ padding: 50 }}>
      <h2>
        <span style={{ marginRight: 8 }}>🛠️</span>Admin Portal
      </h2>
      <div style={{
        margin: "32px 0",
        background: "rgba(255,255,255,0.05)",
        border: "1px dashed var(--kavia-orange)",
        borderRadius: 10,
        color: "var(--kavia-orange)",
        padding: 30,
      }}>
        [Admin Portal Placeholder: Analytics / Ticket Management / Vendor Access]
      </div>
    </div>
  );
}

function Layout() {
  // Layout including navbar, search and persistent widgets, with accessibility roles and skip links
  return (
    <div className="app">
      {/* Skip to main for keyboard users */}
      <a href="#main-content" className="skip-link" tabIndex="0">
        Skip to main content
      </a>
      {/* Navbar with role="navigation" */}
      <nav className="navbar" role="navigation" aria-label="Primary">
        <div className="container" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NavLink
            to="/"
            className="logo"
            aria-label="OmniBook homepage"
            style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: "none", color: "inherit" }}
          >
            <span className="logo-symbol" style={{ fontSize: '1.5rem' }}>◎</span> OmniBook <span style={{ fontWeight: '300', color: 'var(--kavia-orange)', marginLeft: 2 }}>AI</span>
          </NavLink>
          {/* Universal Search Bar */}
          <div style={{ flex: 1, marginLeft: 32, marginRight: 32, maxWidth: 400 }}>
            <UniversalSearch />
          </div>
          {/* Quick Actions: dashboard, notification, chat */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <NavLink
              to="/admin"
              className="btn"
              style={{
                background: "var(--kavia-orange)",
                color: "#fff",
                borderRadius: 5,
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
                padding: "6px 18px",
                margin: "0 6px"
              }}
              role="button"
              aria-label="Admin Dashboard"
              tabIndex={0}
            >
              <span style={{ marginRight: 6, fontWeight: 700, fontSize: "1.1rem" }}>🛠️</span>
              Admin Dashboard
            </NavLink>
            <Notifications />
            <ChatSupport />
          </div>
        </div>
      </nav>
      {/* Main Content Area with space for nav + padding */}
      <main id="main-content" tabIndex={-1} role="main" aria-label="Content Main Area">
        <div className="container" style={{ paddingTop: 96, paddingBottom: 36 }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="admin" element={<AdminPortal />} />
        {/* Add more routes for other domains here as stubs */}
        <Route path="*" element={<div style={{ padding: 60, color: "red" }}>[404: Page Not Found]</div>} />
      </Route>
    </Routes>
  );
}

export default App;