import React, { useState, useRef } from "react";

// Booking purposes
const PURPOSES = [
  { value: "sports", label: "Sports Events" },
  { value: "movies", label: "Movies & Shows" },
  { value: "travel", label: "Travel (Bus, Train, Flights)" },
  { value: "venues", label: "Event Venues" },
  { value: "resorts", label: "Resorts" },
  { value: "local", label: "Local Events" },
  { value: "concerts", label: "Concerts" }
];

// Mock booking steps (retained for context UI)
const STEPS = [
  { id: 101, label: "1. Choose Event", emoji: "🎫" },
  { id: 102, label: "2. Select Date & Time", emoji: "📅" },
  { id: 103, label: "3. Pick Seat", emoji: "🪑" },
  { id: 104, label: "4. Confirm Booking", emoji: "✅" },
];

// PUBLIC_INTERFACE
export default function BookingFlow() {
  /**
   * Enhanced BookingFlow with dropdown for purpose
   * - Dropdown for booking purpose
   * - Shows only relevant form for selected purpose
   */
  const [currentPurpose, setCurrentPurpose] = useState(""); // blank until chosen
  const [formState, setFormState] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const listRef = useRef([]);

  // Reset form state when switching purposes
  function handlePurposeChange(e) {
    setCurrentPurpose(e.target.value);
    setFormState({});
  }

  // Form input generic change handler
  const handleInputChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // --- Example Renderers for Each Form ---
  function renderBookingForm() {
    switch (currentPurpose) {
      case "sports":
        return (
          <form style={bookingFormStyle}>
            <FormHeading>Book Sports Event Tickets</FormHeading>
            <Field label="Sport Type">
              <select
                name="sportType"
                value={formState.sportType || ""}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option>Football</option>
                <option>Cricket</option>
                <option>Basketball</option>
                <option>Tennis</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Event Name">
              <input
                type="text"
                name="eventName"
                placeholder="e.g. IPL: MI vs CSK"
                value={formState.eventName || ""}
                onChange={handleInputChange}
                required
              />
            </Field>
            <Field label="City">
              <input
                type="text"
                name="city"
                value={formState.city || ""}
                placeholder="e.g. Mumbai"
                onChange={handleInputChange}
                required
              />
            </Field>
            <Field label="Preferred Date">
              <input
                type="date"
                name="date"
                value={formState.date || ""}
                onChange={handleInputChange}
                required
              />
            </Field>
            {/* Add more fields if needed */}
            <SubmitButton />
          </form>
        );
      case "movies":
        return (
          <form style={bookingFormStyle}>
            <FormHeading>Book Movies & Shows</FormHeading>
            <Field label="Movie/Show Title">
              <input
                type="text"
                name="title"
                placeholder="e.g. Oppenheimer"
                value={formState.title || ""}
                onChange={handleInputChange}
                required
              />
            </Field>
            <Field label="Cinema/Theatre">
              <input
                type="text"
                name="cinema"
                placeholder="e.g. PVR Icon"
                value={formState.cinema || ""}
                onChange={handleInputChange}
                required
              />
            </Field>
            <Field label="City">
              <input
                type="text"
                name="city"
                value={formState.city || ""}
                onChange={handleInputChange}
                required
              />
            </Field>
            <Field label="Date">
              <input
                type="date"
                name="date"
                value={formState.date || ""}
                onChange={handleInputChange}
                required
              />
            </Field>
            <Field label="Show Time">
              <input
                type="time"
                name="showtime"
                value={formState.showtime || ""}
                onChange={handleInputChange}
                required
              />
            </Field>
            <SubmitButton />
          </form>
        );
      case "travel":
        return (
          <form style={bookingFormStyle}>
            <FormHeading>Book Travel Ticket</FormHeading>
            <Field label="Travel Mode">
              <select name="mode" value={formState.mode || ""} onChange={handleInputChange} required>
                <option value="">Select</option>
                <option>Bus</option>
                <option>Train</option>
                <option>Flight</option>
              </select>
            </Field>
            <Field label="From">
              <input type="text" name="from" value={formState.from || ""} placeholder="Source City"
                onChange={handleInputChange} required />
            </Field>
            <Field label="To">
              <input type="text" name="to" value={formState.to || ""} placeholder="Destination City"
                onChange={handleInputChange} required />
            </Field>
            <Field label="Date of Journey">
              <input type="date" name="date" value={formState.date || ""} onChange={handleInputChange} required />
            </Field>
            <Field label="Preferred Time">
              <input type="time" name="time" value={formState.time || ""} onChange={handleInputChange} required />
            </Field>
            <SubmitButton />
          </form>
        );
      case "venues":
        return (
          <form style={bookingFormStyle}>
            <FormHeading>Book Event Venue</FormHeading>
            <Field label="Venue Name">
              <input type="text" name="venue" value={formState.venue || ""} onChange={handleInputChange}
                placeholder="e.g. ICC Convention Centre" required />
            </Field>
            <Field label="City">
              <input type="text" name="city" value={formState.city || ""} onChange={handleInputChange}
                required />
            </Field>
            <Field label="Date for Event">
              <input type="date" name="date" value={formState.date || ""} onChange={handleInputChange} required />
            </Field>
            <Field label="No. of Guests">
              <input type="number" name="guests" value={formState.guests || ""} onChange={handleInputChange}
                min={1} placeholder="e.g. 100" required />
            </Field>
            <SubmitButton />
          </form>
        );
      case "resorts":
        return (
          <form style={bookingFormStyle}>
            <FormHeading>Book a Resort</FormHeading>
            <Field label="Resort Name">
              <input type="text" name="resort" value={formState.resort || ""} onChange={handleInputChange}
                placeholder="e.g. Palm Beach Resort" required />
            </Field>
            <Field label="City / Location">
              <input type="text" name="city" value={formState.city || ""} onChange={handleInputChange}
                required />
            </Field>
            <Field label="Check-In Date">
              <input type="date" name="checkin" value={formState.checkin || ""} onChange={handleInputChange} required />
            </Field>
            <Field label="Check-Out Date">
              <input type="date" name="checkout" value={formState.checkout || ""} onChange={handleInputChange} required />
            </Field>
            <Field label="No. of Rooms">
              <input type="number" name="rooms" min={1} value={formState.rooms || ""} onChange={handleInputChange}
                required />
            </Field>
            <SubmitButton />
          </form>
        );
      case "local":
        return (
          <form style={bookingFormStyle}>
            <FormHeading>Book Local Event</FormHeading>
            <Field label="Event Name">
              <input type="text" name="event" value={formState.event || ""} onChange={handleInputChange}
                placeholder="e.g. Food Festival" required />
            </Field>
            <Field label="City">
              <input type="text" name="city" value={formState.city || ""} onChange={handleInputChange}
                required />
            </Field>
            <Field label="Event Date">
              <input type="date" name="date" value={formState.date || ""} onChange={handleInputChange} required />
            </Field>
            <SubmitButton />
          </form>
        );
      case "concerts":
        return (
          <form style={bookingFormStyle}>
            <FormHeading>Book Concert Ticket</FormHeading>
            <Field label="Concert Name">
              <input type="text" name="concert" value={formState.concert || ""} onChange={handleInputChange}
                placeholder="e.g. Taylor Swift Eras Tour" required />
            </Field>
            <Field label="City">
              <input type="text" name="city" value={formState.city || ""} onChange={handleInputChange}
                required />
            </Field>
            <Field label="Date">
              <input type="date" name="date" value={formState.date || ""} onChange={handleInputChange} required />
            </Field>
            <Field label="Number of Tickets">
              <input type="number" name="tickets" value={formState.tickets || ""} min={1}
                onChange={handleInputChange} required />
            </Field>
            <SubmitButton />
          </form>
        );
      default:
        return null;
    }
  }

  function FormHeading({ children }) {
    return (
      <div style={{
        fontWeight: 700,
        fontSize: "1.11rem",
        color: "var(--secondary)",
        marginBottom: 14
      }}>{children}</div>
    );
  }

  function Field({ label, children }) {
    return (
      <label style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        color: "var(--text-color)",
        marginBottom: 14,
        fontSize: "1em"
      }}>
        <span style={{ color: "var(--text-secondary)", fontWeight: 500, marginBottom: 2 }}>{label}</span>
        {children}
      </label>
    );
  }

  function SubmitButton() {
    return (
      <button
        type="submit"
        className="btn"
        style={{
          background: "var(--kavia-orange)",
          color: "var(--button-text-contrast)",
          border: "none",
          fontWeight: 600,
          borderRadius: 5,
          padding: "11px 28px",
          marginTop: 17,
          fontSize: "1.08em"
        }}
        tabIndex={0}
        disabled
        aria-disabled="true"
        title="Demo mode: no actual booking"
      >
        Book Now
      </button>
    );
  }

  // Keyboard navigation for steps (from original logic)
  function handleClick(idx) {
    setCurrentStep(idx);
  }
  function handleKeyDown(e, idx) {
    // Select on Enter or Space
    if (e.key === " " || e.key === "Enter") {
      setCurrentStep(idx);
      e.preventDefault();
    }
    // Keyboard step navigation with arrows
    if (e.key === "ArrowDown") {
      const next = (idx + 1) % STEPS.length;
      listRef.current[next]?.focus();
      e.preventDefault();
    }
    if (e.key === "ArrowUp") {
      const prev = (idx - 1 + STEPS.length) % STEPS.length;
      listRef.current[prev]?.focus();
      e.preventDefault();
    }
  }

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px dashed var(--accent)",
      borderRadius: 10,
      color: "var(--accent)",
      padding: "15px 0 16px 0",
      minHeight: 64,
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      gap: "1.1rem"
    }}>
      {/* Dropdown for booking purpose */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "flex-start",
        gap: 8, margin: "0 0 10px 0"
      }}>
        <label htmlFor="purpose" style={{
          fontWeight: 600,
          fontSize: "1.09em",
          color: "var(--accent)",
          display: "block",
          marginBottom: 3
        }}>Booking Purpose</label>
        <select
          id="purpose"
          aria-label="Choose booking purpose"
          value={currentPurpose}
          required
          onChange={handlePurposeChange}
          style={{
            fontSize: "1.07em",
            padding: "10px 14px",
            borderRadius: 6,
            border: "1.5px solid var(--border-color)",
            background: "var(--primary)",
            color: "var(--text-color)",
            outline: currentPurpose ? "2px solid var(--accent)" : undefined,
            fontWeight: 500,
            minWidth: 180,
            maxWidth: 340,
            marginTop: 3,
            marginBottom: 0,
          }}
        >
          <option value="">-- Select Purpose --</option>
          {PURPOSES.map(opt =>
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          )}
        </select>
      </div>

      {/* Show relevant booking form. Only display once a purpose is selected */}
      {currentPurpose &&
        <div style={{
          margin: "10px 0 0 0",
          background: "rgba(255,255,255,0.01)",
          border: "1.5px solid var(--border-color)",
          borderRadius: 9,
          padding: "22px 15px 12px 12px",
          boxShadow: "0 2px 10px 0 rgba(36,36,38,0.08)"
        }}>
          {renderBookingForm()}
        </div>
      }

      {/* Booking Steps and instructions */}
      <div
        role="list"
        aria-label="Booking Flow Steps"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        {STEPS.map((step, idx) => {
          const isActive = currentStep === idx;
          return (
            <button
              ref={el => (listRef.current[idx] = el)}
              key={step.id}
              tabIndex={0}
              role="listitem"
              aria-pressed={isActive}
              aria-label={`${step.label}${isActive ? " (current)" : ""}`}
              type="button"
              onClick={() => handleClick(idx)}
              onKeyDown={e => handleKeyDown(e, idx)}
              style={{
                background: isActive ? "var(--kavia-orange)" : "rgba(255,255,255,0.10)",
                color: isActive ? "#fff" : "var(--accent)",
                border: isActive
                  ? "2.2px solid var(--accent)"
                  : "1px dashed var(--accent)",
                borderRadius: 7,
                minWidth: 110,
                minHeight: 48,
                padding: "11px 10px",
                fontWeight: isActive ? 700 : 500,
                fontSize: "1.05rem",
                outline: isActive ? "2.4px solid var(--accent)" : undefined,
                cursor: "pointer",
                boxShadow: isActive
                  ? "0 0 0 2px var(--accent)"
                  : undefined,
                transition: "background 0.15s, border 0.14s, box-shadow 0.13s",
                opacity: isActive ? 1 : 0.93,
                display: "flex",
                alignItems: "center",
                gap: 6,
                position: "relative",
              }}
              onFocus={() => { }}
            >
              <span aria-hidden="true" style={{
                fontSize: "1.25rem",
                marginRight: "0.40em"
              }}>{step.emoji}</span>
              <span>{step.label}</span>
              {isActive && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 7,
                    right: 7,
                    fontWeight: "bold",
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: "2.8px",
                    padding: "0 5px",
                    fontSize: "1em",
                  }}
                >✓</span>
              )}
            </button>
          );
        })}
      </div>
      {/* Step description */}
      <div
        style={{
          margin: "12px 0 0 0",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 6,
          color: "var(--accent)",
          minHeight: 28,
          padding: "7px 12px",
          fontSize: "1.04em",
          transition: "background 0.13s",
        }}
        aria-live="polite"
      >
        <span>
          {(() => {
            switch (currentStep) {
              case 0: return "Select an event to book tickets for.";
              case 1: return "Choose your preferred date and time.";
              case 2: return "Pick your seat for the event (try AR preview next!).";
              case 3: return "Review and confirm your booking.";
              default: return null;
            }
          })()}
        </span>
      </div>
    </div>
  );
}

// Helper: booking form card style (kept inline for UI harmony)
const bookingFormStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "7px",
  color: "var(--text-color)",
  background: "none",
  border: "none",
  margin: 0,
  padding: 0,
  fontSize: "1em"
};
