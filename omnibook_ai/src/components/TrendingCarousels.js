import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * TrendingCarousels displays a horizontal carousel of trending events/items.
 * Populated statically for now. Uses rich tile cards and palette.
 */
// PUBLIC_INTERFACE
function TrendingCarousels() {
  // TODO: Replace with live trending events from API
  const trending = [
    {
      title: "IPL Finals 2024",
      type: "Sports",
      image: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=400&q=80",
      date: "May 28",
      meta: "Mumbai Stadium",
    },
    {
      title: "Arijit Singh Live",
      type: "Concert",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
      date: "June 7",
      meta: "Bangalore Arena",
    },
    {
      title: "Spider-Man: Beyond",
      type: "Movie",
      image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=80",
      date: "Releasing 31 May",
      meta: "All Multiplexes",
    },
    {
      title: "Goa Resort Offer",
      type: "Resort",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      date: "Summer",
      meta: "Up to 40% off",
    },
    {
      title: "India Travel Fest",
      type: "Travel",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      date: "July 1-7",
      meta: "All India",
    },
  ];

  // Use React Router navigation
  const navigate = useNavigate();

  // Stub for potential event-specific navigation (e.g. /book/:eventId, here just /bookings)
  function handleBookNow(card) {
    // In the future, we may route to `/book/${card.id}` or similar
    navigate("/bookings");
  }

  return (
    <div
      style={{
        margin: "36px auto 0 auto",
        maxWidth: 980,
        padding: "0 16px"
      }}
    >
      <div
        style={{
          fontSize: "1.3rem",
          fontWeight: 600,
          color: "var(--primary-text)",
          marginBottom: 12,
          marginLeft: 3
        }}>
        <span style={{ color: "var(--kavia-orange)", marginRight: 7 }}>Trending</span>
        Now
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: 8,
          scrollbarWidth: "thin"
        }}>
        {trending.map(card => (
          <div
            key={card.title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              minWidth: 210,
              maxWidth: 220,
              borderRadius: "18px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 0 18px 0",
              overflow: "hidden",
              transition: "transform .19s",
              cursor: "default",
              position: "relative"
            }}
          >
            <div style={{
              width: "100%",
              height: 112,
              overflow: "hidden",
              borderTopLeftRadius: 17,
              borderTopRightRadius: 17,
              background: "#111"
            }}>
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }} />
            </div>
            <div style={{
              width: "100%",
              padding: "10px 14px 0 14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}>
              <span style={{
                color: card.type === "Sports"
                  ? "var(--kavia-orange)"
                  : "var(--accent)",
                fontSize: "0.97rem",
                fontWeight: 600
              }}>
                {card.type}
              </span>
              <span style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--primary-text)",
                margin: "4px 0 0 0",
                lineHeight: "1.2",
                maxWidth: 170,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
              }}>{card.title}</span>
              <span style={{
                fontSize: "0.97rem",
                color: "var(--text-secondary)",
                marginTop: 2
              }}>
                {card.date} — {card.meta}
              </span>
            </div>
            <button
              className="btn btn-large"
              style={{
                marginTop: 13,
                alignSelf: "center",
                width: "calc(100% - 34px)",
                fontWeight: 600,
                background: "var(--kavia-orange)",
                color: "#fff",
                borderRadius: 9,
                fontSize: "1.01rem",
                border: "none",
                cursor: "pointer"
              }}
              onClick={() => handleBookNow(card)}
              aria-label={`Book now for ${card.title}`}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCarousels;
