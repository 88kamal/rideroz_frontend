import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar CSS

const BookingsCalendar = ({ bookings }) => {
  const [date, setDate] = useState(new Date());

  // Helper function to normalize the date (set time to midnight)
  const normalizeDate = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const normalizedDate = normalizeDate(date);

      for (let booking of bookings) {
        const startDate = normalizeDate(new Date(booking.startDate));
        const endDate = normalizeDate(new Date(booking.endDate));

        // Check if the normalized date falls within the booking range
        if (normalizedDate >= startDate && normalizedDate <= endDate) {
          return 'booked-tile';  // Apply class if date is booked
        }
      }
    }
    return null;
  };

  return (
    <div className=' mb-4'>
      <h3>Vehicle Bookings</h3>
      {/* <pre>{JSON.stringify(bookings, null, 2)}</pre> */}
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName} // Apply custom class to booked dates
      />
    </div>
  );
};

export default BookingsCalendar;
