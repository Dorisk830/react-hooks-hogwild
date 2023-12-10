import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogDetails from "./HogDetails";
import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [selectedHog, setSelectedHog] = useState(null);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortOption, setSortOption] = useState("name"); // Default sort by name

  const handleHogClick = (hog) => {
    setSelectedHog(hog);
  };

  const handleHideClick = (hog) => {
    setHogs((prevHogs) => prevHogs.filter((h) => h !== hog));
  };

  return (
    <div className="App">
      <Nav
        onToggleGreased={() => setFilterGreased((prevFilterGreased) => !prevFilterGreased)}
        onSortChange={(option) => setSortOption(option)}
        filterGreased={filterGreased}
      />
      <HogList
        hogs={hogs}
        onHogClick={handleHogClick}
        onHideClick={handleHideClick}
        filterGreased={filterGreased}
        sortOption={sortOption}
      />
      {selectedHog && <HogDetails hog={selectedHog} onClose={() => setSelectedHog(null)} />}
    </div>
  );
}

export default App;
