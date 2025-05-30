import React, { useState, useRef } from "react";

const SEATS = [
  { id: 1, label: "A1" },
  { id: 2, label: "A2" },
  { id: 3, label: "A3" },
  { id: 4, label: "B1" },
  { id: 5, label: "B2" }
];

// PUBLIC_INTERFACE
export default function SeatMapAR() {
  /**
   * Interactive AR seat map demo:
   * - Select mock seats, simulate AR preview with a modal.
   * - Keyboard nav/focus and aria attributes.
   */
  const [selected, setSelected] = useState(null);
  const [arPreview, setARPreview] = useState(false);
  const listRef = useRef([]);

  function handleCardSelect(idx) {
    setSelected(idx);
  }
  function handleCardKeyDown(e, idx) {
    if (e.key === " " || e.key === "Enter") {
      setSelected(idx);
      setARPreview(true);
      e.preventDefault();
    }
    if (e.key === "ArrowRight") {
      const next = (idx + 1) % SEATS.length;
      listRef.current[next]?.focus();
      e.preventDefault();
    }
    if (e.key === "ArrowLeft") {
      const prev = (idx - 1 + SEATS.length) % SEATS.length;
      listRef.current[prev]?.focus();
      e.preventDefault();
    }
  }

  return (
    <div
      style={{
        padding: "18px 8px 22px 8px",
        background: "rgba(255,255,255,0.02)",
        border: "1px dashed var(--secondary)",
        borderRadius: 10,
        color: "var(--secondary)",
        minHeight: 62,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <div
        aria-label="AR Seat Selection"
        role="list"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          marginBottom: 10,
          width: "100%",
          justifyContent: "center"
        }}
      >
        {SEATS.map((seat, idx) => {
          const isSel = selected === idx;
          return (
            <button
              ref={el => (listRef.current[idx] = el)}
              key={seat.id}
              className="seat-card"
              tabIndex={0}
              role="listitem"
              aria-pressed={isSel}
              aria-label={`Seat ${seat.label}${isSel ? " (selected)" : ""}`}
              type="button"
              onClick={() => {
                setSelected(idx);
                setARPreview(true);
              }}
              onKeyDown={e => handleCardKeyDown(e, idx)}
              style={{
                background: isSel
                  ? "var(--accent)"
                  : "rgba(255,255,255,0.07)",
                color: isSel
                  ? "#fff"
                  : "var(--secondary)",
                border: isSel
                  ? "2.5px solid var(--accent)"
                  : "1.2px solid var(--border-color)",
                boxShadow: isSel
                  ? "0 0 0 2px var(--secondary)"
                  : undefined,
                borderRadius: 9,
                minWidth: 67,
                minHeight: 45,
                padding: "9px 6px",
                fontWeight: 600,
                fontSize: "1.07rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.15s, border 0.17s, box-shadow 0.13s",
                opacity: isSel ? 1 : 0.95,
                outline: isSel ? "2px solid var(--accent)" : undefined,
                position: "relative",
              }}
              onMouseOver={() => {}}
              onFocus={() => {}}
            >
              <span>{seat.label}</span>
              {isSel && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 6,
                    right: 7,
                    fontWeight: "bold",
                    background: "var(--secondary)",
                    color: "#fff",
                    borderRadius: "2.4px",
                    padding: "0 5px",
                    fontSize: "1em",
                  }}
                >✓</span>
              )}
            </button>
          );
        })}
        {/* Show AR preview option if a seat is selected */}
        {selected !== null && (
          <button
            type="button"
            tabIndex={0}
            aria-label={`Preview seat ${SEATS[selected].label} in AR`}
            className="ar-preview-btn"
            onClick={() => setARPreview(true)}
            style={{
              background: "var(--kavia-orange)",
              color: "#fff",
              fontWeight: 700,
              border: "2.5px solid var(--accent)",
              borderRadius: 9,
              padding: "9px 18px",
              marginLeft: 18,
              cursor: "pointer",
              outline: "2px solid var(--accent)",
              fontSize: "1.08em",
              minHeight: 38,
              boxShadow: "0 0 0 2px var(--accent)"
            }}
          >
            <span style={{ marginRight: 7 }}>👓</span>
            Preview AR
          </button>
        )}
      </div>
      {/* Visual status */}
      <div
        style={{
          color: "var(--secondary)",
          fontWeight: 600,
          marginTop: 7,
          fontSize: "1.01em",
          minHeight: 26,
        }}
        aria-live="polite"
      >
        {selected !== null
          ? `Seat selected: ${SEATS[selected].label}`
          : "Select a seat to preview in AR"}
      </div>
      {/* Modal/tooltip for AR preview */}
      {arPreview && selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`AR Preview for seat ${SEATS[selected].label}`}
          tabIndex={-1}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.25)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => setARPreview(false)}
        >
          <div
            style={{
              background: "#1a1a1a",
              border: "2.7px solid var(--accent)",
              borderRadius: 13,
              color: "#fff",
              padding: "2.1rem 2.7rem",
              textAlign: "center",
              minWidth: 240,
              boxShadow: "0 2px 16px 0 rgba(36,36,38,0.23)"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
              👓
            </div>
            <div style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 12 }}>
              AR Preview: Seat {SEATS[selected].label}
            </div>
            <div style={{ fontSize: "1.01rem", marginBottom: 15, color: "var(--text-secondary)" }}>
              [This is a placeholder modal simulating an AR seat preview experience.]
            </div>
            <button
              type="button"
              className="btn"
              style={{ marginTop: 7, minWidth: 80 }}
              onClick={() => setARPreview(false)}
              aria-label="Close AR Preview"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
