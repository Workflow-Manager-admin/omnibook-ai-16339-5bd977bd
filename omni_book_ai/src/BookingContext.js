import React, { useState, createContext, useContext } from "react";

/**
 * PUBLIC_INTERFACE
 * BookingContext: Provides booking form submissions to both BookingFlow (for submission)
 * and AdminPortal (for display in History) during the user session.
 */
const BookingContext = createContext();

/**
 * PUBLIC_INTERFACE
 * BookingProvider wraps the app and supplies booking data and submission method.
 */
export function BookingProvider({ children }) {
  // In-memory list of bookings for current session
  const [bookings, setBookings] = useState([]);

  // PUBLIC_INTERFACE
  function submitBooking(purpose, formData) {
    setBookings(prev => [
      ...prev,
      {
        id: Date.now() + Math.random(), // simple unique id
        timestamp: new Date(),
        purpose,
        data: formData
      }
    ]);
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
