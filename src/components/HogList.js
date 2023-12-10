import React from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs, onHogClick, onHideClick, filterGreased, sortOption }) => {
  const getFilteredAndSortedHogs = () => {
    let filteredHogs = hogs;

    // Filtering
    if (filterGreased) {
      filteredHogs = hogs.filter((hog) => hog.greased);
    }

    // Sorting
    if (sortOption === "name") {
      filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "weight") {
      filteredHogs.sort((a, b) => a.weight - b.weight);
    }

    return filteredHogs;
  };

  return (
    <div className="ui grid container">
      {getFilteredAndSortedHogs().map((hog) => (
        <HogTile key={hog.name} hog={hog} onHogClick={onHogClick} onHideClick={onHideClick} />
      ))}
    </div>
  );
};

export default HogList;
