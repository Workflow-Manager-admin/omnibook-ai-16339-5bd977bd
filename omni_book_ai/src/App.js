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
  // Visually group navigation, aid ARIA, and ensure easy expansion for future sections
  return (
    <div className="app sidebar-app">
      {/* Skip to main for keyboard users */}
      <a href="#main-content" className="skip-link" tabIndex="0">
        Skip to main content
      </a>
      {/* Sidebar Navigation */}
      <aside className="sidebar" role="navigation" aria-label="Main application sidebar">
        <div className="sidebar-header">
          <NavLink
            to="/"
            className="logo"
            aria-label="OmniBook AI homepage"
            style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: "none", color: "inherit" }}
          >
            <span className="logo-symbol" style={{ fontSize: '1.5rem' }}>◎</span>
            <span>OmniBook</span>
            <span style={{ fontWeight: '300', color: 'var(--kavia-orange)', marginLeft: 2 }}>AI</span>
          </NavLink>
          {/* Universal Search Bar */}
          <div className="sidebar-search">
            <UniversalSearch />
          </div>
        </div>
        {/* Multi-section navigation with ARIA headings for clarity */}
        <nav className="sidebar-nav" aria-label="Sidebar routes to user and admin areas">
          {/* User-facing pages group */}
          <section aria-labelledby="sidebar-user-section" style={{ marginBottom: 10 }}>
            <h2 id="sidebar-user-section" className="visually-hidden" style={{position: "absolute", left:"-9999px", top:"auto", width:1, height:1, overflow:"hidden"}}>User Pages</h2>
            <div
              role="group"
              aria-label="User Pages"
              style={{ marginBottom: 7, borderBottom: '1px solid var(--border-color)', paddingBottom: 4 }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "sidebar-nav-link" + (isActive ? " active" : "")
                }
                aria-label="Home (User Experience)"
                tabIndex={0}
                end
              >
                <span role="img" aria-label="Home" style={{ marginRight: 8 }}>🏠</span>
                Home
              </NavLink>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  "sidebar-nav-link" + (isActive ? " active" : "")
                }
                aria-label="Booking Flow"
                tabIndex={0}
              >
                <span role="img" aria-label="Booking" style={{ marginRight: 8 }}>🎟️</span>
                Booking
              </NavLink>
            </div>
          </section>
          {/* Admin group */}
          <section aria-labelledby="sidebar-admin-section">
            <h2 id="sidebar-admin-section" className="visually-hidden" style={{position: "absolute", left:"-9999px", top:"auto", width:1, height:1, overflow:"hidden"}}>Admin/Portal</h2>
            <div
              role="group"
              aria-label="Admin navigation"
              style={{ marginTop: 8 }}
            >
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  "sidebar-nav-link" + (isActive ? " active" : "")
                }
                aria-label="Admin Portal Dashboard"
                tabIndex={0}
              >
                <span role="img" aria-label="Admin Portal" style={{ marginRight: 8 }}>🛠️</span>
                <span>Admin Portal</span>
              </NavLink>
            </div>
          </section>
        </nav>
        <div className="sidebar-actions" aria-label="Sidebar actions: notifications and chat support">
          <Notifications />
          <ChatSupport />
        </div>
      </aside>
      <main id="main-content" className="main-content" tabIndex={-1} role="main" aria-label="Main content area">
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
