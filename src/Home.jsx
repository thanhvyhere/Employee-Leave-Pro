import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Trang chính</h1>
      <Link to="/login" className="text-blue-600 underline">Tới trang đăng nhập</Link>
    </div>
  );
}
