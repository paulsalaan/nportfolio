import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/logo.png";

interface LoadingScreenProps {
  isVisible: boolean;
  onDone?: () => void; // optional: notify when animation is fully complete
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible, onDone }) => {
  const [blinkNow, setBlinkNow] = useState(false);

  useEffect(() => {
    let blinkTimeout: NodeJS.Timeout;
    if (blinkNow) {
      // After blink ends, you can optionally trigger `onDone`
      blinkTimeout = setTimeout(() => {
        onDone?.();
      }, 1.5 * 5 * 1000); // 1.5s * 5 blinks = 7.5s
    }
    return () => clearTimeout(blinkTimeout);
  }, [blinkNow, onDone]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-vanilla">
          {/* Inline style for blink */}
          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.4; }
            }
            .blinking {
              animation: blink 1.5s ease-in-out 5;
            }
          `}</style>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            onAnimationComplete={() => setBlinkNow(true)} // trigger blink after slide-in
            className={`flex flex-row items-center justify-center gap-8 ${
              blinkNow ? "blinking" : ""
            }`}
          >
            <img
              src={Logo}
              alt="logo_image"
              className="size-30 md:size-33 lg:size-36 object-contain"
            />
            <p className="hidden uppercase md:block text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-medium text-darkcement">
              NIÑO SALAAN
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
