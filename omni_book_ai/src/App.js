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

// PUBLIC_INTERFACE
function Home() {
  return (
    <>
      {/* Filter & Quick-access Buttons */}
      <section>
        <FilterButtons />
      </section>
      {/* Trending Events Carousel */}
      <section style={{ margin: '32px 0' }}>
        <div style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--kavia-orange)', marginBottom: 12 }}>🔥 Trending Now</div>
        <TrendingCarousel />
      </section>
      {/* Recommendations Carousel */}
      <section style={{ margin: '32px 0' }}>
        <div style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--accent)', marginBottom: 12 }}>✨ Recommended For You</div>
        <RecommendationsCarousel />
      </section>
      {/* Example Booking and AR zones for integration UI scaffolding */}
      <section style={{ margin: '32px 0' }}>
        <div style={{ fontWeight: 600, fontSize: '1.16rem', color: 'var(--accent)', marginBottom: 7 }}>🎫 Book Your Seat</div>
        <BookingFlow />
      </section>
      <section style={{ margin: '32px 0' }}>
        <div style={{ fontWeight: 600, fontSize: '1.16rem', color: 'var(--secondary)', marginBottom: 7 }}>🪑 AR Seat Map Preview</div>
        <SeatMapAR />
      </section>
    </>
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
  // Layout including navbar, search and persistent widgets
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NavLink to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: "none", color: "inherit" }}>
            <span className="logo-symbol" style={{ fontSize: '1.5rem' }}>◎</span> OmniBook <span style={{ fontWeight: '300', color: 'var(--kavia-orange)', marginLeft: 2 }}>AI</span>
          </NavLink>
          {/* Universal Search Bar */}
          <div style={{ flex: 1, marginLeft: 32, marginRight: 32, maxWidth: 400 }}>
            <UniversalSearch />
          </div>
          {/* Quick Actions: dashboard, notification, chat */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Use NavLink for routing */}
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
      <main>
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