import React, { useState, createContext, useContext, useEffect } from "react";

/**
 * PUBLIC_INTERFACE
 * BookingContext: Provides booking form submissions to both BookingFlow (for submission)
 * and AdminPortal (for display in History) during the user session.
 * Bookings are stored in sessionStorage for session-persistence.
 */
const BookingContext = createContext();

/**
 * Helper to load bookings from sessionStorage (if any)
 */
function loadBookingsFromSession() {
  const data = window.sessionStorage.getItem("omnibook-bookings");
  if (!data) return [];
  try {
    const arr = JSON.parse(data);
    // Defensive: validate it's an array of objects
    if (Array.isArray(arr)) return arr;
  } catch (e) {
    // ignore bad data
  }
  return [];
}

/**
 * Helper to save bookings to sessionStorage
 */
function saveBookingsToSession(bookings) {
  try {
    window.sessionStorage.setItem("omnibook-bookings", JSON.stringify(bookings));
  } catch (e) {
    // ignore
  }
}

/**
 * PUBLIC_INTERFACE
 * BookingProvider wraps the app and supplies booking data and submission method.
 * Uses sessionStorage for session-persistent booking history.
 */
export function BookingProvider({ children }) {
  // In-memory list of bookings for current session; initialized from sessionStorage
  const [bookings, setBookings] = useState(() => loadBookingsFromSession());

  // When bookings change, write to sessionStorage as well
  useEffect(() => {
    saveBookingsToSession(bookings);
  }, [bookings]);

  // PUBLIC_INTERFACE
  function submitBooking(purpose, formData) {
    // Stamp with unique id and session timestamp (as ISO for serialization consistency)
    setBookings(prev => {
      const updated = [
        ...prev,
        {
          id: Date.now() + Math.random(), // simple unique id
          timestamp: new Date().toISOString(),
          purpose,
          data: formData
        }
      ];
      // Redundant, but ensures sessionStorage stays in sync for out-of-band mutations
      saveBookingsToSession(updated);
      return updated;
    });
  }

  const value = {
    bookings,
    submitBooking
  };
  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useBookingContext() {
  return useContext(BookingContext);
}
