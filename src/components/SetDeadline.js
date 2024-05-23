import React, { useState } from "react";

const SetDeadline = ({ onAdjust }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [showAdjuster, setShowAdjuster] = useState(true);

  const handleAdjustTime = () => {
    const totalSeconds = days * 24 * 3600 + hours * 3600 + minutes * 60;
    onAdjust(totalSeconds);
    setShowAdjuster(false); // Hide TimeAdjuster after setting time
  };

  return (
    <>
      {showAdjuster && (
        <div>
          <div>
            <label htmlFor="days">Days:</label>
            <input type="number" id="days" value={days} onChange={(e) => setDays(parseInt(e.target.value, 10))} />
          </div>
          <div>
            <label htmlFor="hours">Hours:</label>
            <input type="number" id="hours" value={hours} onChange={(e) => setHours(parseInt(e.target.value, 10))} />
          </div>
          <div>
            <label htmlFor="minutes">Minutes:</label>
            <input type="number" id="minutes" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value, 10))} />
          </div>
          <button onClick={handleAdjustTime}>Adjust Time</button>
        </div>
      )}
    </>
  );
};


export default SetDeadline;
