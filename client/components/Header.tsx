import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 h-16 md:h-20">
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold text-pink-500 hover:text-pink-600 transition-colors cursor-pointer" onClick={() => {
          window.location.href = '/';
        }}>
          <div className="flex items-center gap-2">
            <img src="/cat.png" alt="Jenna" className="w-12 h-12" />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="/"
            className={`transition-colors ${
              location.pathname === '/' 
                ? 'text-primary font-bold' 
                : 'text-gray-800 hover:text-primary'
            }`}
          >
            {t('navigation.projects')}
          </a>
          <a
            href="/about"
            className={`transition-colors ${
              location.pathname === '/about' 
                ? 'text-primary font-bold' 
                : 'text-gray-800 hover:text-primary'
            }`}
          >
            {t('navigation.about')}
          </a>
          <a
            href="/contact"
            className={`transition-colors ${
              location.pathname === '/contact' 
                ? 'text-primary font-bold' 
                : 'text-gray-800 hover:text-primary'
            }`}
          >
            {t('navigation.contact')}
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="gray-800"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className={`text-left transition-colors py-2 text-lg font-medium ${
                  location.pathname === '/' 
                    ? 'text-primary font-bold' 
                    : 'text-gray-800 hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.projects')}
              </a>
              <a
                href="/about"
                className={`text-left transition-colors py-2 text-lg font-medium ${
                  location.pathname === '/about' 
                    ? 'text-primary font-bold' 
                    : 'text-gray-800 hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.about')}
              </a>
              <a
                href="/contact"
                className={`text-left transition-colors py-2 text-lg font-medium ${
                  location.pathname === '/contact' 
                    ? 'text-primary font-bold' 
                    : 'text-gray-800 hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.contact')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
