import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const defaultSlots = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  time: "",
  isBooked: false,
}));

const hardcodedBookings = {
  "2024-07-22": [
    { id: 1, time: "12:00", isBooked: true },
    { id: 2, time: "1:00", isBooked: true },
  ],
  "2024-07-23": [{ id: 1, time: "10:00", isBooked: true }],
  "2024-07-26": [{ id: 1, time: "12:00", isBooked: true }],
};

const formatDate = (dateObj) => dateObj.toISOString().split("T")[0];

const SlotManager = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
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
  }, [selectedDate]);

  const handleAddSlot = () => {
    setSlotsData((prev) => ({
      ...prev,
      [selectedDateKey]: [
        ...prev[selectedDateKey],
        { id: Date.now(), time: "", isBooked: false, isEditing: false, showControls: false },
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

  const handleDoubleClick = (id) => {
    setSlotsData((prev) => ({
      ...prev,
      [selectedDateKey]: prev[selectedDateKey].map((slot) =>
        slot.id === id ? { ...slot, showControls: true } : { ...slot, showControls: false }
      ),
    }));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter") {
      handleChange(id, "isEditing", false);
    }
  };

  const handleEdit = (id) => {
    handleChange(id, "isEditing", true);
  };

  const bookedSlots = slotsForDate.filter((slot) => slot.isBooked).length;
  const totalSlots = slotsForDate.length;
  const emptySlots = totalSlots - bookedSlots;

  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 p-6 space-y-4 mt-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-white bg-teal-500 py-4 rounded-md shadow-md w-full">
        Slots
      </h1>
      <div className="bg-white p-4 w-[950px] border-3 border-blue-600 rounded">
        {/* Header Summary */}
        <div className="text-blue-600 font-semibold space-x-4 mb-2">
          <span>Total Slots: {totalSlots}</span>
          <span className="text-green-600">Booked: {bookedSlots}</span>
          <span className="text-orange-600">Empty: {emptySlots}</span>
        </div>

        {/* Main UI */}
        <div className="flex items-start space-x-6">
          {/* Calendar */}
          <div className="relative flex items-center gap-2">
            <img src="/src/assets/images/calendar.png" alt="Calendar" className="w-6 h-6" />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="border px-4 py-2 rounded bg-white shadow focus:outline-none"
              calendarClassName="z-50"
              dateFormat="yyyy-MM-dd"
              popperPlacement="bottom-start"
              popperModifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [0, 10],
                  },
                },
              ]}
            />
          </div>

          {/* Slot Section */}
          <div className="space-y-3">
            <div>
              <div className="flex bg-white rounded shadow border-1 border-black overflow-x-auto w-[500px] mx-7">
                <div className="flex p-2 space-x-2">
                  {slotsForDate.map((slot) => (
                    <div
                      key={slot.id}
                      onDoubleClick={() => !slot.isBooked && handleDoubleClick(slot.id)}
                      className={`w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center text-white text-xs font-medium relative
                        ${slot.isBooked ? "bg-green-600" : "bg-gray-300"}
                        transition-transform hover:scale-105 hover:ring-2 hover:ring-blue-200`}
                    >
                      {slot.isEditing ? (
                        <input
                          type="text"
                          autoFocus
                          value={slot.time}
                          onChange={(e) => handleChange(slot.id, "time", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, slot.id)}
                          className="text-xs text-black px-1 py-0.5 rounded w-[45px] text-center"
                          placeholder="Time"
                        />
                      ) : (
                        <span className="text-center flex flex-col items-center">
                          <img src="/src/assets/images/time.png" alt="Time" className="w-4 h-4 mb-0.5" />
                          {slot.time}
                        </span>
                      )}

                      {!slot.isBooked && slot.showControls && !slot.isEditing && (
                        <div className="flex gap-1 mt-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(slot.id);
                            }}
                            className="bg-gray-300 hover:bg-gray-400 text-black px-1 py-0.5 text-xs rounded"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(slot.id);
                            }}
                            className="bg-red-300 hover:bg-red-400 text-white px-1 py-0.5 text-xs rounded"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Add Slot */}
                  <button
                    onClick={handleAddSlot}
                    className="w-[60px] h-[60px] rounded-md border-2 border-black text-black text-xl font-bold flex items-center justify-center hover:bg-gray-200 transition"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotManager;
