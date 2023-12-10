import React from "react";

const Nav = ({ onToggleGreased, onSortChange, filterGreased }) => {
  return (
    <div className="navWrapper">
      <button className="ui button" onClick={onToggleGreased}>
        {filterGreased ? "Show All Hogs" : "Show Greased Hogs"}
      </button>
      <div className="ui selection dropdown">
        <select className="ui dropdown" onChange={(e) => onSortChange(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="weight">Sort by Weight</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;
