// components/ConfirmModal.js
import React, { useState, useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function ConfirmModal({ show, onClose, onConfirm, title, message }) {
  const [reason, setReason] = useState("");

  useEffect(() => {
    if (show) setReason(""); // Reset input khi mở lại
  }, [show]);

  const handleConfirm = () => {
    if (!reason.trim()) {
      alert("Please provide a reason.");
      return;
    }
    onConfirm(reason); // Gửi lý do reject ra ngoài
    onClose();
  };

  if (!show) return null;

  return (
    <Dialog open={show} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-md shadow-xl w-full max-w-md p-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-2 rounded-full">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-lg font-semibold text-gray-800">
              {title || "Confirm Action"}
            </DialogTitle>
          </div>

          {message && (
            <p className="mt-3 text-sm text-gray-600">{message}</p>
          )}

          {/* Reason Input */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Reason for rejection</label>
            <textarea
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Enter your reason..."
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-500 text-sm"
            >
              Reject
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
