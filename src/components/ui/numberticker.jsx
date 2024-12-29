"use client";
import React, { useEffect, useState } from "react";

const NumberTicker = ({
  targetNumber,
  duration = 2000,
  className = "",
  loop = true, // Enable looping
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let interval;
    let current = 0;
    const increment = Math.ceil(targetNumber / (duration / 50));

    const startTicker = () => {
      interval = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          if (loop) {
            current = 0; // Reset to 0 for looping
          } else {
            setCurrentNumber(targetNumber);
            clearInterval(interval);
            return;
          }
        }
        setCurrentNumber(current);
      }, 50);
    };

    startTicker();

    return () => clearInterval(interval);
  }, [targetNumber, duration, loop]);

  return <span className={className}>{currentNumber}</span>;
};

export default NumberTicker;
