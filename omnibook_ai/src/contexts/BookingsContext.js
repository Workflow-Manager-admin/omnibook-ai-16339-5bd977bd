import React, { createContext, useContext, useState, useMemo } from "react";

/**
 * BookingsContext shape:
 *   bookings: Array of booking objects { id, typeLabel, data }
 *   addBooking(booking): Adds a new booking entry
 *   getBookings(): Returns all bookings
 */
const BookingsContext = createContext({
  bookings: [],
  addBooking: () => {},
  getBookings: () => [],
});

// PUBLIC_INTERFACE
export function useBookings() {
  /**
   * Hook to access bookings context (bookings array, addBooking, getBookings)
   */
  return useContext(BookingsContext);
}

// PUBLIC_INTERFACE
/**
 * BookingsProvider
 * Wraps children with bookings shared state and context methods.
 */
function BookingsProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  // PUBLIC_INTERFACE
  const addBooking = (booking) => {
    setBookings((prev) => [
      ...prev,
      { ...booking, id: booking.id || Date.now() }
    ]);
  };

  // PUBLIC_INTERFACE
  const getBookings = () => bookings;

  const value = useMemo(() => ({ bookings, addBooking, getBookings }), [bookings]);

  return (
    <BookingsContext.Provider value={value}>
      {children}
    </BookingsContext.Provider>
  );
}

export default BookingsProvider;
