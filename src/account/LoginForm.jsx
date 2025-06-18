import React, { useState } from "react";

export default function LoginForm() {
  const [showError, setShowError] = useState(false);

  const checkValidInfo = (e) => {
    e.preventDefault();
    // demo logic giả: luôn hiện lỗi nếu không nhập gì
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      setShowError(true);
    }
  };

  return (
    <>
      {/* POPUP ERROR */}
      {showError && (
        <div
          id="error-modal"
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/40"
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 4h.01" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Login Error</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Incorrect username or password. Please try again.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowError(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FORM */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md border border-gray-300 rounded-md p-6 shadow">
          <form onSubmit={checkValidInfo} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address or username
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="raw_password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
              Sign in
              </button>
              <Link to="/employee" className="text-blue-600 underline">Sign in</Link>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            You forgot your password?{" "}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Get password
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
