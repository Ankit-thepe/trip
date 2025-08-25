import React, { useState, useEffect } from 'react';

const DateAndTimePicker = () => {
  // Hardcoded available slots data
  const availableSlotsData = {
    '2025-06-10': ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'],
    '2025-06-11': ['9:00 AM', '11:00 AM', '3:00 PM'],
    '2025-06-12': ['10:00 AM', '1:00 PM', '4:00 PM'],
    '2025-06-13': ['9:00 AM', '2:00 PM'],
    '2025-06-14': ['10:00 AM', '3:00 PM'],
    '2025-06-15': ['11:00 AM', '2:00 PM', '4:00 PM'],
    '2025-07-01': ['9:00 AM', '10:00 AM', '1:00 PM'],
    '2025-07-02': ['11:00 AM', '2:00 PM'],
    // Add more dates as needed
  };

  // Get today's date in YYYY-MM-DD format
  const getTodayFormattedDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

  // State for the selected date (for booking)
  const [selectedDate, setSelectedDate] = useState(getTodayFormattedDate());
  // State for the month/year currently displayed in the calendar
  const [displayDate, setDisplayDate] = useState(new Date());
  // State to control calendar visibility
  const [showCalendar, setShowCalendar] = useState(false);
  // State for the selected time slot
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Calculate current month and year for calendar display
  const currentMonth = displayDate.getMonth();
  const currentYear = displayDate.getFullYear();

  // Generate days for the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 for Sunday, 6 for Saturday

  // Generate calendar days array
  const calendarDays = [];
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Get available slots for the selected date
  const availableSlotsForDate = selectedDate
    ? (availableSlotsData[selectedDate] || []).map(time => ({ time }))
    : [];

  // Handle date selection from calendar
  const handleDateClick = (day) => {
    if (day) {
      const newDate = new Date(currentYear, currentMonth, day);
      const formattedDate = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')}`;
      setSelectedDate(formattedDate);
      setSelectedTimeSlot(null); // Reset time slot when date changes
      setShowCalendar(false); // Hide calendar after selection
    }
  };

  // Handle navigation to previous month
  const goToPreviousMonth = () => {
    setDisplayDate(new Date(currentYear, currentMonth - 1, 1));
  };

  // Handle navigation to next month
  const goToNextMonth = () => {
    setDisplayDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Format month and year for display
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const displayMonthYear = `${monthNames[currentMonth]} ${currentYear}`;

  return (
    <div className="w-full h-full bg-gray rounded-xl shadow-2xl p-10 font-sans border border-gray-200">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book Your Slot</h3>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Date Input and Calendar Section */}
        <div className="w-full md:w-1/2 relative">
          <label htmlFor="date-input" className="block text-lg font-semibold text-gray-700 mb-2">Select Date</label>
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
            <input
              type="text"
              id="date-input"
              value={selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
              readOnly // Make it read-only to encourage calendar selection for consistency
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex-grow p-3 rounded-l-lg focus:outline-none text-gray-800 placeholder-gray-400 bg-white cursor-pointer"
              placeholder="Select a date"
            />
            <button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label="Toggle calendar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Calendar Dropdown */}
          {showCalendar && (
            <div className="absolute z-20 mt-3 bg-white border border-gray-300 rounded-lg shadow-xl p-5 w-full md:min-w-[320px] lg:min-w-[350px]">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Previous month"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h4 className="text-xl font-bold text-gray-800">
                  {displayMonthYear}
                </h4>
                <button
                  onClick={goToNextMonth}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Next month"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => {
                  const dayDate = day ? new Date(currentYear, currentMonth, day) : null;
                  const isToday = dayDate && dayDate.toDateString() === new Date().toDateString();
                  const isSelected = dayDate && selectedDate === `${dayDate.getFullYear()}-${String(dayDate.getMonth() + 1).padStart(2, '0')}-${String(dayDate.getDate()).padStart(2, '0')}`;

                  return (
                    <button
                      key={index}
                      onClick={() => handleDateClick(day)}
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-base font-medium
                        ${day ? 'cursor-pointer' : 'cursor-default'}
                        ${isSelected
                          ? 'bg-blue-600 text-white shadow-md'
                          : isToday
                            ? 'border-2 border-blue-500 text-blue-700 bg-blue-50'
                            : day
                              ? 'hover:bg-gray-100 text-gray-700'
                              : 'text-transparent'}
                      `}
                      disabled={!day}
                    >
                      {day || ''}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Time Slots Section */}
        <div className="w-full md:w-1/2">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">
            {selectedDate
              ? `Available Slots for ${new Date(selectedDate).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'long',
                  day: 'numeric',
                })}`
              : 'Select a date to view slots'}
          </h4>

          <div className="flex flex-wrap gap-3">
            {selectedDate ? (
              availableSlotsForDate.length > 0 ? (
                availableSlotsForDate.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => setSelectedTimeSlot(slot.time)}
                    className={`px-5 py-2 rounded-lg border text-base font-medium transition-all duration-200
                      ${selectedTimeSlot === slot.time
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:bg-blue-50'}
                    `}
                  >
                    {slot.time}
                  </button>
                ))
              ) : (
                <p className="text-gray-500 text-base mt-2">No slots available for this date. Please select another date.</p>
              )
            ) : (
              <p className="text-gray-500 text-base mt-2">Please select a date to view available slots.</p>
            )}
          </div>

          {/* Display selected slot confirmation */}
          {selectedDate && selectedTimeSlot && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg shadow-sm">
              <p className="font-semibold">Selected Slot:</p>
              <p className="text-lg">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedTimeSlot}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateAndTimePicker;
