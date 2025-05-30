import React from 'react';
import './App.css';

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
            <input
              className="search-bar"
              type="search"
              placeholder="Search events, movies, flights, hotels, etc..."
              style={{
                width: '100%',
                padding: '10px 36px 10px 14px',
                border: '1px solid var(--border-color)',
                borderRadius: 6,
                background: 'var(--primary)',
                color: 'var(--text-color)',
                outline: 'none',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              aria-label="Universal search"
            />
            <span style={{
              position: 'relative',
              left: -30,
              color: 'var(--kavia-orange)',
              pointerEvents: 'none',
              fontWeight: 400
            }}>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="2"/>
                <line x1="16.2322" y1="16.6465" x2="19.0607" y2="19.4749" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </div>
          {/* Quick Actions: dashboard, notification, chat */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button className="btn" style={{ background: 'none', color: 'var(--text-color)', padding: 7, border: 'none', fontSize: 20 }} title="Dashboard/Admin">
              <span role="img" aria-label="Dashboard">
                <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" fill="var(--kavia-orange)" />
                  <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="var(--kavia-orange)" strokeWidth="1.5" />
                  <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="var(--kavia-orange)" strokeWidth="1.5" />
                  <rect x="12" y="12" width="7" height="7" rx="1.5" fill="var(--kavia-orange)" />
                </svg>
              </span>
            </button>
            <button className="btn" style={{ background: 'none', color: 'var(--accent)', padding: 7, border: 'none', fontSize: 18 }} title="Notifications">
              <span role="img" aria-label="Notifications">
                <svg width="21" height="21" fill="none" viewBox="0 0 21 21">
                  <path d="M10.5 18c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm5-5V9a5 5 0 0 0-4-4.9V4a1 1 0 1 0-2 0v.1A5 5 0 0 0 5.5 9v4l-1.7 1.7a1 1 0 0 0 .7 1.7h13a1 1 0 0 0 .7-1.7L15.5 13z" stroke="var(--accent)" strokeWidth="1.4" fill="none"/>
                </svg>
              </span>
            </button>
            <button className="btn" style={{ background: 'none', color: 'var(--secondary)', padding: 7, border: 'none', fontSize: 18 }} title="Support/Chat">
              <span role="img" aria-label="Chat">
                <svg width="21" height="21" fill="none" viewBox="0 0 21 21">
                  <path d="M4 16v2.7A1.3 1.3 0 0 0 6.1 19l2.2-1.1c.3-.2.7-.3 1-.3h5.7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9z" stroke="var(--secondary)" strokeWidth="1.4" fill="none"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area with space for nav + padding */}
      <main>
        {/* Main container starts after navbar */}
        <div className="container" style={{ paddingTop: 96, paddingBottom: 36 }}>
          {/* Filter & Quick-access Buttons */}
          <section style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
            {[
              { label: "Sports", icon: "🏟️" },
              { label: "Movies", icon: "🎬" },
              { label: "Concerts", icon: "🎶" },
              { label: "Travel", icon: "✈️" },
              { label: "Venues", icon: "🏨" },
              { label: "Events", icon: "📆" },
              { label: "Resorts", icon: "🌴" },
            ].map(btn => (
              <button
                key={btn.label}
                className="btn"
                style={{
                  background: "var(--secondary)",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: '1rem',
                  margin: '2px 0',
                  minWidth: 102,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7
                }}>
                <span style={{ fontSize: '1.2rem' }}>{btn.icon}</span> {btn.label}
              </button>
            ))}
          </section>

          {/* Trending Events Carousel Stub */}
          <section style={{ margin: '32px 0' }}>
            <div style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--kavia-orange)', marginBottom: 12 }}>🔥 Trending Now</div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border-color)",
                borderRadius: 12,
                minHeight: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)"
              }}
            >
              [Trending Events Carousel Placeholder]
            </div>
          </section>

          {/* Recommendations Carousel Stub */}
          <section style={{ margin: '32px 0' }}>
            <div style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--accent)', marginBottom: 12 }}>✨ Recommended For You</div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border-color)",
                borderRadius: 12,
                minHeight: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)"
              }}
            >
              [Personalized Recommendations Carousel Placeholder]
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;