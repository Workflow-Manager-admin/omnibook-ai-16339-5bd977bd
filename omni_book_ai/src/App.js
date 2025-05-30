import React from 'react';
import './App.css';
import { useNavigate, NavLink, Routes, Route, Outlet } from 'react-router-dom';
import BookingFlow from './components/BookingFlow';
import SeatMapAR from './components/SeatMapAR';
import Notifications from './components/Notifications';
import ChatSupport from './components/ChatSupport';
import UniversalSearch from './components/UniversalSearch';
import AdminPortal from './components/AdminPortal';

// PUBLIC_INTERFACE
// Home page: Displays only a welcome message and a button that navigates to Booking
function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="main-content-inner single-page"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <div
        className="card-section"
        style={{
          textAlign: 'center',
          maxWidth: 420,
          margin: '0 auto',
          padding: '46px 27px',
        }}
      >
        <div
          className="subtitle"
          style={{
            color: 'var(--kavia-orange)',
            fontWeight: 600,
            marginBottom: 20,
            fontSize: '1.25em',
          }}
        >
          Welcome to OmniBook AI
        </div>
        <button
          className="btn btn-large"
          style={{
            background: 'var(--kavia-orange)',
            color: 'var(--button-text-contrast)',
            fontWeight: 700,
            fontSize: '1.11rem',
            minWidth: 165,
            padding: '15px 38px',
            marginTop: 28,
            border: 'none',
          }}
          onClick={() => navigate('/booking')}
          aria-label="Go to booking page"
        >
          Go to Booking &rarr;
        </button>
      </div>
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * Booking: Only show the booking flow form (no AR seat map, no steps)
 */
function Booking() {
  return (
    <div className="main-content-inner single-page">
      <div className="card-section">
        <h2>Booking</h2>
        <BookingFlow />
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
            aria-label="Admin Portal Dashboard"
            tabIndex={0}
          >
            <span role="img" aria-label="Admin Portal" style={{ marginRight: 8 }}>🛠️</span>
            Admin Portal
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
