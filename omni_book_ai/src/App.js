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
import AdminDashboardLink from './components/AdminDashboardLink';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="logo-symbol" style={{ fontSize: '1.5rem' }}>◎</span> OmniBook <span style={{ fontWeight: '300', color: 'var(--kavia-orange)', marginLeft: 2 }}>AI</span>
          </div>
          {/* Universal Search Bar */}
          <div style={{ flex: 1, marginLeft: 32, marginRight: 32, maxWidth: 400 }}>
            <UniversalSearch />
          </div>
          {/* Quick Actions: dashboard, notification, chat */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <AdminDashboardLink />
            <Notifications />
            <ChatSupport />
          </div>
        </div>
      </nav>

      {/* Main Content Area with space for nav + padding */}
      <main>
        {/* Main container starts after navbar */}
        <div className="container" style={{ paddingTop: 96, paddingBottom: 36 }}>
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
        </div>
      </main>
    </div>
  );
}

export default App;