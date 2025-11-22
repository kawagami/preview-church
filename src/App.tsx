// src\App.tsx

import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* 導覽列 */}
      <nav className="bg-white shadow p-4">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Link className="text-blue-600 hover:underline" to="/">Home</Link>
          <span className="text-gray-400">|</span>
          <Link className="text-blue-600 hover:underline" to="/about">About</Link>
        </div>
      </nav>

      {/* 主要內容區域 */}
      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
}
