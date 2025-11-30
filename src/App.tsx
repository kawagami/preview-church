// src\App.tsx

import { Outlet } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import NavLink from "./components/NavLink";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const buttonText = theme === 'dark' ? '切換到淺色模式 ☀️' : '切換到黑暗模式 🌙';

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col transition-colors duration-300">

      <nav className="bg-white dark:bg-gray-800 shadow dark:shadow-md p-4 transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex items-center gap-4">

          <NavLink to="/">Home</NavLink>
          <span className="text-gray-400">|</span>
          <NavLink to="/about">About</NavLink>

          <div className="flex-1"></div>

          <ThemeToggleButton onClick={toggleTheme}>
            {buttonText}
          </ThemeToggleButton>

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