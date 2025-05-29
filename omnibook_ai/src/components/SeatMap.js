import React from "react";

// PUBLIC_INTERFACE
/**
 * SeatMap
 * Interactive stub component for selecting seats in a grid (e.g., Movie/Sports/Event seating).
 * Props:
 *   onSelectSeat(seatId) - callback when user selects a seat.
 *   selectedSeat - currently selected seatId.
 */
function SeatMap({ onSelectSeat, selectedSeat }) {
  // Mock seat layout: 5 rows x 8 columns (A1..A8, B1...E8)
  const rows = ["A", "B", "C", "D", "E"];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];

  // Pretend some seats unavailable
  const unavailable = new Set(["B3", "C5", "D7"]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "10px 0"
    }}>
      {/* Stage indicator */}
      <div style={{
        marginBottom: 8, fontWeight: 600, color: "var(--kavia-orange)", letterSpacing: ".05em"
      }}>
        <span style={{ fontSize: ".93em", opacity: 0.82 }}>STAGE</span>
      </div>
      {/* Seat grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols.length}, 34px)`,
          gridGap: "10px 7px",
          background: "var(--primary-bg)",
          borderRadius: 13,
          padding: "13px 10px 16px 10px",
          border: "1.5px solid var(--border-color)",
          boxShadow: "0 1px 7px rgba(0,0,0,0.025)",
          userSelect: "none"
        }}
      >
        {rows.map(row =>
          cols.map(col => {
            const seatId = row + col;
            const isTaken = unavailable.has(seatId);
            const isSelected = seatId === selectedSeat;
            return (
              <button
                key={seatId}
                onClick={() => !isTaken && onSelectSeat && onSelectSeat(seatId)}
                disabled={isTaken}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  border: isSelected
                    ? "2.5px solid var(--kavia-orange)"
                    : "1.5px solid var(--border-color)",
                  background: isTaken
                    ? "rgba(200, 200, 200, 0.21)"
                    : isSelected
                      ? "var(--kavia-orange)"
                      : "var(--surface)",
                  color: isTaken
                    ? "#bbb"
                    : isSelected
                      ? "#fff"
                      : "var(--primary-text)",
                  fontWeight: "bold",
                  fontSize: "1em",
                  transition: "background .12s, border .13s, color .13s",
                  position: "relative",
                  cursor: isTaken ? "not-allowed" : "pointer",
                  outline: "none",
                  boxShadow: isSelected ? "0 0 0 2px #fdcf8a6d" : "none"
                }}
                tabIndex={isTaken ? -1 : 0}
                aria-label={seatId + (isTaken ? " (unavailable)" : "")}
                title={isTaken ? "Unavailable" : "Seat " + seatId}
              >
                {seatId}
                {isTaken && (
                  <span style={{
                    position: "absolute",
                    left: 4,
                    top: 2,
                    fontSize: ".9em",
                    color: "#fd4b4b",
                    opacity: 0.59
                  }}>×</span>
                )}
              </button>
            )
          })
        )}
      </div>
      {/* Row labels */}
      <div style={{
        display: "flex",
        gap: 40,
        marginTop: 9,
        opacity: 0.44,
        fontSize: ".93em"
      }}>
        {rows.map(row => (
          <span key={row}>{row}</span>
        ))}
      </div>
      {/* Legend */}
      <div style={{
        display: "flex",
        gap: 15,
        marginTop: 10,
        fontSize: ".96em",
        color: "var(--text-secondary)"
      }}>
        <span><span style={{
          width: 15, height: 15, background: "var(--kavia-orange)", display: "inline-block", borderRadius: 4, marginRight: 5, verticalAlign: "middle"
        }}></span>Selected</span>
        <span><span style={{
          width: 15, height: 15, background: "#fafafa", border: "1.4px solid #eeb", display: "inline-block", borderRadius: 4, marginRight: 5, verticalAlign: "middle"
        }}></span>Available</span>
        <span><span style={{
          width: 15, height: 15, background: "#eaeaea", display: "inline-block", borderRadius: 4, marginRight: 5, verticalAlign: "middle", border: "1.2px solid #fdd"
        }}></span>Unavailable</span>
      </div>
    </div>
  );
}

export default SeatMap;
