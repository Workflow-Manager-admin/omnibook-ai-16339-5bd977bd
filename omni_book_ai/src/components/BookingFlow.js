import React, { useState } from "react";

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

// PUBLIC_INTERFACE
export default function BookingFlow() {
  /**
   * BookingFlow: Minimal, dynamic booking by purpose.
   * - Dropdown for booking purpose
   * - Shows only the relevant form for selected purpose
   * - All stepper, AR seat map, and booking stages removed for simplicity
   */
  const [currentPurpose, setCurrentPurpose] = useState(""); // blank until chosen
  const [formState, setFormState] = useState({});

  // Reset form state when switching purposes
  function handlePurposeChange(e) {
    setCurrentPurpose(e.target.value);
    setFormState({});
  }

  // Generic input change handler
  const handleInputChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Render the booking form for the selected purpose
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

  return (
    <div
      style={{
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
      }}
    >
      {/* Dropdown for booking purpose */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 8,
          margin: "0 0 10px 0"
        }}
      >
        <label
          htmlFor="purpose"
          style={{
            fontWeight: 600,
            fontSize: "1.09em",
            color: "var(--accent)",
            display: "block",
            marginBottom: 3
          }}
        >
          Booking Purpose
        </label>
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
          {PURPOSES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Show relevant booking form. Only display once a purpose is selected */}
      {currentPurpose && (
        <div
          style={{
            margin: "10px 0 0 0",
            background: "rgba(255,255,255,0.01)",
            border: "1.5px solid var(--border-color)",
            borderRadius: 9,
            padding: "22px 15px 12px 12px",
            boxShadow: "0 2px 10px 0 rgba(36,36,38,0.08)"
          }}
        >
          {renderBookingForm()}
        </div>
      )}
    </div>
  );
}

// Helper: booking form card style
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
