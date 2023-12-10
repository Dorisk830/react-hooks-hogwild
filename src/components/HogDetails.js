import React from "react";

const HogDetails = ({ hog, onClose }) => {
  return (
    <div className="ui segment hog-details">
      <h3>{hog.name}</h3>
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight} pounds</p>
      <p>Greased: {hog.greased ? "Yes" : "No"}</p>
      <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
      <button className="ui button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default HogDetails;
