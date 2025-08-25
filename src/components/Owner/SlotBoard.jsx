import React, { useState } from "react";
import { FaPlus, FaSave, FaEdit, FaTrash, FaCar, FaTools, FaClock } from "react-icons/fa";

const SlotBoard = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      time: "12:00 PM",
      vehicle: "Sedan",
      work: "Full Service\nTire Rotation",
      isEditing: false,
      isBooked: true,
    },
    {
      id: 2,
      time: "02:00 PM",
      vehicle: "Motorcycle",
      work: "Oil Change",
      isEditing: false,
      isBooked: true,
    },
     {
      id: 3,
      time: "04:00 PM",
      vehicle: "",
      work: "",
      isEditing: false,
      isBooked: false,
    },
  ]);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      time: "New Slot",
      vehicle: "",
      work: "",
      isEditing: true,
      isBooked: false,
    };
    setCards([...cards, newCard]);
  };

  const handleChange = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, [field]: value } : card
      )
    );
  };

  const toggleEdit = (id) => {
    setCards((prev) =>
      prev.map((card) => {
        if (card.id === id) {
          // If the card is empty and we are saving, mark it as booked.
          const isNowBooked = !card.isEditing && card.vehicle && card.work;
          return { ...card, isEditing: !card.isEditing, isBooked: isNowBooked ? true : card.isBooked };
        }
        return card;
      })
    );
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  // Summary counts
  const total = cards.length;
  const booked = cards.filter((card) => card.isBooked).length;
  const empty = total - booked;

  return (
    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-lg mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Today's Slot Board</h1>
            <p className="text-gray-500">Manage your daily bookings and availability.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-md flex items-center justify-between">
                <h2 className="font-semibold">Total Slots</h2>
                <span className="font-bold text-2xl">{total}</span>
            </div>
            <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md flex items-center justify-between">
                <h2 className="font-semibold">Booked</h2>
                <span className="font-bold text-2xl">{booked}</span>
            </div>
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg shadow-md flex items-center justify-between">
                <h2 className="font-semibold">Available</h2>
                <span className="font-bold text-2xl">{empty}</span>
            </div>
        </div>

        {/* Slot Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`rounded-xl shadow-lg transition-all duration-300 flex flex-col ${
                card.isBooked ? "bg-white" : "bg-green-50"
              } ${card.isEditing ? 'ring-2 ring-indigo-500' : ''}`}
            >
              {/* Card Header */}
              <div className={`p-4 rounded-t-xl flex justify-between items-center ${card.isBooked ? 'bg-gray-200' : 'bg-green-200'}`}>
                  {card.isEditing ? (
                      <input
                        type="text"
                        value={card.time}
                        onChange={(e) => handleChange(card.id, "time", e.target.value)}
                        className="text-lg font-bold bg-transparent border-b-2 border-gray-400 focus:outline-none w-full"
                        placeholder="Time"
                      />
                  ) : (
                     <div className="flex items-center">
                        <FaClock className={`mr-2 ${card.isBooked ? 'text-gray-600' : 'text-green-800'}`} />
                        <h2 className="text-lg font-bold text-gray-800">{card.time}</h2>
                     </div>
                  )}
                   <span className={`px-3 py-1 text-xs font-semibold rounded-full ${card.isBooked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {card.isBooked ? "Booked" : "Available"}
                  </span>
              </div>
              
              {/* Card Body */}
              <div className="p-4 space-y-4 flex-grow">
                  <div className="flex items-start">
                    <FaCar className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                    {card.isEditing ? (
                        <input
                            type="text"
                            value={card.vehicle}
                            onChange={(e) => handleChange(card.id, "vehicle", e.target.value)}
                            className="w-full text-sm border px-2 py-1 rounded focus:outline-none"
                            placeholder="Vehicle Type (e.g., SUV)"
                        />
                    ) : (
                        <p className="text-gray-700">{card.vehicle || <span className="text-gray-400">No vehicle</span>}</p>
                    )}
                  </div>
                   <div className="flex items-start">
                    <FaTools className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                    {card.isEditing ? (
                        <textarea
                            value={card.work}
                            onChange={(e) => handleChange(card.id, "work", e.target.value)}
                            className="w-full text-sm border px-2 py-1 rounded focus:outline-none resize-none"
                            rows={3}
                            placeholder="Services (e.g., Oil Change)"
                        />
                    ) : (
                        <p className="text-gray-700 whitespace-pre-line">{card.work || <span className="text-gray-400">No services</span>}</p>
                    )}
                  </div>
              </div>

              {/* Card Footer with actions */}
              <div className="p-3 bg-gray-50 rounded-b-xl flex justify-end items-center space-x-2">
                  <button
                    onClick={() => toggleEdit(card.id)}
                    className={`flex items-center px-3 py-1 rounded-md text-sm font-semibold transition-colors ${
                        card.isEditing 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                  >
                    {card.isEditing ? <FaSave className="mr-2" /> : <FaEdit className="mr-2" />}
                    {card.isEditing ? "Save" : "Edit"}
                  </button>
                  {!card.isBooked && (
                      <button
                        onClick={() => deleteCard(card.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-md shadow-sm transition-transform hover:scale-105"
                      >
                        <FaTrash />
                      </button>
                  )}
              </div>
            </div>
          ))}

          {/* Add New Card Button */}
          <button
            onClick={addCard}
            className="border-2 border-dashed border-gray-400 rounded-xl flex flex-col justify-center items-center text-gray-500 hover:bg-gray-200 hover:border-solid hover:text-gray-700 transition-all duration-300 min-h-[200px]"
          >
            <FaPlus className="text-3xl mb-2" />
            <span className="font-semibold">Add New Slot</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlotBoard;
