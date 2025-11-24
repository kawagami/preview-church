// src\App.tsx

import { Outlet, Link } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  const buttonText = theme === 'dark' ? '切換到淺色模式 ☀️' : '切換到黑暗模式 🌙';

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col transition-colors duration-300">

      <nav className="bg-white dark:bg-gray-800 shadow dark:shadow-md p-4 transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex items-center gap-4">

          <Link className="text-blue-600 dark:text-blue-400 hover:underline" to="/">Home</Link>
          <span className="text-gray-400">|</span>
          <Link className="text-blue-600 dark:text-blue-400 hover:underline" to="/about">About</Link>

          <div className="flex-1"></div>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-full text-sm font-medium 
                       bg-blue-500 hover:bg-blue-600 text-white 
                       dark:bg-indigo-500 dark:hover:bg-indigo-600 
                       transition-colors duration-300"
          >
            {buttonText}
          </button>

        </div>
      </nav>

      <main className="flex-1 p-6 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
}