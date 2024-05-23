import React, { useState } from "react";
import Clocks from "./Clocks.js";
import SetDeadline from "./SetDeadline.js";

export const Habbits = () => {
  const [availableHabbits, setAvailableHabbits] = useState([
    "SMOKING",
    "PORN",
    "SCROLLING",
    "SNUS",
    "IRREGULAR SLEEPING",
  ]);
  const [selectedHabbits, setSelectedHabbits] = useState([]);
  const [initialDuration, setInitialDuration] = useState(0); // Initial duration in seconds

  const handleItemClick = (habbit) => {
    setAvailableHabbits(availableHabbits.filter((item) => item !== habbit));
    setSelectedHabbits([...selectedHabbits, habbit]);
  };

  const handleAdjustTime = (duration) => {
    setInitialDuration(duration);
  };

  return (
    <div>
      <h4 className="choose-habbits">
        CHOOSE ONE(!) HABBIT, THAT IS NEGATIVELY AFFECTING YOUR LIFE
      </h4>
      <ul className="list-of-habbits">
        {availableHabbits.map((habbit) => (
          <li key={habbit} onClick={() => handleItemClick(habbit)}>
            {habbit}
          </li>
        ))}
      </ul>
      <h4 className="bad-habbits-to-work-on">BAD HABBIT TO WORK ON</h4>
      <ul className="list-of-selected-habbits">
        {selectedHabbits.map((habbit) => (
          <li key={habbit}>
            {habbit}
            <Clocks initialDuration={initialDuration} />
            <SetDeadline onAdjust={handleAdjustTime} />
          </li>
        ))}
      </ul>
    </div>
  );
};