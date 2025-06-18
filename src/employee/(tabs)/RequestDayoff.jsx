import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function RequestDayoff({ employee, totalDays, remainingDays, onRequest, onViewList }) {
  const [selectedDates, setSelectedDates] = useState([]); // chọn nhiều ngày
  const [reason, setReason] = useState("");

  const toggleDate = (date) => {
    const isSelected = selectedDates.some(d => d.toDateString() === date.toDateString());
    if (isSelected) {
      // bỏ chọn ngày nếu đã có
      setSelectedDates(selectedDates.filter(d => d.toDateString() !== date.toDateString()));
    } else {
      // thêm ngày mới
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <div className="p-4">
      <div className="bg-blue-100 text-center py-3 rounded mb-6">
        <h1 className="text-[#13467E] font-semibold text-lg">Request Day Off</h1>
      </div>

      <div>
        <div className="mb-6 text-center">
          <DatePicker
            selected={null} // không làm nổi bật ngày nào
            onChange={toggleDate}
            inline
            highlightDates={selectedDates}
            dayClassName={date =>
              selectedDates.find(d => d.toDateString() === date.toDateString())
                ? "bg-blue-300 rounded-full "
                : undefined
            }
          />
        </div>

        <div className="mb-6">
          <h1 className="text-[#13467E] font-semibold text-lg mb-1">Selected dayoff</h1>
          <div className="selected-dayoff text-sm text-gray-700 mb-4">
            {selectedDates.length > 0 ? (
              <ul className="list-none list-inside">
                {selectedDates
                  .sort((a, b) => a - b)
                  .map((date, index) => (
                    <li key={index}>{format(date, "dd/MM/yyyy")}</li>
                  ))}
              </ul>
            ) : (
              <p>No days selected.</p>
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
          ></textarea>
        </div>
      </div>

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
