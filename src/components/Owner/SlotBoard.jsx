import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const SlotBoard = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      time: "12pm",
      vehicle: "Car",
      work: "repair\nwashing\noiling",
      isEditing: false,
      isBooked: true,
    },
    {
      id: 2,
      time: "2pm",
      vehicle: "Bike",
      work: "engine check\ncleaning",
      isEditing: false,
      isBooked: true,
    },
  ]);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      time: "",
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
      prev.map((card) =>
        card.id === id ? { ...card, isEditing: !card.isEditing } : card
      )
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
    <div className="flex flex-col items-center justify-center pb-3 bg-gray-100 p-5 mt-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-white bg-teal-500 py-4 rounded-md shadow-md w-full">
        Todays Slots
      </h1>
      {/* Summary */}
      <div className="flex gap-6 mb-4">
        <div className="text-blue-600 bg-white border-2 border-blue-600 p-2 rounded font-semibold ">
          Total Slots: <span className="font-bold">{total}</span>
        </div>
        <div className="text-green-600 bg-white border-2 border-green-600 p-2 rounded font-semibold">
          Booked: <span className="font-bold">{booked}</span>
        </div>
        <div className="text-orange-500 bg-white border-2 border-orange-600 p-2 rounded font-semibold">
          Empty: <span className="font-bold">{empty}</span>
        </div>
      </div>

      <div className="p-4 border-4 border-blue-400 bg-white rounded-lg shadow-md w-[950px] overflow-hidden">
        <div className="flex min-w-[950px] ">
          {/* Left Labels */}
          <div className="min-w-[150px] border-2 rounded border-gray-400 flex-shrink-0 bg-gray-100">
            <div className="p-2 border-b text-center font-semibold">Slots</div>
            <div className="p-2 border-b text-center text-sm">Vehicle</div>
            <div className="p-2 text-center text-sm">Work</div>
          </div>

          {/* Card Section with scroll if > 5 cards */}
          <div className="flex flex-grow overflow-x-auto no-scrollbar">
            <div className="flex w-max">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`border ${
                    card.isBooked ? "border-2 border-green-500" : "border-2 border-orange-400"
                  } bg-white mx-1 px-3 py-2 w-[160px] flex-shrink-0 shadow-sm rounded-md flex flex-col justify-center items-center 
  hover:shadow-lg hover:scale-105 transition-transform duration-200 m-1.5`}
                >
                  {/* Time */}
                  {card.isEditing ? (
                    <input
                      type="text"
                      value={card.time}
                      onChange={(e) =>
                        handleChange(card.id, "time", e.target.value)
                      }
                      className="text-center text-sm font-semibold border-b w-full focus:outline-none"
                      placeholder="Time"
                    />
                  ) : (
                    <div className="text-center text-sm font-semibold border-b pb-1 w-full">
                      {card.time}
                    </div>
                  )}

                  {/* Vehicle */}
                  {card.isEditing ? (
                    <input
                      type="text"
                      value={card.vehicle}
                      onChange={(e) =>
                        handleChange(card.id, "vehicle", e.target.value)
                      }
                      className="w-full text-sm mt-2 border px-2 py-1 rounded focus:outline-none text-center"
                      placeholder="Vehicle"
                    />
                  ) : (
                    <div className="text-center mt-2 text-sm">
                      {card.vehicle}
                    </div>
                  )}

                  {/* Work */}
                  {card.isEditing ? (
                    <textarea
                      value={card.work}
                      onChange={(e) =>
                        handleChange(card.id, "work", e.target.value)
                      }
                      className="w-full text-sm mt-2 border px-2 py-1 rounded focus:outline-none resize-none text-center"
                      rows={3}
                      placeholder="Work"
                    />
                  ) : (
                    <div className="text-center mt-2 text-sm whitespace-pre-line">
                      {card.work}
                    </div>
                  )}

                  {/* Buttons */}
                  {!card.isBooked && (
                    <div className="flex justify-between items-center mt-3 w-full">
                      <button
                        onClick={() => toggleEdit(card.id)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded shadow-sm text-xs transition-transform hover:scale-105"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteCard(card.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-600 px-2 py-1 rounded shadow-sm text-xs transition-transform hover:scale-105"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Add Card Button */}
              <button
                onClick={addCard}
                className="w-[100px] ml-2 flex flex-col justify-center items-center border border-gray-400 rounded hover:shadow-md transition-transform hover:scale-105 flex-shrink-0"
              >
                <FaPlus className="text-2xl text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotBoard;
