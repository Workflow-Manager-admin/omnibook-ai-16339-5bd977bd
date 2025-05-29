import React, { useState } from "react";
import SeatMap from "../components/SeatMap";

// PUBLIC_INTERFACE
/**
 * BookingFlowContainer
 * A multi-step booking flow stub with interactive layout.
 * Steps: Select Event > Select Seat (shows SeatMap) > AR Preview > Confirm
 * SeatMap and AR Preview are placeholders, structure ready for logic.
 */
function BookingFlowContainer() {
  // Booking Steps
  const steps = [
    "Select Event",
    "Select Seat",
    "AR Preview",
    "Confirm Booking"
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Move to next step
  function nextStep() {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  }
  // Move to previous step
  function prevStep() {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  return (
    <div
      className="booking-flow-container"
      style={{
        maxWidth: 630,
        margin: "40px auto",
        background: "var(--surface)",
        borderRadius: 14,
        boxShadow: "0 1px 8px rgba(0,0,0,0.10)",
        padding: "2.5rem 2.1rem 2rem 2.1rem",
        minHeight: 440,
        display: "flex",
        flexDirection: "column",
        gap: 22
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "1.15rem", color: "var(--primary-text)", marginBottom: 7 }}>
        Booking Flow
      </div>
      {/* Steps header */}
      <div style={{ display: "flex", gap: 16, marginBottom: 13 }}>
        {steps.map((label, idx) => (
          <div
            key={label}
            style={{
              padding: "7px 15px",
              borderRadius: 25,
              background: idx === currentStep
                ? "var(--kavia-orange)"
                : "var(--secondary-bg)",
              color: idx === currentStep
                ? "#fff"
                : "var(--primary-text)",
              fontWeight: idx === currentStep ? 700 : 500,
              fontSize: ".98rem",
              opacity: idx > currentStep ? 0.45 : 1,
              border: idx === currentStep
                ? "none"
                : "1.5px solid var(--border-color)",
              transition: "background .14s"
            }}
          >
            {label}
          </div>
        ))}
      </div>
      {/* Step Content */}
      <div style={{ flex: 1 }}>
        {currentStep === 0 && (
          <div>
            <div style={{ fontWeight: 600, fontSize: "1.08rem", marginBottom: 9 }}>
              Choose an event (stub list)
            </div>
            <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
              {["IPL Finals 2024", "Arijit Singh Live", "Goa Resort Offer"].map(ev => (
                <li key={ev}>
                  <button
                    onClick={nextStep}
                    className="btn"
                    style={{
                      margin: "9px 0",
                      width: "100%",
                      background: "var(--kavia-orange)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 5,
                      fontWeight: 600,
                      fontSize: "1rem",
                      padding: "12px 7px",
                      boxShadow: "0 1px 3px rgba(240,150,50,0.08)",
                      cursor: "pointer"
                    }}
                  >
                    {ev}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <div style={{ fontWeight: 600, fontSize: "1.08rem", marginBottom: 9 }}>
              Select your seat
            </div>
            {/* SeatMap is interactive stub */}
            <SeatMap
              onSelectSeat={seatId => setSelectedSeat(seatId)}
              selectedSeat={selectedSeat}
            />
            <div style={{ marginTop: 12, color: "var(--text-secondary)" }}>
              Selected Seat: {selectedSeat ? <b>{selectedSeat}</b> : <em>None</em>}
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 600, fontSize: "1.08rem", marginBottom: 18 }}>
              AR Seat Preview (Mock)
            </div>
            {/* AR Preview Placeholder */}
            <div
              style={{
                width: 210,
                height: 130,
                margin: "0 auto 20px auto",
                background: "linear-gradient(135deg, #333, #222 80%)",
                borderRadius: 20,
                boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFD89A",
                fontSize: "1.4rem",
                fontWeight: 700,
                letterSpacing: ".08em",
                position: "relative"
              }}
            >
              <span style={{ opacity: 0.15, fontSize: 70, position: "absolute", left: 30, top: 14 }}>🎫</span>
              <span style={{ zIndex: 1 }}>[AR View Placeholder]</span>
            </div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              Hold your phone up to view the seat in augmented reality.<br />
              (Full AR coming soon!)
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700, color: "var(--kavia-orange)", fontSize: "1.14rem" }}>
              Confirm Your Booking
            </div>
            <div style={{ margin: "18px 0", color: "var(--text-secondary)" }}>
              {/* Booking summary mock */}
              <span>Event: <b>Stub Event</b></span><br />
              <span>Seat: <b>{selectedSeat || "Not selected"}</b></span><br />
              <span>Date: <b>Stub Date/Time</b></span>
            </div>
            <button className="btn btn-large" style={{
              fontWeight: 600,
              background: "var(--kavia-orange)",
              color: "#fff"
            }}>Complete Booking</button>
          </div>
        )}
      </div>
      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={prevStep}
          className="btn"
          style={{
            visibility: currentStep === 0 ? "hidden" : "visible",
            background: "var(--secondary-bg)",
            color: "var(--kavia-orange)",
            border: "1.5px solid var(--kavia-orange)",
            fontWeight: 600
          }}
        >Back</button>
        <button
          onClick={nextStep}
          className="btn"
          style={{
            visibility: currentStep === steps.length - 1 ? "hidden" : "visible",
            background: "var(--kavia-orange)",
            color: "#fff",
            fontWeight: 600
          }}
        >Next</button>
      </div>
    </div>
  );
}

export default BookingFlowContainer;
