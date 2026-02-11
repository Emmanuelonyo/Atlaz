"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <span className="material-symbols-outlined text-gray-600 text-[20px]">
          dark_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-yellow-400 text-[20px]">
          light_mode
        </span>
      )}
    </button>
  );
}
