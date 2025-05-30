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
 * Home page: Simple welcome message and navigation button to the Booking page.
 */
import { useNavigate } from 'react-router-dom'; // Import navigation hook

function Home() {
  const navigate = useNavigate();
  return (
    <div className="main-content-inner single-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="card-section" style={{ textAlign: 'center', maxWidth: 470, margin: '0 auto', padding: '40px 24px' }}>
        <div className="subtitle" style={{ color: 'var(--kavia-orange)', fontWeight: 600, marginBottom: 8, fontSize: '1.14em' }}>
          Welcome to OmniBook AI
        </div>
        <div className="title" style={{ marginBottom: 12 }}>Your Smart Booking Platform</div>
        <div className="description" style={{ marginBottom: 32 }}>
          Start your seamless booking journey across sports, movies, travel, and more. Click below to explore!
        </div>
        <button className="btn btn-large"
          style={{
            background: 'var(--kavia-orange)',
            color: 'var(--button-text-contrast)',
            fontWeight: 600,
            fontSize: '1.1rem',
            minWidth: 140,
            padding: '13px 32px'
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