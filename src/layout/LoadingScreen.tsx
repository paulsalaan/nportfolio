import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/favicon.png";

interface LoadingScreenProps {
  isVisible: boolean;
  onDone?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible, onDone }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isAnimating && onDone) {
      timeout = setTimeout(onDone, 500); // allow fade out to finish
    }
    return () => clearTimeout(timeout);
  }, [isAnimating, onDone]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: isAnimating ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src={Logo}
            alt="logo_image"
            className="size-36 object-contain"
            initial={{ rotate: 0 }}
            animate={{ rotate: 720 }} // 2 full spins
            transition={{ duration: 2.5, ease: "easeInOut" }}
            onAnimationComplete={() => setIsAnimating(false)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
