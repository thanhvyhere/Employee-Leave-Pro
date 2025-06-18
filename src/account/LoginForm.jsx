import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { useNavigate } from "react-router-dom";
import { login } from "../axios/account";
>>>>>>> 4c497a4e8c7eeb6503b856b7c033ba305f654319
export default function LoginForm() {
  const [showError, setShowError] = useState(false);
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log(username);

    const result = await login(username, password);
    if (result.role && result.token) {
      localStorage.setItem('token', result.token); 
      navigate(`/${result.role}`);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 flex items-center justify-center">
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
      <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 w-full max-w-xl">
        <div className="mt-8 mb-8 sm:mx-auto sm:w-full border border-gray-300 rounded-lg p-10 shadow bg-white bg-opacity-90 backdrop-blur-md">
          <div className="sm:mx-auto sm:w-full text-center">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-900">
                Email address or username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-3 text-lg focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-base font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-3 text-lg focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-3 text-lg font-semibold text-white hover:bg-indigo-500"
              >
              Sign in
              </button>
              <Link to="/employee" className="text-blue-600 underline">Sign in</Link>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            You forgot your password?{" "}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Get password
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
