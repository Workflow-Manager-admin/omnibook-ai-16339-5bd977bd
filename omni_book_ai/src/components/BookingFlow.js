import React, { useState } from "react";
import "./BookingFlow.css";
// BookingFlow uses the shared BookingContext to submit and persist bookings across the app/session.
// See BookingContext.js for details on sessionStorage and shared state used in AdminPortal.
import { useBookingContext } from "../BookingContext";

// Booking purposes with simple icons
const PURPOSES = [
  { value: "sports", label: "Sports Events", icon: "🏟️" },
  { value: "movies", label: "Movies & Shows", icon: "🎬" },
  { value: "travel", label: "Travel (Bus, Train, Flights)", icon: "✈️" },
  { value: "venues", label: "Event Venues", icon: "🏨" },
  { value: "resorts", label: "Resorts", icon: "🌴" },
  { value: "local", label: "Local Events", icon: "📣" },
  { value: "concerts", label: "Concerts", icon: "🎶" }
];

// PUBLIC_INTERFACE
export default function BookingFlow() {
  /**
   * BookingFlow: Visually enhanced dynamic booking forms.
   * - Clean, flex-driven layout, mobile-friendly first
   * - Distinct section headings and subtle icons
   * - Accessible label+input design, clear button and focus states
   */
  const [currentPurpose, setCurrentPurpose] = useState(""); // blank until chosen
  const [formState, setFormState] = useState({});
  const { submitBooking } = useBookingContext();
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

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

  // Booking form submit handler (shared for all forms)
  function handleSubmit(e) {
    e.preventDefault();
    if (!currentPurpose || !formState) return;
    submitBooking(currentPurpose, formState);
    setSubmissionSuccess(true);
    setFormState({});
    setTimeout(() => setSubmissionSuccess(false), 2600);
  }

  // Render the booking form for the selected purpose
  function renderBookingForm() {
    // All forms: add onSubmit={handleSubmit}
    switch (currentPurpose) {
      case "sports":
        return (
          <form className="bookingflow-form" autoComplete="off" aria-label="Book Sports Event Tickets" onSubmit={handleSubmit}>
            <FormHeading icon="🏟️">Book Sports Event Tickets</FormHeading>
            <Field label="Sport Type">
              <select
                name="sportType"
                className="bookingflow-select"
                value={formState.sportType || ""}
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="Choose sport type"
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
                className="bookingflow-input"
                value={formState.eventName || ""}
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="Event name"
              />
            </Field>
            <Field label="City">
              <input
                type="text"
                name="city"
                className="bookingflow-input"
                value={formState.city || ""}
                placeholder="e.g. Mumbai"
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="City"
              />
            </Field>
            <Field label="Preferred Date">
              <input
                type="date"
                name="date"
                className="bookingflow-input"
                value={formState.date || ""}
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="Preferred date"
              />
            </Field>
            <SubmitButton />
          </form>
        );
      case "movies":
        return (
          <form className="bookingflow-form" autoComplete="off" aria-label="Book Movies & Shows" onSubmit={handleSubmit}>
            <FormHeading icon="🎬">Book Movies & Shows</FormHeading>
            <Field label="Movie/Show Title">
              <input
                type="text"
                name="title"
                placeholder="e.g. Oppenheimer"
                className="bookingflow-input"
                value={formState.title || ""}
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="Movie or show title"
              />
            </Field>
            <Field label="Cinema/Theatre">
              <input
                type="text"
                name="cinema"
                placeholder="e.g. PVR Icon"
                className="bookingflow-input"
                value={formState.cinema || ""}
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="Cinema or theatre"
              />
            </Field>
            <Field label="City">
              <input
                type="text"
                name="city"
                className="bookingflow-input"
                value={formState.city || ""}
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="City"
              />
            </Field>
            <Field label="Date">
              <input
                type="date"
                name="date"
                className="bookingflow-input"
                value={formState.date || ""}
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="Date"
              />
            </Field>
            <Field label="Show Time">
              <input
                type="time"
                name="showtime"
                className="bookingflow-input"
                value={formState.showtime || ""}
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="Show time"
              />
            </Field>
            <SubmitButton />
          </form>
        );
      case "travel":
        return (
          <form className="bookingflow-form" autoComplete="off" aria-label="Book Travel Ticket" onSubmit={handleSubmit}>
            <FormHeading icon="✈️">Book Travel Ticket</FormHeading>
            <Field label="Travel Mode">
              <select
                name="mode"
                value={formState.mode || ""}
                onChange={handleInputChange}
                required
                className="bookingflow-select"
                tabIndex={0}
                aria-label="Travel mode"
              >
                <option value="">Select</option>
                <option>Bus</option>
                <option>Train</option>
                <option>Flight</option>
              </select>
            </Field>
            <Field label="From">
              <input
                type="text"
                name="from"
                value={formState.from || ""}
                placeholder="Source City"
                className="bookingflow-input"
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="From city"
              />
            </Field>
            <Field label="To">
              <input
                type="text"
                name="to"
                value={formState.to || ""}
                placeholder="Destination City"
                className="bookingflow-input"
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="To city"
              />
            </Field>
            <Field label="Date of Journey">
              <input
                type="date"
                name="date"
                value={formState.date || ""}
                className="bookingflow-input"
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="Date of journey"
              />
            </Field>
            <Field label="Preferred Time">
              <input
                type="time"
                name="time"
                value={formState.time || ""}
                className="bookingflow-input"
                onChange={handleInputChange}
                required
                tabIndex={0}
                aria-label="Preferred time"
              />
            </Field>
            <SubmitButton />
          </form>
        );
      case "venues":
        return (
          <form className="bookingflow-form" autoComplete="off" aria-label="Book Event Venue" onSubmit={handleSubmit}>
            <FormHeading icon="🏨">Book Event Venue</FormHeading>
            <Field label="Venue Name">
              <input
                type="text"
                name="venue"
                value={formState.venue || ""}
                onChange={handleInputChange}
                placeholder="e.g. ICC Convention Centre"
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Venue name"
              />
            </Field>
            <Field label="City">
              <input
                type="text"
                name="city"
                value={formState.city || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="City"
              />
            </Field>
            <Field label="Date for Event">
              <input
                type="date"
                name="date"
                value={formState.date || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Date for event"
              />
            </Field>
            <Field label="No. of Guests">
              <input
                type="number"
                name="guests"
                value={formState.guests || ""}
                onChange={handleInputChange}
                min={1}
                placeholder="e.g. 100"
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Number of guests"
              />
            </Field>
            <SubmitButton />
          </form>
        );
      case "resorts":
        return (
          <form className="bookingflow-form" autoComplete="off" aria-label="Book a Resort" onSubmit={handleSubmit}>
            <FormHeading icon="🌴">Book a Resort</FormHeading>
            <Field label="Resort Name">
              <input
                type="text"
                name="resort"
                value={formState.resort || ""}
                onChange={handleInputChange}
                placeholder="e.g. Palm Beach Resort"
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Resort name"
              />
            </Field>
            <Field label="City / Location">
              <input
                type="text"
                name="city"
                value={formState.city || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="City or location"
              />
            </Field>
            <Field label="Check-In Date">
              <input
                type="date"
                name="checkin"
                value={formState.checkin || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Check-In date"
              />
            </Field>
            <Field label="Check-Out Date">
              <input
                type="date"
                name="checkout"
                value={formState.checkout || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Check-Out date"
              />
            </Field>
            <Field label="No. of Rooms">
              <input
                type="number"
                name="rooms"
                min={1}
                value={formState.rooms || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Number of rooms"
              />
            </Field>
            <SubmitButton />
          </form>
        );
      case "local":
        return (
          <form className="bookingflow-form" autoComplete="off" aria-label="Book Local Event" onSubmit={handleSubmit}>
            <FormHeading icon="📣">Book Local Event</FormHeading>
            <Field label="Event Name">
              <input
                type="text"
                name="event"
                value={formState.event || ""}
                onChange={handleInputChange}
                placeholder="e.g. Food Festival"
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Event name"
              />
            </Field>
            <Field label="City">
              <input
                type="text"
                name="city"
                value={formState.city || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="City"
              />
            </Field>
            <Field label="Event Date">
              <input
                type="date"
                name="date"
                value={formState.date || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Event date"
              />
            </Field>
            <SubmitButton />
          </form>
        );
      case "concerts":
        return (
          <form className="bookingflow-form" autoComplete="off" aria-label="Book Concert Ticket" onSubmit={handleSubmit}>
            <FormHeading icon="🎶">Book Concert Ticket</FormHeading>
            <Field label="Concert Name">
              <input
                type="text"
                name="concert"
                value={formState.concert || ""}
                onChange={handleInputChange}
                placeholder="e.g. Taylor Swift Eras Tour"
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Concert name"
              />
            </Field>
            <Field label="City">
              <input
                type="text"
                name="city"
                value={formState.city || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="City"
              />
            </Field>
            <Field label="Date">
              <input
                type="date"
                name="date"
                value={formState.date || ""}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Date"
              />
            </Field>
            <Field label="Number of Tickets">
              <input
                type="number"
                name="tickets"
                value={formState.tickets || ""}
                min={1}
                onChange={handleInputChange}
                className="bookingflow-input"
                required
                tabIndex={0}
                aria-label="Number of tickets"
              />
            </Field>
            <SubmitButton />
          </form>
        );
      default:
        return null;
    }
  }

  // Heading with optional icon
  function FormHeading({ children, icon }) {
    return (
      <div className="bookingflow-heading">
        {icon && <span className="icon">{icon}</span>}
        <span>{children}</span>
      </div>
    );
  }

  // Accessible Field wrapper
  function Field({ label, children }) {
    return (
      <div className="bookingflow-field">
        <span>{label}</span>
        {children}
      </div>
    );
  }

  // Styled "Book Now" submit button and success feedback
  function SubmitButton() {
    return (
      <>
        <button
          type="submit"
          className="bookingflow-btn"
          tabIndex={0}
          aria-disabled="false"
          title="Submit booking"
          style={{
            cursor: "pointer",
            opacity: 1,
            background: "var(--kavia-orange)",
            color: "#fff"
          }}
        >
          Book Now
        </button>
        {submissionSuccess && (
          <div
            aria-live="polite"
            style={{
              marginTop: 8,
              color: "var(--accent)",
              fontWeight: 600,
              fontSize: "1.06em"
            }}
          >
            Booking submitted!
          </div>
        )}
      </>
    );
  }

  // Main UI layout
  return (
    <div className="bookingflow-root" style={{ position: "relative" }}>
      {/* Booking purpose (with additional icon) */}
      <section className="bookingflow-purpose-section" aria-label="Booking Purpose">
        <label htmlFor="purpose" className="bookingflow-label">
          <span className="bookingflow-sr-only">Select booking domain</span>
          Booking Purpose
        </label>
        <select
          id="purpose"
          className="bookingflow-select"
          aria-label="Choose booking purpose"
          value={currentPurpose}
          required
          onChange={handlePurposeChange}
        >
          <option value="">-- Select Purpose --</option>
          {PURPOSES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.icon + " "} {opt.label}
            </option>
          ))}
        </select>
      </section>
      {/* Render the relevant form for selected purpose */}
      {currentPurpose ? (
        <div className="bookingflow-form-card" aria-live="polite">{renderBookingForm()}</div>
      ) : null}
    </div>
  );
}
