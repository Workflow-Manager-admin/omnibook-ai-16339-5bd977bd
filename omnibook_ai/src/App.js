import React, { useState } from 'react';
import './App.css';
import AdminVendorDashboard from './pages/AdminVendorDashboard';
import MainContainer from './containers/MainContainer';
import NavBar from './components/Layout/NavBar';
import SideBar from './components/Layout/SideBar';
import Footer from './components/Layout/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MultiLangProvider from './contexts/MultiLangProvider';
import BookingsProvider from './contexts/BookingsContext';
import DomainPageStub from './pages/DomainPageStub';
import ProfilePage from './pages/ProfilePage';
import { useBookings } from './contexts/BookingsContext';

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

 
/* BookingsPage
 * Bookings page featuring a purpose dropdown, contextual forms for sports/movies/travel/venues/resorts/local events/concerts,
 * saves bookings locally and displays history. Polished UI inline with app styling.
 */
import { useBookings } from './contexts/BookingsContext';

function BookingsPage() {
  // Options for dropdown: "purpose"
  const PURPOSE_OPTIONS = [
    { label: 'Sports Events', value: 'sports' },
    { label: 'Movies and Shows', value: 'movies' },
    { label: 'Travel (Bus, Train, Flights)', value: 'travel' },
    { label: 'Event Venues', value: 'venues' },
    { label: 'Resorts', value: 'resorts' },
    { label: 'Local Events', value: 'localevents' },
    { label: 'Concerts', value: 'concerts' }
  ];

  // Main state
  const [purpose, setPurpose] = useState('');
  const [formData, setFormData] = useState({});
  // Bookings now pulled from context!
  const { bookings, addBooking } = useBookings();

  // Reset form on dropdown change
  function handlePurposeChange(e) {
    setPurpose(e.target.value);
    setFormData({});
  }

  // For all form fields; handles all types as strings
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  // Render fields per type
  function renderBookingForm() {
    switch (purpose) {
      case 'sports':
        return (
          <>
            <label>
              Event Name
              <input type="text" name="event" required value={formData.event || ''} onChange={handleChange} />
            </label>
            <label>
              Number of Tickets
              <input type="number" min="1" name="tickets" required value={formData.tickets || ''} onChange={handleChange} />
            </label>
            <label>
              Date
              <input type="date" name="date" required value={formData.date || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'movies':
        return (
          <>
            <label>
              Movie/Show Name
              <input type="text" name="movie" required value={formData.movie || ''} onChange={handleChange} />
            </label>
            <label>
              Cinema/Location
              <input type="text" name="location" required value={formData.location || ''} onChange={handleChange} />
            </label>
            <label>
              Seats
              <input type="number" name="seats" min="1" required value={formData.seats || ''} onChange={handleChange} />
            </label>
            <label>
              Show Time
              <input type="datetime-local" name="showTime" required value={formData.showTime || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'travel':
        return (
          <>
            <label>
              Travel Mode
              <select name="travelMode" required value={formData.travelMode || ''} onChange={handleChange}>
                <option value="">Select</option>
                <option value="bus">Bus</option>
                <option value="train">Train</option>
                <option value="flights">Flights</option>
              </select>
            </label>
            <label>
              From
              <input type="text" name="from" required value={formData.from || ''} onChange={handleChange} />
            </label>
            <label>
              To
              <input type="text" name="to" required value={formData.to || ''} onChange={handleChange} />
            </label>
            <label>
              Date of Journey
              <input type="date" name="date" required value={formData.date || ''} onChange={handleChange} />
            </label>
            <label>
              Passengers
              <input type="number" name="passengers" min="1" required value={formData.passengers || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'venues':
        return (
          <>
            <label>
              Venue Name
              <input type="text" name="venue" required value={formData.venue || ''} onChange={handleChange} />
            </label>
            <label>
              Event Type
              <input type="text" name="eventType" required value={formData.eventType || ''} onChange={handleChange} />
            </label>
            <label>
              Date
              <input type="date" name="date" required value={formData.date || ''} onChange={handleChange} />
            </label>
            <label>
              Guests
              <input type="number" name="guests" min="1" required value={formData.guests || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'resorts':
        return (
          <>
            <label>
              Resort Name
              <input type="text" name="resort" required value={formData.resort || ''} onChange={handleChange} />
            </label>
            <label>
              Check-in
              <input type="date" name="checkin" required value={formData.checkin || ''} onChange={handleChange} />
            </label>
            <label>
              Check-out
              <input type="date" name="checkout" required value={formData.checkout || ''} onChange={handleChange} />
            </label>
            <label>
              Number of Guests
              <input type="number" name="guests" min="1" required value={formData.guests || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'localevents':
        return (
          <>
            <label>
              Event Name
              <input type="text" name="event" required value={formData.event || ''} onChange={handleChange} />
            </label>
            <label>
              Location
              <input type="text" name="location" required value={formData.location || ''} onChange={handleChange} />
            </label>
            <label>
              Date
              <input type="date" name="date" required value={formData.date || ''} onChange={handleChange} />
            </label>
            <label>
              Tickets
              <input type="number" name="tickets" min="1" required value={formData.tickets || ''} onChange={handleChange} />
            </label>
          </>
        );
      case 'concerts':
        return (
          <>
            <label>
              Concert Name
              <input type="text" name="concert" required value={formData.concert || ''} onChange={handleChange} />
            </label>
            <label>
              City
              <input type="text" name="city" required value={formData.city || ''} onChange={handleChange} />
            </label>
            <label>
              Date
              <input type="date" name="date" required value={formData.date || ''} onChange={handleChange} />
            </label>
            <label>
              Tickets
              <input type="number" name="tickets" min="1" required value={formData.tickets || ''} onChange={handleChange} />
            </label>
          </>
        );
      default:
        return null;
    }
  }

  // Submit booking to BookingsContext, reset form
  function handleBookingSubmit(e) {
    e.preventDefault();
    if (!purpose) return;
    addBooking({
      id: Date.now(),
      typeLabel: (PURPOSE_OPTIONS.find(x => x.value === purpose) || {}).label,
      data: { ...formData },
      purpose,
      timestamp: new Date().toISOString(),
    });
    setFormData({});
    setPurpose('');
  }

  // "Polished" booking history rendering (reads from context)
  return (
    <div className="container" style={{ marginTop: 48, maxWidth: 520 }}>
      <div style={{
        fontWeight: 700,
        fontSize: "1.6rem",
        color: "var(--kavia-orange)",
        margin: "10px 0 18px 0"
      }}>
        Bookings
      </div>
      <div style={{
        marginBottom: 22,
        color: "var(--text-secondary)",
        fontSize: "1.08rem"
      }}>
        Select the booking purpose to see its corresponding form. Your bookings are shown below.
      </div>
      <form
        onSubmit={handleBookingSubmit}
        style={{
          background: "var(--surface)",
          borderRadius: 13,
          boxShadow: "0 1.5px 8px rgba(0,0,0,0.06)",
          border: "1.2px solid var(--border-color)",
          display: "flex",
          flexDirection: "column",
          gap: "1.03rem",
          padding: "2.1rem 2.3rem 1.45rem 2.3rem",
          marginBottom: 30
        }}
        aria-label="Booking Form"
      >
        <label style={{ fontWeight: 600 }}>
          Purpose
          <select
            name="purpose"
            required
            value={purpose}
            onChange={handlePurposeChange}
            style={{
              marginLeft: 8,
              padding: "0.5em",
              borderRadius: 7,
              border: "1.5px solid var(--border-color)",
              background: "var(--secondary-bg)",
              minWidth: 170
            }}
          >
            <option value="">Select purpose</option>
            {PURPOSE_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </label>
        {purpose &&
          <div style={{ display: "flex", flexDirection: "column", gap: 13, marginTop: 8 }}>
            {renderBookingForm()}
            <button className="btn btn-large" style={{ marginTop: 11, fontWeight: 600, alignSelf: "flex-start" }}>
              Book Now
            </button>
          </div>
        }
      </form>
      <div>
        <div style={{
          fontSize: "1.16rem",
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
              {bookings.map(({ id, typeLabel, data, timestamp }, i) => (
                <li
                  key={id}
                  style={{
                    background: "var(--sidebar-bg)",
                    borderRadius: 10,
                    border: "1.1px solid var(--border-color)",
                    padding: "1.1rem 1.5rem",
                    color: "var(--primary-text)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    transition: "background .13s",
                    fontSize: "1.05rem"
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>{i + 1}. {typeLabel}</span>
                  <div style={{ marginTop: 4 }}>
                    {Object.keys(data).map(field =>
                      <div key={field} style={{ color: "var(--text-secondary)", fontSize: ".98em", marginTop: 2 }}>
                        <span style={{ fontWeight: 500, color: "var(--primary-text)" }}>
                          {field.replace(/([A-Z])/g, " $1").replace(/^./, x => x.toUpperCase())}:
                        </span> {data[field]}
                      </div>
                    )}
                  </div>
                  {timestamp &&
                    <div style={{ color: "var(--text-secondary)", fontSize: ".93em", marginTop: 4 }}>
                      <span>Booked at: {new Date(timestamp).toLocaleString()}</span>
                    </div>
                  }
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
      <BookingsProvider>
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
      </BookingsProvider>
    </MultiLangProvider>
  );
}

export default App;
