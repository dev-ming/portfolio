import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const currentLanguage = i18n.resolvedLanguage?.startsWith("en") ? "en" : "ko";

  const changeLanguage = (language: "ko" | "en") => {
    i18n.changeLanguage(language);
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  };

  const LanguageSwitcher = () => (
    <div
      className="flex items-center rounded-full border border-gray-200 bg-white p-1 text-xs"
      aria-label={t("navigation.language")}
    >
      {(["ko", "en"] as const).map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => changeLanguage(language)}
          aria-pressed={currentLanguage === language}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            currentLanguage === language
              ? "bg-primary text-white"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );

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
                ? 'text-primary' 
                : 'text-gray-800 hover:text-primary font-light'
            }`}
          >
            {t('navigation.projects')}
          </a>
          <a
            href="/about"
            className={`transition-colors ${
              location.pathname === '/about' 
                ? 'text-primary' 
                : 'text-gray-800 hover:text-primary font-light'
            }`}
          >
            {t('navigation.about')}
          </a>
          <a
            href="/contact"
            className={`transition-colors ${
              location.pathname === '/contact' 
                ? 'text-primary' 
                : 'text-gray-800 hover:text-primary font-light'
            }`}
          >
            {t('navigation.contact')}
          </a>
          <LanguageSwitcher />
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#1f2937"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 h-[100vh] bg-black/20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-[100vh] w-80 max-w-[70vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">{t("navigation.menu")}</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="#1f2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="p-6">
            <div className="flex flex-col space-y-6">
              <a
                href="/"
                className={`text-left transition-colors py-3 text-lg font-medium ${
                  location.pathname === '/' 
                    ? 'text-primary' 
                    : 'text-gray-800 hover:text-primary font-light'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.projects')}
              </a>
              <a
                href="/about"
                className={`text-left transition-colors py-3 text-lg font-medium ${
                  location.pathname === '/about' 
                    ? 'text-primary' 
                    : 'text-gray-800 hover:text-primary font-light'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.about')}
              </a>
              <a
                href="/contact"
                className={`text-left transition-colors py-3 text-lg font-medium ${
                  location.pathname === '/contact' 
                    ? 'text-primary' 
                    : 'text-gray-800 hover:text-primary font-light'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.contact')}
              </a>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
