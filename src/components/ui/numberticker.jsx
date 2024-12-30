"use client";
import React, { useEffect, useState } from "react";

const NumberTicker = ({ targetNumber, duration = 2000, className = "" }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(targetNumber / (duration / 50));
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCurrentNumber(targetNumber);
        clearInterval(timer);
      } else {
        setCurrentNumber(current);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <span className={className}>{currentNumber}</span>;
};

export default NumberTicker;
