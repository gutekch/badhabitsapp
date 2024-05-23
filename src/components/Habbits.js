import React, { useState } from "react";
import smokingIcon from "./icons/smoking-icon.png";

export const Habbits = () => {
  const [availableHabbits, setAvailableHabbits] = useState([
    "SMOKING",
    "PORN",
    "SCROLLING",
    "SNUS",
    "IRREGULAR SLEEPING",
  ]);
  const [selectedHabbits, setSelectedHabbits] = useState([]);
  const handleItemClick = (habbit) => {
    setAvailableHabbits(availableHabbits.filter((item) => item !== habbit));
    setSelectedHabbits([...selectedHabbits, habbit]);
  };
  return (
    <div>
      <h4 className="choose-habbits">
        CHOOSE ACTIVITIES, THAT ARE NEGATIVELY AFFECTING YOUR LIFE
      </h4>
      <ul className="list-of-habbits">
        {availableHabbits.map((habbit) => (
          <li key={habbit} onClick={() => handleItemClick(habbit)}>
            {habbit}
          </li>
        ))}
      </ul>
      <h4 className="bad-habbits-to-work-on">BAD HABBITS TO WORK ON</h4>
      <ul className="list-of-selected-habbits">
        {selectedHabbits.map((habbit) => (
          <li key={habbit}>{habbit}</li>
        ))}
      </ul>

      {/* <li id="smoking">SMOKING</li>
        <li id="porn">PORN</li>
        <li id="scrolling">SCROLLING</li>
        <li id="snus">SNUS</li>
        <li id="irregular sleeping">IRREGULAR SLEEPING</li> */}
    </div>
  );
};
