import { useState, useEffect } from "react";

const LOADING_SHOWN_KEY = "portfolio-loading-shown";

export default function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(
    () => sessionStorage.getItem(LOADING_SHOWN_KEY) !== "true",
  );

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white px-4">
      <pre
        role="status"
        aria-label="Loading"
        className="animate-pulse overflow-visible whitespace-pre text-center font-mono text-[12px] leading-[1.9] tracking-[-0.04em] text-pink-500 sm:text-sm md:text-base"
      >
        {`
˚ 　   ✧　   .   ♡     　　 .   ⊹
   ♡    ⊹ ·  　✧     *     . 　    .  ˚
    · 　    　  *     .   　  ♡   ⊹
 *  .  ✧    ♡  LOADING  ✦    .   ˚
   　⊹　   ˚ 　.　  ♡      * ·
⊹       ⋆   ✧    .   ♡   　 ✧ 　　 *   ˚
 * 　　·   *    ⊹  .  ✧   ˚   .    ♡

`}
      </pre>
    </div>
  );
}
