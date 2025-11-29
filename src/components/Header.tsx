import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center relative">
        <a href="#" className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
          RS
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</a>
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Projects</a>
          <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Skills</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Contact</a>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {mobileOpen ? <X className="w-5 h-5 text-gray-700 dark:text-gray-200" /> : <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />}
          </button>
        </div>
        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-100 hover:to-blue-50 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-blue-400" />
          ) : (
            <Moon className="w-5 h-5 text-blue-600" />
          )}
        </button>
        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="absolute right-6 top-full mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg md:hidden overflow-hidden">
            <nav className="flex flex-col">
              <a onClick={() => setMobileOpen(false)} href="#" className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Home</a>
              <a onClick={() => setMobileOpen(false)} href="#about" className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">About</a>
              <a onClick={() => setMobileOpen(false)} href="#projects" className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Projects</a>
              <a onClick={() => setMobileOpen(false)} href="#skills" className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Skills</a>
              <a onClick={() => setMobileOpen(false)} href="#contact" className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
