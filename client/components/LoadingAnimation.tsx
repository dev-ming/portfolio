import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LOADING_SHOWN_KEY = "portfolio-loading-shown";

export default function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(
    () => sessionStorage.getItem(LOADING_SHOWN_KEY) !== "true",
  );
  const { t } = useTranslation();

  useEffect(() => {
    if (!isVisible) return;

    sessionStorage.setItem(LOADING_SHOWN_KEY, "true");
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* 고양이 로딩 애니메이션 */}
        <div className="relative mb-8">
          <div className="relative mx-auto mb-4 flex h-20 min-w-20 items-center justify-center">
            <span
              role="img"
              aria-label={t("loading.title")}
              className="animate-bounce whitespace-nowrap font-mono text-4xl font-semibold tracking-[-0.08em] text-pink-500"
            >
              {"/ᐠ.ꞈ.ᐟ\\"}
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 로딩 텍스트 */}
        <div className="space-y-2">
          <h2 className="text-2xl text-gray-800">{t("loading.title")}</h2>
          <p className="text-gray-600 font-light">{t("loading.description")}</p>
        </div>
        
        {/* 로딩 바 */}
        <div className="w-64 h-1 bg-gray-200 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
