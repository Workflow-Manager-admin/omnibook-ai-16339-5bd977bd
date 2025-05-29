import React from 'react';
import './App.css';
import AdminVendorDashboard from './pages/AdminVendorDashboard';
import MainContainer from './containers/MainContainer';
import NavBar from './components/Layout/NavBar';
import SideBar from './components/Layout/SideBar';
import Footer from './components/Layout/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Stubs for routed pages
// PUBLIC_INTERFACE
function HomePage() {
  /** Home page stub */
  return (
    <div className="container">
      <div className="hero">
        <div className="subtitle">AI Workflow Manager Template</div>
        <h1 className="title">omnibook_ai</h1>
        <div className="description">
          Welcome to OmniBook AI. Start building your application.
        </div>
        <button className="btn btn-large">Call To Action</button>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function BookingsPage() {
  /** Bookings page stub */
  return <div className="container"><h2>Bookings</h2><p>All your booking domains in one unified view.</p></div>;
}

// PUBLIC_INTERFACE
function ProfilePage() {
  /** Profile page stub */
  return <div className="container"><h2>User Profile</h2><p>Manage your details and settings here.</p></div>;
}

import AdminVendorDashboard from './pages/AdminVendorDashboard';
// PUBLIC_INTERFACE
function DashboardPage() {
  /** Admin/vendor dashboard stub */
  return <AdminVendorDashboard />;
}

// PUBLIC_INTERFACE
function NotFoundPage() {
  /** 404 page stub */
  return <div className="container"><h2>404</h2><p>Page not found.</p></div>;
}

function App() {
  return (
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
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </MainContainer>
        <Footer />
      </div>
    </Router>
  );
}

export default App;