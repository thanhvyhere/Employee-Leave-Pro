import React from 'react';
import './Home.css'; // CSS chứa animation zoom

export default function Home() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.pinimg.com/1200x/be/c5/46/bec546cad93c2bbe0bb7ab53c70ca7a1.jpg')`, // Thay URL này nếu muốn ảnh khác
      }}
    >
      {/* Lớp phủ làm tối và mờ */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col items-center text-white p-10 rounded-xl">
        <h1 className="text-6xl font-extrabold mb-6 text-center">
          Welcome to Becabigo!
        </h1>
        <a
          href="/login"
          className="pulse-zoom text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
            focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold 
            rounded-xl text-lg px-8 py-4"
        >
          Go to Sign in
        </a>
      </div>
    </div>
  );
}
