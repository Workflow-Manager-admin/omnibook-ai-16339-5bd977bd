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
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Home page: now arranges filters vertically at left, with main content in card grid to the right.
 */
function Home() {
  return (
    <div className="main-content-inner">
      <aside className="home-left-rail" aria-label="Main filters and shortcuts">
        <FilterButtons />
      </aside>
      <div className="cardstack">
        <div className="card-section card-wide">
          <div className="homepage-section-title homepage-recommended-title">
            <span role="img" aria-label="recommended">✨</span> Recommended For You
          </div>
          <RecommendationsCarousel />
        </div>
        <div className="card-section">
          <div className="homepage-section-title homepage-trending-title">
            <span role="img" aria-label="trending">🔥</span> Trending Now
          </div>
          <TrendingCarousel />
        </div>
        <div className="card-section card-flex">
          <section className="booking-card-stack">
            <div className="homepage-section-title"><span role="img" aria-label="booking">🎫</span> Book Your Seat</div>
            <BookingFlow />
          </section>
          <section className="ar-card-stack">
            <div className="homepage-section-title"><span role="img" aria-label="ar-seat">🪑</span> AR Seat Map Preview</div>
            <SeatMapAR />
          </section>
        </div>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function Booking() {
  return (
    <div className="main-content-inner single-page">
      <div className="card-section">
        <h2>Booking Flow</h2>
        <BookingFlow />
      </div>
      <div className="card-section">
        <div style={{ fontWeight: 600, fontSize: '1.16rem', color: 'var(--secondary)', marginBottom: 7 }}>🪑 AR Seat Map Preview</div>
        <SeatMapAR />
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function AdminPortal() {
  return (
    <div className="main-content-inner single-page">
      <div className="card-section">
        <h2 style={{ marginBottom: 16 }}><span style={{ marginRight: 8 }}>🛠️</span>Admin Portal</h2>
        <div style={{
          margin: "16px 0",
          background: "rgba(255,255,255,0.05)",
          border: "1px dashed var(--kavia-orange)",
          borderRadius: 10,
          color: "var(--kavia-orange)",
          padding: 30,
        }}>
          [Admin Portal Placeholder: Analytics / Ticket Management / Vendor Access]
        </div>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="app sidebar-app">
      {/* Skip to main for keyboard users */}
      <a href="#main-content" className="skip-link" tabIndex="0">
        Skip to main content
      </a>
      {/* Sidebar Navigation */}
      <aside className="sidebar" role="navigation" aria-label="Main sidebar navigation">
        <div className="sidebar-header">
          <NavLink
            to="/"
            className="logo"
            aria-label="OmniBook homepage"
            style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: "none", color: "inherit" }}
          >
            <span className="logo-symbol" style={{ fontSize: '1.5rem' }}>◎</span> <span>OmniBook</span><span style={{ fontWeight: '300', color: 'var(--kavia-orange)', marginLeft: 2 }}>AI</span>
          </NavLink>
          {/* Universal Search Bar */}
          <div className="sidebar-search">
            <UniversalSearch />
          </div>
        </div>
        <nav className="sidebar-nav" aria-label="Main sections">
          <NavLink
            to="/"
            className="sidebar-nav-link"
            aria-label="Home"
            tabIndex={0}
            end
          >
            <span role="img" aria-label="Home" style={{ marginRight: 8 }}>🏠</span>
            Home
          </NavLink>
          <NavLink
            to="/booking"
            className="sidebar-nav-link"
            aria-label="Booking"
            tabIndex={0}
          >
            <span role="img" aria-label="Booking" style={{ marginRight: 8 }}>🎟️</span>
            Booking
          </NavLink>
          <NavLink
            to="/admin"
            className="sidebar-nav-link"
            aria-label="Admin Portal"
            tabIndex={0}
          >
            <span role="img" aria-label="Admin" style={{ marginRight: 8 }}>🛠️</span>
            Admin
          </NavLink>
        </nav>
        <div className="sidebar-actions">
          <Notifications />
          <ChatSupport />
        </div>
      </aside>
      <main id="main-content" className="main-content" tabIndex={-1} role="main" aria-label="Content Main Area">
        <Outlet />
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
        <Route path="*" element={<div style={{ padding: 60, color: "red" }}>[404: Page Not Found]</div>} />
      </Route>
    </Routes>
  );
}

export default App;