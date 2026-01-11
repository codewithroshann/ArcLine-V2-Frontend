import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo/logo-black.png";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PreLoader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [visibility, setVisiblity] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    setVisiblity(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 300);
          return 100;
        }
        // Smooth acceleration curve
        const increment = prev < 60 ? 2 : prev < 90 ? 1 : 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
    setVisiblity(false);
  }, []);

  useEffect(() => {
    if (isComplete && onLoadingComplete) {
      setTimeout(() => onLoadingComplete(), 800);
    }
  }, [isComplete, onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "h-screen w-full bg-secondary fixed z-[100] inset-0 overflow-hidden",
            visibility && "p-5"
          )}
        >
          {/* Animated background container */}
          <motion.div
            initial={{ scale: 1, borderRadius: 10 }}
            animate={
              progress === 100
                ? {
                    scale: 0.95,
                    borderRadius: 24,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className={cn(
              "bg-white w-full h-full rounded-lg flex flex-col items-center justify-center gap-8 p-5 md:p-10 "
            )}
          >
            {/* Logo with stagger animation */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="relative"
            >
              {/* Logo glow effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 blur-xl bg-secondary/20 rounded-full"
              />
              <img
                src={Logo}
                alt="logo"
                width={150}
                height={150}
                className="relative z-10"
              />
            </motion.div>

            {/* Progress bar container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="w-full max-w-xs space-y-3"
            >
              {/* Progress bar */}
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                {/* Shimmer effect background */}
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                  }}
                />

                {/* Main progress bar */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="h-full relative overflow-hidden bg-secondary"
                >
                  {/* Glossy overlay */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 w-1/2"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-between text-sm"
              >
                <motion.span
                  key={progress}
                  initial={{ opacity: 1, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-semibold text-gray-700  font-zalando"
                >
                  {Math.floor(progress)}%
                </motion.span>
                <motion.span
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-gray-500 text-xs font-zalando font-semibold"
                >
                  Loading...
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 bg-secondary rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Exit curtain effect */}
          {progress === 100 && (
            <>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className="absolute top-0 left-0 right-0 h-1/2 bg-secondary origin-top"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-secondary origin-bottom"
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
