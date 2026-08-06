import { useEffect, useState } from 'react';

/**
 * Loading screen shown on initial app load.
 *
 * GIF location:
 * public/Loading_Gif/sign1.gif
 */
export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFading(true), 1400);
    const hideTimer = setTimeout(() => setVisible(false), 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white dark:bg-gray-950 flex items-center justify-center transition-opacity duration-400 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src="/Loading_Gif/sign1.gif"
        alt="Loading"
        className="w-40 h-auto object-contain select-none pointer-events-none"
        draggable={false}
      />
    </div>
  );
}