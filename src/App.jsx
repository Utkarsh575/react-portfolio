import React from "react";
import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px");

  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
