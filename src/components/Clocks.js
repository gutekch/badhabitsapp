import React, { useState, useEffect } from "react";

const Clocks = ({ initialDuration }) => {
  const [seconds, setSeconds] = useState(initialDuration);

  useEffect(() => {
    if (seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  const formatTime = (time) => {
    // Convert seconds to minutes and seconds
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const remainingSeconds = time % 60;

    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>Elapsed Time: {formatTime(seconds)}</p>
    </div>
  );
};

export default Clocks;
