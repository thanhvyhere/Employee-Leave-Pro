import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function RequestDayoff({ employee, totalDays, remainingDays, onRequest, onViewList }) {
  const [selectedDates, setSelectedDates] = useState([]);
  const [reason, setReason] = useState("");

  const toggleDate = (date) => {
    const isSelected = selectedDates.some(d => d.toDateString() === date.toDateString());
    if (isSelected) {
      setSelectedDates(selectedDates.filter(d => d.toDateString() !== date.toDateString()));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="bg-blue-100 text-center py-3 rounded mb-6">
        <h1 className="text-[#13467E] font-semibold text-lg">Request Day Off</h1>
      </div>

      {/* Calendar */}
      <div className="flex justify-center relative z-10 mb-[200px]" style={{ minHeight: "420px" }}>
        <div className="inline-block scale-[1.7] origin-top">
          <DatePicker
            selected={null}
            onChange={toggleDate}
            inline
            highlightDates={selectedDates}
            dayClassName={date =>
              selectedDates.find(d => d.toDateString() === date.toDateString())
                ? "bg-blue-300 rounded-full"
                : undefined
            }
          />
        </div>
      </div>
      {/* Selected Dates + Reason */}
      <div className="mb-6">
        <h1 className="text-[#13467E] font-semibold text-lg mb-1">Selected day-off</h1>
        <div className="selected-dayoff text-sm text-gray-700 mb-4">
          {selectedDates.length > 0 ? (
            <ul className=" list-inside text-lg">
              {selectedDates
                .sort((a, b) => a - b)
                .map((date, index) => (
                  <li key={index}>{format(date, "dd/MM/yyyy")}</li>
                ))}
            </ul>
          ) : (
            <p className="text-lg">No days selected.</p>
          )}
        </div>

        <h1 className="text-[#13467E] font-semibold text-lg mb-1">Reason</h1>
        <textarea
          id="reason"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter your reason for the day(s) off"
        />
      </div>

      {/* Buttons */}
      <div className="flex w-full gap-4">
        <button
          type="button"
          className="flex-1 border-2 border-[#2F8AC3] text-[#2F8AC3] font-medium py-3 rounded hover:bg-blue-50 text-center"
          onClick={onViewList}
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-[#2F8AC3] text-white font-medium py-3 rounded hover:bg-blue-500 text-center"
          onClick={() => onRequest({ dates: selectedDates, reason })}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
