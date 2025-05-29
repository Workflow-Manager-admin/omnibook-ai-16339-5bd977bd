import React from 'react';
import './App.css';
import AdminVendorDashboard from './pages/AdminVendorDashboard';
import MainContainer from './containers/MainContainer';
import NavBar from './components/Layout/NavBar';
import SideBar from './components/Layout/SideBar';
import Footer from './components/Layout/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MultiLangProvider from './contexts/MultiLangProvider';
import DomainPageStub from './pages/DomainPageStub';
import ProfilePage from './pages/ProfilePage';

// Stubs for routed pages
import { useNavigate } from 'react-router-dom';
// PUBLIC_INTERFACE
function HomePage() {
  /** Home page stub */
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate("/bookings");
  }

  return (
    <div className="container">
      <div className="hero">
        <div className="subtitle">AI Workflow Manager Template</div>
        <h1 className="title">omnibook_ai</h1>
        <div className="description">
          Welcome to OmniBook AI. Start building your application.
        </div>
        <button
          className="btn btn-large"
          onClick={handleGetStarted}
          aria-label="Get Started, go to Bookings"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
// PUBLIC_INTERFACE
function BookingsPage() {
  /**
   * BookingsPage – main bookings UI: lets user select domain (purpose), shows a dynamic booking form, and tracks bookings for history.
   */
  const PURPOSE_OPTIONS = [
    { label: 'Sports Events', value: 'sports' },
    { label: 'Movies and Shows', value: 'movies' },
    { label: 'Travel (Bus, Train, Flights)', value: 'travel' },
    { label: 'Event Venues', value: 'venues' },
    { label: 'Resorts', value: 'resorts' },
    { label: 'Local Events', value: 'localEvents' },
    { label: 'Concerts', value: 'concerts' }
  ];

  // State: selected purpose, booking form fields, all bookings for history
  const [purpose, setPurpose] = useState('');
  const [formData, setFormData] = useState({});
  const [bookings, setBookings] = useState([]); // later can move to context/global

  // Reset relevant formData when type changes
  function handlePurposeChange(e) {
    setPurpose(e.target.value);
    setFormData({});
  }

  // Generic field handler (used by all forms)
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  // Domain-specific minimal dynamic forms (expand/replace as needed)
  function renderBookingForm() {
    switch (purpose) {
      case 'sports':
        return (
          <>
            <label>
              Event Name
              <input type="text" required name="event" value={formData.event || ''} onChange={handleChange} />
            </label>
            <label>
              Number of Tickets
              <input type="number" min="1" name="tickets" value={formData.tickets || ''} onChange={handleChange} />
            </label>
            <label>
              Preferred Date
              <input type="date" name="date" value={formData.date || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'movies':
        return (
          <>
            <label>
              Movie/Show
              <input type="text" required name="movie" value={formData.movie || ''} onChange={handleChange} />
            </label>
            <label>
              Location
              <input type="text" required name="location" value={formData.location || ''} onChange={handleChange} />
            </label>
            <label>
              Number of Seats
              <input type="number" min="1" name="seats" value={formData.seats || ''} onChange={handleChange} />
            </label>
            <label>
              Show Time
              <input type="datetime-local" name="showTime" value={formData.showTime || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'travel':
        return (
          <>
            <label>
              Travel Mode
              <select
                name="travelMode"
                value={formData.travelMode || ''}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="bus">Bus</option>
                <option value="train">Train</option>
                <option value="flight">Flight</option>
              </select>
            </label>
            <label>
              From
              <input type="text" required name="from" value={formData.from || ''} onChange={handleChange} />
            </label>
            <label>
              To
              <input type="text" required name="to" value={formData.to || ''} onChange={handleChange} />
            </label>
            <label>
              Departure Date
              <input type="date" name="date" value={formData.date || ''} onChange={handleChange} />
            </label>
            <label>
              Passengers
              <input type="number" min="1" name="passengers" value={formData.passengers || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'venues':
        return (
          <>
            <label>
              Venue Name
              <input type="text" required name="venue" value={formData.venue || ''} onChange={handleChange} />
            </label>
            <label>
              Event Type
              <input type="text" required name="eventType" value={formData.eventType || ''} onChange={handleChange} />
            </label>
            <label>
              Booking Date
              <input type="date" name="date" value={formData.date || ''} onChange={handleChange} />
            </label>
            <label>
              Expected Guests
              <input type="number" min="1" name="guests" value={formData.guests || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'resorts':
        return (
          <>
            <label>
              Resort Name
              <input type="text" required name="resort" value={formData.resort || ''} onChange={handleChange} />
            </label>
            <label>
              Check-in
              <input type="date" name="checkin" value={formData.checkin || ''} onChange={handleChange} />
            </label>
            <label>
              Check-out
              <input type="date" name="checkout" value={formData.checkout || ''} onChange={handleChange} />
            </label>
            <label>
              Guests
              <input type="number" min="1" name="guests" value={formData.guests || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'localEvents':
        return (
          <>
            <label>
              Event Name
              <input type="text" required name="event" value={formData.event || ''} onChange={handleChange} />
            </label>
            <label>
              Location
              <input type="text" name="location" value={formData.location || ''} onChange={handleChange} />
            </label>
            <label>
              Date
              <input type="date" name="date" value={formData.date || ''} onChange={handleChange} />
            </label>
            <label>
              Tickets Needed
              <input type="number" min="1" name="tickets" value={formData.tickets || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'concerts':
        return (
          <>
            <label>
              Concert Name
              <input type="text" required name="concert" value={formData.concert || ''} onChange={handleChange} />
            </label>
            <label>
              City
              <input type="text" name="city" value={formData.city || ''} onChange={handleChange} />
            </label>
            <label>
              Date
              <input type="date" name="date" value={formData.date || ''} onChange={handleChange} />
            </label>
            <label>
              Tickets
              <input type="number" min="1" name="tickets" value={formData.tickets || ''} onChange={handleChange} />
            </label>
          </>
        );
      default:
        return null;
    }
  }

  // PUBLIC_INTERFACE
  function handleBookingSubmit(e) {
    e.preventDefault();
    if (!purpose) return;
    // Add new booking to local state (simulate backend)
    setBookings(bk => [
      ...bk,
      {
        id: Date.now(),
        purpose: PURPOSE_OPTIONS.find(opt => opt.value === purpose)?.label,
        data: { ...formData }
      }
    ]);
    setFormData({});
    setPurpose('');
  }

  return (
    <div className="container" style={{ marginTop: 40, maxWidth: 520 }}>
      <div style={{
        fontWeight: 700,
        fontSize: "1.6rem",
        color: "var(--kavia-orange)",
        margin: "12px 0 22px 0"
      }}>
        Bookings
      </div>
      <div style={{
        marginBottom: 22,
        color: "var(--text-secondary)",
        fontSize: "1.08rem"
      }}>
        Select the purpose below to make a booking.<br />
        Your submitted bookings appear below.
      </div>
      <form
        style={{
          background: "var(--surface)",
          borderRadius: 13,
          boxShadow: "0 1px 7px rgba(0,0,0,0.06)",
          border: "1.2px solid var(--border-color)",
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
          padding: "2.2rem 2.4rem 1.5rem 2.4rem",
          marginBottom: 30
        }}
        onSubmit={handleBookingSubmit}
        aria-label="Booking Form"
      >
        <label>
          Purpose
          <select
            name="purpose"
            value={purpose}
            onChange={handlePurposeChange}
            required
            style={{ marginLeft: 8, padding: "0.5em", borderRadius: 7, border: "1.5px solid var(--border-color)", background: "var(--secondary-bg)", minWidth: 170 }}
          >
            <option value="">Select purpose</option>
            {PURPOSE_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </label>
        {/* Render the domain-specific form fields */}
        {purpose && (
          <div style={{ display: "flex", flexDirection: "column", gap: 13, marginTop: 7 }}>
            {renderBookingForm()}
            <button className="btn btn-large" style={{ marginTop: 12, fontWeight: 600, alignSelf: "flex-start" }}>
              Book Now
            </button>
          </div>
        )}
      </form>
      {/* Booking history */}
      <div>
        <div style={{
          fontSize: "1.19rem",
          fontWeight: 600,
          color: "var(--primary-text)",
          marginBottom: 13
        }}>
          Booking History
        </div>
        {bookings.length === 0
          ? <div style={{ color: "var(--text-secondary)" }}>No bookings yet.</div>
          : (
            <ul style={{ padding: 0, listStyle: "none", margin: 0, display: "flex", flexDirection: "column", gap: 15 }}>
              {bookings.map(({ id, purpose, data }, i) => (
                <li
                  key={id}
                  style={{
                    background: "var(--sidebar-bg)",
                    borderRadius: 10,
                    border: "1.1px solid var(--border-color)",
                    padding: "1.1rem 1.5rem",
                    color: "var(--primary-text)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    transition: "background .13s",
                    fontSize: "1.03rem"
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>{i + 1}. {purpose}</span>
                  <div style={{ marginTop: 4 }}>
                    {Object.keys(data).map(field =>
                      <div key={field} style={{ color: "var(--text-secondary)", fontSize: ".97em", marginTop: 2 }}>
                        <span style={{ fontWeight: 500, color: "var(--primary-text)" }}>{field.charAt(0).toUpperCase() + field.slice(1)}:</span> {data[field]}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function NotFoundPage() {
  /** 404 page stub */
  return <div className="container"><h2>404</h2><p>Page not found.</p></div>;
}

function App() {
  return (
    <MultiLangProvider>
      <Router>
        <div className="app">
          <NavBar />
          <MainContainer>
            <div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
              <SideBar />
              <div style={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/bookings" element={<BookingsPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/dashboard" element={<AdminVendorDashboard />} />
                  <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/domain/:domainSlug" element={<DomainPageStub />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
            </div>
          </MainContainer>
          <Footer />
        </div>
      </Router>
    </MultiLangProvider>
  );
}

export default App;
