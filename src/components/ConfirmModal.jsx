import React from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ConfirmModal({ show, onClose, onConfirm, title, message }) {
  if (!show) return null;

  return (
    <Dialog open={show} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-md shadow-xl w-full max-w-md p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-lg font-semibold text-gray-800">
              {title || "Approve Request"}
            </DialogTitle>
          </div>

          {message && (
            <p className="mt-4 text-sm text-gray-600">{message}</p>
          )}

          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-500 text-sm"
            >
              Approve
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
