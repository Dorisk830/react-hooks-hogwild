import React, { useState } from "react";
import HogDetails from "./HogDetails";

const HogTile = ({ hog, onHideClick }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleTileClick = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div className="ui eight wide column pigTile" onClick={handleTileClick}>
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
          {showDetails && <HogDetails hog={hog} onClose={() => setShowDetails(false)} />}
          <button className="ui button" onClick={() => onHideClick(hog)}>
            Hide Hog
          </button>
        </div>
      </div>
    </div>
  );
};

export default HogTile;
