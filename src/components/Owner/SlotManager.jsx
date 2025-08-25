import React, { useState, useEffect } from "react";
import {
  FaPlus,
  FaTrash,
  FaEdit,
  FaSave,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// --- MOCK DATA ---
const defaultSlots = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  time: "",
  isBooked: false,
}));

const hardcodedBookings = {
  "2025-08-18": [
    { id: 1, time: "12:00 PM", isBooked: true },
    { id: 2, time: "01:00 PM", isBooked: true },
  ],
  "2025-08-19": [{ id: 1, time: "10:00 AM", isBooked: true }],
  "2025-08-22": [{ id: 1, time: "12:00 PM", isBooked: true }],
};

const formatDate = (dateObj) => dateObj.toISOString().split("T")[0];

// --- MAIN COMPONENT ---
const SlotManager = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-08-18"));
  const [slotsData, setSlotsData] = useState({ ...hardcodedBookings });

  const selectedDateKey = formatDate(selectedDate);
  const slotsForDate = slotsData[selectedDateKey] || [];

  useEffect(() => {
    setSlotsData((prev) => {
      if (!prev[selectedDateKey]) {
        return { ...prev, [selectedDateKey]: [...defaultSlots] };
      }
      return prev;
    });
  }, [selectedDate, selectedDateKey]);

  const handleAddSlot = () => {
    setSlotsData((prev) => ({
      ...prev,
      [selectedDateKey]: [
        ...prev[selectedDateKey],
        { id: Date.now(), time: "", isBooked: false, isEditing: true },
      ],
    }));
  };

  const handleChange = (id, field, value) => {
    setSlotsData((prev) => ({
      ...prev,
      [selectedDateKey]: prev[selectedDateKey].map((slot) =>
        slot.id === id ? { ...slot, [field]: value } : slot
      ),
    }));
  };

  const handleDelete = (id) => {
    setSlotsData((prev) => ({
      ...prev,
      [selectedDateKey]: prev[selectedDateKey].filter((slot) => slot.id !== id),
    }));
  };

  const toggleEdit = (id) => {
    setSlotsData((prev) => ({
      ...prev,
      [selectedDateKey]: prev[selectedDateKey].map((slot) =>
        slot.id === id ? { ...slot, isEditing: !slot.isEditing } : slot
      ),
    }));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter") {
      toggleEdit(id);
    }
  };

  const bookedSlots = slotsForDate.filter((slot) => slot.isBooked).length;
  const totalSlots = slotsForDate.length;
  const emptySlots = totalSlots - bookedSlots;

  return (
    <div className="bg-gray-50 p-4 sm:p-6 lg:p-10 rounded-lg mt-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Manage Slots
          </h1>
          <p className="text-gray-500 mt-2">
            Add, edit, or remove time slots for any date.
          </p>
        </div>

        {/* --- Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- Left Column --- */}
          <div className="space-y-6">
            {/* Date Picker (popup mode) */}
            <div className="bg-white border rounded-xl shadow-md p-5">
              <label className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                <FaCalendarAlt className="mr-3 text-indigo-500" />
                Select Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                dateFormat="yyyy-MM-dd"
                placeholderText="YYYY-MM-DD"
              />
            </div>

            {/* Summary */}
            <div className="bg-white border rounded-xl shadow-md p-5 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Summary for {selectedDate.toLocaleDateString()}
              </h3>
              <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-sm flex items-center justify-between">
                <span className="font-semibold">Total Slots</span>
                <span className="font-bold text-xl">{totalSlots}</span>
              </div>
              <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-sm flex items-center justify-between">
                <span className="font-semibold">Booked</span>
                <span className="font-bold text-xl">{bookedSlots}</span>
              </div>
              <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg shadow-sm flex items-center justify-between">
                <span className="font-semibold">Available</span>
                <span className="font-bold text-xl">{emptySlots}</span>
              </div>
            </div>
          </div>

          {/* --- Right Column: Slots --- */}
          <div className="lg:col-span-2">
            <div className="bg-white border rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Time Slots
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {slotsForDate.length > 0 ? (
                  slotsForDate.map((slot) => (
                    <div
                      key={slot.id}
                      className={`rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 border shadow-sm hover:shadow-lg ${
                        slot.isBooked
                          ? "bg-green-600 text-white border-green-500"
                          : "bg-gray-50 border-gray-200"
                      } ${slot.isEditing ? "ring-2 ring-indigo-500" : ""}`}
                    >
                      <FaClock
                        className={`mb-2 text-2xl ${
                          slot.isBooked ? "text-white" : "text-indigo-500"
                        }`}
                      />

                      {slot.isEditing ? (
                        <input
                          type="text"
                          autoFocus
                          value={slot.time}
                          onChange={(e) =>
                            handleChange(slot.id, "time", e.target.value)
                          }
                          onKeyDown={(e) => handleKeyDown(e, slot.id)}
                          onBlur={() => toggleEdit(slot.id)}
                          className="text-sm text-gray-800 px-2 py-1 rounded w-full text-center border border-gray-300 focus:ring-indigo-500"
                          placeholder="e.g., 2:30 PM"
                        />
                      ) : (
                        <span
                          className={`font-bold text-lg ${
                            slot.isBooked ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {slot.time || "N/A"}
                        </span>
                      )}

                      <span
                        className={`text-xs mt-1 ${
                          slot.isBooked ? "text-green-100" : "text-gray-500"
                        }`}
                      >
                        {slot.isBooked ? "Booked" : "Available"}
                      </span>

                      {!slot.isBooked && (
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => toggleEdit(slot.id)}
                            className="bg-gray-200 hover:bg-indigo-500 hover:text-white text-gray-600 p-2 rounded-full text-xs transition-colors"
                          >
                            {slot.isEditing ? <FaSave /> : <FaEdit />}
                          </button>
                          <button
                            onClick={() => handleDelete(slot.id)}
                            className="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-600 p-2 rounded-full text-xs transition-colors"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-10 text-gray-500">
                    <p>No slots scheduled for this day.</p>
                    <p className="text-sm">
                      Click <span className="font-semibold">Add Slot</span> to
                      get started.
                    </p>
                  </div>
                )}

                {/* Add Slot Card */}
                <button
                  onClick={handleAddSlot}
                  className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-500 transition-all duration-300 min-h-[120px]"
                >
                  <FaPlus className="text-2xl" />
                  <span className="mt-2 text-sm font-semibold">Add Slot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotManager;
